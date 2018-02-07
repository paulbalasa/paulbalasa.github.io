/*!
 * beagle v1.2.1-prerelease (http://foxythemes.net/themes/beagle)
 * Copyright 2014-2018 Foxy Themes all rights reserved 
 */
var App = function() {
	"use strict";
	var e = {
			assetsPath: "assets",
			imgPath: "img",
			jsPath: "js",
			libsPath: "lib",
			leftSidebarSlideSpeed: 200,
			leftSidebarToggleSpeed: 300,
			enableSwipe: !0,
			swipeTreshold: 100,
			scrollTop: !0,
			openRightSidebarClass: "open-right-sidebar",
			openLeftSidebarClass: "open-left-sidebar",
			offCanvasLeftSidebarClass: "be-offcanvas-menu",
			toggleLeftSidebarButton: $(".be-toggle-left-sidebar"),
			closeRsOnClickOutside: !0,
			removeLeftSidebarClass: "be-nosidebar-left",
			collapsibleSidebarClass: "be-collapsible-sidebar",
			collapsibleSidebarCollapsedClass: "be-collapsible-sidebar-collapsed",
			openLeftSidebarOnClick: !0,
			transitionClass: "be-animate",
			openSidebarDelay: 400
		},
		t = {},
		i = $("body"),
		a = $(".be-wrapper"),
		n = $(".be-left-sidebar"),
		o = $(".be-right-sidebar"),
		r = !1;

	function l(e) {
		var t = $("<div>", {
				class: e
			}).appendTo("body"),
			i = t.css("background-color");
		return t.remove(), i
	}

	function s() {
		var t = $(".be-scroller", o);

		function a() {
			i.removeClass(e.openRightSidebarClass).addClass(e.transitionClass), c()
		}
		o.length > 0 && ($(".be-toggle-right-sidebar").on("click", function(t) {
			r && i.hasClass(e.openRightSidebarClass) ? a() : r || (i.addClass(e.openRightSidebarClass + " " + e.transitionClass), r = !0), t.preventDefault()
		}), $(document).on("mousedown touchstart", function(t) {
			!$(t.target).closest(o).length && i.hasClass(e.openRightSidebarClass) && (e.closeRsOnClickOutside || $.isXs()) && a()
		})), t.perfectScrollbar(), $(window).resize(function() {
			h(function() {
				t.perfectScrollbar("update")
			}, 500, "be_rs_update_scroller")
		}), $('a[data-toggle="tab"]', o).on("shown.bs.tab", function(e) {
			var t = $(e.target.getAttribute("href")).find(".be-scroller");
			t.length && t.perfectScrollbar("update")
		})
	}

	function c() {
		r = !0, setTimeout(function() {
			r = !1
		}, e.openSidebarDelay)
	}

	function p() {
		var e = $(".be-right-sidebar .tab-chat"),
			t = $(".chat-contacts", e),
			i = $(".chat-window", e),
			a = $(".chat-messages", i),
			n = $(".content ul", a),
			o = $(".be-scroller", a),
			r = $(".chat-input", i),
			l = $("input", r),
			s = $(".send-msg", r);

		function c(e, t) {
			var i = $('<li class="' + (t ? "self" : "friend") + '"></li>');
			"" != e && ($('<div class="msg">' + e + "</div>").appendTo(i), i.appendTo(n), o.stop().animate({
				scrollTop: o.prop("scrollHeight")
			}, 900, "swing"), o.perfectScrollbar("update"))
		}
		$(".user a", t).on("click", function(t) {
			e.hasClass("chat-opened") || e.addClass("chat-opened"), t.preventDefault()
		}), $(".title .return", i).on("click", function(t) {
			e.hasClass("chat-opened") && e.removeClass("chat-opened"), u()
		}), l.keypress(function(e) {
			var t = e.keyCode ? e.keyCode : e.which,
				i = $(this).val();
			"13" == t && (c(i, !0), $(this).val("")), e.stopPropagation()
		}), s.on("click", function() {
			c(l.val(), !0), l.val("")
		})
	}

	function u() {
		$(".be-scroller").perfectScrollbar()
	}
	var d, h = (d = {}, function(e, t, i) {
		i || (i = "x1x2x3x4"), d[i] && clearTimeout(d[i]), d[i] = setTimeout(e, t)
	});
	return {
		conf: e,
		color: t,
		init: function(d) {
			var f;
			$.extend(e, d), FastClick.attach(document.body),
				function() {
					var t, o, l = $(".sidebar-elements > li > a", n),
						s = $(".sidebar-elements li a", n),
						p = $(".left-sidebar-scroll", n),
						u = $(".left-sidebar-toggle", n),
						d = !!e.openLeftSidebarOnClick;

					function f() {
						a.hasClass("be-fixed-sidebar") && p.perfectScrollbar("update")
					}

					function g() {
						return a.hasClass(e.collapsibleSidebarCollapsedClass)
					}

					function m(t, i) {
						var a = $(i.currentTarget),
							o = $(t).parent(),
							r = $("li.open", o),
							l = !a.closest(n).length,
							s = e.leftSidebarSlideSpeed,
							c = a.parents().eq(1).hasClass("sidebar-elements");
						!$.isXs() && g() && (c || l) ? (o.removeClass("open"), t.removeClass("visible"), r.removeClass("open").removeAttr("style")) : t.slideUp({
							duration: s,
							complete: function() {
								o.removeClass("open"), $(this).removeAttr("style"), r.removeClass("open").removeAttr("style"), f()
							}
						})
					}

					function b(t, i) {
						var a = $(t),
							n = $(a).parent(),
							o = $(a).next(),
							r = e.leftSidebarSlideSpeed,
							l = $(i.currentTarget).parents().eq(1).hasClass("sidebar-elements"),
							s = n.siblings(".open");
						if (s && m($("> ul", s), i), !$.isXs() && g() && l) {
							var c = n.find(".be-scroller");
							n.addClass("open"), o.addClass("visible"), c.perfectScrollbar("destroy"), c.perfectScrollbar()
						} else o.slideDown({
							duration: r,
							complete: function() {
								n.addClass("open"), $(this).removeAttr("style"), f()
							}
						})
					}
					a.hasClass(e.collapsibleSidebarClass) && (o = void 0 !== t ? t : $(".sidebar-elements > li", n), $.each(o, function() {
						var e = $(this).find("> a span").html(),
							t = $(this).find("> ul"),
							i = $("> li", t);
						e = $('<li class="title">' + e + "</li>");
						var a = $('<li class="nav-items"><div class="be-scroller"><div class="content"><ul></ul></div></div></li>');
						t.find("> li.title").length || (t.prepend(e), i.appendTo(a.find(".content ul")), a.appendTo(t))
					}), $(".be-toggle-left-sidebar").on("click", function() {
						a.hasClass(e.collapsibleSidebarCollapsedClass) ? (a.removeClass(e.collapsibleSidebarCollapsedClass), $("li.open", n).removeClass("open"), $("li.active", n).parents(".parent").addClass("active open"), $(".be-scroller", n).perfectScrollbar("destroy")) : (a.addClass(e.collapsibleSidebarCollapsedClass), $("li.active", n).parents(".parent").removeClass("open"), $("li.open", n).removeClass("open"))
					}), d || (l.on("mouseover", function(e) {
						g() && b(this, e)
					}), l.on("touchstart", function(e) {
						var t = $(this),
							i = t.parent(),
							a = t.next();
						g() && !$.isXs() && (i.hasClass("open") ? m(a, e) : b(this, e), $(this).next().is("ul") && e.preventDefault())
					}), l.on("mouseleave", function(e) {
						var t = $(this),
							i = t.parent(),
							a = i.find("> ul");
						!$.isXs() && g() && (a.length > 0 ? setTimeout(function() {
							a.is(":hover") ? a.on("mouseleave", function() {
								setTimeout(function() {
									t.is(":hover") || (m(a, e), a.off("mouseleave"))
								}, 300)
							}) : m(a, e)
						}, 300) : i.removeClass("open"))
					})), $(document).on("mousedown touchstart", function(e) {
						$(e.target).closest(n).length || $.isXs() || m($("ul.visible", n), e)
					})), s.on("click", function(e) {
						var t = $(this),
							i = t.parent(),
							a = t.next();
						t.parents().eq(1).hasClass("sidebar-elements"), i.siblings(".open"), i.hasClass("open") ? m(a, e) : b(this, e), t.next().is("ul") && e.preventDefault()
					}), a.hasClass(e.collapsibleSidebarCollapsedClass) ? $("li.active", n).parents(".parent").addClass("active") : $("li.active", n).parents(".parent").addClass("active open"), a.hasClass("be-fixed-sidebar") && ($.isXs() && !a.hasClass(e.offCanvasLeftSidebarClass) || p.perfectScrollbar(), $(window).resize(function() {
						h(function() {
							$.isXs() && !a.hasClass(e.offCanvasLeftSidebarClass) ? p.perfectScrollbar("destroy") : p.hasClass("ps-container") ? p.perfectScrollbar("update") : p.perfectScrollbar()
						}, 500, "be_update_scroller")
					})), u.on("click", function(t) {
						var i = $(this).next(".left-sidebar-spacer");
						$(this).toggleClass("open"), i.slideToggle(e.leftSidebarToggleSpeed, function() {
							$(this).removeAttr("style").toggleClass("open")
						})
					}), a.hasClass(e.offCanvasLeftSidebarClass) && (e.toggleLeftSidebarButton.on("click", function(t) {
						r && i.hasClass(e.openLeftSidebarClass) ? (i.removeClass(e.openLeftSidebarClass), c()) : (i.addClass(e.openLeftSidebarClass + " " + e.transitionClass), r = !0), t.preventDefault()
					}), $(document).on("mousedown touchstart", function(t) {
						$(t.target).closest(n).length || $(t.target).closest(e.toggleLeftSidebarButton).length || !i.hasClass(e.openLeftSidebarClass) || (i.removeClass(e.openLeftSidebarClass), c())
					}))
				}(), s(), p(), e.enableSwipe && a.swipe({
					allowPageScroll: "vertical",
					preventDefaultEvents: !1,
					fallbackToMouseEvents: !1,
					swipeLeft: function(t) {
						!r && o.length > 0 && (i.addClass(e.openRightSidebarClass + " " + e.transitionClass), r = !0)
					},
					threshold: e.swipeTreshold
				}), e.scrollTop && ((f = $('<div class="be-scroll-top"></div>')).appendTo("body"), $(window).on("scroll", function() {
					$(this).scrollTop() > 220 ? f.fadeIn(500) : f.fadeOut(500)
				}), f.on("touchstart mouseup", function(e) {
					$("html, body").animate({
						scrollTop: 0
					}, 500), e.preventDefault()
				})), t.primary = l("clr-primary"), t.success = l("clr-success"), t.warning = l("clr-warning"), t.danger = l("clr-danger"), t.grey = l("clr-grey"), $(".be-connections").on("click", function(e) {
					e.stopPropagation()
				}), u(), $(".dropdown").on("shown.bs.dropdown", function() {
					$(".be-scroller").perfectScrollbar("update")
				}), $(".nav-tabs").on("shown.bs.tab", function(e) {
					$(".be-scroller").perfectScrollbar("update")
				}), $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(".modal").on("show.bs.modal", function() {
					$("html").addClass("be-modal-open")
				}), $(".modal").on("hidden.bs.modal", function() {
					$("html").removeClass("be-modal-open")
				})
		}
	}
}();

