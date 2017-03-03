/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(bh, am, a2, B) {
    var u = ["", "webkit", "Moz", "MS", "ms", "o"];
    var E = am.createElement("div");
    var Z = "function";
    var T = Math.round;
    var aj = Math.abs;
    var bj = Date.now;

    function k(bA, bB, bz) { return setTimeout(J(bA, bz), bB) }

    function ad(bz, bB, bA) { if (Array.isArray(bz)) { bw(bz, bA[bB], bA); return true } return false }

    function bw(bC, bB, bA) {
        var bz;
        if (!bC) { return }
        if (bC.forEach) { bC.forEach(bB, bA) } else {
            if (bC.length !== B) {
                bz = 0;
                while (bz < bC.length) {
                    bB.call(bA, bC[bz], bz, bC);
                    bz++
                }
            } else { for (bz in bC) { bC.hasOwnProperty(bz) && bB.call(bA, bC[bz], bz, bC) } }
        }
    }

    function bs(bC, bz, bB) { var bA = "DEPRECATED METHOD: " + bz + "\n" + bB + " AT \n"; return function() { var bF = new Error("get-stack-trace"); var bD = bF && bF.stack ? bF.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"; var bE = bh.console && (bh.console.warn || bh.console.log); if (bE) { bE.call(bh.console, bA, bD) } return bC.apply(this, arguments) } }
    var be;
    if (typeof Object.assign !== "function") { be = function be(bD) { if (bD === B || bD === null) { throw new TypeError("Cannot convert undefined or null to object") } var bA = Object(bD); for (var bB = 1; bB < arguments.length; bB++) { var bC = arguments[bB]; if (bC !== B && bC !== null) { for (var bz in bC) { if (bC.hasOwnProperty(bz)) { bA[bz] = bC[bz] } } } } return bA } } else { be = Object.assign }
    var aL = bs(function aL(bz, bC, bD) {
        var bB = Object.keys(bC);
        var bA = 0;
        while (bA < bB.length) {
            if (!bD || (bD && bz[bB[bA]] === B)) { bz[bB[bA]] = bC[bB[bA]] }
            bA++
        }
        return bz
    }, "extend", "Use `assign`.");
    var G = bs(function G(bz, bA) { return aL(bz, bA, true) }, "merge", "Use `assign`.");

    function H(bD, bB, bA) {
        var bz = bB.prototype,
            bC;
        bC = bD.prototype = Object.create(bz);
        bC.constructor = bD;
        bC._super = bz;
        if (bA) { be(bC, bA) }
    }

    function J(bB, bz) { return function bA() { return bB.apply(bz, arguments) } }

    function ao(bA, bz) { if (typeof bA == Z) { return bA.apply(bz ? bz[0] || B : B, bz) } return bA }

    function aJ(bA, bz) { return (bA === B) ? bz : bA }

    function aK(bB, bz, bA) { bw(aX(bz), function(bC) { bB.addEventListener(bC, bA, false) }) }

    function O(bB, bz, bA) { bw(aX(bz), function(bC) { bB.removeEventListener(bC, bA, false) }) }

    function n(bA, bz) {
        while (bA) {
            if (bA == bz) { return true }
            bA = bA.parentNode
        }
        return false
    }

    function j(bA, bz) { return bA.indexOf(bz) > -1 }

    function aX(bz) { return bz.trim().split(/\s+/g) }

    function A(bC, bB, bA) {
        if (bC.indexOf && !bA) { return bC.indexOf(bB) } else {
            var bz = 0;
            while (bz < bC.length) {
                if ((bA && bC[bz][bA] == bB) || (!bA && bC[bz] === bB)) { return bz }
                bz++
            }
            return -1
        }
    }

    function aa(bz) { return Array.prototype.slice.call(bz, 0) }

    function bl(bG, bD, bC) {
        var bB = [];
        var bz = [];
        var bA = 0;
        while (bA < bG.length) {
            var bF = bD ? bG[bA][bD] : bG[bA];
            if (A(bz, bF) < 0) { bB.push(bG[bA]) }
            bz[bA] = bF;
            bA++
        }
        if (bC) { if (!bD) { bB = bB.sort() } else { bB = bB.sort(function bE(bI, bH) { return bI[bD] > bH[bD] }) } }
        return bB
    }

    function at(bD, bC) {
        var bB, bE;
        var bz = bC[0].toUpperCase() + bC.slice(1);
        var bA = 0;
        while (bA < u.length) {
            bB = u[bA];
            bE = (bB) ? bB + bz : bC;
            if (bE in bD) { return bE }
            bA++
        }
        return B
    }
    var t = 1;

    function aM() { return t++ }

    function L(bz) { var bA = bz.ownerDocument || bz; return (bA.defaultView || bA.parentWindow || bh) }
    var v = /mobile|tablet|ip(ad|hone|od)|android/i;
    var b = ("ontouchstart" in bh);
    var ai = at(bh, "PointerEvent") !== B;
    var aD = b && v.test(navigator.userAgent);
    var aH = "touch";
    var q = "pen";
    var Q = "mouse";
    var U = "kinect";
    var bq = 25;
    var ba = 1;
    var a6 = 2;
    var g = 4;
    var w = 8;
    var aC = 1;
    var l = 2;
    var C = 4;
    var ah = 8;
    var a7 = 16;
    var bm = l | C;
    var aB = ah | a7;
    var P = bm | aB;
    var ak = ["x", "y"];
    var ar = ["clientX", "clientY"];

    function a(bA, bB) {
        var bz = this;
        this.manager = bA;
        this.callback = bB;
        this.element = bA.element;
        this.target = bA.options.inputTarget;
        this.domHandler = function(bC) { if (ao(bA.options.enable, [bA])) { bz.handler(bC) } };
        this.init()
    }
    a.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && aK(this.element, this.evEl, this.domHandler);
            this.evTarget && aK(this.target, this.evTarget, this.domHandler);
            this.evWin && aK(L(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && O(this.element, this.evEl, this.domHandler);
            this.evTarget && O(this.target, this.evTarget, this.domHandler);
            this.evWin && O(L(this.element), this.evWin, this.domHandler)
        }
    };

    function y(bB) { var bA; var bz = bB.options.inputClass; if (bz) { bA = bz } else { if (ai) { bA = aS } else { if (aD) { bA = az } else { if (!b) { bA = aA } else { bA = bo } } } } return new(bA)(bB, ay) }

    function ay(bE, bD, bB) {
        var bA = bB.pointers.length;
        var bC = bB.changedPointers.length;
        var bz = (bD & ba && (bA - bC === 0));
        var bF = (bD & (g | w) && (bA - bC === 0));
        bB.isFirst = !!bz;
        bB.isFinal = !!bF;
        if (bz) { bE.session = {} }
        bB.eventType = bD;
        bb(bE, bB);
        bE.emit("hammer.input", bB);
        bE.recognize(bB);
        bE.session.prevInput = bB
    }

    function bb(bD, bI) {
        var bG = bD.session;
        var bJ = bI.pointers;
        var bH = bJ.length;
        if (!bG.firstInput) { bG.firstInput = o(bI) }
        if (bH > 1 && !bG.firstMultiple) { bG.firstMultiple = o(bI) } else { if (bH === 1) { bG.firstMultiple = false } }
        var bB = bG.firstInput;
        var bE = bG.firstMultiple;
        var bA = bE ? bE.center : bB.center;
        var bz = bI.center = S(bJ);
        bI.timeStamp = bj();
        bI.deltaTime = bI.timeStamp - bB.timeStamp;
        bI.angle = av(bA, bz);
        bI.distance = br(bA, bz);
        ax(bG, bI);
        bI.offsetDirection = aP(bI.deltaX, bI.deltaY);
        var bC = W(bI.deltaTime, bI.deltaX, bI.deltaY);
        bI.overallVelocityX = bC.x;
        bI.overallVelocityY = bC.y;
        bI.overallVelocity = (aj(bC.x) > aj(bC.y)) ? bC.x : bC.y;
        bI.scale = bE ? e(bE.pointers, bJ) : 1;
        bI.rotation = bE ? bk(bE.pointers, bJ) : 0;
        bI.maxPointers = !bG.prevInput ? bI.pointers.length : ((bI.pointers.length > bG.prevInput.maxPointers) ? bI.pointers.length : bG.prevInput.maxPointers);
        ab(bG, bI);
        var bF = bD.element;
        if (n(bI.srcEvent.target, bF)) { bF = bI.srcEvent.target }
        bI.target = bF
    }

    function ax(bD, bB) {
        var bA = bB.center;
        var bE = bD.offsetDelta || {};
        var bz = bD.prevDelta || {};
        var bC = bD.prevInput || {};
        if (bB.eventType === ba || bC.eventType === g) {
            bz = bD.prevDelta = { x: bC.deltaX || 0, y: bC.deltaY || 0 };
            bE = bD.offsetDelta = { x: bA.x, y: bA.y }
        }
        bB.deltaX = bz.x + (bA.x - bE.x);
        bB.deltaY = bz.y + (bA.y - bE.y)
    }

    function ab(bD, bG) {
        var bJ = bD.lastInterval || bG,
            bC = bG.timeStamp - bJ.timeStamp,
            bA, bH, bE, bF;
        if (bG.eventType != w && (bC > bq || bJ.velocity === B)) {
            var bB = bG.deltaX - bJ.deltaX;
            var bz = bG.deltaY - bJ.deltaY;
            var bI = W(bC, bB, bz);
            bH = bI.x;
            bE = bI.y;
            bA = (aj(bI.x) > aj(bI.y)) ? bI.x : bI.y;
            bF = aP(bB, bz);
            bD.lastInterval = bG
        } else {
            bA = bJ.velocity;
            bH = bJ.velocityX;
            bE = bJ.velocityY;
            bF = bJ.direction
        }
        bG.velocity = bA;
        bG.velocityX = bH;
        bG.velocityY = bE;
        bG.direction = bF
    }

    function o(bA) {
        var bz = [];
        var bB = 0;
        while (bB < bA.pointers.length) {
            bz[bB] = { clientX: T(bA.pointers[bB].clientX), clientY: T(bA.pointers[bB].clientY) };
            bB++
        }
        return { timeStamp: bj(), pointers: bz, center: S(bz), deltaX: bA.deltaX, deltaY: bA.deltaY }
    }

    function S(bB) {
        var bA = bB.length;
        if (bA === 1) { return { x: T(bB[0].clientX), y: T(bB[0].clientY) } }
        var bz = 0,
            bD = 0,
            bC = 0;
        while (bC < bA) {
            bz += bB[bC].clientX;
            bD += bB[bC].clientY;
            bC++
        }
        return { x: T(bz / bA), y: T(bD / bA) }
    }

    function W(bA, bz, bB) { return { x: bz / bA || 0, y: bB / bA || 0 } }

    function aP(bz, bA) { if (bz === bA) { return aC } if (aj(bz) >= aj(bA)) { return bz < 0 ? l : C } return bA < 0 ? ah : a7 }

    function br(bC, bB, bA) {
        if (!bA) { bA = ak }
        var bz = bB[bA[0]] - bC[bA[0]],
            bD = bB[bA[1]] - bC[bA[1]];
        return Math.sqrt((bz * bz) + (bD * bD))
    }

    function av(bC, bB, bA) {
        if (!bA) { bA = ak }
        var bz = bB[bA[0]] - bC[bA[0]],
            bD = bB[bA[1]] - bC[bA[1]];
        return Math.atan2(bD, bz) * 180 / Math.PI
    }

    function bk(bA, bz) { return av(bz[1], bz[0], ar) + av(bA[1], bA[0], ar) }

    function e(bA, bz) { return br(bz[0], bz[1], ar) / br(bA[0], bA[1], ar) }
    var aY = { mousedown: ba, mousemove: a6, mouseup: g };
    var D = "mousedown";
    var x = "mousemove mouseup";

    function aA() {
        this.evEl = D;
        this.evWin = x;
        this.pressed = false;
        a.apply(this, arguments)
    }
    H(aA, a, {
        handler: function V(bA) {
            var bz = aY[bA.type];
            if (bz & ba && bA.button === 0) { this.pressed = true }
            if (bz & a6 && bA.which !== 1) { bz = g }
            if (!this.pressed) { return }
            if (bz & g) { this.pressed = false }
            this.callback(this.manager, bz, { pointers: [bA], changedPointers: [bA], pointerType: Q, srcEvent: bA })
        }
    });
    var aN = { pointerdown: ba, pointermove: a6, pointerup: g, pointercancel: w, pointerout: w };
    var I = { 2: aH, 3: q, 4: Q, 5: U };
    var bg = "pointerdown";
    var h = "pointermove pointerup pointercancel";
    if (bh.MSPointerEvent && !bh.PointerEvent) {
        bg = "MSPointerDown";
        h = "MSPointerMove MSPointerUp MSPointerCancel"
    }

    function aS() {
        this.evEl = bg;
        this.evWin = h;
        a.apply(this, arguments);
        this.store = (this.manager.session.pointerEvents = [])
    }
    H(aS, a, {
        handler: function a9(bE) {
            var bC = this.store;
            var bG = false;
            var bB = bE.type.toLowerCase().replace("ms", "");
            var bD = aN[bB];
            var bz = I[bE.pointerType] || bE.pointerType;
            var bA = (bz == aH);
            var bF = A(bC, bE.pointerId, "pointerId");
            if (bD & ba && (bE.button === 0 || bA)) {
                if (bF < 0) {
                    bC.push(bE);
                    bF = bC.length - 1
                }
            } else { if (bD & (g | w)) { bG = true } }
            if (bF < 0) { return }
            bC[bF] = bE;
            this.callback(this.manager, bD, { pointers: bC, changedPointers: [bE], pointerType: bz, srcEvent: bE });
            if (bG) { bC.splice(bF, 1) }
        }
    });
    var an = { touchstart: ba, touchmove: a6, touchend: g, touchcancel: w };
    var aQ = "touchstart";
    var aU = "touchstart touchmove touchend touchcancel";

    function z() {
        this.evTarget = aQ;
        this.evWin = aU;
        this.started = false;
        a.apply(this, arguments)
    }
    H(z, a, {
        handler: function aR(bA) {
            var bz = an[bA.type];
            if (bz === ba) { this.started = true }
            if (!this.started) { return }
            var bB = c.call(this, bA, bz);
            if (bz & (g | w) && bB[0].length - bB[1].length === 0) { this.started = false }
            this.callback(this.manager, bz, { pointers: bB[0], changedPointers: bB[1], pointerType: aH, srcEvent: bA })
        }
    });

    function c(bB, bA) { var bz = aa(bB.touches); var bC = aa(bB.changedTouches); if (bA & (g | w)) { bz = bl(bz.concat(bC), "identifier", true) } return [bz, bC] }
    var aV = { touchstart: ba, touchmove: a6, touchend: g, touchcancel: w };
    var aF = "touchstart touchmove touchend touchcancel";

    function az() {
        this.evTarget = aF;
        this.targetIds = {};
        a.apply(this, arguments)
    }
    H(az, a, {
        handler: function Y(bA) {
            var bz = aV[bA.type];
            var bB = aG.call(this, bA, bz);
            if (!bB) { return }
            this.callback(this.manager, bz, { pointers: bB[0], changedPointers: bB[1], pointerType: aH, srcEvent: bA })
        }
    });

    function aG(bF, bE) {
        var bA = aa(bF.touches);
        var bz = this.targetIds;
        if (bE & (ba | a6) && bA.length === 1) { bz[bA[0].identifier] = true; return [bA, bA] }
        var bB, bD, bG = aa(bF.changedTouches),
            bH = [],
            bC = this.target;
        bD = bA.filter(function(bI) { return n(bI.target, bC) });
        if (bE === ba) {
            bB = 0;
            while (bB < bD.length) {
                bz[bD[bB].identifier] = true;
                bB++
            }
        }
        bB = 0;
        while (bB < bG.length) {
            if (bz[bG[bB].identifier]) { bH.push(bG[bB]) }
            if (bE & (g | w)) { delete bz[bG[bB].identifier] }
            bB++
        }
        if (!bH.length) { return }
        return [bl(bD.concat(bH), "identifier", true), bH]
    }
    var F = 2500;
    var f = 25;

    function bo() {
        a.apply(this, arguments);
        var bz = J(this.handler, this);
        this.touch = new az(this.manager, bz);
        this.mouse = new aA(this.manager, bz);
        this.primaryTouch = null;
        this.lastTouches = []
    }
    H(bo, a, {
        handler: function a8(bA, bD, bC) {
            var bz = (bC.pointerType == aH),
                bB = (bC.pointerType == Q);
            if (bB && bC.sourceCapabilities && bC.sourceCapabilities.firesTouchEvents) { return }
            if (bz) { bc.call(this, bD, bC) } else { if (bB && X.call(this, bC)) { return } }
            this.callback(bA, bD, bC)
        },
        destroy: function m() {
            this.touch.destroy();
            this.mouse.destroy()
        }
    });

    function bc(bz, bA) {
        if (bz & ba) {
            this.primaryTouch = bA.changedPointers[0].identifier;
            by.call(this, bA)
        } else { if (bz & (g | w)) { by.call(this, bA) } }
    }

    function by(bC) {
        var bD = bC.changedPointers[0];
        if (bD.identifier === this.primaryTouch) {
            var bB = { x: bD.clientX, y: bD.clientY };
            this.lastTouches.push(bB);
            var bz = this.lastTouches;
            var bA = function() { var bE = bz.indexOf(bB); if (bE > -1) { bz.splice(bE, 1) } };
            setTimeout(bA, F)
        }
    }

    function X(bE) {
        var bz = bE.srcEvent.clientX,
            bF = bE.srcEvent.clientY;
        for (var bD = 0; bD < this.lastTouches.length; bD++) {
            var bC = this.lastTouches[bD];
            var bB = Math.abs(bz - bC.x),
                bA = Math.abs(bF - bC.y);
            if (bB <= f && bA <= f) { return true }
        }
        return false
    }
    var au = at(E.style, "touchAction");
    var bu = au !== B;
    var bv = "compute";
    var ap = "auto";
    var bp = "manipulation";
    var i = "none";
    var a4 = "pan-x";
    var a3 = "pan-y";
    var ag = bi();

    function bt(bz, bA) {
        this.manager = bz;
        this.set(bA)
    }
    bt.prototype = {
        set: function(bz) {
            if (bz == bv) { bz = this.compute() }
            if (bu && this.manager.element.style && ag[bz]) { this.manager.element.style[au] = bz }
            this.actions = bz.toLowerCase().trim()
        },
        update: function() { this.set(this.manager.options.touchAction) },
        compute: function() {
            var bz = [];
            bw(this.manager.recognizers, function(bA) { if (ao(bA.options.enable, [bA])) { bz = bz.concat(bA.getTouchAction()) } });
            return bx(bz.join(" "))
        },
        preventDefaults: function(bI) { var bD = bI.srcEvent; var bH = bI.offsetDirection; if (this.manager.session.prevented) { bD.preventDefault(); return } var bE = this.actions; var bB = j(bE, i) && !ag[i]; var bA = j(bE, a3) && !ag[a3]; var bC = j(bE, a4) && !ag[a4]; if (bB) { var bz = bI.pointers.length === 1; var bG = bI.distance < 2; var bF = bI.deltaTime < 250; if (bz && bG && bF) { return } } if (bC && bA) { return } if (bB || (bA && bH & bm) || (bC && bH & aB)) { return this.preventSrc(bD) } },
        preventSrc: function(bz) {
            this.manager.session.prevented = true;
            bz.preventDefault()
        }
    };

    function bx(bB) { if (j(bB, i)) { return i } var bA = j(bB, a4); var bz = j(bB, a3); if (bA && bz) { return i } if (bA || bz) { return bA ? a4 : a3 } if (j(bB, bp)) { return bp } return ap }

    function bi() {
        if (!bu) { return false }
        var bz = {};
        var bA = bh.CSS && bh.CSS.supports;
        ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(bB) { bz[bB] = bA ? bh.CSS.supports("touch-action", bB) : true });
        return bz
    }
    var ae = 1;
    var aq = 2;
    var al = 4;
    var aT = 8;
    var s = aT;
    var N = 16;
    var aO = 32;

    function M(bz) {
        this.options = be({}, this.defaults, bz || {});
        this.id = aM();
        this.manager = null;
        this.options.enable = aJ(this.options.enable, true);
        this.state = ae;
        this.simultaneous = {};
        this.requireFail = []
    }
    M.prototype = {
        defaults: {},
        set: function(bz) {
            be(this.options, bz);
            this.manager && this.manager.touchAction.update();
            return this
        },
        recognizeWith: function(bz) {
            if (ad(bz, "recognizeWith", this)) { return this }
            var bA = this.simultaneous;
            bz = af(bz, this);
            if (!bA[bz.id]) {
                bA[bz.id] = bz;
                bz.recognizeWith(this)
            }
            return this
        },
        dropRecognizeWith: function(bz) {
            if (ad(bz, "dropRecognizeWith", this)) { return this }
            bz = af(bz, this);
            delete this.simultaneous[bz.id];
            return this
        },
        requireFailure: function(bz) {
            if (ad(bz, "requireFailure", this)) { return this }
            var bA = this.requireFail;
            bz = af(bz, this);
            if (A(bA, bz) === -1) {
                bA.push(bz);
                bz.requireFailure(this)
            }
            return this
        },
        dropRequireFailure: function(bA) {
            if (ad(bA, "dropRequireFailure", this)) { return this }
            bA = af(bA, this);
            var bz = A(this.requireFail, bA);
            if (bz > -1) { this.requireFail.splice(bz, 1) }
            return this
        },
        hasRequireFailures: function() { return this.requireFail.length > 0 },
        canRecognizeWith: function(bz) { return !!this.simultaneous[bz.id] },
        emit: function(bA) {
            var bz = this;
            var bC = this.state;

            function bB(bD) { bz.manager.emit(bD, bA) }
            if (bC < aT) { bB(bz.options.event + bf(bC)) }
            bB(bz.options.event);
            if (bA.additionalEvent) { bB(bA.additionalEvent) }
            if (bC >= aT) { bB(bz.options.event + bf(bC)) }
        },
        tryEmit: function(bz) {
            if (this.canEmit()) { return this.emit(bz) }
            this.state = aO
        },
        canEmit: function() {
            var bz = 0;
            while (bz < this.requireFail.length) {
                if (!(this.requireFail[bz].state & (aO | ae))) { return false }
                bz++
            }
            return true
        },
        recognize: function(bz) {
            var bA = be({}, bz);
            if (!ao(this.options.enable, [this, bA])) {
                this.reset();
                this.state = aO;
                return
            }
            if (this.state & (s | N | aO)) { this.state = ae }
            this.state = this.process(bA);
            if (this.state & (aq | al | aT | N)) { this.tryEmit(bA) }
        },
        process: function(bz) {},
        getTouchAction: function() {},
        reset: function() {}
    };

    function bf(bz) { if (bz & N) { return "cancel" } else { if (bz & aT) { return "end" } else { if (bz & al) { return "move" } else { if (bz & aq) { return "start" } } } } return "" }

    function a5(bz) { if (bz == a7) { return "down" } else { if (bz == ah) { return "up" } else { if (bz == l) { return "left" } else { if (bz == C) { return "right" } } } } return "" }

    function af(bB, bz) { var bA = bz.manager; if (bA) { return bA.get(bB) } return bB }

    function aE() { M.apply(this, arguments) }
    H(aE, M, { defaults: { pointers: 1 }, attrTest: function(bz) { var bA = this.options.pointers; return bA === 0 || bz.pointers.length === bA }, process: function(bA) { var bC = this.state; var bB = bA.eventType; var bz = bC & (aq | al); var bD = this.attrTest(bA); if (bz && (bB & w || !bD)) { return bC | N } else { if (bz || bD) { if (bB & g) { return bC | aT } else { if (!(bC & aq)) { return aq } } return bC | al } } return aO } });

    function r() {
        aE.apply(this, arguments);
        this.pX = null;
        this.pY = null
    }
    H(r, aE, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: P },
        getTouchAction: function() { var bz = this.options.direction; var bA = []; if (bz & bm) { bA.push(a3) } if (bz & aB) { bA.push(a4) } return bA },
        directionTest: function(bB) {
            var bC = this.options;
            var bA = true;
            var bF = bB.distance;
            var bD = bB.direction;
            var bz = bB.deltaX;
            var bE = bB.deltaY;
            if (!(bD & bC.direction)) {
                if (bC.direction & bm) {
                    bD = (bz === 0) ? aC : (bz < 0) ? l : C;
                    bA = bz != this.pX;
                    bF = Math.abs(bB.deltaX)
                } else {
                    bD = (bE === 0) ? aC : (bE < 0) ? ah : a7;
                    bA = bE != this.pY;
                    bF = Math.abs(bB.deltaY)
                }
            }
            bB.direction = bD;
            return bA && bF > bC.threshold && bD & bC.direction
        },
        attrTest: function(bz) { return aE.prototype.attrTest.call(this, bz) && (this.state & aq || (!(this.state & aq) && this.directionTest(bz))) },
        emit: function(bz) {
            this.pX = bz.deltaX;
            this.pY = bz.deltaY;
            var bA = a5(bz.direction);
            if (bA) { bz.additionalEvent = this.options.event + bA }
            this._super.emit.call(this, bz)
        }
    });

    function bd() { aE.apply(this, arguments) }
    H(bd, aE, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function() { return [i] },
        attrTest: function(bz) { return this._super.attrTest.call(this, bz) && (Math.abs(bz.scale - 1) > this.options.threshold || this.state & aq) },
        emit: function(bA) {
            if (bA.scale !== 1) {
                var bz = bA.scale < 1 ? "in" : "out";
                bA.additionalEvent = this.options.event + bz
            }
            this._super.emit.call(this, bA)
        }
    });

    function aW() {
        M.apply(this, arguments);
        this._timer = null;
        this._input = null
    }
    H(aW, M, {
        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
        getTouchAction: function() { return [ap] },
        process: function(bA) {
            var bB = this.options;
            var bD = bA.pointers.length === bB.pointers;
            var bz = bA.distance < bB.threshold;
            var bC = bA.deltaTime > bB.time;
            this._input = bA;
            if (!bz || !bD || (bA.eventType & (g | w) && !bC)) { this.reset() } else {
                if (bA.eventType & ba) {
                    this.reset();
                    this._timer = k(function() {
                        this.state = s;
                        this.tryEmit()
                    }, bB.time, this)
                } else { if (bA.eventType & g) { return s } }
            }
            return aO
        },
        reset: function() { clearTimeout(this._timer) },
        emit: function(bz) {
            if (this.state !== s) { return }
            if (bz && (bz.eventType & g)) { this.manager.emit(this.options.event + "up", bz) } else {
                this._input.timeStamp = bj();
                this.manager.emit(this.options.event, this._input)
            }
        }
    });

    function aI() { aE.apply(this, arguments) }
    H(aI, aE, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() { return [i] }, attrTest: function(bz) { return this._super.attrTest.call(this, bz) && (Math.abs(bz.rotation) > this.options.threshold || this.state & aq) } });

    function a0() { aE.apply(this, arguments) }
    H(a0, aE, {
        defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: bm | aB, pointers: 1 },
        getTouchAction: function() { return r.prototype.getTouchAction.call(this) },
        attrTest: function(bz) { var bB = this.options.direction; var bA; if (bB & (bm | aB)) { bA = bz.overallVelocity } else { if (bB & bm) { bA = bz.overallVelocityX } else { if (bB & aB) { bA = bz.overallVelocityY } } } return this._super.attrTest.call(this, bz) && bB & bz.offsetDirection && bz.distance > this.options.threshold && bz.maxPointers == this.options.pointers && aj(bA) > this.options.velocity && bz.eventType & g },
        emit: function(bz) {
            var bA = a5(bz.offsetDirection);
            if (bA) { this.manager.emit(this.options.event + bA, bz) }
            this.manager.emit(this.options.event, bz)
        }
    });

    function aw() {
        M.apply(this, arguments);
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0
    }
    H(aw, M, {
        defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
        getTouchAction: function() { return [bp] },
        process: function(bB) {
            var bD = this.options;
            var bG = bB.pointers.length === bD.pointers;
            var bA = bB.distance < bD.threshold;
            var bC = bB.deltaTime < bD.time;
            this.reset();
            if ((bB.eventType & ba) && (this.count === 0)) { return this.failTimeout() }
            if (bA && bC && bG) {
                if (bB.eventType != g) { return this.failTimeout() }
                var bF = this.pTime ? (bB.timeStamp - this.pTime < bD.interval) : true;
                var bE = !this.pCenter || br(this.pCenter, bB.center) < bD.posThreshold;
                this.pTime = bB.timeStamp;
                this.pCenter = bB.center;
                if (!bE || !bF) { this.count = 1 } else { this.count += 1 }
                this._input = bB;
                var bz = this.count % bD.taps;
                if (bz === 0) {
                    if (!this.hasRequireFailures()) { return s } else {
                        this._timer = k(function() {
                            this.state = s;
                            this.tryEmit()
                        }, bD.interval, this);
                        return aq
                    }
                }
            }
            return aO
        },
        failTimeout: function() { this._timer = k(function() { this.state = aO }, this.options.interval, this); return aO },
        reset: function() { clearTimeout(this._timer) },
        emit: function() {
            if (this.state == s) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input)
            }
        }
    });

    function R(bA, bz) {
        bz = bz || {};
        bz.recognizers = aJ(bz.recognizers, R.defaults.preset);
        return new bn(bA, bz)
    }
    R.VERSION = "2.0.8";
    R.defaults = {
        domEvents: false,
        touchAction: bv,
        enable: true,
        inputTarget: null,
        inputClass: null,
        preset: [
            [aI, { enable: false }],
            [bd, { enable: false },
                ["rotate"]
            ],
            [a0, { direction: bm }],
            [r, { direction: bm },
                ["swipe"]
            ],
            [aw],
            [aw, { event: "doubletap", taps: 2 },
                ["tap"]
            ],
            [aW]
        ],
        cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" }
    };
    var K = 1;
    var a1 = 2;

    function bn(bA, bz) {
        this.options = be({}, R.defaults, bz || {});
        this.options.inputTarget = this.options.inputTarget || bA;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = bA;
        this.input = y(this);
        this.touchAction = new bt(this, this.options.touchAction);
        ac(this, true);
        bw(this.options.recognizers, function(bC) {
            var bB = this.add(new(bC[0])(bC[1]));
            bC[2] && bB.recognizeWith(bC[2]);
            bC[3] && bB.requireFailure(bC[3])
        }, this)
    }
    bn.prototype = {
        set: function(bz) {
            be(this.options, bz);
            if (bz.touchAction) { this.touchAction.update() }
            if (bz.inputTarget) {
                this.input.destroy();
                this.input.target = bz.inputTarget;
                this.input.init()
            }
            return this
        },
        stop: function(bz) { this.session.stopped = bz ? a1 : K },
        recognize: function(bD) {
            var bE = this.session;
            if (bE.stopped) { return }
            this.touchAction.preventDefaults(bD);
            var bz;
            var bA = this.recognizers;
            var bC = bE.curRecognizer;
            if (!bC || (bC && bC.state & s)) { bC = bE.curRecognizer = null }
            var bB = 0;
            while (bB < bA.length) {
                bz = bA[bB];
                if (bE.stopped !== a1 && (!bC || bz == bC || bz.canRecognizeWith(bC))) { bz.recognize(bD) } else { bz.reset() }
                if (!bC && bz.state & (aq | al | aT)) { bC = bE.curRecognizer = bz }
                bB++
            }
        },
        get: function(bz) { if (bz instanceof M) { return bz } var bA = this.recognizers; for (var bB = 0; bB < bA.length; bB++) { if (bA[bB].options.event == bz) { return bA[bB] } } return null },
        add: function(bz) {
            if (ad(bz, "add", this)) { return this }
            var bA = this.get(bz.options.event);
            if (bA) { this.remove(bA) }
            this.recognizers.push(bz);
            bz.manager = this;
            this.touchAction.update();
            return bz
        },
        remove: function(bz) {
            if (ad(bz, "remove", this)) { return this }
            bz = this.get(bz);
            if (bz) {
                var bA = this.recognizers;
                var bB = A(bA, bz);
                if (bB !== -1) {
                    bA.splice(bB, 1);
                    this.touchAction.update()
                }
            }
            return this
        },
        on: function(bA, bB) {
            if (bA === B) { return }
            if (bB === B) { return }
            var bz = this.handlers;
            bw(aX(bA), function(bC) {
                bz[bC] = bz[bC] || [];
                bz[bC].push(bB)
            });
            return this
        },
        off: function(bA, bB) {
            if (bA === B) { return }
            var bz = this.handlers;
            bw(aX(bA), function(bC) { if (!bB) { delete bz[bC] } else { bz[bC] && bz[bC].splice(A(bz[bC], bB), 1) } });
            return this
        },
        emit: function(bB, bC) {
            if (this.options.domEvents) { d(bB, bC) }
            var bz = this.handlers[bB] && this.handlers[bB].slice();
            if (!bz || !bz.length) { return }
            bC.type = bB;
            bC.preventDefault = function() { bC.srcEvent.preventDefault() };
            var bA = 0;
            while (bA < bz.length) {
                bz[bA](bC);
                bA++
            }
        },
        destroy: function() {
            this.element && ac(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null
        }
    };

    function ac(bA, bB) {
        var bz = bA.element;
        if (!bz.style) { return }
        var bC;
        bw(bA.options.cssProps, function(bE, bD) {
            bC = at(bz.style, bD);
            if (bB) {
                bA.oldCssProps[bC] = bz.style[bC];
                bz.style[bC] = bE
            } else { bz.style[bC] = bA.oldCssProps[bC] || "" }
        });
        if (!bB) { bA.oldCssProps = {} }
    }

    function d(bz, bA) {
        var bB = am.createEvent("Event");
        bB.initEvent(bz, true, true);
        bB.gesture = bA;
        bA.target.dispatchEvent(bB)
    }
    be(R, { INPUT_START: ba, INPUT_MOVE: a6, INPUT_END: g, INPUT_CANCEL: w, STATE_POSSIBLE: ae, STATE_BEGAN: aq, STATE_CHANGED: al, STATE_ENDED: aT, STATE_RECOGNIZED: s, STATE_CANCELLED: N, STATE_FAILED: aO, DIRECTION_NONE: aC, DIRECTION_LEFT: l, DIRECTION_RIGHT: C, DIRECTION_UP: ah, DIRECTION_DOWN: a7, DIRECTION_HORIZONTAL: bm, DIRECTION_VERTICAL: aB, DIRECTION_ALL: P, Manager: bn, Input: a, TouchAction: bt, TouchInput: az, MouseInput: aA, PointerEventInput: aS, TouchMouseInput: bo, SingleTouchInput: z, Recognizer: M, AttrRecognizer: aE, Tap: aw, Pan: r, Swipe: a0, Pinch: bd, Rotate: aI, Press: aW, on: aK, off: O, each: bw, merge: G, extend: aL, assign: be, inherit: H, bindFn: J, prefixed: at });
    var aZ = (typeof bh !== "undefined" ? bh : (typeof self !== "undefined" ? self : {}));
    aZ.Hammer = R;
    if (typeof define === "function" && define.amd) { define(function() { return R }) } else { if (typeof module != "undefined" && module.exports) { module.exports = R } else { bh[a2] = R } }
})(window, document, "Hammer");
/*!
 * VERSION: 0.2.0
 * DATE: 2016-10-20
 * GIT:https://github.com/shrekshrek/orienter
 *
 * @author: Shrek.wang, shrekshrek@gmail.com
 **/
(function(b) { var a = (typeof self == "object" && self.self == self && self) || (typeof global == "object" && global.global == global && global); if (typeof define === "function" && define.amd) { define(["exports"], function(c) { a.Orienter = b(a, c) }) } else { if (typeof exports !== "undefined") { b(a, exports) } else { a.Orienter = b(a, {}) } } }(function(b, a) {
    function c(e, d) { for (var f in d) { e[f] = d[f] } }
    a = function() { this.initialize.apply(this, arguments) };
    c(a.prototype, {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: "",
        initialize: function() {
            this.lon = 0;
            this.lat = 0;
            this.direction = window.orientation || 0;
            switch (this.direction) {
                case 0:
                    this.fix = 0;
                    break;
                case 90:
                    this.fix = -270;
                    break;
                case -90:
                    this.fix = -90;
                    break
            }
            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { this.os = "ios" } else { this.os = (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux")) ? "android" : "" }
        },
        init: function() {
            this._orient = this.orientHandler.bind(this);
            window.addEventListener("deviceorientation", this._orient, false);
            this._change = this.changeHandler.bind(this);
            window.addEventListener("orientationchange", this._change, false)
        },
        destroy: function() {
            window.removeEventListener("deviceorientation", this._orient, false);
            window.removeEventListener("orientationchange", this._change, false)
        },
        changeHandler: function(d) { this.direction = window.orientation; if (this.change) { this.change(this.direction) } },
        changeDirectionTo: function(d) { this.direction = d },
        orientHandler: function(d) {
            switch (this.os) {
                case "ios":
                    switch (this.direction) {
                        case 0:
                            this.lon = d.alpha + d.gamma;
                            if (d.beta > 0) { this.lat = d.beta - 90 }
                            break;
                        case 90:
                            if (d.gamma < 0) { this.lon = d.alpha - 90 } else { this.lon = d.alpha - 270 }
                            if (d.gamma > 0) { this.lat = 90 - d.gamma } else { this.lat = -90 - d.gamma }
                            break;
                        case -90:
                            if (d.gamma < 0) { this.lon = d.alpha - 90 } else { this.lon = d.alpha - 270 }
                            if (d.gamma < 0) { this.lat = 90 + d.gamma } else { this.lat = -90 + d.gamma }
                            break
                    }
                    break;
                case "android":
                    switch (this.direction) {
                        case 0:
                            this.lon = d.alpha + d.gamma + 30;
                            if (d.gamma > 90) { this.lat = 90 - d.beta } else { this.lat = d.beta - 90 }
                            break;
                        case 90:
                            this.lon = d.alpha - 230;
                            if (d.gamma > 0) { this.lat = 270 - d.gamma } else { this.lat = -90 - d.gamma }
                            break;
                        case -90:
                            this.lon = d.alpha - 180;
                            this.lat = -90 + d.gamma;
                            break
                    }
                    break
            }
            this.lon += this.fix;
            this.lon %= 360;
            if (this.lon < 0) { this.lon += 360 }
            this.lon = Math.round(this.lon);
            this.lat = Math.round(this.lat);
            if (this.orient) { this.orient.apply(this, [{ a: Math.round(d.alpha), b: Math.round(d.beta), g: Math.round(d.gamma), lon: this.lon, lat: this.lat, dir: this.direction }]) }
        }
    });
    return a
}));
(function() {
    var b = Flyer._templateData;
    var a = function(u, F) {
        var q = { effect: "slippage", loop: false, direction: "vertical", effDuration: 500, fixedAnimationPageList: [], showSlideBar: true, pagination: ".swiper-pagination", paginationType: "progress", paginationProgressbarIdx: true, paginationProgressbarColor: "#000", paginationProgressbarClass: "swiper-pagination-progressbar", paginationProgressbarIdxClass: "swiper-pagination-progress-bar-idx", bulletClass: "swiper-pagination-bullet", allowSwipeToNext: true, allowSwipeToPrev: true, onInit: null, onTransitionStart: null, onTransitionEnd: null, initActive: 0 };
        var k = this,
            v = {};
        for (var w in q) { if (typeof F[w] === "undefined") { F[w] = q[w] } else { if (typeof F[w] === "object") { for (var g in q[w]) { if (typeof F[w][g] === "undefined") { F[w][g] = q[w][g] } } } } }

        function c(t) { return !!t && Object.prototype.toString.call(t) === "[object Function]" }
        k.params = F;
        var G = (F.direction === "vertical") ? Hammer.DIRECTION_VERTICAL : Hammer.DIRECTION_HORIZONTAL;
        k.swipeMoving = false;
        k.slides = $(u).find(".swiper-slide");
        k.slideaLen = k.slides.length;
        if (k.params.initActive > k.slideaLen) { k.params.initActive = k.slideaLen - 1 }
        k.activeIndex = k.params.initActive;
        var n = function() { $(u).find(".swiper-wrapper").bind("mouseup mousedown", function(t) { if (t.target.nodeName.toLowerCase() == "img") { t.preventDefault() } }) };
        var E = function() {
            var t = k.params.effect;
            if (["rotate_fall", "newspaper", "threeDimen"].indexOf(t) >= 0) {
                var J = k.params.effDuration;
                J = ((t === "rotate_fall") ? J - 200 : J) + "ms";
                k.slides.css({ "-webkit-animation-duration": J, "animation-duration": J, }).addClass(t)
            }
            if (["slippage", "fadeout", "scale", "push"].indexOf(t) >= 0) {
                var J = k.params.effDuration + "ms";
                k.slides.css({ "-webkit-transition": J, transition: J, }).addClass(t)
            }
            if (F.direction === "vertical") { $(u).addClass("swiper-container-vertical") } else { $(u).addClass("swiper-container-horizontal") }
        };
        var i = 1206;
        var z = function() {
            var J = k.getPage(k.activeIndex);
            var t = { canNext: false, canPrev: false };
            if (!J || !$("body").hasClass("mobile")) { return { canNext: true, canPrev: true } }
            var L = J.pageHeight;
            if (J.pageHeight > i) {
                var K = k.slides.eq(k.activeIndex);
                var M = K.find(".swiper-pageScroll");
                var O = M.scrollTop();
                var N = M.find(".pageContentPanel").height() - $(window).height();
                if (O <= 0) { t.canPrev = true } else {
                    if (O >= N) { t.canNext = true } else {
                        t.canNext = false;
                        t.canPrev = false
                    }
                }
            } else {
                t.canNext = true;
                t.canPrev = true
            }
            return t
        };
        var h = function() {
            if ($("body").hasClass("mobile")) {
                var L = 0,
                    J = 0;
                var K = 0,
                    t = 0;
                $(".swiper-pageScroll").bind("touchmove", function(R) {
                    if (!R.originalEvent) { return }
                    K = R.originalEvent.changedTouches[0].clientX;
                    t = R.originalEvent.changedTouches[0].clientY;
                    var M = t - J;
                    var N = K - L;
                    var P = false,
                        Q = false,
                        T = false,
                        O = false;
                    if (M < 0) { P = true } else { if (M > 0) { Q = true } }
                    if (Math.abs(N) > Math.abs(M)) { if (N < 0) { T = true } else { if (N > 0) { O = true } } }
                    var S = z();
                    if ((!!S.canNext && P) || (!!S.canPrev && Q)) { R.preventDefault() } else { if (!!T || !!O) { R.preventDefault() } }
                    R.stopPropagation()
                }).bind("touchstart", function(M) {
                    if (!M.originalEvent) { return }
                    L = M.originalEvent.changedTouches[0].clientX;
                    J = M.originalEvent.changedTouches[0].clientY
                })
            }
        };
        var C = function() {
            if (window.flyerSwiper) { window.flyerSwiper.hammerPages.destroy() }
            var J = $(u).find(".swiper-wrapper")[0];
            k.hammerPages = new Hammer.Manager(J);
            var t = new Hammer.Swipe;
            t.set({ direction: G, preventDefault: true, velocity: 0.4, threshold: 2 });
            k.hammerPages.add(t);
            k.hammerPages.on("swipe", function(K) { if (K.isFinal && !k.swipeMoving) { if (G === Hammer.DIRECTION_VERTICAL) { if (K.direction === Hammer.DIRECTION_UP) { k.slideNext() } else { if (K.direction === Hammer.DIRECTION_DOWN) { k.slidePrev() } } } else { if (G === Hammer.DIRECTION_HORIZONTAL) { if (K.direction === Hammer.DIRECTION_LEFT) { k.slideNext() } else { if (K.direction === Hammer.DIRECTION_RIGHT) { k.slidePrev() } } } } } return false });
            n()
        };
        k.init = function() {
            C();
            D(k.activeIndex);
            if (c(k.params.onInit)) { k.params.onInit(k) }
            var t = k.slides.eq(k.activeIndex);
            t.show().addClass("eleActive s_active");
            E()
        };
        k.lockSwipeToNext = function() { k.params.allowSwipeToNext = false };
        k.lockSwipeToPrev = function() { k.params.allowSwipeToPrev = false };
        k.lockSwipes = function() { k.params.allowSwipeToNext = k.params.allowSwipeToPrev = false };
        k.unlockSwipeToNext = function() { k.params.allowSwipeToNext = true };
        k.unlockSwipeToPrev = function() { k.params.allowSwipeToPrev = true };
        k.unlockSwipes = function() { k.params.allowSwipeToNext = k.params.allowSwipeToPrev = true };
        k.isEnd = function() { return k.activeIndex == b.length - 1 };
        k.isFirst = function() { return k.activeIndex == 0 };
        k.hasPage = function(t) { return t >= 0 && t < b.length };
        k.getPage = function(t) { if (this.hasPage(t)) { return b[t] } };
        k.hasNextPage = function() { return k.activeIndex < k.slideaLen - 1 };
        k.getDirection = function() { if (k.previousIndex > k.activeIndex && k.hasNextPage) { return "pre" } else { if (k.previousIndex < k.activeIndex && k.hasNextPage) { return "next" } else { if (k.previousIndex > k.activeIndex && k.previousIndex === k.slideaLen - 1) { return "next" } else { if (k.previousIndex < k.activeIndex && k.activeIndex === k.slideaLen - 1) { return "pre" } } } } return "" };
        var A = function() { return G == Hammer.DIRECTION_HORIZONTAL };
        var e = "webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd";
        var s = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend";
        k.isOpenLoop = false;
        var B = function(t, J, K) {
            t.addClass(J);
            t.unbind(s).bind(s, function(L) { if (L.originalEvent.animationName === J && !!K) { K() } })
        };
        var I = function(J, t) {
            var L = k.previousIndex;
            var N = k.activeIndex;
            var M = k.slides.eq(L);
            var O = k.slides.eq(N);
            var K = k.params.effDuration + "ms";
            M.addClass(t).unbind(s).bind(s, function(P) {
                if (P.originalEvent.animationName === t) {
                    O.show().addClass(J + " s_active").unbind(s).bind(s, function(Q) {
                        if (Q.originalEvent.animationName === J) {
                            O.removeClass(J).addClass("eleActive");
                            l()
                        }
                    });
                    M.hide().removeClass(t + " s_active").removeClass("eleActive")
                }
            })
        };
        var f = function(J, t) {
            var L = k.previousIndex;
            var N = k.activeIndex;
            var M = k.slides.eq(L).show();
            var P = k.slides.eq(N).show().addClass("s_active");
            var O = false,
                K = false;
            P.addClass(J);
            M.addClass(t);
            P.unbind(s).bind(s, function(Q) {
                if (Q.originalEvent.animationName === J) {
                    O = true;
                    if (K) {
                        M.hide().removeClass(t).removeClass("eleActive s_active");
                        P.removeClass(J).addClass("eleActive");
                        l()
                    }
                    Q.stopPropagation();
                    P.unbind(s)
                }
            });
            M.unbind(s).bind(s, function(Q) {
                if (Q.originalEvent.animationName === t) {
                    K = true;
                    if (O) {
                        M.hide().removeClass(t).removeClass("eleActive s_active");
                        P.removeClass(J).addClass("eleActive");
                        l()
                    }
                    Q.stopPropagation();
                    M.unbind(s)
                }
            })
        };
        var m = function() {
            var t = k.previousIndex;
            var K = k.activeIndex;
            var J = k.slides.eq(t);
            var L = k.slides.eq(K).show();
            J.removeClass("s_active");
            J.unbind(e).bind(e, function(M) {
                if (!!$(M.target).hasClass(k.params.effect)) {
                    J.hide().removeClass("eleActive");
                    L.addClass("s_active");
                    L.unbind(e).bind(e, function(N) {
                        if (!!$(N.target).hasClass(k.params.effect)) {
                            L.addClass("eleActive");
                            l();
                            L.unbind(e)
                        }
                    });
                    J.unbind(e)
                }
            })
        };
        var j = function(L) {
            var J = k.previousIndex;
            var M = k.activeIndex;
            var K = k.slides.eq(J);
            var O = k.slides.eq(M).show();
            var N;
            var t = (L) ? "100%" : "-100%";
            if (A()) { N = "translate3d(" + t + ",0,0)" } else { N = "translate3d(0," + t + ",0)" }
            K.css({ "-webkit-transform": N, "-moz-transform": N, transform: N });
            K.unbind(e).bind(e, function(P) {
                if (!!$(P.target).hasClass(k.params.effect)) {
                    K.hide().css({ "-webkit-transform": "none", "-moz-transform": "none", transform: "none" }).removeClass("eleActive s_active");
                    O.addClass("eleActive s_active");
                    l();
                    K.unbind(e)
                }
            })
        };
        var y = function(t) {
            var K = k.previousIndex;
            var M = k.activeIndex;
            var L = k.slides.eq(K);
            var N = k.slides.eq(M);
            var J = k.params.effDuration + "ms";
            if (t != "") {
                L.hide().removeClass("eleActive s_active");
                N.css({ "-webkit-animation-duration": J, "animation-duration": J });
                N.addClass(t).show();
                N.unbind(s).one(s, function() {
                    N.addClass("eleActive s_active").removeClass(t);
                    l()
                })
            }
        };
        var H = function(L) { if (!!L) { return k.params.effect } var t = k.previousIndex; var K = k.params.fixedAnimationPageList; for (var J = 0; J < K.length; J++) { if (t == K[J].index) { return K[J].animateClass } } return k.params.effect };
        var x = function(K) {
            var J = H(K);
            var L = "",
                t = "";
            k.swipeMoving = true;
            if (J === "newspaper") {
                L = "swiper_rotateIn", t = "swiper_rotateOut";
                I(L, t)
            } else {
                if (J === "rotate_fall") {
                    t = A() ? ((K) ? "flipOutLeft" : "flipOutRight") : ((K) ? "flipOutBottom" : "flipOutTop"), L = A() ? ((K) ? "flipInRight" : "flipInLeft") : ((K) ? "flipInTop" : "flipInBottom");
                    I(L, t)
                } else {
                    if (J === "threeDimen") {
                        L = A() ? ((K) ? "rotateCubeRightIn" : "rotateCubeLeftIn") : ((K) ? "rotateCubeBottomIn" : "rotateCubeTopIn");
                        t = A() ? ((K) ? "rotateCubeRightOut" : "rotateCubeLeftOut") : ((K) ? "rotateCubeBottomOut" : "rotateCubeTopOut");
                        f(L, t)
                    } else {
                        if (J === "fadeout") { m() } else {
                            if (J === "slippage") { j(K) } else {
                                if (J === "scale") {
                                    L = A() ? ((K) ? "scaleLeftIn" : "scaleRightIn") : ((K) ? "scaleTopIn" : "scaleBottomIn");
                                    t = "scaleOut";
                                    f(L, t)
                                } else {
                                    if (J === "push") {
                                        L = A() ? ((K) ? "pullLeftIn" : "pullRightIn") : ((K) ? "pullTopIn" : "pullBottomIn");
                                        t = A() ? ((K) ? "pushRightOut" : "pushLeftOut") : ((K) ? "pushBottomOut" : "pushTopOut");
                                        f(L, t)
                                    } else {
                                        if (J === "fadeIn") {
                                            L = "pageFadeIn";
                                            t = "pageFadeUp";
                                            f(L, t)
                                        } else { y(J) }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        var l = function() {
            if (c(k.params.onTransitionEnd)) { k.params.onTransitionEnd(k) }
            k.swipeMoving = false
        };
        var o = function(t) {
            if (k.slideaLen == 1) { return }
            if (c(k.params.onTransitionStart)) { k.params.onTransitionStart(k) }
            k.updatePagination();
            x(t);
            k.isFromPC = false
        };
        var r = function(L) {
            var t = k.slideaLen;
            var J = k.activeIndex;
            var K = J + 1;
            if (!!k.params.loop) { K = (K + t) % t }
            if (K >= t) { return }
            if (!!k.params.loop && K === 0 && J == (k.slideaLen - 1)) { k.isOpenLoop = true }
            if (!k.isFromPC && k.slides.eq(J).hasClass("swiper-no-swiping")) { return }
            k.previousIndex = k.activeIndex;
            k.activeIndex = K;
            o(false)
        };
        var d = function(L) {
            var t = k.slideaLen;
            var J = k.activeIndex;
            var K = J - 1;
            if (!!k.params.loop && !!k.isOpenLoop) { K = (K + t) % t }
            if (K >= t || K < 0) { return }
            if (!k.isFromPC && k.slides.eq(J).hasClass("swiper-no-swiping")) { return }
            k.previousIndex = k.activeIndex;
            k.activeIndex = K;
            o(true)
        };
        k.isFromPC = false;
        k.slideNext = function(t) {
            if (!!k.params.allowSwipeToNext) {
                k.isFromPC = t;
                r()
            }
        };
        k.slidePrev = function(t) {
            if (!!k.params.allowSwipeToPrev) {
                k.isFromPC = t;
                d()
            }
        };
        k.slideTo = function(M, J) {
            if (M !== k.activeIndex) {
                var t = k.slideaLen;
                if (!!k.params.loop) { M = (M + t) % t } else { if (M >= t) { return } }
                var K = M;
                var L = k.activeIndex;
                k.previousIndex = k.activeIndex || 0;
                k.activeIndex = K;
                o()
            }
        };
        var D = function(K) {
            if (!k.params.showSlideBar) { return }
            k.paginationContainer = $(u).find(k.params.pagination);
            k.paginationContainer.show();
            k.paginationContainer.addClass("swiper-pagination-" + k.params.paginationType);
            var J = "";
            if (k.params.paginationType === "progress") {
                J = '<span class="' + k.params.paginationProgressbarClass + '" style="background-color:' + k.params.paginationProgressbarColor + '"></span>';
                if (k.params.paginationProgressbarIdx) {
                    var t = k.slideaLen;
                    J += '<span class="' + k.params.paginationProgressbarIdxClass + '">' + (K + 1) + "/" + t + "</span>"
                }
                k.paginationContainer.html(J)
            } else {
                if (k.params.paginationType === "bullets") {
                    for (var L = 0; L < k.slideaLen; L++) { J += '<span class="' + k.params.bulletClass + '"></span>' }
                    k.paginationContainer.html(J)
                }
            }
            k.updatePagination()
        };
        k.updatePagination = function() {
            if (!k.params.showSlideBar) { return }
            var N = k.activeIndex,
                M = k.slideaLen;
            if (k.params.paginationType === "progress") {
                var O = (N + 1) / M,
                    L = O,
                    K = 1;
                k.paginationContainer.find("." + k.params.paginationProgressbarClass).css({ "-webkit-transform": "translate3d(0,0,0) scaleX(" + L + ") scaleY(" + K + ")", "-moz-transform": "translate3d(0,0,0) scaleX(" + L + ") scaleY(" + K + ")", "-o-transform": "translate3d(0,0,0) scaleX(" + L + ") scaleY(" + K + ")", transform: "translate3d(0,0,0) scaleX(" + L + ") scaleY(" + K + ")" });
                if (k.params.paginationProgressbarIdx) {
                    var J = k.activeIndex + 1;
                    var t = k.slideaLen;
                    k.paginationContainer.find("." + k.params.paginationProgressbarIdxClass).html(J + "/" + t)
                }
            } else {
                if (k.params.paginationType === "bullets") {
                    $(u).find("." + k.params.bulletClass).removeClass("swiper-pagination-bullet-active");
                    $(u).find("." + k.params.bulletClass).eq(k.activeIndex).addClass("swiper-pagination-bullet-active")
                }
            }
        };
        k.init();
        return k
    };
    window.Swiper = a
})();
Flyer.EffectTimings = { noeffect: "ease", fadeInNormal: "ease-in-out", fadeIn: "ease-in-out", expandOpen: "ease-out", zoomIn: "ease", zoomInDown: "ease", rotateInDownLeft: "ease", rotateInDownRight: "ease", moveRight: "cubic-bezier(0.61,-0.01,0.36,1)", moveLeft: "cubic-bezier(0.61,-0.01,0.36,1)", moveUp: "cubic-bezier(0.61,-0.01,0.36,1)", moveDown: "cubic-bezier(0.61,-0.01,0.36,1)", slideRight: "ease-in-out", slideLeft: "ease-in-out", slideUp: "ease", slideDown: "ease", lightSpeedIn: "ease-out", flipInY: "ease-in", flipInX: "ease-in", rotateIn: "ease", stretchRight: "ease-out", stretchLeft: "ease-out", pullUp: "ease-out", pullDown: "ease-out " };
Flyer.maskShapeList = { 0: "shape-00", 1: "shape-01", 2: "shape-02", 3: "shape-03", 4: "shape-04", 5: "shape-05", 6: "shape-06", 7: "shape-07", 8: "shape-08", 9: "shape-09", 10: "shape-10", 11: "shape-11", 12: "shape-12", 13: "shape-13", 14: "shape-14", 15: "shape-15", 16: "shape-16", 17: "shape-17", 18: "shape-18", 19: "shape-19", 20: "shape-20", 21: "shape-21", 22: "shape-22", 23: "shape-23", 24: "shape-24", 25: "shape-25", 26: "shape-26", 27: "shape-27", 28: "shape-28", 29: "shape-29", 30: "shape-30", 31: "shape-31", 32: "shape-32", 33: "shape-33", 34: "shape-34", 35: "shape-35", 36: "shape-36", 37: "shape-37" };
Flyer.pageEffects = [{ dir: "vertical", eff: "slippage" }, { dir: "horizontal", eff: "slippage" }, { dir: "vertical", eff: "fadeout" }, { dir: "horizontal", eff: "fadeout" }, { dir: "vertical", eff: "rotate_fall" }, { dir: "horizontal", eff: "rotate_fall" }, { dir: "vertical", eff: "newspaper" }, { dir: "horizontal", eff: "newspaper" }, { dir: "vertical", eff: "threeDimen" }, { dir: "horizontal", eff: "threeDimen" }, { dir: "vertical", eff: "scale" }, { dir: "horizontal", eff: "scale" }, { dir: "vertical", eff: "push" }, { dir: "horizontal", eff: "push" }, { dir: "vertical", eff: "fadeIn" }, { dir: "horizontal", eff: "fadeIn" }];
if (typeof String.prototype.endsWith !== "function") { String.prototype.endsWith = function(a) { return this.indexOf(a, this.length - a.length) !== -1 } }
Flyer.formatDateForWeek = function(a) { if (a === 0) { a = "æ˜ŸæœŸæ—¥" } else { if (a === 1) { a = "æ˜ŸæœŸä¸€" } else { if (a === 2) { a = "æ˜ŸæœŸäºŒ" } else { if (a === 3) { a = "æ˜ŸæœŸä¸‰" } else { if (a === 4) { a = "æ˜ŸæœŸå››" } else { if (a === 5) { a = "æ˜ŸæœŸäº”" } else { if (a === 6) { a = "æ˜ŸæœŸå…­" } } } } } } } return a };
var calculateSize = function() {
    var e = 1;
    var c = 750;
    var i = 1206;
    var g = $(window).height() * 1;
    var f = $(window).width() * 1;
    var j;
    var h = f / c,
        b = g / i;
    j = (h > b) ? h : b;
    j = (g <= f) ? e : j;
    Flyer.scale = i_scale;
    var k = Flyer._webDebug;
    var a = (function() {
        var l = document.createElement("style");
        l.setAttribute("id", "resetStyle");
        l.appendChild(document.createTextNode(""));
        document.head.appendChild(l);
        return l
    })();
    this.initCalculate = function(l, m, n) {};
    this.getPercentBg = function() { return j };
    this.getPercentCon = function() { return e };
    this.setCSS_scale = function() {
        var n = $("#productPanel");
        var q = n.width();
        var m = n.height();
        q = (q > f) ? (f - 80) : q;
        m = (m > g) ? (g - 80) : m;
        var r = (f - q) / 2;
        var s = (g - m) / 2;
        var o = (f - q);
        var l = (g - m) / 2;
        if (n.hasClass("forCenter")) {
            n.css({ top: s, left: r, width: q, height: m });
            n.find(".productSlide").css({ width: q, "max-height": m });
            n.find(".productSlide .productImg ").css({ "max-height": m })
        } else {
            n.css({ top: 0, left: o, height: g });
            n.find(".productSlide").css({ "max-height": g });
            n.find(".productSlide .productImg ").css({ "max-height": g })
        }
    };
    var d = function() {
        var n = $("#canvas");
        var t = n.attr("width") * e,
            q = n.attr("height") * e;
        n.attr("width", t).attr("height", q);
        $("#loading").css({ width: f, height: g });
        $("#mobiPage").css({ width: f });
        var l = (g - i) / 2;
        var s = (f - c) / 2;
        var m = navigator.userAgent.toLowerCase();
        var o = (m.match(/MicroMessenger/i) == "micromessenger") ? 100 : 190;
        if (!k) {
            var r = a.sheet;
            r.insertRule(".contentEle{top:" + l + "px !important;left:" + s + "px !important;}", 0);
            r.insertRule(".flyerSpecialWXMessage .messageTalkBody{height:" + (g - o) + "px;}", 0);
            r.insertRule(".flyerSpecialDXMessage .messageTalkBody{height:" + (g - 178) + "px;}", 0)
        } else {
            var u = document;
            a.appendChild(u.createTextNode(".contentEle{top:" + l + "px !important;left:" + s + "px !important;}"));
            a.appendChild(u.createTextNode(".flyerSpecialWXMessage .messageTalkBody{height:" + (g - o) + "px;}"));
            a.appendChild(u.createTextNode(".flyerSpecialDXMessage .messageTalkBody{height:" + (g - 178) + "px;}"))
        }
    };
    d()
};
Flyer.calSize = new calculateSize();
Flyer.encodeHtml = function(a) { return a && a.replace ? (a.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/\b&nbsp;+/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/\n/g, "<br/>").replace(/\r/g, "")) : a };
Flyer.decodeHtml = function(a) { return a && a.replace ? (a.replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/g, ">").replace(/&#92;/gi, "\\").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"').replace(/\<br\/\>/gi, "\n").replace(/&amp;/gi, "&")) : a };
Flyer.encodeHtmlNotAllTag = function(b) {
    b = "<div>" + b + "</div>";
    var a = $(b);
    a.find("img").each(function() { var c = $(this).attr("src") || ""; if (c.indexOf(Flyer._resRoot) > -1) {} });
    a.find("*").not("img,br").each(function() {
        if (this.nodeName.toLowerCase() === "cursor" || this.className === "cursorStart") { return false }
        var c = this.outerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $(this).replaceWith(c)
    });
    return a.html()
};
Flyer.encodeHtmlJs = function(a) { return a && a.replace ? (a.replace(/\\/g, "\\\\").replace(/\'/g, "\\x27").replace(/\"/g, "\\x22").replace(/\n/g, "\\n").replace(/</g, "\\x3c").replace(/>/g, "\\x3e")) : a };
Flyer.encodeHtmlAttr = function(a) { return a && a.replace ? (a.replace(/\"/g, "&#x22;").replace(/\'/g, "&#x27;").replace(/</g, "&#x3c;").replace(/>/g, "&#x3e;").replace(/&/g, "&#x26;")).replace(/\\/g, "&#5c;") : a };
Flyer.encodeUrl = function(a) { return typeof a === "undefined" ? "" : encodeURIComponent(a) };
Flyer.decodeUrl = function(a) { return typeof a === "undefined" ? "" : decodeURIComponent(a) };
Flyer.checkBrower = function() { var a = navigator.userAgent.toLowerCase(); if (a.indexOf("mobile") >= 0) { $("body").addClass("mobile") } if (a.indexOf("mobile") < 0) { $("body").addClass("pc"); return "pc" } else { if (a.indexOf("micromessenger") >= 0) { return "wx" } } return "" };
Flyer.reflowPage = function(b) {
    var c = b || "#mobiPage";
    var a = $(c);
    a.css("display", "none");
    a[0].offsetHeight;
    a.css("display", "block")
};
Flyer.setFlyerStyle = function(b) {
    if (!b) { return "" }
    var a = " style=:'";
    for (var c in b) { a += c + ":" + b[c] }
    a += "' ";
    return a
};
$.fn.extend({
    touchmove: function(c) {
        var b = {};
        var a = {};
        $(this).bind("touchmove", function(k) {
            if (!k.originalEvent) { return }
            var l = $(this).height();
            var d = $(this).width();
            var m = $(this)[0].scrollHeight;
            var j = $(this)[0].scrollWidth;
            var f = $(this).scrollTop();
            var g = $(this).scrollLeft();
            a.x = k.originalEvent.changedTouches[0].clientX;
            a.y = k.originalEvent.changedTouches[0].clientY;
            var i = a.x - b.x;
            var h = a.y - b.y;
            if (i > 0 && Math.abs(i) > Math.abs(h) && (g + d) == j) {
                k.preventDefault();
                k.stopPropagation()
            } else {
                if (i < 0 && Math.abs(i) > Math.abs(h) && g == 0) {
                    k.preventDefault();
                    k.stopPropagation()
                } else {
                    if (h > 0 && (f + l) == m) {
                        k.preventDefault();
                        k.stopPropagation()
                    } else {
                        if (h < 0 && f == 0) {
                            k.preventDefault();
                            k.stopPropagation()
                        }
                    }
                }
            }
            if (!!c) { c() }
        }).bind("touchstart", function(d) {
            if (!d.originalEvent) { return }
            b.x = d.originalEvent.changedTouches[0].clientX;
            b.y = d.originalEvent.changedTouches[0].clientY
        })
    }
});
(function(b) {
    var g = (new Date).getTime(),
        f = b.event.special,
        e = b.event.handle || b.event.dispatch,
        i = "scroll",
        d = i + "start",
        h = i + "end",
        c = i + "." + d + g,
        a = i + "." + h + g;
    f.scrollstart = {
        setup: function() {
            var j, k = function(l) {
                if (j == null) {
                    l.type = d;
                    e.apply(this, arguments)
                } else { clearTimeout(j) }
                j = setTimeout(function() { j = null }, f.scrollend.delay)
            };
            b(this).bind(c, k)
        },
        teardown: function() { b(this).unbind(c) }
    };
    f.scrollend = {
        delay: 30,
        setup: function() {
            var j, k = function(l) {
                var n = this,
                    m = arguments;
                clearTimeout(j);
                j = setTimeout(function() {
                    l.type = h;
                    e.apply(n, m)
                }, f.scrollend.delay)
            };
            b(this).bind(a, k)
        },
        teardown: function() { b(this).unbind(a) }
    }
})(jQuery);
(function(a) {
    a.validateCode = (function() {
        var d = {},
            b = {};
        var f = function() {
            var g = '<div id="validateCodeDiv" class="f_DNSTraffic"><div class="bg"></div><div class="panel"><span>è¯·è¾“å…¥éªŒè¯ç </span><div class="InputArea"><input class="validateCodeInput" type="text" placeholder="" maxLength="4"><img class="validateCodeImg" /></div><div class="btnArea"><div class="submit">ç¡®å®š</div><div class="close">å–æ¶ˆ</div></div></div></div>';
            $("body").append(g);
            e()
        };
        var e = function() {
            $("#validateCodeDiv img").on("click", function(g) {
                g.stopPropagation();
                Flyer.validateCode.setSrc()
            });
            $("#validateCodeDiv .bg").on("click", function(g) {
                g.stopPropagation();
                $("#validateCodeDiv").find("input").eq(0).blur();
                $("#validateCodeDiv").hide()
            });
            $("#validateCodeDiv .close").on("click", function(g) {
                g.stopPropagation();
                $("#validateCodeDiv").find("input").eq(0).blur();
                $("#validateCodeDiv").hide()
            });
            $("#validateCodeDiv .submit").on("click", function(g) {
                g.stopPropagation();
                $("#validateCodeDiv").find("input").eq(0).focus();
                c()
            })
        };
        var c = function() {
            var g = $("#validateCodeDiv").find("input").val(),
                h = d.callback;
            if (g === "") {
                Flyer.ing("è¯·è¾“å…¥éªŒè¯ç ", true, 3000, "notice");
                $("#validateCodeDiv").find("input").eq(0).focus();
                return
            }
            d.validateCode = g;
            h && h.call(this, d)
        };
        b.setSrc = function() {
            var g = d.validateId;
            $("#validateCodeDiv").find("img").eq(0).attr("src", "/validateCode.jsp?" + parseInt(Math.random() * 1000) + "&vCodeId=" + g);
            $("#validateCodeDiv").find("input").eq(0).val("");
            $("#validateCodeDiv").find("input").eq(0).focus()
        };
        b.show = function(g) {
            d = g;
            if ($("#validateCodeDiv").length > 0) { $("#validateCodeDiv").show() } else { f() }
            this.setSrc()
        };
        b.hide = function() {
            $("#validateCodeDiv").hide();
            $("#validateCodeDiv").find("input").eq(0).blur()
        };
        return b
    })()
})(Flyer);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { if (typeof exports === "object") { a(require("jquery")) } else { a(jQuery) } } }(function(f) {
    var a = /\+/g;

    function d(i) { return b.raw ? i : encodeURIComponent(i) }

    function g(i) { return b.raw ? i : decodeURIComponent(i) }

    function h(i) { return d(b.json ? JSON.stringify(i) : String(i)) }

    function c(i) { if (i.indexOf('"') === 0) { i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") } try { i = decodeURIComponent(i.replace(a, " ")); return b.json ? JSON.parse(i) : i } catch (j) {} }

    function e(j, i) { var k = b.raw ? j : c(j); return f.isFunction(i) ? i(k) : k }
    var b = f.cookie = function(r, q, w) {
        if (q !== undefined && !f.isFunction(q)) {
            w = f.extend({}, b.defaults, w);
            if (typeof w.expires === "number") {
                var s = w.expires,
                    v = w.expires = new Date();
                v.setTime(+v + s * 86400000)
            }
            return (document.cookie = [d(r), "=", h(q), w.expires ? "; expires=" + w.expires.toUTCString() : "", w.path ? "; path=" + w.path : "", w.domain ? "; domain=" + w.domain : "", w.secure ? "; secure" : ""].join(""))
        }
        var x = r ? undefined : {};
        var u = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = u.length; o < m; o++) { var n = u[o].split("="); var j = g(n.shift()); var k = n.join("="); if (r && r === j) { x = e(k, q); break } if (!r && (k = e(k)) !== undefined) { x[j] = k } }
        return x
    };
    b.defaults = {};
    f.removeCookie = function(j, i) {
        if (f.cookie(j) === undefined) { return false }
        f.cookie(j, "", f.extend({}, i, { expires: -1 }));
        return !f.cookie(j)
    }
}));
(function(f) {
    var b = function(g) { var h = new RegExp("(^|&)" + g + "=([^&]*)(&|$)", "i"); var i = window.location.search.substr(1).match(h); if (i != null) { return unescape(i[2]) } return null };
    f.getQueryString = b;
    var e = function() {
        var j = null;
        var g = null;
        var k = 0;
        var h = 0;
        var i = navigator.userAgent.toLowerCase();
        if (f.isAndroid()) {
            $("body").delegate(".f_formInput", "focus", function(m) {
                k = $(".contentEle").css("top");
                h = $(document).height() * 0.4 - $(this).offset().top - $(this).height();
                j = $(this);
                $("#mobiPage").css({ position: "fixed" });
                if (h < 0) {
                    g = $(this).closest(".contentEle");
                    var l = "translateY(" + h + "px)";
                    g.css({ transform: l, "-webkit-transform": l, "-moz-transform": l, })
                }
            }).delegate(".f_formInput", "blur", function() {
                f.unlockSwipes();
                $("#mobiPage").css({ position: "relative", });
                if (h < 0) {
                    var l = "translateY(0)";
                    g.css({ transform: l, "-webkit-transform": l, "-moz-transform": l, })
                }
            })
        }
        if (i.indexOf("os 7_") > 0) {
            $(".fMain_content").delegate(".f_formInput", "focus", function(l) {
                k = $(".contentEle").css("top");
                h = $(document).height() * 0.4 - $(this).offset().top - $(this).height();
                j = $(this);
                if (h < 0) {
                    h = "translate3d(0px, " + h + "px, 0px)";
                    $(".swiper-wrapper").css({ transform: h, "-webkit-transform": h, })
                }
            }).delegate(".f_formInput", "blur", function() { $(".swiper-wrapper").css({ transform: "translate3d(0px, 0px, 0px)", "-webkit-transform": "translate3d(0px, 0px, 0px)", }) })
        }
    };
    f._tempLoadingHtml = function() {
        var i = f._flyerType,
            j = f._loadingType,
            h = f._loadingColor;
        var g = "";
        if (i < 10) {
            switch (j) {
                case 0:
                    g = '<div class="item"> <div class="loader loadingScale"> <div class="bounce1"  style="background-color:#4a68ec;"></div> <div class="bounce2"  style="background-color:#4a68ec;"></div> </div> <div id="la-circle" class="la-circle" style=" display:none;background-repeat: no-repeat;background-position: center center;"> <div class="circle-loading"> <svg width="240px" height="240px"> <circle stroke-linecap="round" cx="120" cy="120"  fill-opacity="0" r="116" stroke="#f2f2f2" stroke-width="7"/> <circle class="loadingStack" stroke-linecap="round" cx="120" cy="120"  fill-opacity="0" r="116" stroke="#4a68ec" stroke-width="7" stroke="#4a68ec" stroke-width="7"/> </svg> </div> </div> </div>';
                    break;
                case 1:
                    g = '<div class="loadingTip ooc" data-css="wh"> <div id="loadingScale" class="loadingScale"> <div class="bounce1"  style="background-color:' + h + '!important;"></div> <div class="bounce2"  style="background-color:' + h + '!important;"></div> </div> <div id="loadingWaves" class="loadingWaves ooc" data-css="whm"> <img id="loadingImg" class="loadingImg ooc" data-css="whm"/> <div class="bgOne ooc" data-css="wh"> <canvas id="canvas" width="260" height="260" class="ooc" data-css="lt">æµè§ˆå™¨ä¸æ”¯æŒcanvas</canvas> </div> <div class="loadingMask ooc" data-css="whlt"></div> </div> </div>';
                    break;
                case 2:
                    g = '<div class="item"> <div class="loader loading-position la-pacman la-3x" style="color:' + h + '!important;"> <div></div><div></div><div></div><div></div><div></div><div></div> </div></div>';
                    break;
                case 3:
                    g = ' <div class="item"> <div class="loader loading-position la-ball-fussion la-3x" style="color:' + h + '!important;"> <div></div> <div></div> <div></div> <div></div>  </div></div>';
                    break;
                case 4:
                    g = '<div class="item"> <div class="loader loading-position la-square-jelly-box la-3x" style="color:' + h + '!important;"> <div></div> <div></div> </div> </div>';
                    break;
                default:
                    g = '<div class="item"> <div class="loader loading-position la-line-scale-party la-3x" style="color:' + h + '!important;"> <div></div><div></div> <div></div> <div></div> <div></div> </div> </div>'
            }
        } else { g = '<!-------h5å¤§èµ›çš„å¤„ç†-------> <!---loading1----> <div class="loadingTip ooc" data-css="wh"> <div id="loadingScale" class="loadingScale"> <div class="bounce1"></div> <div class="bounce2"></div> </div> <div id="loadingWaves" class="loadingWaves ooc" data-css="whm"> <img id="loadingImg" class="loadingImg ooc" data-css="whm"/> <div class="bgOne ooc" data-css="wh"> <canvas id="canvas" width="260" height="260" class="ooc" data-css="lt">æµè§ˆå™¨ä¸æ”¯æŒcanvas</canvas> </div> <div class="loadingMask ooc" data-css="whlt"></div> </div> </div>' }
        $("#loading").append(g)
    };
    var d = function() {
        var m = f._loadingType;
        var j = f._loadingColor;
        if (f._flyerType >= 10) {
            m = 1;
            j = "#4A89DC"
        }
        if (+m == 1) {
            var k = document.getElementById("loadingImg");
            if (f._joinContestInfo && f._flyerType >= 10) {
                k.src = f._resRoot + f._joinContestInfo.companyLoadingLogo;
                $(".bounce1").css("background-color", f._joinContestInfo.companyColor);
                $(".bounce2").css("background-color", f._joinContestInfo.companyColor)
            } else { k.src = f.pageLogoImgSrc }
            k.onload = function() {
                setTimeout(function() {
                    var o = document.getElementById("loadingWaves");
                    var n = document.getElementById("loadingScale");
                    n.style.display = "none";
                    o.style.display = "block";
                    a(j)
                }, 300)
            }
        } else {
            function g() {
                c();
                f.preloadContentImages();
                if (!f.top._isPreview) { f.logObjDog(2000097, 0); if (f.top._isOem && f._templateData.length === 1) { f.logObjDog(2000098, 0) } else { if (!f.top._isOem && f._templateData.length === 2) { f.logObjDog(2000098, 0) } } }
            }
            var l;
            if (+m != 0) {
                l = setInterval(function() {
                    if (document.readyState == "complete" && !f.createPageRequestAnimation[0]) {
                        g();
                        clearInterval(l)
                    }
                }, 1000)
            } else {
                var h = $("#loadingPage div.la-circle");
                var i = new Image();
                i.src = f._resRoot + "/image/loadingBg.jpg";
                i.onload = function() {
                    setTimeout(function() {
                        $("#loadingPage div.loader").css("display", "none");
                        h.css({ backgroundImage: "url(" + f._resRoot + "/image/loadingBg.jpg)", display: "block" })
                    }, 600)
                };
                h.find(".loadingStack").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend", function() {
                    l = setInterval(function() {
                        if (!f.createPageRequestAnimation[0]) {
                            g();
                            clearInterval(l)
                        }
                    }, 100)
                })
            }
        }
    };
    var a = function(A) {
        var i = document.getElementById("canvas"),
            y = i.getContext("2d"),
            D = i.width,
            h = i.height;
        var n = [],
            o = [],
            v = 0,
            j = h,
            l = 0,
            w = 6,
            m = 5,
            H = 0.05,
            s = 0,
            k = 50,
            G = D,
            E = 30;
        var u = null;
        B();

        function B() {
            y.beginPath();
            y.arc(D / 2, h / 2, h / 2, 0, Math.PI * 2, true);
            y.clip();
            y.closePath();
            for (var I = 0; I < G; I++) {
                n[I] = new z(I, h, 1);
                o[I] = new z(I, h, 1)
            }
        }
        r();
        var g;
        var C = Date.now();

        function r() {
            u = requestAnimationFrame(r);
            g = Date.now();
            delta = g - C;
            if (delta > E) {
                q();
                C = Date.now()
            }
        }

        function q() {
            y.clearRect(0, 0, D, h);
            l = Math.floor(w - (w / 2 * Math.random()));
            s += k;
            if (j <= -(2 * w + 4 * m) && document.readyState == "complete" && !f.createPageRequestAnimation[0]) {
                cancelAnimationFrame(u);
                c();
                f.preloadContentImages();
                if (!f.top._isPreview) { f.logObjDog(2000097, 0); if (f.top._isOem && f._templateData.length === 1) { f.logObjDog(2000098, 0) } else { if (!f.top._isOem && f._templateData.length === 2) { f.logObjDog(2000098, 0) } } }
            }
            if (document.readyState == "complete") { j -= m } else { if (j > 3 * (2 * w + 4 * m)) { j -= m / 2 } else { if (j < 3 * (2 * w + 4 * m) && j >= 1 * (2 * w + 4 * m)) { j -= m / 5 } else { if (j < 1 * (2 * w + 4 * m)) { j -= 0 } } } }
            for (var I = 0; I < n.length; I++) {
                v = l * Math.sin(H * I + s) + j;
                n[I].updateY(v);
                v = l * Math.sin(H * I + s + Math.PI / 2) + j;
                o[I].updateY(v)
            }
            t()
        }

        function x(L) {
            var L = L.replace("#", "").toLowerCase();
            if (L.length == 3) {
                var K = new Array;
                var I = 3;
                while (I--) { K[I] = L.charAt(I) + "" + L.charAt(I) }
                L = K.join("")
            }
            if (L.length == 6) { var J = L.match(/[0-9a-f]{2}/g); if (J && J.length == 3) { var I = 3; while (I--) { J[I] = parseInt(J[I], 16) } return J } else { return false } }
        }

        function F(K, M) {
            var L = x(K);
            if (!L || !M || isNaN(M)) { return false }
            M = Math.max(M, 0);
            M = Math.min(M, 100);
            for (var J = 0; J < L.length; J++) { L[J] = (Math.floor(L[J] + (255 - L[J]) * (M / 100))).toString(16); if (L[J].length == 1) { L[J] = "0" + L[J] } }
            var I = "#" + L.join("");
            return I
        }

        function t() {
            var J = F(A, 25) || "#aecdf5",
                I = A || "#5d9cec";
            if (f._joinContestInfo) { J = I = f._joinContestInfo.companyColor }
            y.beginPath();
            y.moveTo(0, window.innerHeight);
            y.fillStyle = J;
            y.lineTo(n[0].x, n[0].y);
            for (var K = 1; K < n.length; K++) { y.lineTo(n[K].x, n[K].y) }
            y.lineTo(D, window.innerHeight);
            y.lineTo(0, window.innerHeight);
            y.fill();
            y.closePath();
            y.beginPath();
            y.moveTo(0, window.innerHeight);
            y.fillStyle = I;
            y.lineTo(o[0].x, o[0].y + 5);
            for (var K = 1; K < o.length; K++) { y.lineTo(o[K].x, o[K].y + 5) }
            y.lineTo(D, window.innerHeight);
            y.lineTo(0, window.innerHeight);
            y.fill();
            y.closePath()
        }

        function z(I, K, J) {
            this.baseY = J;
            this.x = I;
            this.y = K;
            this.vy = 0;
            this.targetY = 0;
            this.friction = 0.06;
            this.deceleration = 0.85
        }
        z.prototype.updateY = function(I) {
            this.targetY = I + this.baseY;
            this.vy += this.targetY - this.y;
            this.y += this.vy * this.friction;
            this.vy *= this.deceleration
        }
    };
    var c = function(g) {
        g = g || 0;
        $("#loadingPage").hide();
        f.reflowPage();
        f.audioCtrl();
        if (f.checkSpecialEffects()) { f.specialEffectsStartCallBack() } else { f.allSlideEndCallBack() }
        if (f.top._isFromPC) { f.checkWhetherLockSlide() }
        f.commercial.showFooter()
    };
    f.initLandscape = function() {
        if (window.orientation) {
            switch (window.orientation) {
                case 0:
                    $("#rotateTipsPanel").hide();
                    $("#rotateTipsPanel").removeClass(" rotateFromRight");
                    $("#rotateTipsPanel").removeClass(" rotateFromLeft");
                    break;
                case 180:
                    break;
                case 90:
                    $("#rotateTipsPanel").show();
                    $("#rotateTipsPanel").removeClass(" rotateFromRight");
                    $("#rotateTipsPanel").addClass(" rotateFromLeft");
                    f.landscape = true;
                    break;
                case -90:
                    $("#rotateTipsPanel").show();
                    $("#rotateTipsPanel").removeClass(" rotateFromLeft");
                    $("#rotateTipsPanel").addClass(" rotateFromRight");
                    f.landscape = true;
                    break
            }
        }
    };
    f.landscapeExchange = function() {
        if (f.old_orientation != window.orientation) {
            switch (window.orientation) {
                case 0:
                    $("#rotateTipsPanel").hide();
                    $("#rotateTipsPanel").removeClass(" rotateFromRight");
                    $("#rotateTipsPanel").removeClass(" rotateFromLeft");
                    if (f.landscape) { window.location.reload() }
                    f.landscape = false;
                    break;
                case 180:
                    break;
                case 90:
                    $("#rotateTipsPanel").show();
                    $("#rotateTipsPanel").removeClass(" rotateFromRight");
                    $("#rotateTipsPanel").addClass(" rotateFromLeft");
                    break;
                case -90:
                    $("#rotateTipsPanel").show();
                    $("#rotateTipsPanel").removeClass(" rotateFromLeft");
                    $("#rotateTipsPanel").addClass(" rotateFromRight");
                    break
            }
            f.old_orientation = window.orientation
        }
    };
    f.flyerInit = function() {
        f.checkBrower();
        $(".loadingPage,.mobiPage").on("touchmove", function(k) { k.preventDefault() });
        if (f.top._isOem) { $("#faiscoSiteA").attr("href", f._faiscoSite) } else {
            f.createWXQRcodeImg(f._aid, f._fid);
            $("#faiscoSiteA").removeAttr("href");
            $("#faiscoSiteA").on("click", function() { f.showWXQRcode() })
        }
        if ($("head").find("#temporaryStyle").length <= 0) { $("head").append('<style type="text/css" id="temporaryStyle"></style>') }
        if ($("head").find("#temporaryScript").length <= 0) { $("head").append('<script type="text/javascript" id="temporaryScript"><\/script>') }
        window.currentJumpPage = window.location.hash && window.location.hash.replace("#", "");
        if (window.currentJumpPage.indexOf("comment") > -1) { window.currentJumpOperation = window.currentJumpPage.split("_") && window.currentJumpPage.split("_")[1] } else {
            if (window.currentJumpPage.indexOf("msg") > -1) {
                window.currentMsgBoardId = window.currentJumpPage.split("_")[2];
                window.currentJumpPage = window.currentJumpPage.split("_")[0]
            } else {
                if (window.currentJumpPage.split("_").length > 1) {
                    window.autoClickLike = window.currentJumpPage.split("_")[1];
                    window.currentJumpPage = window.currentJumpPage.split("_")[0]
                }
            }
        }
        if (b("page") != null) { window.currentJumpPage = parseInt(b("page")) }
        window.currentJumpPage = parseInt(window.currentJumpPage);
        if (b("view") == "im" || b("view") == "vr") {
            f._templateData = [];
            f._layerData = [];
            if (b("view") == "vr") {
                var i = jQuery.extend(true, {}, window.parent.templateData[window.currentJumpPage]);
                f._templateData.push(i);
                f._layerData = window.parent.layerData ? window.parent.layerData : [];
                f._layerData = jQuery.extend(true, [], f._layerData)
            } else { f._templateData.push(jQuery.extend(true, {}, window.parent.template)) }
            f._originDataLength = 1;
            f.specialTemplateNoAni = true;
            window.currentJumpPage = 0
        }
        history.pushState("", document.title, window.location.pathname + window.location.search);
        f.initPageSlide();
        e();
        f.swiperCtrl();
        f.creatSpecialEffectsPage();
        f.initPageScroll();
        f.initLayerPage();
        if (f.top._showLoading) {
            if (window.currentJumpPage === window.currentJumpPage || b("view") == "im" || b("view") == "vr") {
                if (b("view") == "im" || b("view") == "vr") {
                    var h = "<style>.commercialTips,.oemTips,.faiscoSite{display:none!important;}</style>";
                    f.top._showLoading = false;
                    $("head").append(h)
                }
                c(window.currentJumpPage)
            } else {
                $("#loading").show();
                f.logDog(2000044, 0);
                d()
            }
        } else {
            c();
            f.preloadContentImages()
        }
        var g = null;
        var j = $(window).height();
        f.landscape = false;
        f.old_orientation = window.orientation;
        f.initLandscape();
        $(window).resize(function() {
            if (g) { clearTimeout(g) }
            g = setTimeout(function() { f.landscapeExchange() }, 350);
            if (f.isAndroid() && j == $(window).height()) { $(".f_formInput").blur() }
        })
    }
})(Flyer);
Flyer.setSlidedClass = function(b) { var a = $(b.slides[b.previousIndex]); if (!a.hasClass("slided")) { a.addClass("slided") } };
Flyer.hasSlidedClass = function(a, b) { if ($(a.slides[b]).hasClass("slided")) { return true } return false };
Flyer.blockSlide = function(a, c) {
    if (c) {
        var b = a.activeIndex;
        if (b == Flyer._originDataLength - 1 && Flyer._flyerVersion == 0) { return false }
        $(".eleActive").addClass("swiper-no-swiping")
    } else { Flyer.unlockSwipes() }
};
Flyer.pageAutoSlide = function() {
    var a = window.parent.pageSwiper;
    var b = a.activeIndex;
    var d = Flyer._templateData[b].templatetype;
    var c = Flyer._templateData[b].autoSlide;
    var e = Flyer._templateData[b].autoSlideDelay;
    c = (c === undefined ? false : c);
    e = (e === undefined ? 2 : e) * 1000;
    if (!Flyer.pageAutoSlideTime) { Flyer.pageAutoSlideTime = null } else { clearTimeout(Flyer.pageAutoSlideTime) }
    if (!c) { return }
    if ($(a.slides[b]).hasClass("slided")) { return }
    if (!d) { Flyer.pageAutoSlideTime = setTimeout(function() { a.slideTo(parseInt(b + 1)) }, Flyer.last_ele_animationEnd + e) } else {
        Flyer.pageAutoSlideTime = setTimeout(function() {
            Flyer.unlockSwipes();
            a.slideTo(parseInt(b + 1))
        }, e)
    }
};
Flyer.nomarlPageAutoSlide = function(d) {
    var a = window.parent.pageSwiper;
    var b = a.activeIndex;
    var c = Flyer._templateData[b].templatetype;
    if (!c) {
        Flyer.pageAutoSlide();
        Flyer.blockSlide(a, d)
    }
};
Flyer.toggleSlideBarShow = function(a) { if (Flyer._slideBar.flyerSlideBar) { var c = a.activeIndex; var b = Flyer._templateData[c].templatetype; if (b !== 1 && !Flyer.commercial.isCommercialPage(c)) { $("#flyer_page_bar").show() } else { $("#flyer_page_bar").hide() } } };
Flyer.audioCtrl = function() {
    var n;
    var a = $("#pageMusic").attr("data-src");
    var j = $("#pageMusic").attr("data-loop");
    var b = $("#pageMusic").attr("data-open");
    var f = $("#pageMusic").attr("data-auto");
    var i = $("#pageMusic").attr("data-usericon");
    var g = $("#pageMusic").attr("data-color");
    var d = $("#pageMusic").attr("data-iconpath");
    if (!b) { return }
    if (a == null || a == "") { Flyer.ing("éŸ³ä¹ä¸å­˜åœ¨!", true, 3000, "notice"); return }
    var o = false;

    function m() {
        var q;
        var r = $("#musicIcon");
        if (n) { return }
        if (window.Audio && (q = new Audio()).canPlayType("audio/mpeg")) {
            q.addEventListener("play", c, false);
            q.addEventListener("pause", l, false);
            q.addEventListener("ended", k, false);
            q.id = "musicplayer";
            q.src = a;
            if (j == "true") { q.loop = true } else { q.loop = false }
            if (f == "true") { q.autoplay = true } else { q.autoplay = false }
            if (!Flyer._templateData[0].templatetype && q.autoplay) { Flyer.audioAutoPlay(q) } else {
                q.pause();
                o = true
            }
            document.getElementById("pageMusic").appendChild(q);
            n = q;
            if (i == "true" && d) { r.css({ "background-image": "url(" + d + ")" }).addClass("hasPic") } else {
                r.css({ "background-color": Flyer.HexToRgba(g, 0.2) });
                r.find("div").css({ "background-color": Flyer.HexToRgba(g, 0.5) })
            }
        }
        e(0)
    }
    var e = function(q) {
        if (Flyer._templateData[q].templatetype === 1 && n) {
            if (!n.paused) {
                n.pause();
                o = true
            }
            $("#musicIcon").hide()
        } else {
            if (Flyer._templateData[q].templatetype === 99 && n) {
                if (o) { Flyer.audioAutoPlay(n) }
                $("#musicIcon").hide()
            } else {
                if (Flyer._templateData[q].templatetype === 3 && n) {
                    if (Flyer.getQueryString("view") == "vr") {
                        n.pause();
                        o = true;
                        $("#musicIcon").hide()
                    } else {
                        if (Flyer._templateData[q].vrPage.playMusic) { if (o) { Flyer.audioAutoPlay(n) } } else {
                            o = true;
                            n.pause()
                        }
                        if (Flyer._templateData[q].vrPage.musicTips) { $("#musicIcon").show() } else { $("#musicIcon").hide() }
                    }
                } else {
                    if (n) {
                        if (o && n.autoplay) { Flyer.audioAutoPlay(n) }
                        if (Flyer.isAndroid() && Flyer.checkSpecialEffects()) {
                            $("#musicIcon").hide();
                            setTimeout(function() { $("#musicIcon").show() }, 0)
                        } else { $("#musicIcon").show() }
                    }
                }
            }
        }
    };
    var h = false;
    Flyer.audioCtrl.musicAndVideoPlayer = function(q) {
        if (!n) { return }
        if (q === 0) {
            if (!n.paused) {
                n.pause();
                h = true
            }
        } else { if (q === 1) { if (h) { n.play() } } }
    };

    function c() {!$("#musicIcon").hasClass("musicIconRotate") && $("#musicIcon").addClass("musicIconRotate") }

    function l() { $("#musicIcon").removeClass("musicIconRotate") }

    function k() { if ($("#musicIcon:visible").length == 0) { return } if (!n.loop) { $("#musicIcon").removeClass("musicIconRotate") } else { _audio.play() } }
    $("#musicIcon").bind("click", function() {
        if (n.paused) { n.play() } else {
            o = false;
            h = false;
            n.pause()
        }
    });
    $(".fMain_content").bind("slidePageEnd", function(r) {
        var q = window.parent.pageSwiper;
        var r = q.activeIndex;
        e(r)
    });
    m()
};
Flyer.audioAutoPlay = function(a) {
    if (!Flyer.isWeiXin()) { a.play(); return }
    a.play();
    try { wx.checkJsApi({ jsApiList: ["checkJsApi"], success: function() { a.play() } }) } catch (b) {}
};
Flyer.getCurrentContentPage = function(b) {
    var a = window.parent.pageSwiper;
    if ($(".layerContain:visible").length > 0) {
        $(".layerContain:visible").hide();
        Flyer.__CSS3DCylinderObject && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex] && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex].update()
    }
    Flyer.initContentHtml(a, parseInt(b));
    a.slideTo(parseInt(b))
};
Flyer.allSlideEndCallBack = function() {
    var b = window.parent.pageSwiper;
    var a = b.activeIndex;
    var c = Flyer._templateData[a];
    var d = c.blockSlide || false;
    Flyer.getSlideNode(a).trigger("slidePageEnd", d);
    Flyer.nomarlPageAutoSlide(d);
    Flyer.showComment(a);
    if (Flyer._templateData[a].templatetype === 3) { Flyer.initCSS3DCylinder(a) }
};
Flyer.swiperCtrl = function() {
    var l = 1;
    var g = [];
    var d = Flyer.pageEffects[Flyer._pageEffect].dir,
        a = Flyer.pageEffects[Flyer._pageEffect].eff;
    if (!Flyer.top._isPreview) {
        var e = $("#pageContent .swiper-slide").length;
        e = Flyer._hasCommercialPage ? (e - 1) : e;
        for (var h = 0; h < e; h++) { g.push(h) }
        Flyer.logDog(2000025, l);
        g.splice(0, 1)
    }
    if (!Flyer.top._showFaiscoSite) { Flyer.top._showFaiscoSite = false }
    var c = [];
    var h = Flyer._templateData.length;
    while (h--) { if (Flyer._templateData[h].special_template_id == 90001) { c.push(m(h, "swiper_containerScale_big")) } else { if (Flyer._templateData[h].special_template_id == 90004) { c.push(m(h, "swiper_containerScale_big")) } } }

    function m(n, i) { return { index: n, animateClass: i } }
    var b = Flyer._slideBar.flyerSlideLoop || false,
        f = Flyer._slideBar.flyerSlideBar || false,
        j = Flyer._slideBar.flyerSlideBarColor || "#548cd4",
        k = Flyer._slideBar.flyerSlideIdx || false;
    if (f) { $(".swiper-pagination").show() }
    window.parent.pageSwiper = new Swiper("#pageContent", {
        paginationClickable: true,
        direction: d,
        effect: a,
        noSwiping: true,
        pageShadow: false,
        effDuration: 500,
        showSlideBar: f,
        pagination: ".swiper-pagination",
        paginationType: "progress",
        paginationProgressbarColor: j,
        loop: b,
        paginationProgressbarIdx: k,
        fixedAnimationPageList: c,
        initActive: window.currentJumpPage === window.currentJumpPage ? parseInt(window.currentJumpPage) : 0,
        onInit: function(n) {
            window.parent.pageSwiper = n;
            var i = n.activeIndex;
            Flyer.initContentHtml(n, i);
            Flyer.initContentHtml(n, i + 1);
            Flyer.toggleSlideBarShow(n);
            $(".fMain_content").delegate(".slideNextPage div", "click", function() { n.slideNext() });
            Flyer.commercial.statistics(0)
        },
        onCloseEvent: function(n) {
            var i = n.activeIndex;
            var o = n.previousIndex;
            Flyer.getSlideNode(o).trigger("existAtivePage")
        },
        onTransitionStart: function(n) {
            var i = n.activeIndex;
            var q = n.previousIndex;
            var o = $(".loadingPage:visible").length <= 0;
            if (q != i) { window.parent.$("#preCurrentPage").text(i + 1); if (Flyer.top._isFromPC) { window.parent.$(".flyerSimulator .simulatorMouse .upDownBtn").addClass("animating") } }
            if (q != i) { Flyer.stopComment(i) }
            if (o) {
                Flyer.creatSpecialEffectsPage();
                if (Flyer.checkSpecialEffects()) { $("#mobiPage").css("visibility", "hidden") }
                Flyer.setSlidedClass(n);
                if (!!Flyer.pageAutoSlideTime) { clearTimeout(Flyer.pageAutoSlideTime) }
            }
            Flyer.toggleSlideBarShow(n);
            Flyer.initContentHtml(n, i + 1);
            Flyer.initContentHtml(n, i + 2);
            if (n.getDirection() === "next") { Flyer.currentPageOfVR(n.activeIndex) } else { Flyer.initContentHtml(n, i) }
        },
        onTransitionEnd: function(n) {
            var i = n.activeIndex;
            var q = n.previousIndex;
            if (Flyer.top._isFromPC) { window.parent.$(".flyerSimulator .simulatorMouse .upDownBtn").removeClass("animating") }
            var o = $(".loadingPage:visible").length <= 0;
            var s = $(n.slides[i]);
            Flyer.chgWebTitle(Flyer.webTitle);
            Flyer.startComment(i);
            Flyer.getSlideNode(q).trigger("existAtivePage");
            Flyer.commercial.showFooter();
            if (o) {
                if (Flyer.checkSpecialEffects()) {
                    $("#mobiPage").css("visibility", "visible");
                    Flyer.specialEffectsStartCallBack()
                } else { Flyer.allSlideEndCallBack() }
                if (Flyer.top._isFromPC) { Flyer.checkWhetherLockSlide() }
                if (!Flyer.top._isPreview) {
                    var r = g.indexOf(i);
                    if (r != -1) {
                        g.splice(r, 1);
                        l++;
                        Flyer.logDog(2000025, l)
                    }
                }
            }
            if (q != i) { if (!Flyer.hasSlidedClass(n, i)) { Flyer.commercial.statistics(i) } }
            if (n.getDirection() === "pre") { Flyer.currentPageOfVR(n.activeIndex) }
        }
    })
};
(function(a) {
    a.ing = function(n, m, k, i) {
        a.removeAllIng();
        var f = (n == null || n == "") ? "æ­£åœ¨å¤„ç†..." : n;
        var e = document.body.clientWidth;
        var b = document.body.clientHeight;
        var j = "";
        var g = "position:absolute; top:50px; left: 50%; margin:0px auto; width:auto;  height:auto; z-index:9999;";
        var o = "transition: opacity ease .6s; -moz-transition: opacity ease .6s; -webkit-transition: opacity ease .6s; -o-transition: opacity ease .6s; opacity: 0; -webkit-opacity: 0; -moz-opacity: 0; -khtml-opacity: 0; filter:alpha(opacity=0);";
        j = "<div id='ing' class='ing f_DNSTraffic' style='" + g + o + "'></div>";
        if ($("#ing").length == 0) { $(j).appendTo("body") }
        var c = $("#ing");
        var r = $("body").scrollTop();
        var d = parseInt(Math.random() * 10000);
        var l = "";
        l += '<div id="' + d + '" class="tips"><div class="msg"><span class="msgIcon"></span><span class="tipsText">' + f + "</span></div><div class='close' onclick=\"Flyer.removeAllIng();\"></div></div>";
        c.find(".tips").remove();
        $(l).appendTo(c);
        $("#ing").css("width", "auto");
        var h = $(c).width();
        var q = $("#ing .tips .msg");
        $(c).css({ width: "100%", left: 0 });
        if (i) { q.addClass(i) }
        if (m) { a.removeIng(m, d, k) }
        $(c).css({ opacity: 1 })
    };
    a.formIng = function(o, n, l, j, k) {
        a.removeAllIng();
        var f = (o == null || o == "") ? "æ­£åœ¨å¤„ç†..." : o;
        var e = document.body.clientWidth;
        var b = document.body.clientHeight;
        var i = "";
        var g = "position:absolute; top:50px; left: 50%; margin:0px auto; width:auto;  height:auto; z-index:9999;";
        var q = "transition: opacity ease .6s; -moz-transition: opacity ease .6s; -webkit-transition: opacity ease .6s; -o-transition: opacity ease .6s; opacity: 0; -webkit-opacity: 0; -moz-opacity: 0; -khtml-opacity: 0; filter:alpha(opacity=0);";
        i = "<div id='ing' class='ing f_DNSTraffic' style='" + g + q + "'></div>";
        if ($("#ing").length == 0) { $(i).appendTo("body") }
        var c = $("#ing");
        var s = $("body").scrollTop();
        var d = parseInt(Math.random() * 10000);
        var m = "";
        m += '<div id="' + d + '" class="formTips tips"><div class="msg"><div class="msgDiv"><span class="msgIcon"></span><span class="tipsText">' + f + '</span></div><span class="tipsBtn">ç¡®å®š</span></div></div>';
        c.find(".tips").remove();
        $(m).appendTo(c);
        $("#ing").css("width", "auto");
        var h = $(c).width();
        var r = $("#ing .tips .msg");
        $(c).css({ width: "100%", left: 0 });
        if (j) { r.addClass(j) }
        if (n) { a.removeIng(n, d, l) }
        c.find(".tipsBtn").on("click", function() {
            if (k) { k() }
            a.removeAllIng()
        });
        $(c).css({ opacity: 1 })
    };
    a.removeAllIng = function() { $("#ing").remove() };
    a.removeIng = function(b, d, c) {
        if (a.ingTimer2) { clearTimeout(a.ingTimer2) }
        if (a.ingTimer1) { if (typeof(a.ingTimer1) === "object") { a.ingTimer1.stop() } else { if (typeof(a.ingTimer1) === "function" || typeof(a.ingTimer1) === "number") { clearTimeout(a.ingTimer1) } } }
        if (b) {
            if (typeof d != "undefined" && $("#" + d).length > 0) {
                a.ingTimer1 = window.setTimeout(function() { $("#" + d).fadeOut(1000) }, (c ? c : 3000));
                a.ingTimer2 = window.setTimeout(function() { $("#ing").remove() }, (c ? c + 1001 : 4001))
            } else {
                a.ingTimer1 = $("#ing .tips").fadeOut(1000);
                a.ingTimer2 = window.setTimeout(function() { $("#ing").remove() }, (c ? c : 3000))
            }
        } else {
            if (typeof d != "undefined" && $("#" + d).length > 0) {
                a.ingTimer1 = $("#" + d).fadeOut(500);
                a.ingTimer2 = window.setTimeout(function() { $("#ing").remove() }, 1000)
            } else {
                a.ingTimer1 = $("#ing .tips").fadeOut(500);
                a.ingTimer2 = window.setTimeout(function() { $("#ing").remove() }, 1000)
            }
        }
        $("#ing").css("opacity", 0)
    };
    a.createWXQRcodeImg = function(e, c) {
        if ($("#popupWxQrCode").length > 0) { return }
        var b = '<div id="popupWxQrCode" class="popupWxQrCode f_DNSTraffic"><div class="wxQrBg J_wxQrBg"></div><img id="commentWXQrcode" class="wxQrCodePic" src="' + a._resRoot + '/image/preview/wxQrCode.png?v=201603021424" style="z-index:2;"/><img id="specialWXQrcodeImg" class="wxQrCodePic" src="' + a._resRoot + '/image/preview/wxQrCodeBack.png?v=201605051405" /><img id="specialWXQrcode" class="wxQrCodePic1" src="" style="width:450px;height:450px;position:absolute;left:50%;top:40%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);" /></div>';
        $("body").append(b);
        if (a.top._isOperateManage) {
            var d = [];
            d.push("&flyerAid=" + e);
            d.push("&sceneId=" + c);
            $.ajax({
                type: "post",
                url: "/ajax/flyer.jsp?cmd=wxqrt",
                data: d.join(""),
                success: function(f) {
                    f = $.parseJSON(f);
                    if (f.success) {
                        if (f.data == "") {
                            $("#specialWXQrcodeImg").remove();
                            $("#specialWXQrcode").remove()
                        } else { $("#specialWXQrcode").attr("src", f.data) }
                    }
                }
            })
        } else { $("#commentWXQrcode").attr("src", a._resRoot + "/image/preview/wxQrCodeNormal.png?v=201612211401") }
        $("#popupWxQrCode #specialWXQrcode")[0].onload = function() { $("#commentWXQrcode").hide() };
        $("#popupWxQrCode").hide();
        if (!a.top._isOperateManage) {
            $("#specialWXQrcodeImg").remove();
            $("#specialWXQrcode").remove()
        }
    };
    a.showWXQRcode = function() {
        $("#popupWxQrCode").show();
        $("#popupWxQrCode .J_wxQrBg").on("click", function() { $("#popupWxQrCode").hide() })
    };
    a.clickFaiscoSite = function(b) {
        if (!a.top._isPreview) {
            b = isNaN(parseInt(b)) ? 0 : b;
            a.logDog(2000024, b)
        }
    };
    a.clickUIStat = function() { if (a.top._isUIManage && !a.top._isOperateManage) { a.statistics(2) } };
    a.webTitle = document.title;
    a.chgWebTitle = function(e) { if (document.title != e) { document.title = e; var c = $("body"); var b = navigator.userAgent.toLowerCase(); if (b.indexOf("micromessenger") >= 0) { var f = (b.indexOf("android") >= 0) ? "" : "/helo.jsp"; var d = $('<iframe class="f_DNSTraffic" style="display:none;" src="' + f + '"></iframe>').on("load", function() { setTimeout(function() { d.off("load").remove() }, 10) }).appendTo(c) } } };
    a.getElementLinkNode = function(h) {
        if (!h.link || h.type == "bg" || h.type == "folder") { return [] }
        var i = h.link,
            r = h.height;
        var d = [];
        var g = i.id;
        if (g) {
            var l = "",
                o = "";
            var j = i.con,
                k = i.pageid,
                f = i.productId,
                c = i.productShowType;
            k = isNaN(k) ? 0 : k;
            if (r == null) { l += "<div onclick='Flyer.clickEventTipsHidn(event)' class='link'><a href='" } else { l += "<div onclick='Flyer.clickEventTipsHidn(event)' class='link' style='height:" + r + "px'><a href='" }
            if (g == 1) { l += "javascript:Flyer.getCurrentContentPage(" + k + ");' >" } else {
                if (g == 2) {
                    if (j && j.indexOf("http://") < 0 && j.indexOf("https://") < 0) { j = "http://" + j }
                    if (j.indexOf("payapp.weixin.qq.com/aa/") > -1) { j = "" }
                    l += (j) + '\' target="_blank" >'
                } else {
                    if (g == 3) { l += "tel:" + (j) + "' >" } else {
                        if (g == 4) { l += "sms:" + (j) + "' >" } else {
                            if (g == 5) { l += "javascript:Flyer.getFlyerProductDetail(" + f + "," + c + ");' >" } else {
                                if (g == 6) { l += "javascript:void(window.parent.pageSwiper.slideNext())'>" } else {
                                    if (g == 7) {
                                        var b = "";
                                        if (i.gameId != 0) { b = i.gameUrl || "" }
                                        l += b + '\' target="_blank" >'
                                    } else {
                                        if (g == 8) { l += 'javascript:Flyer.getFlyerTaoBaoApp("' + (j) + "\")'>" } else {
                                            if (g == 9) {
                                                var m = i.layoutId;
                                                l += "javascript:Flyer.triggerPageLayout(" + m + ")'>"
                                            } else {
                                                if (g == 10) {
                                                    var n = h.contentIndex + "_" + h.elementUniqueId;
                                                    l += 'javascript:Flyer.superTrigger("' + n + "\");'>"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            o += "</a>";
            if (h.clickEventTips == true) {
                var e = (a._currentPageeMacEnterAniTime[h.contentIndex] * 1000) + 300;
                var q = "";
                switch (h.clickEventTipsPos) {
                    case 0:
                        q = " elementClickTipsPos-center-center";
                        break;
                    case 1:
                        q = " elementClickTipsPos-right-center";
                        break;
                    case 2:
                        q = " elementClickTipsPos-center-bottom";
                        break;
                    default:
                        q = "elementClickTipsPos-right-bottom ";
                        break
                }
                o += '<div  class="elementClickTipsPos la-ball-scale-multiple la-2x  ' + q + '"><div style="-webkit-animation-delay:' + e + "ms !important;animation-delay:" + e + 'ms !important;"></div><div style="-webkit-animation-delay:' + parseInt(e + 200) + "ms !important;animation-delay:" + parseInt(e + 200) + 'ms !important;"></div><div style="-webkit-animation-delay:' + parseInt(e + 400) + "ms !important;animation-delay:" + parseInt(e + 400) + 'ms !important;"></div></div>'
            }
            o += "</div>";
            d.push(l);
            d.push(o)
        }
        return d
    };
    a.superTrigger = function(b) {
        if (!b) { return }
        var d = a.triggerAnimation[b] || [];
        var c = b.split("_")[0];
        d.forEach(function(l, k) {
            var q = c + "_" + l.elementUniqueId;
            var n = $("[uniqueName=" + q + "]");
            var g = a.getTriggerAnimation(l);
            var h = {};
            h.uniqueName = q;
            h.animationData = {};
            h.animationData.aniList = g;
            if (l.type == "ptext") {
                h.animationData.textAnimationName = l.textAnimationName;
                h.animationData.isCursor = l.isCursor;
                h.animationData.textAnimationDir = l.textAnimationDir;
                h.animationData.textDirection = l.direction;
                h.animationData.textExitAnimationName = l.textExitAnimationName;
                h.animationData.textExitAnimationDir = l.textExitAnimationDir;
                h.animationData.textEmphaAnimationName = l.textEmphaAnimationName;
                h.animationData.textEmphaAnimationDir = l.textEmphaAnimationdir
            }
            var m = function(i) {
                if (i) { if (n.parents(".ele").find(".elementClickTipsPos").length != 0 && n.parents(".ele").find(".elementClickTipsPos").css("opacity") != 0) { n.parents(".ele").find(".elementClickTipsPos").css("opacity", 0) } } else {
                    if (n.parents(".ele").find(".elementClickTipsPos").length != 0 && n.parents(".ele").find(".elementClickTipsPos").css("opacity") != 1) {
                        var e = parseFloat(n.parents(".ele").find(".eleChild").css("animation-duration")) + parseFloat(n.parents(".ele").find(".eleChild").css("animation-delay"));
                        setTimeout(function() { n.parents(".ele").find(".elementClickTipsPos").css("opacity", 1) }, e * 1000)
                    }
                }
            };
            if (l.triggerType == 1) {
                if (n.parents(".ele").css("display") == "none" || n.css("display") == "none" || n.css("opacity") == "0") {
                    n.parents(".ele").show();
                    if (l.type == "ptext") { n.find(".editor").css("opacity", 1) }
                    a.executEleAnimate(n, h)
                }
                m()
            } else {
                if (l.triggerType == 2) {
                    if (n.parents(".ele").css("display") != "none" && n.css("display") != "none" && n.css("opacity") != "0") {
                        h.pointEventNone = true;
                        a.executEleAnimate(n, h)
                    }
                    m(true)
                } else {
                    if (l.triggerType == 3) {
                        var f = g.split(",");
                        if (n.parents(".ele").css("display") != "none" && n.css("display") != "none" && n.css("opacity") != "0") {
                            var j = f.pop();
                            var o = j;
                            h.animationData.aniList = o;
                            h.pointEventNone = true;
                            a.executEleAnimate(n, h);
                            m()
                        } else {
                            if (n.parents(".ele").css("display") == "none" || n.css("display") == "none" || n.css("opacity") == "0") {
                                f.pop();
                                var o = f.join("");
                                h.animationData.aniList = o;
                                a.executEleAnimate(n, h);
                                m(true)
                            }
                        }
                    }
                }
            }
        })
    };
    a.clickEventTipsHidn = function(b) {
        var c = $(b.target).siblings(".elementClickTipsPos");
        if (c.length == 0) { return }
        c.remove()
    };
    a.getTriggerAnimation = function(e) {
        var b = {};
        b.enterEffect = e.enterEffect != undefined ? e.enterEffect : true;
        if (!(e.type == "ptext" && e.textAnimation)) {
            b.enterShow = e.show;
            b.enterSpeed = e.speed * 1000 || 600;
            b.enterDelay = e.delay * 1000 || 0;
            b.textAnimationname = "";
            b.textAnimationiscursor = ""
        } else {
            b.enterShow = "textAnimation";
            b.enterSpeed = parseFloat(e.textAnimationSpeed * 1000) || 0.1;
            b.enterDelay = parseFloat(e.delay * 1000) || 0.5;
            b.textAnimationname = e.textAnimationName;
            b.textAnimationiscursor = e.isCursor;
            b.textanimationdir = e.textAnimationDir || "";
            if (b.textAnimationname == "fadeInNormal" || b.textAnimationname == "fadeInLeft") { if (b.textAnimationiscursor) { b.textAnimationname = "printWhitCursor" } else { b.textAnimationname = "print" } }
        }
        b.emphaEffect = e.emphaEffect || false;
        b.emphaShow = e.emphaShow || "";
        b.emphaSpeed = e.emphaSpeed * 1000 || 1000;
        b.emphaDelay = e.emphaDelay * 1000 || 0;
        b.emphaCount = e.emphaCount || 1;
        b.emphaLoop = e.emphaLoop || false;
        b.emphaCount = (b.emphaLoop) ? "infinite" : b.emphaCount;
        b.emphaInterval = e.emphaInterval * 1000 || 0;
        b.exitEffect = e.exitEffect || false;
        if (!(e.type == "ptext" && e.textExitAnimation)) {
            b.exitShow = e.exitShow || "";
            b.exitSpeed = e.exitSpeed * 1000 || 1000;
            b.exitDelay = e.exitDelay * 1000 || 0
        } else {
            b.exitShow = "textExitAnimation";
            b.exitSpeed = parseFloat(e.textExitAnimationSpeed * 1000) || 100;
            b.exitDelay = parseFloat(e.exitDelay * 1000) || 0;
            b.textExitAnimationname = e.textExitAnimationName;
            b.textExitanimationdir = e.textExitAnimationDir || ""
        }
        var d = "";
        if (e.triggerType == 1) {
            if (!b.enterEffect) {
                b.enterEffect = true;
                b.enterShow = "noeffect";
                b.enterSpeed = 50;
                b.enterDelay = 0
            }
        } else {
            if (e.triggerType == 2) {
                b.enterEffect = false;
                b.emphaEffect = false;
                if (!b.exitEffect) {
                    b.exitEffect = true;
                    b.exitShow = "noexiteffect";
                    b.exitSpeed = 50;
                    b.exitDelay = 0
                }
            } else {
                if (e.triggerType == 3) {
                    if (!b.enterEffect) {
                        b.enterShow = "noeffect";
                        b.enterEffect = true;
                        b.enterSpeed = 50;
                        b.enterDelay = 0
                    }
                    if (!b.exitEffect) {
                        b.exitEffect = true;
                        b.exitShow = "noexiteffect";
                        b.exitSpeed = 50;
                        b.exitDelay = 0
                    }
                }
            }
        }
        if (!!b.enterEffect) { d = b.enterShow + " " + b.enterSpeed + "ms " + b.enterDelay + "ms 1 both" }
        if (!!b.emphaEffect) {
            if (!(e.type == "ptext" && e.textEmphaAnimation)) {
                if (b.emphaShow != "") {
                    if (b.emphaInterval != 0) {
                        emphaAnimation = b.emphaShow + " " + b.emphaSpeed + "ms " + b.emphaDelay + "ms " + 1 + " forwards";
                        d += (d != "" ? "," : "") + emphaAnimation;
                        if (b.emphaCount == "infinite") {
                            for (var c = 0; c < 11; c++) {
                                emphaAnimation = b.emphaShow + " " + b.emphaSpeed + "ms " + b.emphaInterval + "ms " + 1 + " forwards";
                                d += "," + emphaAnimation
                            }
                        } else {
                            for (var c = 0; c < b.emphaCount - 1; c++) {
                                emphaAnimation = b.emphaShow + " " + b.emphaSpeed + "ms " + b.emphaInterval + "ms " + 1 + " forwards";
                                d += "," + emphaAnimation
                            }
                        }
                    } else {
                        emphaAnimation = b.emphaShow + " " + b.emphaSpeed + "ms " + b.emphaDelay + "ms " + b.emphaCount + " forwards";
                        d += (d != "" ? "," : "") + emphaAnimation
                    }
                }
            } else {
                b.textEmphaAnimationname = e.textEmphaAnimationName;
                b.textEmphaAnimationdir = e.textEmphaAnimationDir || "";
                b.emphaShow = "textEmphaAnimation";
                d += (d != "" ? "," : "") + b.emphaShow + " " + b.emphaSpeed + "ms " + b.emphaDelay + "ms 1 both"
            }
        }
        if (!!b.exitEffect && b.exitShow != "" && (!b.emphaEffect || !b.emphaLoop)) {
            exitAnimation = b.exitShow + " " + b.exitSpeed + "ms " + b.exitDelay + "ms 1 forwards";
            d += (d != "" ? "," : "") + exitAnimation
        }
        return d
    };
    a.getFlyerTaoBaoApp = function(d) {
        var e = location.href;
        var i = window.parent.pageSwiper;
        var l = i.activeIndex;
        var h = navigator.userAgent;
        var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var g = true;
        for (var j = 0; j < b.length; j++) { if (h.indexOf(b[j]) > 0) { g = false; break } }
        var c = h.toLowerCase();
        var f = /micromessenger/.test(c);
        var k = /qq/.test(c);
        if (!f && !g && !k) {
            if (d.indexOf("http") == 0 || d.indexOf("https") == 0) { d = d.replace(/(?:(https|http))/, "taobao") } else { if (d.indexOf("taobao") == -1) { d = "taobao://" + d } }
            window.open(d)
        } else {
            if (g) {
                if (d.indexOf("http") == -1 || d.indexOf("https") == -1) { d = "http://" + d }
                window.open(d)
            } else { location.href = "http://" + a._flyerDomain + "/TBAppJump.jsp?url=" + encodeURIComponent(d) + "&activeIndex=" + encodeURIComponent(l) + "&origin=" + encodeURIComponent(e) + "&isLowVersion=" + a._isLowVersion }
        }
    };
    a.filterTextHtml = function(d) {
        var c = /\<\/?script|embed|iframe[^\>]*>/ig;
        var b = /(\<[^\>]*?)(\bon[^\=]*)([^\>]*?\>)/ig;
        if (b.test(d) || c.test(d)) {
            var e = [];
            e.push("content=" + a.encodeUrl(d));
            $.ajax({ type: "post", data: e.join(""), url: "/ajax/log_h.jsp?cmd=logXSSDog&flyerAid=" + a._aid + "&flyerId=" + a._fid })
        }
        return d.replace(b, function(h, i, g, f) { return i + "___XSSFlyerEvent" + f }).replace(c, "")
    };
    a.isNumber = function(b) { if (/[^\d]/.test(b)) { return false } else { return true } };
    a.isIp = function(d) {
        if (typeof d != "string" || $.trim(d) == "") { return false }
        var c = d.split(".");
        if (c.length != 4) { return false }
        var b = true;
        $.each(c, function(f, g) { if (!a.isNumber(g) || parseInt(g) < 0 || parseInt(g) > 255) { b = false; return true } });
        return b
    };
    a.clearDNSTraffic = function() {
        var c = 0,
            b = setInterval(function() {
                $.each($("body>iframe"), function(f, g) {
                    if (!g.className || g.className.indexOf("f_DNSTraffic") === -1) {
                        var d = $.trim($(g).attr("src"));
                        var j = d;
                        var h = d.indexOf("http://");
                        if (h >= 0) { j = d.substring(h + 7) } else { return }
                        h = j.indexOf("/");
                        if (h > 0) { j = j.substring(0, h) }
                        h = j.indexOf(":");
                        if (h > 0) { j = j.substring(0, h) }
                        if (a.isIp(j)) {
                            $(g).remove();
                            a.logMsg("body be iframe DNSTraffic. iframeSrc=" + d + "; ")
                        }
                    }
                });
                $.each($("body>div"), function(f, g) {
                    if (!g.className || g.className.indexOf("f_DNSTraffic") === -1) {
                        var d = $(g).html();
                        if (!!d) { a.logMsg("body be div DNSTraffic. divhtml=" + d + "; ") }
                        $(g).remove()
                    }
                });
                c++;
                if (c >= 15) { clearInterval(b) }
            }, 500)
    }
})(Flyer);
(function(b) {
    var a = navigator.userAgent;
    b.isAndroid = function() { if (/Android/i.test(a) || /Linux/i.test(a)) { return true } return false };
    b.isIOS = (function() { if (/iPhone/i.test(a) || /iPad/i.test(a)) { return true } return false })();
    b.isWeiXin = function() { if (/MicroMessenger/i.test(a)) { return true } else { return false } };
    b.browserAgent = function() {
        var e = navigator.userAgent.toLowerCase();
        var c = /msie/i.test(e),
            f = /net/i.test(e),
            d = /firefox/i.test(e);
        if (c >= 0 || f >= 0 || d >= 0 || /Edge\/12./i.test(e)) {}
    };
    b.statistics = function(g) {
        var n = (b._aid).toString(32) + "Z" + (b._fid).toString(32);
        if (!b.top._isPreview) {
            var k = [];
            k.push("&flyerAid=" + b.encodeUrl(b._aid));
            k.push("&fid=" + b.encodeUrl(b._fid));
            var m = new Date();
            m.setMilliseconds(0);
            var e = m.getTime() / 1000;
            m.setHours(0);
            m.setMinutes(0);
            m.setSeconds(0);
            var o = m.getTime() / 1000;
            if (g == undefined) {
                if (localStorage.getItem("isStatUV" + n) == undefined) {
                    try { localStorage.setItem("isStatUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                    k.push("&statType=2");
                    if (b._chnlId.length > 0 && b._tfriendId.length > 0) {
                        var l = parseInt(b._chnlId, 32);
                        k.push("&chlId=" + b.encodeUrl(l));
                        b.addTFriendStat(2, b._chnlId);
                        var c = parseInt(b._tfriendId, 32);
                        k.push("&tfid=" + b.encodeUrl(c));
                        b.addTFriendStat(2, b._tfriendId)
                    } else {
                        if (b._chnlId.length > 0) {
                            var l = parseInt(b._chnlId, 32);
                            k.push("&chlId=" + b.encodeUrl(l));
                            b.addTFriendStat(2, b._chnlId)
                        } else {
                            if (b._tfriendId.length > 0) {
                                var c = parseInt(b._tfriendId, 32);
                                k.push("&tfid=" + b.encodeUrl(c));
                                b.addTFriendStat(2, b._tfriendId)
                            }
                        }
                    }
                } else {
                    var j = localStorage.getItem("isStatUV" + n);
                    if (j >= o) {
                        k.push("&statType=1");
                        if (b._chnlId.length > 0 && b._tfriendId.length > 0) {
                            var l = parseInt(b._chnlId, 32);
                            k.push("&chlId=" + b.encodeUrl(l));
                            b.addTFriendStat(1, b._chnlId);
                            var c = parseInt(b._tfriendId, 32);
                            k.push("&tfid=" + b.encodeUrl(c));
                            b.addTFriendStat(1, b._tfriendId)
                        } else {
                            if (b._chnlId.length > 0) {
                                var l = parseInt(b._chnlId, 32);
                                k.push("&chlId=" + b.encodeUrl(l));
                                b.addTFriendStat(1, b._chnlId)
                            } else {
                                if (b._tfriendId.length > 0) {
                                    var c = parseInt(b._tfriendId, 32);
                                    k.push("&tfid=" + b.encodeUrl(c));
                                    b.addTFriendStat(1, b._tfriendId)
                                }
                            }
                        }
                    } else {
                        try { localStorage.setItem("isStatUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                        k.push("&statType=2");
                        if (b._chnlId.length > 0 && b._tfriendId.length > 0) {
                            var l = parseInt(b._chnlId, 32);
                            k.push("&chlId=" + b.encodeUrl(l));
                            b.addTFriendStat(2, b._chnlId);
                            var c = parseInt(b._tfriendId, 32);
                            k.push("&tfid=" + b.encodeUrl(c));
                            b.addTFriendStat(2, b._tfriendId)
                        } else {
                            if (b._chnlId.length > 0) {
                                var l = parseInt(b._chnlId, 32);
                                k.push("&chlId=" + b.encodeUrl(l));
                                b.addTFriendStat(2, b._chnlId)
                            } else {
                                if (b._tfriendId.length > 0) {
                                    var c = parseInt(b._tfriendId, 32);
                                    k.push("&tfid=" + b.encodeUrl(c));
                                    b.addTFriendStat(2, b._tfriendId)
                                }
                            }
                        }
                    }
                }
            } else {
                if (b.top._isUIManage && !b.top._isOperateManage) {
                    if (g == 1) {
                        if (localStorage.getItem("isUIStatViewUV" + n) == undefined) {
                            try { localStorage.setItem("isUIStatViewUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                            k.push("&statType=4")
                        } else {
                            var i = localStorage.getItem("isUIStatViewUV" + n);
                            if (i >= o) { k.push("&statType=3") } else {
                                try { localStorage.setItem("isUIStatViewUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                                k.push("&statType=4")
                            }
                        }
                    } else {
                        if (g == 2) {
                            if (localStorage.getItem("isUIStatClickUV" + n) == undefined) {
                                try { localStorage.setItem("isUIStatClickUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                                k.push("&statType=6")
                            } else {
                                var h = localStorage.getItem("isUIStatClickUV" + n);
                                if (h >= o) { k.push("&statType=5") } else {
                                    try { localStorage.setItem("isUIStatClickUV" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                                    k.push("&statType=6")
                                }
                            }
                        }
                    }
                }
                if (g == 3) {
                    if (localStorage.getItem("isShareStat" + n) == undefined) {
                        try { localStorage.setItem("isShareStat" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                        k.push("&statType=7");
                        if (b._chnlId.length > 0 && b._tfriendId.length > 0) {
                            var l = parseInt(b._chnlId, 32);
                            k.push("&chlId=" + b.encodeUrl(l));
                            b.addTFriendStat(3, b._chnlId);
                            var c = parseInt(b._tfriendId, 32);
                            k.push("&tfid=" + b.encodeUrl(c));
                            b.addTFriendStat(3, b._tfriendId)
                        } else {
                            if (b._chnlId.length > 0) {
                                var l = parseInt(b._chnlId, 32);
                                k.push("&chlId=" + b.encodeUrl(l));
                                b.addTFriendStat(3, b._chnlId)
                            } else {
                                if (b._tfriendId.length > 0) {
                                    var c = parseInt(b._tfriendId, 32);
                                    k.push("&tfid=" + b.encodeUrl(c));
                                    b.addTFriendStat(3, b._tfriendId)
                                }
                            }
                        }
                    } else {
                        var f = localStorage.getItem("isShareStat" + n);
                        if (f < o) {
                            try { localStorage.setItem("isShareStat" + n, e) } catch (d) { if (d.name == "QuotaExceededError") {} }
                            k.push("&statType=7");
                            if (b._chnlId.length > 0 && b._tfriendId.length > 0) {
                                var l = parseInt(b._chnlId, 32);
                                k.push("&chlId=" + b.encodeUrl(l));
                                b.addTFriendStat(3, b._chnlId);
                                var c = parseInt(b._tfriendId, 32);
                                k.push("&tfid=" + b.encodeUrl(c));
                                b.addTFriendStat(3, b._tfriendId)
                            } else {
                                if (b._chnlId.length > 0) {
                                    var l = parseInt(b._chnlId, 32);
                                    k.push("&chlId=" + b.encodeUrl(l));
                                    b.addTFriendStat(3, b._chnlId)
                                } else {
                                    if (b._tfriendId.length > 0) {
                                        var c = parseInt(b._tfriendId, 32);
                                        k.push("&tfid=" + b.encodeUrl(c));
                                        b.addTFriendStat(3, b._tfriendId)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $.ajax({ type: "post", url: "/ajax/flyerstatistics.jsp?cmd=flyerStat", data: k.join(""), success: function(q) {} })
        }
    };
    b.addTFriendStat = function(d, c) {
        if (!b.top._isPreview) {
            var e = [];
            e.push("&flyerAid=" + b.encodeUrl(b._aid));
            e.push("&flyerId=" + b.encodeUrl(b._fid));
            e.push("&statType=" + b.encodeUrl(d));
            e.push("&tfid=" + b.encodeUrl(c));
            $.ajax({ type: "post", url: "/ajax/flyerTFriend.jsp?cmd=addFlyerTFriendStat", data: e.join(""), success: function(f) {} })
        }
    };
    b.logDog = function(e, c) {
        if (b.top._isUIManage && !b.top._isOperateManage) { return }
        if (b.top._isPreview) { return }
        var d = [2000046, 2000047, 2000048, 2000049, 2000109, 2000110, 2000111, 2000112];
        if (d.indexOf(e) > -1 && !b.isWeiXin()) { return }
        if (b.top._isOperateManage) {
            if (e == 2000022 || e == 2000023 || e == 2000024 || e == 2000025) { e += 10 } else { if (e == 2000044 || e == 2000045) { e += 6 } else { if (e == 2000046 || e == 2000047) { e -= 13 } else { if (e == 2000119) { return } } } }
            c = b._fid * 100 + c
        }
        setTimeout(function() { $.ajax({ type: "get", url: "/ajax/log_h.jsp?cmd=dog&dogId=" + b.encodeUrl(e) + "&dogSrc=" + b.encodeUrl(c) + "&aid=" + b.encodeUrl(b._faiscoAid) + "&flyerAid=" + b.encodeUrl(b._aid) + "&flyerId=" + b.encodeUrl(b._fid) }) }, 1000)
    };
    b.preloadContentImages = function() {
        if (!b._tmpContentImageList || b._tmpContentImageList.length < 2) { return }
        b._tmpContentImageList.splice(0, 2);
        for (var d in b._tmpContentImageList) {
            var c = b._tmpContentImageList[d];
            for (var f in c) {
                var e = new Image();
                e.src = c[f]
            }
        }
    };
    b.isJSON = function(c) { try { if (!c) { return false } else { var f = JSON.parse(c); return true } } catch (d) { return false } };
    b.checkFirstVisit = function() { if (b.isJSON(localStorage.getItem("visitedIdentifier"))) { var c = JSON.parse(localStorage.getItem("visitedIdentifier")); for (var d = 0; d < c.length; d++) { if (c[d] == b._identifier) { return false } } return true } else { return true } };
    b.saveIdentifier = function() {
        var c = localStorage.getItem("visitedIdentifier");
        if (b.isJSON(c) && JSON.parse(c) instanceof Array) { c = JSON.parse(c) } else { c = [] }
        c.push(b._identifier);
        localStorage.setItem("visitedIdentifier", JSON.stringify(c))
    };
    b.HexToRgba = function(c, e) {
        if (e != 1) {
            var f = parseInt(((c.indexOf("#") > -1) ? c.substring(1) : c), 16);
            var d = { r: f >> 16, g: (f & 65280) >> 8, b: (f & 255) };
            c = "rgba(" + d.r + "," + d.g + "," + d.b + "," + e + ")"
        }
        return c
    };
    b.hexToRgb = function(e, d) {
        if (/^rgba?/.test(e)) { return e }
        e.indexOf("#") > -1 && (e = e.slice(1));
        e = parseInt((e.length == 6 ? e : e.split("").map(function(f) { return f + f }).join("")), 16);
        var c = [e >> 16, (e & 65280) >> 8, e & 255];
        return d != undefined ? d >= 0 && d < 1 ? "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ")" : "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (100 - d) / 100 + ")" : "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")"
    };
    b.rgbToHSV = function(i) {
        i = i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        if (i.length == 4) {
            var g = Number(i[1]),
                l = Number(i[2]),
                c = Number(i[3]),
                h = Math.max(g, l, c),
                j = Math.min(g, l, c),
                f = h - j,
                k, e, d;
            if (g == l && l == c) {
                k = 0;
                e = 0
            } else {
                switch (h) {
                    case g:
                        k = (l - c) / f;
                        break;
                    case l:
                        k = 2 + (c - g) / f;
                        break;
                    case c:
                        k = 4 + (g - l) / f;
                        break
                }
                k *= 60;
                if (k < 0) { k += 360 }
                k = Math.round(k);
                e = Math.round(100 * (h - j) / h)
            }
            d = Math.round(100 * h / 255);
            return [k, e, d]
        }
    };
    b.HSVtoRgb = function(d, k) {
        var o = d[0],
            h = d[1],
            g = d[2],
            i, q, e;
        if (h == 0) { i = q = e = Math.round(255 * g / 100) } else {
            h = h / 100;
            g = g / 100;
            p = Math.floor(o / 60) % 6;
            var j = o / 60 - p;
            var n = g * (1 - h);
            var m = g * (1 - h * j);
            var l = g * (1 - h * (1 - j));
            switch (p) {
                case 0:
                    i = g;
                    q = l;
                    e = n;
                    break;
                case 1:
                    i = m;
                    q = g;
                    e = n;
                    break;
                case 2:
                    i = n;
                    q = g;
                    e = l;
                    break;
                case 3:
                    i = n;
                    q = m;
                    e = g;
                    break;
                case 4:
                    i = l;
                    q = n;
                    e = g;
                    break;
                case 5:
                    i = g;
                    q = n;
                    e = m;
                    break
            }
            i = Math.round(255 * i);
            q = Math.round(255 * q);
            e = Math.round(255 * e)
        }
        return k != undefined ? k >= 0 && k < 1 ? "rgba(" + i + "," + q + "," + e + "," + k + ")" : "rgba(" + i + "," + q + "," + e + "," + (100 - k) / 100 + ")" : "rgb(" + i + "," + q + "," + e + ")"
    };
    b.logShareType = function(c) {
        if (b.top._isPreview) { return }
        var d = 5;
        var e = 2000083;
        switch (c) {
            case 0:
                d = 0;
                break;
            case 1:
                d = 1;
                break;
            case 2:
                d = 2;
                break;
            case 3:
                d = 3;
                break;
            case 4:
                d = 4;
                break
        }
        $.ajax({ type: "get", url: "/ajax/log.jsp?cmd=logObjDog&dogId=" + e + "&dogSrc=" + d + "&flyerAid=" + b._aid + "&flyerId=" + b._fid })
    };
    b.logSlv = function(c) {
        if (b.top._isPreview) { return }
        var d = 10;
        var e = 2000087;
        switch (c) {
            case 0:
                d = 0;
                break;
            case 1:
                d = 0;
                break;
            case 2:
                d = 1;
                break;
            case 3:
                d = 2;
                break;
            case 4:
                d = 3;
                break;
            case 5:
                d = 4;
                break;
            case 6:
                d = 5;
                break;
            case 7:
                d = 6;
                break;
            case 8:
                d = 7;
                break;
            case 9:
                d = 8;
                break;
            case 10:
                d = 9;
                break
        }
        $.ajax({ type: "get", url: "/ajax/log.jsp?cmd=logObjDog&dogId=" + e + "&dogSrc=" + d + "&flyerAid=" + b._aid + "&flyerId=" + b._fid })
    };
    b.logMetaMsg = function() {
        if (b.top._isPreview) { return }
        var c = "flyer meta std";
        $.ajax({ type: "post", url: "/ajax/log.jsp?cmd=logMetaMsg", data: "userAgent=" + a + "&msg=" + c })
    };
    b.logMsg = function(c) {
        if (b.top._isPreview) { return }
        var c = c || "flyer msg std";
        $.ajax({ type: "post", url: "/ajax/log.jsp?cmd=log", data: "userAgent=" + a + "&msg=" + c })
    };
    b.logObjDog = function(e, d, c) {
        setTimeout(function() {
            if (b.top._isPreview) { return }
            c ? $.ajax({ type: "get", url: "/ajax/log.jsp?cmd=logObjDog&dogId=" + e + "&dogSrc=" + d + "&flyerAid=" + b._aid + "&flyerId=" + c }) : $.ajax({ type: "get", url: "/ajax/log.jsp?cmd=logObjDog&dogId=" + e + "&dogSrc=" + d + "&flyerAid=" + b._aid + "&flyerId=" + b._fid })
        }, 1000)
    };
    b.statSlv = function(g, l) {
        if (b.top._isPreview) { return }
        if (g == 0) { g = 1 } else { if (g > 10) { g = 11 } }
        var k = b._aid + "Z" + b._fid;
        var d = k + "Z" + g;
        var i = [];
        i.push("&flyerAid=" + b.encodeUrl(b._aid));
        i.push("&fid=" + b.encodeUrl(b._fid));
        i.push("&slv=" + b.encodeUrl(g));
        var j = new Date();
        j.setMilliseconds(0);
        var e = j.getTime() / 1000;
        j.setHours(0);
        j.setMinutes(0);
        j.setSeconds(0);
        var m = j.getTime() / 1000;
        if (l != undefined) {
            if (l) {
                if (localStorage.getItem(g + "isSlvShare" + k) == undefined) {
                    try { localStorage.setItem(g + "isSlvShare" + k, e) } catch (c) { if (c.name == "QuotaExceededError") {} }
                    i.push("&addType=isShare")
                } else {
                    var f = localStorage.getItem(g + "isSlvShare" + k);
                    if (f < m) {
                        try { localStorage.setItem(g + "isSlvShare" + k, e) } catch (c) { if (c.name == "QuotaExceededError") {} }
                        i.push("&addType=isShare")
                    }
                }
            } else {
                if (localStorage.getItem(g + "isSlvUV" + k) == undefined) {
                    try { localStorage.setItem(g + "isSlvUV" + k, e) } catch (c) { if (c.name == "QuotaExceededError") {} }
                    i.push("&addType=isUV")
                } else {
                    var h = localStorage.getItem(g + "isSlvUV" + k);
                    if (h >= m) { i.push("&addType=isPV") } else {
                        try { localStorage.setItem(g + "isSlvUV" + k, e) } catch (c) { if (c.name == "QuotaExceededError") {} }
                        i.push("&addType=isUV")
                    }
                }
            }
        }
        $.ajax({ type: "post", url: "/ajax/flyerstatistics.jsp?cmd=flyerStatSlv", data: i.join(""), success: function(n) {} })
    };
    b.mergeLog = function() {
        if (b.top._isPreview) { return }
        var t = [];
        var m = { logType: "flyerPlace", isLog: true };
        t.push(m);
        var z = { logType: "flyerFromType", isLog: true };
        var r = 4;
        var d = 2000084;
        if (b._fromType == "timeline") { r = 0 } else { if (b._fromType == "singlemessage") { r = 1 } else { if (b._fromType == "groupmessage") { r = 2 } else { if (b.isWeiXin()) { r = 3 } } } }
        z.srcId = r;
        z.dogId = d;
        t.push(z);
        var n = { logType: "flyerEquipment", isLog: true };
        var o = 3;
        var c = 2000085;
        if (b.top._isFromPC) { o = 2 } else { if (b.isAndroid()) { o = 0 } else { if (!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { o = 1 } } }
        n.srcId = o;
        n.dogId = c;
        t.push(n);
        var q = { logType: "flyerVer", isLog: true };
        var i = 0;
        var j = 2000091;
        if (b._flyerVersion == 1) { i = 1 } else { if (b._flyerVersion == 110) { i = 2 } else { if (b._flyerVersion == 120) { i = 3 } else { if (b._flyerVersion == 2) { i = 4 } } } }
        q.srcId = i;
        q.dogId = j;
        t.push(q);
        var w = { logType: "flyerPVAcct", isLog: true };
        var s = 0;
        var u = 2000090;
        w.srcId = s;
        w.dogId = u;
        t.push(w);
        var k = { logType: "flyerPVflyer", isLog: true };
        var x = 0;
        var l = 2000089;
        k.srcId = x;
        k.dogId = l;
        t.push(k);
        var g = { logType: "flyerPlaceStat", isLog: false };
        t.push(g);
        var y = { logType: "flyerFromTypeStat", isLog: false };
        var h = 105;
        if (b._fromType == "timeline") { h = 100 } else { if (b._fromType == "singlemessage") { h = 101 } else { if (b._fromType == "groupmessage") { h = 102 } else { if (b.isWeiXin()) { h = 103 } } } }
        y.statType = h;
        t.push(y);
        var e = { logType: "flyerEquipmentStat", isLog: false };
        var f = 203;
        if (b.top._isFromPC) { f = 202 } else { if (b.isAndroid()) { f = 200 } else { if (!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { f = 201 } } }
        e.statType = f;
        t.push(e);
        var v = [];
        v.push("&flyerAid=" + b.encodeUrl(b._aid));
        v.push("&fid=" + b.encodeUrl(b._fid));
        v.push("&logList=" + b.encodeUrl(JSON.stringify(t)));
        $.ajax({ type: "post", url: "/ajax/mergeStat.jsp?cmd=flyerLogMerge", data: v.join(""), success: function(A) {} })
    }
})(Flyer);
Flyer.getSlideNode = function(a, b, c) { if (!!c) { if (!!b && b != "") { return $(".layerContain " + b) } return $(".layerContain") } else { var a = a || 0; if (!!b && b != "") { return $(".fMain_content").eq(a).find(b) } return $(".fMain_content").eq(a) } };
Flyer.triggerAnimation = {};
Flyer.originAnimation = {};
Flyer.getInitElements = function(e) {
    var a = {};
    a.top = e.top + "px";
    a.left = e.left + "px";
    a.width = e.w;
    a.height = e.h;
    a.opacityInt = e.opacity;
    a.opacity = 1 - a.opacityInt * 0.01;
    a.rotate = e.rotate + "deg";
    a.type = e.type;
    a.con = e.con;
    a.isHidden = e.isHidden ? "display:none;" : "";
    a.boolIsHidden = e.isHidden;
    a.bgcolor = e.bgcolor;
    a.borderwidth = e["border-style"] == "double" ? ((parseInt(e["border-width"]) * 3) + "px") : (parseInt(e["border-width"]) + "px");
    a.borderwidth = parseInt(a.borderwidth) < 1 ? "1px" : a.borderwidth;
    if (e.type == "ptext") {
        a.width = e.w + parseInt(a.borderwidth) * 2;
        a.height = e.h + parseInt(a.borderwidth) * 2
    }
    a.borderradius = e.borderradius;
    a.boxshadowInt = e.boxshadow > 20 ? 20 : e.boxshadow;
    a.boxshadow = "none";
    if (e.type == "cards" && a.boxshadowInt != 0) { a.boxshadow = "0 3px " + a.boxshadowInt + "px rgba(0,0,0,.2)" } else { if (e.boxShadowX != 0 || e.boxShadowY != 0 || a.boxshadowInt != 0) { a.boxshadow = e.boxShadowX + "px " + e.boxShadowY + "px " + a.boxshadowInt + "px" + e.boxShadowColor } }
    a.borderstyle = e["border-style"];
    a.bordercolor = e["border-color"];
    a.fontcolor = e.ftcolor;
    if (e.type == "ptext" && !!e.module) {
        a.fontsize = (e.module.ftSize || e.ftsize) + "px";
        a.textindent = (e.module.textIndent || 0) + "em";
        a.skew = (e.module.skewX || 0) + "deg, " + (e.module.skewY || 0) + "deg";
        if (e.direction == "horizontal") { a.textshadow = e.module.isTextShadow ? e.module.textShadowX + "px " + e.module.textShadowY + "px " + e.module.textShadowBlur + "px " + e.module.textShadowColor : "none" } else { a.textshadow = e.module.isTextShadow ? -e.module.textShadowY + "px " + e.module.textShadowX + "px " + e.module.textShadowBlur + "px " + e.module.textShadowColor : "none" }
    } else {
        a.fontsize = e.ftsize + "px";
        a.textshadow = "none";
        a.textindent = "0em"
    }
    a.bold = e.fontbold;
    a.italic = e.fontitalic;
    a.uline = e.underline;
    a.fontbold = (a.bold == true ? "bold" : "normal");
    a.fontitalic = (a.italic == true ? "italic" : "normal");
    a.underline = (a.uline == true ? "underline" : "none");
    a.lineheight = e.lineheight;
    a.textalign = e.textalign;
    a.textvalign = e.textvalign;
    a.inw = e.inw;
    a.inh = e.inh;
    a.intop = e.intop + "px";
    a.inleft = e.inleft + "px";
    a.picw = e.picw;
    a.pich = e.pich;
    a.pict = e.pict + "px";
    a.picl = e.picl + "px";
    a.picid = e.picid;
    a.picidPath = e.tmp_pic_path ? "src='" + e.tmp_pic_path + "'" : "";
    a.linkParam = e.link || {};
    var b = Flyer.getElementLinkNode(e);
    a.linkContentString = "";
    if (b.length > 0) { a.linkContentString += b[0] + b[1] }
    a.textanimationdir = "";
    a.maskShape = Flyer.maskShapeList[e.maskShape];
    a.picFilter = e.picFilter || 0;
    a.enterEffect = e.enterEffect != undefined ? e.enterEffect : true;
    if (!(e.type == "ptext" && !!e.module && e.module.textAnimation)) {
        a.enterShow = e.show;
        a.enterSpeed = e.speed * 1000 || 600;
        a.enterDelay = e.delay * 1000 || 0;
        a.textAnimationname = "";
        a.textAnimationiscursor = ""
    } else {
        a.enterShow = "textAnimation";
        a.enterSpeed = parseFloat(e.module.textAnimationSpeed * 1000) || 0.1;
        a.enterDelay = parseFloat(e.delay * 1000) || 0.5;
        a.textAnimationname = e.module.textAnimationName;
        a.textAnimationiscursor = e.module.isCursor;
        a.textanimationdir = e.module.textAnimationDir || "";
        if (a.textAnimationname == "fadeInNormal" || a.textAnimationname == "fadeInLeft") { if (a.textAnimationiscursor) { a.textAnimationname = "printWhitCursor" } else { a.textAnimationname = "print" } }
    }
    a.emphaEffect = e.emphaEffect || false;
    a.emphaShow = e.emphaShow || "";
    a.emphaSpeed = e.emphaSpeed * 1000 || 1000;
    a.emphaDelay = e.emphaDelay * 1000 || 0;
    a.emphaCount = e.emphaCount || 1;
    a.emphaLoop = e.emphaLoop || false;
    a.emphaCount = (a.emphaLoop) ? "infinite" : a.emphaCount;
    a.emphaInterval = e.emphaInterval * 1000 || 0;
    a.exitEffect = e.exitEffect || false;
    if (!(e.type == "ptext" && !!e.module && e.module.textExitAnimation)) {
        a.exitShow = e.exitShow || "";
        a.exitSpeed = e.exitSpeed * 1000 || 1000;
        a.exitDelay = e.exitDelay * 1000 || 0
    } else {
        a.exitShow = "textExitAnimation";
        a.exitSpeed = parseFloat(e.module.textExitAnimationSpeed * 1000) || 100;
        a.exitDelay = parseFloat(e.exitDelay * 1000) || 0;
        a.textExitAnimationname = e.module.textExitAnimationName;
        a.textExitanimationdir = e.module.textExitAnimationDir || ""
    }
    var d = "";
    if (!!a.enterEffect) { d = a.enterShow + " " + a.enterSpeed + "ms " + a.enterDelay + "ms 1 both" }
    if (!!a.emphaEffect) {
        if (!(e.type == "ptext" && !!e.module && e.module.textEmphaAnimation)) {
            if (a.emphaShow != "") {
                if (a.emphaInterval != 0) {
                    emphaAnimation = a.emphaShow + " " + a.emphaSpeed + "ms " + a.emphaDelay + "ms " + 1 + " forwards";
                    d += (d != "" ? "," : "") + emphaAnimation;
                    if (a.emphaCount == "infinite") {
                        for (var c = 0; c < 11; c++) {
                            emphaAnimation = a.emphaShow + " " + a.emphaSpeed + "ms " + a.emphaInterval + "ms " + 1 + " forwards";
                            d += "," + emphaAnimation
                        }
                    } else {
                        for (var c = 0; c < a.emphaCount - 1; c++) {
                            emphaAnimation = a.emphaShow + " " + a.emphaSpeed + "ms " + a.emphaInterval + "ms " + 1 + " forwards";
                            d += "," + emphaAnimation
                        }
                    }
                } else {
                    emphaAnimation = a.emphaShow + " " + a.emphaSpeed + "ms " + a.emphaDelay + "ms " + a.emphaCount + " forwards";
                    d += (d != "" ? "," : "") + emphaAnimation
                }
            }
        } else {
            a.textEmphaAnimationname = e.module.textEmphaAnimationName;
            a.textEmphaAnimationdir = e.module.textEmphaAnimationDir || "";
            a.emphaShow = "textEmphaAnimation";
            d += (d != "" ? "," : "") + a.emphaShow + " " + a.emphaSpeed + "ms " + a.emphaDelay + "ms 1 both"
        }
    }
    if (!!a.exitEffect && a.exitShow != "" && (!a.emphaEffect || !a.emphaLoop)) {
        exitAnimation = a.exitShow + " " + a.exitSpeed + "ms " + a.exitDelay + "ms 1 forwards";
        d += (d != "" ? "," : "") + exitAnimation
    }
    a.animationData = d;
    a.hImagetype = e.hImagetype || 0;
    a.hDefaultImage = e.hDefaultImage || "";
    a.defaultNick = e.defaultNick || "å¾®ä¿¡æ˜µç§°";
    a.nicktype = e.nicktype || 0;
    a.tmp_pic_path = e.tmp_pic_path || "";
    if (e.type == "atlas") {
        if (e.module == undefined) {
            a.atlas_animation = e.atlas_animation;
            a.atlas_auto_play_time = e.atlas_auto_play_time;
            a.atlasList = e.atlas;
            a.atlasCutover = e.cutover
        } else {
            a.atlas_animation = e.module.atlas_animation;
            a.atlas_auto_play_time = e.module.atlas_auto_play_time;
            a.atlasList = e.module.atlasList;
            a.atlasCutover = e.module.cutover
        }
    }
    a.triggerAnimation = e.superTrigger || [];
    a.elementUniqueId = e.elementUniqueId || -1;
    a.direction = e.direction;
    a.module = e.module;
    a.clickEventTips = e.clickEventTips || false;
    a.clickEventTipsPos = e.clickEventTipsPos || 0;
    return a
};
Flyer.initTextanimation = function() {
    textanimation = {
        dealHtml: function(d) {
            for (var c = 0; c < d.length; c++) {
                var b = d[c];
                if (b.className == "textanimation") { continue }
                if (b.nodeType == Node.TEXT_NODE) {
                    var a = b.nodeValue;
                    a = a.replace(/./g, function(e) { return "<span class='textanimation'>" + (e == " " ? "&nbsp;" : e) + "</span>" });
                    $(a).insertAfter($(b));
                    $(b).remove()
                } else { this.dealHtml(b.childNodes) }
            }
        },
        textAni: function(a, e, k, f, d, i, c) {
            f = parseFloat(f);
            d = parseFloat(d);
            if (e == "print" || k) { c = "sequence" }
            if (k) {
                var g = "";
                if (a.find(".aniCursor").length < 1) { if (i == "horizontal") { g = $("<span class='aniCursor'>|</span>") } else { g = $("<span class='aniCursor vertical'>|</span>") } } else { g = a.find(".aniCursor").eq(0).css("visibility", "visible") }
                setTimeout(function() { g.insertBefore(a.find(".textanimation").eq(0)) }, f * 7 / 10)
            }
            a.find(".textanimation").addClass(e);
            var j = a.find(".textanimation").length;
            a.find(".textanimation").each(function(l, n) {
                var m = 0;
                if (c == "sequence") { m = f + l * d } else { if (c == "reverse") { m = f + (j - l - 1) * d } else { if (c == "shuffle") { m = f + parseInt(Math.random() * j) * d } } }
                $(n).css({ webkitAnimationDelay: m + "ms", animationDelay: m + "ms" })
            });
            var b = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend";
            var h = 0;
            a.find(".textanimation").unbind(b).bind(b, function(l) {
                $(this).css({ webkitAnimationDelay: "", animationDelay: "" }).removeClass(e);
                h++;
                if (k) { g.insertAfter($(this)); if (h == j) { setTimeout(function() { g.remove() }, 100) } }
                if (e.indexOf("Out") >= 0) { $(this).css("opacity", 0) }
                if (h == j) { if (e.indexOf("Out") >= 0) { a.parent().hide() } }
            })
        },
        removeAni: function(a) {
            a.parent().show();
            a.find(".textanimation").each(function() { $(this).replaceWith($(this).text()) });
            a.find(".aniCursor").remove()
        },
        initElement: function(h, b, g, d, e, f, a) {
            if (h.length > 0 && h.find(".textanimation").length < 1) {
                var c = h.html().replace(/>\s*</g, "><").replace(/^\s*|\s*$/g, "");
                h.html(c);
                this.dealHtml(h.get(0).childNodes)
            }
            this.textAni(h, b, g, d, e, f, a)
        }
    };
    return textanimation
};
Flyer.getAnimation = function(c) {
    var a = {},
        b = c.animationData;
    a.isHidden = c.boolIsHidden;
    if (b != "") {
        a.aniList = b;
        if (c.type === "ptext" && !!c.module) {
            a.textAnimationName = c.module.textAnimationName;
            a.isCursor = c.module.isCursor;
            a.textAnimationDir = c.module.textAnimationDir;
            a.textDirection = c.direction;
            a.textExitAnimationName = c.module.textExitAnimationName;
            a.textExitAnimationDir = c.module.textExitAnimationDir;
            a.textEmphaAnimationName = c.module.textEmphaAnimationName;
            a.textEmphaAnimationDir = c.module.textEmphaAnimationDir
        }
    }
    if (c.type === "puzzle") { a.aniList = "noeffect 1ms " + c.enterDelay + "ms 1 both" }
    return a
};
Flyer.executEleAnimate = function(f, g) {
    var b = Flyer.initTextanimation();
    var d = 0;
    var c = $.extend(true, {}, Flyer.originAnimation);
    if (!!g) { c[g.uniqueName] = g.animationData; if (!!g.pointEventNone) { f.parent().addClass("pointerEventNone") } else { f.parent().removeClass("pointerEventNone") } } else { f.parent().removeClass("pointerEventNone") }
    f.each(function(r) {
        b.removeAni($(this).find(".editor"));
        var v = $(this).attr("uniquename") || "";
        var w = c[v] || {};
        var s = $(this).parent();
        if (w.isHidden) { s.hide(); return true }
        $(this).attr("emphaCount", w.emphaCount);
        if (s.hasClass("f_Text")) { $(this).attr("textAniNum", 0) }
        var h = w.aniList || "";
        if (h != "") {
            $(this).css({ animation: "", "-webkit-animation": "", "-moz-animation": "", "-o-animation": "" });
            h = h.split(",") || [];
            var u = h[0];
            var o = "";
            var k = u.split(" ") || [];
            var n = parseInt(k[1]) || 0;
            var q = parseInt(k[2]) || 0;
            if (u.indexOf("textAnimation") == -1 && u.indexOf("textEmphaAnimation") == -1 && u.indexOf("textExitAnimation") == -1) {
                $(this).show();
                $(this).css({ animation: u, "-webkit-animation": u, "-moz-animation": u, "-o-animation": u });
                o = n + q
            } else {
                if (u.indexOf("textAnimation") >= 0) {
                    var l = w.textAnimationName || "";
                    var t = w.isCursor;
                    var m = w.textDirection;
                    var j = w.textAnimationDir;
                    b.initElement($(this).find(".editor"), l, t, q, n, m, j);
                    $(this).attr("istextanifinish", false);
                    o = q + n * ($(this).text().length - 1)
                } else {
                    if (u.indexOf("textEmphaAnimation") >= 0) {
                        var x = w.textEmphaAnimationName || "";
                        var t = false;
                        var m = w.textDirection;
                        var j = w.textEmphaAnimationDir;
                        b.initElement($(this).find(".editor"), x, t, q, n / $(this).find(".editor").text().length, m, j);
                        $(this).attr("istextanifinish", false);
                        o = q + n * ($(this).text().length - 1)
                    } else {
                        if (u.indexOf("textExitAnimation") >= 0) {
                            var x = w.textExitAnimationName || "";
                            var t = false;
                            var m = w.textDirection;
                            var j = w.textExitAnimationDir;
                            b.initElement($(this).find(".editor"), x, t, q, n, m, j);
                            $(this).attr("istextanifinish", false);
                            o = q + n * ($(this).text().length - 1)
                        }
                    }
                }
            }
            if (d < o) { d = o }
            $(this).attr("data-currentAni", 0)
        }
    });
    var a = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend";
    var e = "webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd";
    f.unbind(a).bind(a, function(u) {
        if ($(u.target).hasClass("fakerBg")) { return false }
        var w = $(this).attr("uniquename") || "";
        var i = c[w] || {};
        var j = i.aniList || "";
        if (j != "") {
            j = j.split(",") || [];
            var m = i.textAnimationName || "";
            var h = $(this).attr("istextanifinish") == "false";
            var l = $(this).attr("emphaCount") || 0;
            if (h) {
                var o = $(this).attr("textAniNum");
                o++;
                $(this).attr("textAniNum", o);
                if (o == $(this).find(".textanimation").length) {
                    var k = this;
                    $(k).attr("istextanifinish", true);
                    setTimeout(function() {
                        var J;
                        J = parseInt($(k).attr("data-currentAni"));
                        if (isNaN(J)) { J = 0 }
                        var H = j[J];
                        if (H.indexOf("textEmphaAnimation") > -1) {
                            if (l == "infinite") {
                                var F = H.split(" ") || [];
                                var C = i.textEmphaAnimationName || "";
                                var I = false;
                                var D = parseInt(F[1]) || 0;
                                var G = parseInt(F[2]) || 0;
                                var E = i.textDirection;
                                var B = i.textEmphaAnimationDir;
                                b.initElement($(k).find(".editor"), C, I, G, D / $(k).find(".editor").text().length, E, B);
                                $(k).attr("istextanifinish", false);
                                $(k).attr("textAniNum", 0);
                                return
                            } else {
                                l = parseInt(l);
                                l--;
                                if (l >= 1) {
                                    $(k).attr("emphaCount", l);
                                    var F = H.split(" ") || [];
                                    var C = i.textEmphaAnimationName || "";
                                    var I = false;
                                    var D = parseInt(F[1]) || 0;
                                    var G = parseInt(F[2]) || 0;
                                    var E = i.textDirection;
                                    var B = i.textEmphaAnimationDir;
                                    b.initElement($(k).find(".editor"), C, I, G, D / $(k).find(".editor").text().length, E, B);
                                    $(k).attr("istextanifinish", false);
                                    $(k).attr("textAniNum", 0);
                                    return
                                }
                            }
                        }
                        if (j.length > 11 && J > 10) { $(k).attr("data-currentAni", J) } else { $(k).attr("data-currentAni", ++J) }
                        var F = j[J];
                        if (!!F && F != "") {
                            if (F.indexOf("textExitAnimation") == -1 && F.indexOf("textEmphaAnimation") == -1) {
                                $(k).css({ animation: "none", "-webkit-animation": "none", "-moz-animation": "none", "-o-animation": "none" });
                                setTimeout(function() { $(k).css({ animation: F, "-webkit-animation": F, "-moz-animation": F, "-o-animation": F }) }, 0)
                            } else {
                                if (F.indexOf("textEmphaAnimation") > -1) {
                                    var K = F.split(" ") || [];
                                    var C = i.textEmphaAnimationName || "";
                                    var I = false;
                                    var D = parseInt(K[1]) || 0;
                                    var G = parseInt(K[2]) || 0;
                                    var E = i.textDirection;
                                    var B = i.textEmphaAnimationDir;
                                    b.initElement($(k).find(".editor"), C, I, G, D / $(k).find(".editor").text().length, E, B);
                                    $(k).attr("istextanifinish", "false");
                                    $(k).attr("textAniNum", 0)
                                } else {
                                    if (F.indexOf("textExitAnimation") > -1) {
                                        var K = F.split(" ") || [];
                                        var C = i.textExitAnimationName || "";
                                        var I = false;
                                        var D = parseInt(K[1]) || 0;
                                        var G = parseInt(K[2]) || 0;
                                        var E = i.textDirection;
                                        var B = i.textExitAnimationDir;
                                        b.initElement($(k).find(".editor"), C, I, G, D, E, B);
                                        $(k).attr("istextanifinish", "false");
                                        $(k).attr("textAniNum", 0)
                                    }
                                }
                            }
                        }
                    }, 0)
                }
            } else {
                var q;
                q = parseInt($(this).attr("data-currentAni"));
                if (isNaN(q)) { q = 0 }
                var z = j[q];
                if (!z) { return }
                if (z.indexOf("textEmphaAnimation") > -1) {
                    if (l == "infinite") {
                        var n = z.split(" ") || [];
                        var A = i.textEmphaAnimationName || "";
                        var s = false;
                        var v = parseInt(n[1]) || 0;
                        var x = parseInt(n[2]) || 0;
                        var r = i.textDirection;
                        var y = i.textEmphaAnimationDir;
                        b.initElement($(k).find(".editor"), A, s, x, v / $(k).find(".editor").text().length, r, y);
                        $(k).attr("istextanifinish", false);
                        $(k).attr("textAniNum", 0);
                        return
                    } else {
                        l = parseInt(l);
                        l--;
                        if (l >= 1) {
                            $(k).attr("emphaCount", l);
                            var n = z.split(" ") || [];
                            var A = i.textEmphaAnimationName || "";
                            var s = false;
                            var v = parseInt(n[1]) || 0;
                            var x = parseInt(n[2]) || 0;
                            var r = i.textDirection;
                            var y = i.textEmphaAnimationDir;
                            b.initElement($(k).find(".editor"), A, s, x, v / $(k).find(".editor").text().length, r, y);
                            $(k).attr("istextanifinish", false);
                            $(k).attr("textAniNum", 0);
                            return
                        }
                    }
                }
                if (j.length > 11 && q > 10) { $(this).attr("data-currentAni", q) } else { $(this).attr("data-currentAni", ++q) }
                var n = j[q];
                if (!!n && n != "") {
                    k = this;
                    if (n.indexOf("textExitAnimation") == -1 && n.indexOf("textEmphaAnimation") == -1) {
                        $(k).css({ animation: "none", "-webkit-animation": "none", "-moz-animation": "none", "-o-animation": "none" });
                        setTimeout(function() { $(k).css({ animation: n, "-webkit-animation": n, "-moz-animation": n, "-o-animation": n }) }, 0)
                    } else {
                        if (n.indexOf("textEmphaAnimation") > -1) {
                            $(this).attr("istextanifinish", "false");
                            $(k).attr("textAniNum", 0);
                            var t = n.split(" ") || [];
                            var A = i.textEmphaAnimationName || "";
                            var s = false;
                            var v = parseInt(t[1]) || 0;
                            var x = parseInt(t[2]) || 0;
                            var r = i.textDirection;
                            var y = i.textEmphaAnimationDir;
                            b.initElement($(this).find(".editor"), A, s, x, v / $(this).find(".editor").text().length, r, y)
                        } else {
                            if (n.indexOf("textExitAnimation") > -1) {
                                $(k).attr("istextanifinish", "false");
                                $(k).attr("textAniNum", 0);
                                var t = n.split(" ") || [];
                                var A = i.textExitAnimationName || "";
                                var s = false;
                                var v = parseInt(t[1]) || 0;
                                var x = parseInt(t[2]) || 0;
                                var r = i.textDirection;
                                var y = i.textExitAnimationDir;
                                b.initElement($(this).find(".editor"), A, s, x, v, r, y)
                            }
                        }
                    }
                }
            }
        }
    });
    return d
};
Flyer.createContentLayer = function(M, x) {
    var s = Flyer.calSize.getPercentBg();
    var A = M.bgColorType || 0;
    var C = A == 1 ? M.bgColorGradient : (A == 2 ? "transparent" : M.bgcolor);
    var w = !!M.pageLayoutId;
    var J = M.effect,
        v = M.special_template_id || 0,
        G = (v == 90003) ? "#f1f1f1" : C,
        e = (M.bgwidth || 750) * s,
        r = M.bgheight || 1206,
        r = (r == "auto") ? "auto" : r * s + "px",
        i = M.bgtop * s,
        k = M.bgleft * s,
        z = 1 - M.opacity / 100;
    var a = M.tmp_bgpic_path,
        j = "",
        E = M.bgtagimg;
    var f = M.bgType,
        c = M.bgFilter,
        d = M.bgTexture,
        g = M.bgTextureColor,
        q = M.bgGravity;
    var D = $(window).height();
    var u = $(window).width();
    var m = M.pageHeight;
    if (f == 1) {
        var L = M.tmp_bgTextureHtml;
        var I = new RegExp("bgSvg" + d, "g");
        var O = "pageBg" + x;
        L = L.replace(I, O)
    }
    var h = "";
    if (E) {
        if (f == 0 && q == true) {
            c = 0;
            var F = Flyer.bgGravityObj(M, x);
            var H = "transform: translate3d(_bgLeft_px, _bgTop_px, 0px);-ms-transform: translate3d(_bgLeft_px, _bgTop_px, 0px);-webkit-transform: translate3d(_bgLeft_px, _bgTop_px, 0px);";
            H = H.replace(/_bgLeft_/g, k);
            H = H.replace(/_bgTop_/g, i);
            h = H;
            Flyer.getSlideNode(x).bind("slidePageEnd", function() { F.init() })
        } else { h = "top:" + i + "px;left:" + k + "px;" }
    }
    var l = 0;
    if (v != 0) {
        l = M.special_template.manner || 0;
        if (l != 0) {
            var N = "/image/specialTemplate/handDrawings/background-01.jpg",
                B = "/image/specialTemplate/handDrawings/background-02.png";
            if (M.bgpic == "_flyerTemplate_0000051" || M.bgpic == "_flyerTemplate_0000042" || M.bgpic == "") { if ($.inArray(v, [90003, 90005, 90002]) >= 0) { a = Flyer._resRoot + B } else { a = Flyer._resRoot + N } }
        }
    }
    if ($.inArray(v, [90001, 90007]) >= 0) { j = '<div style="background-image:url(' + a + ');background-size: cover;background-position: center center;position:absolute;top:0;left:0;width:100%; height: 100%;"></div>' } else {
        if ($.inArray(v, [0, 90002, 90003, 90005, 90004, 90006, 90008]) >= 0) {
            if (f == 0 || v != 0) {
                if (a && ((!!w && A == 2) || !w)) {
                    if (E) {
                        var b = "";
                        if (M.bgFilterGradient && c == 2 && M.bgGradientType == 2) {}
                        j = '<img class="bgFilter picFilter' + c + '" src="' + a + '" style="position: absolute;z-index: 1; width:' + e + "px; height: " + r + "; opacity:" + z + ";" + b + h + '">';
                        if (M.bgFilterGradient && c == 2) {
                            var o = 0;
                            if (M.bgGradientType == 1) { o = z }
                            j += '<img class="bgFilterCopy" src="' + a + '" style="position: absolute;z-index:2;transition: all ' + M.bgGradientTime + "s; width:" + e + "px; height: " + r + "; opacity:" + o + ";" + h + '">'
                        }
                    } else { j = '<div class="picFilter' + c + '" style="background-image:url(' + a + ');background-size: cover;background-position: center center;position:absolute;width:100%; height: 100%;top:0; opacity:1; left: 0;"></div>' }
                } else { j = "" }
            } else {
                j = '<div class="pageBgTexture">' + L + "</div>";
                j += '<style type="text/css">.fMain_content:nth-child(' + (x + 1) + ") .contentBg svg{fill:" + g + ";stroke:" + g + ";opacity:" + z + "}</style>"
            }
        }
    }
    if ($.inArray(v, [90001, 90004, 90006, 90008]) >= 0 && l == 0) { j += "<div class='telegramTemplateBg'></div>" }
    var y = D - 1206;
    var n = m + y * 2;
    z = (!w && (a || f != 0)) ? 1 : z;
    var t = '<div class="contentBg ' + J + '" style="width:100%;height:100%;background: ' + G + ";opacity:" + z + ';">' + (M.templatetype === 3 ? "" : j) + "</div>";
    if (v === 0) { t += '<div class="contentEle" style="margin:0 auto;height:' + m + 'px;"></div>' } else {
        if ($.inArray(v, [90002, 90003, 90005, 90009]) >= 0) {
            var K = (v == 90009) ? "fzMsgPanel" : "wxMsgPanel";
            t += '<div id="flyerSpecialTemplate' + x + '" class="msgPanel ' + K + '" style="height:' + D + "px;width:" + u + 'px;"></div>'
        } else { t += '<div id="flyerSpecialTemplate' + x + '" class="contentEle flyerSpecialTemplate"></div>' }
    }
    return t
};
Flyer.recursiveEncodeData = function(b) { if (!b) { return } for (var d in b) { var a = b[d]; var c = Object.prototype.toString.call(a); if (d.indexOf("tmp") === -1 && (c === "[object Object]" || c === "[object Array]")) { Flyer.recursiveEncodeData(b[d]) } else { if (c === "[object String]") { if (d !== "flyerStyle" && d !== "bgColorGradient" && d !== "shapehtml" && d.indexOf("tmp") === -1 && !(d === "con" && b.type === "ptext")) { b[d] = Flyer.encodeHtml(b[d]) } } } } };
Flyer.createPageRequestAnimation = [];
Flyer.flyerCreatePage = function(o, e, l) {
    if (!o) { return }
    var i = new Date().getTime();
    Flyer.recursiveEncodeData(o);
    var f = [],
        q = [],
        g = 0;
    var h = o.special_template_id;
    var n = {};
    var c = {};
    if (o.templatetype !== 99) {
        var m = Flyer.createContentLayer(o, e);
        Flyer.getSlideNode(e, ".pageContentPanel").append(m);
        if (!o.bgGravity) {
            n.bgFilterGradient = o.bgFilterGradient;
            n.bgGradientTime = o.bgFilterGradient ? o.bgGradientTime : 0;
            n.bgGradientType = o.bgGradientType;
            n.bgFilter = o.bgFilter;
            if (n.bgFilterGradient) {
                var d = n.bgGradientType == 1 ? "To" : "Back";
                n.bgEffect = "bgFilter" + d + n.bgFilter;
                n.bgAnimation = n.bgEffect + " " + n.bgGradientTime + "s 0s 1 both"
            }
        }
    }
    if (!h && (!o.templatetype || o.templatetype == 2 || o.templatetype == 3)) {
        var r = o.content;
        var b = {};
        var a = 0;
        var k = (!Flyer.top._showLoading && e == 0) || window.currentJumpPage === window.currentJumpPage ? r.length : 5;
        var s = function() {
            for (var u = a, t = 0; u < r.length - 1, t < k; u++, t++) {
                elements = r[u];
                if (!elements) { continue }
                elements.contentIndex = e;
                c = Flyer.getInitElements(elements);
                g = g + 1;
                c.index = g;
                c.contentIndex = e;
                c.isLayer = false;
                c.openEffect = true;
                elements.elementUniqueId = c.elementUniqueId == -1 ? g : c.elementUniqueId;
                c.uniqueName = c.contentIndex + "_" + elements.elementUniqueId;
                if (elements.type != "bg" && elements.type != "folder") { Flyer.originAnimation[c.uniqueName] = Flyer.getAnimation(c); if (!!elements.link && elements.link.id == 10) { Flyer.triggerAnimation[c.uniqueName] = c.triggerAnimation } }
                d = c.type;
                if (Flyer[d + "Element"]) { if (!elements.moduleStyle || (!!elements.moduleStyle && !!elements.module)) { var v = Flyer[d + "Element"](elements, c) } }
            }
            if (a >= r.length - 1) {
                j(Flyer.createPageRequestAnimation[e]);
                Flyer.createPageRequestAnimation[e] = null
            } else {
                a += k;
                Flyer.createPageRequestAnimation[e] = requestAnimationFrame(s)
            }
        };
        var j = function(t) { cancelAnimationFrame(t) };
        s();
        Flyer.appendFooterHtml(e)
    } else { if (o.templatetype === 1) { Flyer[h](o, e, l) } else { if (o.templatetype === 99) { if (Flyer._flyerType >= 10) { Flyer.commercial.contestCommercialPage(e) } else { Flyer.commercial.createPage(e) } } } }
    Flyer.getSlideNode(e, "", c.isLayer).bind("slidePageEnd", function(y, A) {
        if (n.bgFilterGradient) {
            var x = { animation: "none", "-webkit-animation": "none", "-moz-animation": "none", "-o-animation": "none" };
            var t = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend";
            var w = Flyer.getSlideNode(e, ".pageContentPanel");
            if (n.bgFilter != 2) {
                w.find(".contentBg img").removeClass("picFilter" + n.bgFilter).css({ animation: n.bgAnimation, "-webkit-animation": n.bgAnimation, "-moz-animation": n.bgAnimation, "-o-animation": n.bgAnimation }).bind(t, function() {
                    if (n.bgGradientType == 1) { $(this).addClass("picFilter" + n.bgFilter) }
                    $(this).css(x)
                })
            } else {
                var v = w.find(".contentBg .bgFilter");
                var z = w.find(".contentBg .bgFilterCopy");
                if (n.bgGradientType == 1) { z.css("opacity", 0) } else { z.css("opacity", 1 - o.opacity / 100) }
                Flyer.getSlideNode(e, "", c.isLayer).bind("existAtivePage", function() { if (n.bgGradientType == 1) { z.css("opacity", 1 - o.opacity / 100) } else { z.css("opacity", 0) } })
            }
        }
        u();

        function u() {
            Flyer.last_ele_animationEnd = Flyer.executEleAnimate($(".eleActive .eleChild"));
            if (n.bgGradientTime * 1000 > Flyer.last_ele_animationEnd) { Flyer.last_ele_animationEnd = n.bgGradientTime * 1000 }
            if (Flyer._templateData[e].templatetype === 3) { $(".eleActive .slideNextPage ").hide(); return }
            $(".eleActive .slideNextPage ").hide();
            if (!!Flyer.animationEndTimer) { clearTimeout(Flyer.animationEndTimer) }
            Flyer.animationEndTimer = setTimeout(function() { Flyer.getSlideNode(e, ".pageContentPanel").trigger("enterAnimateEnd"); if (A) { if (e == Flyer._originDataLength - 1 && Flyer._flyerVersion == 0) { $(".eleActive .slideNextPage ").show() } } else { $(".eleActive .slideNextPage ").show() } }, Flyer.last_ele_animationEnd)
        }
    })
};
Flyer.initContentHtml = function(a, b) {
    if ($(a.slides[b]).hasClass("initContented") || b >= Flyer._templateData.length) { return }
    var c = Flyer.flyerCreatePage(Flyer._templateData[b], b, Flyer._templateData.length);
    $(a.slides[b]).addClass("initContented")
};
Flyer.getFooterHtml = function(f, c, b) {
    var d = "";
    if (f != Flyer._templateData.length - 1) {
        var e = (c == 1) ? " npBlack" : "npWrite";
        var a = (Flyer.pageEffects[Flyer._pageEffect].dir == "vertical") ? "b_slideNextPage" : "r_slideNextPage";
        d = '<div class="slideNextPage ' + a + " " + e + '" ><div></div></div>'
    } else { if (Flyer._openCommercial) { d = Flyer.commercial.createFooter(b) } }
    return d
};
Flyer.appendFooterHtml = function(b) { var a = Flyer.pageEffects[Flyer._pageEffect].dir; if (a === "horizontal") { Flyer.getSlideNode(b).append(Flyer.getFooterHtml(b)) } else { Flyer.getSlideNode(b, ".contentEle").append(Flyer.getFooterHtml(b)) } };
Flyer.getLastPageFooterHtml = function(c, b) { var a = c; if (a === Flyer._templateData.length - 1) { return Flyer.getFooterHtml(c, 0, b) } else { return "" } };
Flyer.initPageSlide = function() {
    var c = "",
        h = document.getElementById("flyer-swiper-wrapper");
    for (var g in Flyer._templateData) {
        var f = Flyer._templateData[g];
        var b = f.pageHeight || 1206;
        var a = $(window).height() - 1206;
        b += a;
        var d = f.templatetype == 2 || false;
        var e = f.templatetype == 3 ? "vrPage" : "";
        c += '<div class="fMain_content swiper-slide swiper-slide-' + g + " " + e + '" style=""><div class="swiper-pageScroll"><div class="pageContentPanel" style="height:' + b + 'px;" longpage="' + d + '"></div></div></div>'
    }
    h.innerHTML = c
};
Flyer.initPageScroll = function() {
    $(".fMain_content").bind("slidePageEnd", function() {
        var q = $(this).find(".pageContentPanel");
        var n = q.attr("longpage") == "true";
        if (n) {
            d();
            e(0)
        }
        if (!$(this).hasClass("slided") && n) {
            var m = window.parent.pageSwiper;
            if (m.params.direction == "vertical") { Flyer.lockSwipes() }
            var o = new IScroll(".eleActive .swiper-pageScroll", {
                bounceCallBack: function(r) {
                    if (r === "down") {
                        Flyer.unlockSwipes();
                        m.slideNext()
                    } else {
                        if (r === "up") {
                            Flyer.unlockSwipes();
                            m.slidePrev()
                        }
                    }
                },
                bindToWrapper: true,
                click: true,
                mouseWheel: Flyer.top._isFromPC,
                luckEvent: (m.params.direction == "vertical"),
                deceleration: 0.006,
                momentumMax: true,
                splitScreenRender: function(r) { e(r) }
            })
        }
    });
    var j = null;
    var f = $(window).height();
    var c = null;
    var g = 300;
    var b = [];
    var i = null;
    var l = 0;
    var k = -1;
    var h = 0,
        a = 0;

    function d() {
        b = [];
        g = parseFloat($(".eleActive .pageContentPanel").css("-webkit-transition-duration")) * 1000;
        var s = window.parent.pageSwiper.activeIndex;
        var r = Flyer._templateData[s].content;
        c = $(".eleActive").find(".ele");
        k = -1;
        i = [];
        for (var q = 0; q < r.length; q++) { if ($.inArray(r[q].type, ["bg", "folder"]) < 0) { i.push(r[q]) } }
        for (var q = 0; q < i.length; q++) {
            var t = parseInt(i[q].top);
            var n = t + parseInt(i[q].h);
            var o = Math.floor(t / f);
            var m = Math.floor(n / f);
            var u = s + "_" + i[q].elementUniqueId;
            if (o < 0) { o = 0 }
            if (m < 0) { m = 0 }
            if (!b[m]) { b[m] = [] }
            if (!b[o]) { b[o] = [] }
            if (o == m) { b[o].push([t, n, q, u]) } else {
                b[o].push([t, n, q, u]);
                b[m].push([t, n, q, u])
            }
            c.eq(q).removeClass("isShow eleExit eleEnter")
        }
    }

    function e(m) {
        if (m == null) { m = 300 }
        if (!!j) {
            clearInterval(j);
            j = null
        }
        j = setInterval(function() {
            var t = Math.abs($(".eleActive").find(".pageContentPanel").offset().top);
            if (t == null || k == t) {
                clearInterval(j);
                j = null;
                return
            }
            k = t;
            var y = t + f;
            var x = Math.floor(t / f);
            var n = Math.floor((y - 1) / f);
            var o = b[x] || [];
            if (x != n) { o = o.concat(b[n] || []) }
            if (h != x && h != n) { o = o.concat(b[h] || []) }
            if (a != x && a != n) { o = o.concat(b[a] || []) }
            h = x;
            a = n;
            for (var w = 0; w < o.length; w++) { var q = o[w][0]; var u = o[w][1]; var z = o[w][2]; var A = o[w][3]; var s = c.eq(z); if (u >= t && q <= y) { var v = A; if (!Flyer.originAnimation[v]) { s.show() } if (!Flyer.originAnimation[v].isHidden) { s.show(); if (!s.hasClass("isShow")) { s.addClass("isShow") } } } else { s.hide(); if (s.hasClass("isShow") && !s.hasClass("eleEnter") && !s.hasClass("eleExit")) { if (!(!!i[z].emphaEffect && !!i[z].emphaLoop)) { var r = s.find(".editor"); if (r.length > 0) { Flyer.initTextanimation().removeAni(r) } if (!!i[z].exitEffect) { s.addClass("eleExit") } else { s.addClass("eleEnter") } } } } }
        }, m)
    }
};
Flyer.initLayerPage = function() {
    if (!Flyer._layerData || Flyer._layerData.length <= 0) { return }
    var a = '<div class="layerContain f_DNSTraffic"><div class="closeLayer"></div><div class="layerContent"></div></div>';
    $("body").append(a);
    $(".layerContain").on("touchmove", function(b) { b.preventDefault() })
};
Flyer.createLayerSlide = function(a) {};
Flyer.triggerPageLayout = function(c) {
    if (c == null) {
        $(".layerContain").hide();
        $(".layerContain").trigger("existAtivePage");
        Flyer.__CSS3DCylinderObject && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex] && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex].update();
        return
    }
    var e;
    for (var f = 0; f < Flyer._layerData.length; f++) { if (c == Flyer._layerData[f].pageLayoutId) { e = Flyer._layerData[f]; break } }
    if (e == null) { Flyer.ing("è¯¥å¼¹çª—ä¸å­˜åœ¨", true, 3000, "notice"); return }
    var b = $(".layerContent").attr("layerId") || 0;
    if (b != c) {
        Flyer.recursiveEncodeData(e);
        $(".layerContent").html("");
        $(".layerContain").unbind("click");
        var a = Flyer.createContentLayer(e, c);
        $(".layerContent").append(a).show();
        $(".layerContent").attr("layerId", c);
        var h = e.content || [];
        var d = 0;
        for (var f = 0; f < h.length; f++) {
            elements = h[f];
            if (!elements) { continue }
            elements.contentIndex = c;
            options = Flyer.getInitElements(elements);
            d = d + 1;
            options.index = d;
            options.contentIndex = c;
            options.isLayer = true;
            options.openEffect = e.openEffect;
            options.uniqueName = options.contentIndex + "_" + (options.elementUniqueId == -1 ? d : options.elementUniqueId);
            if (elements.type != "bg" && elements.type != "folder") { Flyer.originAnimation[options.uniqueName] = Flyer.getAnimation(options); if (!!elements.link && elements.link.id == 10) { Flyer.triggerAnimation[options.uniqueName] = options.triggerAnimation } }
            type = options.type;
            if (Flyer[type + "Element"]) { if (!elements.moduleStyle || (!!elements.moduleStyle && !!elements.module)) { var g = Flyer[type + "Element"](elements, options) } }
        }
        if (!!e.closeLayout) {
            $(".layerContain").bind("click", function(i) {
                if ($(".contentEle").find(i.target).length <= 0) {
                    $(".layerContain").hide();
                    $(".layerContain").trigger("existAtivePage");
                    Flyer.__CSS3DCylinderObject && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex] && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex].update()
                }
            })
        }
    }
    $(".layerContain").show();
    if (!!e.openEffect) { Flyer.executEleAnimate($(".layerContent .eleChild")) } else { $(".layerContent .eleChild").show() }
    if (b != c) { $(".layerContain").trigger("slidePageEnd") }
    Flyer.__CSS3DCylinderObject && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex] && Flyer.__CSS3DCylinderObject[window.parent.pageSwiper.activeIndex].destory()
};
(function(a) {
    a.commercial = (function() {
        var c = {};
        var b = (function() {
            var j = {},
                e = "",
                d = "æ›´å¥½çŽ©çš„H5",
                i = 5;
            var k = 0;
            for (var k = 0, f = Flyer._originDataLength; k < f; k++) { if (i == 5) { var g = Flyer._templateData[k].content; for (var l in g) { if (g[l].type == "vote") { i = 4 } else { if (g[l].type == "form") { i = 3 } } } } if (i > 2 && Flyer._templateData[k].templatetype == 1) { i = 2 } if (i > 1 && Flyer._templateData[k].templatetype == 1 && [90002, 90003, 90005].indexOf(Flyer._templateData[k].special_template_id) != -1) { i = 1 } if (i > 0 && Flyer._templateData[k].openbullet) { i = 0; break } }
            switch (i) {
                case 0:
                    e = "å¯ä»¥å‘å¼¹å¹•çš„H5";
                    break;
                case 1:
                    e = "å¾®ä¿¡å¯¹è¯H5";
                    break;
                case 2:
                    e = "H5è¿˜å¯ä»¥è¿™æ ·çŽ©ï¼";
                    break;
                case 3:
                    e = "å¾®ä¿¡æŠ¥åH5";
                    break;
                case 4:
                    e = "å¾®ä¿¡æŠ•ç¥¨H5";
                    break;
                default:
                    e = "æ›´å¥½çŽ©çš„H5";
                    break
            }
            j = { priority: i, text_a: e, text_b: d };
            if (Flyer.top._isOperateManage) {
                var h = Flyer._flyerOtherOperatorParam;
                j = { priority: i, text_a: h.textType_a ? h.text_a : e, text_b: h.textType_b ? h.text_b : d }
            }
            return j
        })();
        c.createPage = function(i) {
            var f = "";
            var h = 0;
            if (Flyer.flyerABTestRandom) {
                f = b.text_a;
                h = (b.priority + 1) * 10 + 0
            } else {
                f = b.text_b;
                h = (b.priority + 1) * 10 + 1
            }
            var e = (!!Flyer._slideBar.flyerSlideBar ? (Flyer._slideBar.flyerSlideBarColor || "#548cd4") : "#548cd4");
            var d = Flyer._flyerRegedTitle.title == "" ? 'style="display:none;"' : "";
            Flyer.createWXQRcodeImg(Flyer._aid, Flyer._fid);
            var g = '<div class="commercial"><div class="bg"></div><div class="complaints"' + (Flyer.isWeiXin() ? 'onclick="Flyer.complaints.open();"' : 'style="cursor:default;"') + '><span class="complainIcon"></span>æŠ•è¯‰</div><div class="logo" style="background-image:url(\'' + Flyer.pageLogoImgSrc + '\');"></div><div class="title"><div class="commercialTitleText"><div class="line" ' + d + "></div>" + Flyer.encodeHtml(Flyer._flyerRegedTitle.title) + '<div class="line" ' + d + "></div></div></div>";
            if (!Flyer._ta) { g += '<div class="commercialButton" onclick="Flyer.logDog(2000047,' + h + ');Flyer.clickUIStat();Flyer.showWXQRcode();"><a>å…è´¹åˆ¶ä½œ</a></div>' } else { g += '<div class="commercialButton" onclick="Flyer.logDog(2000047,' + h + ');Flyer.clickUIStat();"><a href="http://' + Flyer._flyerHomeDomain + "/wxReg.html?_ta=" + Flyer._ta + '" target="_top">å…è´¹åˆ¶ä½œ</a></div>' }
            g += '<div class="commercialFooter"><div class="commercialText"><div class="commercialIcon"></div>å‡¡ç§‘å¾®ä¼ å•&nbsp;Â·&nbsp;' + f + "</div></div></div>";
            Flyer.getSlideNode(i, ".pageContentPanel").append(g)
        };
        c.createFooter = function(l) {
            var h = "";
            if (Flyer.top._isOem) { h += '<div class="faiscoSite oem" id="faiscoSite" onclick="Flyer.clickFaiscoSite();"><a class="hello" href="' + Flyer._faiscoSite + '" target="_top">' + Flyer._faiscoSiteText + "</a></div>" } else {
                var e = "";
                var d = 0;
                var n = "";
                var r = Flyer._templateData.length - 1;
                var k = Flyer._templateData[r];
                var j = $(".pageContentPanel").eq(r),
                    q = $(j.children()[1]);
                var t = -Math.ceil((j.height() - q.height()) / 2) + 20;
                var s = l ? "display:block;" : "display:none";
                if (Flyer.flyerABTestRandom) {
                    e = b.text_a;
                    d = (b.priority + 1) * 10 + 0
                } else {
                    e = b.text_b;
                    d = (b.priority + 1) * 10 + 1
                }
                var u = (!!Flyer._slideBar.flyerSlideBar ? (Flyer._slideBar.flyerSlideBarColor || "#548cd4") : "#548cd4");
                var o = "";
                var f = ["æˆ‘", "ä¹Ÿ", "è¦", "å…", "è´¹", "åˆ¶", "ä½œ", ">", ">"];
                for (var m = 0, g = f.length; m < g; m++) { o += '<span class="textflash">' + Flyer.encodeHtml(f[m]) + "</span>" }
                Flyer.createWXQRcodeImg(Flyer._aid, Flyer._fid);
                h += '<div class="commercialTips" style="bottom:' + t + "px;" + n + ";" + s + '"><div class="bg"></div><div class="complaints"' + (Flyer.isWeiXin() ? 'onclick="Flyer.complaints.open();"' : 'style="cursor:default;"') + '><span class="complainIcon"></span>æŠ•è¯‰</div>';
                if (!Flyer._ta) { h += '<div class="commercialButton" onclick="Flyer.logDog(2000110,' + d + ');Flyer.clickUIStat();Flyer.showWXQRcode();">' + o + "</a></div>" } else { h += '<div class="commercialButton" onclick="Flyer.logDog(2000110,' + d + ');Flyer.clickUIStat();"><a href="http://' + Flyer._flyerHomeDomain + "/wxReg.html?_ta=" + Flyer._ta + '" target="_top">' + o + "</a></div>" }
                h += "</div>"
            }
            return h
        };
        c.showFooter = function() { var d = $(".commercialTips"); if (d.length > 0 && d.is(":hidden")) { d.show() } };
        c.statistics = function(i) {
            if (Flyer._openCommercial) {
                var e = Flyer._templateData.length;
                var f = i === e - 1;
                var g = true;
                if (!Flyer.top._isPreview && f && !Flyer.top._showFaiscoSite) {
                    var h = 0;
                    if (!Flyer.flyerABTestRandom) { h = 1 }
                    if (Flyer.top._isOem) { Flyer.logDog(2000023, h) } else {
                        h = (b.priority + 1) * 10 + h;
                        Flyer.logDog(2000046, h);
                        if (Flyer.top._isUIManage && !Flyer.top._isOperateManage) { Flyer.statistics(1) }
                    }
                    Flyer.top._showFaiscoSite = true
                }
                var d = Flyer._slideBar.flyerSlideLoop || false;
                islastDataPage = (!g || Flyer.top._isOem) ? f : f - 1;
                if (!Flyer.top._isPreview && !d && (islastDataPage == i)) { Flyer.logObjDog(2000098, 0) }
            }
        };
        c.isCommercialPage = function(d) { if (!Flyer.top._isOem && Flyer._openCommercial && d == Flyer._templateData.length - 1) { return true } return false };
        c.contestCommercialPage = function(g) {
            var f = Flyer._resRoot + Flyer._joinContestInfo.companyLastPagePic;
            var d = $("<img id='contestAd'>");
            Flyer.getSlideNode(g, ".pageContentPanel").append(d);
            var e = document.getElementById("contestAd");
            e.src = f
        };
        return c
    })()
})(Flyer);
(function(b) {
    var a = $("#mobiPage .swiper-slide").length;
    window.parent.$("#mouseDown").addClass("disabled");
    window.parent.$("#mouseUp").addClass("disabled");
    if (!b.top._showLoading && a > 1) { window.parent.$("#mouseDown").removeClass("disabled") }
    window.parent.$("#mouseUp").unbind("click").bind("click", function() {
        if ($(this).hasClass("animating") || $(this).hasClass("disabled")) { return }
        if (window.parent.pageSwiper != null) {
            b.removeAllIng();
            window.parent.pageSwiper.slidePrev(true)
        }
    });
    window.parent.$("#mouseDown").unbind("click").bind("click", function() {
        if ($(this).hasClass("animating") || $(this).hasClass("disabled")) { return }
        if (window.parent.pageSwiper != null) {
            b.removeAllIng();
            window.parent.pageSwiper.slideNext(true)
        }
    });
    b.checkWhetherLockSlide = function() {
        var c = window.parent.pageSwiper;
        !c.params.allowSwipeToNext && window.parent.$(".flyerSimulator .simulatorMouse #mouseDown").addClass("disabled");
        !c.params.allowSwipeToPrev && window.parent.$(".flyerSimulator .simulatorMouse #mouseUp").addClass("disabled");
        c.params.allowSwipeToNext && window.parent.$(".flyerSimulator .simulatorMouse #mouseDown").removeClass("disabled");
        c.params.allowSwipeToPrev && window.parent.$(".flyerSimulator .simulatorMouse #mouseUp").removeClass("disabled");
        if (c.activeIndex == 0 && (!c.params.loop || !c.isOpenLoop)) { window.parent.$("#mouseUp").addClass("disabled") }
        if (c.isEnd() && !c.params.loop) { window.parent.$("#mouseDown").addClass("disabled") }
    };
    b.lockSwipeToNext = function() {
        if (!b.top._isFromPC) {
            window.parent.pageSwiper.params.allowSwipeToNext = false;
            b.checkWhetherLockSlide()
        }
    };
    b.lockSwipeToPrev = function() {
        if (!b.top._isFromPC) {
            window.parent.pageSwiper.params.allowSwipeToPrev = false;
            b.checkWhetherLockSlide()
        }
    };
    b.lockSwipes = function() {
        if (!b.top._isFromPC) {
            window.parent.pageSwiper.params.allowSwipeToNext = false;
            window.parent.pageSwiper.params.allowSwipeToPrev = false
        } else { b.checkWhetherLockSlide() }
    };
    b.unlockSwipeToNext = function() {
        window.parent.pageSwiper.params.allowSwipeToNext = true;
        b.checkWhetherLockSlide()
    };
    b.unlockSwipeToPrev = function() {
        window.parent.pageSwiper.params.allowSwipeToPrev = true;
        b.checkWhetherLockSlide(window.parent.pageSwiper)
    };
    b.unlockSwipes = function() {
        window.parent.pageSwiper.params.allowSwipeToNext = true;
        window.parent.pageSwiper.params.allowSwipeToPrev = true;
        b.checkWhetherLockSlide()
    }
})(Flyer);
(function(e) {
    var c = (function() {
        var j = function(l) { var m = document.createElement("div"); if (typeof l == "string") { m.innerHTML = l } return m.children[0] };
        var h = function(l) { return l.replace(/<[^>]+>/g, "") };
        var k = function(m, l) {
            if (l == null) {
                l = m;
                m = 0
            }
            return m + Math.floor(Math.random() * (l - m + 1))
        };
        var g = function(t) {
            var r, l;
            var q = t[0].toUpperCase() + t.slice(1),
                u = ["webkit", "moz", "MS", "ms", "o", ""];
            var m = document.createElement("div"),
                n = m.style;
            var o = 0,
                s = u.length;
            while (o < s) {
                r = u[o];
                l = (r) ? r + q : t;
                if (l in n) { return r ? ("-" + r + "-") : "" }
                o++
            }
            return undefined
        };
        var i = { tmplFactory: j, textFilter: h, random: k, prefixed: g };
        return i
    })();
    var f = (function() {
        function g(k, h) {
            if (!k) { return }
            var l = h * this.gutter + g.prototype.gutter * h;
            var j = "";
            var i = function(o) {
                var n = a.wxheadimg;
                var m = '<div class="flyerComment">';
                o.forEach(function(t, q) {
                    var u = t.headerImg,
                        s = t.ptype,
                        r = t.content;
                    var v = u ? "background-image:url(" + u + ");background-size: cover;background-position:0 0;" : "";
                    m += '<div class="flyerCommentFloat ' + (s === 1 ? "flyerCommentFloatDefualt" : "") + '">' + (n ? '<span class="flyerCommPortrait" style="' + v + '"></span>' : "") + '<span class="flyerCommContent">' + e.encodeHtml(r) + "</span></div>"
                });
                m += "</div>";
                return m
            };
            j += '<div class="flyerCommentLine  flyerCommentLine' + h + '" style="top:' + l + 'px" num="' + h + '">';
            j += i(k, 1);
            j += i(k, 2);
            j += "</div>";
            this.$dom = $(c.tmplFactory(j));
            this.top = l
        }
        g.ANIMATIONSPEED = [100, 120, 140, 160];
        g.prototype.TRANSFORM = c.prefixed("transform") + "transform";
        g.prototype.winW = 750;
        g.prototype.gutter = 60;
        g.prototype.defaultGutter = 80;
        g.prototype.setAnimation = function() {
            var u = this;
            var w = u.winW,
                v = u.top;
            var l = c.random;
            var m = 0,
                n = 0;
            var o, i, h;
            var t = this.$dom[0].querySelectorAll(".flyerComment"),
                k = t[0].querySelectorAll(".flyerCommentFloat"),
                x = 0,
                q = this.$dom.attr("num"),
                j = $("#flyerCommentStyle" + q);
            n = parseInt(this.$dom.attr("speed"));
            if (!n) {
                n = g.ANIMATIONSPEED.splice(l(0, g.ANIMATIONSPEED.length - 1), 1)[0];
                this.$dom.attr("speed", n)
            }
            if (k.length <= 0) { return }
            for (var s = 0, r = k.length; s < r; s++) { x += Math.ceil(k[s].offsetWidth) + 80 + 2 }
            x = x > w ? x : w;
            m = Math.ceil(2 * x / n);
            i = function() {
                var A = "infinite";
                var z = m / 2;
                var C = "animation:bullet_goleft_" + q + " " + m + "s linear " + A + " ";
                var B = "transform:translate3d(" + w + "px,0,0) ";
                var y = "";
                y += ".flyerCommentLine" + q + " .flyerComment:nth-child(1){width:" + x + "px;-webkit-" + C + ";" + C + ";-webkit-" + B + ";" + B + ";}@-webkit-keyframes bullet_goleft_" + q + "{0% {-webkit-transform:translate3d(" + w + "px,0,0);}100% {-webkit-transform:translate3d(-" + (2 * x - w) + "px,0,0);}}@keyframes bullet_goleft_" + q + "{0% {transform:translate3d(" + w + "px,0,0);}100% {transform:translate3d(-" + (2 * x - w) + "px,0,0);}}";
                C = C + z + "s ";
                y += ".flyerCommentLine" + q + " .flyerComment:nth-child(2){width:" + x + "px;-webkit-" + C + ";" + C + ";-webkit-" + B + ";" + B + ";}";
                return y
            };
            if (j.length > 0) {
                o = i();
                j.html(o)
            } else {
                o = '<style id="flyerCommentStyle' + q + '" type="text/css">';
                o += i();
                o += "</style>";
                $("head").append(o)
            }
            this.$dom[0].style.left = 0;
            this.$dom[0].style.top = v + "px";
            this.$dom[0].style.width = w + "px";
            this.$dom[0].style.height = k[0].clientHeight + "px"
        };
        return g
    })();
    var b = e.CView = (function() {
        function g() {
            var i = this;
            this.eachCommListLen = 0;
            this.VIEW_LINE = [1, 2, 3, 4];
            this.comments = [];
            this.initCommentBase(i);
            this.initBindEvent(i);
            this.sending = false;
            if (a.autoplay) {
                if (window.currentJumpOperation === "comment") {
                    var h = i.$comm_replay.toggle();
                    $("#flyerCommentPanel .replayInput").focus();
                    i.$comm_replay.addClass("show");
                    i.$comm_page.removeClass("show");
                    i.$comm_noshow.hide();
                    i.$comm_show.hide()
                } else { i.$comm_show.click() }
            } else { i.$comm_show.show() }
            i.$comm_operation.css("right", "0")
        }
        g.prototype.initCommentBase = function(h) {
            if ($("#flyerCommentOperation").length > 0) { return }
            var j = a.sendbullet,
                k = a.tips;
            var i = '<section id="flyerCommentPanel" class="flyerCommentPanel f_DNSTraffic"><div class="flyerCommentPage"></div><div class="flyerCommentReplayDisable"><div class="replayNoticeImg"></div><div class="replayNotice">è¶…å‡ºå¼¹å¹•å®¹é‡ä¸å…è®¸å‘é€</div><div class="closeNotice"></div></div>' + (j ? '<div class="flyerCommentReplay"><div class="commentReplay"><span class="replayBack"></span><input maxlength="30" class="replayInput" placeholder="' + (e.encodeHtml(k) ? e.encodeHtml(k) : "å‘æ¡å¼¹å¹•å‘—~") + '"/><span class="replaySend">å‘é€</span></div><div class="flyerCommentTips">æ­£åœ¨å‘é€å¼¹å¹•ä¸­.....</div></div>' : "") + '</section><div id="flyerCommentOperation" class="flyerCommentOperation f_DNSTraffic">' + (j ? '<div class="commmentO commmentReplay"><div class="bulletTips"><div class="bulletTipsInner"></div></div></div>' : "") + '<div class="commmentO commmentShow"></div><div class="commmentO commmentNoShow"></div></div>';
            $("body").append(i);
            h.$comm_tip = $("#flyerCommentPanel .flyerCommentTips");
            h.$comm_page = $("#flyerCommentPanel .flyerCommentPage");
            h.$comm_replay = $("#flyerCommentPanel .flyerCommentReplay");
            h.$commmentReplay = $("#flyerCommentOperation .commmentReplay");
            h.$comm_operation = $("#flyerCommentOperation");
            h.$comm_show = $("#flyerCommentOperation .commmentShow");
            h.$comm_noshow = $("#flyerCommentOperation .commmentNoShow")
        };
        g.prototype.initBindEvent = function(i) {
            i.$comm_replay.bind("click", function() {
                var m = i.$comm_replay.toggle();
                if (a.autoplay) {
                    i.$comm_page.addClass("show");
                    i.$comm_show.click()
                } else {
                    i.$comm_page.show();
                    i.$comm_page.addClass("show");
                    i.$comm_noshow.show()
                }
                $("#flyerCommentOperation").show()
            });
            $("#flyerCommentPanel .commentReplay").bind("click", function(m) { m.stopPropagation() });
            $("#flyerCommentPanel .flyerCommentReplay .replayBack").bind("click", function() {
                var m = i.$comm_replay.toggle();
                if (a.autoplay) {
                    i.$comm_page.addClass("show");
                    i.$comm_show.click()
                } else {
                    i.$comm_page.show();
                    i.$comm_page.addClass("show");
                    i.$comm_noshow.show()
                }
                $("#flyerCommentOperation").show()
            });
            $("#flyerCommentPanel .flyerCommentReplayDisable .closeNotice").bind("click", function() { $("#flyerCommentPanel .flyerCommentReplayDisable").removeClass("show").toggle() });
            $("#flyerCommentOperation .commmentReplay").bind("click", function() {
                if (a.isCountLimit) { $("#flyerCommentPanel .flyerCommentReplayDisable").addClass("show").toggle(); return }
                if (!e._userInfo_not.userName) {
                    if (e.isWeiXin()) { location.href = "/load.jsp?flyerAid=" + e._aid + "&flyerId=" + e._fid + "&slv=" + e._shareLevel + "&jump=" + window.parent.pageSwiper.activeIndex + "_comment"; return }
                    e.ing("è¯·åœ¨å¾®ä¿¡ä¸‹æäº¤å†…å®¹ï¼", true, 3000, "notice");
                    return
                }
                var m = i.$comm_replay.toggle();
                $("#flyerCommentPanel .replayInput").focus();
                i.$comm_replay.addClass("show");
                i.$comm_page.removeClass("show");
                i.$comm_noshow.hide();
                if (a.autoplay && a.showbulletswitch) { i.$comm_show.show() }
                $("#flyerCommentOperation").hide()
            });
            $("#flyerCommentOperation .commmentShow").bind("click", function() {
                i.$comm_replay.hide();
                i.$comm_replay.removeClass("show");
                a.commentsShow = true;
                if (!i.commentsInited) {
                    i.commentsInited = true;
                    i.getData(i.initData, i)
                } else {
                    i.show();
                    i.$comm_page.show();
                    i.$comm_page.addClass("show");
                    if (a.autoplay && !a.showbulletswitch) { i.$comm_noshow.hide() } else { i.$comm_noshow.show() }
                    i.$comm_show.hide()
                }
                if (a.sendbullet) { i.$commmentReplay.show() }
            });
            var k = 0,
                l = $("#flyerCommentOperation .commmentNoShow"),
                h = $(".flyerCommentPage");

            function j() {
                i.$comm_replay.hide();
                i.$commmentReplay.hide();
                i.$comm_replay.removeClass("show");
                if (a.autoplay && !a.showbulletswitch) {} else {
                    i.$comm_noshow.hide();
                    i.$comm_show.show()
                }
                i.hide();
                i.stopAnimation && i.stopAnimation()
            }
            l.bind("click", function() {
                a.commentsShow = false;
                j()
            });
            h[0].addEventListener("touchend", function(m) { m.preventDefault() });
            $("#flyerCommentPanel .replaySend").bind("click", function() { i.postData(i) })
        };
        g.prototype.initData = function(i) {
            var j = document.createDocumentFragment(),
                k, h;
            if (i.bulletList.length > i.VIEW_LINE.length) {
                i.VIEW_LINE.forEach(function(o, n) {
                    o = i.getSliceData(i);
                    k = new f(o, n);
                    if (!k.$dom) { return }
                    h = k.$dom;
                    i.comments.push(k);
                    j.appendChild(h[0])
                })
            } else {
                i.VIEW_LINE.forEach(function(o, n) {
                    o = i.bulletList.splice(0, 1);
                    k = new f(o, n);
                    if (!k.$dom) { return }
                    h = k.$dom;
                    i.comments.push(k);
                    j.appendChild(h[0])
                })
            }
            i.$comm_page.append(j);
            i.comments.forEach(function(o, n) { o.setAnimation(n) });
            if (i.comments.length - 1 > -1) {
                var l = i.comments[i.comments.length - 1].top + i.comments[i.comments.length - 1].$dom.height();
                i.$comm_page.css("height", l + "px")
            }
            var m = i.initAnimation();
            i.stopAnimation = m.stop;
            i.startAnimation = m.start;
            i.toggleAnimation = m.toggle;
            i.restartAnimation = m.restart;
            i.show();
            i.$comm_show.hide();
            if (a.autoplay && !a.showbulletswitch) { i.$comm_noshow.hide() } else { i.$comm_noshow.show() }
        };
        g.prototype.getSliceData = function(h) { if (!h.bulletList || h.bulletList.length === 0) { return } if (h.eachCommListLen == 0) { h.eachCommListLen = Math.floor(h.bulletList.length / h.VIEW_LINE.length) ? Math.floor(h.bulletList.length / h.VIEW_LINE.length) : 1 } var i; if (h.eachCommListLen + h.VIEW_LINE.length > h.bulletList.length) { i = h.bulletList.splice(0, h.bulletList.length) } else { i = h.bulletList.splice(0, h.eachCommListLen) } return i };
        g.prototype.postData = function(i) {
            if (i.sending) { return }
            var k = [],
                h = $("#flyerCommentPanel .replayInput").val(),
                j = "/ajax/flyerBullet.jsp?cmd=addFlyerBullet";
            if (!h.trim()) { e.ing("è¯·è¾“å…¥è¦æäº¤å†…å®¹ï¼", true, 3000, "notice"); return }
            if (!e.wx_openId) { e.ing("è¯·åœ¨å¾®ä¿¡ä¸‹æäº¤å†…å®¹ï¼", true, 3000, "notice"); return }
            i.sending = true;
            i.$comm_tip.show();
            k.push("&wx_openId=" + encodeURIComponent(e.wx_openId));
            k.push("&content=" + encodeURIComponent(h));
            k.push("&flyerId=" + e._fid);
            k.push("&flyerAid=" + e._aid);
            $.ajax({
                type: "POST",
                url: j,
                data: k.join(""),
                success: function(n) {
                    i.sending = false;
                    i.$comm_tip.hide();
                    n = jQuery.parseJSON(n);
                    if (n.success) {
                        if (i.comments && i.comments.length === 0) { $("#flyerCommentOperation .commmentShow").click() } else {
                            if (i.firstBullet) {
                                $($("#flyerCommentPanel .flyerCommentLine").find(".flyerComment")).html("");
                                i.firstBullet = false
                            }
                            n = n.data;
                            var o = (n.headerImg) ? "background-image:url(" + n.headerImg + ");" : "";
                            var m = (a.wxheadimg) ? '<span class="flyerCommPortrait" style="' + o + '"></span>' : "";
                            var l = '<div class="flyerCommentFloat">' + m + '<span class="flyerCommContent">' + e.encodeHtml(h) + "</span></div>";
                            $($("#flyerCommentPanel .flyerCommentLine")[0]).find(".flyerComment").prepend(l);
                            i.$comm_page.addClass("show");
                            i.comments[0].setAnimation(0);
                            $("#flyerCommentOperation .commmentShow").click();
                            setTimeout(function() { $("#flyerCommentOperation").show() }, 500)
                        }
                        $("#flyerCommentPanel .replayInput").val("")
                    } else { e.ing(n.msg, true, 3000, "notice") }
                },
                error: function(m, l) {
                    i.sending = false;
                    i.$comm_tip.hide();
                    console.log("send err")
                }
            })
        };
        g.prototype.getData = function(k, h) {
            h.$comm_page.show();
            var j = [],
                i = "/ajax/flyerBullet.jsp?cmd=getFlyerBullet";
            j.push("&flyerId=" + e._fid);
            j.push("&flyerAid=" + e._aid);
            $.ajax({
                type: "POST",
                url: i,
                data: j.join(""),
                success: function(l) {
                    l = jQuery.parseJSON(l);
                    if (l.success) {
                        if (l.bulletList.length === 0) {
                            l.bulletList = [];
                            h.firstBullet = true;
                            var m = { ptype: 1, content: "è¿™æ˜¯ç¤ºä¾‹å¼¹å¹•ï¼Œæœ‰æ–°å¼¹å¹•åŽä¼šè‡ªåŠ¨æ¶ˆå¤±" };
                            l.bulletList.push(m)
                        }
                        h.bulletList = l.bulletList;
                        k && k(h);
                        a.isCountLimit = l.isCountLimit
                    } else {
                        e.ing(l.msg, true, 3000, "notice");
                        h.firstBullet = false
                    }
                },
                error: function(m, l) { console.log("get err") }
            })
        };
        g.prototype.show = function(h) {
            if (this.isActive) { return }
            this.$comm_page.addClass("show");
            this.isActive = true;
            g.prototype.hasShown = true;
            $(".trangle").hide();
            if (_hideBulletTipsInnerCount == 0) { _hideBulletTipsInnerTimer = setTimeout(function() { $("div.bulletTips,div.bulletTipsInner").css({ animation: "none", "-webkit-animation": "none" }) }, 3000) } else { if (_hideBulletTipsInnerCount == 1) { $("div.bulletTips,div.bulletTipsInner").css({ animation: "none", "-webkit-animation": "none" }) } }
        };
        g.prototype.hide = function() {
            var h = this;
            h.$comm_page.removeClass("show");
            this.isActive = false;
            $(".trangle").show();
            _hideBulletTipsInnerTimer = null;
            _hideBulletTipsInnerCount++
        };
        g.prototype.toggle = function() { if (this.isActive) { this.hide() } else { this.show() } };
        g.prototype.initAnimation = function() {
            var j = this;
            cancelAnimation = true;
            var k = function() { cancelAnimation = true };
            var h = function() {
                if (cancelAnimation) {
                    cancelAnimation = false;
                    i()
                }
            };
            var l = function() {};
            var m = function() {
                cancelAnimation = false;
                j.comments.forEach(function(o, n) { o.setAnimation(n) });
                i()
            };
            j.loopBreak = 0;

            function i() {}
            return { stop: k, start: h, restart: m, toggle: l }
        };
        return g
    })();
    var d, a;
    _hideBulletTipsInnerTimer = null, _hideBulletTipsInnerCount = 0;
    e.stopComment = function(g) {
        var h = e._templateData[g];
        if (!!e.startBulletTimer) {
            clearTimeout(e.startBulletTimer);
            e.startBulletTimer = null
        }
        if (d && (!h.openbullet || !!h.templatetype)) {
            d.$comm_show.hide();
            d.$comm_noshow.hide();
            d.$comm_page.removeClass("show");
            d.$commmentReplay.hide();
            d.stopAnimation && d.stopAnimation()
        }
    };
    e.startComment = function(g) {
        if (!!e.startBulletTimer) {
            clearTimeout(e.startBulletTimer);
            e.startBulletTimer = null
        }
        var h = e._templateData[g];
        if (!h || !h.openbullet || !!h.templatetype) {
            if (d) {
                d.$comm_noshow.click();
                d.$comm_show.hide();
                d.$commmentReplay.hide()
            }
            return
        } else { if (d) { if (a.autoplay) { d.$comm_show.click(); if (a.showbulletswitch) { d.$comm_show.hide() } else { d.$comm_noshow.hide() } } else { if (!a.commentsShow) { d.$comm_show.show() } } return } }
    };
    e.initComment = function(g) {
        if (!d) {
            a = e._flyerOtherBulletParam;
            d = new e.CView()
        }
    };
    e.showComment = function(g) {
        var h = e._templateData[g];
        if (!h || !h.openbullet || !!h.templatetype || d) { return }
        var i = e.last_ele_animationEnd;
        if (window.currentJumpOperation === "comment") { i = 0 }
        if (!!e.startBulletTimer) {
            clearTimeout(e.startBulletTimer);
            e.startBulletTimer = null
        }
        e.startBulletTimer = setTimeout(function() {
            if (e._slideBar.flyerSlideLoop) {
                g = g ? g : 1;
                e.initComment(g - 1)
            } else { e.initComment(g) }
            clearTimeout(e.startBulletTimer);
            e.startBulletTimer = null
        }, i)
    }
})(Flyer);
Flyer.showProductPageInAndrod = function() {
    $("#mobiPage").hide();
    $("#productDetailLinkPanel").show();
    $("#productDetailLinkPanel").addClass("isAndroidBrowser").removeClass("isNotAndroidBrowser");
    var c = Math.floor($(window).height() * 0.8),
        a = $(window).width() * 0.8;
    a = (!$("#outLink").hasClass("outsiteLink") && a >= 640) ? 640 : a;
    var b = Math.floor(($(window).width() - a) / 2);
    if ($(".productIframe").hasClass("forRight")) { b = 2 * b }
    $(".productIframe").css({ width: a, left: b, });
    if (navigator.userAgent.toLowerCase().indexOf("mqqbrowser") >= 0) { $(".productIframe .ifm").css({ position: "absolute" }) }
    $(".productMarkClose , #productDetailLinkPanel .close").one("click", function() {
        $("#mobiPage").show();
        $(".productIframe").remove();
        $("#productDetailLinkPanel").hide();
        window.parent.pageSwiper.unlockSwipes()
    })
};
Flyer.getFlyerProductDetail = function(a, c) {
    window.parent.pageSwiper.lockSwipes();
    if (!a) { Flyer.ing("è¯¥äº§å“ä¸å­˜åœ¨", true, 3000, "notice"); return }
    var b = [];
    b.push("&flyerAid=" + Flyer._aid);
    b.push("&productId=" + a);
    b.push("&showType=" + c);
    $("#productDetailLinkPanel").show();
    $("#ajaxLoading").show();
    $("#productDetailLinkPanel .productMarkClose").unbind("click").bind("click", function() {
        $("#productDetailLinkPanel").hide();
        $("#productPanel").remove();
        window.parent.pageSwiper.unlockSwipes()
    });
    $("#productDetailLinkPanel").addClass("isNotAndroidBrowser");
    $.ajax({
        type: "post",
        url: "/ajax/flyerProduct.jsp?cmd=getFlyerProductExtInfo",
        data: b.join(""),
        error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 3000, "notice") },
        success: function(h) {
            var d = jQuery.parseJSON(h);
            $("#productDetailLinkPanel").append(d.data);
            if (d.success) {
                if (parseInt(d.type) == 0) {
                    var f = $("#productDetail-swiper-container_" + a).find(".swiper-slide").length;
                    var e = (f > 1) ? true : false;
                    Flyer.calSize.setCSS_scale();
                    $("#productPanel").show();
                    if (f > 1) { var i = new Swiper("#productDetail-swiper-container_" + a, { pagination: ".swiper-pagination", paginationType: "bullets", paginationClickable: true, loop: e, direction: "horizontal", onTransitionStart: function(j, k) {} }) }
                    $("#ajaxLoading").hide()
                } else {
                    if (Flyer.isAndroid()) { Flyer.showProductPageInAndrod() } else { Flyer.calSize.setCSS_scale() }
                    $("#productPanel").show();
                    var g = document.getElementById("outLink");
                    g.src = d.link;
                    g.onload = function() {
                        $("#ajaxLoading").hide();
                        $(".productIframe .panelAni").css({ visibility: "visible" })
                    }
                }
                $("#productDetailLinkPanel .productMarkClose , #productDetailLinkPanel .close").one("click", function() {
                    $("#productDetailLinkPanel").hide();
                    $("#productPanel").remove();
                    window.parent.pageSwiper.unlockSwipes()
                })
            } else {
                $("#ajaxLoading").hide();
                $("#productDetailLinkPanel").hide();
                Flyer.ing(d.msg, true, 3000, "notice")
            }
        }
    })
};
(function(a) {
    a.formElement = function(s, e) {
        var f = "",
            G = "",
            i = "f_Form_" + e.contentIndex + "_" + e.index;
        var k = false;
        var c = s.module;
        var D = s.moduleId;
        var b = c.pbuttontxt;
        var n = c.formcolor;
        var x = c.successtxt;
        var F = c.formid;
        var w = s.tmpFormFailCount;
        var l = s.tmpFormMaxCount;
        var A = c.formWXLimitSwitch;
        var d = c.formSubmitEvent;
        var h = c.formJumpPage;
        var v = function(I, H) {
            if (H) { return H } else {
                switch (I) {
                    case "text":
                        return "è¯·è¾“å…¥æ–‡å­—";
                        break;
                    case "radio":
                    case "checkbox":
                        return "è¯·è¾“å…¥ä¸‹åˆ—é€‰é¡¹";
                        break;
                    case "date":
                        return "è¯·é€‰æ‹©æ—¥æœŸ";
                        break;
                    case "time":
                        return "è¯·é€‰æ‹©æ—¶é—´";
                        break
                }
            }
        };
        n = Flyer.HexToRgba(n, e.opacity);
        var y = c.forms;
        for (var u in y) {
            u = y[u];
            u.name = u.name
        }
        var j = w >= l ? "block" : "none";
        f += '<div id="' + i + '" class="ele f_Form" style="top:' + e.top + ";width:" + e.width + "px;height:" + e.height + "px; left: " + e.left + "; z-index: " + e.index + ";" + e.isHidden + " -moz-transform:rotate(" + e.rotate + ");-webkit-transform:rotate(" + e.rotate + ');"><div class="eleChild" animation="' + e.animationData + '" uniquename = ' + e.uniqueName + ' style="position:absolute; width:' + e.width + "px; height:" + e.height + 'px;">';
        for (var u in y) {
            u = y[u];
            var o = u.id,
                E = u.type,
                r = "_form" + F + "Input" + o;
            u.name = v(E, Flyer.encodeHtmlJs(u.name));
            var z = u.name;
            if (E == "radio" || E == "checkbox") { $.each(u.options, function() { this.option = this.option ? Flyer.encodeHtmlJs(this.option) : ("é€‰é¡¹" + this.id) }) }
            f += '<div class="formInput"><input data-type="' + E + '" maxLength="150" placeholder="' + z + '" class="form' + F + 'Input f_formInput" id=' + r + ' type="text" style="border:2px solid ' + n + ";background-color:rgba(255,255,255," + e.opacity + ');"/></div>'
        }
        f += '<div class="f_formSubmit" style="background-color:' + n + ';">' + b + "</div></div></div>";
        /*!$("#iscrollScript").length && $("head").append('<script id="iscrollScript" src="'+ Flyer.lazyJSPath.iscroll +'"></script>');*/
        !$("#selectScrollScript").length && $("head").append('<script id="selectScrollScript" src="' + Flyer.lazyJSPath.selectScroll + '"><\/script>');
        var g = e.contentIndex;
        Flyer.getSlideNode(g, ".contentEle", e.isLayer).append(f);
        $("#temporaryScript").append(G);
        var B = $("#" + i);
        var m = B.find(".formInput>.f_formInput");
        var C = [],
            q = [];
        m.each(function(H) {
            var I = $(this).data("type");
            if (I != "text") {
                $(this).attr("readonly", true).css("cursor", "pointer");
                var J = y[H];
                J.formcolor = c.formcolor;
                J.mouseWheel = Flyer.top._isFromPC;
                C.push(this);
                q.push(J)
            } else {
                $(this).focus(function() {
                    if (Flyer.isIOS) {
                        var K = this;
                        setTimeout(function() { var L = $(window).scrollTop() + window.innerHeight; var M = $(K).offset().top + $(K).height(); if (M > L) { $(window).scrollTop(M) } }, 800)
                    }
                    Flyer.isKeyboardExist = true;
                    Flyer.lockSwipes()
                }).blur(function() {
                    Flyer.isKeyboardExist = false;
                    Flyer.unlockSwipes()
                })
            }
        });
        B.find(".f_formSubmit").on("click", function() {
            var H = { flyerId: Flyer._fid, id: F, successTxt: x, formsJson: y, moduleId: D, validateId: (parseInt(F / 1000) + Flyer._fid + Flyer._aid), tmpFormFailCount: w, tmpFormMaxCount: l, formSubmitEvent: d, formJumpPage: h, $ele: B };
            if (!Flyer.formCheckVal(H)) { return }
            if (A) { Flyer.formSubmitData(H) } else {
                if (w < l) { Flyer.formSubmitData(H) } else {
                    H.callback = Flyer.formSubmitData;
                    Flyer.validateCode.show(H)
                }
            }
        });
        if (window.IScroll && $.fn.selectScroll) { t() } else { if (!window.IScroll && !$.fn.selectScroll) { $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { $.fn.selectScroll ? t() : $.getCacheScript(Flyer.lazyJSPath.selectScroll, function() { t() }) }) } else { if (!window.IScroll && $.fn.selectScroll) { $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { t() }) } else { if (window.IScroll && !$.fn.selectScroll) { $.getCacheScript(Flyer.lazyJSPath.selectScroll, function() { t() }) } } } }

        function t() { $.each(C, function(H) { $(this).selectScroll(q[H]) }) }
    };
    a.formCheckVal = function(d) {
        var c = d.formsJson,
            g = d.id;
        if (c.length > 0) { for (var e = 0, f = c.length; e < f; e++) { var h = c[e].id; var b = $("#_form" + g + "Input" + h).val(); if (b === "") { Flyer.ing("è¯·å®Œæ•´å¡«å†™", true, 3000, "formFullTip"); return false } } }
        return true
    };
    a.formSubmitData = function(n) {
        var m = n.tmpFormFailCount,
            e = n.tmpFormMaxCount;
        var g = n.flyerId,
            j = n.id,
            c = n.successTxt,
            h = n.formsJson,
            b = n.moduleId;
        validateCode = n.validateCode || "", formSubmitEvent = n.formSubmitEvent, formJumpPage = n.formJumpPage, $ele = n.$ele;
        var i = function() {
            var o = $ele.find(".f_formSubmit").eq(0);
            if (o.hasClass("hasRebind")) { return }
            o.off("click").on("click", function() {
                var q = n;
                if (!Flyer.formCheckVal(q)) { return }
                n.callback = Flyer.formSubmitData;
                Flyer.validateCode.show(q)
            });
            o.addClass("hasRebind")
        };
        if (!j || !h) { return }
        var f = [],
            d = [],
            l = false,
            k = false;
        if (h.length > 0) {
            $.each(h, function(s, u) {
                var v = u.id,
                    r = u.name,
                    t = u.type,
                    q = {};
                q.id = v;
                var o = $("#_form" + j + "Input" + v).val();
                q.val = o;
                if (t == "text") { /^1\d{10}$/.test(o) && (k = true) }
                f.push(q)
            })
        }
        if (l) { return }
        d.push("submitContentList=" + encodeURIComponent(JSON.stringify(f)));
        d.push("&formId=" + j);
        d.push("&flyerAid=" + Flyer._aid);
        d.push("&flyerId=" + g);
        d.push("&validateCode=" + validateCode);
        d.push("&moduleId=" + b);
        d.push("&wxOpenId=" + encodeURIComponent(Flyer.wx_openId));
        $.ajax({
            type: "post",
            url: "/ajax/flyerFormSubmit.jsp?cmd=add",
            data: d.join(""),
            error: function() { Flyer.formIng("æäº¤å¤±è´¥ï¼Œè¯·é‡æ–°æäº¤", false, 0, "formFail") },
            success: function(q) {
                var o = jQuery.parseJSON(q);
                if (o.success) {
                    $(".f_Form .form" + j + "Input").val("");
                    $('.select-panel-cover[select-id^="_form' + j + '"]').find(".select-checkbox-option").css("color", "#333").data("selected", false).children(".select-right-cover").css("background-color", "transparent");
                    var r = c || o.msg;
                    k && Flyer.logObjDog(2000104, 0, j % 100000);
                    Flyer.validateCode.hide();
                    if (formSubmitEvent != 1) { Flyer.formIng(r, false, 0, "formSuc", function() { if (formSubmitEvent == 2) { window.parent.pageSwiper.slideNext() } else { Flyer.getCurrentContentPage(parseInt(formJumpPage)) } }) } else { Flyer.formIng(r, false, 0, "formSuc") }
                } else {
                    if (o.needValidateCodeRef) {
                        if (m < e) {
                            n.tmpFormFailCount = e;
                            n.callback = Flyer.formSubmitData;
                            Flyer.validateCode.show(n);
                            i();
                            return
                        }
                        Flyer.validateCode.setSrc()
                    }
                    Flyer.formIng(o.msg, false, 0, "formFail")
                }
                if (o.needValidateCodeRef) {
                    n.tmpFormFailCount = e;
                    i()
                }
            }
        })
    }
})(Flyer);
(function(a) {
    a.voteElement = function(g, x) {
        var t = "";
        var q = "";
        var I = false;
        var u = g.module || {};
        var A = u.itemList || [];
        var Z = parseInt(u.deadline) || new Date().getTime();
        var S = u.question || "";
        var D = u.type || 0;
        var J = D == 0 ? "(å•é€‰)" : "(å¤šé€‰)";
        var Q = D == 0 ? "singleRadio" : "multipleRadio";
        var H = u.voteColor || "#000";
        var B = g.moduleId || 0;
        var f = u.isShowBorder != false ? true : false;
        var o = u.isShowTitle != false ? true : false;
        var Y = u.voteStyle ? 1 : 0;
        var N = u.column || 2;
        var G = (u.conHeight == undefined ? "auto" : u.conHeight);
        var b = u.isShowItemCon != false ? true : false;
        var P = Flyer.wx_openId;
        var M = "";
        var X = "";
        var L = "";
        var K = "";
        var w = Flyer.isWeiXin();
        var s = (w) ? "æŠ•   ç¥¨" : "è¯·ç”¨å¾®ä¿¡æ‰“å¼€æŠ•ç¥¨";
        var h = (w) ? H : "#ccc";
        var c = new Date().getTime();
        var R = "canVotedZoom";
        if (c >= Z) {
            s = "æŠ•ç¥¨å·²è¿‡æœŸ";
            h = "#ccc";
            R = "notVotedZoom"
        }
        var m = (function() {
            var i = false;
            return {
                checkHasVote: function() {
                    var ab = [];
                    var aa = [];
                    aa.push("flyerAid=" + a._aid);
                    aa.push("&flyerId=" + a._fid);
                    aa.push("&voteId=" + B);
                    aa.push("&opendid=" + encodeURIComponent(P));
                    $.ajax({ type: "post", url: "/ajax/flyerVote.jsp?cmd=getFlyerVote", data: aa.join(""), error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 3000, "notice") }, success: function(ad) { var ac = jQuery.parseJSON(ad); if (ac.success) { ab = ac.data.length ? JSON.parse(ac.data[0].voteContentList) : [] } }, async: false });
                    return ab
                },
                submitVotes: function(aa) {
                    if (i) { return }
                    i = true;
                    var ab = "";
                    if (aa.voteId) {
                        B = aa.voteId;
                        ab = aa.validateCode;
                        aa = aa.contentList
                    }
                    var ac = [];
                    ac.push("flyerAid=" + a._aid);
                    ac.push("&flyerId=" + a._fid);
                    ac.push("&voteId=" + B);
                    ac.push("&wx_openId=" + encodeURIComponent(P));
                    ac.push("&content=" + encodeURIComponent(JSON.stringify(aa)));
                    ac.push("&validateCode=" + ab);
                    $.ajax({
                        type: "post",
                        url: "/ajax/flyerVote.jsp?cmd=addFlyerVote",
                        data: ac.join(""),
                        error: function() {
                            Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 1000, "notice");
                            i = false
                        },
                        success: function(af) {
                            var ad = jQuery.parseJSON(af);
                            var ag = ad.data;
                            if (ad.success) {
                                if (ad.needValidateCodeRef) { Flyer.validateCode.hide() }
                                Flyer.ing(ad.msg, true, 1000);
                                r = true;
                                E = aa;
                                U(ag)
                            } else {
                                if (ad.needValidateCodeRef) {
                                    var ae = {};
                                    ae.voteId = B;
                                    ae.contentList = aa;
                                    ae.validateId = "" + a._aid + a._fid + B;
                                    ae.callback = m.submitVotes;
                                    Flyer.validateCode.show(ae)
                                }
                                Flyer.ing(ad.msg, true, 1000, "notice")
                            }
                            i = false
                        }
                    })
                }
            }
        })();
        var E = m.checkHasVote() || [];
        var r = (E.length > 0);
        var k = 1;
        var z = null;
        var V = 0;
        var v = 0;
        var j = 0;
        var C = "";
        var l = "";
        var e = "";
        if (r) {
            s = "æ‚¨å·²æŠ•ç¥¨";
            h = "#ccc";
            R = "hasVotedZoom";
            K = "has_";
            var d = [];
            d.push("flyerAid=" + a._aid);
            d.push("&flyerId=" + a._fid);
            d.push("&voteId=" + B);
            $.ajax({
                type: "post",
                url: "/ajax/flyerVote.jsp?cmd=getFlyerVoteList",
                data: d.join(""),
                error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 3000, "notice") },
                success: function(ab) {
                    var i = jQuery.parseJSON(ab);
                    if (i.success) {
                        z = i.data;
                        var ac = 0;
                        for (var aa in z) {
                            if (aa === "allPerson") { continue }
                            ac += z[aa]
                        }
                        k = ac
                    } else { Flyer.ing(i.msg) }
                },
                async: false
            })
        }
        t += '<div class="ele f_Vote f_VoteModule' + B + '" id="f_VoteModule' + B + '" style="z-index:' + x.index + ";" + x.isHidden + " top: " + x.top + "; left:" + x.left + ";width:" + x.width + "px; height:" + x.height + 'px;"><div class="f_voteContent eleChild" data-type="' + D + '" animation="' + x.animationData + '" uniquename = ' + x.uniqueName + ' style="position:absolute;width:' + x.width + "px; height:" + x.height + 'px;overflow:hidden;">';
        if (Y == 0) {
            t += '<div class="vote_list ' + (f ? "" : "hide_vote_border") + '" style="position:absolute; overflow: hidden; width:' + (x.width - 4) + "px; height:" + (x.height - 4) + "px; background-color:rgba(255,255,255," + x.opacity + ');border-radius:3px;box-sizing:border-box;">';
            if (o) { t += '<div class="voteTitle ' + (f ? "" : "hide_vote_border_bottom") + '" style="color: ' + H + '"><div class="vTitleVertical"><span class="voteTitleText">' + S + '</span><span class="voteType">' + J + "</span></div></div>" }
            t += '<div class="voteMenus ' + R + " " + Q + " " + (f ? "" : " hide_voteItem_border") + '" style="height:' + (o ? x.height - 248 : x.height - 124) + 'px;" data-vColor="' + H + '"><div class="voteMenuswrapper">';
            for (var T = 0; T < A.length; T++) {
                X = "";
                M = "";
                L = K + "t_";
                l = "";
                e = "";
                if ($.inArray(A[T].id, E) >= 0) {
                    l = "(å·²é€‰)";
                    e = "color:" + H + ";"
                }
                if (A[T].pic && A[T].pic != "") {
                    M = "hasPic";
                    L = K + "p_";
                    X = '<div class="votePic"><div class="voteTextRow"><div class="votePicCell"><div class="clickIcon"><span class="selectsZoomIcon"></span></div></div><div class="votePicCell"><img class="voteItemImg" src="' + A[T].tmp_pic_path + '"></div><div class="votePicCell"><div class="' + L + "vTDesc votesItemDesc" + (b ? "" : " hide_vote_list_item_con") + '" style="' + e + '">' + (A[T].con) + l + "</div></div></div></div>"
                } else { X = '<div class="voteText"><div class="voteTextRow"><div class="voteTextCell"><div class="clickIcon"><span class="selectsZoomIcon"></span></div></div><div class="voteTextCell"><div class="' + L + "vTDesc votesItemDesc" + (b ? "" : " hide_vote_list_item_con") + '" style="' + e + '">' + (A[T].con) + l + "</div></div></div></div>" }
                if (r) {
                    V = z[A[T].id + ""] || 0;
                    v = 0;
                    if (k != 0) { v = ((V / k) * 100) }
                    v = (v == 0) ? v : v.toFixed(1);
                    j = (v * 362 / 100);
                    var F = 10;
                    C = '<div class="votedZoom"><div class="allCountBar"><div class="singleCountBar" style="width:' + j + "px;background-color:" + H + ';"></div></div><div class="singleCountNum">' + V + 'ç¥¨</div><div class="singleCountpercent">' + v + "%</div></div>"
                }
                if ((T == 0 || T == A.length - 1)) {
                    M += (T == 0) ? " firstItem " : "";
                    L += (T == 0) ? "f_" : "l_"
                }
                t += '<div class="' + L + "vi voteItems " + M + '" value="' + A[T].id + '" itemId="' + A[T].id + '">' + X + C + "</div>"
            }
            t += '</div></div><div class="submitZoom disable"><div class="voteSubmitBtn ' + (f ? "" : " hide_vote_border_top") + '" style="color:' + h + '">' + s + "</div></div></div>"
        } else {
            if (Y == 1) {
                var W = (function() {
                    return {
                        getVoteItemPic: function(aa) { var i = Flyer._resRoot + "/image/vote/"; if (!Flyer.top._isOem) { return aa ? aa : N == 1 ? i + "flyer1.png" : i + "flyer2.png" } else { return aa ? aa : N == 1 ? i + "oem1.png" : i + "oem2.png" } },
                        getVoteAdjustColor: function(aa, ab) {
                            var i = Flyer.rgbToHSV(Flyer.hexToRgb(aa));
                            i[0] = i[0] - 36 * 1.8;
                            i[0] < 0 && (i[0] += 360);
                            return Flyer.HSVtoRgb(i, ab)
                        },
                        getVoteCardItemResult: function(ab, i, aa) {
                            V = ab[A[i].id + ""] || 0;
                            v = 0;
                            if (aa != 0) { v = ((V / aa) * 100) }
                            v = (v == 0) ? v : v.toFixed(1);
                            return '<div class="vote_item_mask' + (E.indexOf(A[i].id) > -1 ? ' vote_item_voted_light_mask" style="background-image: linear-gradient(to right, ' + W.getVoteAdjustColor(H, 0.75) + ", " + Flyer.HexToRgba(H, 0.75) + ')"' : ' vote_item_voted_black_mask"') + '><div class="vote_item_result"><div class="vote_item_count"><span class="vote_item_num">' + V + '</span>ç¥¨</div><div class="vote_item_percent"><span>' + v + "</span>%</div></div></div>"
                        }
                    }
                })();
                t += '<div class="vote_card" style="width:' + (x.width - 4) + "px; height:" + (x.height - 4) + 'px;">';
                if (o) { t += '<div class="vote_title" style="color: ' + H + '"><span class="vote_title_word">' + S + (D == 0 ? "(å•é€‰)" : "(å¤šé€‰)") + "</span></div>" }
                t += '<div class="vote_main" style="height:' + (o ? x.height - 144 : x.height - 20) + 'px"><div class="vote_items_con"><div class="vote_items clearfix ' + (N == 1 ? "vote_item_column1" : N == 2 ? "vote_item_column2" : "vote_item_column3") + '">';
                A.forEach(function(aa, i) {
                    t += '<div class="vote_item' + (r ? " show_vote_item_mask" : "") + '"><div class="vote_item_pic' + (b ? " vote_item_pic_border" : "") + '" style="background-image: url(' + W.getVoteItemPic(aa.tmp_pic_path) + ')"></div><div class="vote_item_con' + (b ? "" : " hide_vote_item_con") + '" style="height: ' + G + 'px">' + (aa.con) + "</div>";
                    if (!r) { t += '<div class="vote_item_mask" style="background-image: linear-gradient(to right, ' + W.getVoteAdjustColor(H, 0.75) + ", " + Flyer.HexToRgba(H, 0.75) + ')"><div class="voteSubmitBtn" data-id="' + aa.id + '" style="color: ' + H + '">æäº¤</div>' + (D == 0 ? "" : '<div class="vote_item_selected"></div>') + "</div>" } else { t += W.getVoteCardItemResult(z, i, k) }
                    t += "</div>"
                });
                t += "</div></div></div></div>"
            }
        }
        t += "</div></div>";
        var y = x.contentIndex;
        Flyer.getSlideNode(y, ".contentEle", x.isLayer).append(t);
        var O = $("#f_VoteModule" + B);
        var U = function(ad) {
            if (Y == 0) {
                O.find(".voteMenus").addClass("hasVotedZoom").removeClass("canVotedZoom");
                O.find(".submitZoom").addClass("disable");
                O.find(".submitZoom .voteSubmitBtn").html("æ‚¨å·²æŠ•ç¥¨").css("color", "#ccc");
                var ac = 0;
                var ab = "";
                for (var aa in ad) {
                    if (aa === "allPerson") { continue }
                    ac += ad[aa]
                }
                var i = O.find(".voteItems");
                i.each(function() {
                    var ai = $(this).attr("itemId") || "";
                    if ($(this).hasClass("selected")) {
                        var ah = $(this).find(".votesItemDesc").html() + "(å·²é€‰)";
                        $(this).find(".votesItemDesc").html(ah)
                    }
                    var ae = ad[ai] || 0;
                    var af = 0;
                    if (ac != 0) { af = ((ae / ac) * 100) }
                    af = (af == 0) ? af : af.toFixed(1);
                    var ag = 10;
                    ab = '<div class="votedZoom"><div class="allCountBar"><div class="singleCountBar" style="width:' + af + "%;background-color:" + H + ';"></div></div><div class="singleCountNum">' + ae + 'ç¥¨</div><div class="singleCountpercent">' + af + "%</div></div>";
                    $(this).append(ab)
                })
            } else {
                if (Y == 1) {
                    var i = O.find(".vote_item");
                    i.find(".vote_item_mask").remove();
                    i.addClass("show_vote_item_mask");
                    var ac = 0;
                    for (var aa in ad) {
                        if (aa === "allPerson") { continue }
                        ac += ad[aa]
                    }
                    i.each(function(ae) { $(this).append(W.getVoteCardItemResult(ad, ae, ac)) })
                }
            }
        };
        var n = function() {
            if (Y == 0) {
                function aa() { var af = O.find(".voteItems.selected").length || 0; var ag = (af == 0) ? false : true; if (!ag) { O.find(".submitZoom").addClass("disable") } else { O.find(".submitZoom").removeClass("disable") } }

                function ad(ag) {
                    var af = ag;
                    if (!af.hasClass("selected")) {
                        if (D == 0) {
                            af.parent().find(".voteItems.selected").removeClass("selected").find(".votesItemDesc").css("color", "#000");
                            af.parent().find(".selectsZoom").css("background-color", "#fff");
                            af.parent().find(".selectsZoomIcon").css("background-color", "transparent");
                            af.addClass("selected").find(".selectsZoomIcon").css("background-color", H)
                        } else { af.addClass("selected").find(".clickIcon").css("background-color", H) }
                        af.addClass("selected").find(".votesItemDesc").css("color", H);
                        af.find(".selectsZoom").css("background-color", H)
                    } else {
                        if (D != 0) {
                            af.removeClass("selected").find(".votesItemDesc").css("color", "#000");
                            af.find(".selectsZoom").css("background-color", "#fff");
                            af.parent().find(".selectsZoomIcon").css("background-color", "transparent");
                            af.find(".clickIcon").css("background-color", "#fff")
                        }
                    }
                }
                O.find(".canVotedZoom .voteItems").unbind("click");
                O.find(".canVotedZoom").delegate(".voteItems", "click", function() {
                    if (O.find(".canVotedZoom").length <= 0) { return }
                    ad($(this));
                    aa()
                });
                O.find(".submitZoom").on("click", function() {
                    if ($(this).hasClass("disable")) { return }
                    var ag = $(this).parent().find(".voteItems.selected");
                    if (D == 0 && ag.length > 1) { console.error("å•é€‰çš„é€‰é¡¹å¤§äºŽ1"); return }
                    var af = [];
                    ag.each(function(ah, ai) { af.push(parseInt($(ai).attr("value"))) });
                    m.submitVotes(af)
                })
            } else {
                if (Y == 1 && !r) {
                    if (D == 0) {
                        O.find(".vote_items .vote_item").on("click", function(af) {
                            if (!r) {
                                O.find(".vote_item").not(this).removeClass("show_vote_item_mask show_vote_item_shadow");
                                $(this).toggleClass("show_vote_item_mask").toggleClass("show_vote_item_shadow");
                                $(this).find(".voteSubmitBtn").off("click").on("click", function() {
                                    if (!w) { Flyer.ing("è¯·ç”¨å¾®ä¿¡æ‰“å¼€æŠ•ç¥¨", true, 1000, "notice"); return }
                                    m.submitVotes([$(this).data("id")])
                                })
                            }
                        })
                    } else {
                        var ae = '<div id="vote_card_popup' + B + '" class="vote_card_popup"><div class="vote_card_panel"><div class="vote_card_panel_view"><div class="vote_card_panel_pic"></div><div class="vote_card_panel_line1">ä¸‡èŠ±ä¸›ä¸­è¿‡ï¼Œä½ åªé€‰ä¸€ä¸ªï¼</div><div class="vote_card_panel_line2">ä¸é€‰å¤šå‡ ä¸ªå—ï¼Ÿ</div></div><div class="vote_card_panel_opr clearfix"><div class="vote_card_panel_ensure">å°±å®ƒäº†</div><div class="vote_card_panel_cancel">å¤šé€‰å‡ ä¸ª</div></div></div></div>';
                        var ac = function(af) { m.submitVotes(af.toArray().map(function(ag) { return $(ag).find(".voteSubmitBtn").data("id") })) };
                        O.find(".vote_items .vote_item").on("click", function() {
                            if (!r) {
                                if ($(this).hasClass("show_vote_item_mask")) {
                                    $(this).removeClass("show_vote_item_mask");
                                    $(this).hasClass("lastSelected") && O.find(".show_vote_item_mask.hide_vote_item_btn:not(.lastSelected):last").addClass("lastSelected");
                                    var af = O.find(".lastSelected");
                                    !$(this).hasClass("hide_vote_item_btn") && af.removeClass("hide_vote_item_btn");
                                    $(this).find(".voteSubmitBtn").off("click")
                                } else {
                                    O.find(".lastSelected").removeClass("lastSelected");
                                    O.find(".show_vote_item_mask:not(.hide_vote_item_btn)").addClass("lastSelected");
                                    O.find(".vote_item").addClass("hide_vote_item_btn");
                                    $(this).addClass("show_vote_item_mask").removeClass("hide_vote_item_btn");
                                    $(this).find(".voteSubmitBtn").off("click").on("click", function(ah) {
                                        ah.stopPropagation();
                                        if (!w) { Flyer.ing("è¯·ç”¨å¾®ä¿¡æ‰“å¼€æŠ•ç¥¨", true, 1000, "notice"); return }
                                        var ai = O.find(".show_vote_item_mask");
                                        if (ai.length > 1) { ac(ai) } else {
                                            var ag = $("#vote_card_popup" + B);
                                            if (ag.length) { ag.show() } else {
                                                $("#mobiPage").append(ae);
                                                ag = $("#vote_card_popup" + B);
                                                ag.on("click", function() { ag.hide() }).find(".vote_card_panel_view").on("click", function(aj) { aj.stopPropagation() });
                                                ag.find(".vote_card_panel_ensure").on("click", function() {
                                                    ai = O.find(".show_vote_item_mask");
                                                    ac(ai)
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }
            if ($("body").hasClass("mobile")) {
                var i = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                var ab;
                Flyer.getSlideNode(x.contentIndex, "", x.isLayer).bind("slidePageEnd", function() {
                    O.show();
                    var ag, ai;
                    if (Y == 0) {
                        ag = ".voteMenuswrapper";
                        ai = ".voteMenus"
                    } else {
                        if (Y == 1) {
                            ag = ".vote_items";
                            ai = ".vote_items_con"
                        }
                    }
                    var ah = O.find(ag).height();
                    var af = O.find(ai).height();
                    if (ah <= af) { return }
                    if (!ab) { window.IScroll ? aj() : $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { aj() }) }

                    function aj() { ab = new IScroll(O.find(ai)[0], { click: Flyer._templateData[window.parent.pageSwiper.activeIndex].templatetype != 2, scrollbars: true, bindToWrapper: true, scrollbars: "custom", luckEvent: true }) }
                })
            }
        };
        n()
    }
})(Flyer);
(function(b) {
    b.getLikeData = function(j, f, i, d, e) {
        var h = [];
        h.push("flyerId=" + f);
        h.push("&likeId=" + i);
        h.push("&showNum=" + d);
        h.push("&flyerAid=" + j);
        h.push("&showwximg=" + e);
        h.push("&wx_openId=" + encodeURIComponent(Flyer.wx_openId));
        var g = null;
        $.ajax({ type: "post", url: "/ajax/flyerLike.jsp?cmd=getFlyerLike", data: h.join(""), error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 3000, "notice") }, success: function(l) { var k = jQuery.parseJSON(l); if (k.success) { g = k.data } else { Flyer.ing(k.msg, true) } }, async: false });
        return g
    };
    b.likeElement = function(j, z) {
        var J = false;
        var w = "";
        var n = j.module;
        var u = j.moduleId;
        var L = n.showwximg || 0;
        var B = n.shapetype || 1;
        var R = j.bgcolor || "#4ea1f5";
        var S = n.icotype || 1;
        var h = n.headtype || 1;
        var s = n.headline || 1;
        var o = n.basenum || 0;
        var T = n.showtype || 1;
        var e = (L == 1) ? "showUserHeader" : "hideUserHeader";
        var I = (B == 1) ? "outRound" : ((B == 2) ? "outOval" : "outRectangle");
        var k = (S == 1) ? "inheart" : ((S == 2) ? "inflower" : "infinger");
        var H = (h == 1) ? "ovalHeader" : "rectHeader";
        var E = 8 * s + 1;
        var t = b.getLikeData(b._aid, b._fid, j.moduleId, E, L);
        var K = (!!t.allLikeLen) ? t.allLikeLen : 0;
        var y = (!!t.allLikeHeadLen) ? t.allLikeHeadLen : 0;
        var g = (t.headerList !== null) ? t.headerList : [];
        var m = t.hasClick || false;
        var d = m ? "clicked hasClicked" : "";
        var P = o + K || 0;
        var l = (o + y > 8 * s) ? 8 * s : o + y;
        if (l != 0) { l++ }
        var C = "";
        C += (L == 1) ? "like_sh" : "like_hh";
        C += (B == 1) ? "rd" : ((B == 2) ? "ol" : "ort");
        var G = "";
        var q = "";
        if (T == 2) {
            q = " showLikeNum";
            C += "sln_"
        }
        if (L == 1) {
            var N = "";
            var v = "";
            var x = "";
            var r = "";
            for (var Q = 0; Q < l; Q++) {
                x = "";
                r = "";
                hiClass = ((Q + 1) % 8 == 0) ? "hil_" : "hi_";
                var M = (!!g[Q] && g[Q].headimg != "") ? g[Q].headimg : (Flyer._resRoot + "/image/templateLib/0000049.jpg");
                if (Flyer.wx_openId == g[Q].openId) { x = "myselfHead" }
                if (Q == l - 1) { r = "display : none;" }
                N += '<div class="headerImg ' + x + '" style="background-image:url(' + M + ");" + r + '"></div>'
            }
            G = '<div class="likePerson" style="" showLine="' + s + '"><div class="likePersonZoom ' + H + '">' + N + "</div></div>"
        }
        var D = D = '<div class="' + k + I + 'likeNum likeNum"><span class="likeNumStr">' + P + "</span></div>";
        var F = z.width / 2 - 18;
        var U = -48;
        var f = (S == 1) ? 50 : ((S == 2) ? 30 : 41);
        var O = 50;
        w += '<div id="like' + u + '" class="ele f_Like" style=" z-index: ' + z.index + ";" + z.isHidden + " top: " + z.top + "; left: " + z.left + "; width: " + z.width + "px; height: " + z.height + 'px"><div class="eleChild"  uniquename = ' + z.uniqueName + '  animation="' + z.animationData + '"><div class="' + e + " " + q + '"><div class="' + e + I + " " + I + ' likeClick"><div class="addLikeIcon likeMoveUp" style="top: ' + U + "px; left: " + F + "px;color:" + R + '">+1</div><div class="' + C + "likeClickZoom likeClickZoom " + d + '" style="background-color:' + R + ';" onclick="Flyer.hitLikeElement(' + u + "," + L + ')"><div class="clickVertical"><div class="clickCell"><div class="' + C + k + "FixedSize FixedSize " + k + '" style="width:' + f + "px;height:" + O + 'px;"><div class="' + C + k + ' clickZoomInner"></div>' + D + "</div></div></div></div></div>" + G + "</div></div></div>";
        var A = z.contentIndex;
        Flyer.getSlideNode(A, ".contentEle", z.isLayer).append(w);
        Flyer.initLikeEvent(u);
        if (window.autoClickLike == u && $("#like" + u).length > 0) { setTimeout(function() { Flyer.hitLikeElement(u, L) }, 50) }
    };
    b.initLikeEvent = function(d) {
        moduleNode = $("#like" + d);
        moduleNode.find(".addLikeIcon").unbind("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend").bind("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend", function() { $(this).hide() });
        moduleNode.find(".clickZoomInner").unbind("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend").bind("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend", function() { $(this).removeClass("showLikeIconFull") })
    };
    var a = function(e, l) {
        var u = l.headimg;
        var i = $("#like" + e);
        var m = i.find(".likeNumStr").text();
        m = parseInt(m) || 0;
        m++;
        i.find(".likeNumStr").text(m);
        i.find(".likeNum").show();
        i.find(".addLikeIcon").show();
        i.find(".likeClickZoom").addClass("clicked");
        if (!i.find(".clickZoomInner").hasClass("showLikeIconFull")) { i.find(".clickZoomInner").addClass("showLikeIconFull") }
        if (i.find(".showLikeNum").length <= 0) {
            var j = i.find(".FixedSize").width();
            var f = i.find(".likeNum").width();
            var o = i.find(".FixedSize").height();
            var s = i.find(".likeNum").height();
            var g = j + f + 10;
            var k = o + s + 10;
            if (i.find(".outRound").length <= 0) { i.find(".FixedSize").css("width", g + "px") } else { i.find(".FixedSize").css("height", k + "px") }
            i.find(".likeNum").css("opacity", "1")
        }
        if (i.find(".showUserHeader").length > 0) {
            i.find(".likePerson").show();
            var r = parseInt(i.find(".likePerson").attr("showLine")) || 0;
            var t = r * 8;
            var n = i.find(".headerImg").length || 0;
            var q = "";
            if (!!u) { q = 'style="background-image:url(' + u + ');"' }
            var d = '<div class="headerImg myselfHead" ' + q + "></div>";
            i.find(".likePersonZoom").prepend(d);
            if (t <= n) { i.find(".headerImg:visible:last").hide() }
        }
        var h = window.parent.pageSwiper.activeIndex;
        return
    };
    var c = function(d, k) {
        var o = k.headimg;
        var h = $("#like" + d);
        var l = h.find(".likeNumStr").text();
        l = parseInt(l) || 0;
        l--;
        h.find(".likeNumStr").text(l);
        h.find(".likeNum").show();
        h.find(".likeClickZoom").removeClass("clicked");
        h.find(".clickZoomInner").removeClass("showLikeIconFull");
        if (h.find(".showLikeNum").length <= 0) {
            var i = h.find(".FixedSize").width();
            var e = h.find(".likeNum").width();
            var m = h.find(".FixedSize").height();
            var n = h.find(".likeNum").height();
            var f = 50;
            var j = 50;
            if (h.find(".outRound").length <= 0) { h.find(".FixedSize").css("width", f + "px") } else { h.find(".FixedSize").css("height", j + "px") }
            h.find(".likeNum").css("opacity", "0")
        }
        h.find(".likeClickZoom").removeClass("hasClicked");
        if (h.find(".showUserHeader").length > 0) { var g = h.find(".myselfHead"); if (g.length > 0) { g.remove() } if (h.find(".headerImg:hidden").length >= 2) { h.find(".headerImg:visible:last").next().show() } }
        return
    };
    b.hitLikeElement = function(f, d) {
        if (!f) { return }
        var e = "";
        if (f.moduleId) {
            d = f.type;
            e = f.validateCode;
            f = f.moduleId
        }
        if ($("#like" + f).find(".showUserHeader").length > 0 && !Flyer._userInfo_not.userName) {
            if (Flyer.isWeiXin()) { location.href = "/load.jsp?flyerAid=" + Flyer._aid + "&flyerId=" + Flyer._fid + "&slv=" + Flyer._shareLevel + "&jumpType=" + f + "&jump=" + window.parent.pageSwiper.activeIndex; return }
            Flyer.ing("è¯·åœ¨å¾®ä¿¡ä¸‹æäº¤å†…å®¹ï¼", true, 3000, "notice");
            return
        }
        var g = [];
        g.push("flyerAid=" + b._aid);
        g.push("&flyerId=" + b._fid);
        g.push("&likeId=" + f);
        g.push("&type=" + d);
        g.push("&wx_openId=" + encodeURIComponent(Flyer.wx_openId));
        g.push("&validateCode=" + e);
        $.ajax({
            type: "post",
            url: "/ajax/flyerLike.jsp?cmd=addFlyerLike",
            data: g.join(""),
            error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•", true, 3000, "notice") },
            success: function(j) {
                var h = jQuery.parseJSON(j);
                if (h.success) { if (h.data.clickLike) { a(f, h.data) } else { c(f, h.data) } if (h.needValidateCodeRef) { Flyer.validateCode.hide() } } else {
                    if (h.isHide) { Flyer.ing(h.msg, true, 1000, "notice") }
                    if (h.needValidateCodeRef) {
                        var i = {};
                        i.moduleId = f;
                        i.validateId = "" + b._aid + b._fid + f;
                        i.type = d;
                        i.callback = Flyer.hitLikeElement;
                        Flyer.validateCode.show(i)
                    }
                }
            }
        })
    }
})(Flyer);
(function(a) {
    a.countdownElement = function(i, w) {
        var E = false,
            q = "",
            s = "",
            d = "",
            M = "",
            Q = "";
        var P = "f_Countdown_" + w.contentIndex + "_" + w.index;
        i.fontfamily = "flyerFont_" + w.contentIndex + "_" + Math.floor(Math.random() * 100000);
        if (!i.textfontid) {
            i.fontfamily = "font_MSyahei";
            i.tmp_fontface_path = Flyer._resRoot + "/image/font/defaultFont/MicrosoftYaHeiRegular.ttf"
        }
        d = "font-family:'" + i.fontfamily + "';";
        q = "@font-face {\nfont-family: '" + i.fontfamily + "';\nsrc: url('" + i.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n";
        s = '<div id="' + P + '" class="ele f_Countdown" style="-moz-transform:rotate(' + w.rotate + ")  translateZ(0);-webkit-transform:rotate(" + w.rotate + ") translateZ(0);transform:rotate(" + w.rotate + ")  translateZ(0);z-index: " + w.index + ";" + w.isHidden + " opacity: " + w.opacity + ";top: " + w.top + "; left: " + w.left + '"><div class="eleChild" uniquename = ' + w.uniqueName + "><canvas></canvas></div></div>";
        var x = w.contentIndex;
        Flyer.getSlideNode(x, ".contentEle", w.isLayer).append(s);
        $("#temporaryStyle").append(q);
        var H = $("#" + P);
        var m = H.find("canvas")[0],
            c = w.width,
            e = w.height,
            t = w.inw,
            f = parseInt(w.fontsize),
            C = w.fontcolor,
            n = i.textfonttype,
            y = i.fontfamily,
            S = i.formid,
            j = 30,
            k = 10,
            v = 18,
            h = 24,
            L = function(U) {
                var Y = parseInt(U / (24 * 60 * 60 * 1000)) + "";
                Y < 10 && (Y = "0" + Y);
                var T = parseInt(U % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)) + "";
                T < 10 && (T = "0" + T);
                var W = parseInt(U % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000)) + "";
                W < 10 && (W = "0" + W);
                var V = parseInt(U % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) % (60 * 1000) / (1000)) + "";
                V < 10 && (V = "0" + V);
                var X = [];
                X.push(Y, T, W, V);
                return X
            },
            I = function(W, T, V) {
                var X = document.createElement("canvas");
                var U = X.getContext("2d");
                U.font = V + "px " + T;
                return U.measureText(W).width
            },
            g = function() {
                var T = document.createElement("canvas").getContext("2d"),
                    U = window.devicePixelRatio || 1,
                    V = T.webkitBackingStorePixelRatio || T.mozBackingStorePixelRatio || T.msBackingStorePixelRatio || T.oBackingStorePixelRatio || T.backingStorePixelRatio || 1;
                return U / V
            };
        var G = g();
        m.width = c * G;
        m.height = e * G;
        m.style.width = c + "px";
        m.style.height = e + "px";
        var b = new Date().getTime();
        var O;
        S > b ? (O = L(S - b)) : (O = ["00", "00", "00", "00"]);
        var D = O[0].toString().length;
        D < 2 && (D = 2);
        var l = e * G / 2;
        var u = m.getContext("2d");
        var J, B, A, N = [];
        if (!n) {
            J = "å¤©æ—¶åˆ†ç§’".split("");
            A = h;
            B = h * G + "px " + y
        } else {
            J = "DAYS-HOURS-MINS-SECS".split("-");
            A = v;
            B = v * G + "px " + y
        }
        var F = (function() { N = []; for (var T = 0; T < 3; T++) { N.push(I(J[T], y, A)) } return arguments.callee })();
        var o = (function() {
            var U = (j + t * D + k) * G;
            u.font = B;
            u.fillStyle = Flyer.HexToRgba(C, 0.7);
            u.textAlign = "start";
            u.textBaseline = "middle";
            for (var T = 0; T < 4; T++) { T == 0 ? u.fillText(J[T], U, l) : u.fillText(J[T], U = U + (N[T - 1] + k + t * 2 + k) * G, l) }
            return arguments.callee
        })();
        var r = (function() {
            var U = (j + t * D / 2) * G;
            u.fillStyle = C;
            u.font = f * G + "px " + y;
            u.textAlign = "center";
            u.textBaseline = "middle";
            for (var T = 0; T < 4; T++) { T == 0 ? u.fillText(O[T], U, l) : T == 1 ? u.fillText(O[T], U = U + (t * D / 2 + N[T - 1] + k * 2 + t) * G, l) : u.fillText(O[T], U = U + (t * 2 + N[T - 1] + k * 2) * G, l) }
            return arguments.callee
        })();
        var z, K = 1;

        function R() {
            K++;
            if (K == 10) {
                !(S > new Date().getTime()) && window.cancelAnimationFrame(z);
                K = 1;
                S > new Date().getTime() ? (O = L(S - new Date().getTime())) : (O = ["00", "00", "00", "00"]);
                u.clearRect(0, 0, c * G, e * G);
                F();
                o();
                r()
            }
            z = window.requestAnimationFrame(R)
        }
        R()
    }
})(Flyer);
(function(a) {
    a.picElement = function(b, r) {
        var e = "";
        var m = false;
        var i = r.contentIndex;
        var q = "";
        if (Flyer._templateData[i] && Flyer._templateData[i].templatetype === 3) { q = "position:relative;" }
        e += '<div class="ele f_Img" style=" z-index: ' + r.index + ";" + r.isHidden + "top: " + r.top + "; left: " + r.left + "; -moz-transform:rotate(" + r.rotate + ") translateZ(0);-webkit-transform:rotate(" + r.rotate + ") translateZ(0); width: " + r.width + "px; height: " + r.height + 'px"><div class="f_ImgContent maskShape eleChild ' + r.maskShape + " picFilter" + r.picFilter + '" uniquename = ' + r.uniqueName + '  style="' + q + "overflow:hidden; border-radius: " + r.borderradius / 100 * r.width + "px;box-shadow:" + r.boxshadow + ';"><img class="imgClass" ' + r.picidPath + ' style="position:relative;width: ' + r.picw + "px; height: " + r.pich + "px; top: " + r.pict + "; left: " + r.picl + "; opacity: " + r.opacity + ';"/></div>' + r.linkContentString + "</div>";
        var j = Flyer.getSlideNode(i, ".contentEle", r.isLayer);
        j.append(e);
        var o = navigator.userAgent.toLowerCase();
        if (o.indexOf("os x") >= 0) {
            var h, n, g, f;
            var d = 0;
            var c = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend";
            var l = j.find(".f_Img");
            var k = (r.animationData == "");
            l.unbind(c).bind(c, function(s) { k = true }).unbind("touchstart touchend").bind("touchstart", function() {
                d = parseInt($(this).find(".f_ImgContent").css("border-radius")) || 0;
                if (d > 0 || !k) { return }
                g = parseInt($(this)[0].style.top);
                f = parseInt($(this)[0].style.left);
                h = parseInt($(this).find(".imgClass")[0].style.top) || 0;
                n = parseInt($(this).find(".imgClass")[0].style.left) || 0;
                var w = 1000;
                var u = (g - w) + "px";
                var t = (f - w) + "px";
                var v = (h - w) + "px";
                var s = (n - w) + "px";
                $(this).find(".imgClass").css({ position: "absolute", padding: w, top: v, left: s })
            }).bind("touchend", function() {
                if (d > 0) { return }
                $(this).find(".imgClass").css({ position: "relative", padding: 0, top: h, left: n })
            })
        }
    }
})(Flyer);
(function(a) {
    a.mapElement = function(e, c) {
        var f = "";
        var b = false;
        var d = "f_map_" + c.contentIndex + "_" + c.index;
        var h = e.module;
        h.title = h.title || "å¾®ä¼ å•";
        h.content = h.content || "ä¸ä¸€æ ·çš„H5";
        f += '<div id="' + d + '" class="ele f_map" data-title=' + Flyer.encodeUrl(h.title) + "  data-content=" + Flyer.encodeUrl(h.content) + "   data-zoom=" + h.zoom + " data-point=" + JSON.stringify(h.point) + '  style=" opacity: ' + c.opacity + ";" + c.isHidden + " z-index: " + c.index + ";top: " + c.top + "; left: " + c.left + "; -moz-transform:rotate(" + c.rotate + ");-webkit-transform:rotate(" + c.rotate + "); width: " + c.width + "px; height: " + c.height + 'px;"><div class="f_mapContent showType eleChild" uniquename = ' + c.uniqueName + ' style="-webkit-animation-duration: ' + c.speed + "ms;box-shadow:" + c.boxshadow + ";border-radius: " + c.borderradius / 100 * c.width + 'px;width: 100%;height: 100%;"><img class="mapClass context-menu-two" src=' + h.tmpMapImagePath + ' style=";width: 100%; height: 100%; "/></div></div>';
        var g = c.contentIndex;
        Flyer.getSlideNode(g, ".contentEle", c.isLayer).append(f);
        $("#" + d).off("click").on("click", function() {
            var y = navigator.userAgent.toLowerCase();
            var u = 750;
            var j = 1206;
            var r = 1;
            if (y.indexOf("mobile") >= 0) {
                u = window.innerWidth * i_scale;
                j = window.innerHeight * i_scale;
                r = i_scale
            }
            var o = Number((1 / r).toFixed(4));
            var n = -Number(((1 - o) / (o * 2) * 100).toFixed(4));
            var m = "transform:scale(" + o + ") translate3d(" + n + "%," + n + "%,0);-webkit-transform:scale(" + o + ") translate3d(" + n + "%," + n + "%,0);-moz-transform:scale(" + o + ") translate3d(" + n + "%," + n + "%,0);";
            var l = new Date().getTime();
            var x = JSON.parse($(this).attr("data-point"));
            var z = parseInt($(this).attr("data-zoom"));
            var v = $(this).attr("data-title");
            var t = $(this).attr("data-content");
            var i = "http://api.map.baidu.com/marker?location=" + x.lat + "," + x.lng + "&title=" + v + "&content=" + t + "&zoom=" + z + "&output=html";
            var w = $("<div class='mapMaskBg f_DNSTraffic' style='background-color: rgba(0,0,0,.5);position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index:1001;-webkit-transform:translateZ(0);transform:translateZ(0)'>          <div id='ajaxLoading' style='width:190px' class='loadingPage_One'><div class='_ballOne'></div><div class='_ballTwo'></div><div class='_ballThree'></div></div></div>");
            var k = $("<div class='mapMask f_DNSTraffic' style='width:" + u + "px;height:" + j + "px;" + m + "'><div style='position:absolute;left:10px;top:60px;background:#f2f2f2;z-index:999;width:30px;height:30px;'></div><div class='btnClose' ></div></div>");
            var q = $("<iframe id='mapiframe' class='f_DNSTraffic' frameborder='0' allowfullscreen='' style='position: absolute;width:100%;height: 100%;transform: translateZ(0);-webkit-transform: translateZ(0);'>").attr("src", i);
            k.append(q);
            var s = 0;
            $("body").append(w, k);
            q.on("load", function() {
                var A = new Date().getTime() - l;
                if (A < 3500) {
                    k.css("opacity", 1);
                    w.hide();
                    q.off("load")
                } else {
                    if (s < 3) {
                        l = new Date().getTime();
                        q.attr("src", i + "&" + l);
                        k.css("opacity", 1);
                        w.hide();
                        s += 1
                    } else {
                        $(".mapMask").remove();
                        $(".mapMaskBg").remove();
                        Flyer.ing("ç½‘ç»œçŠ¶å†µä¸å¥½ï¼Œè¯·é‡æ–°æ‰“å¼€ï¼", true)
                    }
                }
            });
            $(".mapMask .btnClose").off("click").on("click", function() {
                $(".mapMask").remove();
                $(".mapMaskBg").remove()
            })
        })
    }
})(Flyer);
(function(a) {
    a.ptextElement = function(n, g) {
        g.width += 2;
        var u = "",
            h = "",
            e = "",
            c = "",
            j = "",
            m = "f_Text_" + g.contentIndex + "_" + g.index;
        if (n.textfontid != 0 && !n.moduleId) {
            n.fontfamily = "flyerFont_" + g.contentIndex + "_" + Math.floor(Math.random() * 100000);
            if (Flyer.getQueryString("view") === "vr" && !n.tmp_fontface_path) {
                var r = "/font.jsp?substring=" + encodeURIComponent(n.con) + "&type=" + n.textType + "&id=" + n.textfontid;
                n.tmp_fontface_path = r
            }
            u = "font-family:'" + n.fontfamily + "';";
            e += "@font-face {\nfont-family: '" + n.fontfamily + "';\nsrc: url('" + n.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n";
            c = '<div class="' + h + "\" style=\"font-family: 'microsoft yahei',å¾®è½¯é›…é»‘, å®‹ä½“, æ–°å®‹ä½“,sans-serif;padding:0; word-wrap: break-word; " + u + "; font-size: " + g.fontsize + ";position: absolute;top: " + g.top + "; left: " + g.left + ";z-index:-99;opacity: 0;font-style: " + g.fontitalic + "; width: " + g.width + "px; height:" + g.height + 'px; ">' + g.con + "</div>"
        } else {
            if ((!!n.moduleId || Flyer.getQueryString("view") === "vr") && !!n.module && !!n.module.ftFamilyList) {
                if (n.module.ftFamilyList.length > 0) {
                    for (var s = 0, t = n.module.ftFamilyList.length; s < t; s++) {
                        var k = n.module.ftFamilyList[s];
                        if (Flyer.getQueryString("view") === "vr" && !k.tmp_fontface_path) {
                            var r = "/font.jsp?substring=" + encodeURIComponent(k.con) + "&type=" + k.fonttype + "&id=" + k.fontid;
                            k.tmp_fontface_path = r
                        }
                        e += "@font-face {\nfont-family: '" + k.fontfamily + "';\nsrc: url('" + k.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n"
                    }
                } else {
                    if (n.textfontid != 0) {
                        n.fontfamily = "flyerFont_" + g.contentIndex + "_" + Math.floor(Math.random() * 100000);
                        if (Flyer.getQueryString("view") === "vr" && !n.tmp_fontface_path) {
                            var r = "/font.jsp?substring=" + encodeURIComponent(n.con) + "&type=" + n.textType + "&id=" + n.textfontid;
                            n.tmp_fontface_path = r
                        }
                        u = "font-family:'" + n.fontfamily + "';";
                        e += "@font-face {\nfont-family: '" + n.fontfamily + "';\nsrc: url('" + n.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n"
                    }
                }
            }
        }
        var f = g.width;
        var q = Flyer.filterTextHtml((g.con));
        if (escape(g.con).indexOf("%u") < 0 && n.textfontid != 0) {}
        if (n.direction == "vertical") {
            if ($("#" + m).length > 0) { $("#" + m).remove() }
            var b = "<style type='text/css' id='" + m + "'>\n." + m + " .splitText {height: " + parseInt(g.fontsize) * ((100 + n.letterspacing) / 100) + "px ;}\n." + m + " .splitText font {display: inline-block;}\n</style>";
            $("head").append(b);
            var v = $("<div>").html(q);
            d(v);
            $(v).find("[style *= font-size]").each(function() {
                if ($(this).attr("class") == "wcdfontwrap") { return false }
                var w = parseInt($(this).css("font-size")) * ((100 + n.letterspacing) / 100);
                var x = $(this).find(".splitText");
                var i = x.length;
                if (i > 0) { $(this).find(".splitText").each(function() { $(this).css({ height: w }) }) } else {
                    $(this).closest(".splitText").css("height", "auto");
                    $(this).css({ height: w })
                }
            });
            q = v.html();
            $(v).remove();

            function d(z) {
                for (var y = 0; y < z.length; y++) {
                    var x = z[y];
                    if (x.className == "splitText") { continue }
                    if (x.nodeType == Node.TEXT_NODE) {
                        var w = x.nodeValue;
                        w = w.replace(/((?!&nbsp| ).)/g, function(i) { return "<span class='splitText'>" + i + "</span>" });
                        $(w).insertAfter($(x));
                        $(x).remove()
                    } else { d(x.childNodes) }
                }
            }
        }
        var o = "";
        if (!!g.enterEffect) { o = "animation:noeffect 1ms " + g.enterDelay + "ms 1 both;-webkit-animation:noeffect 1ms " + g.enterDelay + "ms 1 both;" }
        j += '<div class="ele f_Text ' + m + '"style="-moz-transform:rotate(' + g.rotate + ")  translateZ(0) skew(" + g.skew + ");-webkit-transform:rotate(" + g.rotate + ") translateZ(0) skew(" + g.skew + ");transform:rotate(" + g.rotate + ") translateZ(0) skew(" + g.skew + ");" + g.isHidden + " z-index: " + g.index + ";font-size:0px; opacity: " + g.opacity + "; top: " + g.top + "; left: " + g.left + ";width: " + f + "px;height:" + g.height + 'px;"><div class="eleChild" uniquename = ' + g.uniqueName + ' emphaCount = "' + g.emphaCount + '"style="position:relative;z-index:1;width: ' + f + "px;height:" + g.height + "px;padding:" + g.borderwidth + ' "><div class="fakerBg" style="' + o + "position:absolute;left:0;top:0;box-sizing: border-box;z-index:1;border-style:" + g.borderstyle + "; box-shadow:" + g.boxshadow + ";border-color: " + g.bordercolor + "; border-width: " + g.borderwidth + "; background: " + g.bgcolor + ";border-radius: " + g.borderradius / 100 * g.width + "px;overflow: hidden;width: " + f + "px;height:" + g.height + 'px;"></div><div  class="editor" style="position:relative;z-index:2;font-family: \'microsoft yahei\',å¾®è½¯é›…é»‘, å®‹ä½“, æ–°å®‹ä½“,sans-serif;padding:0; color:' + g.fontcolor + ";text-shadow:" + g.textshadow + ";word-wrap: break-word; font-size: " + g.fontsize + "; line-height: " + g.lineheight + ";letter-spacing: " + n.letterspacing / 100 + "em;;text-align: " + g.textalign + ";" + u + "px; font-weight: " + g.fontbold + "; font-style: " + g.fontitalic + "; text-decoration: " + g.underline + ";" + (n.direction == "vertical" ? "height:" + n.h + "px;" : "width: " + n.w + "px;height:" + n.h + "px;") + ";text-orientation:upright;-webkit-text-orientation:upright;writing-mode:" + (n.direction == "vertical" ? "vertical-rl" : "horizontal-tb") + ";-webkit-writing-mode:" + (n.direction == "vertical" ? "vertical-rl" : "horizontal-tb") + '">' + q + g.linkContentString + "</div></div></div>";
        var l = g.contentIndex;
        Flyer.getSlideNode(l, ".contentEle", g.isLayer).append(j);
        $("." + m).off("click").on("click", function() {
            if ($(this).text().length > 50) {
                var i = Flyer.initTextanimation();
                i.removeAni($(this).find(".eleChild"))
            }
        });
        $("#temporaryStyle").append(e)
    }
})(Flyer);
(function(a) {
    a.pshapeElement = function(s, g) {
        var h = "";
        var e = "";
        var d = s.shape;
        var o = s.shapecolor;
        var b = Flyer.decodeHtml(s.shapehtml);
        var A = s.shapeId;
        var c = s.shapeLineId;
        if (!b && top && top.Flyer && top.Flyer._svgsList && top.Flyer._svgsLineList) {
            if (A == 11) {
                var n = c - 1;
                if (n == 5) { n = 2 }
                svgContent = top.Flyer._svgsLineList[n].content
            } else { var f = top.Flyer._svgsList; for (var t in f) { if (f[t] && f[t].id === d) { b = f[t].content; break } } }
        }
        var B = "";
        var w = "fill:" + o + ";";
        var r = "";
        var l = s.borderradius;
        var u = parseInt(g.borderwidth.replace("px", ""));
        var y = 0;
        if (g.borderstyle != "none") {
            w += "stroke:" + g.bordercolor + ";";
            var x = (g.width < 80) ? 80 : g.width;
            if (d != "1.svg") { u = u * (80 / x) }
            w += "stroke-width:" + u + "px;";
            y = u * 2
        }
        y = (isNaN(y)) ? 0 : y;
        y = s["border-color"] == "transparent" ? 0 : y;
        var k = g.width + y;
        var v = g.height + y;
        k = (k < 1 && k > 0) ? 1 : k;
        v = (v < 1 && v > 0) ? 1 : v;
        if (g.boxshadowInt != 0 || s.boxShadowX != 0 || s.boxShadowY != 0) {
            B += "-webkit-filter:drop-shadow(" + g.boxshadow + ");";
            B += "filter:drop-shadow(" + g.boxshadow + ");"
        }
        if (l > 0 || A == 1) {
            var z = l * g.width / 100;
            if (z > g.height / 2) { z = g.height / 2 }
            r = " rx='" + z + "' ry='" + z + "' ";
            var i = '<rect width="100%" height="100%"/>';
            b = b && b.replace(i, '<rect width="100%" height="100%"' + r + "/>")
        }
        if (A == 11) {
            var q = "shape_" + g.contentIndex + "_" + g.index;
            b = Flyer.shapeSvgFilter(c, q, b, g.height)
        }
        if (g.borderstyle === "dashed") { w += "stroke-dasharray:5,5" } else { if (g.borderstyle === "dotted") { w += "stroke-dasharray:1,5" } }
        e += "#contentIndex" + g.contentIndex + "f_Shape" + g.index + " svg{" + w + ";}\n";
        e += "#contentIndex" + g.contentIndex + "f_Shape" + g.index + " div{" + B + ";}\n";
        var m = parseInt(g.borderwidth.replace("px", "")) * 2 + "px";
        h += '<div class="ele f_Shape" id="contentIndex' + g.contentIndex + "f_Shape" + g.index + '"  style="top: ' + g.top + ";left: " + g.left + ";width:" + k + "px; height:" + v + "px;opacity: " + g.opacity + ";" + g.isHidden + " z-index: " + g.index + ";-webkit-transform:rotate(" + g.rotate + ') translateZ(0);"><div class="eleChild" uniquename = ' + g.uniqueName + ' style="width:' + k + "px; height:" + v + 'px;">' + b + "</div>" + g.linkContentString + "</div>";
        var j = g.contentIndex;
        Flyer.getSlideNode(j, ".contentEle", g.isLayer).append(h);
        $("#temporaryStyle").append(e)
    }
})(Flyer);
(function(a) {
    a.atlasElement = function(o, d) {
        var e = "";
        var j = false;
        var g = d.contentIndex;
        var h = "f_Atlas_" + g + "_" + d.index;
        var r = "img_wiper_" + d.index + "_" + d.contentIndex;
        var v, c, t, f, m;
        var s = d.enterDelay + d.enterSpeed;
        if (typeof window.timerList == "undefined") { window.timerList = [] }
        var i = function() {
            if (t < d.width) {
                m = d.width / t;
                t = t * m;
                f = f * m
            }
            if (f < d.height) {
                m = d.height / f;
                t = t * m;
                f = f * m
            }
        };
        switch (d.atlas_animation) {
            case 1:
                e += '<div id="' + h + '" class="ele f_Atlas "   style="top: ' + d.top + ";width:" + d.width + "px; height:" + d.height + "px; left: " + d.left + ";" + d.isHidden + " z-index: " + d.index + ";-moz-transform:rotate(" + d.rotate + ");-webkit-transform:rotate(" + d.rotate + ');"><div id=' + r + ' class="img-container_1 eleChild" uniquename = "' + d.uniqueName + '" style="width: ' + d.width + "px;height: " + d.height + 'px"><ul  class="list_1">';
                for (var n in d.atlasList) {
                    n = d.atlasList[n];
                    var k = n.id;
                    v = n.pict || 0, c = n.picl || 0, t = n.picw, f = n.pich;
                    i();
                    var b = n || {};
                    b.id = n.linkid;
                    d.link = b;
                    var l = Flyer.getElementLinkNode(d);
                    var u = "";
                    if (l.length > 0) { u += l[0] + l[1] }
                    var q = n.tmp_pic_path;
                    e += '<li  class="list-item_1"><img style="position: absolute; top:' + v + "px; left:" + c + "px;width:" + t + "px; height:" + f + 'px;" src="' + q + '">' + u + "</li>"
                }
                e += "</ul></div></div>";
                break;
            case 2:
                e += '<div id="' + h + '" class="ele f_Atlas "   style="top: ' + d.top + ";width:" + d.width + "px; height:" + d.height + "px; left: " + d.left + ";" + d.isHidden + " z-index: " + d.index + ";-moz-transform:rotate(" + d.rotate + ");-webkit-transform:rotate(" + d.rotate + ');"><div id=' + r + ' class="img-container_2 eleChild" uniquename = ' + d.uniqueName + ' style="width: ' + d.width + "px;height: " + d.height + 'px"><ul class="list_2" style="width: ' + d.width + "px;height: " + d.height + 'px">';
                for (var n in d.atlasList) {
                    n = d.atlasList[n];
                    var k = n.id;
                    v = n.pict || 0, c = n.picl || 0, t = n.picw || d.width, f = n.pich || d.height;
                    i();
                    var b = n || {};
                    b.id = n.linkid;
                    d.link = b;
                    var l = Flyer.getElementLinkNode(d);
                    var u = "";
                    if (l.length > 0) { u += l[0] + l[1] }
                    var q = n.tmp_pic_path;
                    e += '<li class="list-item_2" style="width: ' + d.width + "px;height: " + d.height + 'px"><img style="position: absolute; top:' + v + "px; left:" + c + "px;width:" + t + "px; height:" + f + 'px;" src="' + q + '">' + u + "</li>"
                }
                e += "</ul></div></div>";
                break;
            case 3:
                e += '<div id="' + h + '" class="ele f_Atlas "   style="top: ' + d.top + ";width:" + d.width + "px; height:" + d.height + "px; left: " + d.left + ";" + d.isHidden + " z-index: " + d.index + ";-moz-transform:rotate(" + d.rotate + ");-webkit-transform:rotate(" + d.rotate + ');"><div id=' + r + ' class="img-container_3 eleChild" uniquename = ' + d.uniqueName + ' style="width: ' + d.width + "px;height: " + d.height + 'px"><ul  class="list_3">';
                for (var n in d.atlasList) {
                    n = d.atlasList[n];
                    var k = n.id;
                    v = n.pict || 0, c = n.picl || 0, t = n.picw || d.width, f = n.pich || d.height;
                    i();
                    var b = n || {};
                    b.id = n.linkid;
                    d.link = b;
                    var l = Flyer.getElementLinkNode(d);
                    var u = "";
                    if (l.length > 0) { u += l[0] + l[1] }
                    var q = n.tmp_pic_path;
                    e += '<li  class="list-item_3"><img style="position: absolute; top:' + v + "px; left:" + c + "px;width:" + t + "px; height:" + f + 'px;"  src="' + q + '">' + u + "</li>"
                }
                e += "</ul></div></div>";
                break;
            default:
                e += '<div id="' + h + '" class="ele f_Atlas "   style="top: ' + d.top + ";width:" + d.width + "px; height:" + d.height + "px; left: " + d.left + ";" + d.isHidden + " z-index: " + d.index + ";-moz-transform:rotate(" + d.rotate + ");-webkit-transform:rotate(" + d.rotate + ');"><div id=' + r + ' class="img-container_4 eleChild" uniquename = ' + d.uniqueName + ' style="width: ' + d.width + "px;height: " + d.height + 'px"><ul  class="list_4">';
                for (var n in d.atlasList) {
                    n = d.atlasList[n];
                    var k = n.id;
                    v = n.pict || 0, c = n.picl || 0, t = n.picw || d.width, f = n.pich || d.height;
                    i();
                    var b = n || {};
                    b.id = n.linkid;
                    d.link = b;
                    var l = Flyer.getElementLinkNode(d);
                    var u = "";
                    if (l.length > 0) { u += l[0] + l[1] }
                    var q = n.tmp_pic_path;
                    e += '<li  class="list-item_4"><img style="position: absolute; top:' + v + "px; left:" + c + "px;width:" + t + "px; height:" + f + 'px;"  src="' + q + '">' + u + "</li>"
                }
                e += "</ul></div></div>"
        }
        Flyer.getSlideNode(g, ".contentEle", d.isLayer).append(e);
        Flyer.getSlideNode(g, "", d.isLayer).bind("existAtivePage", function() { for (var w = 0; w < timerList.length; w++) { clearInterval(timerList.pop()) } });
        Flyer.getSlideNode(g, "", d.isLayer).bind("slidePageEnd", function() {
            var z, y;
            if (typeof timerList.atlasPlugIdList == "undefined") { timerList.atlasPlugIdList = [] }
            if (typeof timerList.atlasObjectList == "undefined") { timerList.atlasObjectList = [] }
            var x = function() {
                for (var A = 0; A < timerList.atlasObjectList.length; A++) {
                    if (timerList.atlasObjectList[A].id == r) {
                        timerList.atlasObjectList[A].obj.autoplay();
                        timerList.push(timerList.atlasObjectList[A].obj.timer());
                        return
                    }
                }
            };
            var w = function(C, A) {
                timerList.push(C);
                var B = { id: r, obj: A };
                timerList.atlasObjectList.push(B);
                timerList.atlasPlugIdList.push(r)
            };
            if (d.atlas_animation == 1) {
                y = function() {
                    if (timerList.atlasPlugIdList.indexOf(r) < 0) {
                        var A = { containerSelector: "#" + r, pre: "#pre" + d.index + d.contentIndex, next: "#next" + d.index + d.contentIndex };
                        if (d.atlasCutover == 2) {
                            A.autoPlay = true;
                            A.playFrequency = d.atlas_auto_play_time * 1000;
                            A.autoPlayDelay = s
                        }
                        obj = $("#" + r).spellShow(A);
                        obj.init();
                        w(obj.timer(), obj)
                    } else { x() }
                };
                if (!Flyer.hasLoadedJs.jquerySpellShowImages) {
                    z = Flyer.lazyJSPath.jquerySpellShowImages;
                    jQuery.getCacheScript(z, function(A, B) {
                        if (B) {
                            Flyer.hasLoadedJs.jquerySpellShowImages = true;
                            y()
                        } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                    })
                } else { y() }
            } else {
                if (d.atlas_animation == 2) {
                    y = function() {
                        if (timerList.atlasPlugIdList.indexOf(r) < 0) {
                            var A = { selector: "#" + r, decorateCss: "img_container_2_black" };
                            if (d.atlasCutover == 2) {
                                A.autoPlay = true;
                                A.autoPlayTime = d.atlas_auto_play_time * 1000;
                                A.autoPlayDelay = s
                            }
                            obj = $("#" + r + "  ul").roundAbout(A);
                            obj.init();
                            w(obj.timer(), obj)
                        } else { x() }
                    };
                    if (!Flyer.hasLoadedJs.jqueryRoundabout) {
                        z = Flyer.lazyJSPath.jqueryRoundabout;
                        jQuery.getCacheScript(z, function(A, B) {
                            if (B) {
                                Flyer.hasLoadedJs.jqueryRoundabout = true;
                                y()
                            } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                        })
                    } else { y() }
                } else {
                    if (d.atlas_animation == 3) {
                        y = function() {
                            if (timerList.atlasPlugIdList.indexOf(r) < 0) {
                                var A = { wiperSelector: "#" + r, degree: 5, fixedDegree: true };
                                if (d.atlasCutover == 2) {
                                    A.autoPlay = true;
                                    A.autoPlayFrequency = d.atlas_auto_play_time * 1000;
                                    A.autoPlayDelay = s
                                }
                                obj = $("#" + r).stackImage(A);
                                obj.init();
                                w(obj.timer(), obj)
                            } else { x() }
                        };
                        if (!Flyer.hasLoadedJs.jqueryStackImage) {
                            z = Flyer.lazyJSPath.jqueryStackImage;
                            jQuery.getCacheScript(z, function(A, B) {
                                if (B) {
                                    Flyer.hasLoadedJs.jqueryStackImage = true;
                                    y()
                                } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                            })
                        } else { y() }
                    } else {
                        y = function() {
                            if (timerList.atlasPlugIdList.indexOf(r) < 0) {
                                var A = { containerSelector: "#" + r };
                                if (d.atlasCutover == 2) {
                                    A.autoPlay = true;
                                    A.autoPlayTime = d.atlas_auto_play_time * 1000;
                                    A.autoPlayDelay = s
                                }
                                obj = $("#" + r).threeDCard(A);
                                obj.init();
                                w(obj.timer(), obj)
                            } else { x() }
                        };
                        if (!Flyer.hasLoadedJs.jqueryThreeDCard) {
                            z = Flyer.lazyJSPath.jqueryThreeDCard;
                            jQuery.getCacheScript(z, function(A, B) {
                                if (B) {
                                    Flyer.hasLoadedJs.jqueryThreeDCard = true;
                                    y()
                                } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                            })
                        } else { y() }
                    }
                }
            }
            if ("ontouchstart" in window) { $("#" + h).bind("touchstart touchmove touchend", function(A) { if (window.parent.pageSwiper.params.direction != "vertical") { A.stopPropagation() } }) } else { $("#" + h).bind("mouseup mousedown", function(A) { if (window.parent.pageSwiper.params.direction != "vertical") { A.stopPropagation() } }) }
        })
    }
})(Flyer);
(function(a) {
    a.videoElement = function(b, n) {
        var h = false;
        var d = "";
        var g = "f_Video_" + n.contentIndex + "_" + n.index;
        var e = b.autoplay;
        var j = "";
        var m = [];
        m = n.con.split("/");
        var c = (m.length >= 2) ? m[2] : "";
        var i = m.length;
        var l = "";
        if (c === "v.youku.com") {
            l = m[i - 1].split("id_")[1].split(".html")[0].split("_")[0];
            j = "http://player.youku.com/embed/" + l + "?"
        } else {
            if (c === "player.youku.com") {
                if (m[i - 1].endsWith("swf")) { l = m[i - 2] } else { l = m[i - 1] }
                j = "http://player.youku.com/embed/" + l
            } else { if (c === "v.qq.com" || c === "static.video.qq.com") { var k = m[i - 1].split("vid="); if (k.length > 1) { l = k[1].split("&")[0] } else { l = k[0].split(".html")[0] } if (e) { j = "http://v.qq.com/iframe/player.html?vid=" + l + "&tiny=1&auto=1" } else { j = "http://v.qq.com/iframe/player.html?vid=" + l + "&tiny=1&auto=0" } } }
        }
        d += '<div id="' + g + '" class="ele f_Video" data-src="' + j + '" style="top: ' + n.top + ";width:" + n.width + "px; height:" + n.height + "px; left: " + n.left + "; z-index: " + n.index + ";" + n.isHidden + " -moz-transform:rotate(" + n.rotate + ");-webkit-transform:rotate(" + n.rotate + ');"><div class="eleChild" uniquename = ' + n.uniqueName + '  style="position:absolute; overflow: hidden; width:' + n.width + "px; height:" + n.height + 'px;"><svg style="position: absolute;width: 100%;height: 100%;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="å›¾å±‚_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><circle opacity="0.5" fill="#040000" cx="20.014" cy="20.015" r="19.027"/><g><path fill="#FFFFFF" d="M20.015,40.029C8.979,40.029,0,31.051,0,20.015C0,8.978,8.979,0,20.015,0   c11.036,0,20.014,8.978,20.014,20.015C40.029,31.051,31.051,40.029,20.015,40.029z M20.015,1.976   c-9.947,0-18.04,8.092-18.04,18.039c0,9.946,8.093,18.038,18.04,18.038c9.946,0,18.038-8.092,18.038-18.038   C38.053,10.068,29.961,1.976,20.015,1.976z"/></g><path fill="#FFFFFF" d="M13.443,11.627c0-0.507,0.27-1,0.746-1.262c0.476-0.262,1.035-0.227,1.464,0.044l13.264,8.387  c0.402,0.254,0.672,0.705,0.672,1.217s-0.27,0.962-0.672,1.218l-13.264,8.387c-0.429,0.271-0.989,0.307-1.464,0.044  c-0.476-0.263-0.746-0.753-0.746-1.262V11.627z"/></svg></div></div>';
        var f = n.contentIndex;
        Flyer.getSlideNode(f, ".contentEle", n.isLayer).append(d);
        Flyer.videoTimer = null;
        $("#" + g).off("click").on("click", function() {
            var q = $(this).attr("data-src").trim();
            if (!q) { Flyer.ing("è¯·è¾“å…¥è§†é¢‘è·¯å¾„!", true, 3000, "notice"); return }
            var o = '<div id=\'videoMark\' class=\'videoMark f_DNSTraffic\'><div class="videoMarkBg"></div><div class="loadingPage_One j_loading" style="padding-left:30px;"><div class="_ballOne ooc" data-css="wh"></div><div class="_ballTwo ooc" data-css="wh"></div><div class="_ballThree ooc" data-css="wh"></div><div class="j_text" style="display:none;position: absolute;bottom: 40px;left: 16px;color: #fff;font-size: 28px;">ç½‘ç»œå¥½åƒé¸½äº†...</div></div><iframe width="1px" frameborder="0" allowfullscreen="" style="position: absolute;max-height: 100%;top:50%;transform: translateY(-50%);-webkit-transform: translateY(-50%);"></iframe></div>';
            $("body").append(o);
            $("#videoMark .videoMarkBg").off("click").on("click", function() {
                clearTimeout(Flyer.videoTimer);
                Flyer.audioCtrl.musicAndVideoPlayer && Flyer.audioCtrl.musicAndVideoPlayer(1);
                $("#videoMark").remove()
            });
            $("#videoMark iframe")[0].onload = function() {
                $("#videoMark .j_loading").hide();
                $("#videoMark iframe").css({ width: "100%", "min-height": "50%" })
            };
            clearTimeout(Flyer.videoTimer);
            Flyer.videoTimer = setTimeout(function() { $("#videoMark .j_text").show() }, 5000);
            $("#videoMark iframe").attr("src", q);
            Flyer.audioCtrl.musicAndVideoPlayer && Flyer.audioCtrl.musicAndVideoPlayer(0)
        })
    }
})(Flyer);
(function(a) {
    a.buttonElement = function(b, j) {
        if (b.module == undefined) { b.module = { buttonShapeType: 6, fontId: 0, aidedColor: "#fff", fontFamily: "inherit", con: b.con, customFontStyle: 0 } }

        function e(m, o) {
            var n = i(m);
            if (!n || !o || isNaN(o)) { return false }
            o = Math.max(o, 0);
            o = Math.min(o, 100);
            for (var l = 0; l < n.length; l++) { n[l] = (Math.floor(n[l] - n[l] * (o / 100))).toString(16); if (n[l].length == 1) { n[l] = "0" + n[l] } }
            var k = "#" + n.join("");
            return k
        }

        function i(n) {
            var n = n.replace("#", "").toLowerCase();
            if (n.length == 3) {
                var m = new Array;
                var k = 3;
                while (k--) { m[k] = n.charAt(k) + "" + n.charAt(k) }
                n = m.join("")
            }
            if (n.length == 6) { var l = n.match(/[0-9a-f]{2}/g); if (l && l.length == 3) { var k = 3; while (k--) { l[k] = parseInt(l[k], 16) } return l } else { return false } }
        }
        var d = "";
        var g;
        var c = "button" + Math.random().toString(36).slice(8);
        d += '<div class="ele f_Button" id="' + c + '" style="opacity: ' + j.opacity + ";-webkit-transform:rotate(" + j.rotate + ");-moz-transform:rotate(" + j.rotate + ");width:" + j.width + "px; height:" + j.height + "px;z-index:" + j.index + "; " + j.isHidden + " top: " + j.top + "; left:" + j.left + ';">';
        if (b.module.buttonShapeType == 1) {
            g = e(j.bgcolor, 20);
            d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style=" border-radius: 4px;box-shadow:0  6px 0 0' + g + ";font-family:" + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;background: " + j.bgcolor + "; width:" + j.width + "px; height:" + j.height + 'px;overflow:hidden;"><div style="width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + b.module.con + "</div>"
        } else {
            if (b.module.buttonShapeType == 2) {
                g = e(j.bgcolor, 20);
                d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style="font-family:' + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;background:-o-linear-gradient(right," + j.bgcolor + "," + g + ");background:-moz-linear-gradient(right," + j.bgcolor + "," + g + ");background:-webkit-linear-gradient(left," + j.bgcolor + "," + g + ");background:linear-gradient(90deg," + j.bgcolor + "," + g + "); width:" + j.width + "px; height:" + j.height + "px; border-radius: " + j.width / 2 + 'px;overflow:hidden;"><div style="width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + b.module.con + "</div>"
            } else {
                if (b.module.buttonShapeType == 3) { d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style="font-family:' + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;border-style:solid; border-color: " + j.bgcolor + "; border-width:5px; background:transparent; width:" + j.width + "px; height:" + j.height + 'px;text-transform: none;-webkit-border-radius:255px 155px/ 10px 5px ;  border-radius:255px 155px/ 10px 5px ;overflow:hidden;"><div style="width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + (b.module.con) + "</div>" } else {
                    if (b.module.buttonShapeType == 4) {
                        g = e(j.bgcolor, 20);
                        d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style=" background:-o-linear-gradient(' + j.bgcolor + "," + g + ");background:-moz-linear-gradient(" + j.bgcolor + "," + g + ");background:-webkit-linear-gradient(" + j.bgcolor + "," + g + ");background:linear-gradient(180deg," + j.bgcolor + "," + g + ");font-family:" + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;width:" + j.width + "px; height:" + j.height + 'px; border-radius: 4px;overflow:hidden;"><div style="position:absolute;width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + (b.module.con) + "</div>"
                    } else {
                        if (b.module.buttonShapeType == 5) {
                            g = e(j.bgcolor, 20);
                            d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style="border-top-left-radius:' + j.width / 3 + "px;border-top-right-radius:10px;border-bottom-right-radius:" + j.width / 3 + "px; border-bottom-left-radius:10px;box-shadow:0  6px 3px 1px" + g + ";font-family:" + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;background: " + j.bgcolor + "; width:" + j.width + "px; height:" + j.height + 'px;overflow:hidden;"><div style="width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + (b.module.con) + "</div>"
                        } else { d += '<div class="eleChild" uniquename = ' + j.uniqueName + '  style="font-family:' + b.module.fontFamily + ";padding:0;  color:" + j.fontcolor + "; font-size: " + j.fontsize + ";  position:absolute;border-style:" + j.borderstyle + "; border-color: " + j.bordercolor + "; border-width: " + j.borderwidth + "; background: " + j.bgcolor + "; width:" + j.width + "px; height:" + j.height + "px; border-radius: " + j.borderradius / 100 * j.width + "px;overflow:hidden;box-shadow:" + j.boxshadow + ';"><div style="width:' + j.width + "px; height:" + j.height + "px;line-height:" + j.height + 'px;">' + (b.module.con) + "</div>" }
                    }
                }
            }
        }
        d += j.linkContentString + "</div></div>";
        var h = "";
        if (b.module.fontId != 0) {
            h += "<style type='text/css' id='" + b.module.fontFamily + "'>\n@font-face {\nfont-family: '" + b.module.fontFamily + "';\nsrc: url('" + b.module.font_tmp_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
            $("head").append(h)
        }
        var f = j.contentIndex;
        Flyer.getSlideNode(f, ".contentEle", j.isLayer).append(d);
        return {}
    }
})(Flyer);
(function(a) {
    a.puzzleElement = function(b, s) {
        var f = "",
            m = "";
        if (!b.module) { return { flyerElementHtml: f, flyerStyle: m } }
        var d = b.module.puzzleId,
            g = b.module.list,
            e = "",
            m = "";
        for (var q in g) {
            var k = g[q].picl,
                c = g[q].pict,
                r = g[q].picw,
                n = g[q].pich,
                o = Math.floor(g[q].w),
                j = Math.floor(g[q].h);
            m += (!!g[q].color ? "\n.f_Puzzle.f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d + " .puzzleSvg_" + s.contentIndex + "_" + s.index + "_" + q + ",\n.f_Puzzle.f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d + " .puzzleSvg_" + s.contentIndex + "_" + s.index + "_" + q + " .puzzleInfo{background-color:" + g[q].color + ";}\n" : "");
            var l = g[q].opacity !== undefined ? "opacity:" + (1 - g[q].opacity * 0.01) : "";
            if (!!g[q].pic && l !== "") { m += "\n.f_Puzzle.f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d + " .puzzleSvg_" + s.contentIndex + "_" + s.index + "_" + q + ".hasPuzzleImage .puzzleInfo{" + l + ";}\n" } else { m += "\n.f_Puzzle.f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d + " .puzzleSvgParent_" + s.contentIndex + "_" + s.index + "_" + q + ":not(.hasPuzzleImage) {" + l + ";}\n" }
            e += '<div class="puzzleSvgParent puzzleSvgParent_' + q + " puzzleSvgParent_" + s.contentIndex + "_" + s.index + "_" + q + '"><div class="puzzleSvg ' + (!!g[q].pic ? "hasPuzzleImage" : "") + " puzzleSvg_" + q + " puzzleSvg_" + s.contentIndex + "_" + s.index + "_" + q + '" style="position: relative;width:' + o + "px; height:" + j + 'px;"><div class="puzzleInfo">' + (!!g[q].pic ? '<img style="top: ' + c + "px;position: absolute; left: " + k + "px;width:" + r + "px; height:" + n + 'px;" src="' + g[q].tmp_pic_path + '" />' : (Flyer.isAndroid() ? '<img style="top: 0;position: absolute; left: 0;width:' + o + "px; height:" + j + 'px;" src="' + Flyer._resRoot + '/image/puzzleSvg/1x1.png" />' : "")) + "</div></div></div>"
        }
        setTimeout(function() {
            var u = $(".f_Puzzle.f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d);
            var t = u.find(".puzzleSvg"),
                h = s.enterDelay;
            t.each(function(w, z) {
                var x = window.getComputedStyle(z, null);
                var y = x.getPropertyValue("animation") || x.getPropertyValue("-webkit-animation") || x.getPropertyValue("-moz-animation") || x.getAttribute("animation") || x.getAttribute("-webkit-animation") || x.getAttribute("-moz-animation") || null,
                    v = 0;
                if (y && y != "none") { if (y.split(" ").length > 3) { v = h + parseFloat(y.split(" ")[3]) * 1000 - 600 } }
                if (!!s.openEffect) { $(this).css({ "animation-delay": v + "ms", "-webkit-animation-delay": v + "ms", "-moz-animation-delay": v + "ms" }) } else { $(this).css({ animation: "none", "-webkit-animation": "none", "-moz-animation": "none" }) }
            })
        }, 0);
        s.animationData = "noeffect 1ms " + s.enterDelay + "ms 1 both";
        f += '<div class="ele f_Puzzle f_Puzzle' + d + " f_Puzzle_" + s.contentIndex + "_" + s.index + "_" + d + '" style="-webkit-transform:rotate(' + s.rotate + ") translateZ(0);-moz-transform:rotate(" + s.rotate + ") translateZ(0);width:" + s.width + "px; height:" + s.height + "px;z-index:" + s.index + ";" + s.isHidden + " top: " + s.top + "; left:" + s.left + ';"><div class="eleChild" uniquename = ' + s.uniqueName + '  style="position:absolute;width:' + s.width + "px; height:" + s.height + 'px;display:none;">' + e + "</div></div>";
        var i = s.contentIndex;
        Flyer.getSlideNode(i, ".contentEle", s.isLayer).append(f);
        $("#temporaryStyle").append(m);
        return {}
    }
})(Flyer);
(function(a) {
    a.cardsElement = function(r, h) {
        var j = "",
            e = "";
        if (!r.module) { return { flyerElementHtml: j, flyerStyle: e } }
        var m = h.contentIndex,
            C = "f_Cards_" + m + "_" + h.index,
            t = r.module,
            q = t.cardsList,
            s = "",
            l = "";
        var u = "img_wiper_" + h.index + "_" + h.contentIndex;
        var v = h.enterDelay + h.enterSpeed;
        if (typeof window.cardsTimerList == "undefined") { window.cardsTimerList = [] }
        s += '<div class="ele f_Cards" id="' + C + '" style=" z-index: ' + h.index + "; " + h.isHidden + " width: " + h.width + "px; height: " + h.height + "px; top: " + h.top + "; left: " + h.left + ';">';
        l += '<div class="eleChild" uniquename = ' + h.uniqueName + ' id="' + u + '" style="  width: ' + h.width + "px; height: " + h.height + 'px; position: relative;" animation="' + h.animationData + '"><ul class="cardList">';
        for (var w = 0, x = q.length; w < x; w++) {
            var d = q[w];
            var n = "",
                o = "",
                c = "",
                A = "";
            var g = d.picl,
                D = d.pict,
                B = d.picw,
                k = d.pich;
            if (t.titleSwitch) { o += '<div class="cardsTitleBox" style="color : ' + t.titleColor + "; font-family: " + t.titleFamily + "; font-size: " + t.titleFtSize + 'px;"><p class="cardsTitle">' + (d.titleCon) + "</p></div>" }
            if (t.desSwitch) { c += '<div class="cardsDesBox" style="color : ' + t.desColor + "; font-family: " + t.desFamily + "; font-size: " + t.desFtSize + 'px;"><p class="cardsDes">' + Flyer.filterTextHtml(Flyer.decodeHtml(d.desCon)) + "</p></div>" }
            if (d.link.linkid != 0) {
                var z = d.link || {};
                z.id = d.link.linkid;
                h.link = z;
                var f = Flyer.getElementLinkNode(h);
                if (f.length > 0) { A += f[0] + f[1] }
            }
            n += '<li class="f_CardBox"><div class="f_Card" style=" background: ' + h.bgcolor + "; position: relative; border-radius: " + h.borderradius / 100 * h.width + "px; box-shadow: " + h.boxshadow + "; border-style: " + h.borderstyle + "; border-color: " + h.bordercolor + "; border-width: " + h.borderwidth + '; overflow: hidden;"><div class="cardInfo" style="overflow: hidden;position: relative; height: ' + t.show_height + "px; width: " + t.show_width + 'px;"><img class="imgClass" style="position: absolute; height: ' + k + "px; width: " + B + "px; top: " + D + "px; left: " + g + 'px;" src="' + d.tmp_pic_path + '">' + A + "</div>" + o + c + "</div></li>";
            l += n
        }
        var y = "";
        if (t.titleFontId != 0) {
            y += "<style type='text/css' id='" + t.titleFamily + "'>\n@font-face {\nfont-family: '" + t.titleFamily + "';\nsrc: url('" + t.title_tmp_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
            $("#temporaryStyle").append(y)
        }
        var b = "";
        if (t.desFontId != 0) {
            b += "<style type='text/css' id='" + t.desFamily + "'>\n@font-face {\nfont-family: '" + t.desFamily + "';\nsrc: url('" + t.des_tmp_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
            $("#temporaryStyle").append(b)
        }
        l += "</ul></div>";
        s += l + "</div>";
        Flyer.getSlideNode(m, ".contentEle", h.isLayer).append(s);
        Flyer.getSlideNode(m, "", h.isLayer).bind("existAtivePage", function() { for (var E = 0; E < cardsTimerList.length; E++) { clearInterval(cardsTimerList.pop()) } });
        Flyer.getSlideNode(m, "", h.isLayer).bind("slidePageEnd", function() {
            var G, F;
            if (typeof cardsTimerList.cardsPlugIdList == "undefined") { cardsTimerList.cardsPlugIdList = [] }
            if (typeof cardsTimerList.cardsObjectList == "undefined") { cardsTimerList.cardsObjectList = [] }
            var E = function() {
                for (var H = 0; H < cardsTimerList.cardsObjectList.length; H++) {
                    if (cardsTimerList.cardsObjectList[H].id == u) {
                        cardsTimerList.cardsObjectList[H].obj.autoplay();
                        cardsTimerList.push(cardsTimerList.cardsObjectList[H].obj.timer());
                        return
                    }
                }
            };
            var i = function(J, H) {
                cardsTimerList.push(J);
                var I = { id: u, obj: H };
                cardsTimerList.cardsObjectList.push(I);
                cardsTimerList.cardsPlugIdList.push(u)
            };
            F = function() {
                if (cardsTimerList.cardsPlugIdList.indexOf(u) < 0) {
                    var H = { selector: "#" + u, decorateCss: "img_container_2_black" };
                    if (r.cutover == 2) {
                        H.autoPlay = true;
                        H.autoPlayTime = t.switchTime * 1000;
                        H.autoPlayDelay = v
                    }
                    obj = $("#" + u + "  ul").roundAbout(H);
                    obj.init();
                    i(obj.timer(), obj)
                } else { E() }
            };
            if (!Flyer.hasLoadedJs.cardsRound) {
                G = Flyer.lazyJSPath.cardsRound;
                jQuery.getCacheScript(G, function(H, I) {
                    if (I) {
                        Flyer.hasLoadedJs.cardsRound = true;
                        F()
                    } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                })
            } else { F() }
            if ("ontouchstart" in window) { $("#" + C).bind("touchstart touchmove touchend", function(H) { if (window.parent.pageSwiper.params.direction != "vertical") { H.stopPropagation() } }) } else { $("#" + C).bind("mouseup mousedown", function(H) { if (window.parent.pageSwiper.params.direction != "vertical") { H.stopPropagation() } }) }
        })
    }
})(Flyer);
(function(a) {
    a.effectLayerElement = function(g, c) {
        var h = "",
            e = "";
        var i = c.contentIndex;
        var d = "f_effectLayer_" + i + "_" + c.index;
        h = '<div class="ele f_effectLayer" style=" pointer-events:none; top: ' + c.top + ";width:" + c.width + "px; height:" + c.height + "px; left: " + c.left + ";" + c.isHidden + " z-index: " + c.index + ";-moz-transform:rotate(" + c.rotate + ");-webkit-transform:rotate(" + c.rotate + ');" ><div class="eleChild" uniquename = ' + c.uniqueName + ' ><canvas id="' + d + '" width="' + c.width + '" height="' + c.height + '">sorryä½ çš„æµè§ˆå™¨ä¸æ”¯æŒcanvas</canvas></div></div>';
        var b = [];

        function f(k, m, l) {
            var n;
            setTimeout(function() {
                if (g.module.effectTypeId == 1) {
                    n = effectType.firework(c.width, c.height, $("#" + d + ""));
                    b.push(n)
                } else {
                    if (g.module.effectTypeId == 2) {
                        n = effectType.snowflake(c.width, c.height, $("#" + d + ""), g.bgcolor);
                        b.push(n)
                    } else {
                        if (g.module.effectTypeId == 3) {
                            n = effectType.universe(c.width, c.height, $("#" + d + ""), g.bgcolor);
                            b.push(n)
                        } else {
                            if (g.module.effectTypeId == 4) {
                                n = effectType.flower(c.width, c.height, $("#" + d + ""), g.bgcolor);
                                b.push(n)
                            } else {
                                if (g.module.effectTypeId == 5) {
                                    n = effectType.particle(c.width, c.height, $("#" + d + ""), g.bgcolor);
                                    b.push(n)
                                } else {
                                    if (g.module.effectTypeId == 6) {
                                        n = effectType.bubble(c.width, c.height, $("#" + d + ""), g.bgcolor, g.module.bgColorRandom);
                                        b.push(n)
                                    }
                                }
                            }
                        }
                    }
                }
            }, k * 1000);
            var j = g.delay + g.speed;
            if (g.emphaEffect == true && g.emphaLoop == false) { j += g.emphaCount * (g.emphaDelay + g.emphaSpeed + g.emphaInterval) }
            if (g.emphaLoop == false && g.exitEffect == true) { j += g.exitDelay + g.exitSpeed }
            if (g.emphaLoop == false && g.exitEffect == true) { setTimeout(function() { n() }, j * 1000) }
        }
        Flyer.getSlideNode(i, ".contentEle", c.isLayer).append(h);
        Flyer.getSlideNode(i, "", c.isLayer).bind("slidePageEnd", function() {
            if (!Flyer.hasLoadedJs.effectLayerShow) {
                var j = Flyer.lazyJSPath.effectLayerShow;
                jQuery.getCacheScript(j, function(k, l) {
                    if (l) {
                        Flyer.hasLoadedJs.effectLayerShow = true;
                        f(g.delay, g.speed, g.module.timeLimited)
                    } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                })
            } else { f(g.delay, g.speed, g.module.timeLimited) }
        });
        Flyer.getSlideNode(i, "", c.isLayer).bind("existAtivePage", function() {
            while (b.length > 0) {
                var j = b.pop();
                j()
            }
        })
    }
})(Flyer);
(function(a) {
    a.complaints = (function() {
        var c = {};
        c.open = function() {
            Flyer.logDog(2000048, 0);
            if (Flyer._webDebug) {}
            if (!Flyer.wx_openId) { Flyer.ing("è¯·åœ¨å¾®ä¿¡ä¸‹æ“ä½œï¼", true, 3000, "notice"); return }
            if ($("#mobiPage").hasClass("getComplaining")) { return }
            if (Flyer.hasComplained === undefined || Flyer.hasComplained === null) {
                $("#mobiPage").addClass("getComplaining");
                var g = [];
                g.push("&flyerAid=" + Flyer._aid);
                g.push("&flyerId=" + Flyer._fid);
                g.push("&wx_openId=" + encodeURIComponent(Flyer.wx_openId));
                $.ajax({
                    type: "post",
                    url: "/ajax/flyerComplain.jsp?cmd=checkAndInit",
                    data: g.join(""),
                    error: function() {
                        Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•ã€‚", false, null, "notice");
                        $("#mobiPage").removeClass("getComplaining")
                    },
                    success: function(h) {
                        h = $.parseJSON(h);
                        if (h.success) {
                            Flyer.hasComplained = h.hasComplained;
                            e(h.initList)
                        } else { Flyer.ing(h.msg, true, 3000, "notice") }
                        $("#mobiPage").removeClass("getComplaining")
                    }
                });
                return
            }
            e([])
        };
        var d = function(h) {
            var j = "";
            var k = h;

            function g(o) { var n = ""; for (var m = 0, l = o.length; m < l; m++) { n += '<li class="choose" type="' + o[m].type + '">' + o[m].text + '<div class="checkIcon"></div></li>' } return n }

            function i() {
                $("#complaintsDiv .choose").on("touchend", function(l) {
                    l.stopPropagation();
                    l.preventDefault();
                    $("#complaintsDiv .checked").removeClass("checked");
                    if ($("#complaintsDiv .submit").hasClass("disabled")) { $("#complaintsDiv .submit").removeClass("disabled") }
                    if ($("#complaintsDiv .tips").is(":visible")) { $("#complaintsDiv .tips").hide() }
                    $(this).addClass("checked")
                });
                $("#complaintsDiv .cancel").on("touchend", function(l) {
                    l.stopPropagation();
                    l.preventDefault();
                    $("#complaintsDiv .checked").removeClass("checked");
                    if (!$("#complaintsDiv .submit").hasClass("disabled")) { $("#complaintsDiv .submit").addClass("disabled") }
                    if ($("#complaintsDiv .tips").is(":visible")) { $("#complaintsDiv .tips").hide() }
                    $("#complaintsDiv").hide()
                });
                $("#complaintsDiv .submit").on("touchend", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    var l = $("#complaintsDiv .checked");
                    if (l.length < 1) { $("#complaintsDiv .tips").show() } else {
                        var m = l.attr("type");
                        f(m)
                    }
                })
            }
            j = '<div id="complaintsDiv" class="complaintsDiv"><div class="chooseTips">è¯·é€‰æ‹©æŠ•è¯‰åŽŸå› </div><ul class="main">' + g(k) + '</ul><div class="cancel">å–æ¶ˆ</div><div class="submit disabled">æäº¤</div><div class="tips">è¯·é€‰æ‹©æŠ•è¯‰åŽŸå› </div></div>';
            $("#mobiPage").append(j);
            i()
        };
        var f = function(g) {
            if ($("#complaintsDiv .submit").hasClass("submiting")) { return }
            if (!Flyer.wx_openId) { Flyer.ing("è¯·åœ¨å¾®ä¿¡ä¸‹æäº¤å†…å®¹ï¼", true, 3000, "notice") }
            if (Flyer.hasComplained) { Flyer.ing("æ‚¨å·²ç»æŠ•è¯‰è¿‡äº†ï¼Œè°¢è°¢ï¼", true, 3000, "notice"); return }
            $("#complaintsDiv .submit").addClass("submiting");
            var h = [];
            h.push("&flyerAid=" + Flyer._aid);
            h.push("&flyerId=" + Flyer._fid);
            h.push("&type=" + g);
            h.push("&wx_openId=" + encodeURIComponent(Flyer.wx_openId));
            $.ajax({
                type: "post",
                url: "/ajax/flyerComplain.jsp?cmd=addFlyerComplain",
                data: h.join(""),
                error: function() {
                    Flyer.ing({ str: "æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•ã€‚" });
                    $("#complaintsDiv .submit").removeClass("submiting")
                },
                success: function(i) {
                    i = $.parseJSON(i);
                    if (i.success) {
                        Flyer.hasComplained = true;
                        $("#complaintsDiv").hide();
                        b("æŠ•è¯‰æˆåŠŸ");
                        Flyer.logDog(2000049, g)
                    } else { Flyer.ing(i.msg, false, 3000, "notice") }
                    $("#complaintsDiv .submit").removeClass("submiting")
                }
            })
        };
        var e = function(g) { if (Flyer.hasComplained) { b("æ‚¨å·²ç»æŠ•è¯‰è¿‡äº†ï¼Œè°¢è°¢") } else { if ($("#complaintsDiv").length > 0 && $("#complaintsDiv").css("display") === "none") { $("#complaintsDiv").show() } else { if (g) { d(g) } } } };
        var b = function(i) {
            if ($("#complainFeedback").length > 0 && $("#complainFeedback").css("display") === "none") {
                var g = $("#complainFeedback").attr("str");
                if (g !== i) {
                    $("#complainFeedback").attr("str", i);
                    $("#complainFeedback h3").html(i)
                }
                $("#complainFeedback").show();
                return
            }
            var h = '<div id="complainFeedback" class="complainFeedback" str="' + i + '"><div class="icon"></div><h3 class="text1">' + i + '</h3><p class="text2">æ„Ÿè°¢ä½ çš„å‚ä¸Žï¼Œæˆ‘ä»¬åšå†³åå¯¹è‰²æƒ…ã€æš´åŠ›ã€æ¬ºè¯ˆç­‰è¿è§„ä¿¡æ¯ï¼Œæˆ‘ä»¬ä¼šè®¤çœŸå¤„ç†ä½ çš„æŠ•è¯‰ï¼Œç»´æŠ¤ç»¿è‰²ã€å¥åº·çš„ç½‘ç»œçŽ¯å¢ƒ</p><div class="sureBtn">ç¡®è®¤</div></div>';
            $("#mobiPage").append(h);
            $("#complainFeedback .sureBtn").off("click").on("click", function() { $("#complainFeedback").hide() })
        };
        return c
    })()
})(Flyer);
(function(a) {
    a.weChatNickElement = function(f, d) {
        d.width += 2;
        var g = "";
        var b, e;
        var c = (d.defaultNick);
        if (Flyer.isWeiXin() && d.nicktype == 0) {
            b = Flyer._userInfo_not || [];
            e = Flyer.encodeHtml(b.userName);
            c = (!!e && e != "") ? e : c
        }
        if (d.nicktype == 1) {
            b = Flyer._shareUserInfo || [];
            e = Flyer.encodeHtml(b.shareName);
            c = (!!e && e != "") ? e : c
        }
        g += '<div class="ele f_Text" style="-moz-transform:rotate(' + d.rotate + ")  translateZ(0);-webkit-transform:rotate(" + d.rotate + ") translateZ(0);z-index: " + d.index + ";" + d.isHidden + " font-size:0px; opacity: " + d.opacity + "; top: " + d.top + "; left: " + d.left + '"><div class="eleChild" uniquename = ' + d.uniqueName + "  style=\"font-family: 'microsoft yahei',å¾®è½¯é›…é»‘, å®‹ä½“, æ–°å®‹ä½“,sans-serif;padding:0; color:" + d.fontcolor + ";word-wrap: break-word; font-size: " + d.fontsize + "; line-height: " + d.lineheight + ";letter-spacing: " + f.letterspacing / 100 + "em; border-style:" + d.borderstyle + "; border-color: " + d.bordercolor + "; border-width: " + d.borderwidth + "; background: " + d.bgcolor + ";text-align: " + d.textalign + "; font-weight: " + d.fontbold + "; font-style: " + d.fontitalic + "; text-decoration: " + d.underline + ";box-shadow:" + d.boxshadow + ";border-radius: " + d.borderradius / 100 * d.width + "px;overflow: hidden;" + (f.direction == "vertical" ? "height:" + d.height + "px;" : "width: " + d.width + "px;height:" + d.height + "px;") + "text-orientation:upright;-webkit-text-orientation:upright;writing-mode:" + (f.direction == "vertical" ? "vertical-rl" : "horizontal-tb") + ";-webkit-writing-mode:" + (f.direction == "vertical" ? "vertical-rl" : "horizontal-tb") + '">' + c + "</div></div>";
        var h = d.contentIndex;
        Flyer.getSlideNode(h, ".contentEle", d.isLayer).append(g)
    };
    a.weChatImageElement = function(f, d) {
        var g = "";
        var c = false;
        var b, i;
        var e = d.tmp_pic_path;
        if (Flyer.isWeiXin() && d.hImagetype == 0) {
            b = Flyer._userInfo_not || [];
            i = Flyer.encodeHtml(b.userImage);
            e = (!!i && i != "") ? i : e
        }
        if (d.hImagetype == 1) {
            b = Flyer._shareUserInfo || [];
            i = Flyer.encodeHtml(b.shareImg);
            e = (!!i && i != "") ? i : e
        }
        g += '<div class="ele f_Img" style=" z-index: ' + d.index + ";" + d.isHidden + " top: " + d.top + "; left: " + d.left + "; -moz-transform:rotate(" + d.rotate + ") translateZ(0);-webkit-transform:rotate(" + d.rotate + ") translateZ(0); width: " + d.width + "px; height: " + d.height + 'px"><div class="f_ImgContent maskShape eleChild ' + d.maskShape + " picFilter" + d.picFilter + '" uniquename = ' + d.uniqueName + '  style="overflow:hidden; border-radius: ' + d.borderradius / 100 * d.width + "px;box-shadow:" + d.boxshadow + ';"><img class="imgClass" src="' + e + '" style="position:relative;width: ' + d.picw + "px; height: " + d.pich + "px; top: " + d.pict + "; left: " + d.picl + "; opacity: " + d.opacity + ';"/></div></div>';
        var h = d.contentIndex;
        Flyer.getSlideNode(h, ".contentEle", d.isLayer).append(g)
    }
})(Flyer);
Flyer.bgGravityObj = function(c, a) {
    var b = Flyer.calSize.getPercentBg();

    function d() {
        this.orienter = null;
        this.bgHeight = 0;
        this.bgWidth = 0;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.screenHeight = $(window).height();
        this.screenWidth = $(window).width();
        this.isFirst = true;
        this.firstGamma = 0;
        this.firstBeta = 0;
        this.lastGama = 0;
        this.lastBeta = 0;
        this.targetLeft = 0;
        this.targetTop = 0;
        this.requestAnimation = null;
        this.bg = null
    }
    d.prototype = {
        init: function() {
            var g = this;
            g.targetLeft = g.nowLeft = g.offsetLeft = c.bgleft * b;
            g.targetTop = g.nowTop = g.offsetTop = c.bgtop * b;
            var e = Flyer.getSlideNode(a);
            g.raf = requestAnimationFrame;
            g.orienter = new Orienter();
            g.orienter.init();
            g.bindEvent();
            g.requestAnimationFrame = g.requestAnimationFrame.bind(this);
            g.raf = requestAnimationFrame(g.requestAnimationFrame);
            Flyer.getSlideNode(a).bind("existAtivePage", function() { g.destroy() });
            g.bg = e.find(".contentBg .bgFilter");
            var f = $("<p>").css({ "font-size": "40px", position: "absolute", "z-index": 9999, color: "#fff" });
            g.p = f;
            e.find(".contentEle").append(f)
        },
        bindEvent: function() {
            var e = this;
            e.orienter.orient = function(f) {
                if (e.isFirst) {
                    e.bgHeight = e.bg.height();
                    e.bgWidth = e.bg.width();
                    e.nowGama = e.lastGama = e.firstGamma = f.g;
                    e.nowBeta = e.lastBeta = e.firstBeta = f.b;
                    e.isFirst = false
                }
                if (Math.abs(f.g - e.lastGama) > 3 || Math.abs(f.b - e.lastBeta) > 3) {
                    e.targetLeft = Math.round(e.offsetLeft + ((e.firstGamma - f.g) * e.bgWidth / 180));
                    e.targetTop = Math.round(e.offsetTop + ((f.b - e.firstBeta) * e.bgHeight / 180));
                    e.nowBeta = e.lastBeta = f.b;
                    e.nowGama = e.lastGama = f.g;
                    if (e.targetLeft > 0) { e.targetLeft = 0 } else { if (e.targetLeft < e.screenWidth - e.bgWidth) { e.targetLeft = e.screenWidth - e.bgWidth } }
                    if (e.targetTop > 0) { e.targetTop = 0 } else { if (e.targetTop < e.screenHeight - e.bgHeight) { e.targetTop = e.screenHeight - e.bgHeight } }
                }
            }
        },
        requestAnimationFrame: function() {
            var e = 0;
            var g = 0;
            var f = this;
            if (!f.isFirst) {
                e = (f.targetLeft - f.nowLeft) * 0.1;
                g = (f.targetTop - f.nowTop) * 0.1;
                f.nowLeft += +e.toFixed(5);
                f.nowTop += +g.toFixed(5);
                f.bg.css({ transform: "translate3d(" + f.nowLeft + "px," + f.nowTop + "px,0)", "-ms-transform": "translate3d(" + f.nowLeft + "px," + f.nowTop + "px,0)", "-webkit-transform": "translate3d(" + f.nowLeft + "px," + f.nowTop + "px,0)" })
            }
            f.raf = requestAnimationFrame(f.requestAnimationFrame)
        },
        destroy: function() {
            if (this.orienter) {
                this.orienter.destroy();
                this.orienter = null;
                cancelAnimationFrame(this.raf);
                this.p.remove()
            }
        }
    };
    return new d()
};
(function(a) {
    a.CSS3DCylinder = function(s) {
        var c = {
            init: function(B, G) {
                c.initCylinderBG(B, G);
                var q = B.vrPage;
                c.rotatentry = (q.rotatentry || q.rotatentry === undefined) && Flyer.getQueryString("view") !== "vr";
                requestAnimationFrame(function() {
                    if (c.rotatentry) { c.cylinder3DAnimationIn(d, C, D, c.cylinderInertieAnimation) } else {
                        d.position(0, 0, -350).update();
                        c.cylinder3DNotAnimationIn(d, C, D, c.cylinderInertieAnimation)
                    }
                    var H = new Orienter();
                    H.orient = function(J) {
                        y.lon = -J.lon, y.lat = J.lat;
                        if (!u) {
                            setTimeout(function() { u = true }, 1000);
                            L.lat = -y.lat;
                            L.lon = -y.lon
                        }
                    };
                    H.init()
                })
            },
            initCylinderBG: function(H, K) {
                var B = H.vrPage;
                if (B.outsideBgType !== 1 && B.tmpOutsideBgList && B.tmpOutsideBgList.length === 20) {
                    C = new C3D.Sprite;
                    if (Flyer.getQueryString("view") == "vr") {
                        B.tmpOutsideBgList = [];
                        if (B.outsideBgType === 0 && B.sysTmpOutsideBg) {
                            for (var J = 0; J < 20; J++) {
                                var X = B.sysTmpOutsideBg + "?_tm=2&wxh=2580x1306&count=20&index=" + J;
                                B.tmpOutsideBgList.push(X)
                            }
                        } else {
                            if (B.outsideBgType === 2 && B.tmpOutsideBg) {
                                for (var J = 0; J < 20; J++) {
                                    var X = B.tmpOutsideBg + "?_tm=2&wxh=2580x1306&count=20&index=" + J;
                                    B.tmpOutsideBgList.push(X)
                                }
                            }
                        }
                    }
                    C.name("panoOutSideBg").position(0, 0, 0).update(), d.addChild(C);
                    for (var Q = 0; Q < E; Q++) {
                        var V = new C3D.Plane,
                            W = -360 / E * Q,
                            G = W / 180 * Math.PI,
                            q = v - 3;
                        var U = B.tmpOutsideBgList[Q] || "";
                        V.size(A, r.h).position(Math.sin(G) * q, 0, Math.cos(G) * q).rotation(0, W + 180, 0).visibility({ alpha: 1 }).material({ image: U, repeat: "no-repeat", bothsides: false }).update();
                        C.addChild(V)
                    }
                }
                if (B.insideBgType !== 1) {
                    if (B.tmpInsideBgList && B.tmpInsideBgList.length === 20) {
                        D = new C3D.Sprite;
                        if (Flyer.getQueryString("view") == "vr") {
                            B.tmpInsideBgList = [];
                            if (B.insideBgType === 0 && B.sysTmpInsideBg) {
                                for (var J = 0; J < 20; J++) {
                                    var X = B.sysTmpInsideBg + "?_tm=2&wxh=2360x1206&count=20&index=" + J;
                                    B.tmpInsideBgList.push(X)
                                }
                            } else {
                                if (B.insideBgType === 2 && B.tmpInsideBg) {
                                    for (var J = 0; J < 20; J++) {
                                        var X = B.tmpInsideBg + "?_tm=2&wxh=2360x1206&count=20&index=" + J;
                                        B.tmpInsideBgList.push(X)
                                    }
                                }
                            }
                        }
                        D.name("panoInSideBg").position(0, 0, 0).update();
                        d.addChild(D);
                        for (var Q = 0; Q < E; Q++) {
                            var V = new C3D.Plane,
                                W = -360 / E * Q,
                                G = W / 180 * Math.PI,
                                q = n.w / (2 * Math.PI) - 5;
                            var U = B.tmpInsideBgList[Q] || "";
                            V.size(n.w / E, n.h).position(Math.sin(G) * q, 0, Math.cos(G) * q).rotation(0, W + 180, 0).visibility({ alpha: 1 }).material({ image: U, repeat: "no-repeat", bothsides: false }).update();
                            D.addChild(V)
                        }
                    }
                }
                c.initElement(H, K);
                c.initTopBottomBg(B)
            },
            updateCylinderPosition: function() {
                f = this.parseToFloat(i.x - l.x);
                S = this.parseToFloat(i.y - l.y);
                M = this.parseToFloat(i.x - e.x);
                w = this.parseToFloat(i.y - e.y);
                P = (j - h) / 1000;
                if ("" == g) { if (Math.abs(M) > Math.abs(w)) { g = "x" } else { if (Math.abs(M) < Math.abs(w)) { g = "y" } } }
                b.lon = (b.lon - 0.2 * M) % 360;
                b.lat = Math.max(-90, Math.min(90, b.lat + 0.2 * w))
            },
            parseToFloat: function(q) { return Math.floor(100 * q) / 100 },
            cylinderInertieAnimation: function() {
                var G = (y.lon + L.lon + b.lon) % 360,
                    H = 0.35 * (y.lat + L.lat + b.lat);
                var B = 0;
                if (T) { B = c.updateSpritePosition(d, G, H) } else { if (C) { B = c.updateSpritePosition(C, G, H, 0.35, true) } if (D) { c.updateSpritePosition(D, G, H, 0.16, true) } if (z) { c.updateSpritePosition(z, G, H, 0.05) } if (N) { c.updateSpritePosition(N, G, H, 0.16) } }
                var q = -350 - E * Math.abs(B);
                if (q < -500) { q = -500 }
                d.z += 0.1 * (q - d.z);
                d.updateT();
                F = requestAnimationFrame(c.cylinderInertieAnimation)
            },
            updateSpritePosition: function(H, K, Q, J, q) {
                if (q) { K -= 10 }
                J = J || 0.35;
                if (K - H.rotationY > 180) { H.rotationY += 360 }
                if (K - H.rotationY < -180) { H.rotationY -= 360 }
                var B = K - H.rotationY,
                    G = Q - H.rotationX;
                if (Math.abs(B) < 0.1) { H.rotationY = K } else { H.rotationY += J * B }
                if (Math.abs(G) < 0.1) { H.rotationX = Q } else { H.rotationX += 0.15 * G }
                H.updateT();
                return B
            },
            intiAppearance: function(B, q) {
                if (c.rotatentry) { d.visibility({ alpha: 1 }).updateV() } else {
                    d.visibility({ visible: false }).updateV();
                    setTimeout(function() { d.visibility({ alpha: 1, visible: true }).updateV() }, 500)
                }
                z && z.visibility({ visible: true }).position(0, 0, 0).update();
                if (q) { setTimeout(function() { N && N.visibility({ visible: true }).position(0, 0, 0).update() }, 1000) } else { N && N.visibility({ visible: true }).position(0, 0, 0).update() }
                B()
            },
            cylinder3DNotAnimationIn: function(q, H, B, G) {
                c.intiAppearance(G, true);
                H && H.visibility({ visible: true });
                B && B.visibility({ visible: true })
            },
            cylinder3DAnimationIn: function(q, K, B, G) {
                if (!B && !K) { c.intiAppearance(G, true) } else { JT.fromTo(q, 4, { z: -2200 }, { z: -300, ease: JT.Quad.Out, onUpdate: function() { this.target.updateT() }, onStart: function() { this.target.visibility({ alpha: 1 }).updateV() }, onEnd: function() { c.intiAppearance(G) } }) }
                K && JT.fromTo(K, 4, { rotationY: -720 }, { rotationY: -10, ease: JT.Quad.Out, onUpdate: function() { this.target.updateT() }, onEnd: function() {} });
                B && JT.fromTo(B, 4, { rotationY: -720 }, { rotationY: -10, ease: JT.Quad.Out, onUpdate: function() { this.target.updateT() }, onEnd: function() {} });
                if (K) { for (var H = 0, J = K.children.length; J > H; H++) { JT.from(K.children[H], 0.5, { x: 0, z: 0, scaleX: 0, scaleY: 0, delay: 0.05 * H, ease: JT.Quad.Out, onUpdate: function() { this.target.updateT() }, onStart: function() { this.target.visibility({ alpha: 1 }).updateV() } }) } }
                if (B) { for (var H = 0, J = B.children.length; J > H; H++) { JT.from(B.children[H], 0.5, { x: 0, z: 0, scaleX: 0, scaleY: 0, delay: 0.05 * H, ease: JT.Quad.Out, onUpdate: function() { this.target.updateT() }, onStart: function() { this.target.visibility({ alpha: 1 }).updateV() } }) } }
            },
            initTopBottomBg: function(q) {
                if (!q) { q = { brandGG: { type: 0 } } }
                if (!Flyer._openCommercial || Flyer.top._isOem) { return }
                N = new C3D.Sprite;
                N.visibility({ visible: false }).name("topBottomBg").position(0, 0, 0).update();
                d.addChild(N);
                var H = new C3D.Plane,
                    G = r.w / (2 * Math.PI);
                var B = Flyer._resRoot + "/image/vr/logo.png";
                if (Flyer.top._isOem) { B = Flyer._resRoot + "/image/vr/oem_logo.png" }
                H.size(G * 2, G * 2).position(0, -r.h / 2, 0).rotation(-90, 0, 0).material({ image: B, repeat: "no-repeat", size: "cover", bothsides: false }).update();
                N.addChild(H);
                H.on("click", function() {
                    Flyer.showWXQRcode();
                    Flyer.logDog(2000121, 0)
                });
                var J = new C3D.Plane;
                J.size(G * 2, G * 2).position(0, r.h / 2, 0).rotation(90, 0, 0).material({ image: B, repeat: "no-repeat", size: "cover", borderRadius: "100%", bothsides: false }).update();
                J.on("click", function() {
                    Flyer.showWXQRcode();
                    Flyer.logDog(2000121, 0)
                });
                N.addChild(J);
                Flyer.logDog(2000120, 0)
            },
            initElement: function(ah, K) {
                var U = ah.content,
                    q = [];
                var V = 0;
                for (var ab = 0; ab < U.length; ab++) {
                    var H = U[ab].type;
                    if (Flyer[H + "Element"]) {
                        if (!U[ab].moduleStyle || (!!U[ab].moduleStyle && !!U[ab].module)) {
                            var ah = U[ab];
                            var B = $(".swiper-slide-" + K + " .contentEle .ele")[V];
                            V++;
                            ah.vrelementlevel = ah.vrelementlevel ? ah.vrelementlevel : 1;
                            var X = { data: ah, eleDom: B };
                            O[ah.vrelementlevel - 1].push(X);
                            q.push(U[ab])
                        } else {}
                    } else {}
                }
                var Y = [];
                for (var Q = 0; Q < q.length; Q++) {
                    var ah = q[Q];
                    var W = 1,
                        aa = Math.floor((ah.left + ah.w / 2) / W);
                    ah.vrelementlevel = ah.vrelementlevel ? ah.vrelementlevel : 1;
                    var ac = -360 / r.w * aa,
                        ad = ac / 180 * Math.PI,
                        Z = I[ah.vrelementlevel - 1],
                        ae = (Math.cos(ad) * Z).toFixed(5) - 0,
                        J = ac + 180,
                        ag = (Math.sin(ad) * Z).toFixed(5) - 0,
                        af = ah.top + ah.h / 2 - r.h / 2,
                        G = 1;
                    var B = $(".swiper-slide-" + K + " .contentEle .ele")[Q];
                    B.style.top = "";
                    B.style.left = "";
                    Y.push({ scale: [G], type: "plane", name: "p" + Q, el: B, size: [ah.w, ah.h], position: [ag, af, ae], rotation: [0, J, ah.rotate], material: [{ bothsides: false }] })
                }
                z = C3D.create({ type: "sprite", position: [0, 0, 0], children: Y });
                z.visibility({ visible: false }).updateV();
                d.addChild(z)
            }
        };
        var I = [336, 320, 304, 288, 272, 256, 240, 224, 208, 192],
            O = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ];
        var u = false;
        var m = new C3D.Stage({ el: s });
        m.size(window.innerWidth, window.innerHeight).update();
        var d = new C3D.Sprite;
        d.position(0, 0, -1800).visibility({ alpha: 0 }).update();
        m.addChild(d);
        var t = new Hammer.Manager(s);
        t.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        var C, D, N, z, T = Flyer.isAndroid(),
            y = { lat: 0, lon: 0 },
            L = { lon: 0, lat: 0 },
            b = { lon: 0, lat: 0 },
            E = 20,
            r = { w: 2580, h: 1306 },
            n = { w: 2360, h: 1206 },
            A = r.w / E,
            v = 405;
        var l = { x: 0, y: 0 },
            e = { x: 0, y: 0 },
            i = { x: 0, y: 0 },
            g = "",
            h = 0,
            j = 0,
            f = 0,
            S = 0,
            M = 0,
            w = 0,
            P = 0,
            o = function(q) {
                g = "";
                if ("ontouchstart" in window) {
                    q = q.changedTouches[0];
                    l.x = e.x = i.x = q.clientX;
                    l.y = e.y = i.y = q.clientY
                } else {
                    l.x = e.x = i.x = q.deltaX;
                    l.y = e.y = i.y = q.deltaY
                }
                h = j = Date.now();
                f = S = M = w = 0;
                if ("ontouchstart" in window) {
                    m.on("touchmove", k);
                    m.on("touchend", x)
                } else {
                    t.on("panmove", k);
                    t.on("panend", x)
                }
            };
        if ("ontouchstart" in window) { m.on("touchstart", o) } else { t.on("panstart", o) }
        var F, k = function(q) {
                if ("ontouchstart" in window) {
                    q = q.changedTouches[0];
                    i.x = q.clientX;
                    i.y = q.clientY
                } else {
                    i.x = q.deltaX;
                    i.y = q.deltaY
                }
                j = Date.now();
                c.updateCylinderPosition();
                e.x = i.x;
                e.y = i.y;
                h = j;
                return false
            },
            x = function R() {
                j = Date.now();
                if ("ontouchstart" in window) {
                    m.off("touchmove", k);
                    m.off("touchend", R)
                } else {
                    t.off("panmove", k);
                    t.off("panend", R)
                }
            };
        return {
            init: function(q, B) { c.init(q, B) },
            update: function() {
                c.cylinderInertieAnimation();
                Flyer.logDog(2000120, 0)
            },
            destory: function() { window.cancelAnimationFrame(this.animationFrame()) },
            animationFrame: function() { var q = F; return (function() { return q })() }
        }
    };
    a.initCSS3DCylinder = function(b) {
        $.getCacheScript(Flyer.lazyJSPath.VRcss3d, function() {
            if (!a.__CSS3DCylinderObject) { a.__CSS3DCylinderObject = {} }
            if (a.__CSS3DCylinderObject[b]) { a.__CSS3DCylinderObject[b].destory() }
            if ($("#stageDom" + b).length === 0) {
                var e = Flyer._templateData[b];
                var d = $("<div style='top:0px;z-index:9;background-color:" + e.bgcolor + "' class='stageDom f_DNSTraffic' id='stageDom" + b + "'></div>");
                $("body").append(d);
                var c = Flyer.CSS3DCylinder($("#stageDom" + b)[0]);
                a.__CSS3DCylinderObject[b] = c;
                c.init(e, b);
                $("#stageDom" + b).on("touchmove mousemove", function(f) { f.preventDefault() })
            } else { a.__CSS3DCylinderObject[b].update() }
        })
    };
    a.currentPageOfVR = function(b) {
        var c = Flyer._templateData[b];
        if (c.templatetype === 3) {
            $(".stageDom").hide();
            $("#stageDom" + b).show();
            Flyer.executEleAnimate($("#stageDom" + b + " .eleChild"))
        } else { $(".stageDom").hide() }
    };
    a.preloadVRImage = function() {
        if (!Flyer._templateData) { return }
        var c = Flyer._templateData[0];
        if (c && c.templatetype === 3) {
            var b = Flyer._tmpContentImageList[0];
            for (var e in b) {
                var d = new Image();
                d.src = b[e]
            }
        }
        c = Flyer._templateData[1];
        if (c && c.templatetype === 3) {
            var b = Flyer._tmpContentImageList[1];
            for (var e in b) {
                var d = new Image();
                d.src = b[e]
            }
        }
    }
})(Flyer);
(function(a) {
    a.msgBoardElement = function(l, e) {
        var s = l.module,
            m = l.moduleId || 0,
            i = e.contentIndex,
            t, g = [],
            n = 5,
            d = 0,
            c = 500,
            r, o;
        var h = (function() {
            var v = {};
            var y = { type: 0, content: "æš‚æ— ç•™è¨€", nickname: "æ˜µç§°", headerImg: Flyer._resRoot + "/image/msgBoard/defaultHeaderImg.jpg" };
            var x = ["#47eafe,#3977f6", "#4ab3fd,#2c42bb", "#7d5afd,#9c27b0", "#f848e1,#e91e63", "#feac5d,#f44336"];
            var w = ["#5589f6", "#3f51b5", "#9c28b1", "#ea1e63", "#f54337", "#5589f6"];
            var u = w[Math.floor(Math.random() * w.length)];
            v.getLikeBefore = function(z) { z = z || "#999"; return '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="å›¾å±‚_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 25.3 27.7" height="100%" width="100%" style="enable-background:new 0 0 25.3 27.7;" xml:space="preserve"><path id="XMLID_76_" style="fill:' + z + ';" class="msgBoardLikeBeforeSvg" d="M25.3,17.3c0-3.7-3-6.7-6.8-6.7h-1.7c0.7-1.6,1-3.8,0.7-6.2c-0.4-2.8-2.8-4.6-4.8-4.4c-1.6,0.2-3.1,1.6-2.8,5c0.1,1.4-0.2,2.6-1,3.5c-1.6,1.8-4.5,2.1-4.8,2.1H1c-0.5,0-1,0.4-1,1v15.2c0,0.5,0.4,1,1,1h16.6c2.2,0,4-0.7,5.3-2.2C25.6,22.7,25.3,17.9,25.3,17.3z M1.9,12.5h2v13.3h-2V12.5z M21.4,24.3c-1,1-2.2,1.5-3.9,1.5H5.8V12.3c1.3-0.3,3.2-1,4.5-2.5c1.1-1.3,1.6-3,1.4-4.9c-0.1-0.6-0.2-2.7,1.1-2.9c1.1-0.1,2.5,1.1,2.7,2.7c0.4,3.3-0.4,5.5-1.2,6.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0,0,0,0,0c0,0.5,0.4,1,1,1h3.5c2.7,0,4.8,2.2,4.8,4.8c0,0,0,0,0,0.1C23.4,17.5,23.7,21.9,21.4,24.3z"/></svg>' };
            v.getLikeAfter = function(z) { return '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="å›¾å±‚_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 25.3 27.7" height="100%" width="100%" style="enable-background:new 0 0 25.3 27.7;" xml:space="preserve"><g id="XMLID_48_"><g id="XMLID_55_"><path id="XMLID_75_" style="fill:' + z + '" class="st0" d="M3.9,10.6H1c-0.5,0-1,0.4-1,1v15.2c0,0.5,0.4,1,1,1h2.9V10.6z"/></g><g id="XMLID_50_"><path id="XMLID_53_" style="fill:' + z + '" d="M25.3,17.3c0-3.7-3-6.7-6.8-6.7h-1.7c0.7-1.6,1-3.8,0.7-6.2c-0.4-2.8-2.8-4.6-4.8-4.4c-1.6,0.2-3.1,1.6-2.8,5c0.1,1.4-0.2,2.6-1,3.5c-0.8,1-2,1.5-3,1.8v17.5h11.7c2.2,0,4-0.7,5.3-2.2C25.6,22.7,25.3,17.9,25.3,17.3z"/></g></g></svg>' };
            v.getEntireMsgList = function(z) { if (z.length < 5) { for (var A = 5 - z.length; A > 0; A--) { z.push(y) } } return z };
            v.getThemeColor = function(z, A) { if (s.msgTheme == 1) { if (z == undefined) { if (A) { return x[Math.floor(Math.random() * x.length)] } else { return u } } else { if (A) { return x[z] } else { return w[z] } } } else { if (A) { return s.msgColor + "," + s.msgColor } else { return s.msgColor } } };
            v.msgTimeFmt = function(F) { if (F) { var z = parseInt(F); var C = new Date().getTime(); var B = Math.floor((C - z) / (24 * 60 * 60 * 1000)); if (B <= 0) { var A = Math.floor((C - z) % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)); if (A > 0) { return A + "å°æ—¶å‰" } else { var E = Math.floor((C - z) % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000)); if (E > 0) { return E + "åˆ†é’Ÿå‰" } else { var D = Math.floor((C - z) % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) % (60 * 1000) / 1000); if (D > 0) { return D + "ç§’å‰" } else { return "1ç§’å‰" } } } } else { return B + "å¤©å‰" } } else { return "" } };
            v.removeHTMLTag = function(z) {
                if (typeof z == "string") {
                    z = z.replace(/<\/?[^>]*>/g, "");
                    z = z.replace(/[ | ]*\n/g, "");
                    z = z.replace(/&nbsp;\n/ig, "")
                }
                return z
            };
            v.getLoadingHtml = function(A) { var z = ['<div class="msg-ball-grid-pulse"><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div></div>', '<div class="msg-ball-spin-fade-loader"><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div></div>', '<div class="msg-ball-scale-multiple"><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div></div>', '<div class="msg-pacman"><div style="border: 25px solid ' + A + ';border-right: 25px solid transparent;"></div><div style="border: 25px solid ' + A + ';border-right: 25px solid transparent;"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div></div>', '<div class="msg-line-scale-pulse-out"><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div><div style="background-color: ' + A + '"></div></div>']; return z[Math.floor(Math.random() * z.length)] };
            return v
        })();
        var b = (function() {
            var u = {};
            var v = false;
            u.addLikeCount = function(z, y) {
                if (!Flyer.wx_openId) { Flyer.ing("è¯·åœ¨å¾®ä¿¡ä¸‹ä¸ºç•™è¨€ç‚¹èµžï¼", true, 3000, "notice"); return }
                if ($(y).hasClass("msg_submit_disable")) { return }
                $(y).addClass("msg_submit_disable");
                var w = z.msgBoardId,
                    x = z.msgInfoId;
                if (z.options && z.options.needValidateCode) {
                    var z = jQuery.extend({}, z.options);
                    w = z.msgBoardId;
                    x = z.msgInfoId
                }
                var A = [];
                A.push("&flyerAid=" + Flyer._aid);
                A.push("&flyerId=" + Flyer._fid);
                A.push("&likeId=" + w);
                A.push("&msgInfoId=" + x);
                A.push("&style=1");
                A.push("&wx_openId=" + Flyer.wx_openId);
                A.push("&validateCode=" + z.validateCode);
                $.ajax({
                    type: "post",
                    url: "/ajax/flyerLike.jsp?cmd=addFlyerLike",
                    data: A.join(""),
                    error: function() {
                        Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•ã€‚", true, 3000, "notice");
                        $(y).removeClass("msg_submit_disable")
                    },
                    success: function(D) {
                        D = $.parseJSON(D);
                        if (D.success) {
                            if (D.needValidateCodeRef) { Flyer.validateCode.hide() }
                            q.changeMsgLikeNumber(z, D.data.clickLike);
                            for (var C in g) {
                                if (g[C].id === x) {
                                    if (D.data.clickLike) { g[C].likeCount++ } else { g[C].likeCount-- }
                                    g[C].clickTrue = D.data.clickLike;
                                    break
                                }
                            }
                        } else {
                            if (D.needValidateCodeRef) {
                                var B = {};
                                z.validateId = "" + a._aid + a._fid + w;
                                z.needValidateCode = true;
                                B.options = z;
                                B.callback = b.addLikeCount;
                                Flyer.validateCode.show(B)
                            }
                            Flyer.ing(D.msg, true, 3000, "notice")
                        }
                        $(y).removeClass("msg_submit_disable")
                    }
                })
            };
            u.getMsgList = function() {
                var w = [];
                w.push("&flyerAid=" + Flyer._aid);
                w.push("&flyerId=" + Flyer._fid);
                w.push("&msgBoardId=" + m);
                w.push("&wx_openId=" + Flyer.wx_openId);
                w.push("&checkStatus=" + s.checkStatus);
                $.ajax({
                    type: "post",
                    url: "/ajax/flyerMsgBoard.jsp?cmd=getFlyerMsgBoardList",
                    data: w.join(""),
                    async: false,
                    error: function() { Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•ã€‚", true, 3000, "notice") },
                    success: function(x) {
                        x = $.parseJSON(x);
                        if (x.success) {
                            g = x.msgList;
                            q.initMsgBoard()
                        }
                    }
                })
            };
            u.sendMsg = function(B) {
                if (v) { return }
                v = true;
                var A = "";
                var z = B.content,
                    w = B.msgBoardId,
                    x = B.msgType;
                if (B.moduleId) {
                    A = B.validateCode;
                    w = B.moduleId;
                    B = B.options;
                    z = B.content;
                    x = B.msgType
                }
                var y = [];
                y.push("&content=" + z);
                y.push("&msgType=" + x);
                y.push("&flyerAid=" + Flyer._aid);
                y.push("&flyerId=" + Flyer._fid);
                y.push("&msgBoardId=" + w);
                y.push("&wx_openId=" + Flyer.wx_openId);
                y.push("&validateCode=" + A);
                $.ajax({
                    type: "post",
                    url: "/ajax/flyerMsgBoard.jsp?cmd=addFlyerMsgBoard",
                    data: y.join(""),
                    error: function() {
                        Flyer.ing("æœåŠ¡ç¹å¿™ï¼Œè¯·ç¨åŽå†è¯•ã€‚", true, 3000, "notice");
                        v = false
                    },
                    success: function(D) {
                        D = $.parseJSON(D);
                        if (D.success) {
                            if (D.needValidateCodeRef) { Flyer.validateCode.hide() }
                            g.unshift(D.newInfo);
                            k.renderMsg(D.newInfo);
                            setTimeout(function() {
                                f.myScroll.refresh();
                                f.myScroll.scrollTo(0, 0)
                            }, c + 1);
                            r.find(".msgBoard_textArea").text("").addClass("msgBoard_noInput");
                            r.find(".msgBoard_radio").removeClass("anonymous_checked").css("background-color", "transparent");
                            r.find(".msgBoard_wordsNum").text("0");
                            Flyer.ing(D.msg, true, 3000)
                        } else {
                            if (D.needValidateCodeRef) {
                                var C = {};
                                C.moduleId = w;
                                C.options = B;
                                C.validateId = "" + a._aid + a._fid + w;
                                C.callback = b.sendMsg;
                                Flyer.validateCode.show(C)
                            }
                            Flyer.ing(D.msg, true, 3000, "notice")
                        }
                        v = false
                    }
                })
            };
            return u
        })();
        var k = (function() {
            var u = {};
            u.getMsgBoardHtml = function() {
                var v = "";
                if (s.msgStyle == 1) {
                    v += '<div class="msg_universal" style="background-color:rgba(255,255,255,' + e.opacity + ");border-radius: " + e.borderradius * e.width / 664 + 'px;"><div class="msg_flex">';
                    $.each(h.getEntireMsgList(g.slice(0, 5)), function(w) { v += '<div class="msg" style="border-radius: ' + e.borderradius * e.width / 664 / 1.3 + 'px;"><div class="msg_bg" style="background: -webkit-linear-gradient(0deg, ' + h.getThemeColor(w, true) + ');"><div class="msg_img"' + (this.type ? "" : (' style="background-image: url(' + this.headerImg + ')"')) + '></div><div class="msg_word"><div class="msg_name">' + (this.type ? "åŒ¿å" : Flyer.encodeHtml(this.nickname)) + '</div><div class="msg_content"><span>' + Flyer.encodeHtml(this.content) + '</span></div></div><div class="msg_wave"></div></div><div class="msg_time">' + h.msgTimeFmt(this.createTime) + '<div class="msg_like_count msg_like_count' + this.id + '" mid="' + this.id + '"><div class="msg_like_count_button">' + (this.clickTrue ? h.getLikeAfter(h.getThemeColor(0)) : h.getLikeBefore()) + '</div><div class="msg_like_count_num" ' + (this.likeCount ? 'style="display:block;"' : "") + ">" + (this.likeCount ? this.likeCount : "") + "</div></div></div></div>" });
                    v += '</div><div class="msg_footer" style="color: ' + h.getThemeColor(0) + ';"><div class="msg_btn">' + (s.btnTips) + "</div></div></div>"
                } else {
                    v += '<div class="msg_simulation">';
                    $.each(h.getEntireMsgList(g.slice(0, 5)), function(w) {
                        if (w >= s.msgNum) { return }
                        v += '<div class="msg"  style="color: ' + h.getThemeColor(w) + '"><div class="msg_bg" style="opacity: ' + e.opacity + '"></div><div class="msg_container"><div class="msg_img_name"><div class="msg_img"' + (this.type ? "" : (' style="background-image: url(' + this.headerImg + ')"')) + '></div><div class="msg_name">' + (this.type ? "åŒ¿å" : Flyer.encodeHtml(this.nickname)) + '</div></div><div class="msg_content">' + Flyer.encodeHtml(this.content) + '</div><div class="msg_time">' + h.msgTimeFmt(this.createTime) + '<div class="msg_like_count msg_like_count' + this.id + '" mid="' + this.id + '"><div class="msg_like_count_button">' + (this.clickTrue ? h.getLikeAfter(h.getThemeColor(0)) : h.getLikeBefore()) + '</div><div class="msg_like_count_num" ' + (this.likeCount ? 'style="display:block;"' : "") + ">" + (this.likeCount ? this.likeCount : "") + "</div></div></div></div></div>"
                    });
                    v += '<div class="msg msg_btn" style="color: ' + h.getThemeColor(0) + '"><div class="msg_bg" style="opacity: ' + e.opacity + '"></div><div class="msg_container"><div class="msg_btn_icon"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" style="fill: ' + h.getThemeColor(0) + '"><path style= "fill-rule:evenodd;" d="M35,0A35,35,0,1,1,0,35,35,35,0,0,1,35,0Zm0,2A33,33,0,1,1,2,35,33,33,0,0,1,35,2Z"/><rect x="24" y="34" width="24" height="2"/><rect x="35" y="23" width="2" height="24"/></svg></div><div class="msg_btn_tips">' + (s.btnTips) + "</div></div></div></div>"
                }
                return v
            };
            u.renderPopup = function() {
                var v = '<div class="msgBoard_popup" id="msgBoard_popup' + m + '"><div class="msgBoard_mid"><div class="msgBoard_panel"><div class="msgBoard_input"><div class="msgBoard_inputCon"><div class="msgBoard_textArea msgBoard_noInput" contenteditable="true"></div></div><div class="msgBoard_words"><span class="msgBoard_wordsNum">0</span>/100</div></div><div class="msgBoard_opr"><div class="msgBoard_radioArea"><div class="msgBoard_radio"></div> åŒ¿åç•™è¨€</div><div class="msgBoard_sendMsg">å‘é€ç•™è¨€</div></div><div class="msgBoard_msgCon"><div class="msgBoard_msgSlide"></div></div></div><div class="msgBoard_close"></div></div></div>';
                $("#mobiPage").append(v);
                r = $("#msgBoard_popup" + m);
                o = r.find(".msgBoard_msgSlide")
            };
            u.renderMsg = function(x) {
                var w = false;
                if (!(x instanceof Array)) {
                    x = [x];
                    w = true
                }
                if (!this.isLoadingMsg || w) {
                    this.isLoadingMsg = true;
                    !w && o.find(".msg_loading").append(h.getLoadingHtml(h.getThemeColor()));
                    var v = "";
                    $.each(x, function() { v += '<div class="m_msg"><div class="m_msg_img"' + (this.type ? "" : (' style="background-image: url(' + this.headerImg + ')"')) + '></div><div class="m_msg_word"><div class="m_msg_line"><div class="m_msg_name">' + (this.type ? "åŒ¿å" : Flyer.encodeHtml(this.nickname)) + '</div><div class="m_msg_time">' + h.msgTimeFmt(this.createTime) + '<div class="msg_like_count msg_like_count' + this.id + '" mid="' + this.id + '"><div class="msg_like_count_button">' + (this.clickTrue ? h.getLikeAfter(h.getThemeColor(0)) : h.getLikeBefore()) + '</div><div class="msg_like_count_num" ' + (this.likeCount ? 'style="display:block;"' : "") + ">" + (this.likeCount ? this.likeCount : "") + '</div></div></div></div><div class="m_msg_content"><span>' + Flyer.encodeHtml(this.content) + "</span></div></div></div>" });
                    v = v;
                    setTimeout(function() {
                        if (!w) {
                            o.find(".msg_loading").remove();
                            o.append(v);
                            d += x.length;
                            d == g.length ? o.append('<div class="msgBoard_bottomTips">å·²ç»åˆ°åº•äº†ï¼Œåˆ«æ‰¯äº†</div>') : o.append('<div class="msg_loading"></div>')
                        } else {
                            o.prepend(v);
                            d += 1
                        }
                        $("#msgBoard_popup" + m + " .msg_like_count").unbind("click").bind("click", function() {
                            var y = {};
                            y.msgInfoId = parseInt($(this).attr("mid"));
                            if (y.msgInfoId !== y.msgInfoId) { Flyer.ing("è¯¥ç•™è¨€æ˜¯æ ·æ¿ç•™è¨€ï¼Œè¯·å‘è¡¨ç•™è¨€å†ç‚¹èµžï¼", true, 3000, "notice"); return }
                            y.msgBoardId = m;
                            y.validateCode = "";
                            b.addLikeCount(y, this)
                        });
                        k.isLoadingMsg = false
                    }, c)
                }
            };
            return u
        })();
        var f = (function() {
            var u = {};
            u.bindIScroll = function() {
                this.myScroll = new IScroll(r.find(".msgBoard_msgCon")[0], { bindToWrapper: true, deceleration: 0.0008, useTransform: false, scrollbars: "custom", fadeScrollbars: true, click: true, mouseWheel: Flyer.top._isFromPC });
                this.bindScrollEvent()
            };
            u.bindScrollEvent = function() {
                this.myScroll.on("scrollEnd", function() {
                    if (-this.y + this.wrapperHeight >= this.scrollerHeight && d != g.length) {
                        var v = g.slice(d, d + n);
                        k.renderMsg(v);
                        setTimeout(function() { f.myScroll.refresh() }, c + 1)
                    }
                })
            };
            return u
        })();
        var j = (function() {
            var u = {};
            u.initHtml = function() { k.renderPopup() };
            u.initMsg = function() {
                o.append('<div class="msg_loading"></div>');
                var v = g.slice(0, n);
                k.renderMsg(v);
                setTimeout(function() { f.bindIScroll() }, c + 1)
            };
            u.initEvent = function() {
                var v = Flyer.isAndroid();
                r.find(".msgBoard_input").tap(function() { $(this).find(".msgBoard_textArea").focus() });
                r.find(".msgBoard_textArea").on("keypress keydown keyup", function() {
                    setTimeout(function() {
                        var w = r.find(".msgBoard_textArea");
                        w.text().length > 100 && w.text(w.text().slice(0, 100));
                        r.find(".msgBoard_wordsNum").text(w.text().length)
                    })
                }).on("focus", function() {
                    if (v) { r.height(r[0].clientHeight) }
                    $(this).removeClass("msgBoard_noInput")
                }).on("blur", function() {
                    var w = $(this).text();
                    w == "" ? $(this).addClass("msgBoard_noInput") : $(this).removeClass("msgBoard_noInput");
                    if (w.length >= 100) {
                        $(this).text(w.slice(0, 100));
                        r.find(".msgBoard_wordsNum").text("100")
                    }
                }).on("touchmove", function(w) { w.stopPropagation() });
                r.find(".msgBoard_radioArea").tap(function() { var w = $(this).find(".msgBoard_radio");!w.hasClass("anonymous_checked") ? w.css("background-color", "#333").addClass("anonymous_checked") : w.css("background-color", "transparent").removeClass("anonymous_checked") });
                r.find(".msgBoard_sendMsg").on("click", function() {
                    var z = r.find(".msgBoard_textArea");
                    if (z.text().length == 0 || z.text().length > 100) { Flyer.ing("è¯·è¾“å…¥100å­—ä»¥å†…çš„ç•™è¨€ï¼", true, 3000, "notice"); return }
                    var y = h.removeHTMLTag(Flyer.filterTextHtml(z.html()));
                    var w = r.find(".msgBoard_radio").hasClass("anonymous_checked") ? 1 : 0;
                    if (!Flyer._userInfo_not.userName) {
                        if (Flyer.isWeiXin()) {
                            var x = {};
                            x.content = y;
                            x.msgType = w;
                            localStorage.setItem("msgInfo", JSON.stringify(x));
                            location.href = "/load.jsp?flyerAid=" + Flyer._aid + "&flyerId=" + Flyer._fid + "&slv=" + Flyer._shareLevel + "&jumpType=" + m + "&jump=" + window.parent.pageSwiper.activeIndex + "_msg";
                            return
                        }
                        Flyer.ing("è¯·åœ¨å¾®ä¿¡ä¸‹å‘é€ç•™è¨€ï¼", true, 3000, "notice");
                        return
                    }
                    var A = {};
                    A.content = y;
                    A.msgType = w;
                    A.msgBoardId = m;
                    b.sendMsg(A)
                });
                r.tap(function() {
                    var w = $(this);
                    w.addClass("msgBoard_hidePopop");
                    $("#msgBoard" + m).empty().append(k.getMsgBoardHtml());
                    q.initEvent();
                    setTimeout(function() {
                        t.css("pointer-events", "all");
                        w.hide().removeClass("msgBoard_hidePopop")
                    }, 380)
                });
                r.find(".msgBoard_panel").tap(function(w) { w.stopPropagation() })
            };
            u.initPopup = function() {
                this.initHtml();
                this.initEvent();
                this.initMsg()
            };
            return u
        })();
        var q = (function() {
            var u = {};
            u.initHtml = function() {
                var v = '<div class="ele f_MsgBoard" id="msgBoard' + m + '" style="z-index: ' + e.index + ";" + e.isHidden + " top: " + e.top + "; left: " + e.left + "; width: " + e.width + "px; height: " + e.height + 'px"><div class="eleChild" uniquename = ' + e.uniqueName + ">" + k.getMsgBoardHtml() + "</div></div>";
                Flyer.getSlideNode(i, ".contentEle", e.isLayer).append(v)
            };
            u.initEvent = function() {
                $("#msgBoard" + m + " .msg_btn").tap(function(w) { t = $(".s_active .slideNextPage").css("pointer-events", "none"); var v = $("#msgBoard_popup" + m); if (!v.length) { j.initPopup() } else { v.show() } });
                $("#msgBoard" + m + " .msg_like_count").on("click", function() {
                    var v = {};
                    v.msgInfoId = parseInt($(this).attr("mid"));
                    if (v.msgInfoId !== v.msgInfoId) { Flyer.ing("è¯¥ç•™è¨€æ˜¯æ ·æ¿ç•™è¨€ï¼Œè¯·å‘è¡¨ç•™è¨€å†ç‚¹èµžï¼", true, 3000, "notice"); return }
                    v.msgBoardId = m;
                    v.validateCode = "";
                    b.addLikeCount(v, this)
                })
            };
            u.initAuth = function() {
                if (window.currentMsgBoardId == m) {
                    $("#msgBoard" + m + " .msg_btn").tap();
                    var v = localStorage.getItem("msgInfo");
                    if (v) {
                        v = JSON.parse(v);
                        var w = {};
                        w.content = v.content;
                        w.msgType = v.msgType;
                        w.msgBoardId = m;
                        b.sendMsg(w);
                        localStorage.removeItem("msgInfo")
                    }
                }
            };
            u.changeMsgLikeNumber = function(x, y) {
                var D = x.msgBoardId;
                var v = x.msgInfoId;
                var C = $("#msgBoard" + D + " .msg_like_count" + v + " .msg_like_count_button");
                var A = $("#msgBoard" + D + " .msg_like_count" + v + " .msg_like_count_num");
                var z = $("#msgBoard_popup" + D + " .msg_like_count" + v + " .msg_like_count_button");
                var w = $("#msgBoard_popup" + D + " .msg_like_count" + v + " .msg_like_count_num");
                var B = 0;
                if (A.length !== 0) { B = parseInt(A.text()) }
                if (w.length !== 0) { B = parseInt(w.text()) }
                if (B !== B || B < 0) { B = 0 }
                if (y) {
                    B++;
                    A.text(B);
                    w.text(B);
                    C.html(h.getLikeAfter(h.getThemeColor(0)));
                    z.html(h.getLikeAfter(h.getThemeColor(0)));
                    A.show();
                    w.show()
                } else {
                    B--;
                    if (B == 0) {
                        A.text("");
                        w.text("");
                        A.hide();
                        w.hide()
                    } else {
                        A.text(B);
                        w.text(B);
                        A.show();
                        w.show()
                    }
                    C.html(h.getLikeBefore());
                    z.html(h.getLikeBefore())
                }
            };
            u.initMsgBoard = function() {
                this.initHtml();
                this.initEvent();
                this.initAuth()
            };
            u.init = function() { b.getMsgList() };
            return u
        })();
        q.init()
    }
})(Flyer);
(function(a) {
    a.shapeSvgFilter = function(d, g, f, e) {
        var b = d - 1;
        if (b == 5) { b = 2 }
        var c = new RegExp("shapeLine" + d, "g");
        f = f.replace(c, g);
        switch (b) {
            case 0:
                f = f.replace(/_Height_/g, 99);
                break;
            case 1:
                if (e < 3) { f = f.replace(/_Width_/g, 8 * e + 10) } else { f = f.replace(/_Width_/g, 10 * e) }
                f = f.replace("_Path1_", "width=" + 8 * e + " height=99");
                break;
            case 2:
                f = f.replace(/_Width_/g, 4 * e);
                f = f.replace("_Path1_", " width=" + 2 * e + " height=99");
                break;
            case 3:
                f = f.replace(/_Width_/g, 14.5 * e);
                f = f.replace("_Path1_", " width=" + 8 * e + " height=99");
                f = f.replace("_Path2_", "x=" + 10 * e + " width=" + 2.5 * e + " height=99");
                break;
            case 4:
                f = f.replace(/_Width_/g, 18 * e);
                f = f.replace("_Path1_", "width=" + 8 * e + " height=" + e);
                f = f.replace("_Path2_", "x=" + 10 * e + " width=" + 2.5 * e + " height=99");
                f = f.replace("_Path3_", "x=" + 14.5 * e + " width=" + 2.5 * e + " height=99");
                break;
            case 6:
                f = f.replace("_Width_", 3 * e);
                f = f.replace(/_Height_/g, e / 2);
                f = f.replace("_Path1_", "x=" + 1.5 * e + " y=" + 0.375 * e + " width=" + e + " height=" + 0.25 * e);
                break;
            case 7:
                f = f.replace("_Width_", 1.5 * e);
                f = f.replace(/_Height_/g, e / 2);
                break;
            case 8:
                f = f.replace("_Width_", 3 * e);
                f = f.replace(/_halfH_/g, e / 2);
                f = f.replace(/_H_/g, e);
                f = f.replace("_Path1_", "x=" + 1.5 * e + " y=" + 0.375 * e + " width=" + e + " height=" + 0.25 * e);
                break;
            case 9:
                f = f.replace("_Width_", 2.4 * e);
                f = f.replace("_Path1_", "0 " + e + " L" + 2 * e + " " + e + " L" + e + " 0");
                break;
            case 10:
                f = f.replace("_Width_", 1.4 * e);
                f = f.replace(/_halfH_/g, e / 2);
                f = f.replace(/_H_/g, e);
                break;
            case 11:
                f = f.replace("_Width_", 5 * e);
                f = f.replace("_Path1_", "0 0 L" + 1.5 * e + " 0 L0 " + e);
                f = f.replace("_Path2_", 2.5 * e + " 0 L" + 4 * e + " 0 L" + 2.5 * e + " " + e + " L" + e + " " + e);
                f = f.replace("_Path3_", 5 * e + " 0 L" + 5 * e + " " + e + " L" + 3.5 * e + " " + e);
                break;
            case 12:
                f = f.replace("_Width_", 3 * e);
                f = f.replace("_Path1_", "0 0 L0 " + e + " L" + e + " " + e);
                f = f.replace("_Path2_", 0.5 * e + " 0 L" + (2.5 * e) + " 0 L" + (1.5 * e) + " " + e);
                f = f.replace("_Path3_", 2 * e + " " + e + " L" + 3 * e + " 0 L" + 3 * e + " " + e);
                break
        }
        return f
    }
})(Flyer);
(function(a) {
    a["90001"] = function(B, m, w) {
        var e = B.special_template,
            h = "",
            d = "";
        var A = new Date(),
            k = A.getHours(),
            E = A.getMinutes();
        if (k < 10) { k = "0" + k }
        if (E < 10) { E = "0" + E }
        e.title = e.title ? e.title : "";
        var l = A.getDay(),
            n = A.getMonth() + 1,
            s = A.getDate(),
            o = "";
        if (n < 10) { n = "0" + n }
        if (s < 10) { s = "0" + s }
        o = n + "<span class='fontFacePF_M'>æœˆ</span>" + s + "<span class='fontFacePF_M'>æ—¥</span>";
        l = Flyer.formatDateForWeek(l);
        var j = "",
            D = "";
        if (e.manner != 0) {
            if (e.manner == 1) { j = "handDrawings" }
            if (e.tmp_fontface_path != undefined) {
                var c = "<style type='text/css' id='" + e.fontfamily + "'>\n@font-face {\nfont-family: '" + e.fontfamily + "';\nsrc: url('" + e.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
                $("head").append(c);
                D = "font-family:" + e.fontfamily
            }
        }
        d = B.flyerStyle;
        h += '<div class="flyerSpecialLockedScreen ' + j + '"><div class="lockedScreenHeader"><div class="currentTime">' + k + ":" + E + '</div><div class="currentDate">' + o + '&nbsp;<span class="fontFacePF_M">' + l + '</span></div></div><div class="lockedLine"></div>' + (e.type == 0 ? '<div class="lockedScreenNotice"><div class="lockedScreenBody"><div class="iphoneNoticec"><div class="lockedTitle"><span class="msg-icon icon"></span><span class="name" style="' + D + '">' + (e.title) + '</span><span class="openLocked">&nbsp;çŽ°åœ¨</span></div><div class="lockedContent" style="' + D + '">' + Flyer.decodeHtml(e.content) + '</div><div class="openLocked">æ»‘åŠ¨æ¥æŸ¥çœ‹</div></div></div></div>' : '<div class="lockedScreenNotice"><div class="lockedScreenBody lockedScreenBodyWX"><div class="iphoneNoticec"><div class="lockedTitle"><span class="wx-icon icon"></span><span class="name">å¾®ä¿¡</span><span class="openLocked">&nbsp;çŽ°åœ¨</span></div><div class="lockedContent" style="' + D + '">' + (e.title) + "ï¼š" + Flyer.decodeHtml(e.content) + '</div><div class="openLocked">æ»‘åŠ¨æ¥æŸ¥çœ‹</div></div></div></div>') + '<div class="lockedLine"></div><div class="lockedSlide"><div class="lockedSlideIcon"><div class="lockedSlideAnimation"><span class="fontFacePF_M">ã€‰&nbsp;</span><span>æ»‘åŠ¨æ¥è§£é”</span></div></div></div></div>';
        h = Flyer.filterTextHtml((h));
        h += Flyer.getLastPageFooterHtml(m);
        Flyer.getSlideNode(m, ".contentEle").append(h);
        $("head").append(d);

        function x() {
            if (window.Audio && (_audio = new Audio()).canPlayType("audio/mpeg")) { if (window.parent.pageSwiper.activeIndex < window.parent.pageSwiper.slides.length - 1) { f.play() } }
            setTimeout(function() {
                Flyer.unlockSwipes();
                window.parent.pageSwiper.slideNext()
            }, 30)
        }

        function g(F, G) {
            if (F == null || F == "") { return }
            F.css({ transform: G, "-moz-transform": G, "-webkit-transform": G })
        }
        var C = false,
            v = new Audio(),
            f = new Audio(),
            q = Flyer._resRoot + "/image/specialTemplate/music/notification.mp3",
            b = Flyer._resRoot + "/image/specialTemplate/music/click.mp3";
        f.src = b;
        v.src = q;
        var r = $("#flyerSpecialTemplate" + m).find(".lockedScreenBody,.lockedSlideIcon");
        var z, u;
        var t = 0,
            i = false,
            y = true;
        Flyer.getSlideNode(m).bind("existAtivePage", function() { Flyer.unlockSwipes() });
        Flyer.getSlideNode(m).bind("slidePageEnd", function() {
            Flyer.lockSwipeToNext();
            u = $("#flyerSpecialTemplate" + m).find(".lockedScreenBody").height() + 50;
            $("#flyerSpecialTemplate" + m).find(".lockedScreenNotice").height(u).css("opacity", "1");
            z = $("#flyerSpecialTemplate" + m).offset().left;
            if (!C) {
                if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(v) }
                C = true;
                Flyer.pageAutoSlide()
            }
        });
        if ($("body").hasClass("mobile")) {
            r[0].removeEventListener("touchmove", this, false);
            r[0].removeEventListener("touchend", this, false);
            r[1].removeEventListener("touchmove", this, false);
            r[1].removeEventListener("touchend", this, false);
            r[0].addEventListener("touchstart", function(F) {
                window.parent.pageSwiper.lockSwipes();
                t = F.touches[0].pageX;
                F.preventDefault();
                i = true
            }, false);
            r[0].addEventListener("touchend", function(F) {
                if (t <= F.changedTouches[0].pageX) { x() } else { window.parent.pageSwiper.lockSwipes() }
                i = false;
                g($(r[0]), "translateX(0)");
                F.preventDefault()
            }, false);
            r[0].addEventListener("touchmove", function(G) {
                if (t <= G.changedTouches[0].pageX && i) {
                    var F = G.changedTouches[0].pageX - t + z + "px";
                    g($(r[0]), "translateX(" + F + ")")
                }
                G.preventDefault()
            }, false);
            r[1].addEventListener("touchstart", function(F) {
                window.parent.pageSwiper.lockSwipes();
                t = F.touches[0].pageX;
                F.preventDefault()
            }, false);
            r[1].addEventListener("touchend", function(F) {
                if (t <= F.changedTouches[0].pageX - 30) { x() } else { window.parent.pageSwiper.lockSwipes() }
                F.preventDefault()
            }, false)
        } else {
            $(r[0]).off("click").on("click", function(F) {
                if (y) { x() }
                F.preventDefault()
            });
            r.off("mousedown").on("mousedown", function(F) {
                window.parent.pageSwiper.lockSwipes();
                t = F.pageX;
                y = true;
                i = true
            }).off("mouseup").on("mouseup", function(F) {
                if (t < F.pageX - 30) {
                    y = false;
                    r.off("click");
                    x()
                } else {
                    if (t > F.pageX - 30) {
                        window.parent.pageSwiper.lockSwipes();
                        y = false
                    }
                }
                g($(r[0]), "translate3d(0,0,0)");
                i = false
            });
            $(r[0]).off("mousemove").on("mousemove", function(G) {
                if (t <= G.pageX && i) {
                    var F = G.pageX - t + "px";
                    g($(r[0]), "translate3d(" + F + ",0,0)")
                }
                G.preventDefault()
            })
        }
    }
})(Flyer);
(function(b) {
    b["90002"] = b["90003"] = b["90005"] = function(T, V, w) {
        var ac = T.special_template,
            af = T.special_template_id,
            X = "",
            d = "",
            ap = null,
            au = null;
        var P = new Date(),
            al = P.getHours(),
            A = P.getMinutes();
        if (al < 10) { al = "0" + al }
        if (A < 10) { A = "0" + A }
        var aA = "";
        var ae = "";
        var O = "";
        var n = "";
        if (ac.manner != 0) {
            if (ac.manner == 1) {
                aA = " handDrawings";
                O = '<div class="mask1"></div><div class="mask2"></div><span class="arrow"></span><span class="leftTopBorder"></span><span class="leftBorder"></span><span class="leftBottomBorder"></span><span class="topBorder"></span><span class="rightTopBorder"></span><span class="rightBorder"></span><span class="rightBottomBorder"></span><span class="bottomBorder"></span>'
            }
            if (ac.tmp_fontface_path != undefined) {
                var v = "<style type='text/css' id='" + ac.fontfamily + "'>\n@font-face {\nfont-family: '" + ac.fontfamily + "';\nsrc: url('" + ac.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
                $("head").append(v);
                ae = "font-family:" + ac.fontfamily
            }
        } else { n = '<span class="arrow_dxBefore"></span>' }
        var l = ac.weixinparam || [];
        var ax = l.listmember || [],
            aq = l.listmessage || [],
            E = ac.list || [],
            ab = (ac.title),
            k = l.showtime || false,
            t = l.showtip || false,
            Y = l.showname || false,
            H = l.lord,
            ar = l.tmp_pic_path || "",
            J = (l.friendName) || "";
        var K = false,
            av = 0,
            Q, ao = ac.showsound;
        var S = function(aH, aG) { for (var aF = 0, aE = aG.length; aF < aE; aF++) { if (aH == aG[aF].id) { return aF } } return 0 };
        var s = (af == 90002) ? "dx" : (af == 90003) ? "wxq" : "wx";
        if (s == "dx") { Q = E } else { Q = aq }
        var aC = "æˆ‘",
            R = Flyer._resRoot + "/image/templateLib/0000049.jpg";
        if (s != "dx") {
            if (Flyer.isWeiXin() && !!Flyer._userInfo) {
                if (Flyer._flyerWXUserId.userId == Flyer._flyerWXUserId.shareUserId && ac.weixinparam.showwxsharestyle) {
                    aC = aC;
                    R = R
                } else {
                    aC = (!!Flyer._userInfo.userName && Flyer._userInfo.userName != "") ? Flyer._userInfo.userName : aC;
                    R = (!!Flyer._userInfo.userImage && Flyer._userInfo.userImage != "") ? Flyer._userInfo.userImage : R
                }
                if (ax.length > 0) { ax[0].name = aC }
            }
        }
        var aa = "";
        var D = "";
        if (s == "wx") {
            if (Flyer.isWeiXin() && !!Flyer._shareUserInfo) {
                aa = (Flyer._shareUserInfo.shareName != "") ? Flyer._shareUserInfo.shareName : J;
                D = (Flyer._shareUserInfo.shareImg != "") ? Flyer._shareUserInfo.shareImg : l.tmp_pic_path
            } else {
                aa = J;
                D = l.tmp_pic_path
            }
            if (ac.weixinparam.showwxsharestyle) { J = (aa != "" && aa != J) ? aa : J }
        }
        var am = P.getDay();
        am = Flyer.formatDateForWeek(am);
        var z = (s == "dx") ? "çŸ­ä¿¡/å½©ä¿¡" : "",
            q = (s == "dx") ? ("ä»Šå¤©" + al + ":" + A) : (am + " " + al + ":" + A),
            aD = (s == "dx") ? (ab) : (s == "wxq") ? (ab + "(" + ax.length + ")") : J,
            U = "";
        if (s == "wxq") {
            var h = H;
            H = S(H, ax);
            var B = (ax[H].name);
            if (Flyer.isWeiXin() && h == 0.5) { B = (Flyer._shareUserInfo.shareName != "") ? Flyer._shareUserInfo.shareName : "åˆ†äº«äºº" }
            var U = B + '<span class="mannerFont">é‚€è¯·</span>';
            for (var L = 0; L < ax.length; L++) {
                if (ax[L].id != h) {
                    if (!Flyer.isWeiXin()) { U += (ax[L].name) } else {
                        if (ax[L].id == 0.5 && h != 0.5) {
                            var ag = (Flyer._shareUserInfo.shareName != "") ? Flyer._shareUserInfo.shareName : "åˆ†äº«äºº";
                            U += ag;
                            console.log(ag)
                        } else { U += (ax[L].name) }
                    }
                }
                if (ax[L].id != h && L != ax.length - 1) { U += '<span class="mannerFont">ã€</span>' }
                if (L == ax.length - 1) { U += '<span class="mannerFont">åŠ å…¥ç¾¤èŠ</span>' }
            }
            U = U.replace((ax[0].name), '<span class="mannerFont">ä½ </span>');
            U = U.replace("åˆ†äº«äºº", '<span class="mannerFont">åˆ†äº«äºº</span>');
            U = U.replace("ã€", "å’Œ");
            U = U.replace("ã€åŠ ", "åŠ ")
        }
        var x = "",
            o = "",
            y = "";
        if (k) { x = '<div><div class="msgtime_wx messageTalkTime">' + q + "</div></div>" }
        if (s == "dx") { x = '<div><div class="msgtime_dx messageTalkTime">' + q + "</div></div>" }
        if (t) { o = '<div><div class="joinGroupTip" style="' + ae + '"><div><span>' + U + "</span></div></div></div>" }
        if (s == "dx") { y = '<div class="messageTalkName">çŸ­ä¿¡/å½©ä¿¡</div>' }
        var f = "";
        var W = "";
        if (!Flyer._isFirstVisit) { f = '<div class = "blankBlock"></div>'; if (Flyer.isWeiXin() && s != "dx") { W = '<div class = "messageExpand_m messageExpand mannerFont"style="top:0!important"><span>ç‚¹å‡»å±•å¼€å¯¹è¯</span><b></b></div>' } else { W = '<div class = "messageExpand_w messageExpand mannerFont"><span>ç‚¹å‡»å±•å¼€å¯¹è¯</span><b></b></div>' } }
        aD = aD.replace(/&lt;/g, "<");
        aD = aD.replace(/&gt;/g, ">");
        aD = aD.replace(/&amp;/g, "&");
        aD = aD.replace(/&#39;/g, "'");
        aD = aD.replace(/&quot;/g, '"');
        aD = aD.replace(/&nbsp;/g, "");
        var N = "";
        var ak = (!Flyer.isWeiXin() || s == "dx") ? "" : "noHeaderClass";
        if (ak == "") { N += '<div class="messageTalkHeader msg_h"><div class="msgTalkHeaderBg"><span class="msgSendPerson">' + aD.replace(ax.length, '<span class="mannerFont">' + ax.length + "</span>") + "</span></div></div>" }
        var an = "",
            j = "",
            M = "";
        var ah, aB, I, r, az, ay, C = "",
            Z = "";
        if (s != "dx") {
            for (var L = 0; L < aq.length; L++) {
                ah = (aq[L].memberid == 0 || aq[L].who == 0) ? "messageTalkFromMe" : "messageTalkFromThem";
                if (s == "wxq") {
                    var at = S(aq[L].memberid, ax);
                    aB = (at == 0) ? R : ax[at].tmp_pic_path;
                    if (at == 1 && ac.weixinparam.showwxsharestyle) {
                        if (Flyer.isWeiXin() && !!Flyer._shareUserInfo) {
                            ax[at].name = (Flyer._shareUserInfo.shareName != "") ? Flyer._shareUserInfo.shareName : '<span class="mannerFont">åˆ†äº«äºº</span>';
                            aB = (Flyer._shareUserInfo.shareImg != "") ? Flyer._shareUserInfo.shareImg : aB
                        }
                    }
                } else { aB = (aq[L].who == 0) ? R : (ac.weixinparam.showwxsharestyle ? D : l.tmp_pic_path); if (aq[L].who == 1) { if (aB.lastIndexOf("/") == aB.length - 1) { aB = l.tmp_pic_path } } }
                if (aB.lastIndexOf("/") == aB.length - 1) { aB = Flyer._resRoot + "/image/templateLib/0000049.jpg" }
                j = "";
                if (s == "wxq" && Y && aq[L].memberid != 0) { j = '<div class="clearFloat" ><div class="talkMemberName">' + ax[at].name + "</div></div>" }
                if (ac.manner == 0) {
                    if (aq[L].memberid == 0 || aq[L].who == 0) {
                        Z = '<span class="me_wxBefore"></span>';
                        C = '<span class="me_wxAfter"></span>'
                    } else {
                        Z = '<span class="them_wxBefore"></span>';
                        C = '<span class="them_wxAfter"></span>'
                    }
                }
                if (aq[L].type == 0) {
                    M = '<div class="messageTalkText">';
                    M += Z;
                    var aj = /\<((img class="sharecs" tag="flyer_shareNickName")(\s|\>))[^\>]*>/gm;
                    var F = /\<((img class="sharecs" tag="flyer_visitorNickName")(\s|\>))[^\>]*>/gm;
                    var G = aq[L].content;

                    function ai(i) {
                        i = i.replace(/\<(?!\/?(img)(\s|\>))[^\>]*>/g, "");
                        i = i.replace(/[ | ]*\n/g, "");
                        i = i.replace(/&nbsp;\n/ig, "");
                        return i
                    }
                    if (s == "wxq") { G = ai(G); if (F.test(G)) { G = G.replace(F, "@" + (ax[0].name)) } }
                    if (s == "wx") { G = ai(G); if (aj.test(G)) { G = G.replace(aj, (aa)) } if (F.test(G)) { G = G.replace(F, (aC)) } }
                    M += '<span class="messageContent">' + G + "</span>";
                    M += O;
                    M += C;
                    M += "</div>"
                } else {
                    if (aq[L].type == 1) {
                        r = aq[L] || {};
                        az = Flyer.getElementLinkNode(r);
                        linkContentString = "";
                        var e = (aq[L].tmp_pic_path == "") ? "wxNoPic" : "";
                        if (az.length > 0) {
                            linkContentString += Flyer.encodeHtml(az[0]);
                            linkContentString += '<img class="wxMessageTalkPic ' + e + '" src="' + aq[L].tmp_pic_path + '" />';
                            linkContentString += az[1]
                        } else { linkContentString += '<img class="wxMessageTalkPic ' + e + '" src="' + aq[L].tmp_pic_path + '"/>' }
                        M = '<div class="messageTalkPic">' + linkContentString + O + "</div>"
                    } else {
                        if (aq[L].type == 2) {
                            M = '<div class="messageTalkLuckpage"><div class="messageTalkMoney"><div class="wxMessageTalkBonusPic"></div>';
                            M += '<div class="messageTalkMoneyTitle">' + (aq[L].bonus) + "</div>";
                            M += '<div class="messageTalkMoneyInfo">é¢†å–çº¢åŒ…</div>';
                            M += '<div class="messageTalkMoneyFooter">å¾®ä¿¡çº¢åŒ…</div></div></div>'
                        } else {
                            if (aq[L].type == 3) {
                                var c = aq[L].transfer.money || "12";
                                var ad = aq[L].transfer.type;
                                var m = ad == 0 ? "è½¬è´¦" : "å·²æ”¶é’±";
                                M = '<div class="messageTalkTransfer"><div class="messageTalkMoney"><div class="wxMessageTalkTransferPic t' + ad + '"></div>';
                                M += '<div class="messageTalkMoneyTitle">' + (m) + "</div>";
                                M += '<div class="messageTalkMoneyInfo">ï¿¥' + (parseFloat(c).toFixed(2)) + "</div>";
                                M += '<div class="messageTalkMoneyFooter">å¾®ä¿¡è½¬è´¦</div></div></div>'
                            } else {
                                if (aq[L].type == 4) {
                                    M = '<div class="messageTalkCue"><div class="cueContent">';
                                    if (s == "wxq" && aq[L].annoVisitor == 1) { M += '<span class="atSomeone">@' + (ax[0].name) + "</span> " }
                                    var G = aq[L].content;
                                    if (s == "wx") {
                                        var aj = /\<((img class="sharecs" tag="flyer_shareNickName")(\s|\>))[^\>]*>/gm;
                                        var F = /\<((img class="sharecs" tag="flyer_visitorNickName")(\s|\>))[^\>]*>/gm;

                                        function ai(i) {
                                            i = i.replace(/\<(?!\/?(img)(\s|\>))[^\>]*>/g, "");
                                            i = i.replace(/[ | ]*\n/g, "");
                                            i = i.replace(/&nbsp;\n/ig, "");
                                            return i
                                        }
                                        G = ai(G);
                                        if (aj.test(G)) { G = G.replace(aj, (aa)) }
                                        if (F.test(G)) { G = G.replace(F, (aC)) }
                                    }
                                    M += "<span>" + G + "</span>";
                                    M += "</div></div>"
                                }
                            }
                        }
                    }
                }
                if (aq[L].who == -1) { an += '<div class="messageTalkLine specialEle">' + M + "</div>" } else { an += '<div class="messageTalkLine specialEle ' + ah + '"><div class="talkMemberImage">' + (ac.manner != 0 ? '<div class="menberBorder"></div>' : "") + '<img src="' + '"/></div>' + j + M + "</div>" }
            }
        } else { for (var L = 0; L < E.length; L++) { if (E[L].type == 1) { an += '<div class="messageTalkLine specialEle"><div class="dxMsgTalkMe messageTalkFromMe fadeInNormal">' + O + n + '<div class="messageContent">' + E[L].content + "</div></div></div>" } else { an += '<div class="messageTalkLine specialEle"><div class="dxMsgTalkThem messageTalkFromThem fadeInNormal">' + O + n + '<div class="messageContent">' + E[L].content + "</div></div></div>" } } }
        var aw = (s == "dx") ? "flyerSpecialDXMessage" : "flyerSpecialWXMessage";
        var g = (s == "dx") ? "dx_messageTalkBody" : "wx_flyerSpecialWXMessage";
        X += '<div class="flyerSpecialMessageTalk ' + aw + aA + '" style="' + ae + '">' + N + W + '<div class="' + g + " messageTalkBody " + ak + '" style="750px"><div class="pageScrollWrapperPanel">' + f + '<div class="messageTalkTitle">' + y + x + o + "</div>" + an + '</div></div><div class="msg_f messageTalkFooter"><div class="msgTalkFooterBg"></div></div><div class="messageEngpic"><img src="" /></div></div>';
        X = Flyer.filterTextHtml(Flyer.decodeHtml(X));
        Flyer.getSlideNode(V, ".msgPanel").append(X);
        if ($("#iscrollScript").length === 0) {
            d = '<script id=\'iscrollScript\' type="text/javascript" src="' + Flyer.lazyJSPath.iscroll + '"><\/script>';
            $("head").append(d)
        }
        var u = null;
        Flyer.getSlideNode(V).bind("slidePageEnd", function() {
            if (s != "dx") { Flyer.chgWebTitle(aD) }
            if (!K) {
                u = Flyer.getMsgInfoCallbackFunc(Q, { contentIndex: V, templateLength: w, templateId: af, playAudio: ao });
                K = true
            }
            var aN = Flyer.playReceiveAudio(af);
            var aM = Flyer.playReceiveAudio(af);
            var aI = $("#flyerSpecialTemplate" + V);
            var aQ = aI.find(".specialEle:visible").length;
            var aH = [];
            var aJ = 0.8;
            for (var aU = aQ, aS = 0, aV = u.length; aU < aV; aU++, aS++) {
                (function(aZ, i) {
                    if (aZ > 0) { aJ = aJ + parseFloat(Q[aZ - 1].readTime.time) }
                    aH[aZ] = setTimeout(function() {
                        if (window.parent.pageSwiper.activeIndex != V) { for (var a1 = 0, a0 = aH.length; a1 < a0; a1++) { clearTimeout(aH[a1]) } }
                        aI.find(".specialEle:hidden").eq(0).show();
                        u[aZ]();
                        if (ao) {
                            if (aq.length == 0 || aq[aZ + aQ].type != 4) {
                                if (aZ == 0) { Flyer.audioAutoPlay(aM); return } else { if (aZ == 1) { Flyer.audioAutoPlay(aN); return } }
                                if (aZ % 2 == 0) {
                                    aM.currentTime = 0;
                                    aM.play()
                                } else {
                                    aN.currentTime = 0;
                                    aN.play()
                                }
                            }
                        }
                    }, (aJ) * 1000)
                })(aS, aU)
            }
            if (Flyer.specialTemplateNoAni) {
                for (var aK = 0, aP = aH.length; aK < aP; aK++) { clearTimeout(aH[aK]) }
                aI.find(".specialEle:hidden").show().siblings(".blankBlock").hide();
                aI.find(".messageExpand").remove();
                var aO = aI.find(".messageTalkBody");
                var aT = aO.find(".pageScrollWrapperPanel");
                if (aT.height() > aO.height()) { window.IScroll ? a(V, w, 0) : $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { a(V, w, 0) }) }
            }
            if (!Flyer._isFirstVisit) {
                var aW = aI.find(".messageExpand");
                if (aW.length > 0) {
                    aW.off("click").on("click", function() {
                        for (var a0 = 0, aZ = aH.length; a0 < aZ; a0++) { clearTimeout(aH[a0]) }
                        aI.find(".specialEle:hidden").show().siblings(".blankBlock").hide();
                        $(this).remove();
                        var a1 = aI.find(".messageTalkBody");
                        var a2 = a1.find(".pageScrollWrapperPanel");
                        if (a2.height() > a1.height()) {
                            var i = a1.height() - a2.height();
                            a2.css({ "-webkit-transform": "translate(0px, " + i + "px)", "-moz-transform": "translate(0px, " + i + "px)", transform: "translate(0px, " + i + "px)" });
                            window.IScroll ? a(V, w, i) : $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { a(V, w, i) })
                        }
                        Flyer.unlockSwipes();
                        aI.append(Flyer.getFooterHtml(V, 1, true))
                    })
                }
            }
            var aG = aI.find(".messageTalkPic"),
                aF = aI.find(".messageEngpic"),
                aE = aF.find("img");
            if (aG.length > 0) {
                aG.off("click").on("click", function() {
                    var i = aI.find(".messageTalkLine").index($(this).parent());
                    if (aq[i].link == undefined || aq[i].link.id == 0) {
                        aE.attr("src", aq[i].tmp_pic_path);
                        aF.css("display", "block");
                        var aZ = aE.width() / aE.height();
                        if (aZ > window.innerWidth / window.innerHeight) { aE.css({ width: "100%", height: "auto" }) } else { aE.css({ width: "auto", height: "100%" }) }
                    }
                })
            }
            aF.off("click").on("click", function() { $(this).css("display", "none") });
            var aO = aI.find(".messageTalkBody");
            var aT = aO.find(".pageScrollWrapperPanel");
            var aX = false,
                aY, aR;
            var aL = function() {
                var a0 = aO.height() - aT.height();
                var a1 = aI.find(".specialEle:hidden").length;
                if (a1 == 0) { return }
                if (a1 > 0 && Math.abs(aR - aY) > 4) {
                    if (aR - aY > 0) {
                        if (!aX) {
                            for (var a2 = 0, a8 = aH.length; a2 < a8; a2++) { clearTimeout(aH[a2]) }
                            aX = true;
                            if (a0 < 0) { var a7 = new IScroll("#flyerSpecialTemplate" + V + " .messageTalkBody", { startY: a0, bindToWrapper: true, click: true, mouseWheel: Flyer.top._isFromPC, luckEvent: (window.parent.pageSwiper.params.direction == "vertical") }) }
                        }
                    } else {
                        if (aX) {
                            if (a0 < 0) { aT.css({ "-webkit-transform": "translate(0px, " + a0 + "px)", "-moz-transform": "translate(0px, " + a0 + "px)", transform: "translate(0px, " + a0 + "px)" }) }
                            aX = false;
                            var a6 = 0.8;
                            var aZ = aI.find(".specialEle:visible").length;
                            for (var a4 = aZ, a3 = 0, a5 = u.length; a4 < a5; a4++, a3++) {
                                (function(a9, i) {
                                    if (a9 > 0) { a6 = a6 + parseFloat(Q[a9 - 1].readTime.time) }
                                    aH[a9] = setTimeout(function() {
                                        if (window.parent.pageSwiper.activeIndex != V) { for (var bb = 0, ba = aH.length; bb < ba; bb++) { clearTimeout(aH[bb]) } }
                                        aI.find(".specialEle:hidden").eq(0).show();
                                        if (a0 < 0) { aT.css({ "-webkit-transform": "translate(0px, " + a0 + "px)", "-moz-transform": "translate(0px, " + a0 + "px)", transform: "translate(0px, " + a0 + "px)" }) }
                                        u[a9]();
                                        if (ao && aq[a9 + aZ].type != 4) {
                                            if (a9 == 0) { Flyer.audioAutoPlay(aM); return } else { if (a9 == 1) { Flyer.audioAutoPlay(aN); return } }
                                            if (a9 % 2 == 0) {
                                                aM.currentTime = 0;
                                                aM.play()
                                            } else {
                                                aN.currentTime = 0;
                                                aN.play()
                                            }
                                        }
                                    }, (a6) * 1000)
                                })(a3, a4)
                            }
                        }
                    }
                }
            };
            aO.off("wheel").on("wheel", function(i) {
                var i = i || window.event;
                aY = 0;
                if (i.originalEvent.wheelDelta < 0) { aR = -10 } else { aR = 10 }
                aL()
            });
            aO.off("mousedown").on("mousedown", function(i) {
                var i = i || window.event;
                aY = i.clientY
            });
            aO.off("mouseup").on("mouseup", function(i) {
                var i = i || window.event;
                aR = i.clientY;
                aL()
            });
            aO.off("touchstart").on("touchstart", function(i) {
                var i = i || window.event;
                aY = i.originalEvent.changedTouches[0].clientY
            });
            aO.off("touchend").on("touchend", function(i) {
                var i = i || window.event;
                aR = i.originalEvent.changedTouches[0].clientY;
                aL()
            })
        })
    };
    b.playReceiveAudio = function(d) {
        b.messageReceiveAudio = null;
        var c = "";
        if ($.inArray(d, [90002, 90003, 90005]) >= 0) { c = Flyer._resRoot + "/image/specialTemplate/music/notification.mp3" }
        if (window.Audio && new Audio().canPlayType("audio/mpeg")) {
            if (!Flyer.messageReceiveAudio) { Flyer.messageReceiveAudio = document.createElement("audio") }
            Flyer.messageReceiveAudio.src = c;
            Flyer.messageReceiveAudio.preload = "auto"
        }
        return Flyer.messageReceiveAudio
    };
    b.getMsgInfoCallbackFunc = function(d, m) {
        if (!window.parent.pageSwiper || !d.length) { return }
        var k = m.contentIndex || 0,
            g = m.templateLength || 1,
            f = m.templateId || 0,
            e = m.playAudio || false,
            h = $("#flyerSpecialTemplate" + k);
        Flyer.lockSwipes();
        if (Flyer.top._isPreview) { h.find(".messageTalkBody").css({ overflow: "auto" }) }
        var c = [],
            l;
        for (var j = 0; j < d.length; j++) {
            c[j] = (function(i, n) {
                return function() {
                    var u = d[j];
                    var r = h.find(".pageScrollWrapperPanel"),
                        s = h.find(".messageTalkBody").height(),
                        o = 0,
                        v = r.height(),
                        t = h.find(".specialEle:visible").length;
                    if (v > s) {
                        o = s - v;
                        r.css({ "-webkit-transform": "translate(0px, " + o + "px)", "-moz-transform": "translate(0px, " + o + "px)", transform: "translate(0px, " + o + "px)" });
                        if (t == (d.length)) { window.IScroll ? a(n, g, o) : $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { a(n, g, o) }) }
                    }
                    if (t == (d.length)) {
                        if (!Flyer._isFirstVisit) {
                            var w = h.find(".messageExpand");
                            var q = h.find(".blankBlock");
                            q.hide();
                            w.remove();
                            if (v - q.height() > s) { r.css({ "-webkit-transform": "translate(0px, " + (o + q.height()) + "px)", "-moz-transform": "translate(0px, " + (o + q.height()) + "px)", transform: "translate(0px, " + (o + q.height()) + "px)" }) } else { r.css({ "-webkit-transform": "translate(0px)", "-moz-transform": "translate(0px)", transform: "translate(0px)" }) }
                        }
                        Flyer.unlockSwipes();
                        h.append(Flyer.getFooterHtml(n, 1, true))
                    }
                }
            })(j, k)
        }
        return c
    };
    var a = function(g, f, c) {
        var e = window.parent.pageSwiper.params.direction;
        var d = new IScroll("#flyerSpecialTemplate" + g + " .messageTalkBody", {
            bounceCallBack: function(i) {
                if (e != "vertical") { return }
                var h = window.parent.pageSwiper;
                if (i === "down") {
                    Flyer.unlockSwipes();
                    h.slideNext()
                } else {
                    if (i === "up") {
                        Flyer.unlockSwipes();
                        h.slidePrev()
                    }
                }
            },
            startY: c,
            bindToWrapper: true,
            click: true,
            mouseWheel: Flyer.top._isFromPC,
            luckEvent: (window.parent.pageSwiper.params.direction == "vertical")
        })
    }
})(Flyer);
(function(a) {
    a["90004"] = function(m, g, c) {
        var d = m.special_template,
            b = "",
            i = null,
            j = null;
        var l = "";
        var f = "";
        if (d.manner != 0) {
            if (d.manner == 1) { l = "handDrawings" }
            if (d.tmp_fontface_path != undefined) {
                var k = "<style type='text/css' id='" + d.fontfamily + "'>\n@font-face {\nfont-family: '" + d.fontfamily + "';\nsrc: url('" + d.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
                $("head").append(k);
                f = "font-family:" + d.fontfamily
            }
        }
        b += '<div class="telegramTemplate ' + l + '"><div class="telegramHeader" style="' + f + '"><div class="telegramName">' + (d.title) + '</div><div class="telegramPosition">' + (d.content) + '</div></div><div class="telegramMessage"></div><div class="telegramFooter"></div></div>';
        b = b;
        b += Flyer.getLastPageFooterHtml(g);
        Flyer.getSlideNode(g, ".contentEle").append(b);
        var h = false,
            e = new Audio();
        e.src = Flyer._resRoot + "/image/specialTemplate/music/phone_call.mp3";
        Flyer.getSlideNode(g).bind("existAtivePage", function() {
            e.pause();
            e.readyState > 0 ? e.currentTime = 0 : ""
        });
        Flyer.getSlideNode(g).bind("slidePageEnd", function() {
            Flyer.lockSwipeToNext();
            e.loop = true;
            if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(e) }
            if (!h) {
                var o = $("#flyerSpecialTemplate" + g + " .telegramFooter");
                if ("ontouchstart" in window) { o.off("touchstart").on("touchstart", function(q) { n() }) } else { o.off("mousedown").on("mousedown", function(q) { n() }) }
                h = true;
                Flyer.pageAutoSlide()
            }

            function n() {
                setTimeout(function() {
                    var q = window.parent.pageSwiper;
                    Flyer.unlockSwipes();
                    q.slideNext()
                }, 0)
            }
        })
    }
})(Flyer);
(function(a) {
    a["90006"] = function(v, i, s) {
        var e = v.special_template,
            h = "",
            d = null,
            m = null;
        var q = navigator.userAgent.toLowerCase(),
            w = (q.indexOf("micromessenger") >= 0) ? true : false;
        var j = e.radarparam;
        var c = Flyer.filterTextHtml(Flyer.decodeHtml(e.content));
        var o = Flyer._resRoot + "/image/specialTemplate/wxUserImage.jpg";
        var r = new Audio(),
            k = Flyer._resRoot + "/image/specialTemplate/music/target.mp3";
        r.src = k;
        if (w && !!Flyer._userInfo) { o = (!!Flyer._userInfo.userImage && Flyer._userInfo.userImage != "") ? Flyer._userInfo.userImage : o }
        var n = j || {};
        var b = Flyer.getElementLinkNode(n);
        var t = "";
        var u = "";
        if (b.length > 0) {
            u += b[0];
            u += '<img src="' + j.tmp_pic_path + '"/>';
            u += b[1];
            t += b[0];
            t += c;
            t += b[1]
        } else {
            u += '<img src="' + j.tmp_pic_path + '"/>';
            t += c
        }
        var g = '<div class="radarBody"><div class="radarLine"></div><div class="wxUserImage" style="background-image:url(' + o + ')"></div><div class="radarMain specialEle fadeIn" delay="2000"><div class="radarImg" >' + u + '</div><div class="radarContent">' + t + "</div></div></div>";
        h += g;
        Flyer.getSlideNode(i, ".contentEle").append(h);
        var l = false;
        var f = null;
        Flyer.getSlideNode(i).bind("existAtivePage", function() {
            clearTimeout(f);
            r.pause();
            r.readyState > 0 ? r.currentTime = 0 : ""
        });
        Flyer.getSlideNode(i).bind("slidePageEnd", function() {
            if (!l) {
                Flyer.lockSwipes();
                f = setTimeout(function() {
                    var x = $("#flyerSpecialTemplate" + i);
                    x.find(".specialEle:hidden").eq(0).show();
                    if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(r) }
                    Flyer.unlockSwipes();
                    l = true;
                    if (x.find(".faiscoSite").length === 0) { x.append(Flyer.getLastPageFooterHtml(i, true)) }
                    Flyer.pageAutoSlide();
                    f = null
                }, 2100)
            }
        })
    }
})(Flyer);
(function(a) {
    a["90007"] = function(r, i, f) {
        var g = r.special_template,
            e = "",
            l = null,
            m = null;
        var b = 1500;
        var s = "";
        var o = new RegExp("[\x00-\x7F]+|[\u3040-\u309F]+|[\u30A0-\u30FF]+|[\u00ff-\uffff]|[ s+]|", "g");
        var d = g.siriparam.question.match(o);
        for (var c = 0, j = d.length; c < j; c = c + 2) {
            var q = d[c] + (d[c + 1] ? d[c + 1] : "");
            s += "<span style='display:none;'>" + (q) + "</span>"
        }
        e += '<div class="flyerSpecialSiri"><div class="siriwave9-greeting" style="-webkit-animation-duration: ' + b + "ms;animation-duration: " + b + 'ms;">ä½ å¥½ï¼Œè¯·é—®éœ€è¦ä»€ä¹ˆå¸®åŠ©ï¼Ÿ</div><div class="siriTemplateQuestion questionOutput"><span class="spanMark" style="visibility: hidden;">"</span>' + s + '<span class="spanMark" style="visibility: hidden;">"</span></div><div class="siriTemplateAnswer" style="display:none;">' + (g.siriparam.answer) + '</div><div class="siriwave9-container-ios9"></div><div class="siriTemplateFooter"><div class="siriVoiceTube" style="display:none"></div><div class="siriFooterTip" style="display:none"></div></div></div>';
        e = Flyer.filterTextHtml((e));
        e += Flyer.getLastPageFooterHtml(i, true);
        Flyer.getSlideNode(i, ".contentEle").append(e);
        var h = false;
        var k = new Audio(),
            n = new Audio();
        var l = function() {
            if (h) { return }
            h = true;
            var y = window.parent.pageSwiper;
            Flyer.lockSwipes();
            var G = $("#flyerSpecialTemplate" + i + " .siriwave9-container-ios9"),
                M = $("#flyerSpecialTemplate" + i + " .siriwave9-greeting"),
                t = $("#flyerSpecialTemplate" + i + " .questionOutput"),
                K = $("#flyerSpecialTemplate" + i + " .siriTemplateFooter"),
                H = $("#flyerSpecialTemplate" + i + " .siriVoiceTube"),
                v = $("#flyerSpecialTemplate" + i + " .siriFooterTip"),
                J = $("#flyerSpecialTemplate" + i + " .siriTemplateAnswer");
            if (window.parent.pageSwiper.params.direction != "vertical") { v.addClass("horizontal") }
            if (!g.siriparam.nextTip || i == Flyer._templateData.length - 1 || Flyer._templateData[i].autoSlide) { v.remove() }
            M.addClass("siri_greeting_moveUp");
            var E = G.find("canvas");
            if (E.length > 0) { E.remove() }
            var u = 750;
            var D = 40;
            var C = new SiriWave9({ width: u, height: D, speed: 0.2, amplitude: 1, container: G[0], autostart: true });
            var w = b + 1000;
            var O = setTimeout(function() {
                M.addClass("siri_greeting_fadeaway");
                var P = setTimeout(function() {
                    M.remove();
                    clearTimeout(P)
                }, b);
                clearTimeout(O)
            }, w);
            var N = 400,
                x, L, B = Date.now(),
                A = 0;
            var I = function() {
                x = requestAnimationFrame(I);
                L = Date.now();
                if (L - B > N) {
                    B = Date.now();
                    if ((d.length / 2 + 1) > A) {
                        $(t.find("span")[A]).show();
                        A++
                    } else { cancelAnimationFrame(x) }
                }
            };
            w = w + 500;
            var z = (d.length / 2 + 1) * N;
            g.siriparam.tmpAnwserVoicePath = g.siriparam.tmpAnwserVoicePath + "?v=" + g.siriparam.answerVoiceModifyTime;
            if (!!g.siriparam.tmpQuestionVoicePath && g.siriparam.questionType && g.siriparam.answerType) {
                k.src = g.siriparam.tmpQuestionVoicePath;
                n.src = g.siriparam.tmpAnwserVoicePath;
                var F = setTimeout(function() {
                    if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(k) }
                    var Q = Math.floor((k.duration / 2) * 1000);
                    var P = setTimeout(function() {
                        I();
                        var S = z;
                        var R = setTimeout(function() {
                            t.find(".spanMark").css("visibility", "visible");
                            C.stop();
                            G.remove();
                            H.show();
                            var T = setTimeout(function() {
                                Flyer.audioAutoPlay(n);
                                J.show();
                                J.addClass("moveUp");
                                var V = n.duration * 1000;
                                var U = setTimeout(function() {
                                    Flyer.unlockSwipes();
                                    Flyer.pageAutoSlide();
                                    H.hide();
                                    v.show();
                                    clearTimeout(U)
                                }, V);
                                clearTimeout(T)
                            }, 1000);
                            clearTimeout(R)
                        }, S);
                        clearTimeout(P)
                    }, Q);
                    clearTimeout(F)
                }, w)
            } else {
                if (!!g.siriparam.tmpQuestionVoicePath && g.siriparam.questionType && !g.siriparam.answerType) {
                    k.src = g.siriparam.tmpQuestionVoicePath;
                    var F = setTimeout(function() {
                        if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(k) }
                        var Q = Math.floor((k.duration / 2) * 1000);
                        var P = setTimeout(function() {
                            I();
                            var S = z;
                            var R = setTimeout(function() {
                                t.find(".spanMark").css("visibility", "visible");
                                C.stop();
                                G.remove();
                                H.show();
                                var T = setTimeout(function() {
                                    J.show();
                                    J.addClass("moveUp");
                                    Flyer.unlockSwipes();
                                    Flyer.pageAutoSlide();
                                    H.hide();
                                    v.show();
                                    clearTimeout(T)
                                }, 1500);
                                clearTimeout(R)
                            }, S);
                            clearTimeout(P)
                        }, Q);
                        clearTimeout(F)
                    }, w)
                } else {
                    if ((!g.siriparam.questionType || (g.siriparam.questionType && !g.siriparam.tmpQuestionVoicePath)) && g.siriparam.answerType) {
                        n.src = g.siriparam.tmpAnwserVoicePath;
                        var F = setTimeout(function() {
                            I();
                            var P = z + 1000;
                            var Q = setTimeout(function() {
                                t.find(".spanMark").css("visibility", "visible");
                                C.stop();
                                G.remove();
                                H.show();
                                if (window.Audio && new Audio().canPlayType("audio/mpeg")) {
                                    Flyer.audioAutoPlay(n);
                                    J.show()
                                }
                                var R = n.duration * 1000;
                                var S = setTimeout(function() {
                                    Flyer.unlockSwipes();
                                    Flyer.pageAutoSlide();
                                    H.hide();
                                    v.show();
                                    clearTimeout(S)
                                }, R);
                                clearTimeout(Q)
                            }, P);
                            clearTimeout(F)
                        }, w)
                    } else {
                        if (((g.siriparam.questionType && !g.siriparam.tmpQuestionVoicePath) || !g.siriparam.questionType) && !g.siriparam.answerType) {
                            var F = setTimeout(function() {
                                I();
                                var P = z;
                                var Q = setTimeout(function() {
                                    t.find(".spanMark").css("visibility", "visible");
                                    C.stop();
                                    G.remove();
                                    H.show();
                                    var R = 1000;
                                    var S = setTimeout(function() {
                                        J.show();
                                        Flyer.unlockSwipes();
                                        Flyer.pageAutoSlide();
                                        H.hide();
                                        v.show();
                                        clearTimeout(S)
                                    }, R);
                                    clearTimeout(Q)
                                }, P);
                                clearTimeout(F)
                            }, w)
                        } else { alert(11) }
                    }
                }
            }
        };
        Flyer.getSlideNode(i).bind("existAtivePage", function() {
            k.pause();
            n.pause()
        });
        Flyer.getSlideNode(i).bind("slidePageEnd", function() {
            if (!h) {
                if (!Flyer.hasLoadedJs.siriwave9) {
                    var t = Flyer.lazyJSPath.siriwave9;
                    jQuery.getCacheScript(t, function(u, v) {
                        if (v) {
                            l();
                            Flyer.hasLoadedJs.siriwave9 = true
                        } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                    })
                } else { l() }
            }
        })
    }
})(Flyer);
(function(a) {
    a["90008"] = function(r, h, e) {
        var f = r.special_template,
            d = "",
            l = null,
            n = null;
        var i = null,
            k = null;
        var j = f.voicecallsparam,
            c = new Audio(),
            m = new Audio(),
            b = new Audio();
        c.src = Flyer._resRoot + "/image/specialTemplate/music/call_waiting.mp3";
        b.src = Flyer._resRoot + "/image/specialTemplate/music/call_stop.mp3";
        m.src = j.tmpCallerVoiceIdPath;
        var q = "";
        var g = "";
        if (f.manner != 0) {
            if (f.manner == 1) { q = "handDrawings" }
            if (f.tmp_fontface_path != undefined) {
                var o = "<style type='text/css' id='" + f.fontfamily + "'>\n@font-face {\nfont-family: '" + f.fontfamily + "';\nsrc: url('" + f.tmp_fontface_path + "')  format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n</style>";
                $("head").append(o);
                g = "font-family:" + f.fontfamily
            }
        }
        d += '<div class="flyerSpecialVoiceCalls ' + q + '" style="' + g + '"><div class="voiceCallsTitle">' + (f.title) + '</div><div class="voiceCallsTime"></div><div class="voiceCallsMiddleIcons"></div><div class="voiceCallsFooter"></div><div class="voiceCallsLink">' + Flyer.getElementLinkNode(j || {}) + "</div></div>";
        d = Flyer.filterTextHtml(Flyer.decodeHtml(d));
        Flyer.getSlideNode(h, ".contentEle").append(d);
        if ($("#flyerSpecialTemplate" + h).find(".faiscoSite").length === 0) { $("#flyerSpecialTemplate" + h).append(Flyer.getLastPageFooterHtml(h)) }
        Flyer.getSlideNode(h).bind("existAtivePage", function() {
            clearTimeout(i);
            clearTimeout(k);
            c.pause();
            m.pause();
            b.pause();
            c.readyState > 0 ? c.currentTime = 0 : "";
            m.readyState > 0 ? m.currentTime = 0 : "";
            b.readyState > 0 ? b.currentTime = 0 : ""
        });
        Flyer.getSlideNode(h).bind("slidePageEnd", function() {
            Flyer.lockSwipes();
            clearTimeout(i);
            clearTimeout(k);
            var y = $("#flyerSpecialTemplate" + h + " .voiceCallsTime");
            $voiceCallsFooter = $("#flyerSpecialTemplate" + h + " .voiceCallsFooter");
            $voiceCallsLink = $("#flyerSpecialTemplate" + h + " .voiceCallsLink");
            var s = "00:00";
            var v = j.waitingDelay ? 3000 : 0;
            if ("ontouchstart" in window) { $voiceCallsFooter.unbind("touchstart").bind("touchstart", function(C) { t() }) } else { $voiceCallsFooter.unbind("mousedown").bind("mousedown", function(C) { t() }) }
            B();
            x();
            if (j.waitingDelay) { y.html("ç­‰å¾…æŽ¥é€š..."); if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(c) } } else { y.html(s) }
            i = setTimeout(function() {
                y.html(s);
                j.waitingDelay && c.pause();
                if (window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(m) }
                u()
            }, v);

            function w(D) { var F = Math.floor(D / 3600); var C = Math.floor((D - (F * 3600)) / 60); var E = Math.floor(D - (F * 3600) - (C * 60)); if (C < 10) { C = "0" + C } if (E < 10) { E = "0" + E } return C + ":" + E }
            var A = 0;

            function z() {
                y.html(w(A++));
                k = setTimeout(function() { z() }, 1000)
            }

            function x() {
                m.removeEventListener("ended", t, false);
                clearTimeout(k);
                clearTimeout(i)
            }

            function u() {
                m.addEventListener("ended", t, false);
                z()
            }

            function t() {
                Flyer.unlockSwipes();
                x();
                y.html("é€šè¯ç»“æŸ");
                j.waitingDelay && c.pause();
                m.pause();
                Flyer.audioAutoPlay(b);
                i = setTimeout(function() {
                    if (j.link.id == 2) {
                        var C = $voiceCallsLink.find("a").eq(0).attr("href");
                        window.location.href = C
                    } else { $voiceCallsLink.find("a").get(0).click() }
                }, 2000)
            }

            function B() {
                c.pause();
                m.pause();
                b.pause();
                c.readyState > 0 ? c.currentTime = 0 : "";
                m.readyState > 0 ? m.currentTime = 0 : "";
                b.readyState > 0 ? b.currentTime = 0 : ""
            }
        })
    }
})(Flyer);
(function(a) {
    var b = function(e) {
        var h = [];
        for (var d = 0, c = e.length; d < c; d++) {
            var f = e[d];
            var g = f.id;
            h[g] = f
        }
        return h
    };
    a["90009"] = function(R, y, ac) {
        var D;
        var c = R.special_template,
            r = "",
            s = null,
            U = null,
            t = false;
        var k = c.wxFriendZoom;
        var ad = c.type;
        var E = k.tmp_pic_path;
        var K = k.listmember || [];
        var F = k.listmessage || [];
        var j = b(K);
        var M = k.lord,
            o = j[M].name || "æˆ‘",
            v = (j[M].imageId != "") ? j[M].tmp_pic_path : (Flyer._resRoot + "/image/templateLib/0000475.jpg");
        var Q, q = "",
            n, S;
        var ab = "",
            f, z, A;
        var B = ["1åˆ†é’Ÿå‰", "2åˆ†é’Ÿå‰", "7åˆ†é’Ÿå‰", "32åˆ†é’Ÿå‰", "1å°æ—¶å‰", "1å°æ—¶å‰", "2å°æ—¶å‰", "3å°æ—¶å‰", "5å°æ—¶å‰", "5å°æ—¶å‰", "æ˜¨å¤©"];
        var w = Flyer.isWeiXin();
        if (!w) { ab = '<div class="fzTitle"><span>æœ‹å‹åœˆ</span></div>' } else {
            if (k.showwxsharestyle) {
                if (k.lord == 0.5) {
                    o = Flyer._shareUserInfo.shareName || "åˆ†äº«äºº";
                    v = Flyer._shareUserInfo.shareImg || (Flyer._resRoot + "/image/templateLib/0000475.jpg")
                }
                j[0.5].name = Flyer._shareUserInfo.shareName || "åˆ†äº«äºº";
                j[0.5].tmp_pic_path = Flyer._shareUserInfo.shareImg || (Flyer._resRoot + "/image/templateLib/0000475.jpg")
            }
            if (k.lord == 0) {
                o = Flyer._userInfo.userName || o;
                v = Flyer._userInfo.userImage || v
            }
            if (Flyer._flyerWXUserId.userId == Flyer._flyerWXUserId.shareUserId && k.showwxsharestyle) {
                j[0].name = o;
                j[0].tmp_pic_path = v
            } else {
                j[0].name = Flyer._userInfo.userName || o;
                j[0].tmp_pic_path = Flyer._userInfo.userImage || v
            }
        }
        if (ad == 1 && k.fzCover != "") { f = '<div class="fzHCover" style="background-image:none;"><img class="fzHCoverImg" src="' + E + '" style="min-width:100%;min-height:100%;position:absolute; width:' + R.bgwidth + "px; height:" + (R.bgheight * 1 + 1) + "px;top:" + R.bgtop + "px; left:" + R.bgleft + 'px;"/></div>' } else { f = '<div class="fzHCover"></div>' }
        Q = "" + ab + '<div class="fzHeader">' + f + '<div class="fzHLoad"><div class="fzHLoadName"><span>' + (o) + '</span></div><div class="fzHLoadHeader" style="background-image:url(' + v + ');"></div></div></div>';
        for (var V = 0, u = F.length; V < u; V++) {
            var d = F[V];
            var O = "";
            var T = "";
            var P = "";
            var aa = "";
            A = "";
            var J = d;
            if (!!J) { J = Flyer.getElementLinkNode(J) } else { J = [] }
            z = '<div class="fzDName"><span>' + (j[d.memberid || 0].name || "") + '</span></div><div class="fzDText"><span>' + Flyer.filterTextHtml(Flyer.decodeHtml(d.content) || "") + "</span></div>";
            if (d.type == 1 || d.type == 3) {
                for (var Z = 0, Y = d.imageList.length; Z < Y; Z++) {
                    var h = d.imageList[Z];
                    T = "fzDIArea";
                    if (Y == 1) { T = "fzOneImg" } else { if (Y == 4 && Z == 2) { T = "fzTwoImg" } }
                    O += '<div class="' + T + '">';
                    if (Y != 1) { O += '<div class="fzDIAreaStack" style="background-image:url(' + h.tmp_pic_path + ')" ></div>' } else { O += '<img fzimagesize src="' + h.tmp_pic_path + '"/>' }
                    O += "</div>"
                }
                if (d.type == 1) { z += '<div class="fzDImage">' + O + "</div>" }
            } else { if (d.type == 2) { z += '<div class="fzDLink"><div class="fzDLArea"><div class="fzDLImage" style="background-image:url(' + d.tmp_lpic_path + ')"></div><div class="fzDLText"><div class="fzDLTextValign"><div>' + ((d.linkCon) || "") + "</div></div></div></div>" + (J[0] || "") + (J[1] || "") + "</div>" } }
            if (d.type == 3) { z += '<div class="fzDAds"><div class="fzDAHeader"><span>å¹¿å‘Š</span><span class="fzDAHeaderIcon icon"></span></div><div class="fzDAImage">' + O + '</div><div class="fzDAFooter"><span>æŸ¥çœ‹è¯¦æƒ…</span><span class="fzDAFooterIcon icon"></span>' + (J[0] || "") + (J[1] || "") + "</div> </div>" }
            var g = B[V] || "æ˜¨å¤©";
            z += '<div class="fzDTime"><span>' + (g) + '</span><span class="fzDTimeIcon icon"></span></div>';
            if ((!!d.likeList && !!d.likeList.length) || (!!d.commentList && !!d.commentList.length)) {
                if (!!d.likeList && !!d.likeList.length) {
                    var l = "";
                    var H = "";
                    for (var Z = 0, I = d.likeList.length; Z < I; Z++) {
                        var C = (!!j[d.likeList[Z]]) ? j[d.likeList[Z]].name : "";
                        l += '<div class="fzDCLikeArea"><span>' + (C) + "</span>";
                        if (Z != I - 1) { l += '<span class="commaText">,&nbsp</span>' }
                        l += "</div>"
                    }
                    if (!d.commentList || !d.commentList.length) { H = "noComment" }
                    P = '<div class="fzDCLike ' + H + '"><div class="fzDCLikeIcon icon"></div>' + l + "</div>"
                }
                if (!!d.commentList && !!d.commentList.length) {
                    var G = "";
                    for (var Z = 0, m = d.commentList.length; Z < m; Z++) {
                        var N = d.commentList[Z];
                        var W = "";
                        var e = (!!j[N.memberId]) ? j[N.memberId].name : "";
                        var x = (!!j[N.forMember]) ? j[N.forMember].name : "";
                        G += '<div class="fzDCCArea"><span class="fzDCCAreaSpan fzDCCAreaName">' + (e) + "</span>";
                        if (N.forMember != null && N.forMember != -1) {
                            G += '<span class="fzDCCAreaSpan">å›žå¤</span>';
                            G += '<span class="fzDCCAreaName fzDCCAreaSpan">' + (x) + "</span>"
                        }
                        G += '<span class="fzDCCAreaSpan">:&nbsp</span>';
                        G += '<span class="fzDCCAreaText fzDCCAreaSpan">' + Flyer.filterTextHtml(Flyer.decodeHtml(N.text) || "") + "</span>";
                        G += "</div>"
                    }
                    if (!d.likeList || !d.likeList.length) { W = "noLike" }
                    aa = '<div class="fzDCComment ' + W + '">' + G + "</div>"
                }
                A = '<div class="fzDComment"><div class="triangleIcon"></div>' + P + aa + "</div>"
            }
            var X = (j[d.memberid || 0].imageId != "") ? j[d.memberid || 0].tmp_pic_path : (Flyer._resRoot + "/image/templateLib/0000475.jpg");
            q += '<div class="fzDLine"><div class="clrF"><div class="fzDHeader" style="background-image:url(' + X + ')"></div><div class="fzDInfo">' + z + A + "</div></div></div>"
        }
        var L = $(window).height();
        r = '<div class="friendZoom" style="' + L + 'px"><div class="friendZoomwrapper">' + Q + '<div class="fzDetail">' + q + "</div>";
        if (Flyer.pageEffects[Flyer._pageEffect].dir == "vertical") { r += '<div class="fzSlideNext">' + Flyer.getFooterHtml(y) + "</div>" }
        r += "</div></div>";
        if (Flyer.pageEffects[Flyer._pageEffect].dir != "vertical") { r += Flyer.getFooterHtml(y) }
        Flyer.getSlideNode(y, ".msgPanel").append(r);
        Flyer.getSlideNode(y).bind("slidePageEnd", function() {
            Flyer.chgWebTitle("æœ‹å‹åœˆ");
            var af = $("#flyerSpecialTemplate" + y + " .friendZoom");
            if (Flyer.top._isPreview) { af.css({ overflow: "auto" }) }
            if (!t) {
                t = true;
                var ag = af.find(".fzOneImg img");
                var ae = 0;
                ag.each(function(aj) {
                    var ak = ag[aj];
                    if (!ak.naturalWidth) {
                        $(ak).load(function() {
                            ah(ak);
                            aj++;
                            if (aj == ag.length) { D.refresh() }
                        })
                    } else { ah(ak) }
                });

                function ah(an) {
                    var am = an.naturalWidth,
                        ao = an.naturalHeight,
                        al = am / ao,
                        i = $(an).parent();
                    var ak = 120,
                        aj = 360;
                    if (al > 0 && al <= 0.33) { $(an).css({ width: ak, height: aj }) } else { if (al > 0.33 && al < 1) { $(an).css({ width: "initial", height: aj }) } else { if (al > 1 && al < 3) { $(an).css({ width: aj, height: "initial", }) } else { if (al > 3) { $(an).css({ width: aj, height: ak }) } } } }
                }
                if (!Flyer.top._isPreview) {
                    window.IScroll ? ai() : $.getCacheScript(Flyer.lazyJSPath.iscroll, function() { ai() });

                    function ai() {
                        var aj = $("#flyerSpecialTemplate" + y + " .friendZoom");
                        var i = $("#flyerSpecialTemplate" + y + " .friendZoom").height();
                        var al = aj.find(".friendZoomwrapper").height();
                        if (i >= al) { return }
                        var ak = window.parent.pageSwiper.params.direction;
                        D = new IScroll(aj[0], {
                            bounceCallBack: function(an) {
                                if (ak != "vertical") { return }
                                var am = window.parent.pageSwiper;
                                if (an === "down") {
                                    Flyer.unlockSwipes();
                                    am.slideNext()
                                } else {
                                    if (an === "up") {
                                        Flyer.unlockSwipes();
                                        am.slidePrev()
                                    }
                                }
                            },
                            click: true,
                            mouseWheel: Flyer.top._isFromPC,
                            bindToWrapper: true,
                            luckEvent: (ak == "vertical")
                        })
                    }
                }
            }
        });
        return { slidePageEndCallBack: s }
    }
})(Flyer);
(function(a) {
    a["90010"] = function(u, g, t) {
        var d = u.special_template,
            e = "";
        var m = navigator.userAgent.toLowerCase(),
            v = (m.indexOf("micromessenger") >= 0) ? true : false;
        var f = d.shakeparam;
        var n = Flyer.filterTextHtml(Flyer.decodeHtml(d.content));
        var l = f.openVoice;
        var w = new Audio();
        w.src = Flyer._resRoot + "/image/specialTemplate/music/wechat.mp3";
        var x = new Audio();
        x.src = Flyer._resRoot + "/image/specialTemplate/music/shakeSuccess.mp3";
        var j = f || {};
        var b = Flyer.getElementLinkNode(j);
        var h = "";
        var k = '<div class="shakeMain">';
        var s = '<div class="shakeImg"><img src="' + f.tmp_pic_path + '"/></div><div class="shakeContent">' + n + "</div>";
        if (b.length > 0) {
            h += b[0];
            h += s;
            h += b[1]
        } else { h += s }
        k += h + "</div>";
        var q = '<div class="shakeBody"><div class="shakeTip"></div><div class="shakePart3"></div><div class="shakePart1"></div><div class="shakePart2"></div><div class="shakeLoading">æ­£åœ¨æœç´¢é™„è¿‘ä¿¡æ¯...</div>' + k + "</div>";
        e += q;
        Flyer.getSlideNode(g, ".contentEle").append(e);
        if ($("#flyerSpecialTemplate" + g).find(".faiscoSite").length === 0) { $("#flyerSpecialTemplate" + g).append(Flyer.getLastPageFooterHtml(g)) }
        var i = false;
        var o = null,
            r = null;
        var c = function() {
            var y = new Shake({ threshold: 5, timeout: 1000 });
            if (!y.canShake() || Flyer.top._isFromPC) {
                i = true;
                $("#flyerSpecialTemplate" + g).find(".shakeMain:hidden").eq(0).show();
                return
            }
            Flyer.lockSwipes();
            y.start();
            y.addEvent(z);

            function z() {
                y.removeEvent(z);
                y.stop();
                var B = $("#flyerSpecialTemplate" + g),
                    A = B.find(".shakeBody").eq(0);
                A.addClass("shaking");
                if (l && window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(w) }
                o = setTimeout(function() {
                    A.removeClass("shaking");
                    B.find(".shakeLoading:hidden").eq(0).show();
                    r = setTimeout(function() {
                        B.find(".shakeLoading").eq(0).hide();
                        B.find(".shakeMain:hidden").eq(0).show().addClass("animate");
                        if (l && window.Audio && new Audio().canPlayType("audio/mpeg")) { Flyer.audioAutoPlay(x) }
                        Flyer.unlockSwipes();
                        i = true;
                        r = null
                    }, 2000);
                    o = null
                }, 1100)
            }
        };
        Flyer.getSlideNode(g).bind("existAtivePage", function() {
            clearTimeout(o);
            clearTimeout(r);
            w.pause();
            w.readyState > 0 ? w.currentTime = 0 : "";
            x.pause();
            x.readyState > 0 ? x.currentTime = 0 : ""
        });
        Flyer.getSlideNode(g).bind("slidePageEnd", function() {
            if (!i) {
                if (!Flyer.hasLoadedJs.shake) {
                    var y = Flyer.lazyJSPath.shake;
                    jQuery.getCacheScript(y, function(z, A) {
                        if (A) {
                            c();
                            Flyer.hasLoadedJs.shake = true
                        } else { console.log("jsåŠ è½½å‡ºé”™ï¼") }
                    })
                } else { c() }
            } else { Flyer.unlockSwipes() }
        })
    }
})(Flyer);
(function(a) {
    a.creatSpecialEffectsPage = function() {
        var h = window.parent.pageSwiper,
            e = h.activeIndex,
            i = Flyer._templateData[e];
        $currentPage = $(h.slides[h.activeIndex]);
        var c = i.templatetype === undefined ? 0 : i.templatetype,
            b = i.openSpecialEffects,
            j = $currentPage.hasClass("slided"),
            g = Flyer.creatSpecialEffectsAnimation();
        if (b && c === 0 && !j) {
            if ($("#specialEffects").length > 0) { $("#specialEffects").hide() } else {
                var f = '<div id="specialEffects" class="specialEffects f_DNSTraffic"><div id="specialEffectsAnimate" class="specialEffectsAnimate"></div></div>';
                $("body").append(f);
                $("#specialEffectsAnimate").css({ "-webkit-animation-duration": g.duration + "ms", "animation-duration": g.duration + "ms" });
                $("#specialEffectsAnimate").css({ "-webkit-animation-delay": (g.isTransition ? 0 : g.duration + "ms"), "animation-delay": (g.isTransition ? 0 : g.duration + "ms") });
                $("#specialEffects").on("touchstart touchmove touchend", function(k) { k.preventDefault() })
            }
            var d = Flyer.creatSpecialEffects();
            $("#specialEffectsAnimate").html(d.html);
            $("#specialEffects").hide();
            $("#specialEffectsAnimate").removeClass(g.animateClass);
            setTimeout(function() {
                $("#specialEffects").show();
                $("#specialEffectsAnimate").addClass(g.animateClass);
                d.callBack()
            }, 0)
        } else { $("#specialEffects").length > 0 && $("#specialEffects").hide() }
    };
    a.creatSpecialEffects = function() {
        var b = window.parent.pageSwiper,
            e = b.activeIndex,
            c = Flyer._templateData[e],
            d = c.specialEffects.type;
        var f = null;
        if (d == 0) { f = Flyer.fingerPrintParam(c) } else { if (d == 1) { f = Flyer.wipeParam(c) } else { if (d == 2) { f = Flyer.smashWindowParam(c) } } }
        return f
    };
    a.specialEffectsStartCallBack = function() {
        var c = window.parent.pageSwiper,
            b = c.activeIndex,
            f = c.activeIndex,
            g = $(c.slides[b]);
        var d = Flyer._templateData[f],
            e = d.specialEffects.type;
        if (e != 1) { g.removeClass("eleActive") }
    };
    a.speciallEffectsEndCallBack = function() {
        var c = window.parent.pageSwiper,
            b = c.activeIndex,
            d = c.activeIndex,
            e = $(c.slides[b]);
        e.addClass("eleActive");
        Flyer.allSlideEndCallBack()
    };
    a.checkSpecialEffects = function() {
        var b = window.parent.pageSwiper,
            f = b.activeIndex,
            e = Flyer._templateData[f];
        $currentPage = $(b.slides[b.activeIndex]);
        var g = e.templatetype === undefined ? 0 : e.templatetype,
            d = e.openSpecialEffects,
            c = $currentPage.hasClass("slided");
        return $("#specialEffects").length > 0 && d && g === 0 && !c
    };
    a.creatSpecialEffectsAnimation = function() {
        var d = Flyer.pageEffects[Flyer._pageEffect].dir,
            e = Flyer.pageEffects[Flyer._pageEffect].eff;

        function b() { return d === "horizontal" }
        var c = (function() { var i = navigator.userAgent.toLowerCase(); var j = i.indexOf("chrome/"); var k = (j > 0) ? i.substring(j + 7, j + 9) : 0; return (parseInt(k) > 33 || i.indexOf("mobile") >= 0) })();
        var h = "",
            g = 500,
            f = false;
        if (e === "newspaper") { h = "swiper_rotateIn" } else {
            if (e === "rotate_fall" && c) {
                h = b() ? "swiper_flipInLeft" : "swiper_flipInBottom";
                g -= 200
            } else {
                if (e === "rotate_fall" && !c) {
                    h = b() ? "swiper_360flipInLeft" : "swiper_360flipInBottom";
                    g -= 200
                } else {
                    if (e === "threeDimen") {
                        h = b() ? "swiper_rotateCubeLeftIn" : "swiper_rotateCubeTopIn";
                        f = true
                    } else {
                        if (e === "fadeout") {
                            h = "fadeOut";
                            f = true
                        } else {
                            if (e === "slippage") {
                                h = b() ? "slippageX" : "slippageY";
                                f = true
                            }
                        }
                    }
                }
            }
        }
        return { eff: e, animateClass: h, duration: g, isTransition: f }
    };
    a.fingerPrintParam = function(s) {
        var g = "",
            b = null;
        var n = s.bgcolor;
        var d = s.specialEffects.fingerPrintParam;
        var q = Flyer.calSize.getPercentBg();
        var i = (d.bgwidth || 750) * q,
            e = d.bgheight || 1206,
            e = (e == "auto") ? "auto" : e * q,
            c = d.bgtop * q,
            l = d.bgleft * q,
            m = s.bgcolor;
        var k = (d.bgtagimg && d.bgType == 1) ? '<img src="' + d.bgPicPath + '" style="position: absolute;width:' + i + "px; height: " + e + "px; top:" + c + "px; left: " + l + "px;background-color:" + n + ';">' : '<div style="background-image:url(' + d.bgPicPath + ');background-size: cover;background-position: center center;position:absolute;width:100%;height:100%;z-index:0;"></div>';
        var r = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 181.8 180.6" style="enable-background:new 0 0 181.8 180.6; fill: ' + d.color + ';" preserveAspectRatio="none" xml:space="preserve">';
        var o = '<svg class="fingerSvg2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 181.8 180.6" style="enable-background:new 0 0 181.8 180.6;" preserveAspectRatio="none" xml:space="preserve">';
        var j = '<g><path d="M90.9,70.3c-11.3,0-20.6,9.2-20.6,20.6c0,27.6-2.9,55.1-8.8,81.7c-0.4,1.6,0.7,3.2,2.3,3.6   c0.2,0,0.4,0.1,0.6,0.1c1.4,0,2.6-1,2.9-2.4c5.9-27.1,8.9-55,8.9-83c0-8,6.5-14.6,14.6-14.6s14.6,6.5,14.6,14.6   c0,19.1-1.3,38.2-3.9,57c-0.2,1.6,0.9,3.2,2.6,3.4c0.1,0,0.3,0,0.4,0c1.5,0,2.8-1.1,3-2.6c2.6-19,3.9-38.5,3.9-57.8   C111.4,79.5,102.2,70.3,90.9,70.3z"/><path d="M90.9,56.5c-6.6,0-13.1,1.9-18.6,5.5c-1.4,0.9-1.8,2.8-0.9,4.1c0.9,1.4,2.8,1.8,4.1,0.9   c4.6-3,9.9-4.5,15.4-4.5c15.6,0,28.4,12.7,28.4,28.4c0,13.9-0.7,27.9-2,41.7c-0.3,3.1-0.6,6.2-1,9.3c-0.3,2.7-0.7,5.5-1,8.2   c-1.1,8.1-2.5,16.2-4,24.2c-0.3,1.6,0.7,3.2,2.4,3.5c0.2,0,0.4,0.1,0.6,0.1c1.4,0,2.7-1,2.9-2.4c1.6-8.1,3-16.3,4.1-24.5   c0.4-2.8,0.7-5.6,1.1-8.3c0.4-3.1,0.7-6.3,1-9.4c1.3-13.9,2-28.1,2-42.2C125.3,71.9,109.8,56.5,90.9,56.5z"/><path d="M65.2,78.8c0.7-1.5,0.1-3.3-1.4-4c-1.5-0.7-3.3-0.1-4,1.4c-2.2,4.6-3.3,9.5-3.3,14.7c0,26-2.7,52-8.1,77.2   c-0.3,1.6,0.7,3.2,2.3,3.6c0.2,0,0.4,0.1,0.6,0.1c1.4,0,2.6-1,2.9-2.4c5.5-25.6,8.2-52,8.2-78.5C62.5,86.6,63.4,82.6,65.2,78.8z"/><path class="st0" d="M90.9,41.8c-27.1,0-49.1,22-49.1,49.1c0,8.9-0.3,17.9-1,26.8c-0.1,1.7,1.1,3.1,2.8,3.2c0.1,0,0.2,0,0.2,0   c1.6,0,2.9-1.2,3-2.8c0.7-9,1-18.2,1-27.2c0-23.8,19.3-43.1,43.1-43.1S134,67.1,134,90.9c0,14.4-0.7,28.8-2.1,43.1   c-0.2,1.6,1.1,3.1,2.7,3.3c0.1,0,0.2,0,0.3,0c1.5,0,2.8-1.2,3-2.7c1.4-14.4,2.1-29.1,2.1-43.6C140,63.8,118,41.8,90.9,41.8z"/><path class="st0" d="M90.9,34.3c9.8,0,19.4,2.5,27.8,7.3c1,0.6,2,1.2,2.9,1.8c1.4,0.9,3.2,0.5,4.1-0.9c0.9-1.4,0.5-3.2-0.9-4.1   c-1.1-0.7-2.2-1.3-3.2-2c-9.3-5.3-20-8.1-30.8-8.1c-34.5,0-62.6,28.1-62.6,62.6c0,19.4-1.6,38.8-4.9,57.8c-0.3,1.6,0.8,3.2,2.5,3.5   c0.2,0,0.3,0,0.5,0c1.4,0,2.7-1,3-2.5c3.3-19.3,5-39.1,5-58.8C34.3,59.7,59.7,34.3,90.9,34.3z"/><path class="st0" d="M133.5,49c-1.2,1.1-1.3,3-0.2,4.2c9.2,10.4,14.3,23.7,14.3,37.6c0,22.5-1.6,45.1-4.9,67.2   c-0.2,1.6,0.9,3.2,2.5,3.4c0.1,0,0.3,0,0.4,0c1.5,0,2.7-1.1,3-2.6c3.3-22.4,4.9-45.2,4.9-68c0-15.4-5.6-30.1-15.8-41.6   C136.6,48,134.7,47.9,133.5,49z"/><path class="st0" d="M76.2,22c1.6-0.3,2.7-1.9,2.3-3.6c-0.3-1.6-1.9-2.7-3.6-2.3c-35,7.4-60.5,38.8-60.5,74.7c0,0.1,0,0.2,0,0.2   c0,0.1,0,0.2,0,0.2c0,13.6-0.8,27.4-2.5,40.8c-0.2,1.6,1,3.1,2.6,3.3c0.1,0,0.3,0,0.4,0c1.5,0,2.8-1.1,3-2.6   c1.7-13.7,2.6-27.7,2.6-41.6c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.2C20.5,57.8,43.9,28.9,76.2,22z"/><path class="st0" d="M90.9,14.5c-1.7,0-3,1.3-3,3s1.3,3,3,3c38.8,0,70.4,31.6,70.4,70.4c0,17-0.9,34.1-2.7,50.9   c-0.2,1.6,1,3.1,2.7,3.3c0.1,0,0.2,0,0.3,0c1.5,0,2.8-1.1,3-2.7c1.8-17,2.7-34.4,2.7-51.6C167.3,48.8,133,14.5,90.9,14.5z"/><path class="st0" d="M154.5,26c-1.2-1.2-3.1-1.1-4.2,0s-1.1,3.1,0,4.2c16.4,16.1,25.5,37.6,25.5,60.6c0,1.7,1.3,3,3,3s3-1.3,3-3   C181.8,66.3,172.1,43.2,154.5,26z"/><path class="st0" d="M17.6,42.3c0.5,0.4,1.1,0.6,1.7,0.6c0.9,0,1.9-0.4,2.4-1.3C37.7,19.3,63.5,6,90.9,6c18.2,0,35.5,5.6,50.1,16.3   c1.3,1,3.2,0.7,4.2-0.6c1-1.3,0.7-3.2-0.6-4.2C128.8,6,110.3,0,90.9,0c-29.3,0-57,14.3-74,38.1C15.9,39.5,16.2,41.4,17.6,42.3z"/><path class="st0" d="M13.8,48.6c-1.5-0.7-3.3-0.2-4,1.3C3.3,62.7,0,76.5,0,90.9c0,1.7,1.3,3,3,3s3-1.3,3-3   c0-13.5,3.1-26.3,9.1-38.2C15.8,51.1,15.2,49.3,13.8,48.6z"/><path class="st0" d="M90.9,87.9c-1.7,0-3,1.3-3,3c0,29-3.1,58-9.3,86c-0.4,1.6,0.7,3.2,2.3,3.6c0.2,0,0.4,0.1,0.6,0.1   c1.4,0,2.6-1,2.9-2.4c6.2-28.5,9.4-57.9,9.4-87.3C93.9,89.2,92.5,87.9,90.9,87.9z"/><path class="st0" d="M102.7,160.8c-1.6-0.3-3.2,0.8-3.5,2.4c-0.8,4.4-1.6,8.8-2.5,13.2c-0.3,1.6,0.7,3.2,2.3,3.5   c0.2,0,0.4,0.1,0.6,0.1c1.4,0,2.6-1,2.9-2.4c0.9-4.4,1.8-8.9,2.6-13.4C105.4,162.7,104.3,161.1,102.7,160.8z"/><path class="st0" d="M133.6,146.2c-1.6-0.2-3.1,0.9-3.4,2.6c-0.8,6.3-1.8,12.7-2.9,18.9c-0.3,1.6,0.8,3.2,2.4,3.5   c0.2,0,0.3,0,0.5,0c1.4,0,2.7-1,3-2.5c1.1-6.3,2.1-12.8,2.9-19.2C136.4,147.9,135.3,146.4,133.6,146.2z"/><path class="st0" d="M42.2,133.6c-1.6-0.2-3.1,1-3.4,2.6c-1,7.7-2.2,15.5-3.7,23.1c-0.3,1.6,0.7,3.2,2.4,3.5c0.2,0,0.4,0.1,0.6,0.1   c1.4,0,2.7-1,2.9-2.4c1.5-7.7,2.8-15.6,3.8-23.5C45,135.3,43.9,133.8,42.2,133.6z"/></g></svg>';
        var h = r + j,
            f = o + j;
        g += '<div class="fingerPrintParamBg">' + k + '</div><div class="fingerPrintParam"><div class="fingerPrintInner" ><div class="fingerPrintImg">' + h + f + '<div class="fingerPrintScanner"></div></div><div class="fingerPrintText" style="color:' + d.color + ';">é•¿æŒ‰æŒ‡çº¹2sè§£é”</div></div></div>';
        b = function() {
            var w = $("#specialEffects").find(".fingerPrintImg").eq(0);
            var z = $("#specialEffects").find(".fingerPrintScanner").eq(0);
            var y = null;
            var v = new Audio();
            v.src = Flyer._resRoot + "/image/specialEffects/music/bi.mp3";
            var u = "ontouchstart" in window ? true : false,
                A = u ? "touchstart" : "mousedown",
                x = u ? "touchmove" : "mousemove",
                t = u ? "touchend" : "mouseup";
            w.off(A).on(A, function(B) {
                B.stopPropagation();
                B.preventDefault();
                $(this).addClass("touching");
                y = setTimeout(function() {
                    Flyer.audioAutoPlay(v);
                    $("#specialEffects").fadeOut(500);
                    Flyer.speciallEffectsEndCallBack()
                }, 1000)
            });
            w.off(t).on(t, function(B) {
                B.stopPropagation();
                B.preventDefault();
                $(this).removeClass("touching");
                clearTimeout(y)
            });
            w.off(x).on(x, function(B) {
                B.stopPropagation();
                B.preventDefault()
            })
        };
        return { html: g, callBack: b }
    };
    a.wipeParam = function(l) {
        var g = "",
            c = null;
        var e = l.specialEffects.wipeParam;
        var k = Flyer.calSize.getPercentBg();
        var h = (e.bgwidth || 750) * k,
            f = e.bgheight || 1206,
            f = (f == "auto") ? "auto" : f * k,
            d = e.bgtop * k,
            j = e.bgleft * k;
        var b = 30;
        var i = (e.bgtagimg && e.bgType == 1) ? '<div class="bgData" bgurl="' + e.bgPicPath + '" bglinewidth="' + b + '" style="position: absolute;width:' + h + "px; height: " + f + ";top:" + d + "px; left: " + j + 'px; visibility:hidden;"></div>' : '<div class="bgData" bglinewidth="' + b + '" bgurl="' + e.bgPicPath + '"></div>';
        g += '<div class="wipeParam">' + i + '<canvas></canvas><div class="tipsDiv"><div class="tips">æ“¦ä¸€æ“¦<span class="star"></span></div></div></div>';
        c = function() {
            var m = $("#specialEffects").find(".wipeParam").eq(0),
                G = m.find(".bgData").eq(0),
                q = m.find("canvas").get(0),
                z = q.getContext("2d");
            m.find(".tipsDiv").eq(0).show();
            q.width = m.width();
            q.height = m.height();
            var u = "ontouchstart" in window ? true : false,
                x = u ? "touchstart" : "mousedown",
                n = u ? "touchmove" : "mousemove",
                I = u ? "touchend" : "mouseup";
            var E, D, B, A = false;
            var r = parseInt(G.attr("bglinewidth"));
            var v = parseInt(G.css("left")),
                t = parseInt(G.css("top")),
                w = parseInt(G.css("width")),
                H = parseInt(G.css("height"));
            v = isNaN(v) ? 0 : v;
            t = isNaN(t) ? 0 : t;
            w = (w == 0) ? q.width : w;
            H = (H == 0) ? q.height : H;
            var K = new Image();
            K.crossOrigin = "anonymous";
            K.src = G.attr("bgurl");
            K.onload = function() {
                v = Math.abs(v * (K.width / w));
                t = Math.abs(t * (K.height / H));
                w = K.width * (q.width / w);
                H = K.height * (q.height / H);
                z.drawImage(K, v, t, w, H, 0, 0, q.width, q.height);
                F();
                Flyer.speciallEffectsEndCallBack()
            };

            function C(N) { var L = u ? N.targetTouches[0].pageX : N.clientX; var O = u ? N.targetTouches[0].pageY : N.clientY; var M = q.getBoundingClientRect(); return { x: L - M.left, y: O - M.top } }

            function o() { var N = z.getImageData(0, 0, q.width, q.height); var L = 0; for (var M = 0; M < N.data.length; M++) { if (N.data[M] == 0) { L++ } } if (L >= N.data.length * 0.3) { $("#specialEffects").fadeOut(500) } }

            function J(M) {
                m.find(".tips").eq(0).hide();
                var L = C(M);
                D = L.x;
                B = L.y;
                z.save();
                z.beginPath();
                z.moveTo(D, B);
                z.arc(L.x, L.y, r, 0, 2 * Math.PI);
                z.fill();
                z.restore();
                A = true
            }

            function y(M) {
                if (A) {
                    var L = C(M);
                    z.save();
                    z.beginPath();
                    z.moveTo(D, B);
                    z.lineTo(L.x, L.y);
                    z.stroke();
                    z.restore();
                    D = L.x;
                    B = L.y
                }
            }

            function s(L) {
                A = false;
                o()
            }

            function F() {
                z.lineCap = "round";
                z.lineJoin = "round";
                z.lineWidth = r * 2;
                z.globalCompositeOperation = "destination-out";
                q.removeEventListener(x, J);
                q.removeEventListener(n, y);
                q.removeEventListener(I, s);
                q.addEventListener(x, J);
                q.addEventListener(n, y);
                q.addEventListener(I, s)
            }
        };
        return { html: g, callBack: c }
    };
    a.smashWindowParam = function(d) {
        var c = "",
            e = null;
        var f = d.specialEffects.smashWindowParam;
        var b = f.playAudio ? "" : "noPlayAudio";
        c += '<div class="smashWindowParam ' + b + '"><div class="tipsDiv"><div class="tips">ä½¿åŠ²æˆ³æˆ‘<span class="star"></span></div></div><div class="smash smash1"></div><div class="smash smash2"></div><div class="smash smash3"></div><div>';
        e = function() {
            var i = $("#specialEffects").find(".smashWindowParam").eq(0);
            i.find(".tipsDiv").eq(0).show();
            var h = [];
            if (!i.hasClass("noPlayAudio")) {
                h[0] = new Audio();
                h[1] = new Audio();
                h[2] = new Audio();
                h[0].src = Flyer._resRoot + "/image/specialEffects/music/glass_exploding_1.mp3";
                h[1].src = Flyer._resRoot + "/image/specialEffects/music/glass_exploding_2.mp3";
                h[2].src = Flyer._resRoot + "/image/specialEffects/music/glass_exploding_3.mp3"
            }
            var g = "ontouchstart" in window ? true : false,
                j = g ? "touchstart" : "mousedown";
            i.off(j).on(j, function() {
                $(this).find(".tips").eq(0).hide();
                var k = $(this).find(".smashed").length;
                if (k >= 3) { return }
                if (k < 3) {
                    if (!$(this).hasClass("noPlayAudio")) { h[k].play() }
                    $(this).find(".smash").eq(k).addClass("smashed");
                    k++
                }
                if (k == 3) {
                    setTimeout(function() {
                        $("#specialEffects").fadeOut(500);
                        Flyer.speciallEffectsEndCallBack()
                    }, 800)
                }
            })
        };
        return { html: c, callBack: e }
    }
})(Flyer);
(function(a) {
    a.report = function(b) {
        setTimeout(function() {
            if (window.performance) {
                var e = performance.timing;
                if (e) {
                    var m = e.fetchStart - e.navigationStart;
                    var h = e.redirectEnd - e.redirectStart;
                    var j = e.domainLookupStart - e.fetchStart;
                    var n = e.unloadEventEnd - e.unloadEventStart;
                    var c = e.domainLookupEnd - e.domainLookupStart;
                    var f = e.connectEnd - e.connectStart;
                    var g = e.responseEnd - e.requestStart;
                    var o = e.domInteractive - e.responseEnd;
                    var q = e.domComplete - e.domInteractive;
                    var l = e.loadEventEnd - e.loadEventStart;
                    var i = e.loadEventEnd - e.navigationStart;
                    var k = [];
                    k.push("&dt=" + c);
                    k.push("&ct=" + f);
                    k.push("&rt=" + g);
                    k.push("&wt=" + o);
                    k.push("&pt=" + q);
                    var d = "/ajax/flyerstatistics_h.jsp?cmd=report";
                    $.ajax({ url: d, type: "post", cache: false, data: k.join(""), success: function(r) {} })
                }
            }
        }, 1000)
    }
})(Flyer);
(function() {
    Flyer.browserAgent();

    function c() { Flyer._tempLoadingHtml() }
    c();

    function a() {
        Flyer._currentPageeMacEnterAniTime = [];
        var e;
        var f;
        for (var g in Flyer._templateData) {
            e = 0;
            for (var d in Flyer._templateData[g].content) { if (Flyer._templateData[g].content[d].enterEffect) { f = parseFloat(Flyer._templateData[g].content[d].speed) + parseFloat(Flyer._templateData[g].content[d].delay); if (e < f) { e = f } } }
            Flyer._currentPageeMacEnterAniTime.push(e)
        }
    }
    a();

    function b() {
        Flyer._originDataLength = Flyer._templateData.length;
        if ((Flyer._openCommercial && !Flyer.top._isOem) || Flyer._flyerType >= 10) {
            var d = Flyer._templateData[Flyer._templateData.length - 1];
            var e = jQuery.extend({}, d);
            e.templatetype = 99;
            e.openbullet = false;
            e.pageHeight = 1206;
            Flyer._templateData.push(e)
        }
        Flyer._isFirstVisit = Flyer.checkFirstVisit();
        if (Flyer._isFirstVisit) { Flyer.saveIdentifier() }
        Flyer.flyerInit()
    }
    Flyer.preloadVRImage();
    b();
    setTimeout(function() {
        Flyer.statistics();
        Flyer.logSlv(Flyer._slv);
        Flyer.statSlv(Flyer._slv, false);
        Flyer.mergeLog();
        if (oClientWidth == document.documentElement.clientWidth && browserVersion.indexOf("mobile") >= 0) { Flyer.logMetaMsg() }
    }, 2000);
    Flyer.clearDNSTraffic()
})();