function FastClick(e, t) {
	"use strict";
	var i;
	if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(e)) {
		for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, o = a.length; n < o; n++) this[a[n]] = r(this[a[n]], this);
		deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, a) {
			var n = Node.prototype.removeEventListener;
			"click" === t ? n.call(e, t, i.hijacked || i, a) : n.call(e, t, i, a)
		}, e.addEventListener = function(t, i, a) {
			var n = Node.prototype.addEventListener;
			"click" === t ? n.call(e, t, i.hijacked || (i.hijacked = function(e) {
				e.propagationStopped || i(e)
			}), a) : n.call(e, t, i, a)
		}), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function(e) {
			i(e)
		}, !1), e.onclick = null)
	}

	function r(e, t) {
		return function() {
			return e.apply(t, arguments)
		}
	}
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
	deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
	deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
	deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
	deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(e) {
		"use strict";
		switch (e.nodeName.toLowerCase()) {
			case "button":
			case "select":
			case "textarea":
				if (e.disabled) return !0;
				break;
			case "input":
				if (deviceIsIOS && "file" === e.type || e.disabled) return !0;
				break;
			case "label":
			case "video":
				return !0
		}
		return /\bneedsclick\b/.test(e.className)
	}, FastClick.prototype.needsFocus = function(e) {
		"use strict";
		switch (e.nodeName.toLowerCase()) {
			case "textarea":
				return !0;
			case "select":
				return !deviceIsAndroid;
			case "input":
				switch (e.type) {
					case "button":
					case "checkbox":
					case "file":
					case "image":
					case "radio":
					case "submit":
						return !1
				}
				return !e.disabled && !e.readOnly;
			default:
				return /\bneedsfocus\b/.test(e.className)
		}
	}, FastClick.prototype.sendClick = function(e, t) {
		"use strict";
		var i, a, n, o;
		document.activeElement && document.activeElement !== e && document.activeElement.blur(), o = t.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent("mousedown", !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n), (a = document.createEvent("MouseEvents")).initMouseEvent("mouseup", !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), a.forwardedTouchEvent = !0, e.dispatchEvent(a), (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
	}, FastClick.prototype.determineEventType = function(e) {
		"use strict";
		return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
	}, FastClick.prototype.focus = function(e) {
		"use strict";
		var t;
		deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
	}, FastClick.prototype.updateScrollParent = function(e) {
		"use strict";
		var t, i;
		if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
			i = e;
			do {
				if (i.scrollHeight > i.offsetHeight) {
					t = i, e.fastClickScrollParent = i;
					break
				}
				i = i.parentElement
			} while (i)
		}
		t && (t.fastClickLastScrollTop = t.scrollTop)
	}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
		"use strict";
		return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
	}, FastClick.prototype.onTouchStart = function(e) {
		"use strict";
		var t, i, a;
		if (e.targetTouches.length > 1) return !0;
		if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], deviceIsIOS) {
			if ((a = window.getSelection()).rangeCount && !a.isCollapsed) return !0;
			if (!deviceIsIOS4) {
				if (i.identifier && i.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
				this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
	}, FastClick.prototype.touchHasMoved = function(e) {
		"use strict";
		var t = e.changedTouches[0],
			i = this.touchBoundary;
		return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
	}, FastClick.prototype.onTouchMove = function(e) {
		"use strict";
		return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
	}, FastClick.prototype.findControl = function(e) {
		"use strict";
		return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, FastClick.prototype.onTouchEnd = function(e) {
		"use strict";
		var t, i, a, n, o, r = this.targetElement;
		if (!this.trackingClick) return !0;
		if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
		if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (o = e.changedTouches[0], (r = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = r.tagName.toLowerCase())) {
			if (t = this.findControl(r)) {
				if (this.focus(r), deviceIsAndroid) return !1;
				r = t
			}
		} else if (this.needsFocus(r)) return e.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(r), this.sendClick(r, e), deviceIsIOS && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
		return !(!deviceIsIOS || deviceIsIOS4 || !(n = r.fastClickScrollParent) || n.fastClickLastScrollTop === n.scrollTop) || (this.needsClick(r) || (e.preventDefault(), this.sendClick(r, e)), !1)
	}, FastClick.prototype.onTouchCancel = function() {
		"use strict";
		this.trackingClick = !1, this.targetElement = null
	}, FastClick.prototype.onMouse = function(e) {
		"use strict";
		return !(this.targetElement && !e.forwardedTouchEvent && e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), 1))
	}, FastClick.prototype.onClick = function(e) {
		"use strict";
		var t;
		return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), t)
	}, FastClick.prototype.destroy = function() {
		"use strict";
		var e = this.layer;
		deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, FastClick.notNeeded = function(e) {
		"use strict";
		var t, i, a;
		if (void 0 === window.ontouchstart) return !0;
		if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!deviceIsAndroid) return !0;
			if (t = document.querySelector("meta[name=viewport]")) {
				if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
				if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
		}
		if (deviceIsBlackBerry10 && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && a[2] >= 3 && (t = document.querySelector("meta[name=viewport]"))) {
			if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
			if (document.documentElement.scrollWidth <= window.outerWidth) return !0
		}
		return "none" === e.style.msTouchAction
	}, FastClick.attach = function(e, t) {
		"use strict";
		return new FastClick(e, t)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		"use strict";
		return FastClick
	}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
	function() {
		function e(t, i) {
			if (t = t || "", i = i || {}, t instanceof e) return t;
			if (!(this instanceof e)) return new e(t, i);
			var a, n, o, r, l, s, c, p, u = (n = {
				r: 0,
				g: 0,
				b: 0
			}, o = 1, r = !1, l = !1, "string" == typeof(a = t) && (a = function(e) {
				e = e.replace(A, "").replace(x, "").toLowerCase();
				var t, i, a = !1;
				if (O[e]) e = O[e], a = !0;
				else if ("transparent" == e) return {
					r: 0,
					g: 0,
					b: 0,
					a: 0,
					format: "name"
				};
				return (t = R.rgb.exec(e)) ? {
					r: t[1],
					g: t[2],
					b: t[3]
				} : (t = R.rgba.exec(e)) ? {
					r: t[1],
					g: t[2],
					b: t[3],
					a: t[4]
				} : (t = R.hsl.exec(e)) ? {
					h: t[1],
					s: t[2],
					l: t[3]
				} : (t = R.hsla.exec(e)) ? {
					h: t[1],
					s: t[2],
					l: t[3],
					a: t[4]
				} : (t = R.hsv.exec(e)) ? {
					h: t[1],
					s: t[2],
					v: t[3]
				} : (t = R.hsva.exec(e)) ? {
					h: t[1],
					s: t[2],
					v: t[3],
					a: t[4]
				} : (t = R.hex8.exec(e)) ? {
					a: (i = t[1], w(i) / 255),
					r: w(t[2]),
					g: w(t[3]),
					b: w(t[4]),
					format: a ? "name" : "hex8"
				} : (t = R.hex6.exec(e)) ? {
					r: w(t[1]),
					g: w(t[2]),
					b: w(t[3]),
					format: a ? "name" : "hex"
				} : !!(t = R.hex3.exec(e)) && {
					r: w(t[1] + "" + t[1]),
					g: w(t[2] + "" + t[2]),
					b: w(t[3] + "" + t[3]),
					format: a ? "name" : "hex"
				}
			}(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (s = a.r, c = a.g, p = a.b, n = {
				r: 255 * k(s, 255),
				g: 255 * k(c, 255),
				b: 255 * k(p, 255)
			}, r = !0, l = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (a.s = C(a.s), a.v = C(a.v), n = function(e, t, i) {
				e = 6 * k(e, 360), t = k(t, 100), i = k(i, 100);
				var a = T.floor(e),
					n = e - a,
					o = i * (1 - t),
					r = i * (1 - n * t),
					l = i * (1 - (1 - n) * t),
					s = a % 6;
				return {
					r: 255 * [i, r, o, o, l, i][s],
					g: 255 * [l, i, i, r, o, o][s],
					b: 255 * [o, o, l, i, i, r][s]
				}
			}(a.h, a.s, a.v), r = !0, l = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (a.s = C(a.s), a.l = C(a.l), n = function(e, t, i) {
				function a(e, t, i) {
					return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + 6 * (t - e) * (2 / 3 - i) : e
				}
				var n, o, r;
				if (e = k(e, 360), t = k(t, 100), i = k(i, 100), 0 === t) n = o = r = i;
				else {
					var l = .5 > i ? i * (1 + t) : i + t - i * t,
						s = 2 * i - l;
					n = a(s, l, e + 1 / 3), o = a(s, l, e), r = a(s, l, e - 1 / 3)
				}
				return {
					r: 255 * n,
					g: 255 * o,
					b: 255 * r
				}
			}(a.h, a.s, a.l), r = !0, l = "hsl"), a.hasOwnProperty("a") && (o = a.a)), o = v(o), {
				ok: r,
				format: a.format || l,
				r: M(255, E(n.r, 0)),
				g: M(255, E(n.g, 0)),
				b: M(255, E(n.b, 0)),
				a: o
			});
			this._originalInput = t, this._r = u.r, this._g = u.g, this._b = u.b, this._a = u.a, this._roundA = _(100 * this._a) / 100, this._format = i.format || u.format, this._gradientType = i.gradientType, this._r < 1 && (this._r = _(this._r)), this._g < 1 && (this._g = _(this._g)), this._b < 1 && (this._b = _(this._b)), this._ok = u.ok, this._tc_id = S++
		}

		function t(e, t, i) {
			e = k(e, 255), t = k(t, 255), i = k(i, 255);
			var a, n, o = E(e, t, i),
				r = M(e, t, i),
				l = (o + r) / 2;
			if (o == r) a = n = 0;
			else {
				var s = o - r;
				switch (n = l > .5 ? s / (2 - o - r) : s / (o + r), o) {
					case e:
						a = (t - i) / s + (i > t ? 6 : 0);
						break;
					case t:
						a = (i - e) / s + 2;
						break;
					case i:
						a = (e - t) / s + 4
				}
				a /= 6
			}
			return {
				h: a,
				s: n,
				l: l
			}
		}

		function i(e, t, i) {
			e = k(e, 255), t = k(t, 255), i = k(i, 255);
			var a, n, o = E(e, t, i),
				r = M(e, t, i),
				l = o,
				s = o - r;
			if (n = 0 === o ? 0 : s / o, o == r) a = 0;
			else {
				switch (o) {
					case e:
						a = (t - i) / s + (i > t ? 6 : 0);
						break;
					case t:
						a = (i - e) / s + 2;
						break;
					case i:
						a = (e - t) / s + 4
				}
				a /= 6
			}
			return {
				h: a,
				s: n,
				v: l
			}
		}

		function a(e, t, i, a) {
			var n = [$(_(e).toString(16)), $(_(t).toString(16)), $(_(i).toString(16))];
			return a && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
		}

		function n(e, t, i, a) {
			var n;
			return [$((n = a, Math.round(255 * parseFloat(n)).toString(16))), $(_(e).toString(16)), $(_(t).toString(16)), $(_(i).toString(16))].join("")
		}

		function o(t, i) {
			i = 0 === i ? 0 : i || 10;
			var a = e(t).toHsl();
			return a.s -= i / 100, a.s = y(a.s), e(a)
		}

		function r(t, i) {
			i = 0 === i ? 0 : i || 10;
			var a = e(t).toHsl();
			return a.s += i / 100, a.s = y(a.s), e(a)
		}

		function l(t) {
			return e(t).desaturate(100)
		}

		function s(t, i) {
			i = 0 === i ? 0 : i || 10;
			var a = e(t).toHsl();
			return a.l += i / 100, a.l = y(a.l), e(a)
		}

		function c(t, i) {
			i = 0 === i ? 0 : i || 10;
			var a = e(t).toRgb();
			return a.r = E(0, M(255, a.r - _(-i / 100 * 255))), a.g = E(0, M(255, a.g - _(-i / 100 * 255))), a.b = E(0, M(255, a.b - _(-i / 100 * 255))), e(a)
		}

		function p(t, i) {
			i = 0 === i ? 0 : i || 10;
			var a = e(t).toHsl();
			return a.l -= i / 100, a.l = y(a.l), e(a)
		}

		function u(t, i) {
			var a = e(t).toHsl(),
				n = (_(a.h) + i) % 360;
			return a.h = 0 > n ? 360 + n : n, e(a)
		}

		function d(t) {
			var i = e(t).toHsl();
			return i.h = (i.h + 180) % 360, e(i)
		}

		function h(t) {
			var i = e(t).toHsl(),
				a = i.h;
			return [e(t), e({
				h: (a + 120) % 360,
				s: i.s,
				l: i.l
			}), e({
				h: (a + 240) % 360,
				s: i.s,
				l: i.l
			})]
		}

		function f(t) {
			var i = e(t).toHsl(),
				a = i.h;
			return [e(t), e({
				h: (a + 90) % 360,
				s: i.s,
				l: i.l
			}), e({
				h: (a + 180) % 360,
				s: i.s,
				l: i.l
			}), e({
				h: (a + 270) % 360,
				s: i.s,
				l: i.l
			})]
		}

		function g(t) {
			var i = e(t).toHsl(),
				a = i.h;
			return [e(t), e({
				h: (a + 72) % 360,
				s: i.s,
				l: i.l
			}), e({
				h: (a + 216) % 360,
				s: i.s,
				l: i.l
			})]
		}

		function m(t, i, a) {
			i = i || 6, a = a || 30;
			var n = e(t).toHsl(),
				o = 360 / a,
				r = [e(t)];
			for (n.h = (n.h - (o * i >> 1) + 720) % 360; --i;) n.h = (n.h + o) % 360, r.push(e(n));
			return r
		}

		function b(t, i) {
			i = i || 6;
			for (var a = e(t).toHsv(), n = a.h, o = a.s, r = a.v, l = [], s = 1 / i; i--;) l.push(e({
				h: n,
				s: o,
				v: r
			})), r = (r + s) % 1;
			return l
		}

		function v(e) {
			return e = parseFloat(e), (isNaN(e) || 0 > e || e > 1) && (e = 1), e
		}

		function k(e, t) {
			var i;
			"string" == typeof(i = e) && -1 != i.indexOf(".") && 1 === parseFloat(i) && (e = "100%");
			var a, n = "string" == typeof(a = e) && -1 != a.indexOf("%");
			return e = M(t, E(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), T.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
		}

		function y(e) {
			return M(1, E(0, e))
		}

		function w(e) {
			return parseInt(e, 16)
		}

		function $(e) {
			return 1 == e.length ? "0" + e : "" + e
		}

		function C(e) {
			return 1 >= e && (e = 100 * e + "%"), e
		}
		var A = /^[\s,#]+/,
			x = /\s+$/,
			S = 0,
			T = Math,
			_ = T.round,
			M = T.min,
			E = T.max,
			P = T.random;
		e.prototype = {
			isDark: function() {
				return this.getBrightness() < 128
			},
			isLight: function() {
				return !this.isDark()
			},
			isValid: function() {
				return this._ok
			},
			getOriginalInput: function() {
				return this._originalInput
			},
			getFormat: function() {
				return this._format
			},
			getAlpha: function() {
				return this._a
			},
			getBrightness: function() {
				var e = this.toRgb();
				return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
			},
			getLuminance: function() {
				var e, t, i, a = this.toRgb();
				return e = a.r / 255, t = a.g / 255, i = a.b / 255, .2126 * (.03928 >= e ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (.03928 >= t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (.03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4))
			},
			setAlpha: function(e) {
				return this._a = v(e), this._roundA = _(100 * this._a) / 100, this
			},
			toHsv: function() {
				var e = i(this._r, this._g, this._b);
				return {
					h: 360 * e.h,
					s: e.s,
					v: e.v,
					a: this._a
				}
			},
			toHsvString: function() {
				var e = i(this._r, this._g, this._b),
					t = _(360 * e.h),
					a = _(100 * e.s),
					n = _(100 * e.v);
				return 1 == this._a ? "hsv(" + t + ", " + a + "%, " + n + "%)" : "hsva(" + t + ", " + a + "%, " + n + "%, " + this._roundA + ")"
			},
			toHsl: function() {
				var e = t(this._r, this._g, this._b);
				return {
					h: 360 * e.h,
					s: e.s,
					l: e.l,
					a: this._a
				}
			},
			toHslString: function() {
				var e = t(this._r, this._g, this._b),
					i = _(360 * e.h),
					a = _(100 * e.s),
					n = _(100 * e.l);
				return 1 == this._a ? "hsl(" + i + ", " + a + "%, " + n + "%)" : "hsla(" + i + ", " + a + "%, " + n + "%, " + this._roundA + ")"
			},
			toHex: function(e) {
				return a(this._r, this._g, this._b, e)
			},
			toHexString: function(e) {
				return "#" + this.toHex(e)
			},
			toHex8: function() {
				return n(this._r, this._g, this._b, this._a)
			},
			toHex8String: function() {
				return "#" + this.toHex8()
			},
			toRgb: function() {
				return {
					r: _(this._r),
					g: _(this._g),
					b: _(this._b),
					a: this._a
				}
			},
			toRgbString: function() {
				return 1 == this._a ? "rgb(" + _(this._r) + ", " + _(this._g) + ", " + _(this._b) + ")" : "rgba(" + _(this._r) + ", " + _(this._g) + ", " + _(this._b) + ", " + this._roundA + ")"
			},
			toPercentageRgb: function() {
				return {
					r: _(100 * k(this._r, 255)) + "%",
					g: _(100 * k(this._g, 255)) + "%",
					b: _(100 * k(this._b, 255)) + "%",
					a: this._a
				}
			},
			toPercentageRgbString: function() {
				return 1 == this._a ? "rgb(" + _(100 * k(this._r, 255)) + "%, " + _(100 * k(this._g, 255)) + "%, " + _(100 * k(this._b, 255)) + "%)" : "rgba(" + _(100 * k(this._r, 255)) + "%, " + _(100 * k(this._g, 255)) + "%, " + _(100 * k(this._b, 255)) + "%, " + this._roundA + ")"
			},
			toName: function() {
				return 0 === this._a ? "transparent" : !(this._a < 1) && (F[a(this._r, this._g, this._b, !0)] || !1)
			},
			toFilter: function(t) {
				var i = "#" + n(this._r, this._g, this._b, this._a),
					a = i,
					o = this._gradientType ? "GradientType = 1, " : "";
				t && (a = e(t).toHex8String());
				return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + i + ",endColorstr=" + a + ")"
			},
			toString: function(e) {
				var t = !!e;
				e = e || this._format;
				var i = !1,
					a = this._a < 1 && this._a >= 0;
				return !t && a && ("hex" === e || "hex6" === e || "hex3" === e || "name" === e) ? "name" === e && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === e && (i = this.toRgbString()), "prgb" === e && (i = this.toPercentageRgbString()), ("hex" === e || "hex6" === e) && (i = this.toHexString()), "hex3" === e && (i = this.toHexString(!0)), "hex8" === e && (i = this.toHex8String()), "name" === e && (i = this.toName()), "hsl" === e && (i = this.toHslString()), "hsv" === e && (i = this.toHsvString()), i || this.toHexString())
			},
			_applyModification: function(e, t) {
				var i = e.apply(null, [this].concat([].slice.call(t)));
				return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this
			},
			lighten: function() {
				return this._applyModification(s, arguments)
			},
			brighten: function() {
				return this._applyModification(c, arguments)
			},
			darken: function() {
				return this._applyModification(p, arguments)
			},
			desaturate: function() {
				return this._applyModification(o, arguments)
			},
			saturate: function() {
				return this._applyModification(r, arguments)
			},
			greyscale: function() {
				return this._applyModification(l, arguments)
			},
			spin: function() {
				return this._applyModification(u, arguments)
			},
			_applyCombination: function(e, t) {
				return e.apply(null, [this].concat([].slice.call(t)))
			},
			analogous: function() {
				return this._applyCombination(m, arguments)
			},
			complement: function() {
				return this._applyCombination(d, arguments)
			},
			monochromatic: function() {
				return this._applyCombination(b, arguments)
			},
			splitcomplement: function() {
				return this._applyCombination(g, arguments)
			},
			triad: function() {
				return this._applyCombination(h, arguments)
			},
			tetrad: function() {
				return this._applyCombination(f, arguments)
			}
		}, e.fromRatio = function(t, i) {
			if ("object" == typeof t) {
				var a = {};
				for (var n in t) t.hasOwnProperty(n) && (a[n] = "a" === n ? t[n] : C(t[n]));
				t = a
			}
			return e(t, i)
		}, e.equals = function(t, i) {
			return !(!t || !i) && e(t).toRgbString() == e(i).toRgbString()
		}, e.random = function() {
			return e.fromRatio({
				r: P(),
				g: P(),
				b: P()
			})
		}, e.mix = function(t, i, a) {
			a = 0 === a ? 0 : a || 50;
			var n, o = e(t).toRgb(),
				r = e(i).toRgb(),
				l = a / 100,
				s = 2 * l - 1,
				c = r.a - o.a,
				p = 1 - (n = ((n = -1 == s * c ? s : (s + c) / (1 + s * c)) + 1) / 2);
			return e({
				r: r.r * n + o.r * p,
				g: r.g * n + o.g * p,
				b: r.b * n + o.b * p,
				a: r.a * l + o.a * (1 - l)
			})
		}, e.readability = function(t, i) {
			var a = e(t),
				n = e(i);
			return (Math.max(a.getLuminance(), n.getLuminance()) + .05) / (Math.min(a.getLuminance(), n.getLuminance()) + .05)
		}, e.isReadable = function(t, i, a) {
			var n, o, r, l, s, c = e.readability(t, i);
			switch (o = !1, l = ((r = (r = a) || {
				level: "AA",
				size: "small"
			}).level || "AA").toUpperCase(), s = (r.size || "small").toLowerCase(), "AA" !== l && "AAA" !== l && (l = "AA"), "small" !== s && "large" !== s && (s = "small"), (n = {
				level: l,
				size: s
			}).level + n.size) {
				case "AAsmall":
				case "AAAlarge":
					o = c >= 4.5;
					break;
				case "AAlarge":
					o = c >= 3;
					break;
				case "AAAsmall":
					o = c >= 7
			}
			return o
		}, e.mostReadable = function(t, i, a) {
			var n, o, r, l, s = null,
				c = 0;
			o = (a = a || {}).includeFallbackColors, r = a.level, l = a.size;
			for (var p = 0; p < i.length; p++) n = e.readability(t, i[p]), n > c && (c = n, s = e(i[p]));
			return e.isReadable(t, s, {
				level: r,
				size: l
			}) || !o ? s : (a.includeFallbackColors = !1, e.mostReadable(t, ["#fff", "#000"], a))
		};
		var L, I, D, O = e.names = {
				aliceblue: "f0f8ff",
				antiquewhite: "faebd7",
				aqua: "0ff",
				aquamarine: "7fffd4",
				azure: "f0ffff",
				beige: "f5f5dc",
				bisque: "ffe4c4",
				black: "000",
				blanchedalmond: "ffebcd",
				blue: "00f",
				blueviolet: "8a2be2",
				brown: "a52a2a",
				burlywood: "deb887",
				burntsienna: "ea7e5d",
				cadetblue: "5f9ea0",
				chartreuse: "7fff00",
				chocolate: "d2691e",
				coral: "ff7f50",
				cornflowerblue: "6495ed",
				cornsilk: "fff8dc",
				crimson: "dc143c",
				cyan: "0ff",
				darkblue: "00008b",
				darkcyan: "008b8b",
				darkgoldenrod: "b8860b",
				darkgray: "a9a9a9",
				darkgreen: "006400",
				darkgrey: "a9a9a9",
				darkkhaki: "bdb76b",
				darkmagenta: "8b008b",
				darkolivegreen: "556b2f",
				darkorange: "ff8c00",
				darkorchid: "9932cc",
				darkred: "8b0000",
				darksalmon: "e9967a",
				darkseagreen: "8fbc8f",
				darkslateblue: "483d8b",
				darkslategray: "2f4f4f",
				darkslategrey: "2f4f4f",
				darkturquoise: "00ced1",
				darkviolet: "9400d3",
				deeppink: "ff1493",
				deepskyblue: "00bfff",
				dimgray: "696969",
				dimgrey: "696969",
				dodgerblue: "1e90ff",
				firebrick: "b22222",
				floralwhite: "fffaf0",
				forestgreen: "228b22",
				fuchsia: "f0f",
				gainsboro: "dcdcdc",
				ghostwhite: "f8f8ff",
				gold: "ffd700",
				goldenrod: "daa520",
				gray: "808080",
				green: "008000",
				greenyellow: "adff2f",
				grey: "808080",
				honeydew: "f0fff0",
				hotpink: "ff69b4",
				indianred: "cd5c5c",
				indigo: "4b0082",
				ivory: "fffff0",
				khaki: "f0e68c",
				lavender: "e6e6fa",
				lavenderblush: "fff0f5",
				lawngreen: "7cfc00",
				lemonchiffon: "fffacd",
				lightblue: "add8e6",
				lightcoral: "f08080",
				lightcyan: "e0ffff",
				lightgoldenrodyellow: "fafad2",
				lightgray: "d3d3d3",
				lightgreen: "90ee90",
				lightgrey: "d3d3d3",
				lightpink: "ffb6c1",
				lightsalmon: "ffa07a",
				lightseagreen: "20b2aa",
				lightskyblue: "87cefa",
				lightslategray: "789",
				lightslategrey: "789",
				lightsteelblue: "b0c4de",
				lightyellow: "ffffe0",
				lime: "0f0",
				limegreen: "32cd32",
				linen: "faf0e6",
				magenta: "f0f",
				maroon: "800000",
				mediumaquamarine: "66cdaa",
				mediumblue: "0000cd",
				mediumorchid: "ba55d3",
				mediumpurple: "9370db",
				mediumseagreen: "3cb371",
				mediumslateblue: "7b68ee",
				mediumspringgreen: "00fa9a",
				mediumturquoise: "48d1cc",
				mediumvioletred: "c71585",
				midnightblue: "191970",
				mintcream: "f5fffa",
				mistyrose: "ffe4e1",
				moccasin: "ffe4b5",
				navajowhite: "ffdead",
				navy: "000080",
				oldlace: "fdf5e6",
				olive: "808000",
				olivedrab: "6b8e23",
				orange: "ffa500",
				orangered: "ff4500",
				orchid: "da70d6",
				palegoldenrod: "eee8aa",
				palegreen: "98fb98",
				paleturquoise: "afeeee",
				palevioletred: "db7093",
				papayawhip: "ffefd5",
				peachpuff: "ffdab9",
				peru: "cd853f",
				pink: "ffc0cb",
				plum: "dda0dd",
				powderblue: "b0e0e6",
				purple: "800080",
				rebeccapurple: "663399",
				red: "f00",
				rosybrown: "bc8f8f",
				royalblue: "4169e1",
				saddlebrown: "8b4513",
				salmon: "fa8072",
				sandybrown: "f4a460",
				seagreen: "2e8b57",
				seashell: "fff5ee",
				sienna: "a0522d",
				silver: "c0c0c0",
				skyblue: "87ceeb",
				slateblue: "6a5acd",
				slategray: "708090",
				slategrey: "708090",
				snow: "fffafa",
				springgreen: "00ff7f",
				steelblue: "4682b4",
				tan: "d2b48c",
				teal: "008080",
				thistle: "d8bfd8",
				tomato: "ff6347",
				turquoise: "40e0d0",
				violet: "ee82ee",
				wheat: "f5deb3",
				white: "fff",
				whitesmoke: "f5f5f5",
				yellow: "ff0",
				yellowgreen: "9acd32"
			},
			F = e.hexNames = function(e) {
				var t = {};
				for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
				return t
			}(O),
			R = (I = "[\\s|\\(]+(" + (L = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")\\s*\\)?", D = "[\\s|\\(]+(" + L + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")\\s*\\)?", {
				rgb: new RegExp("rgb" + I),
				rgba: new RegExp("rgba" + D),
				hsl: new RegExp("hsl" + I),
				hsla: new RegExp("hsla" + D),
				hsv: new RegExp("hsv" + I),
				hsva: new RegExp("hsva" + D),
				hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			});
		"undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
			return e
		}) : window.tinycolor = e
	}(),
	function(e) {
		"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
	}(function(e) {
		"use strict";

		function t(t) {
			return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = s), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
				var T = e(this),
					_ = T.data(S);
				_ || (_ = new function(t, T) {
					function _(t) {
						if (!(!0 === $e.data(S + "_intouch") || e(t.target).closest(T.excludedElements, $e).length > 0)) {
							var r = t.originalEvent ? t.originalEvent : t;
							if (!r.pointerType || "mouse" != r.pointerType || 0 != T.fallbackToMouseEvents) {
								var l, s = r.touches,
									c = s ? s[0] : r;
								return Ce = k, s ? Ae = s.length : !1 !== T.preventDefaultEvents && t.preventDefault(), de = 0, he = null, fe = null, ye = null, ge = 0, me = 0, be = 0, ve = 1, ke = 0, (p = {})[i] = te(i), p[a] = te(a), p[n] = te(n), p[o] = te(o), we = p, V(), K(0, c), !s || Ae === T.fingers || T.fingers === b || B() ? (Se = oe(), 2 == Ae && (K(1, s[1]), me = be = ae(xe[0].start, xe[1].start)), (T.swipeStatus || T.pinchStatus) && (l = O(r, Ce))) : l = !1, !1 === l ? (O(r, Ce = $), l) : (T.hold && (Le = setTimeout(e.proxy(function() {
									$e.trigger("hold", [r.target]), T.hold && (l = T.hold.call($e, r, r.target))
								}, this), T.longTapThreshold)), J(!0), null)
							}
						}
						var p
					}

					function M(t) {
						var p, u, d, h, f, v, k, C, A = t.originalEvent ? t.originalEvent : t;
						if (Ce !== w && Ce !== $ && !Q()) {
							var x, S = A.touches,
								_ = S ? S[0] : A,
								M = Z(_);
							if (Te = oe(), S && (Ae = S.length), T.hold && clearTimeout(Le), Ce = y, 2 == Ae && (0 == me ? (K(1, S[1]), me = be = ae(xe[0].start, xe[1].start)) : (Z(S[1]), be = ae(xe[0].end, xe[1].end), xe[0].end, xe[1].end, ye = 1 > ve ? l : r), ve = (be / me * 1).toFixed(2), ke = Math.abs(me - be)), Ae === T.fingers || T.fingers === b || !S || B()) {
								if (he = ne(M.start, M.end), fe = ne(M.last, M.end), function(e, t) {
										if (!1 !== T.preventDefaultEvents)
											if (T.allowPageScroll === s) e.preventDefault();
											else {
												var r = T.allowPageScroll === c;
												switch (t) {
													case i:
														(T.swipeLeft && r || !r && T.allowPageScroll != g) && e.preventDefault();
														break;
													case a:
														(T.swipeRight && r || !r && T.allowPageScroll != g) && e.preventDefault();
														break;
													case n:
														(T.swipeUp && r || !r && T.allowPageScroll != m) && e.preventDefault();
														break;
													case o:
														(T.swipeDown && r || !r && T.allowPageScroll != m) && e.preventDefault()
												}
											}
									}(t, fe), k = M.start, C = M.end, de = Math.round(Math.sqrt(Math.pow(C.x - k.x, 2) + Math.pow(C.y - k.y, 2))), ge = ie(), v = de, (f = he) != s && (v = Math.max(v, ee(f)), we[f].distance = v), x = O(A, Ce), !T.triggerOnTouchEnd || T.triggerOnTouchLeave) {
									var E = !0;
									if (T.triggerOnTouchLeave) {
										var P = {
											left: (h = (d = e(d = this)).offset()).left,
											right: h.left + d.outerWidth(),
											top: h.top,
											bottom: h.top + d.outerHeight()
										};
										p = M.end, u = P, E = p.x > u.left && p.x < u.right && p.y > u.top && p.y < u.bottom
									}!T.triggerOnTouchEnd && E ? Ce = D(y) : T.triggerOnTouchLeave && !E && (Ce = D(w)), Ce != $ && Ce != w || O(A, Ce)
								}
							} else Ce = $, O(A, Ce);
							!1 === x && O(A, Ce = $)
						}
					}

					function E(e) {
						var t, i = e.originalEvent ? e.originalEvent : e,
							a = i.touches;
						if (a) {
							if (a.length && !Q()) return t = i, _e = oe(), Me = t.touches.length + 1, !0;
							if (a.length && Q()) return !0
						}
						return Q() && (Ae = Me), Te = oe(), ge = ie(), H() || !R() ? O(i, Ce = $) : T.triggerOnTouchEnd || !1 === T.triggerOnTouchEnd && Ce === y ? (!1 !== T.preventDefaultEvents && e.preventDefault(), O(i, Ce = w)) : !T.triggerOnTouchEnd && j() ? F(i, Ce = w, d) : Ce === y && O(i, Ce = $), J(!1), null
					}

					function P() {
						Ae = 0, Te = 0, Se = 0, me = 0, be = 0, ve = 1, V(), J(!1)
					}

					function L(e) {
						var t = e.originalEvent ? e.originalEvent : e;
						T.triggerOnTouchLeave && (Ce = D(w), O(t, Ce))
					}

					function I() {
						$e.unbind(le, _), $e.unbind(ue, P), $e.unbind(se, M), $e.unbind(ce, E), pe && $e.unbind(pe, L), J(!1)
					}

					function D(e) {
						var t = e,
							i = Y(),
							a = R(),
							n = H();
						return !i || n ? t = $ : !a || e != y || T.triggerOnTouchEnd && !T.triggerOnTouchLeave ? !a && e == w && T.triggerOnTouchLeave && (t = $) : t = w, t
					}

					function O(e, t) {
						var i, a = e.touches;
						return (!(!W() || !z()) || z()) && (i = F(e, t, p)), (!(!N() || !B()) || B()) && !1 !== i && (i = F(e, t, u)), U() && G() && !1 !== i ? i = F(e, t, h) : ge > T.longTapThreshold && v > de && T.longTap && !1 !== i ? i = F(e, t, f) : !(1 !== Ae && C || !(isNaN(de) || de < T.threshold) || !j()) && !1 !== i && (i = F(e, t, d)), t === $ && P(), t === w && (a ? a.length || P() : P()), i
					}

					function F(t, s, c) {
						var g;
						if (c == p) {
							if ($e.trigger("swipeStatus", [s, he || null, de || 0, ge || 0, Ae, xe, fe]), T.swipeStatus && !1 === (g = T.swipeStatus.call($e, t, s, he || null, de || 0, ge || 0, Ae, xe, fe))) return !1;
							if (s == w && W()) {
								if (clearTimeout(Pe), clearTimeout(Le), $e.trigger("swipe", [he, de, ge, Ae, xe, fe]), T.swipe && !1 === (g = T.swipe.call($e, t, he, de, ge, Ae, xe, fe))) return !1;
								switch (he) {
									case i:
										$e.trigger("swipeLeft", [he, de, ge, Ae, xe, fe]), T.swipeLeft && (g = T.swipeLeft.call($e, t, he, de, ge, Ae, xe, fe));
										break;
									case a:
										$e.trigger("swipeRight", [he, de, ge, Ae, xe, fe]), T.swipeRight && (g = T.swipeRight.call($e, t, he, de, ge, Ae, xe, fe));
										break;
									case n:
										$e.trigger("swipeUp", [he, de, ge, Ae, xe, fe]), T.swipeUp && (g = T.swipeUp.call($e, t, he, de, ge, Ae, xe, fe));
										break;
									case o:
										$e.trigger("swipeDown", [he, de, ge, Ae, xe, fe]), T.swipeDown && (g = T.swipeDown.call($e, t, he, de, ge, Ae, xe, fe))
								}
							}
						}
						if (c == u) {
							if ($e.trigger("pinchStatus", [s, ye || null, ke || 0, ge || 0, Ae, ve, xe]), T.pinchStatus && !1 === (g = T.pinchStatus.call($e, t, s, ye || null, ke || 0, ge || 0, Ae, ve, xe))) return !1;
							if (s == w && N()) switch (ye) {
								case r:
									$e.trigger("pinchIn", [ye || null, ke || 0, ge || 0, Ae, ve, xe]), T.pinchIn && (g = T.pinchIn.call($e, t, ye || null, ke || 0, ge || 0, Ae, ve, xe));
									break;
								case l:
									$e.trigger("pinchOut", [ye || null, ke || 0, ge || 0, Ae, ve, xe]), T.pinchOut && (g = T.pinchOut.call($e, t, ye || null, ke || 0, ge || 0, Ae, ve, xe))
							}
						}
						return c == d ? s !== $ && s !== w || (clearTimeout(Pe), clearTimeout(Le), G() && !U() ? (Ee = oe(), Pe = setTimeout(e.proxy(function() {
							Ee = null, $e.trigger("tap", [t.target]), T.tap && (g = T.tap.call($e, t, t.target))
						}, this), T.doubleTapThreshold)) : (Ee = null, $e.trigger("tap", [t.target]), T.tap && (g = T.tap.call($e, t, t.target)))) : c == h ? s !== $ && s !== w || (clearTimeout(Pe), clearTimeout(Le), Ee = null, $e.trigger("doubletap", [t.target]), T.doubleTap && (g = T.doubleTap.call($e, t, t.target))) : c == f && (s !== $ && s !== w || (clearTimeout(Pe), Ee = null, $e.trigger("longtap", [t.target]), T.longTap && (g = T.longTap.call($e, t, t.target)))), g
					}

					function R() {
						var e = !0;
						return null !== T.threshold && (e = de >= T.threshold), e
					}

					function H() {
						var e = !1;
						return null !== T.cancelThreshold && null !== he && (e = ee(he) - de >= T.cancelThreshold), e
					}

					function Y() {
						return !T.maxTimeThreshold || !(ge >= T.maxTimeThreshold)
					}

					function N() {
						var e = q(),
							t = X(),
							i = null === T.pinchThreshold || ke >= T.pinchThreshold;
						return e && t && i
					}

					function B() {
						return !!(T.pinchStatus || T.pinchIn || T.pinchOut)
					}

					function W() {
						var e = Y(),
							t = R(),
							i = q(),
							a = X(),
							n = H(),
							o = !n && a && i && t && e;
						return o
					}

					function z() {
						return !!(T.swipe || T.swipeStatus || T.swipeLeft || T.swipeRight || T.swipeUp || T.swipeDown)
					}

					function q() {
						return Ae === T.fingers || T.fingers === b || !C
					}

					function X() {
						return 0 !== xe[0].end.x
					}

					function j() {
						return !!T.tap
					}

					function G() {
						return !!T.doubleTap
					}

					function U() {
						if (null == Ee) return !1;
						var e = oe();
						return G() && e - Ee <= T.doubleTapThreshold
					}

					function V() {
						_e = 0, Me = 0
					}

					function Q() {
						var e = !1;
						if (_e) {
							var t = oe() - _e;
							t <= T.fingerReleaseThreshold && (e = !0)
						}
						return e
					}

					function J(e) {
						$e && (!0 === e ? ($e.bind(se, M), $e.bind(ce, E), pe && $e.bind(pe, L)) : ($e.unbind(se, M, !1), $e.unbind(ce, E, !1), pe && $e.unbind(pe, L, !1)), $e.data(S + "_intouch", !0 === e))
					}

					function K(e, t) {
						var i = {
							start: {
								x: 0,
								y: 0
							},
							last: {
								x: 0,
								y: 0
							},
							end: {
								x: 0,
								y: 0
							}
						};
						return i.start.x = i.last.x = i.end.x = t.pageX || t.clientX, i.start.y = i.last.y = i.end.y = t.pageY || t.clientY, xe[e] = i, i
					}

					function Z(e) {
						var t = void 0 !== e.identifier ? e.identifier : 0,
							i = xe[t] || null;
						return null === i && (i = K(t, e)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
					}

					function ee(e) {
						return we[e] ? we[e].distance : void 0
					}

					function te(e) {
						return {
							direction: e,
							distance: 0
						}
					}

					function ie() {
						return Te - Se
					}

					function ae(e, t) {
						var i = Math.abs(e.x - t.x),
							a = Math.abs(e.y - t.y);
						return Math.round(Math.sqrt(i * i + a * a))
					}

					function ne(e, t) {
						if (l = t, (r = e).x == l.x && r.y == l.y) return s;
						var r, l, c, p, u, d, h, f, g = (p = t, u = (c = e).x - p.x, d = p.y - c.y, h = Math.atan2(d, u), 0 > (f = Math.round(180 * h / Math.PI)) && (f = 360 - Math.abs(f)), f);
						return 45 >= g && g >= 0 ? i : 360 >= g && g >= 315 ? i : g >= 135 && 225 >= g ? a : g > 45 && 135 > g ? o : n
					}

					function oe() {
						var e = new Date;
						return e.getTime()
					}
					var T = e.extend({}, T),
						re = C || x || !T.fallbackToMouseEvents,
						le = re ? x ? A ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
						se = re ? x ? A ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
						ce = re ? x ? A ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
						pe = re ? x ? "mouseleave" : null : "mouseleave",
						ue = x ? A ? "MSPointerCancel" : "pointercancel" : "touchcancel",
						de = 0,
						he = null,
						fe = null,
						ge = 0,
						me = 0,
						be = 0,
						ve = 1,
						ke = 0,
						ye = 0,
						we = null,
						$e = e(t),
						Ce = "start",
						Ae = 0,
						xe = {},
						Se = 0,
						Te = 0,
						_e = 0,
						Me = 0,
						Ee = 0,
						Pe = null,
						Le = null;
					try {
						$e.bind(le, _), $e.bind(ue, P)
					} catch (t) {
						e.error("events not supported " + le + "," + ue + " on jQuery.swipe")
					}
					this.enable = function() {
						return this.disable(), $e.bind(le, _), $e.bind(ue, P), $e
					}, this.disable = function() {
						return I(), $e
					}, this.destroy = function() {
						I(), $e.data(S, null), $e = null
					}, this.option = function(t, i) {
						if ("object" == typeof t) T = e.extend(T, t);
						else if (void 0 !== T[t]) {
							if (void 0 === i) return T[t];
							T[t] = i
						} else {
							if (!t) return T;
							e.error("Option " + t + " does not exist on jQuery.swipe.options")
						}
						return null
					}
				}(this, t), T.data(S, _))
			})
		}
		var i = "left",
			a = "right",
			n = "up",
			o = "down",
			r = "in",
			l = "out",
			s = "none",
			c = "auto",
			p = "swipe",
			u = "pinch",
			d = "tap",
			h = "doubletap",
			f = "longtap",
			g = "horizontal",
			m = "vertical",
			b = "all",
			v = 10,
			k = "start",
			y = "move",
			w = "end",
			$ = "cancel",
			C = "ontouchstart" in window,
			A = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !C,
			x = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !C,
			S = "TouchSwipe";
		e.fn.swipe = function(i) {
			var a = e(this),
				n = a.data(S);
			if (n && "string" == typeof i) {
				if (n[i]) return n[i].apply(n, Array.prototype.slice.call(arguments, 1));
				e.error("Method " + i + " does not exist on jQuery.swipe")
			} else if (n && "object" == typeof i) n.option.apply(n, arguments);
			else if (!(n || "object" != typeof i && i)) return t.apply(this, arguments);
			return a
		}, e.fn.swipe.version = "1.6.18", e.fn.swipe.defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0
		}, e.fn.swipe.phases = {
			PHASE_START: k,
			PHASE_MOVE: y,
			PHASE_END: w,
			PHASE_CANCEL: $
		}, e.fn.swipe.directions = {
			LEFT: i,
			RIGHT: a,
			UP: n,
			DOWN: o,
			IN: r,
			OUT: l
		}, e.fn.swipe.pageScroll = {
			NONE: s,
			HORIZONTAL: g,
			VERTICAL: m,
			AUTO: c
		}, e.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: b
		}
	}),
	function(e) {
		e.isBreakpoint = function(t) {
			var i, a;
			return a = (i = e("<div/>", {
				class: "visible-" + t
			}).appendTo("body")).is(":visible"), i.remove(), a
		}, e.extend(e, {
			isXs: function() {
				return e.isBreakpoint("xs")
			},
			isSm: function() {
				return e.isBreakpoint("sm")
			},
			isMd: function() {
				return e.isBreakpoint("md")
			},
			isLg: function() {
				return e.isBreakpoint("lg")
			}
		})
	}(jQuery);
App = function() {
	"use strict";
	return App.booking = function() {
		$(".datetimepicker").datetimepicker({
			autoclose: !0,
			componentIcon: ".mdi.mdi-calendar",
			navIcons: {
				rightIcon: "mdi mdi-chevron-right",
				leftIcon: "mdi mdi-chevron-left"
			}
		}), $(".select2").select2({
			width: "100%"
		}), $(".tags").select2({
			tags: !0,
			width: "100%"
		}), $(".bslider").bootstrapSlider()
	}, App
}(), App = function() {
	"use strict";
	return App.ChartJs = function() {
		var e, t, i, a, n, o, r, l, s, c, p, u, d, h, f, g, m, b, v, k, y, w, $, C, A, x, S = function() {
			return Math.round(100 * Math.random())
		};
		e = tinycolor(App.color.primary), t = tinycolor(App.color.primary).lighten(22), i = document.getElementById("line-chart"), a = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				borderColor: e,
				backgroundColor: e.setAlpha(.8),
				data: [S(), S(), S(), S(), S(), S(), S()]
			}, {
				label: "My Second dataset",
				borderColor: t,
				backgroundColor: t.setAlpha(.5),
				data: [S(), S(), S(), S(), S(), S(), S()]
			}]
		}, new Chart(i, {
			type: "line",
			data: a
		}), n = tinycolor(App.color.success), o = tinycolor(App.color.warning), r = document.getElementById("bar-chart"), l = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "Credit",
				borderColor: n,
				backgroundColor: n.setAlpha(.8),
				data: [S(), S(), S(), S(), S(), S(), S()]
			}, {
				label: "Debit",
				borderColor: o,
				backgroundColor: o.setAlpha(.5),
				data: [S(), S(), S(), S(), S(), S(), S()]
			}]
		}, new Chart(r, {
			type: "bar",
			data: l,
			options: {
				elements: {
					rectangle: {
						borderWidth: 2,
						borderColor: "rgb(0, 255, 0)",
						borderSkipped: "bottom"
					}
				}
			}
		}), s = tinycolor(App.color.grey), c = tinycolor(App.color.danger), p = document.getElementById("radar-chart"), u = {
			labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
			datasets: [{
				label: "First Year",
				backgroundColor: s.setAlpha(.3),
				borderColor: s,
				pointBackgroundColor: s,
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: s,
				data: [65, 59, 90, 81, 56, 55, 40]
			}, {
				label: "Second Year",
				backgroundColor: c.setAlpha(.4),
				borderColor: c,
				pointBackgroundColor: c,
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: c,
				data: [28, 48, 40, 19, 96, 27, 100]
			}]
		}, new Chart(p, {
			type: "radar",
			data: u
		}), d = App.color.primary, h = App.color.success, f = App.color.warning, g = App.color.danger, m = App.color.grey, b = document.getElementById("polar-chart"), new Chart(b, {
			type: "polarArea",
			data: {
				datasets: [{
					data: [11, 16, 7, 3, 14],
					backgroundColor: [g, h, f, m, d],
					label: "My dataset"
				}],
				labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
			}
		}), v = App.color.primary, k = tinycolor(App.color.primary).lighten(12), y = tinycolor(App.color.primary).lighten(22), w = document.getElementById("pie-chart"), new Chart(w, {
			type: "pie",
			data: {
				labels: ["Red", "Blue", "Yellow"],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: [v, k, y],
					hoverBackgroundColor: [v, k, y]
				}]
			}
		}), $ = App.color.success, C = tinycolor(App.color.success).lighten(12), A = tinycolor(App.color.success).lighten(22), x = document.getElementById("donut-chart"), new Chart(x, {
			type: "doughnut",
			data: {
				labels: ["Red", "Blue", "Yellow"],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: [$, C, A],
					hoverBackgroundColor: [$, C, A]
				}]
			}
		})
	}, App
}(), App = function() {
	"use strict";
	return App.chartsMorris = function() {
		var e, t, i, a, n, o, r, l, s, c, p = [{
			period: "2013",
			licensed: 400,
			sorned: 550
		}, {
			period: "2012",
			licensed: 450,
			sorned: 400
		}, {
			period: "2011",
			licensed: 350,
			sorned: 550
		}, {
			period: "2010",
			licensed: 500,
			sorned: 700
		}, {
			period: "2009",
			licensed: 250,
			sorned: 380
		}, {
			period: "2008",
			licensed: 350,
			sorned: 240
		}, {
			period: "2007",
			licensed: 180,
			sorned: 300
		}, {
			period: "2006",
			licensed: 300,
			sorned: 250
		}, {
			period: "2005",
			licensed: 200,
			sorned: 150
		}];
		e = App.color.primary, t = tinycolor(App.color.primary).lighten(15).toString(), new Morris.Line({
			element: "line-chart",
			data: p,
			xkey: "period",
			ykeys: ["licensed", "sorned"],
			labels: ["Licensed", "Off the road"],
			lineColors: [e, t]
		}), i = tinycolor(App.color.success).lighten(15).toString(), a = tinycolor(App.color.success).brighten(3).toString(), Morris.Bar({
			element: "bar-chart",
			data: [{
				device: "iPhone",
				geekbench: 136,
				macbench: 180
			}, {
				device: "iPhone 3G",
				geekbench: 137,
				macbench: 200
			}, {
				device: "iPhone 3GS",
				geekbench: 275,
				macbench: 350
			}, {
				device: "iPhone 4",
				geekbench: 380,
				macbench: 500
			}, {
				device: "iPhone 4S",
				geekbench: 655,
				macbench: 900
			}, {
				device: "iPhone 5",
				geekbench: 1571,
				macbench: 1700
			}],
			xkey: "device",
			ykeys: ["geekbench", "macbench"],
			labels: ["Geekbench", "Macbench"],
			barColors: [i, a],
			barRatio: .4,
			xLabelAngle: 35,
			hideHover: "auto"
		}), n = App.color.warning, o = App.color.success, r = App.color.primary, Morris.Donut({
			element: "donut-chart",
			data: [{
				label: "Facebook",
				value: 33
			}, {
				label: "Google",
				value: 33
			}, {
				label: "Twitter",
				value: 33
			}],
			colors: [n, o, r],
			formatter: function(e) {
				return e + "%"
			}
		}), l = App.color.primary, s = App.color.success, c = App.color.warning, Morris.Area({
			element: "area-chart",
			data: [{
				period: "2010 Q1",
				iphone: 2666,
				ipad: null,
				itouch: 2647
			}, {
				period: "2010 Q2",
				iphone: 2778,
				ipad: 2294,
				itouch: 2441
			}, {
				period: "2010 Q3",
				iphone: 4912,
				ipad: 1969,
				itouch: 2501
			}, {
				period: "2010 Q4",
				iphone: 3767,
				ipad: 3597,
				itouch: 5689
			}, {
				period: "2011 Q1",
				iphone: 6810,
				ipad: 1914,
				itouch: 2293
			}, {
				period: "2011 Q2",
				iphone: 5670,
				ipad: 4293,
				itouch: 1881
			}, {
				period: "2011 Q3",
				iphone: 4820,
				ipad: 3795,
				itouch: 1588
			}, {
				period: "2011 Q4",
				iphone: 15073,
				ipad: 5967,
				itouch: 5175
			}, {
				period: "2012 Q1",
				iphone: 10687,
				ipad: 4460,
				itouch: 2028
			}, {
				period: "2012 Q2",
				iphone: 8432,
				ipad: 5713,
				itouch: 1791
			}],
			xkey: "period",
			ykeys: ["iphone", "ipad", "itouch"],
			labels: ["iPhone", "iPad", "iPod Touch"],
			lineColors: [l, s, c],
			pointSize: 2,
			hideHover: "auto"
		})
	}, App
}(), App = function() {
	"use strict";
	return App.chartsSparklines = function() {
		var e = App.color.primary,
			t = App.color.warning,
			i = App.color.success,
			a = App.color.danger;
		$("#spark1").sparkline("html", {
			width: "85",
			height: "35",
			lineColor: e,
			highlightSpotColor: e,
			highlightLineColor: e,
			fillColor: !1,
			spotColor: !1,
			minSpotColor: !1,
			maxSpotColor: !1,
			lineWidth: 1.15
		}), $("#spark2").sparkline("html", {
			type: "bar",
			width: "85",
			height: "35",
			barWidth: 3,
			barSpacing: 3,
			chartRangeMin: 0,
			barColor: t
		}), $("#spark3").sparkline("html", {
			type: "discrete",
			width: "85",
			height: "35",
			lineHeight: 20,
			lineColor: i,
			xwidth: 18
		}), $("#spark4").sparkline("html", {
			width: "85",
			height: "35",
			lineColor: a,
			highlightSpotColor: a,
			highlightLineColor: a,
			fillColor: !1,
			spotColor: !1,
			minSpotColor: !1,
			maxSpotColor: !1,
			lineWidth: 1.15
		});
		var n = tinycolor(App.color.primary),
			o = tinycolor(App.color.danger),
			r = tinycolor(App.color.warning),
			l = tinycolor(App.color.success);
		e = n.toString(), t = o.toString(), i = r.toString(), a = l.toString();
		$.fn.sparkline.defaults.common.lineColor = e, $.fn.sparkline.defaults.common.fillColor = n.setAlpha(.3).toString(), $.fn.sparkline.defaults.line.spotColor = e, $.fn.sparkline.defaults.line.minSpotColor = e, $.fn.sparkline.defaults.line.maxSpotColor = e, $.fn.sparkline.defaults.line.highlightSpotColor = e, $.fn.sparkline.defaults.line.highlightLineColor = e, $.fn.sparkline.defaults.bar.barColor = e, $.fn.sparkline.defaults.bar.negBarColor = t, $.fn.sparkline.defaults.bar.stackedBarColor[0] = e, $.fn.sparkline.defaults.bar.stackedBarColor[1] = t, $.fn.sparkline.defaults.tristate.posBarColor = e, $.fn.sparkline.defaults.tristate.negBarColor = t, $.fn.sparkline.defaults.discrete.thresholdColor = t, $.fn.sparkline.defaults.bullet.targetColor = e, $.fn.sparkline.defaults.bullet.performanceColor = t, $.fn.sparkline.defaults.bullet.rangeColors[0] = o.setAlpha(.2).toString(), $.fn.sparkline.defaults.bullet.rangeColors[1] = o.setAlpha(.5).toString(), $.fn.sparkline.defaults.bullet.rangeColors[2] = o.setAlpha(.45).toString(), $.fn.sparkline.defaults.pie.sliceColors[0] = e, $.fn.sparkline.defaults.pie.sliceColors[1] = t, $.fn.sparkline.defaults.pie.sliceColors[2] = i, $.fn.sparkline.defaults.box.medianColor = e, $.fn.sparkline.defaults.box.boxFillColor = o.setAlpha(.5).toString(), $.fn.sparkline.defaults.box.boxLineColor = e, $.fn.sparkline.defaults.box.whiskerColor = a, $(".compositebar").sparkline("html", {
			type: "bar",
			barColor: t
		}), $(".compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
			composite: !0,
			fillColor: !1
		}), $(".sparklinebasic").sparkline(), $(".linecustom").sparkline("html", {
			height: "1.5em",
			width: "8em",
			lineColor: i,
			fillColor: r.setAlpha(.4).toString(),
			minSpotColor: !1,
			maxSpotColor: !1,
			spotColor: a,
			spotRadius: 3
		}), $(".sparkbar").sparkline("html", {
			type: "bar"
		}), $(".sparktristate").sparkline("html", {
			type: "tristate"
		}), $(".compositeline").sparkline("html", {
			fillColor: !1,
			changeRangeMin: 0,
			chartRangeMax: 10
		}), $(".compositeline").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
			composite: !0,
			fillColor: !1,
			lineColor: t,
			changeRangeMin: 0,
			chartRangeMax: 10
		}), $(".normalline").sparkline("html", {
			fillColor: !1,
			normalRangeMin: -1,
			normalRangeMax: 8
		}), $(".discrete1").sparkline("html", {
			type: "discrete",
			xwidth: 18
		}), $(".discrete2").sparkline("html", {
			type: "discrete",
			thresholdValue: 4
		}), $(".sparkbullet").sparkline("html", {
			type: "bullet"
		}), $(".sparkpie").sparkline("html", {
			type: "pie",
			height: "1.0em"
		}), $(".sparkboxplot").sparkline("html", {
			type: "box"
		})
	}, App
}(), App = function() {
	"use strict";
	return App.charts = function() {
		function e() {
			return Math.floor(31 * Math.random()) + 10
		}
		var t, i, a, n, o, r, l, s, c, p, u, d, h, f, g, m, b;
		t = tinycolor(App.color.primary).lighten(5).toString(), $.plot($("#line-chart3"), [{
				data: [
					[0, 20],
					[1, 30],
					[2, 25],
					[3, 39],
					[4, 35],
					[5, 40],
					[6, 30],
					[7, 45]
				],
				label: "Page Views"
			}], {
				series: {
					lines: {
						show: !0,
						lineWidth: 2,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: .1
							}, {
								opacity: .1
							}]
						}
					},
					points: {
						show: !0
					},
					shadowSize: 0
				},
				legend: {
					show: !1
				},
				grid: {
					margin: {
						left: 23,
						right: 30,
						top: 20,
						botttom: 40
					},
					labelMargin: 15,
					axisMargin: 500,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0,0,0,0.15)",
					borderWidth: 0
				},
				colors: [t],
				xaxis: {
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					ticks: 4,
					tickSize: 15,
					tickDecimals: 0
				}
			}), i = App.color.success, a = tinycolor(App.color.success).lighten(22).toString(), $.plot($("#bar-chart2"), [{
				data: [
					[0, 7],
					[1, 13],
					[2, 17],
					[3, 20],
					[4, 26],
					[5, 37],
					[6, 35],
					[7, 28],
					[8, 38],
					[9, 38],
					[10, 32]
				],
				label: "Page Views"
			}, {
				data: [
					[0, 15],
					[1, 10],
					[2, 15],
					[3, 25],
					[4, 30],
					[5, 29],
					[6, 25],
					[7, 33],
					[8, 45],
					[9, 43],
					[10, 38]
				],
				label: "Unique Visitor"
			}], {
				series: {
					bars: {
						order: 2,
						align: "center",
						show: !0,
						lineWidth: 1,
						barWidth: .35,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: 1
							}, {
								opacity: 1
							}]
						}
					},
					shadowSize: 2
				},
				legend: {
					show: !1
				},
				grid: {
					margin: {
						left: 23,
						right: 30,
						top: 20,
						botttom: 40
					},
					labelMargin: 10,
					axisMargin: 200,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0,0,0,0.15)",
					borderWidth: 1,
					borderColor: "rgba(0,0,0,0.15)"
				},
				colors: [i, a],
				xaxis: {
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					ticks: 4,
					tickDecimals: 0
				}
			}), n = App.color.primary, $.plot($("#line-chart1"), [{
				data: [
					[0, 20],
					[1, 30],
					[2, 25],
					[3, 39],
					[4, 35],
					[5, 40],
					[6, 30],
					[7, 45]
				],
				label: "Page Views"
			}], {
				series: {
					lines: {
						show: !0,
						lineWidth: 2,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: .35
							}, {
								opacity: .35
							}]
						}
					},
					points: {
						show: !0
					},
					shadowSize: 0
				},
				legend: {
					show: !1
				},
				grid: {
					margin: {
						left: -8,
						right: -8,
						top: 0,
						bottom: 0
					},
					show: !1,
					labelMargin: 15,
					axisMargin: 500,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0,0,0,0.15)",
					borderWidth: 0
				},
				colors: [n],
				xaxis: {
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					autoscaleMargin: .5,
					ticks: 4,
					tickDecimals: 0
				}
			}), o = tinycolor(App.color.danger).brighten(9).toString(), r = tinycolor(App.color.danger).lighten(13).toString(), l = tinycolor(App.color.danger).lighten(20).toString(), s = tinycolor(App.color.danger).lighten(27).toString(), $.plot("#pie-chart4", [{
				label: "Google",
				data: 45
			}, {
				label: "Dribbble",
				data: 25
			}, {
				label: "Twitter",
				data: 20
			}, {
				label: "Facebook",
				data: 10
			}], {
				series: {
					pie: {
						show: !0,
						innerRadius: .35,
						shadow: {
							top: 5,
							left: 15,
							alpha: .3
						},
						stroke: {
							width: 0
						},
						label: {
							show: !0,
							formatter: function(e, t) {
								return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + e + "</div>"
							}
						},
						highlight: {
							opacity: .08
						}
					}
				},
				grid: {
					hoverable: !0,
					clickable: !0
				},
				colors: [o, r, l, s],
				legend: {
					show: !1
				}
			}), c = tinycolor(App.color.warning).lighten(25).toString(), p = tinycolor(App.color.warning).brighten(3).toString(), $.plot($("#bar-chart1"), [{
				data: [
					[0, 15],
					[1, 15],
					[2, 19],
					[3, 28],
					[4, 30],
					[5, 37],
					[6, 35],
					[7, 38],
					[8, 48],
					[9, 43],
					[10, 38],
					[11, 32],
					[12, 38]
				],
				label: "Page Views"
			}, {
				data: [
					[0, 7],
					[1, 10],
					[2, 15],
					[3, 23],
					[4, 24],
					[5, 29],
					[6, 25],
					[7, 33],
					[8, 35],
					[9, 38],
					[10, 32],
					[11, 27],
					[12, 32]
				],
				label: "Unique Visitor"
			}], {
				series: {
					bars: {
						align: "center",
						show: !0,
						lineWidth: 1,
						barWidth: .6,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: 1
							}, {
								opacity: 1
							}]
						}
					},
					shadowSize: 2
				},
				legend: {
					show: !1
				},
				grid: {
					margin: 0,
					show: !1,
					labelMargin: 10,
					axisMargin: 500,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0,0,0,0.15)",
					borderWidth: 0
				},
				colors: [c, p],
				xaxis: {
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					autoscaleMargin: .5,
					ticks: 4,
					tickDecimals: 0
				}
			}), u = tinycolor(App.color.success).lighten(7).toString(), d = App.color.success, $.plot("#linechart-mini1", [{
				data: [
					[1, 20],
					[2, 50],
					[3, 35],
					[4, 50],
					[5, 25]
				],
				canvasRender: !0
			}, {
				data: [
					[1, 50],
					[2, 20],
					[3, 55],
					[4, 30],
					[5, 65]
				],
				canvasRender: !0
			}], {
				series: {
					lines: {
						show: !0,
						lineWidth: 0,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: .7
							}, {
								opacity: .7
							}]
						}
					},
					fillColor: "rgba(0, 0, 0, 1)",
					shadowSize: 0,
					curvedLines: {
						apply: !0,
						active: !0,
						monotonicFit: !0
					}
				},
				legend: {
					show: !1
				},
				grid: {
					show: !1,
					hoverable: !0,
					clickable: !0
				},
				colors: [u, d],
				xaxis: {
					autoscaleMargin: 0,
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					autoscaleMargin: .5,
					ticks: 5,
					tickDecimals: 0
				}
			}),
			function() {
				var e = App.color.success,
					t = [],
					i = 100;

				function a() {
					for (t.length > 0 && (t = t.slice(1)); t.length < i;) {
						var e = (t.length > 0 ? t[t.length - 1] : 50) + 10 * Math.random() - 5;
						e < 0 ? e = 0 : e > 100 && (e = 100), t.push(e)
					}
					for (var a = [], n = 0; n < t.length; ++n) a.push([n, t[n]]);
					return a
				}
				var n = 500,
					o = $.plot("#live-data", [a()], {
						series: {
							shadowSize: 0,
							lines: {
								show: !0,
								lineWidth: 1,
								fill: !0,
								fillColor: {
									colors: [{
										opacity: .35
									}, {
										opacity: .35
									}]
								}
							}
						},
						grid: {
							show: !0,
							margin: {
								top: 3,
								bottom: 0,
								left: 0,
								right: 0
							},
							labelMargin: 0,
							axisMargin: 0,
							hoverable: !0,
							clickable: !0,
							tickColor: "rgba(0,0,0,0)",
							borderWidth: 0,
							minBorderMargin: 0
						},
						colors: [e],
						yaxis: {
							show: !1,
							autoscaleMargin: .2,
							ticks: 5,
							tickDecimals: 0
						},
						xaxis: {
							show: !1,
							autoscaleMargin: 0
						}
					});
				! function e() {
					o.setData([a()]), o.draw(), setTimeout(e, n)
				}()
			}(), h = tinycolor(App.color.primary).lighten(22), f = App.color.primary, g = [
				[1, e()],
				[2, e()],
				[3, 2 + e()],
				[4, 3 + e()],
				[5, 5 + e()],
				[6, 10 + e()],
				[7, 15 + e()],
				[8, 20 + e()],
				[9, 25 + e()],
				[10, 30 + e()],
				[11, 35 + e()],
				[12, 25 + e()],
				[13, 15 + e()],
				[14, 20 + e()],
				[15, 45 + e()],
				[16, 50 + e()],
				[17, 65 + e()],
				[18, 70 + e()],
				[19, 85 + e()],
				[20, 80 + e()],
				[21, 75 + e()],
				[22, 80 + e()],
				[23, 75 + e()]
			], m = [
				[1, e()],
				[2, e()],
				[3, 10 + e()],
				[4, 15 + e()],
				[5, 20 + e()],
				[6, 25 + e()],
				[7, 30 + e()],
				[8, 35 + e()],
				[9, 40 + e()],
				[10, 45 + e()],
				[11, 50 + e()],
				[12, 55 + e()],
				[13, 60 + e()],
				[14, 70 + e()],
				[15, 75 + e()],
				[16, 80 + e()],
				[17, 85 + e()],
				[18, 90 + e()],
				[19, 95 + e()],
				[20, 100 + e()],
				[21, 110 + e()],
				[22, 120 + e()],
				[23, 130 + e()]
			], $.plot($("#line-chart-live"), [{
				data: m,
				showLabels: !0,
				label: "New Visitors",
				labelPlacement: "below",
				canvasRender: !0,
				cColor: "#FFFFFF"
			}, {
				data: g,
				showLabels: !0,
				label: "Old Visitors",
				labelPlacement: "below",
				canvasRender: !0,
				cColor: "#FFFFFF"
			}], {
				series: {
					lines: {
						show: !0,
						lineWidth: 1.5,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: .5
							}, {
								opacity: .5
							}]
						}
					},
					fillColor: "rgba(0, 0, 0, 1)",
					points: {
						show: !1,
						fill: !0
					},
					shadowSize: 0
				},
				legend: {
					show: !1
				},
				grid: {
					show: !1,
					margin: {
						top: -20,
						bottom: 0,
						left: 0,
						right: 0
					},
					labelMargin: 0,
					axisMargin: 0,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0,0,0,0)",
					borderWidth: 0,
					minBorderMargin: 0
				},
				colors: [h, f],
				xaxis: {
					autoscaleMargin: 0,
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					autoscaleMargin: .2,
					ticks: 5,
					tickDecimals: 0
				}
			}), b = App.color.primary, $("#line-chart2"), $.plot("#line-chart2", [{
				data: [
					[1, 10],
					[2, 30],
					[3, 55],
					[4, 36],
					[5, 57],
					[6, 80],
					[7, 65],
					[8, 50],
					[9, 80],
					[10, 70],
					[11, 90],
					[12, 67],
					[12, 67]
				],
				showLabels: !0,
				label: "New Visitors",
				labelPlacement: "below",
				canvasRender: !0,
				cColor: "#FFFFFF"
			}], {
				series: {
					lines: {
						show: !0,
						lineWidth: 2,
						fill: !0,
						fillColor: {
							colors: [{
								opacity: .35
							}, {
								opacity: .35
							}]
						}
					},
					fillColor: "rgba(0, 0, 0, 1)",
					points: {
						show: !0,
						fill: !0,
						fillColor: b
					},
					shadowSize: 0
				},
				legend: {
					show: !1
				},
				grid: {
					show: !1,
					margin: {
						left: -8,
						right: -8,
						top: 0,
						botttom: 0
					},
					labelMargin: 0,
					axisMargin: 0,
					hoverable: !0,
					clickable: !0,
					tickColor: "rgba(0, 0, 0, 0)",
					borderWidth: 0
				},
				colors: [b],
				xaxis: {
					autoscaleMargin: 0,
					ticks: 11,
					tickDecimals: 0
				},
				yaxis: {
					autoscaleMargin: .5,
					ticks: 5,
					tickDecimals: 0
				}
			})
	}, App
}(), App = function() {
	"use strict";
	return App.codeEditor = function() {
		var e = $("#code1").html();
		e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">"), console.log(e);
		var t = CodeMirror($("#console")[0], {
			lineNumbers: !0,
			theme: "monokai",
			value: e,
			mode: "text/html",
			tabSize: 2
		});
		setTimeout(function() {
			t.refresh()
		}, 200)
	}, App
}(), App = function() {
	"use strict";
	return App.dashboard = function() {
		var e, t, i, a, n, o, r, l, s, c, p, u, d, h, f, g, m;
		$('[data-toggle="counter"]').each(function(e, t) {
			var i = $(this),
				a = "",
				n = "",
				o = 0,
				r = 0,
				l = 0,
				s = 2.5;
			i.data("prefix") && (a = i.data("prefix")), i.data("suffix") && (n = i.data("suffix")), i.data("start") && (o = i.data("start")), i.data("end") && (r = i.data("end")), i.data("decimals") && (l = i.data("decimals")), i.data("duration") && (s = i.data("duration")), new CountUp(i.get(0), o, r, l, s, {
				suffix: n,
				prefix: a
			}).start()
		}), $(".toggle-loading").on("click", function() {
			var e = $(this).parents(".widget, .panel");
			e.length && (e.addClass("be-loading-active"), setTimeout(function() {
				e.removeClass("be-loading-active")
			}, 3e3))
		}), e = App.color.primary, t = App.color.warning, i = App.color.success, a = App.color.danger, $("#spark1").sparkline([0, 5, 3, 7, 5, 10, 3, 6, 5, 10], {
			width: "85",
			height: "35",
			lineColor: e,
			highlightSpotColor: e,
			highlightLineColor: e,
			fillColor: !1,
			spotColor: !1,
			minSpotColor: !1,
			maxSpotColor: !1,
			lineWidth: 1.15
		}), $("#spark2").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8], {
			type: "bar",
			width: "85",
			height: "35",
			barWidth: 3,
			barSpacing: 3,
			chartRangeMin: 0,
			barColor: t
		}), $("#spark3").sparkline([2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 4, 5], {
			type: "discrete",
			width: "85",
			height: "35",
			lineHeight: 20,
			lineColor: i,
			xwidth: 18
		}), $("#spark4").sparkline([2, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
			width: "85",
			height: "35",
			lineColor: a,
			highlightSpotColor: a,
			highlightLineColor: a,
			fillColor: !1,
			spotColor: !1,
			minSpotColor: !1,
			maxSpotColor: !1,
			lineWidth: 1.15
		}), n = App.color.primary, o = tinycolor(App.color.primary).lighten(13).toString(), r = tinycolor(App.color.primary).lighten(20).toString(), $.plot("#main-chart", [{
			data: [
				[1, 35],
				[2, 60],
				[3, 40],
				[4, 65],
				[5, 45],
				[6, 75],
				[7, 35],
				[8, 40],
				[9, 60]
			],
			canvasRender: !0
		}, {
			data: [
				[1, 20],
				[2, 40],
				[3, 25],
				[4, 45],
				[5, 25],
				[6, 50],
				[7, 35],
				[8, 60],
				[9, 30]
			],
			canvasRender: !0
		}, {
			data: [
				[1, 35],
				[2, 15],
				[3, 20],
				[4, 30],
				[5, 15],
				[6, 18],
				[7, 28],
				[8, 10],
				[9, 30]
			],
			canvasRender: !0
		}], {
			series: {
				lines: {
					show: !0,
					lineWidth: 0,
					fill: !0,
					fillColor: {
						colors: [{
							opacity: 1
						}, {
							opacity: 1
						}]
					}
				},
				fillColor: "rgba(0, 0, 0, 1)",
				shadowSize: 0,
				curvedLines: {
					apply: !0,
					active: !0,
					monotonicFit: !0
				}
			},
			legend: {
				show: !1
			},
			grid: {
				show: !0,
				margin: {
					top: 20,
					bottom: 0,
					left: 0,
					right: 0
				},
				labelMargin: 0,
				minBorderMargin: 0,
				axisMargin: 0,
				tickColor: "rgba(0,0,0,0.05)",
				borderWidth: 0,
				hoverable: !0,
				clickable: !0
			},
			colors: [n, o, r],
			xaxis: {
				tickFormatter: function() {
					return ""
				},
				autoscaleMargin: 0,
				ticks: 11,
				tickDecimals: 0,
				tickLength: 0
			},
			yaxis: {
				tickFormatter: function() {
					return ""
				},
				ticks: 4,
				tickDecimals: 0
			}
		}), $('[data-color="main-chart-color1"]').css({
			"background-color": n
		}), $('[data-color="main-chart-color2"]').css({
			"background-color": o
		}), $('[data-color="main-chart-color3"]').css({
			"background-color": r
		}), l = App.color.success, s = App.color.warning, c = App.color.primary, $.plot("#top-sales", [{
			label: "Services",
			data: 33
		}, {
			label: "Standard Plans",
			data: 33
		}, {
			label: "Services",
			data: 33
		}], {
			series: {
				pie: {
					radius: .75,
					innerRadius: .58,
					show: !0,
					highlight: {
						opacity: .1
					},
					label: {
						show: !1
					}
				}
			},
			grid: {
				hoverable: !0
			},
			legend: {
				show: !1
			},
			colors: [l, s, c]
		}), $('[data-color="top-sales-color1"]').css({
			"background-color": l
		}), $('[data-color="top-sales-color2"]').css({
			"background-color": s
		}), $('[data-color="top-sales-color3"]').css({
			"background-color": c
		}), p = $("#calendar-widget"), u = new Date, d = u.getFullYear(), h = u.getMonth(), f = [d + "-" + (h + 1) + "-16", d + "-" + (h + 1) + "-20"], $.extend($.datepicker, {
			_updateDatepicker_original: $.datepicker._updateDatepicker,
			_updateDatepicker: function(e) {
				this._updateDatepicker_original(e);
				var t = this._get(e, "afterShow");
				t && t.apply(e, [e])
			}
		}), void 0 !== jQuery.ui && p.datepicker({
			showOtherMonths: !0,
			selectOtherMonths: !0,
			beforeShowDay: function(e) {
				var t = e.getMonth(),
					i = e.getDate(),
					a = e.getFullYear();
				return -1 != $.inArray(a + "-" + (t + 1) + "-" + i, f) ? [!0, "has-events", "This day has events!"] : [!0, "", ""]
			},
			afterShow: function(e) {
				var t;
				t = e.dpDiv, 6 == $("tbody tr", t).length ? t.addClass("ui-datepicker-6rows") : t.removeClass("ui-datepicker-6rows")
			}
		}), g = tinycolor(App.color.primary).lighten(15).toHexString(), m = tinycolor(App.color.primary).lighten(8).toHexString(), tinycolor(App.color.primary).toHexString(), $("#map-widget").vectorMap({
			map: "world_en",
			backgroundColor: null,
			color: g,
			hoverOpacity: .7,
			selectedColor: m,
			enableZoom: !0,
			showTooltip: !0,
			values: {
				ru: "14",
				us: "14",
				ca: "10",
				br: "10",
				au: "11",
				uk: "3",
				cn: "12"
			},
			scaleColors: [g, m],
			normalizeFunction: "polynomial"
		})
	}, App
}(), App = function() {
	"use strict";
	return App.formEditable = function() {
		$.fn.editable.defaults.mode = "popup", $("#username").editable(), $("#firstname").editable({
			validate: function(e) {
				if ("" == $.trim(e)) return "This field is required"
			}
		}), $("#sex").editable({
			prepend: "not selected",
			source: [{
				value: 1,
				text: "Male"
			}, {
				value: 2,
				text: "Female"
			}],
			display: function(e, t) {
				var i = $.grep(t, function(t) {
					return t.value == e
				});
				i.length ? $(this).text(i[0].text).css("color", {
					"": "gray",
					1: "green",
					2: "blue"
				}[e]) : $(this).empty()
			}
		}), $("#group").editable({
			showbuttons: !1,
			source: [{
				value: 1,
				text: "Admin"
			}, {
				value: 2,
				text: "Support"
			}, {
				value: 3,
				text: "Operator"
			}, {
				value: 4,
				text: "Customer"
			}, {
				value: 5,
				text: "Service"
			}]
		}), $("#status").editable({
			type: "select",
			title: "Select status",
			placement: "right",
			value: 2,
			source: [{
				value: 1,
				text: "status 1"
			}, {
				value: 2,
				text: "status 2"
			}, {
				value: 3,
				text: "status 3"
			}]
		}), $("#dob").editable({
			format: "dd-mm-yyyy",
			viewformat: "dd/mm/yyyy",
			datepicker: {
				weekStart: 1
			}
		}), $("#event").editable({
			placement: "right",
			combodate: {
				firstItem: "name"
			}
		}), $("#comments").editable({
			showbuttons: "bottom"
		}), $("#state2").editable({
			value: "California",
			typeahead: {
				name: "state",
				local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
			}
		}), $("#fruits").editable({
			pk: 1,
			limit: 3,
			source: [{
				value: 1,
				text: "banana"
			}, {
				value: 2,
				text: "peach"
			}, {
				value: 3,
				text: "apple"
			}, {
				value: 4,
				text: "watermelon"
			}, {
				value: 5,
				text: "orange"
			}]
		})
	}, App
}(), App = function() {
	"use strict";
	return App.formElements = function() {
		$(".datetimepicker").datetimepicker({
			autoclose: !0,
			componentIcon: ".mdi.mdi-calendar",
			navIcons: {
				rightIcon: "mdi mdi-chevron-right",
				leftIcon: "mdi mdi-chevron-left"
			}
		}), $(".daterange").daterangepicker(), $(".datetimerange").daterangepicker({
			timePicker: !0,
			timePickerIncrement: 30,
			locale: {
				format: "MM/DD/YYYY h:mm A"
			}
		});
		var e = moment().subtract(29, "days"),
			t = moment();

		function i(e, t) {
			$(".reportrange span").html(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
		}
		$(".reportrange").daterangepicker({
			startDate: e,
			endDate: t,
			ranges: {
				Today: [moment(), moment()],
				Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
				"Last 7 Days": [moment().subtract(6, "days"), moment()],
				"Last 30 Days": [moment().subtract(29, "days"), moment()],
				"This Month": [moment().startOf("month"), moment().endOf("month")],
				"Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
			}
		}, i), i(e, t), $(".select2").select2({
			width: "100%"
		}), $(".tags").select2({
			tags: !0,
			width: "100%"
		}), $(".bslider").bootstrapSlider(), $(".inputfile").each(function() {
			var e = $(this),
				t = e.next("label"),
				i = t.html();
			e.on("change", function(e) {
				var a = "";
				this.files && this.files.length > 1 ? a = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : e.target.value && (a = e.target.value.split("\\").pop()), a ? t.find("span").html(a) : t.html(i)
			})
		})
	}, App
}(), App = function() {
	"use strict";
	return App.masks = function() {
		$("[data-mask='date']").mask("99/99/9999"), $("[data-mask='phone']").mask("(999) 999-9999"), $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999"), $("[data-mask='phone-int']").mask("+33 999 999 999"), $("[data-mask='taxid']").mask("99-9999999"), $("[data-mask='ssn']").mask("999-99-9999"), $("[data-mask='product-key']").mask("a*-999-a999"), $("[data-mask='percent']").mask("99%"), $("[data-mask='currency']").mask("$999,999,999.99")
	}, App
}(), App = function() {
	"use strict";
	return App.formMultiselect = function() {
		$("#example1").multiselect(), $("#example2").multiselect(), $("#example3").multiselect({
			buttonClass: "btn btn-link"
		}), $("#example4").multiselect({
			buttonClass: "btn btn-default btn-sm"
		}), $("#example6").multiselect(), $("#example9").multiselect({
			onChange: function(e, t) {
				alert("Change event invoked!"), console.log(e)
			}
		});
		for (var e = 1; e <= 100; e++) $("#example11").append('<option value="' + e + '">Options ' + e + "</option>");
		$("#example11").multiselect({
			maxHeight: 150
		}), $("#example13").multiselect(), $("#example14").multiselect({
			buttonWidth: "500px",
			buttonText: function(e) {
				if (0 === e.length) return "None selected";
				var t = "";
				return e.each(function() {
					t += $(this).text() + ", "
				}), t.substr(0, t.length - 2) + ' <b class="caret"></b>'
			}
		}), $("#example16").multiselect({
			onChange: function(e, t) {
				!1 === t && $("#example16").multiselect("select", e.val())
			}
		}), $("#example19").multiselect(), $("#example20").multiselect({
			selectedClass: null
		}), $("#example23").multiselect(), $("#example24").multiselect(), $("#example25").multiselect({
			dropRight: !0,
			buttonWidth: "300px"
		}), $("#example27").multiselect({
			includeSelectAllOption: !0
		}), $("#example28").multiselect({
			enableFiltering: !0,
			maxHeight: 150
		}), $("#example32").multiselect(), $("#example39").multiselect({
			includeSelectAllOption: !0,
			enableCaseInsensitiveFiltering: !0
		}), $("#example41").multiselect({
			includeSelectAllOption: !0
		}), $("#my-select").multiSelect(), $("#pre-selected-options").multiSelect(), $("#callbacks").multiSelect({
			afterSelect: function(e) {
				alert("Select value: " + e)
			},
			afterDeselect: function(e) {
				alert("Deselect value: " + e)
			}
		}), $("#optgroup").multiSelect({
			selectableOptgroup: !0
		}), $("#disabled-attribute").multiSelect(), $("#custom-headers").multiSelect({
			selectableHeader: "<div class='custom-header'>Selectable items</div>",
			selectionHeader: "<div class='custom-header'>Selection items</div>"
		}), $("#searchable").multiSelect({
			selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='Search'>",
			selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='Search'>",
			afterInit: function(e) {
				var t = this,
					i = t.$selectableUl.prev(),
					a = t.$selectionUl.prev(),
					n = "#" + t.$container.attr("id") + " .ms-elem-selectable:not(.ms-selected)",
					o = "#" + t.$container.attr("id") + " .ms-elem-selection.ms-selected";
				t.qs1 = i.quicksearch(n).on("keydown", function(e) {
					if (40 === e.which) return t.$selectableUl.focus(), !1
				}), t.qs2 = a.quicksearch(o).on("keydown", function(e) {
					if (40 == e.which) return t.$selectionUl.focus(), !1
				})
			},
			afterSelect: function() {
				this.qs1.cache(), this.qs2.cache()
			},
			afterDeselect: function() {
				this.qs1.cache(), this.qs2.cache()
			}
		})
	}, App
}(), App = function() {
	"use strict";
	return App.wizard = function() {
		$(".wizard-ux").wizard(), $(".wizard-ux").on("changed.fu.wizard", function() {
			$(".bslider").slider()
		}), $(".wizard-next").click(function(e) {
			var t = $(this).data("wizard");
			$(t).wizard("next"), e.preventDefault()
		}), $(".wizard-previous").click(function(e) {
			var t = $(this).data("wizard");
			$(t).wizard("previous"), e.preventDefault()
		}), $(".select2").select2({
			width: "100%"
		}), $(".tags").select2({
			tags: !0,
			width: "100%"
		}), $("#credit_slider").slider().on("slide", function(e) {
			$("#credits").html("$" + e.value)
		}), $("#rate_slider").slider().on("slide", function(e) {
			$("#rate").html(e.value + "%")
		})
	}, App
}(), App = function() {
	"use strict";
	return App.textEditors = function() {
		$("#editor1").summernote({
			height: 300
		}), $("#editor2").markdown({
			buttonSize: "normal"
		})
	}, App
}(), App = function() {
	"use strict";
	return App.IconsFilter = function() {
		$(".select2").select2({
			width: "100%"
		});
		var e = [],
			t = $(".be-icons-list"),
			i = $(".icon-category", t),
			a = $(".input-search input", t),
			n = $("#icon-category", t);
		i.each(function(t, i) {
			$(".icon-class", i).each(function(t, a) {
				var n = {
					name: a.innerHTML,
					element: a,
					category: i
				};
				e.push(n)
			})
		}), a.on("keyup", function() {
			var a = [],
				o = $(this).val().toLowerCase();
			if ("all" == n.val() ? i.show() : $("#" + n.val()).show(), o) {
				$(".icon-visible", i).removeClass("icon-visible");
				var r = $.grep(e, function(e, t) {
					var i = e.name.search(o) > -1;
					return i && a.indexOf(e.category) < 0 && a.push(e.category), i
				});
				$.each(r, function(e, t) {
					$(t.element).parents(".col-xs-6").addClass("icon-visible")
				}), t.addClass("hide-icons"), i.not(a).hide().addClass("icon-category--hide-icons")
			} else t.removeClass("hide-icons")
		}), n.on("change", function() {
			var e = $(this).val();
			"all" == e ? i.show() : (i.hide(), $("#" + e).show())
		})
	}, App
}(), App = function() {
	"use strict";
	return App.loaders = function() {
		$(".toggle-loading").on("click", function() {
			var e = $(this).parents(".widget, .panel");
			e.length && (e.addClass("be-loading-active"), setTimeout(function() {
				e.removeClass("be-loading-active")
			}, 3e3))
		})
	}, App
}(), App = function() {
	"use strict";
	return App.mailCompose = function() {
		$(".tags").select2({
			tags: 0,
			width: "100%"
		}), $("#email-editor").summernote({
			height: 200
		})
	}, App
}(), App = function() {
	"use strict";
	return App.mailInbox = function() {
		$(".be-select-all input").on("change", function() {
			var e = $(".email-list").find('input[type="checkbox"]');
			$(this).is(":checked") ? e.prop("checked", !0) : e.prop("checked", !1)
		})
	}, App
}(), App = function() {
	"use strict";
	return App.mapsGoogle = function() {
		var e = {
			zoom: 14,
			center: new google.maps.LatLng(-33.877827, 151.188598),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		new google.maps.Map(document.getElementById("map_one"), e);
		e = {
			zoom: 14,
			center: new google.maps.LatLng(-33.877827, 151.188598),
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		new google.maps.Map(document.getElementById("map_two"), e);
		e = {
			zoom: 14,
			center: new google.maps.LatLng(-33.877827, 151.188598),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		new google.maps.Map(document.getElementById("map_three"), e)
	}, App
}(), App = function() {
	"use strict";
	return App.mapsVector = function() {
		var e = App.color.primary,
			t = App.color.success,
			i = App.color.danger,
			a = App.color.warning,
			n = App.color.success,
			o = App.color.primary,
			r = tinycolor(App.color.grey).lighten(5).toString(),
			l = App.color.danger;
		$("#usa-map").vectorMap({
			map: "us_merc_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: e
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#france-map").vectorMap({
			map: "fr_merc_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: t
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#uk-map").vectorMap({
			map: "uk_mill_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: i
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#chicago-map").vectorMap({
			map: "us-il-chicago_mill_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: a
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#australia-map").vectorMap({
			map: "au_mill_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: n
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#india-map").vectorMap({
			map: "in_mill_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: o
				},
				hover: {
					"fill-opacity": .8
				}
			}
		}), $("#vector-map").vectorMap({
			map: "map",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: r,
					"fill-opacity": .8,
					stroke: "none",
					"stroke-width": 0,
					"stroke-opacity": 1
				},
				hover: {
					"fill-opacity": .8
				}
			},
			markerStyle: {
				initial: {
					r: 10
				}
			},
			markers: [{
				coords: [100, 100],
				name: "Marker 1",
				style: {
					fill: "#acb1b6",
					stroke: "#cfd5db",
					"stroke-width": 3
				}
			}, {
				coords: [200, 200],
				name: "Marker 2",
				style: {
					fill: "#acb1b6",
					stroke: "#cfd5db",
					"stroke-width": 3
				}
			}]
		}), $("#canada-map").vectorMap({
			map: "ca_lcc_en",
			backgroundColor: "transparent",
			regionStyle: {
				initial: {
					fill: l
				},
				hover: {
					"fill-opacity": .8
				}
			}
		})
	}, App
}(), App = function() {
	"use strict";
	return App.pageCalendar = function() {
		$("#external-events .fc-event").each(function() {
			$(this).data("event", {
				title: $.trim($(this).text()),
				stick: !0
			}), $(this).draggable({
				zIndex: 999,
				revert: !0,
				revertDuration: 0
			})
		}), $("#calendar").fullCalendar({
			header: {
				left: "title",
				center: "",
				right: "month,agendaWeek,agendaDay, today, prev,next"
			},
			defaultDate: "2016-06-12",
			editable: !0,
			eventLimit: !0,
			droppable: !0,
			drop: function() {
				$("#drop-remove").is(":checked") && $(this).remove()
			},
			events: [{
				title: "All Day Event",
				start: "2016-06-01"
			}, {
				title: "Long Event",
				start: "2016-06-07",
				end: "2016-06-10"
			}, {
				id: 999,
				title: "Repeating Event",
				start: "2016-06-09T16:00:00"
			}, {
				id: 999,
				title: "Repeating Event",
				start: "2016-06-16T16:00:00"
			}, {
				title: "Conference",
				start: "2016-06-11",
				end: "2016-06-13"
			}, {
				title: "Meeting",
				start: "2016-06-12T10:30:00",
				end: "2016-06-12T12:30:00"
			}, {
				title: "Lunch",
				start: "2016-06-12T12:00:00"
			}, {
				title: "Meeting",
				start: "2016-06-12T14:30:00"
			}, {
				title: "Happy Hour",
				start: "2016-06-12T17:30:00"
			}, {
				title: "Dinner",
				start: "2016-06-12T20:00:00"
			}, {
				title: "Birthday Party",
				start: "2016-06-13T07:00:00"
			}, {
				title: "Click for Google",
				url: "http://google.com/",
				start: "2016-06-28"
			}]
		})
	}, App
}(), App = function() {
	"use strict";
	return App.pageGallery = function() {
		var e = $(".gallery-container");
		e.masonry({
			columnWidth: 0,
			itemSelector: ".item"
		}), $("#sidebar-collapse").click(function() {
			e.masonry()
		}), $(".image-zoom").magnificPopup({
			type: "image",
			mainClass: "mfp-with-zoom",
			zoom: {
				enabled: !0,
				duration: 300,
				easing: "ease-in-out",
				opener: function(e) {
					return $(e).parents("div.img")
				}
			}
		}), e.masonry()
	}, App
}(), App = function() {
	"use strict";
	return App.pageProfile = function() {
		var e, t;
		e = App.color.primary, t = tinycolor(App.color.primary).lighten(22).toString(), $.plot($("#bar-chart1"), [{
			data: [
				[0, 7],
				[1, 13],
				[2, 17],
				[3, 20],
				[4, 26],
				[5, 37],
				[6, 35],
				[7, 28],
				[8, 38],
				[9, 38],
				[10, 32],
				[11, 25]
			],
			label: "Page Views"
		}, {
			data: [
				[0, 15],
				[1, 10],
				[2, 15],
				[3, 25],
				[4, 30],
				[5, 29],
				[6, 25],
				[7, 33],
				[8, 45],
				[9, 43],
				[10, 38],
				[11, 36]
			],
			label: "Unique Visitor"
		}], {
			series: {
				bars: {
					order: 2,
					align: "center",
					show: !0,
					barWidth: .3,
					lineWidth: .7,
					fill: !0,
					fillColor: {
						colors: [{
							opacity: 1
						}, {
							opacity: 1
						}]
					}
				},
				shadowSize: 2
			},
			legend: {
				show: !1
			},
			grid: {
				show: !1
			},
			colors: [e, t],
			xaxis: {
				ticks: 11,
				tickDecimals: 0
			},
			yaxis: {
				ticks: 4,
				tickDecimals: 0
			}
		})
	}, App
}(), App = function() {
	"use strict";
	return App.tableFilters = function() {
		$(".bslider").bootstrapSlider({
			tooltip: "hide"
		}), $("#milestone_slider").slider().on("slide", function(e) {
			var t = e.value[0],
				i = e.value[1];
			$("#slider-value").html(t + "% - " + i + "%")
		}), $(".select2").select2({
			width: "100%"
		}), $(".tags").select2({
			tags: !0,
			width: "100%"
		}), $(".datetimepicker").datetimepicker({
			autoclose: !0,
			componentIcon: ".mdi.mdi-calendar",
			navIcons: {
				rightIcon: "mdi mdi-chevron-right",
				leftIcon: "mdi mdi-chevron-left"
			}
		})
	}, App
}(), App = function() {
	"use strict";
	return App.dataTables = function() {
		$.extend(!0, $.fn.dataTable.defaults, {
			dom: "<'row be-datatable-header'<'col-sm-6'l><'col-sm-6'f>><'row be-datatable-body'<'col-sm-12'tr>><'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
		}), $("#table1").dataTable(), $("#table2").dataTable({
			pageLength: 6,
			dom: "<'row be-datatable-body'<'col-sm-12'tr>><'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
		}), $("#table3").dataTable({
			buttons: ["copy", "excel", "pdf", "print"],
			lengthMenu: [
				[6, 10, 25, 50, -1],
				[6, 10, 25, 50, "All"]
			],
			dom: "<'row be-datatable-header'<'col-sm-6'l><'col-sm-6 text-right'B>><'row be-datatable-body'<'col-sm-12'tr>><'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
		})
	}, App
}(), App = function() {
	"use strict";
	return App.uiNestableLists = function() {
		function e(e, t) {
			var i = $(e).nestable("serialize");
			$(t).html(window.JSON.stringify(i))
		}
		$(".dd").nestable(), e("#list1", "#out1"), e("#list2", "#out2"), $("#list1").on("change", function() {
			e("#list1", "#out1")
		}), $("#list2").on("change", function() {
			e("#list2", "#out2")
		})
	}, App
}(), App = function() {
	"use strict";
	return App.uiNotifications = function() {
		$("#not-basic").click(function() {
			return $.gritter.add({
				title: "Samantha new msg!",
				text: "You have a new Thomas message, let's checkout your inbox.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar.png",
				time: "",
				class_name: "img-rounded"
			}), !1
		}), $("#not-theme").click(function() {
			return $.gritter.add({
				title: "Welcome home!",
				text: "You can start your day checking the new messages.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar5.png",
				class_name: "clean img-rounded",
				time: ""
			}), !1
		}), $("#not-sticky").click(function() {
			return $.gritter.add({
				title: "Sticky Note",
				text: "Your daily goal is 130 new code lines, don't forget to update your work.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/slack_logo.png",
				class_name: "clean",
				sticky: !0,
				time: ""
			}), !1
		}), $("#not-text").click(function() {
			return $.gritter.add({
				title: "Just Text",
				text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum.",
				class_name: "clean",
				time: ""
			}), !1
		}), $("#not-tr").click(function() {
			return $.extend($.gritter.options, {
				position: "top-right"
			}), $.gritter.add({
				title: "Top Right",
				text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
				class_name: "clean"
			}), !1
		}), $("#not-tl").click(function() {
			return $.extend($.gritter.options, {
				position: "top-left"
			}), $.gritter.add({
				title: "Top Left",
				text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
				class_name: "clean"
			}), !1
		}), $("#not-bl").click(function() {
			return $.extend($.gritter.options, {
				position: "bottom-left"
			}), $.gritter.add({
				title: "Bottom Left",
				text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
				class_name: "clean"
			}), !1
		}), $("#not-br").click(function() {
			return $.extend($.gritter.options, {
				position: "bottom-right"
			}), $.gritter.add({
				title: "Bottom Right",
				text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
				class_name: "clean"
			}), !1
		}), $("#not-facebook").click(function() {
			return $.gritter.add({
				title: "You have comments!",
				text: "You can start your day checking the new messages.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fb-icon.png",
				class_name: "color facebook"
			}), !1
		}), $("#not-twitter").click(function() {
			return $.gritter.add({
				title: "You have new followers!",
				text: "You can start your day checking the new messages.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tw-icon.png",
				class_name: "color twitter"
			}), !1
		}), $("#not-google-plus").click(function() {
			return $.gritter.add({
				title: "You have new +1!",
				text: "You can start your day checking the new messages.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gp-icon.png",
				class_name: "color google-plus"
			}), !1
		}), $("#not-dribbble").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/db-icon.png",
				class_name: "color dribbble"
			}), !1
		}), $("#not-flickr").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fl-icon.png",
				class_name: "color flickr"
			}), !1
		}), $("#not-linkedin").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/in-icon.png",
				class_name: "color linkedin"
			}), !1
		}), $("#not-youtube").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/yt-icon.png",
				class_name: "color youtube"
			}), !1
		}), $("#not-pinterest").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/pi-icon.png",
				class_name: "color pinterest"
			}), !1
		}), $("#not-github").click(function() {
			return $.gritter.add({
				title: "You have new forks!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gh-icon.png",
				class_name: "color github"
			}), !1
		}), $("#not-tumblr").click(function() {
			return $.gritter.add({
				title: "You have new comments!",
				text: "You can start your day checking the new comments.",
				image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tu-icon.png",
				class_name: "color tumblr"
			}), !1
		}), $("#not-primary").click(function() {
			$.gritter.add({
				title: "Primary",
				text: "This is a simple Gritter Notification.",
				class_name: "color primary"
			})
		}), $("#not-success").click(function() {
			$.gritter.add({
				title: "Success",
				text: "This is a simple Gritter Notification.",
				class_name: "color success"
			})
		}), $("#not-warning").click(function() {
			$.gritter.add({
				title: "Warning",
				text: "This is a simple Gritter Notification.",
				class_name: "color warning"
			})
		}), $("#not-danger").click(function() {
			$.gritter.add({
				title: "Danger",
				text: "This is a simple Gritter Notification.",
				class_name: "color danger"
			})
		}), $("#not-dark").click(function() {
			$.gritter.add({
				title: "Dark Color",
				text: "This is a simple Gritter Notification.",
				class_name: "color dark"
			})
		})
	}, App
}();