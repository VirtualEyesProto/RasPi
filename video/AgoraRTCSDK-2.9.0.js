/*! AgoraRTC|BUILD v2.9.0-0-gd55f286 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof
        module ? module.exports = t() : "function" == typeof
        define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof
        exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
}
(window, function () {
    return function (e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var a = t[i] = {i: i, l: !1, exports: {}};
            return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }

        return n.m = e, n.c = t,
            n.d = function (e, t, i) {
                n.o(e, t) ||
                Object.defineProperty(e, t, {enumerable: !0, get: i})
            }
            , n.r = function (e) {
            "undefined" != typeof Symbol
            && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"})
                , Object.defineProperty(e, "__esModule", {value: !0})
        }
            , n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var a in e) n.d(i, a, function (t) {
                return e[t]
            }.bind(null, a));
            return i
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 26)
    }
    ([function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(6), a = n.n(i), r = n(7), o = n(2), s = n(1), c = 0, d = "free", u = [], l = [], p = 0;
        setInterval(function () {
            Object(o.getParameter)("UPLOAD_LOG") && f.info("console log upload")
        }, 9e5);
        var f = function () {
            var e, t, n, i, f, m, g = "https://".concat(Object(o.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v1"),
                v = ["DEBUG", "INFO", "WARNING", "ERROR", "NONE"], S = 0, I = function e(t) {
                    d = "uploading", setTimeout(function () {
                        !function (e, t, n) {
                            var i;
                            Array.isArray(e) || (e = [e]), e = e.map(function (e) {
                                return {log_item_id: c++, log_level: e.log_level, payload_str: e.payload}
                            }), i = {sdk_version: o.VERSION, process_id: Object(s.a)(), payload: JSON.stringify(e)};
                            try {
                                Object(r.c)(g, i, function (e) {
                                    "OK" === e ? t && t(e) : n && n(e)
                                }, function (e) {
                                    n && n(e)
                                }, {withCredentials: !0})
                            } catch (e) {
                                n && n(e)
                            }
                        }(t, function () {
                            p = 0, 0 !== u.length ? (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), e(l)) : d = "free"
                        }, function () {
                            setTimeout(function () {
                                e(l)
                            }, p++ < 2 ? 200 : 1e4)
                        })
                    }, 3e3)
                };
            t = function () {
                for (var t = [0], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            }, n = function () {
                for (var t = [1], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            }, i = function () {
                for (var t = [2], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            }, f = function () {
                for (var t = [3], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            };
            var h = {};
            return m = function (e) {
                h[e] || (i.apply(void 0, arguments), h[e] = !0)
            }, {
                DEBUG: 0, INFO: 1, WARNING: 2, ERROR: 3, NONE: 4, enableLogUpload: function () {
                    Object(o.setParameter)("UPLOAD_LOG", !0)
                }, disableLogUpload: function () {
                    Object(o.setParameter)("UPLOAD_LOG", !1)
                }, setProxyServer: function (e) {
                    g = e ? "https://".concat(e, "/ls/?h=").concat(Object(o.getParameter)("LOG_UPLOAD_SERVER"), "&p=443&d=upload/v1") : "https://".concat(Object(o.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v1")
                }, setLogLevel: function (e) {
                    e > 4 ? e = 4 : e < 0 && (e = 0), S = e
                }, log: e = function () {
                    var e, t = arguments[0], n = arguments;
                    if (n[0] = (e = new Date).toTimeString().split(" ")[0] + ":" + e.getMilliseconds() + " Agora-SDK [" + (v[t] || "DEFAULT") + "]:", function (e, t) {
                        if (Object(o.getParameter)("UPLOAD_LOG")) try {
                            t = Array.prototype.slice.call(t);
                            var n = "";
                            t.forEach(function (e) {
                                "object" === a()(e) && (e = JSON.stringify(e)), n = n + e + " "
                            }), u.push({
                                payload: n,
                                log_level: e
                            }), "free" === d && (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), I(l))
                        } catch (e) {
                        }
                    }(t, n), !(t < S)) switch (t) {
                        case 0:
                        case 1:
                            console.log.apply(console, n);
                            break;
                        case 2:
                            console.warn.apply(console, n);
                            break;
                        case 3:
                            console.error.apply(console, n);
                            break;
                        default:
                            return void console.log.apply(console, n)
                    }
                }, debug: t, info: n, warning: i, deprecate: m, error: f
            }
        }();
        t.default = f
    }, function (e, t, n) {
        "use strict";
        var i = n(11), a = n.n(i), r = n(4), o = n.n(r), s = n(2), c = n(0), d = n(7), u = n(12), l = n.n(u);
        n.d(t, "b", function () {
            return g
        }), n.d(t, "a", function () {
            return m
        });
        var p = {
            eventType: null,
            sid: null,
            lts: null,
            success: null,
            cname: null,
            uid: null,
            peer: null,
            cid: null,
            elapse: null,
            extend: null,
            vid: 0
        }, f = null, m = function () {
            return f || (f = "process-" + l()(), c.default.info("processId: " + f)), f
        }, g = function () {
            var e = {list: {}};
            e.url = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6080/events/message"), e.urlBackup = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6080/events/message"), e.setProxyServer = function (t) {
                t ? (e.url = Object(d.e)() ? "https://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), "&p=6443&d=events/message") : "http://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), "&p=6080&d=events/message"), e.urlBackup = Object(d.e)() ? "https://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), "&p=6443&d=events/message") : "http://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), "&p=6080&d=events/message"), c.default.debug("reportProxyServerURL: ".concat(e.url)), c.default.debug("reportProxyServerBackupURL: ".concat(e.urlBackup))) : (e.url = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6080/events/message"), e.urlBackup = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6080/events/message"))
            }, e.sessionInit = function (t, n) {
                var i = o()({}, p);
                i.startTime = +new Date, i.sid = t, i.cname = n.cname, e.list[t] = i;
                var a = o()({}, {willUploadConsoleLog: Object(s.getParameter)("UPLOAD_LOG")}, n.extend), r = o()({}, i);
                r.eventType = "session_init", r.appid = n.appid, r.browser = navigator.userAgent, r.build = s.BUILD, r.lts = +new Date, r.elapse = r.lts - r.startTime, r.extend = JSON.stringify(a), r.mode = n.mode, r.process = m(), r.success = n.succ, r.version = s.VERSION, delete r.startTime, e.send({
                    type: "io.agora.pb.Wrtc.Session",
                    data: r
                }), e._flushInvokeReport(t)
            }, e.joinChooseServer = function (t, n, i) {
                if (e.list[t]) {
                    n.uid && (e.list[t].uid = parseInt(n.uid)), n.cid && (e.list[t].cid = parseInt(n.cid));
                    var a = o()({}, e.list[t]);
                    a.eventType = "join_choose_server";
                    var r = n.lts;
                    a.lts = Date.now(), a.eventElapse = a.lts - r, a.chooseServerAddr = n.csAddr, a.errorCode = n.ec, a.elapse = a.lts - a.startTime, a.success = n.succ, a.chooseServerAddrList = JSON.stringify(n.serverList), delete a.startTime, e.send({
                        type: "io.agora.pb.Wrtc.JoinChooseServer",
                        data: a
                    })
                }
            }, e.reqUserAccount = function (t, n) {
                n.vid && (e.list[t].vid = n.vid);
                var i = o()({}, e.list[t]), a = n.lts;
                i.eventType = "req_user_account", i.lts = Date.now(), i.success = n.success, i.serverAddress = n.serverAddress, i.stringUid = n.stringUid, i.uid = n.uid, i.errorCode = n.errorCode, i.elapse = i.lts - i.startTime, i.eventElapse = i.lts - a, i.extend = "string" == typeof n.extend ? n.extend : JSON.stringify(n.extend), delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.ReqUserAccount",
                    data: i
                })
            }, e.joinGateway = function (t, n) {
                n.vid && (e.list[t].vid = n.vid);
                var i = o()({}, e.list[t]), a = n.lts;
                i.eventType = "join_gateway", i.lts = Date.now(), i.gatewayAddr = n.addr, i.success = n.succ, i.errorCode = n.ec, i.elapse = i.lts - i.startTime, i.eventElapse = i.lts - a, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.JoinGateway",
                    data: i
                })
            }, e.publish = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "publish";
                var a = n.lts;
                i.lts = Date.now(), i.eventElapse = i.lts - a, i.elapse = i.lts - i.startTime, i.success = n.succ, i.errorCode = n.ec, n.videoName && (i.videoName = n.videoName), n.audioName && (i.audioName = n.audioName), n.screenName && (i.screenName = n.screenName), delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.Publish",
                    data: i
                }), e._flushInvokeReport(t)
            }, e.subscribe = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "subscribe";
                var a = n.lts;
                i.lts = Date.now(), i.eventElapse = i.lts - a, i.elapse = i.lts - i.startTime, i.errorCode = n.ec, i.success = n.succ, isFinite(n.peerid) ? i.peer = n.peerid : i.peerSuid = "" + n.peerid, "boolean" == typeof n.video && (i.video = n.video), "boolean" == typeof n.audio && (i.audio = n.audio), delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.Subscribe",
                    data: i
                }), e._flushInvokeReport(t)
            }, e.firstRemoteFrame = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "first_remote_frame";
                var a = n.lts;
                i.lts = Date.now(), i.eventElapse = i.lts - a, i.elapse = i.lts - i.startTime, i.width = n.width, i.height = n.height, i.success = n.succ, i.errorCode = n.ec, isFinite(n.peerid) ? i.peer = n.peerid : i.peerSuid = "" + n.peerid, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.FirstFrame",
                    data: i
                })
            }, e.streamSwitch = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "stream_switch", i.lts = Date.now(), i.isDual = n.isdual, i.elapse = i.lts - i.startTime, i.success = i.succ, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.StreamSwitch",
                    data: i
                })
            }, e.audioSendingStopped = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "audio_sending_stopped", i.lts = Date.now(), i.elapse = i.lts - i.startTime, i.reason = n.reason, i.success = n.succ, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.AudioSendingStopped",
                    data: i
                })
            }, e.videoSendingStopped = function (t, n) {
                var i = o()({}, e.list[t]);
                i.eventType = "video_sending_stopped", i.lts = Date.now(), i.elapse = i.lts - i.startTime, i.reson = n.reason, i.success = n.succ, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.VideoSendingStopped",
                    data: i
                })
            }, e.requestProxyAppCenter = function (t, n) {
                var i = o()({}, e.list[t]), a = n.lts;
                i.eventType = "request_proxy_appcenter", i.lts = Date.now(), i.eventElapse = i.lts - a, i.elapse = i.lts - i.startTime, i.extend = n.extend + "", i.APAddr = n.APAddr, i.workerManagerList = n.workerManagerList, i.response = n.response, i.errorCode = n.ec, i.success = n.succ, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.RequestProxyAppCenter",
                    data: i
                })
            }, e.requestProxyWorkerManager = function (t, n) {
                var i = o()({}, e.list[t]), a = n.lts;
                i.eventType = "request_proxy_worker_manager", i.lts = Date.now(), i.eventElapse = i.lts - a, i.elapse = i.lts - i.startTime, i.extend = n.extend, i.workerManagerAddr = n.workerManagerAddr, i.response = n.response, i.errorCode = n.ec, i.success = n.succ, delete i.startTime, e.send({
                    type: "io.agora.pb.Wrtc.RequestProxyWorkerManager",
                    data: i
                })
            };
            var t = 0;
            return e.reportApiInvoke = function (e, n) {
                var i = n.tag, r = n.name, o = n.getStates, d = n.options, u = n.timeout, l = void 0 === u ? 6e4 : u,
                    p = n.callback, f = n.reportResult, m = void 0 === f || f, v = Date.now(), S = 0, I = t++,
                    h = function () {
                        return a()({
                            tag: i,
                            invokeId: I,
                            sid: e,
                            name: r,
                            apiInvokeTime: v,
                            options: d
                        }, o && {
                            states: (t = o(), Object.keys(t).reduce(function (e, n) {
                                var i = e;
                                return null != t[n] && (i[n] = t[n]), i
                            }, {}))
                        });
                        var t
                    }, _ = !!Object(s.getParameter)("SHOW_REPORT_INVOKER_LOG");
                _ && c.default.info("".concat(r, " start"));
                var y = setTimeout(function () {
                    g._sendApiInvoke(a()({}, h(), {error: "API_INVOKE_TIMEOUT", success: !1}))
                }, l);
                return function (e, t) {
                    if (clearTimeout(y), ++S > 1 && (e = "EXECUTOR_INVOKE_".concat(S)), e) return g._sendApiInvoke(a()({}, h(), {
                        success: !1,
                        error: e
                    }, o && {states: o()})), _ && c.default.info("".concat(r, " onFailure"), e), p && p(e);
                    g._sendApiInvoke(a()({}, h(), {success: !0}, m && {result: t}, o && {states: o()})), _ && c.default.info("".concat(r, " onSuccess")), p && p(null, t)
                }
            }, e._cachedItems = [], e._cacheInvokeReport = function (t) {
                t.lts || (t.lts = Date.now()), e._cachedItems.push(t), e._cachedItems.length > 50 && e._cachedItems.shift()
            }, e._flushInvokeReport = function (t) {
                if (e._cachedItems.length) {
                    var n = e._cachedItems;
                    e._cachedItems = [], c.default.debug("Flush cached event reporting:", n.length), n.forEach(function (n, i) {
                        n.sid = t, setTimeout(function () {
                            e._sendApiInvoke(n)
                        }, 5e3 + 500 * i)
                    })
                }
            }, e._sendApiInvoke = function (t) {
                var n = t.tag, i = t.invokeId, r = t.sid, o = t.name, c = t.result, d = t.states, u = t.options,
                    l = t.error, p = t.success, f = t.apiInvokeTime, m = t.lts,
                    g = Object(s.getParameter)("NOT_REPORT_EVENT");
                if (!(n && g instanceof Array && -1 !== g.indexOf(n))) if (e.list[r]) {
                    var v = e.list[r], S = v.startTime, I = v.cname, h = v.uid, _ = v.cid,
                        y = (m = m || Date.now()) - S, E = m - f, b = "";
                    if (u) try {
                        b = JSON.stringify(u)
                    } catch (e) {
                        b = u.toString()
                    }
                    var T = a()({
                        invokeId: i,
                        sid: r,
                        cname: I,
                        cid: _,
                        lts: m,
                        uid: h,
                        success: p,
                        elapse: y,
                        apiName: o,
                        execElapse: E
                    }, void 0 !== u && {options: b}, void 0 !== d && {execStates: JSON.stringify(d)}, void 0 !== l && {errorCode: JSON.stringify(l)}, void 0 !== c && {execResult: JSON.stringify(c)});
                    e.send({type: "io.agora.pb.Wrtc.ApiInvoke", data: T})
                } else e._cacheInvokeReport(arguments[0])
            }, e._send = function (t) {
                try {
                    var n = [];
                    t && t.data && t.data.apiName ? n.push(["apiName", "" + t.data.apiName]) : t && t.data && t.data.eventType && n.push(["eventType", t.data.eventType]);
                    var i = n.map(function (e) {
                        return "".concat(e[0], "=").concat(encodeURIComponent(e[1]))
                    }).join("&"), a = -1 === e.url.indexOf("?") ? "".concat(e.url, "?").concat(i) : e.url;
                    Object(d.c)(a, t, null, function (n) {
                        var a = -1 === e.urlBackup.indexOf("?") ? "".concat(e.urlBackup, "?").concat(i) : e.urlBackup;
                        Object(d.c)(a, t, null, function (e) {
                        }, {timeout: 1e4})
                    }, {timeout: 1e4})
                } catch (e) {
                }
            }, e.sendCache = [], e.sendTimer = null, e.send = function (t) {
                if (e.sendCache.push(t), null === e.sendTimer) {
                    return function t() {
                        e.sendTimer = setTimeout(function () {
                            if (0 !== e.sendCache.length) return e._send(e.sendCache.shift()), t();
                            e.sendTimer = null
                        }, Object(s.getParameter)("EVENT_REPORT_SEND_INTERVAL"))
                    }()
                }
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.BUILD = "v2.9.0-0-gd55f286";
        t.VERSION = "2.9.0";
        t.SUPPORT_RESOLUTION_LIST = {
            "90p_1": [160, 90, null, null, null, null],
            "120p_1": [160, 120, 15, 15, 30, 65],
            "120p_3": [120, 120, 15, 15, 30, 50],
            "120p_4": [212, 120, null, null, null, null],
            "180p_1": [320, 180, 15, 15, 30, 140],
            "180p_3": [180, 180, 15, 15, 30, 100],
            "180p_4": [240, 180, 15, 15, 30, 120],
            "240p_1": [320, 240, 15, 15, 40, 200],
            "240p_3": [240, 240, 15, 15, 40, 140],
            "240p_4": [424, 240, 15, 15, 40, 220],
            "360p_1": [640, 360, 15, 15, 80, 400],
            "360p_3": [360, 360, 15, 15, 80, 260],
            "360p_4": [640, 360, 30, 30, 80, 600],
            "360p_6": [360, 360, 30, 30, 80, 400],
            "360p_7": [480, 360, 15, 15, 80, 320],
            "360p_8": [480, 360, 30, 30, 80, 490],
            "360p_9": [640, 360, 15, 15, 80, 800],
            "360p_10": [640, 360, 24, 24, 80, 800],
            "360p_11": [640, 360, 24, 24, 80, 1e3],
            "480p_1": [640, 480, 15, 15, 20, 500, 1, 5],
            "480p_2": [640, 480, 30, 30, 100, 1e3, 25, 30],
            "480p_3": [480, 480, 15, 15, 100, 400],
            "480p_4": [640, 480, 30, 30, 100, 750],
            "480p_6": [480, 480, 30, 30, 100, 600],
            "480p_8": [848, 480, 15, 15, 100, 610],
            "480p_9": [848, 480, 30, 30, 100, 930],
            "480p_10": [640, 480, 10, 10, 100, 400],
            "720p_1": [1280, 720, 15, 15, 120, 1130, 1, 5],
            "720p_2": [1280, 720, 30, 30, 120, 2e3, 25, 30],
            "720p_3": [1280, 720, 30, 30, 120, 1710],
            "720p_5": [960, 720, 15, 15, 120, 910],
            "720p_6": [960, 720, 30, 30, 120, 1380],
            "1080p_1": [1920, 1080, 15, 15, 120, 2080, 1, 5],
            "1080p_2": [1920, 1080, 30, 30, 120, 3e3, 25, 30],
            "1080p_3": [1920, 1080, 30, 30, 120, 3150],
            "1080p_5": [1920, 1080, 60, 60, 120, 4780],
            "1440p_1": [2560, 1440, 30, 30, 120, 4850],
            "1440p_2": [2560, 1440, 60, 60, 120, 7350],
            "4k_1": [3840, 2160, 30, 30, 120, 8910],
            "4k_3": [3840, 2160, 60, 60, 120, 13500]
        };
        t.AUDIO_PROFILE_SETTINGS = {
            speech_low_quality: [!1, !1, !0, !0],
            speech_standard: [!1, !1, !0, !1],
            music_standard: [!1, !1, !1, !1],
            standard_stereo: [!1, !0, !1, !1],
            high_quality: [!0, !1, !1, !1],
            high_quality_stereo: [!0, !0, !1, !1],
            default: [!1, !1, !1, !1]
        };
        var i = {
            WEBCS_DOMAIN: ["webrtc2-ap-web-1.agora.io", "webrtc2-ap-web-2.agoraio.cn"],
            WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-3.agora.io", "webrtc2-ap-web-4.agoraio.cn"],
            PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"],
            CDS_AP: ["cds-ap-web-1.agora.io", "cds-ap-web-2.agoraio.cn", "cds-ap-web-3.agora.io", "cds-ap-web-4.agoraio.cn"],
            ACCOUNT_REGISTER: ["sua-ap-web-1.agora.io", "sua-ap-web-2.agoraio.cn", "sua-ap-web-3.agora.io", "sua-ap-web-4.agoraio.cn"],
            UAP_AP: ["uap-ap-web-1.agora.io", "uap-ap-web-2.agoraio.cn", "uap-ap-web-3.agora.io", "uap-ap-web-4.agoraio.cn"],
            ACCOUNT_REGISTER_RETRY_TIMEOUT: 1,
            ACCOUNT_REGISTER_RETRY_RATIO: 2,
            ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX: 6e4,
            ACCOUNT_REGISTER_RETRY_COUNT_MAX: 1e5,
            AUDIO_CONTEXT: null,
            LOG_UPLOAD_SERVER: "logservice.agora.io",
            EVENT_REPORT_DOMAIN: "webcollector-1.agora.io",
            EVENT_REPORT_BACKUP_DOMAIN: "webcollector-2.agoraio.cn",
            WEBCS_BACKUP_CONNECT_TIMEOUT: 6e3,
            LIVESTREAMING_ALIGN: !0,
            HTTP_CONNECT_TIMEOUT: 5e3,
            PLAYER_STATE_DEFER: 2e3,
            SIGNAL_REQUEST_TIMEOUT: 1e4,
            SIGNAL_REQUEST_WATCH_INTERVAL: 1e3,
            REPORT_STATS: !0,
            REPORT_STATS_TIMEOUT: 3e3,
            UPLOAD_LOG: !1,
            NOT_REPORT_EVENT: [],
            FILEPATH_LENMAX: 255,
            SUBSCRIBE_TCC: !1,
            PING_PONG_TIME_OUT: 10,
            DUALSTREAM_OPERATION_CHECK: !0,
            WEBSOCKET_TIMEOUT_MIN: 1e4,
            EVENT_REPORT_SEND_INTERVAL: 1e3,
            MEDIA_ELEMENT_EXISTS_DEPTH: 3,
            CANDIDATE_TIMEOUT: 2e3,
            SHIM_CANDIDATE: !1,
            LEAVE_MSG_TIMEOUT: 2e3,
            TICKET_RENEW_TIMEOUT: 828e5,
            SHOW_REPORT_INVOKER_LOG: !1,
            STATS_FILTER: {transportId: !0, googTrackId: !0},
            FORCE_TURN: !1,
            TURN_ENABLE_TCP: !0,
            TURN_ENABLE_UDP: !0,
            FORCE_CHANGED_GATEWAY_FLAG: !1,
            JOIN_EXTEND: "",
            PUB_EXTEND: "",
            SUB_EXTEND: ""
        };
        t.setParameter = function (e, t) {
            return void 0 !== i[e] && (i[e] = t, !0)
        };
        t.getParameter = function (e) {
            return void 0 !== i[e] ? i[e] : null
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "getBrowserInfo", function () {
            return I
        }), n.d(t, "getBrowserVersion", function () {
            return p
        }), n.d(t, "getBrowserOS", function () {
            return f
        }), n.d(t, "isChrome", function () {
            return i
        }), n.d(t, "isSafari", function () {
            return a
        }), n.d(t, "isFireFox", function () {
            return o
        }), n.d(t, "isOpera", function () {
            return s
        }), n.d(t, "isEdge", function () {
            return r
        }), n.d(t, "isQQBrowser", function () {
            return c
        }), n.d(t, "isWeChatBrowser", function () {
            return d
        }), n.d(t, "isLegacyChrome", function () {
            return g
        }), n.d(t, "isSupportedPC", function () {
            return u
        }), n.d(t, "isSupportedMobile", function () {
            return l
        }), n.d(t, "getChromeKernelVersion", function () {
            return S
        }), n.d(t, "isChromeKernel", function () {
            return m
        });
        var i = function () {
            var e = I();
            return e.name && "Chrome" === e.name
        }, a = function () {
            var e = I();
            return e.name && "Safari" === e.name
        }, r = function () {
            var e = I();
            return e.name && "Edge" === e.name
        }, o = function () {
            var e = I();
            return e.name && "Firefox" === e.name
        }, s = function () {
            var e = I();
            return e.name && "OPR" === e.name
        }, c = function () {
            var e = I();
            return e.name && "QQBrowser" === e.name
        }, d = function () {
            var e = I();
            return e.name && "MicroMessenger" === e.name
        }, u = function () {
            var e = f();
            return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows")
        }, l = function () {
            var e = f();
            return "Android" === e || "iOS" === e
        }, p = function () {
            return I().version
        }, f = function () {
            return I().os
        }, m = function () {
            return !!navigator.userAgent.match(/chrome\/[\d]./i)
        };

        function g() {
            return window.navigator.appVersion && null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
        }

        var v, S = function () {
            var e = navigator.userAgent.match(/chrome\/[\d]./i);
            return e && e[0] && e[0].split("/")[1]
        }, I = (v = function () {
            var e, t = navigator.userAgent,
                n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            "Chrome" === n[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e), "Safari" === n[1] && null != (e = t.match(/version\/(\d+)/i)) && (n[2] = e[1]), ~t.toLowerCase().indexOf("qqbrowser") && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("micromessenger") && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("edge") && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (n = [null, "IE", e[1]]);
            var i = void 0, a = [{s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/}, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/}, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {s: "Windows Vista", r: /Windows NT 6.0/}, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/}, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/}, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/}, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {s: "Windows CE", r: /Windows CE/}, {s: "Windows 3.11", r: /Win16/}, {
                s: "Android",
                r: /Android/
            }, {s: "Open BSD", r: /OpenBSD/}, {s: "Sun OS", r: /SunOS/}, {s: "Linux", r: /(Linux|X11)/}, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {s: "Mac OS X", r: /Mac OS X/}, {s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}, {
                s: "QNX",
                r: /QNX/
            }, {s: "UNIX", r: /UNIX/}, {s: "BeOS", r: /BeOS/}, {s: "OS/2", r: /OS\/2/}, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var r in a) {
                var o = a[r];
                if (o.r.test(navigator.userAgent)) {
                    i = o.s;
                    break
                }
            }
            return {name: n[1], version: n[2], os: i}
        }(), function () {
            return v
        })
    }, function (e, t) {
        function n() {
            return e.exports = n = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, n.apply(this, arguments)
        }

        e.exports = n
    }, function (e, t, n) {
        e.exports = n(24)
    }, function (e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(t) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = i = function (e) {
                return n(e)
            } : e.exports = i = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
            }, i(t)
        }

        e.exports = i
    }, function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return u
        }), n.d(t, "e", function () {
            return l
        }), n.d(t, "b", function () {
            return s
        }), n.d(t, "a", function () {
            return c
        }), n.d(t, "d", function () {
            return d
        });
        var i = n(2), a = n(8), r = 0, o = 0, s = function () {
            return r
        }, c = function () {
            return o
        }, d = function () {
            r = 0, o = 0
        }, u = function (e, t, n, s, c) {
            var d = new XMLHttpRequest;
            if (d.timeout = t.timeout || Object(i.getParameter)("HTTP_CONNECT_TIMEOUT"), d.open("POST", e, !0), d.setRequestHeader("Content-type", "application/json; charset=utf-8"), c) for (var u in c) "withCredentials" == u ? d.withCredentials = !0 : d.setRequestHeader(u, c[u]);
            d.onload = function (e) {
                o += Object(a.d)(d.responseText), n && n(d.responseText)
            }, d.onerror = function (t) {
                s && s(t, e)
            }, d.ontimeout = function (t) {
                s && s(t, e)
            };
            var l = JSON.stringify(t);
            r += Object(a.d)(l), d.send(l)
        }, l = function () {
            return "https:" == document.location.protocol
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return u
        }), n.d(t, "a", function () {
            return d
        }), n.d(t, "g", function () {
            return l
        }), n.d(t, "c", function () {
            return p
        }), n.d(t, "f", function () {
            return f
        }), n.d(t, "e", function () {
            return g
        }), n.d(t, "d", function () {
            return m
        });
        n(6);
        var i = n(3), a = n(0), r = n(12), o = n.n(r), s = n(13), c = n(10), d = function (e) {
            return this.audioContext = Object(s.a)(), this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e), this.analyser = this.audioContext.createAnalyser(), this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount), this.sourceNode.connect(this.analyser), this.getAudioLevel = function () {
                if (this.analyser) {
                    this.analyser.getByteTimeDomainData(this.timeDomainData);
                    for (var e = 0, t = 0; t < this.timeDomainData.length; t++) e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
                    return e / 128
                }
                return a.default.warning("can't find analyser in audioLevelHelper"), 0
            }, this
        };

        function u() {
            return o()().replace(/-/g, "").toUpperCase()
        }

        var l = function (e, t, n) {
            try {
                a.default.debug("start vsResHack", e);
                var r = document.createElement("video");
                r.setAttribute("autoplay", ""), r.setAttribute("muted", ""), r.muted = !0, r.setAttribute("playsinline", ""), r.setAttribute("style", "position: absolute; top: 0; left: 0; width:1px; high:1px;"), document.body.appendChild(r), r.addEventListener("playing", function (n) {
                    i.isFireFox() ? r.videoWidth && (a.default.debug("[vsResHack] get stream resolution: ", "".concat(r.videoWidth, " x ").concat(r.videoHeight), e), t(r.videoWidth, r.videoHeight), document.body.removeChild(r)) : (a.default.debug("[vsResHack] get stream resolution: ", "".concat(r.videoWidth, " x ").concat(r.videoHeight), e), t(r.videoWidth, r.videoHeight), document.body.removeChild(r))
                }), Object(c.setSrcObject)(r, e)
            } catch (e) {
                n(e)
            }
        }, p = function (e) {
            return "number" == typeof e && 0 <= e && e <= 4294967295
        }, f = function (e) {
            isNaN(e) && (e = 1e3);
            var t = +new Date, n = (t = (9301 * t + 49297) % 233280) / 233280;
            return Math.ceil(n * e)
        }, m = function (e) {
            var t = encodeURIComponent(e).match(/%[89ABab]/g);
            return e.length + (t ? t.length : 0)
        }, g = function () {
            if (!document.getElementById("agora-ban-tip")) {
                var e = document.createElement("div");
                e.id = "agora-ban-tip", e.style = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;", document.querySelector("body").prepend(e);
                var t = document.createElement("div");
                t.style = "background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;", e.append(t);
                var n = document.createElement("div");
                n.style = "height: 76px; display: flex; justify-content: center; align-items: center;";
                var i = document.createElement("span");
                i.style = "height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;", i.innerText = "!";
                var a = document.createElement("span");
                a.innerText = "This browser does not support webRTC", n.append(i), n.append(a);
                var r = document.createElement("div");
                r.style = "height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;", r.innerText = "OK", t.append(n), t.append(r), r.onclick = function () {
                    var e = document.getElementById("agora-ban-tip");
                    e.parentNode.removeChild(e)
                }
            }
        }
    }, function (e, t) {
        function n(e, t, n, i, a, r, o) {
            try {
                var s = e[r](o), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(i, a)
        }

        e.exports = function (e) {
            return function () {
                var t = this, i = arguments;
                return new Promise(function (a, r) {
                    var o = e.apply(t, i);

                    function s(e) {
                        n(o, a, r, s, c, "next", e)
                    }

                    function c(e) {
                        n(o, a, r, s, c, "throw", e)
                    }

                    s(void 0)
                })
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "RTCPeerConnection", function () {
            return b
        }), n.d(t, "getUserMedia", function () {
            return o
        }), n.d(t, "attachMediaStream", function () {
            return s
        }), n.d(t, "reattachMediaStream", function () {
            return c
        }), n.d(t, "setSrcObject", function () {
            return f
        }), n.d(t, "getSrcObject", function () {
            return m
        }), n.d(t, "webrtcDetectedBrowser", function () {
            return d
        }), n.d(t, "webrtcDetectedVersion", function () {
            return u
        }), n.d(t, "webrtcMinimumVersion", function () {
            return l
        }), n.d(t, "webrtcTesting", function () {
            return T
        }), n.d(t, "webrtcUtils", function () {
            return S
        });
        var i = n(6), a = n.n(i), r = n(3), o = null, s = null, c = null, d = null, u = null, l = null, p = null,
            f = null, m = null, g = null, v = {addStream: null}, S = {
                log: function () {
                }, extractVersion: function (e, t, n) {
                    var i = e.match(t);
                    return i && i.length >= n && parseInt(i[n])
                }
            };
        if ("object" == ("undefined" == typeof window ? "undefined" : a()(window)) ? (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype ? (f = function (e, t) {
            e.srcObject = t
        }, m = function (e) {
            return e.srcObject
        }) : (f = function (e, t) {
            "mozSrcObject" in e ? e.mozSrcObject = t : (e._srcObject = t, e.src = t ? URL.createObjectURL(t) : null)
        }, m = function (e) {
            return "mozSrcObject" in e ? e.mozSrcObject : e._srcObject
        }), o = window.navigator && window.navigator.getUserMedia) : (f = function (e, t) {
            e.srcObject = t
        }, m = function (e) {
            return e.srcObject
        }), s = function (e, t) {
            f(e, t)
        }, c = function (e, t) {
            f(e, m(t))
        }, "undefined" != typeof window && window.navigator) if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
            for (var I in S.log("This appears to be Firefox"), d = "firefox", u = S.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), l = 31, g = mozRTCPeerConnection, v) v[I] = g.prototype[I];
            if (p = function (e, t) {
                if (u < 38 && e && e.iceServers) {
                    for (var n = [], i = 0; i < e.iceServers.length; i++) {
                        var a = e.iceServers[i];
                        if (a.hasOwnProperty("urls")) for (var r = 0; r < a.urls.length; r++) {
                            var o = {url: a.urls[r]};
                            0 === a.urls[r].indexOf("turn") && (o.username = a.username, o.credential = a.credential), n.push(o)
                        } else n.push(e.iceServers[i])
                    }
                    e.iceServers = n
                }
                var s = new g(e, t);
                for (var c in v) s[c] = v[c];
                return s
            }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), o = function (e, t, n) {
                var i = function (e) {
                    if ("object" !== a()(e) || e.require) return e;
                    var t = [];
                    return Object.keys(e).forEach(function (n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var i = e[n] = "object" === a()(e[n]) ? e[n] : {ideal: e[n]};
                            if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || t.push(n), void 0 !== i.exact && ("number" == typeof i.exact ? i.min = i.max = i.exact : e[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                                e.advanced = e.advanced || [];
                                var r = {};
                                "number" == typeof i.ideal ? r[n] = {
                                    min: i.ideal,
                                    max: i.ideal
                                } : r[n] = i.ideal, e.advanced.push(r), delete i.ideal, Object.keys(i).length || delete e[n]
                            }
                        }
                    }), t.length && (e.require = t), e
                };
                return u < 38 && (S.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = i(e.audio)), e.video && (e.video = i(e.video)), S.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, n)
            }, navigator.getUserMedia = o, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: E,
                addEventListener: function () {
                },
                removeEventListener: function () {
                }
            }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
                return new Promise(function (e) {
                    e([{kind: "audioinput", deviceId: "default", label: "", groupId: ""}, {
                        kind: "videoinput",
                        deviceId: "default",
                        label: "",
                        groupId: ""
                    }])
                })
            }, u < 41) {
                var h = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                navigator.mediaDevices.enumerateDevices = function () {
                    return h().then(void 0, function (e) {
                        if ("NotFoundError" === e.name) return [];
                        throw e
                    })
                }
            }
        } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
            for (var I in S.log("This appears to be Chrome"), d = "chrome", u = S.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), l = 38, g = webkitRTCPeerConnection, v) v[I] = g.prototype[I];
            p = function (e, t) {
                e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                var n = new g(e, t);
                for (var i in v) n[i] = v[i];
                var a = n.getStats.bind(n);
                return n.getStats = function (e, t, n) {
                    var i = this, r = arguments;
                    r.length > 0 && "function" == typeof e && (t ? (n = t, t = e, r = [e = null, t, n]) : (t = e, r = [e = null, t]));
                    var o = function (e) {
                        var t = {};
                        return e.result().forEach(function (e) {
                            var n = {id: e.id, timestamp: e.timestamp, type: e.type};
                            e.names().forEach(function (t) {
                                n[t] = e.stat(t)
                            }), t[n.id] = n
                        }), t
                    };
                    if (r.length >= 2) {
                        return a.apply(this, [function (e) {
                            r[1](o(e))
                        }, r[0]])
                    }
                    return new Promise(function (t, n) {
                        1 === r.length && null === e ? a.apply(i, [function (e) {
                            t.apply(null, [o(e)])
                        }, n]) : a.apply(i, [t, n])
                    })
                }, n
            }, ["createOffer", "createAnswer"].forEach(function (e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function () {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" === a()(arguments[0])) {
                        var n = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function (i, a) {
                            t.apply(e, [i, a, n])
                        })
                    }
                    return t.apply(this, arguments)
                }
            }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function () {
                    var e = arguments, n = this;
                    return new Promise(function (i, a) {
                        t.apply(n, [e[0], function () {
                            i(), e.length >= 2 && e[1].apply(null, [])
                        }, function (t) {
                            a(t), e.length >= 3 && e[2].apply(null, [t])
                        }])
                    })
                }
            });
            var _ = function (e) {
                if ("object" !== a()(e) || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function (n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var i = "object" === a()(e[n]) ? e[n] : {ideal: e[n]};
                        void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                        var r = function (e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                        };
                        if (void 0 !== i.ideal) {
                            t.optional = t.optional || [];
                            var o = {};
                            "number" == typeof i.ideal ? (o[r("min", n)] = i.ideal, t.optional.push(o), (o = {})[r("max", n)] = i.ideal, t.optional.push(o)) : (o[r("", n)] = i.ideal, t.optional.push(o))
                        }
                        void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach(function (e) {
                            void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, n)] = i[e])
                        })
                    }
                }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            };
            if (o = function (e, t, n) {
                return e.audio && (e.audio = _(e.audio)), e.video && (e.video = _(e.video)), S.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, n)
            }, navigator.getUserMedia = o, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: E,
                enumerateDevices: function () {
                    return new Promise(function (e) {
                        var t = {audio: "audioinput", video: "videoinput"};
                        return MediaStreamTrack.getSources(function (n) {
                            e(n.map(function (e) {
                                return {label: e.label, kind: t[e.kind], deviceId: e.id, groupId: ""}
                            }))
                        })
                    })
                }
            }), navigator.mediaDevices.getUserMedia) {
                if (Number(Object(r.getBrowserVersion)().split(".")[0]) < 46) {
                    var y = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function (e) {
                        return S.log("spec:   " + JSON.stringify(e)), e.audio = _(e.audio), e.video = _(e.video), S.log("chrome: " + JSON.stringify(e)), y(e)
                    }
                }
            } else navigator.mediaDevices.getUserMedia = function (e) {
                return E(e)
            };
            void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function () {
                S.log("Dummy mediaDevices.addEventListener called.")
            }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function () {
                S.log("Dummy mediaDevices.removeEventListener called.")
            }), s = function (e, t) {
                u >= 43 ? f(e, t) : void 0 !== e.src ? e.src = t ? URL.createObjectURL(t) : null : S.log("Error attaching stream to element.")
            }, c = function (e, t) {
                u >= 43 ? f(e, m(t)) : e.src = t.src
            }
        } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (S.log("This appears to be Edge"), d = "edge", u = S.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), l = 12) : S.log("Browser does not appear to be WebRTC-capable"); else S.log("This does not appear to be a browser"), d = "not a browser";

        function E(e) {
            return new Promise(function (t, n) {
                o(e, t, n)
            })
        }

        var b, T = {};
        try {
            Object.defineProperty(T, "version", {
                set: function (e) {
                    u = e
                }
            })
        } catch (e) {
        }
        p ? b = p : "undefined" != typeof window && (b = window.RTCPeerConnection)
    }, function (e, t, n) {
        var i = n(19);
        e.exports = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function (t) {
                    i(e, t, n[t])
                })
            }
            return e
        }
    }, function (e, t, n) {
        var i = n(17), a = n(18);
        e.exports = function (e, t, n) {
            var r = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var o = (e = e || {}).random || (e.rng || i)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) for (var s = 0; s < 16; ++s) t[r + s] = o[s];
            return t || a(o)
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        });
        var i = window.AudioContext || window.webkitAudioContext, a = n(2), r = a.getParameter, o = a.setParameter,
            s = function () {
                return r("AUDIO_CONTEXT") || (console.log("Creating Audio Context"), o("AUDIO_CONTEXT", function () {
                    if (i) return new i;
                    throw new Error("AUDIO_CONTEXT_NOT_SUPPORTED")
                }())), r("AUDIO_CONTEXT")
            }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i, a = n(0), r = n(10);
        !function (e) {
            e.NEW = "new", e.PREPARING_OFFER = "preparing-offer", e.OFFER_SENT = "offer-sent", e.ESTABLISHED = "established", e.CLOSED = "closed"
        }(i || (i = {}));
        var o = function () {
            function e(e) {
                this.candidate = null, this.state = i.NEW, this.config = e, this.isSubscriber = this.config.isSubscriber, this.peerConnection = this.initPeecConnection(e), this.peerConnection.onicecandidate = this._onicecandidate.bind(this), this.peerConnection.oniceconnectionstatechange = this._oniceconnectionstatechange.bind(this), this.peerConnection.onaddstream = this._onaddstream.bind(this), this.peerConnection.ontrack = this._ontrack.bind(this), this.processSignalingMessage = this.setAnswer.bind(this), this.peerConnection.createOffer({
                    offerToReceiveAudio: !0,
                    offerToReceiveVideo: !0
                }).then(this.setLocalSDP.bind(this)), this.sendVideoStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "h264" === this.config.codec ? "H264" : "VP8",
                    bytesSent: "0",
                    packetsLost: "0",
                    packetsSent: "0",
                    googAdaptationChanges: "0",
                    googAvgEncodeMs: "0",
                    googEncodeUsagePercent: "0",
                    googFirsReceived: "0",
                    googFrameHeightSent: "0",
                    googFrameHeightInput: "0",
                    googFrameRateInput: "0",
                    googFrameRateSent: "0",
                    googFrameWidthSent: "0",
                    googFrameWidthInput: "0",
                    googNacksReceived: "0",
                    googPlisReceived: "0",
                    googRtt: "0",
                    googFramesEncoded: "0"
                }, this.sendAudioStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "opus",
                    aecDivergentFilterFraction: "0",
                    audioInputLevel: "0",
                    bytesSent: "0",
                    packetsSent: "0",
                    googEchoCancellationReturnLoss: "0",
                    googEchoCancellationReturnLossEnhancement: "0"
                }, this.receiveAudioStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    audioOutputLevel: "0",
                    bytesReceived: "0",
                    packetsLost: "0",
                    packetsReceived: "0",
                    googAccelerateRate: "0",
                    googCurrentDelayMs: "0",
                    googDecodingCNG: "0",
                    googDecodingCTN: "0",
                    googDecodingCTSG: "0",
                    googDecodingNormal: "0",
                    googDecodingPLC: "0",
                    googDecodingPLCCNG: "0",
                    googExpandRate: "0",
                    googJitterBufferMs: "0",
                    googJitterReceived: "0",
                    googPreemptiveExpandRate: "0",
                    googPreferredJitterBufferMs: "0",
                    googSecondaryDecodedRate: "0",
                    googSpeechExpandRate: "0"
                }, this.receiveVideoStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googTargetDelayMs: "0",
                    packetsLost: "0",
                    googDecodeMs: "0",
                    googMaxDecodeMs: "0",
                    googRenderDelayMs: "0",
                    googFrameWidthReceived: "0",
                    googFrameHeightReceived: "0",
                    googFrameRateReceived: "0",
                    googFrameRateDecoded: "0",
                    googFrameRateOutput: "0",
                    googFramesDecoded: "0",
                    googFrameReceived: "0",
                    googJitterBufferMs: "0",
                    googCurrentDelayMs: "0",
                    googMinPlayoutDelayMs: "0",
                    googNacksSent: "0",
                    googPlisSent: "0",
                    googFirsSent: "0",
                    bytesReceived: "0",
                    packetsReceived: "0"
                }
            }

            return e.prototype.addStream = function (e) {
                this.peerConnection.addStream(e)
            }, e.prototype.setAnswer = function (e) {
                var t = JSON.parse(e);
                this.peerConnection.setRemoteDescription(new RTCSessionDescription({
                    sdp: t.sdp,
                    type: "answer"
                })), this.onsignalingmessage && this.onsignalingmessage("")
            }, e.prototype.close = function () {
                this.peerConnection.close()
            }, e.prototype.getStats = function (e, t) {
                if (void 0 === t && (t = 500), t = t > 500 ? 500 : t, Date.now() - this.lastTimeGetStats < t) {
                    var n = [];
                    this.config.isSubscriber ? (n.push(this.receiveVideoStats), n.push(this.receiveAudioStats)) : (n.push(this.sendAudioStats), n.push(this.sendVideoStats)), n.push({
                        id: "time",
                        startTime: this.connectedTime,
                        timestamp: Date.now()
                    }), e && e(n)
                } else this._getStats(e)
            }, e.prototype._getStats = function (e) {
                var t = this, n = [];
                this.peerConnection.getStats(null).then(function (i) {
                    t.lastTimeGetStats = Date.now(), Object.keys(i).map(function (e) {
                        var n = i[e];
                        t.config.isSubscriber ? n.type && "inboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.receiveAudioStats.id = n.id + "recv", t.receiveAudioStats.type = n.type + "", t.receiveAudioStats.mediaType = n.mediaType + "", t.receiveAudioStats.packetsReceived = n.packetsReceived + "", t.receiveAudioStats.bytesReceived = n.bytesReceived + "", t.receiveAudioStats.packetsLost = n.packetsLost + "", t.receiveAudioStats.googJitterReceived = n.jitter + "") : n.type && "inboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.receiveVideoStats.id = n.id + "recv", t.receiveVideoStats.type = n.type + "", t.receiveVideoStats.mediaType = n.mediaType + "", t.receiveVideoStats.packetsReceived = n.packetsReceived + "", t.receiveVideoStats.bytesReceived = n.bytesReceived + "", t.receiveVideoStats.packetsLost = n.packetsLost + "", t.receiveVideoStats.googJitterBufferMs = n.jitter + "", t.receiveVideoStats.googPlisSent = n.pliCount + "", t.receiveVideoStats.googFirsSent = n.firCount + "", t.receiveVideoStats.googNacksSent = n.nackCount + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("v") ? (t.receiveVideoStats.googFrameHeightReceived = n.frameHeight + "", t.receiveVideoStats.googFrameWidthReceived = n.frameWidth + "", t.receiveVideoStats.googFrameRateDecoded = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateOutput = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateReceived = n.framesPerSecond + "", t.receiveVideoStats.googFramesDecoded = n.framesDecoded + "", t.receiveVideoStats.googFrameReceived = n.framesReceived + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("a") && (t.receiveAudioStats.audioOutputLevel = n.audioLevel + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.sendAudioStats.id = n.id + "send", t.sendAudioStats.type = n.type + "", t.sendAudioStats.mediaType = n.mediaType + "", t.sendAudioStats.packetsSent = n.packetsSent + "", t.sendAudioStats.bytesSent = n.bytesSent + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.sendVideoStats.id = n.id + "send", t.sendVideoStats.type = n.type + "", t.sendVideoStats.mediaType = n.mediaType + "", t.sendVideoStats.packetsSent = n.packetsSent + "", t.sendVideoStats.bytesSent = n.bytesSent + "", t.sendVideoStats.googRtt = n.roundTripTime + "", t.sendVideoStats.googPlisReceived = n.pliCount + "", t.sendVideoStats.googFirsReceived = n.firCount + "", t.sendVideoStats.googNacksReceived = n.nackCount + "") : !n.remoteSource && n.type && "track" === n.type && n.framesSent && 0 !== n.framesSent && (t.sendVideoStats.googFrameHeightSent = n.frameHeight + "", t.sendVideoStats.googFrameHeightInput = n.frameHeight + "", t.sendVideoStats.googFrameWidthSent = n.frameWidth + "", t.sendVideoStats.googFrameWidthInput = n.frameWidth + "", t.sendVideoStats.googFramesEncoded = n.framesSent + "", t.sendVideoStats.googFrameRateSent = n.framesPerSecond + "")
                    }), t.config.isSubscriber ? (n.push(t.receiveVideoStats), n.push(t.receiveAudioStats)) : (n.push(t.sendAudioStats), n.push(t.sendVideoStats)), n.push({
                        id: "time",
                        startTime: t.connectedTime,
                        timestamp: Date.now()
                    }), e && e(n)
                })
            }, e.prototype.getStatsRate = function (e) {
                this.getStats(e)
            }, e.prototype.initPeecConnection = function (e) {
                var t = e.stunServerUrl, n = e.turnServer, i = e.iceServers;
                return this.pcConfig = {iceServers: [{urls: "stun:webcs.agora.io:3478"}]}, i instanceof Array ? this.pcConfig.iceServers = e.iceServers : t && (t instanceof Array ? t.map(function (e) {
                    "string" == typeof e && "" !== e && this.pcConfig.iceServers.push({urls: e})
                }) : "string" == typeof t && "" !== t && this.pcConfig.iceServers.push({urls: t})), n && (n instanceof Array ? n.map(function (e) {
                    "string" == typeof e.url && "" !== e.url && this.pcConfig.iceServers.push({
                        username: e.username,
                        credential: e.credential,
                        url: e.url
                    })
                }) : "auto" !== n.mode && "manual" !== n.mode || (n.udpport && this.pcConfig.iceServers.push({
                    username: n.username,
                    credential: n.credential,
                    credentialType: "password",
                    urls: "turn:" + n.url + ":" + n.udpport + "?transport=udp"
                }), "string" == typeof n.tcpport && "" !== n.tcpport && this.pcConfig.iceServers.push({
                    username: n.username,
                    credential: n.credential,
                    credentialType: "password",
                    urls: "turn:" + n.url + ":" + n.tcpport + "?transport=tcp"
                }), !0 === n.forceturn && (this.pcConfig.iceTransportPolicy = "relay"))), new r.RTCPeerConnection(this.pcConfig)
            }, e.prototype._ontrack = function (e) {
                this.onaddstream && this.onaddstream(e, "ontrack")
            }, e.prototype._onaddstream = function (e) {
                this.onaddstream && this.onaddstream(e, "onaddstream")
            }, e.prototype._oniceconnectionstatechange = function (e) {
                "connected" === e.currentTarget.iceConnectionState && (this.state = i.ESTABLISHED, this.connectedTime = Date.now()), this.oniceconnectionstatechange && this.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            }, e.prototype._onicecandidate = function (e) {
                !this.candidate && e && (this.candidate = e.candidate, this.peerConnection.createOffer({
                    offerToReceiveAudio: !0,
                    offerToReceiveVideo: !0
                }).then(this.editLocalSDP.bind(this)).then(this.setLocalSDP.bind(this)).then(this.sendOffer.bind(this)).catch())
            }, e.prototype.setLocalSDP = function (e) {
                return this.peerConnection.setLocalDescription(new RTCSessionDescription({
                    sdp: e.sdp,
                    type: "offer"
                })), this.state = i.PREPARING_OFFER, e
            }, e.prototype.editLocalSDP = function (e) {
                return e.sdp = this.setBandWidth(e.sdp), e.sdp = this.reviseOpus(e.sdp), e.sdp = this.addCandidate(e.sdp), e
            }, e.prototype.setSendRecv = function (e) {
                return e = (e = (e = e.replace(/a=recvonly\r\n/g, "a=sendrecv\r\n")).replace(/a=sendonly\r\n/g, "a=sendrecv\r\n")).replace(/a=inactive\r\n/g, "a=sendrecv\r\n")
            }, e.prototype.setBandWidth = function (e) {
                var t, n, i = this.config, r = i.codec, o = i.minVideoBW, s = i.maxVideoBW, c = i.maxAudioBW,
                    d = i.clientId;
                if ((t = e.match(/m=video.*\r\n/)) && o && s) {
                    n = t[0] + "b=AS:" + s + "\r\n";
                    var u = 0, l = 0;
                    "h264" === r ? (u = e.search(/a=rtpmap:(\d+) H264\/90000\r\n/), l = e.search(/H264\/90000\r\n/)) : "vp8" === r && (u = e.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), l = e.search(/VP8\/90000\r\n/)), -1 !== u && -1 !== l && l - u > 10 && (n = n + "a=fmtp:" + e.slice(u + 9, l - 1) + " x-google-min-bitrate=" + o + "\r\n"), e = e.replace(t[0], n), a.default.debug("[" + d + "]Set Video Bitrate - min:" + o + " max:" + s)
                }
                return (t = e.match(/m=audio.*\r\n/)) && c && (n = t[0] + "b=AS:" + c + "\r\n", e = e.replace(t[0], n)), e
            }, e.prototype.reviseOpus = function (e) {
                return e = (e = e.replace(/a=rtpmap:102 opus\/48000\/2/g, "a=rtpmap:111 opus/48000/2")).replace(/m=audio 9 UDP\/TLS\/RTP\/SAVPF 102 0 8 97 13 118 101/g, "m=audio 9 UDP/TLS/RTP/SAVPF 111 0 8 97 13 118 101")
            }, e.prototype.addCandidate = function (e) {
                return e += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"
            }, e.prototype.sendOffer = function (e) {
                this.config.callback(JSON.stringify({
                    sdp: e.sdp,
                    messageType: "OFFER",
                    tiebreaker: Math.floor(429496723 * Math.random() + 1)
                })), this.state = i.OFFER_SENT
            }, e
        }();
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (a, r) {
                function o(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    e.done ? a(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(o, s)
                }

                c((i = i.apply(e, t || [])).next())
            })
        }, a = this && this.__generator || function (e, t) {
            var n, i, a, r, o = {
                label: 0, sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                }, trys: [], ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                return this
            }), r;

            function s(r) {
                return function (s) {
                    return function (r) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (n = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, r[1])).done) return a;
                            switch (i = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return o.label++, {value: r[1], done: !1};
                                case 5:
                                    o.label++, i = r[1], r = [0];
                                    continue;
                                case 7:
                                    r = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        o.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && o.label < a[1]) {
                                        o.label = a[1], a = r;
                                        break
                                    }
                                    if (a && o.label < a[2]) {
                                        o.label = a[2], o.ops.push(r);
                                        break
                                    }
                                    a[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            r = t.call(e, o)
                        } catch (e) {
                            r = [6, e], i = 0
                        } finally {
                            n = a = 0
                        }
                        if (5 & r[0]) throw r[1];
                        return {value: r[0] ? r[1] : void 0, done: !0}
                    }([r, s])
                }
            }
        }, r = this;
        t.__esModule = !0;
        var o = n(20), s = n(3), c = n(0);
        t.getSupportedCodec = function (e) {
            return i(r, void 0, void 0, function () {
                var t, n, i, r, u;
                return a(this, function (a) {
                    switch (a.label) {
                        case 0:
                            return t = {
                                video: [],
                                audio: []
                            }, "undefined" != typeof window ? [3, 1] : (c.default.error("getSupportedCodec: NOT_BROWSER_ENV"), [2, Promise.reject("NOT_BROWSER_ENV")]);
                        case 1:
                            try {
                                n = o.createRTCPeerConnection({iceServers: []})
                            } catch (e) {
                                return c.default.error("Failed to init RTCPeerConnection", e), [2, Promise.reject(e)]
                            }
                            return n ? [3, 2] : (c.default.warning("getSupportedCodec: no RTCPeerConnection constructor is detected"), [2, Promise.resolve(t)]);
                        case 2:
                            return e && e.stream ? [3, 7] : (i = {
                                mandatory: {
                                    OfferToReceiveAudio: !0,
                                    OfferToReceiveVideo: !0
                                }
                            }, r = void 0, (s.isSafari() || s.isFireFox() || s.isWeChatBrowser()) && n.addTransceiver ? (n.addTransceiver("audio"), n.addTransceiver("video"), [4, n.createOffer()]) : [3, 4]);
                        case 3:
                            return r = a.sent(), [3, 6];
                        case 4:
                            return [4, new Promise(function (e, t) {
                                var a = setTimeout(function () {
                                    t("CREATEOFFER_TIMEOUT")
                                }, 3e3);
                                n.createOffer(function (t) {
                                    clearTimeout(a), e(t)
                                }, function (e) {
                                    clearTimeout(a), t(e)
                                }, i)
                            })];
                        case 5:
                            r = a.sent(), a.label = 6;
                        case 6:
                            return n.close(), u = r.sdp, [2, d(u)];
                        case 7:
                            return e.stream.getTracks && n.addTrack ? e.stream.getTracks().forEach(function (t) {
                                n.addTrack(t, e.stream)
                            }) : n.addStream(e.stream), r = void 0, s.isSafari() || s.isFireFox() ? [4, n.createOffer()] : [3, 9];
                        case 8:
                            return r = a.sent(), [3, 11];
                        case 9:
                            return [4, new Promise(function (e, t) {
                                n.createOffer(e, t)
                            })];
                        case 10:
                            r = a.sent(), a.label = 11;
                        case 11:
                            return n.close(), u = r.sdp, [2, d(u)]
                    }
                })
            })
        };
        var d = function (e) {
            var t = {video: [], audio: []};
            return e.match(/ VP8/i) && t.video.push("VP8"), e.match(/ H264/i) && t.video.push("H264"), e.match(/ opus/i) && t.audio.push("OPUS"), Promise.resolve(t)
        }
    }, function (e, t, n) {
        var i = n(21), a = n(22), r = n(23);
        e.exports = function (e) {
            return i(e) || a(e) || r()
        }
    }, function (e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var i = new Uint8Array(16);
            e.exports = function () {
                return n(i), i
            }
        } else {
            var a = new Array(16);
            e.exports = function () {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
                return a
            }
        }
    }, function (e, t) {
        for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
        e.exports = function (e, t) {
            var i = t || 0, a = n;
            return [a[e[i++]], a[e[i++]], a[e[i++]], a[e[i++]], "-", a[e[i++]], a[e[i++]], "-", a[e[i++]], a[e[i++]], "-", a[e[i++]], a[e[i++]], "-", a[e[i++]], a[e[i++]], a[e[i++]], a[e[i++]], a[e[i++]], a[e[i++]]].join("")
        }
    }, function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = "object" == typeof window && window.RTCPeerConnection,
            a = "object" == typeof window && window.webkitRTCPeerConnection,
            r = "object" == typeof window && window.mozRTCPeerConnection;
        t.createRTCPeerConnection = function (e) {
            var t = i || a || r;
            return t ? new t(e) : null
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }
    }, function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function (e, t, n) {
        var i = function () {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            a = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
            r = a && i.regeneratorRuntime;
        if (i.regeneratorRuntime = void 0, e.exports = n(25), a) i.regeneratorRuntime = r; else try {
            delete i.regeneratorRuntime
        } catch (e) {
            i.regeneratorRuntime = void 0
        }
    }, function (e, t) {
        !function (t) {
            "use strict";
            var n, i = Object.prototype, a = i.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator", s = r.asyncIterator || "@@asyncIterator",
                c = r.toStringTag || "@@toStringTag", d = "object" == typeof e, u = t.regeneratorRuntime;
            if (u) d && (e.exports = u); else {
                (u = t.regeneratorRuntime = d ? e.exports : {}).wrap = _;
                var l = "suspendedStart", p = "suspendedYield", f = "executing", m = "completed", g = {}, v = {};
                v[o] = function () {
                    return this
                };
                var S = Object.getPrototypeOf, I = S && S(S(D([])));
                I && I !== i && a.call(I, o) && (v = I);
                var h = T.prototype = E.prototype = Object.create(v);
                b.prototype = h.constructor = T, T.constructor = b, T[c] = b.displayName = "GeneratorFunction", u.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, u.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(h), e
                }, u.awrap = function (e) {
                    return {__await: e}
                }, R(A.prototype), A.prototype[s] = function () {
                    return this
                }, u.AsyncIterator = A, u.async = function (e, t, n, i) {
                    var a = new A(_(e, t, n, i));
                    return u.isGeneratorFunction(t) ? a : a.next().then(function (e) {
                        return e.done ? e.value : a.next()
                    })
                }, R(h), h[c] = "Generator", h[o] = function () {
                    return this
                }, h.toString = function () {
                    return "[object Generator]"
                }, u.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function n() {
                        for (; t.length;) {
                            var i = t.pop();
                            if (i in e) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
                }, u.values = D, w.prototype = {
                    constructor: w, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(N), !e) for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function i(i, a) {
                            return s.type = "throw", s.arg = e, t.next = i, a && (t.method = "next", t.arg = n), !!a
                        }

                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], s = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var c = a.call(o, "catchLoc"), d = a.call(o, "finallyLoc");
                                if (c && d) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!d) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var r = i;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var o = r ? r.completion : {};
                        return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(o)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), g
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    N(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, t, i) {
                        return this.delegate = {
                            iterator: D(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = n), g
                    }
                }
            }

            function _(e, t, n, i) {
                var a = t && t.prototype instanceof E ? t : E, r = Object.create(a.prototype), o = new w(i || []);
                return r._invoke = function (e, t, n) {
                    var i = l;
                    return function (a, r) {
                        if (i === f) throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === a) throw r;
                            return k()
                        }
                        for (n.method = a, n.arg = r; ;) {
                            var o = n.delegate;
                            if (o) {
                                var s = C(o, n);
                                if (s) {
                                    if (s === g) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (i === l) throw i = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = f;
                            var c = y(e, t, n);
                            if ("normal" === c.type) {
                                if (i = n.done ? m : p, c.arg === g) continue;
                                return {value: c.arg, done: n.done}
                            }
                            "throw" === c.type && (i = m, n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(e, n, o), r
            }

            function y(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            function E() {
            }

            function b() {
            }

            function T() {
            }

            function R(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function A(e) {
                var t;
                this._invoke = function (n, i) {
                    function r() {
                        return new Promise(function (t, r) {
                            !function t(n, i, r, o) {
                                var s = y(e[n], e, i);
                                if ("throw" !== s.type) {
                                    var c = s.arg, d = c.value;
                                    return d && "object" == typeof d && a.call(d, "__await") ? Promise.resolve(d.__await).then(function (e) {
                                        t("next", e, r, o)
                                    }, function (e) {
                                        t("throw", e, r, o)
                                    }) : Promise.resolve(d).then(function (e) {
                                        c.value = e, r(c)
                                    }, function (e) {
                                        return t("throw", e, r, o)
                                    })
                                }
                                o(s.arg)
                            }(n, i, t, r)
                        })
                    }

                    return t = t ? t.then(r, r) : r()
                }
            }

            function C(e, t) {
                var i = e.iterator[t.method];
                if (i === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, C(e, t), "throw" === t.method)) return g;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var a = y(i, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, g;
                var r = a.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, g) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g)
            }

            function O(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function N(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function w(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(O, this), this.reset(!0)
            }

            function D(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1, r = function t() {
                            for (; ++i < e.length;) if (a.call(e, i)) return t.value = e[i], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                        return r.next = r
                    }
                }
                return {next: k}
            }

            function k() {
                return {value: n, done: !0}
            }
        }(function () {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(2), r = n(0), o = n(1), s = function () {
            var e = {dispatcher: {}};
            return e.dispatcher.eventListeners = {}, e.addEventListener = function (t, n) {
                void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(n)
            }, e.hasListeners = function (t) {
                return !(!e.dispatcher.eventListeners[t] || !e.dispatcher.eventListeners[t].length)
            }, e.on = e.addEventListener, e.removeEventListener = function (t, n) {
                var i;
                -1 !== (i = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(i, 1)
            }, e.dispatchEvent = function (t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t)
            }, e.dispatchSocketEvent = function (t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg)
            }, e
        }, c = function (e) {
            var t = {};
            return t.type = e.type, t
        }, d = function (e) {
            var t = c(e);
            return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t
        }, u = function (e) {
            var t = c(e);
            return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t
        }, l = function (e) {
            var t = c(e);
            return t.msg = e.msg, t
        }, p = function (e) {
            var t = c(e);
            return t.url = e.url, t.uid = e.uid, t.status = e.status, t.reason = e.reason, t
        }, f = n(3), m = function () {
        };
        m.prototype.set = function (e, t) {
            ["BatteryLevel"].indexOf(e) > -1 && (this[e] = t)
        };
        var g = new function () {
                var e = s();
                return e.states = {
                    UNINIT: "UNINIT",
                    INITING: "INITING",
                    INITED: "INITED"
                }, e.state = e.states.UNINIT, e.batteryManager = null, e._init = function (t, n) {
                    e.state = e.states.INITING, navigator.getBattery ? navigator.getBattery().then(function (n) {
                        e.batteryManager = n, t && setTimeout(function () {
                            t()
                        }, 0)
                    }).catch(function (e) {
                        r.default.debug("navigator.getBattery is disabled", e), t && t()
                    }) : (e.state = e.states.INITED, t && t())
                }, e._getBatteryStats = function () {
                    var t = {};
                    return e.batteryManager && e.batteryManager.level ? t.BatteryLevel = Math.floor(100 * e.batteryManager.level) : t.BatteryLevel = "UNSUPPORTED", t
                }, e.getStats = function (t, n) {
                    var i = new m, a = e._getBatteryStats();
                    a && a.BatteryLevel && i.set("BatteryLevel", a.BatteryLevel), t && t(i)
                }, e._init(), e
            }, v = n(4), S = n.n(v), I = function (e) {
                var t = s(e);
                return t.url = ".", t
            }, h = n(10), _ = {
                101100: "NO_FLAG_SET",
                101101: "FLAG_SET_BUT_EMPTY",
                101102: "INVALID_FALG_SET",
                101203: "NO_SERVICE_AVIABLE",
                0: "OK_CODE",
                5: "INVALID_VENDOR_KEY",
                7: "INVALID_CHANNEL_NAME",
                8: "INTERNAL_ERROR",
                9: "NO_AUTHORIZED",
                10: "DYNAMIC_KEY_TIMEOUT",
                11: "NO_ACTIVE_STATUS",
                13: "DYNAMIC_KEY_EXPIRED",
                14: "STATIC_USE_DYANMIC_KEY",
                15: "DYNAMIC_USE_STATIC_KEY",
                1010100: "NO_FLAG_SET",
                1010101: "FLAG_SET_BUT_EMPTY",
                1010102: "INVALID_FALG_SET",
                1010200: "NO_SERVICE_AVAILABLE",
                1010203: "NO_SERVICE_AVAILABLE_WEBRTC",
                1010205: "NO_SERVICE_AVAILABLE_DISPATCHER",
                1010208: "NO_SERVICE_AVAILABLE_APPCENTER",
                1010211: "NO_SERVICE_AVAILABLE_SUA",
                2010005: "INVALID_VENDOR_KEY",
                2010007: "INVALID_CHANNEL_NAME",
                2010008: "INTERNAL_ERROR",
                2010009: "NO_AUTHORIZED",
                2010010: "DYNAMIC_KEY_TIMEOUT",
                2010011: "NO_ACTIVE_STATUS",
                2010013: "DYNAMIC_KEY_EXPIRED",
                2010014: "STATIC_USE_DYANMIC_KEY",
                2010015: "DYNAMIC_USE_STATIC_KEY"
            }, y = {
                2000: "ERR_NO_VOCS_AVAILABLE",
                2001: "ERR_NO_VOS_AVAILABLE",
                2002: "ERR_JOIN_CHANNEL_TIMEOUT",
                2003: "WARN_REPEAT_JOIN",
                2004: "ERR_JOIN_BY_MULTI_IP",
                2011: "ERR_NOT_JOINED",
                2012: "WARN_REPEAT_JOIN",
                2013: "ERR_INVALID_VENDOR_KEY",
                2014: "ERR_INVALID_CHANNEL_NAME",
                2015: "ERR_INVALID_STRINGUID",
                2016: "ERR_TOO_MANY_USERS",
                2017: "ERR_SET_CLIENT_ROLE_TIMEOUT",
                2018: "ERR_SET_CLIENT_ROLE_NO_PERMISSION",
                2019: "ERR_SET_CLIENT_ROLE_ALREADY_IN_USE",
                2020: "ERR_PUBLISH_REQUEST_INVALID",
                2021: "ERR_SUBSCRIBE_REQUEST_INVALID",
                2022: "ERR_NOT_SUPPORTED_MESSAGE",
                2023: "ERR_ILLEAGAL_PLUGIN",
                101: "ERR_INVALID_VENDOR_KEY",
                102: "ERR_INVALID_CHANNEL_NAME",
                103: "WARN_NO_AVAILABLE_CHANNEL",
                104: "WARN_LOOKUP_CHANNEL_TIMEOUT",
                105: "WARN_LOOKUP_CHANNEL_REJECTED",
                106: "WARN_OPEN_CHANNEL_TIMEOUT",
                107: "WARN_OPEN_CHANNEL_REJECTED",
                108: "WARN_REQUEST_DEFERRED",
                109: "ERR_DYNAMIC_KEY_TIMEOUT",
                110: "ERR_NO_AUTHORIZED",
                111: "ERR_VOM_SERVICE_UNAVAILABLE",
                112: "ERR_NO_CHANNEL_AVAILABLE_CODE",
                113: "ERR_TOO_MANY_USERS",
                114: "ERR_MASTER_VOCS_UNAVAILABLE",
                115: "ERR_INTERNAL_ERROR",
                116: "ERR_NO_ACTIVE_STATUS",
                117: "ERR_INVALID_UID",
                118: "ERR_DYNAMIC_KEY_EXPIRED",
                119: "ERR_STATIC_USE_DYANMIC_KE",
                120: "ERR_DYNAMIC_USE_STATIC_KE",
                2: "K_TIMESTAMP_EXPIRED",
                3: "K_CHANNEL_PERMISSION_INVALID",
                4: "K_CERTIFICATE_INVALID",
                5: "K_CHANNEL_NAME_EMPTY",
                6: "K_CHANNEL_NOT_FOUND",
                7: "K_TICKET_INVALID",
                8: "K_CHANNEL_CONFLICTED",
                9: "K_SERVICE_NOT_READY",
                10: "K_SERVICE_TOO_HEAVY",
                14: "K_UID_BANNED",
                15: "K_IP_BANNED",
                16: "K_CHANNEL_BANNED"
            }, E = {1: "ERROR_ILLEAGAL_APPID", 2: "ERROR_ILLEAGAL_UID", 3: "INTERNAL_SERVER_ERROR"},
            b = ["NO_FLAG_SET", "NO_SERVICE_AVIABLE", "FLAG_SET_BUT_EMPTY", "EMPTY_ADDRESS_RESPONSE"], T = 0, R = 1,
            A = 2, C = 3, O = 4, N = 5, w = 6, D = 7, k = 8, L = 9, M = 10, P = {
                19: "ERR_ALREADY_IN_USE",
                10: "ERR_TIMEDOUT",
                3: "ERR_NOT_READY",
                9: "ERR_NO_PERMISSION",
                0: "UNKNOW_ERROR"
            }, x = {
                FAILED: "FAILED",
                INVALID_KEY: "INVALID_KEY",
                INVALID_CLIENT_MODE: "INVALID_CLIENT_MODE",
                INVALID_CLIENT_CODEC: "INVALID_CLIENT_CODEC",
                CLIENT_MODE_CODEC_MISMATCH: "CLIENT_MODE_CODEC_MISMATCH",
                WEB_API_NOT_SUPPORTED: "WEB_API_NOT_SUPPORTED",
                INVALID_PARAMETER: "INVALID_PARAMETER",
                INVALID_OPERATION: "INVALID_OPERATION",
                INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM",
                INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM",
                INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY",
                DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT",
                NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE",
                NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
                JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
                NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL",
                LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT",
                LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED",
                OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT",
                OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED",
                REQUEST_DEFERRED: "REQUEST_DEFERRED",
                STREAM_ALREADY_PUBLISHED: "STREAM_ALREADY_PUBLISHED",
                STREAM_NOT_YET_PUBLISHED: "STREAM_NOT_YET_PUBLISHED",
                JOIN_TOO_FREQUENT: "JOIN_TOO_FREQUENT",
                SOCKET_ERROR: "SOCKET_ERROR",
                SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED",
                PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED",
                CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR",
                SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE",
                JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED",
                PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED",
                UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED",
                SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED",
                UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED",
                NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM",
                ERR_FAILED: "1",
                ERR_INVALID_VENDOR_KEY: "101",
                ERR_INVALID_CHANNEL_NAME: "102",
                WARN_NO_AVAILABLE_CHANNEL: "103",
                WARN_LOOKUP_CHANNEL_TIMEOUT: "104",
                WARN_LOOKUP_CHANNEL_REJECTED: "105",
                WARN_OPEN_CHANNEL_TIMEOUT: "106",
                WARN_OPEN_CHANNEL_REJECTED: "107",
                WARN_REQUEST_DEFERRED: "108",
                ERR_DYNAMIC_KEY_TIMEOUT: "109",
                ERR_INVALID_DYNAMIC_KEY: "110",
                ERR_NO_VOCS_AVAILABLE: "2000",
                ERR_NO_VOS_AVAILABLE: "2001",
                ERR_JOIN_CHANNEL_TIMEOUT: "2002",
                IOS_NOT_SUPPORT: "IOS_NOT_SUPPORT",
                WECHAT_NOT_SUPPORT: "WECHAT_NOT_SUPPORT",
                SHARING_SCREEN_NOT_SUPPORT: "SHARING_SCREEN_NOT_SUPPORT",
                STILL_ON_PUBLISHING: "STILL_ON_PUBLISHING",
                LOW_STREAM_ALREADY_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED",
                LOW_STREAM_NOT_YET_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED",
                HIGH_STREAM_NOT_VIDEO_TRACE: "HIGH_STREAM_NOT_VIDEO_TRACE",
                NOT_FIND_DEVICE_BY_LABEL: "NOT_FIND_DEVICE_BY_LABEL",
                ENABLE_DUALSTREAM_FAILED: "ENABLE_DUALSTREAM_FAILED",
                DISABLE_DUALSTREAM_FAILED: "DISABLE_DUALSTREAM_FAILED",
                PLAYER_NOT_FOUND: "PLAYER_NOT_FOUND",
                ELECTRON_NOT_SUPPORT_SHARING_SCREEN: "ELECTRON_NOT_SUPPORT_SHARING_SCREEN",
                BAD_ENVIRONMENT: "BAD_ENVIRONMENT",
                LOAD_AUDIO_FAILED: "LOAD_AUDIO_FAILED"
            }, U = 0, V = function (e) {
                var t = I({});
                t.id = e.id, t.playerId = U++, t.fit = e.options && e.options.fit, "contain" !== t.fit && "cover" !== t.fit && (t.fit = null), t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.setAudioOutput = function (e, n, i) {
                    var a = t.video || t.audio;
                    return a ? a.setSinkId ? void a.setSinkId(e).then(function () {
                        return r.default.debug("[" + t.id + "] " + "video ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")), a == t.video && t.audio ? t.audio.setSinkId(e) : Promise.resolve()
                    }).then(function () {
                        return r.default.debug("[" + t.id + "] " + "audio ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")), n && n()
                    }).catch(function (e) {
                        return r.default.error("[" + t.id + "] VideoPlayer.setAudioOutput", e), i && i(e)
                    }) : (r.default.error("[" + t.id + "] ", x.WEB_API_NOT_SUPPORTED), i && i(x.WEB_API_NOT_SUPPORTED)) : (r.default.error("[" + t.id + "] ", x.PLAYER_NOT_FOUND), i && i(x.PLAYER_NOT_FOUND))
                }, t.destroy = function () {
                    r.default.debug("destroy ".concat(e.stream.local ? "local" : "remote", " Player ").concat(t.id)), Object(h.setSrcObject)(t.video, null), Object(h.setSrcObject)(t.audio, null), t.video.pause(), delete t.resizer, clearInterval(t.mediaPlayerTimer), t.mediaPlayerTimer = null, document.getElementById(t.div.id) && t.parentNode.contains(t.div) && t.parentNode.removeChild(t.div), ["video", "audio"].forEach(function (n) {
                        t[n];
                        var i = s[n];
                        clearTimeout(i.playDeferTimeout), i.formerMediaState = null;
                        var a = {
                            playerId: t.playerId,
                            stateId: i.stateId + 1,
                            playDeferTimeout: null,
                            error: !1,
                            status: "aborted",
                            reason: "stop",
                            updatedAt: Date.now()
                        };
                        s[n] = a;
                        var c = {
                            type: "player-status-change",
                            playerId: t.playerId,
                            mediaType: n,
                            status: a.status,
                            reason: a.reason,
                            isErrorState: !1
                        };
                        r.default.debug("Media Player Status Change Triggered by destroy()", c), e.stream.dispatchEvent(c), o.b.reportApiInvoke(e.stream.sid, {
                            name: "Stream.playerStatusChange",
                            options: c,
                            tag: "tracer"
                        })()
                    })
                }, t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg); object-fit: ".concat(t.fit || "cover", ";")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.video ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "contain")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none; object-fit: ".concat(t.fit || "cover"));
                var n = {
                    autoplay: !0,
                    muted: !!e.stream.local || !(!f.isSafari() && "iOS" !== f.getBrowserOS()) && "video_element_muted",
                    playsinline: !0,
                    controls: !(!f.isSafari() && "iOS" !== f.getBrowserOS() || e.stream.local),
                    volume: null
                }, i = S()({}, n, e.options);
                !0 !== i.muted || i.volume || (i.volume = 0), i.autoplay && t.video.setAttribute("autoplay", ""), !0 !== i.muted && "video_element_muted" !== i.muted || (t.video.setAttribute("muted", ""), t.video.muted = !0), i.playsinline && t.video.setAttribute("playsinline", ""), i.controls && t.video.setAttribute("controls", ""), Number.isFinite(i.volume) && (t.video.volume = i.volume), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), i.autoplay && t.audio.setAttribute("autoplay", ""), !0 === i.muted && t.audio.setAttribute("muted", ""), !0 === i.muted && (t.audio.muted = !0), i.playsinline && t.audio.setAttribute("playsinline", ""), Number.isFinite(i.volume) && (t.audio.volume = i.volume), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode;
                var s = {
                    video: {
                        playerId: t.playerId,
                        stateId: 0,
                        playDeferTimeout: null,
                        error: !1,
                        status: "init",
                        reason: null,
                        updatedAt: Date.now()
                    },
                    audio: {
                        playerId: t.playerId,
                        stateId: 0,
                        playDeferTimeout: null,
                        error: !1,
                        status: "init",
                        reason: null,
                        updatedAt: Date.now()
                    }
                };
                t.mediaElemExists = function (e) {
                    for (var t = e, n = 0; n < Object(a.getParameter)("MEDIA_ELEMENT_EXISTS_DEPTH") && t; n++) t = t.parentNode;
                    return !!t
                };
                var c = function (e) {
                    return t.mediaElemExists(e) ? e.paused ? "paused" : "play" : "aborted"
                }, d = function (e, t, n) {
                    var i = c(e), a = !0;
                    return "paused" === i ? ("audio" === t && !0 === n.muted && (a = !1), n.autoplay || (a = !1)) : "play" === i ? "video" === t ? a = !1 : !0 === n.muted ? e.muted && (a = !1) : e.muted || (a = !1) : "aborted" === i && (a = !1), a
                }, u = function (n) {
                    var u, l = this;
                    if (l === t.video ? u = "video" : l === t.audio && (u = "audio"), u) {
                        n.type || r.default.error("Unexpected evt", n);
                        var p = c(l);
                        clearTimeout(s[u].playDeferTimeout), s[u].playDeferTimeout = setTimeout(function () {
                            s[u].playDeferTimeout = null;
                            var a = s[u], f = c(l);
                            if (p === f) {
                                var m = {
                                    playerId: t.playerId,
                                    stateId: a.stateId + 1,
                                    playDeferTimeout: null,
                                    error: d(l, u, i),
                                    status: c(l),
                                    reason: n.type,
                                    updatedAt: Date.now()
                                };
                                if (a.status !== m.status) {
                                    s[u] = m;
                                    var g = {
                                        type: "player-status-change",
                                        playerId: t.playerId,
                                        mediaType: u,
                                        status: m.status,
                                        reason: m.reason,
                                        isErrorState: m.error
                                    };
                                    r.default.debug("Media Player Status Change", g), e.stream.dispatchEvent(g), o.b.reportApiInvoke(e.stream.sid, {
                                        name: "Stream.playerStatusChange",
                                        options: g,
                                        tag: "tracer"
                                    })()
                                }
                            } else r.default.debug("Status Change after event Triggered." + "Stream ".concat(t.id, " PlayerId ").concat(t.playerId, " mediaType ").concat(u, " Status ").concat(p, "=>").concat(f))
                        }, Object(a.getParameter)("PLAYER_STATE_DEFER"))
                    } else r.default.error("Unknown media element", l)
                };
                if (t.mediaPlayerTimer = setInterval(function () {
                    ["video", "audio"].forEach(function (n) {
                        var a = t[n], u = s[n];
                        if (!u.playDeferTimeout) {
                            var l = {
                                playerId: t.playerId,
                                stateId: u.stateId + 1,
                                playDeferTimeout: null,
                                error: d(a, n, i),
                                status: c(a),
                                reason: "timer",
                                updatedAt: Date.now()
                            };
                            if (u.status !== l.status) {
                                r.default.debug("Player ".concat(t.playerId, " ").concat(n, " Status Changed Detected by Timer: ").concat(u.status, "=>").concat(l.status)), s[n] = l;
                                var p = {
                                    type: "player-status-change",
                                    playerId: t.playerId,
                                    mediaType: n,
                                    status: l.status,
                                    reason: l.reason,
                                    isErrorState: l.error
                                };
                                r.default.debug("Media Player Status Change", p), e.stream.dispatchEvent(p), o.b.reportApiInvoke(e.stream.sid, {
                                    name: "Stream.playerStatusChange",
                                    options: p,
                                    tag: "tracer"
                                })()
                            }
                        }
                    })
                }, Object(a.getParameter)("PLAYER_STATE_DEFER")), t.video.addEventListener("playing", function (e) {
                    !function e() {
                        t.video.videoWidth * t.video.videoHeight > 4 ? r.default.debug("[" + t.id + "] video dimensions:", t.video.videoWidth, t.video.videoHeight) : setTimeout(e, 50)
                    }()
                }), t.video.addEventListener("playing", u), t.video.addEventListener("canplay", u), t.video.addEventListener("abort", u), t.video.addEventListener("onerror", u), t.video.addEventListener("suspend", u), t.video.addEventListener("stalled", u), t.video.addEventListener("pause", u), t.audio.addEventListener("playing", u), t.audio.addEventListener("canplay", u), t.audio.addEventListener("abort", u), t.audio.addEventListener("onerror", u), t.audio.addEventListener("suspend", u), t.audio.addEventListener("stalled", u), t.audio.addEventListener("pause", u), e.stream.hasVideo() || e.stream.hasScreen()) t.div.appendChild(t.video), t.div.appendChild(t.audio), f.isEdge() ? t.video.srcObject = e.stream.stream : (Object(h.attachMediaStream)(t.video, e.stream.stream), Object(h.attachMediaStream)(t.audio, e.stream.stream)); else if (!1 !== i.muted && "video_element_muted" !== i.muted || (t.video.removeAttribute("muted"), t.video.muted = !1), t.div.appendChild(t.video), window.MediaStream && (f.isSafari() || "iOS" === f.getBrowserOS())) {
                    var l = new MediaStream(e.stream.stream.getAudioTracks());
                    Object(h.setSrcObject)(t.video, l)
                } else Object(h.setSrcObject)(t.video, e.stream.stream);
                return t.setAudioVolume = function (e) {
                    var n = parseInt(e) / 100;
                    isFinite(n) && (n < 0 ? n = 0 : n > 1 && (n = 1), t.video && (t.video.volume = n), t.audio && (t.audio.volume = n))
                }, t
            }, F = function (e) {
                var t = {}, n = h.RTCPeerConnection;
                t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = {iceServers: [{url: "stun:webcs.agora.io:3478"}]}, t.con = {optional: [{DtlsSrtpKeyAgreement: !0}]}, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({url: e})
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({url: e.stunServerUrl})), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.credential,
                        url: e.url
                    })
                }) : "auto" !== e.turnServer.mode && "manual" !== e.turnServer.mode || (e.turnServer.udpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
                }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
                }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103;
                try {
                    t.pc_config.sdpSemantics = "plan-b", t.peerConnection = new n(t.pc_config, t.con)
                } catch (e) {
                    delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con)
                }
                t.iceCandidateTimer = setTimeout(function () {
                    t.iceCandidateTimer = null, r.default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)), t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                }, Object(a.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function (e) {
                    var n, i, a, o;
                    i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), null === i && null === a && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (r.default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + o + " host candidate : " + a), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
                }, r.default.debug("[" + t.clientId + ']Created webkitRTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".');
                var i = function (t) {
                    return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                }, o = function (n) {
                    var i, a;
                    if ((i = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW) {
                        a = i[0] + "b=AS:" + e.maxVideoBW + "\r\n";
                        var o = 0, s = 0;
                        "h264" === e.codec ? (o = n.search(/a=rtpmap:(\d+) H264\/90000\r\n/), s = n.search(/H264\/90000\r\n/)) : "vp8" === e.codec && (o = n.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), s = n.search(/VP8\/90000\r\n/)), -1 !== o && -1 !== s && s - o > 10 && (a = a + "a=fmtp:" + n.slice(o + 9, s - 1) + " x-google-min-bitrate=" + e.minVideoBW + "\r\n"), n = n.replace(i[0], a), r.default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)
                    }
                    return (i = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (a = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(i[0], a)), n
                };
                return t.processSignalingMessage = function (e) {
                    var n, a = JSON.parse(e);
                    t.incomingMessage = a, "new" === t.state ? "OFFER" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).catch(function (e) {
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === a.messageType ? ((n = {
                        sdp: a.sdp,
                        type: "answer"
                    }).sdp = i(n.sdp), n.sdp = o(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).catch(function (e) {
                    }), t.state = "established") : "pr-answer" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).catch(function (e) {
                    })) : "offer" === a.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).catch(function (e) {
                    }), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === a.messageType ? ((n = {
                        sdp: a.sdp,
                        type: "answer"
                    }).sdp = i(n.sdp), n.sdp = o(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).catch(function (e) {
                    })) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state))
                }, t.getVideoRelatedStats = function (e) {
                    t.peerConnection.getStats(function (n) {
                        Object.keys(n).forEach(function (i) {
                            var a = n[i];
                            t.isSubscriber ? "video" === a.mediaType && a.id && ~a.id.indexOf("recv") && e && e({
                                mediaType: "video",
                                peerId: t.uid,
                                isVideoMute: t.isVideoMute,
                                frameRateReceived: a.googFrameRateReceived,
                                frameRateDecoded: a.googFrameRateDecoded,
                                bytesReceived: a.bytesReceived,
                                packetsReceived: a.packetsReceived,
                                packetsLost: a.packetsLost
                            }) : "video" === a.mediaType && a.id && ~a.id.indexOf("send") && e && e({
                                mediaType: "video",
                                isVideoMute: t.isVideoMute,
                                frameRateInput: a.googFrameRateInput,
                                frameRateSent: a.googFrameRateSent,
                                googRtt: a.googRtt
                            })
                        })
                    })
                }, t.getAudioRelatedStats = function (e) {
                    t.peerConnection.getStats(function (n) {
                        Object.keys(n).forEach(function (i) {
                            var a = n[i];
                            t.isSubscriber && "audio" === a.mediaType && a.id && ~a.id.indexOf("recv") && e && e({
                                mediaType: "audio",
                                peerId: t.uid,
                                isAudioMute: t.isAudioMute,
                                frameDropped: parseInt(a.googDecodingPLC) + parseInt(a.googDecodingPLCCNG) + "",
                                frameReceived: a.googDecodingCTN,
                                googJitterReceived: a.googJitterReceived,
                                bytesReceived: a.bytesReceived,
                                packetsReceived: a.packetsReceived,
                                packetsLost: a.packetsLost
                            })
                        })
                    })
                }, t.getStatsRate = function (e) {
                    t.getStats(function (t) {
                        e(t)
                    })
                }, t.getStats = function (e, n) {
                    n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function (n, i) {
                        t.filterStatsCache = n, t.originStatsCache = i, t.lastTimeGetStats = Date.now(), e && e(n, i)
                    })
                }, t._getStats = function (e) {
                    t.peerConnection.getStats(function (n) {
                        var i = [], a = [], r = null;
                        Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            a.push(t), "ssrc" !== t.type && "VideoBwe" !== t.type || (r = t.timestamp, i.push(t))
                        }), i.push({id: "time", startTime: t.connectedTime, timestamp: r || new Date}), e(i, a)
                    })
                }, t.addTrack = function (e, n) {
                    t.peerConnection.addTrack(e, n)
                }, t.removeTrack = function (e, n) {
                    t.peerConnection.removeTrack(t.peerConnection.getSenders().find(function (t) {
                        return t.track == e
                    }))
                }, t.addStream = function (e) {
                    t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function () {
                    t.markActionNeeded()
                }, t.close = function () {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function () {
                    t.actionNeeded = !0, t.doLater(function () {
                        t.onstablestate()
                    })
                }, t.doLater = function (e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function () {
                    var e;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function (e) {
                            if (e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            r.default.debug("[" + t.clientId + "]Not sending a new offer")
                        }, function (e) {
                            r.default.debug("[" + t.clientId + "]peer connection create offer failed ", e)
                        }, t.mediaConstraints); else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (r.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(a.getParameter)("SHIM_CANDIDATE") ? (r.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function (e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded(); else {
                                var n = new Date;
                                r.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                            }
                        }, function (e) {
                            r.default.debug("[" + t.clientId + "]peer connection create answer failed ", e)
                        }, t.mediaConstraints); else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendMessage = function (e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t._getSender = function (e) {
                    if (t.peerConnection && t.peerConnection.getSenders) {
                        var n = t.peerConnection.getSenders().find(function (t) {
                            return t.track.kind == e
                        });
                        if (n) return n
                    }
                    return null
                }, t.hasSender = function (e) {
                    return !!t._getSender(e)
                }, t.replaceTrack = function (e, n, i) {
                    var a = t._getSender(e.kind);
                    if (!a) return i("NO_SENDER_FOUND");
                    try {
                        a.replaceTrack(e)
                    } catch (e) {
                        return i && i(e)
                    }
                    setTimeout(function () {
                        return n && n()
                    }, 50)
                }, t.error = function (e) {
                    throw"Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                    t.onaddstream && (t.onaddstream(e, "ontrack"), t.peerConnection.onaddstream = null)
                }, t.peerConnection.onaddstream = function (e) {
                    t.onaddstream && (t.onaddstream(e, "onaddstream"), t.peerConnection.ontrack = null)
                }, t.peerConnection.onremovestream = function (e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function (e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.renegotiate = function () {
                    void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function (e) {
                        return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"), e.sdp = i(e.sdp), e.sdp = o(e.sdp), t.peerConnection.setLocalDescription(e)
                    }).then(function () {
                        t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp)
                    }).catch(function (e) {
                        console.log("createOffer error: ", e)
                    })
                }, t.peerConnection.onnegotiationneeded = t.renegotiate, t.onaddstream = null, t.onremovestream = null, t.onnegotiationneeded = null, t.state = "new", t.markActionNeeded(), t
            }, j = function (e) {
                var t = {}, n = h.RTCPeerConnection;
                t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = {
                    iceServers: [{urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"]}],
                    bundlePolicy: "max-bundle"
                }, t.con = {optional: [{DtlsSrtpKeyAgreement: !0}]}, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({url: e})
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({url: e.stunServerUrl})), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.credential,
                        url: e.url
                    })
                }) : "auto" !== e.turnServer.mode && "manual" !== e.turnServer.mode || (e.turnServer.udpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"]
                }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"]
                }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103;
                try {
                    t.pc_config.sdpSemantics = "plan-b", t.peerConnection = new n(t.pc_config, t.con)
                } catch (e) {
                    delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con)
                }
                r.default.debug("[" + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'), t.iceCandidateTimer = setTimeout(function () {
                    t.iceCandidateTimer = null, r.default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)), t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                }, Object(a.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function (e) {
                    var n, i, a, o;
                    i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () {
                        t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                    }, 1e3)), null === i && null === a && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (r.default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + o + " host candidate : " + a), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
                };
                var i = function (t) {
                    return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                }, o = function (n) {
                    var i, a;
                    return (i = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW && (a = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", n = n.replace(i[0], a), r.default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), (i = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (a = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(i[0], a)), n
                };
                t.processSignalingMessage = function (e) {
                    var n, a = JSON.parse(e);
                    t.incomingMessage = a, "new" === t.state ? "OFFER" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === a.messageType ? ((n = {
                        sdp: a.sdp,
                        type: "answer"
                    }).sdp = i(n.sdp), n.sdp = o(n.sdp), n.sdp = n.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "established") : "pr-answer" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === a.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === a.messageType ? (n = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === a.messageType ? ((n = {
                        sdp: a.sdp,
                        type: "answer"
                    }).sdp = i(n.sdp), n.sdp = o(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state))
                };
                var s = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "opus",
                    aecDivergentFilterFraction: "0",
                    audioInputLevel: "0",
                    bytesSent: "0",
                    packetsSent: "0",
                    googEchoCancellationReturnLoss: "0",
                    googEchoCancellationReturnLossEnhancement: "0"
                }, c = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "h264" === e.codec ? "H264" : "VP8",
                    bytesSent: "0",
                    packetsLost: "0",
                    packetsSent: "0",
                    googAdaptationChanges: "0",
                    googAvgEncodeMs: "0",
                    googEncodeUsagePercent: "0",
                    googFirsReceived: "0",
                    googFrameHeightSent: "0",
                    googFrameHeightInput: "0",
                    googFrameRateInput: "0",
                    googFrameRateSent: "0",
                    googFrameWidthSent: "0",
                    googFrameWidthInput: "0",
                    googNacksReceived: "0",
                    googPlisReceived: "0",
                    googRtt: "0",
                    googFramesEncoded: "0"
                }, d = {
                    id: "",
                    type: "",
                    mediaType: "",
                    audioOutputLevel: "0",
                    bytesReceived: "0",
                    packetsLost: "0",
                    packetsReceived: "0",
                    googAccelerateRate: "0",
                    googCurrentDelayMs: "0",
                    googDecodingCNG: "0",
                    googDecodingCTN: "0",
                    googDecodingCTSG: "0",
                    googDecodingNormal: "0",
                    googDecodingPLC: "0",
                    googDecodingPLCCNG: "0",
                    googExpandRate: "0",
                    googJitterBufferMs: "0",
                    googJitterReceived: "0",
                    googPreemptiveExpandRate: "0",
                    googPreferredJitterBufferMs: "0",
                    googSecondaryDecodedRate: "0",
                    googSpeechExpandRate: "0"
                }, u = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googTargetDelayMs: "0",
                    packetsLost: "0",
                    googDecodeMs: "0",
                    googMaxDecodeMs: "0",
                    googRenderDelayMs: "0",
                    googFrameWidthReceived: "0",
                    googFrameHeightReceived: "0",
                    googFrameRateReceived: "0",
                    googFrameRateDecoded: "0",
                    googFrameRateOutput: "0",
                    googFramesDecoded: "0",
                    googFrameReceived: "0",
                    googJitterBufferMs: "0",
                    googCurrentDelayMs: "0",
                    googMinPlayoutDelayMs: "0",
                    googNacksSent: "0",
                    googPlisSent: "0",
                    googFirsSent: "0",
                    bytesReceived: "0",
                    packetsReceived: "0"
                }, l = {
                    id: "bweforvideo",
                    type: "VideoBwe",
                    googAvailableSendBandwidth: "0",
                    googAvailableReceiveBandwidth: "0",
                    googActualEncBitrate: "0",
                    googRetransmitBitrate: "0",
                    googTargetEncBitrate: "0",
                    googBucketDelay: "0",
                    googTransmitBitrate: "0"
                }, p = 0, f = 0, m = 0;
                return t.getVideoRelatedStats = function (n) {
                    t.peerConnection.getStats().then(function (i) {
                        var a = {peerId: t.uid, mediaType: "video", isVideoMute: t.isVideoMute};
                        i.forEach(function (i) {
                            if (t.isSubscriber) {
                                if ("track" === i.type && (~i.id.indexOf("video") || ~i.trackIdentifier.indexOf("v"))) {
                                    if (!t.lastReport) return void (t.lastReport = i);
                                    a.frameRateReceived = i.framesReceived - t.lastReport.framesReceived + "", a.frameRateDecoded = i.framesDecoded - t.lastReport.framesDecoded + "", t.lastReport = i
                                }
                                "inbound-rtp" === i.type && ~i.id.indexOf("Video") && (a.bytesReceived = i.bytesReceived + "", a.packetsReceived = i.packetsReceived + "", a.packetsLost = i.packetsLost + "")
                            } else if ("outbound-rtp" === i.type && ~i.id.indexOf("Video")) {
                                if (!t.lastReport) return void (t.lastReport = i);
                                n && n({
                                    mediaType: "video",
                                    isVideoMute: t.isVideoMute,
                                    frameRateInput: e.maxFrameRate + "",
                                    frameRateSent: i.framesEncoded - t.lastReport.framesEncoded + ""
                                }), t.lastReport = i
                            }
                        }), n && n(a)
                    })
                }, t.getAudioRelatedStats = function (e) {
                    t.peerConnection.getStats().then(function (n) {
                        n.forEach(function (n) {
                            t.isSubscriber && "inbound-rtp" === n.type && ~n.id.indexOf("Audio") && e && e({
                                peerId: t.uid,
                                mediaType: "audio",
                                isAudioMute: t.isAudioMute,
                                frameDropped: n.packetsLost + "",
                                frameReceived: n.packetsReceived + "",
                                googJitterReceived: n.jitter + "",
                                bytesReceived: n.bytesReceived + "",
                                packetsReceived: n.packetsReceived + "",
                                packetsLost: n.packetsLost + ""
                            })
                        })
                    })
                }, t.getStatsRate = function (e) {
                    t.getStats(function (t) {
                        t.forEach(function (e) {
                            "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - p) / 3).toString(), p = e.googFramesEncoded), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - m) / 3).toString(), m = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - f) / 3).toString(), f = e.googFramesDecoded))
                        }), e(t)
                    })
                }, t.getStats = function (e, n) {
                    n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function (n, i) {
                        t.filterStatsCache = n, t.originStatsCache = i, t.lastTimeGetStats = Date.now(), e && e(n, i)
                    })
                }, t._getStats = function (e) {
                    var n = [];
                    t.peerConnection.getStats().then(function (i) {
                        i.forEach(function (e) {
                            n.push(e), "outbound-rtp" === e.type && "audio" === e.mediaType && (s.id = e.id, s.type = e.type, s.mediaType = e.mediaType, s.bytesSent = e.bytesSent ? e.bytesSent + "" : "0", s.packetsSent = e.packetsSent ? e.packetsSent + "" : "0"), "outbound-rtp" === e.type && "video" === e.mediaType && (c.id = e.id, c.type = e.type, c.mediaType = e.mediaType, c.bytesSent = e.bytesSent ? e.bytesSent + "" : "0", c.packetsSent = e.packetsSent ? e.packetsSent + "" : "0", c.googPlisReceived = e.pliCount ? e.pliCount + "" : "0", c.googNacksReceived = e.nackCount ? e.nackCount + "" : "0", c.googFirsReceived = e.firCount ? e.firCount + "" : "0", c.googFramesEncoded = e.framesEncoded ? e.framesEncoded + "" : "0"), "inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (d.id = e.id, d.type = e.type, d.mediaType = "audio", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", d.bytesReceived = e.bytesReceived ? e.bytesReceived + "" : "0", d.packetsLost = e.packetsLost ? e.packetsLost + "" : "0", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", d.googJitterReceived = e.jitter ? e.jitter + "" : "0"), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (u.id = e.id, u.type = e.type, u.mediaType = "video", u.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", u.bytesReceived = e.bytesReceived ? e.bytesReceived + "" : "0", u.packetsLost = e.packetsLost ? e.packetsLost + "" : "0", u.googJitterBufferMs = e.jitter ? e.jitter + "" : "0", u.googNacksSent = e.nackCount ? e.nackCount + "" : "0", u.googPlisSent = e.pliCount ? e.pliCount + "" : "0", u.googFirsSent = e.firCount ? e.firCount + "" : "0"), "track" !== e.type || -1 == e.id.indexOf("55543") && !~e.trackIdentifier.indexOf("v") && null != e.audioLevel || (u.googFrameWidthReceived = e.frameWidth ? e.frameWidth + "" : "0", u.googFrameHeightReceived = e.frameHeight ? e.frameHeight + "" : "0", u.googFrameReceived = e.framesReceived ? e.framesReceived + "" : "0", u.googFramesDecoded = e.framesDecoded ? e.framesDecoded + "" : "0"), "track" !== e.type || -1 == e.id.indexOf("44444") && !~e.trackIdentifier.indexOf("a") && void 0 === e.audioLevel || (d.audioOutputLevel = e.audioLevel + "", s.audioInputLevel = e.audioLevel + ""), "candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? l.googAvailableSendBandwidth = e.availableOutgoingBitrate + "" : l.googAvailableReceiveBandwidth = e.availableIncomingBitrate + "")
                        });
                        var a = [l, s, c, d, u];
                        a.push({id: "time", startTime: t.connectedTime, timestamp: new Date}), e(a, n)
                    }).catch(function (e) {
                        console.error(e)
                    })
                }, t.addTrack = function (e, n) {
                    t.peerConnection.addTrack(e, n)
                }, t.removeTrack = function (e, n) {
                    var i = t.peerConnection.getSenders().find(function (t) {
                        return t.track == e
                    });
                    i.replaceTrack(null), t.peerConnection.removeTrack(i)
                }, t.addStream = function (e) {
                    window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function (n) {
                        return t.peerConnection.addTrack(n, e)
                    }) : t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function () {
                    t.markActionNeeded()
                }, t.close = function () {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function () {
                    t.actionNeeded = !0, t.doLater(function () {
                        t.onstablestate()
                    })
                }, t.doLater = function (e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function () {
                    var n;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) e.isSubscriber && (t.peerConnection.addTransceiver("audio", {direction: "recvonly"}), t.peerConnection.addTransceiver("video", {direction: "recvonly"})), t.peerConnection.createOffer(t.mediaConstraints).then(function (n) {
                            if (n.sdp = o(n.sdp), e.isSubscriber || (n.sdp = n.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, "")), n.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(n), t.state = "preparing-offer", void t.markActionNeeded();
                            r.default.debug("[" + t.clientId + "]Not sending a new offer")
                        }).catch(function (e) {
                            r.default.debug("[" + t.clientId + "]peer connection create offer failed ", e)
                        }); else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (r.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(a.getParameter)("SHIM_CANDIDATE") ? (r.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function (e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded(); else {
                                var n = new Date;
                                r.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                            }
                        }, function (e) {
                            r.default.debug("[" + t.clientId + "]peer connection create answer failed ", e)
                        }, t.mediaConstraints); else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            n = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", n), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendMessage = function (e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t._getSender = function (e) {
                    if (t.peerConnection && t.peerConnection.getSenders) {
                        var n = t.peerConnection.getSenders().find(function (t) {
                            return t.track.kind == e
                        });
                        if (n) return n
                    }
                    return null
                }, t.hasSender = function (e) {
                    return !!t._getSender(e)
                }, t.replaceTrack = function (e, n, i) {
                    var a = t._getSender(e.kind);
                    if (!a) return i("NO_SENDER_FOUND");
                    try {
                        a.replaceTrack(e)
                    } catch (e) {
                        return i && i(e)
                    }
                    setTimeout(function () {
                        return n && n()
                    }, 50)
                }, t.error = function (e) {
                    throw"Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                    console.log("!!! ontrack, ", e.track.kind, e.track), t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onremovestream = function (e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function (e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.renegotiate = function () {
                    void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function (e) {
                        return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"), e.sdp = i(e.sdp), e.sdp = o(e.sdp), t.peerConnection.setLocalDescription(e)
                    }).then(function () {
                        t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp)
                    }).catch(function (e) {
                        console.log("createOffer error: ", e)
                    })
                }, t.peerConnection.onnegotiationneeded = t.renegotiate, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            }, B = function (e) {
                var t = {}, n = (mozRTCPeerConnection, mozRTCSessionDescription), i = !1;
                t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = {iceServers: []}, e.iceServers instanceof Array ? e.iceServers.map(function (e) {
                    0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({url: e.url})
                }) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({url: e})
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({url: e.stunServerUrl})), e.turnServer && "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (e.turnServer.udpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
                }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.credential,
                    credentialType: "password",
                    urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
                }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay"))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    offerToReceiveAudio: e.audio,
                    offerToReceiveVideo: e.video,
                    mozDontOfferDataChannel: !0
                }, t.roapSessionId = 103, t.peerConnection = new h.RTCPeerConnection(t.pc_config), r.default.debug("[" + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'), t.iceCandidateTimer = setTimeout(function () {
                    t.iceCandidateTimer = null, r.default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)), t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                }, Object(a.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function (e) {
                    var n, i, a, o;
                    i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), null === i && null === a && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (r.default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + o + " host candidate : " + a), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
                }, t.checkMLineReverseInSDP = function (e) {
                    return !(!~e.indexOf("m=audio") || !~e.indexOf("m=video")) && e.indexOf("m=audio") > e.indexOf("m=video")
                }, t.reverseMLineInSDP = function (e) {
                    var t = e.split("m=audio"), n = t[1].split("m=video"), i = "m=video" + n[1], a = "m=audio" + n[0];
                    return e = t[0] + i + a
                }, t.processSignalingMessage = function (e) {
                    var i, a = JSON.parse(e);
                    t.incomingMessage = a, "new" === t.state ? "OFFER" === a.messageType ? (a.sdp = l(a.sdp), i = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function () {
                        r.default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                    }, function (e) {
                        r.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === a.messageType ? (a.sdp = l(a.sdp), a.sdp = a.sdp.replace(/ generation 0/g, ""), a.sdp = a.sdp.replace(/ udp /g, " UDP "), -1 !== a.sdp.indexOf("a=group:BUNDLE") ? (a.sdp = a.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), a.sdp = a.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), a.sdp = a.sdp.replace(/a=mid:video/, "a=mid:sdparta_1")) : (a.sdp = a.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), a.sdp = a.sdp.replace(/a=mid:video/, "a=mid:sdparta_0")), i = {
                        sdp: a.sdp,
                        type: "answer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function () {
                        r.default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                    }, function (e) {
                        r.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e)
                    }), t.state = "established") : "pr-answer" === a.messageType ? (i = {
                        sdp: a.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function () {
                        r.default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                    }, function (e) {
                        r.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                    })) : "offer" === a.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === a.messageType ? (i = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function () {
                        r.default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                    }, function (e) {
                        r.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state))
                };
                var o = {
                    id: "",
                    type: "",
                    mediaType: "opus",
                    googCodecName: "opus",
                    aecDivergentFilterFraction: "0",
                    audioInputLevel: "0",
                    bytesSent: "0",
                    packetsSent: "0",
                    googEchoCancellationReturnLoss: "0",
                    googEchoCancellationReturnLossEnhancement: "0"
                }, s = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "h264" === e.codec ? "H264" : "VP8",
                    bytesSent: "0",
                    packetsLost: "0",
                    packetsSent: "0",
                    googAdaptationChanges: "0",
                    googAvgEncodeMs: "0",
                    googEncodeUsagePercent: "0",
                    googFirsReceived: "0",
                    googFrameHeightSent: "0",
                    googFrameHeightInput: "0",
                    googFrameRateInput: "0",
                    googFrameRateSent: "0",
                    googFrameWidthSent: "0",
                    googFrameWidthInput: "0",
                    googNacksReceived: "0",
                    googPlisReceived: "0",
                    googRtt: "0"
                }, c = {
                    id: "",
                    type: "",
                    mediaType: "",
                    audioOutputLevel: "0",
                    bytesReceived: "0",
                    packetsLost: "0",
                    packetsReceived: "0",
                    googAccelerateRate: "0",
                    googCurrentDelayMs: "0",
                    googDecodingCNG: "0",
                    googDecodingCTN: "0",
                    googDecodingCTSG: "0",
                    googDecodingNormal: "0",
                    googDecodingPLC: "0",
                    googDecodingPLCCNG: "0",
                    googExpandRate: "0",
                    googJitterBufferMs: "0",
                    googJitterReceived: "0",
                    googPreemptiveExpandRate: "0",
                    googPreferredJitterBufferMs: "0",
                    googSecondaryDecodedRate: "0",
                    googSpeechExpandRate: "0"
                }, d = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googTargetDelayMs: "0",
                    packetsLost: "0",
                    googDecodeMs: "0",
                    googMaxDecodeMs: "0",
                    googRenderDelayMs: "0",
                    googFrameWidthReceived: "0",
                    googFrameHeightReceived: "0",
                    googFrameRateReceived: "0",
                    googFrameRateDecoded: "0",
                    googFrameRateOutput: "0",
                    googJitterBufferMs: "0",
                    googCurrentDelayMs: "0",
                    googMinPlayoutDelayMs: "0",
                    googNacksSent: "0",
                    googPlisSent: "0",
                    googFirsSent: "0",
                    bytesReceived: "0",
                    packetsReceived: "0",
                    googFramesDecoded: "0"
                }, u = 0;
                t.getVideoRelatedStats = function (e) {
                    t.peerConnection.getStats().then(function (n) {
                        var i = !0, a = !1, r = void 0;
                        try {
                            for (var o, s = n.values()[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                                var c = o.value;
                                if (t.isSubscriber) {
                                    if (("inbound-rtp" === c.type || "inboundrtp" === c.type) && "video" === c.mediaType) {
                                        if (!t.lastReport) return void (t.lastReport = c);
                                        e && e({
                                            browser: "firefox",
                                            mediaType: "video",
                                            peerId: t.uid,
                                            isVideoMute: t.isVideoMute,
                                            frameRateReceived: c.framerateMean + "",
                                            frameRateDecoded: c.framesDecoded - t.lastReport.framesDecoded + "",
                                            bytesReceived: c.bytesReceived + "",
                                            packetsReceived: c.packetsReceived + "",
                                            packetsLost: c.packetsLost + ""
                                        }), t.lastReport = c
                                    }
                                } else if (("outbound-rtp" === c.type || "outboundrtp" === c.type) && "video" === c.mediaType) {
                                    if (!t.lastReport) return void (t.lastReport = c);
                                    e && e({
                                        mediaType: "video",
                                        isVideoMute: t.isVideoMute,
                                        frameRateInput: c.framerateMean + "",
                                        frameRateSent: c.framesEncoded - t.lastReport.framesEncoded + ""
                                    }), t.lastReport = c
                                }
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    })
                }, t.getAudioRelatedStats = function (e) {
                    t.peerConnection.getStats().then(function (n) {
                        var i = !0, a = !1, r = void 0;
                        try {
                            for (var o, s = n.values()[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                                var c = o.value;
                                t.isSubscriber && ("inbound-rtp" !== c.type && "inboundrtp" !== c.type || "audio" !== c.mediaType || e && e({
                                    browser: "firefox",
                                    mediaType: "audio",
                                    peerId: t.uid,
                                    isAudioMute: t.isAudioMute,
                                    frameDropped: c.packetsLost + "",
                                    frameReceived: c.packetsReceived + "",
                                    googJitterReceived: c.jitter + "",
                                    bytesReceived: c.bytesReceived + "",
                                    packetsReceived: c.packetsReceived + "",
                                    packetsLost: c.packetsLost + ""
                                }))
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    })
                }, t.getStatsRate = function (e) {
                    t.getStats(function (t) {
                        t.forEach(function (e) {
                            "inbound-rtp" !== e.type && "inboundrtp" !== e.type || "video" !== e.mediaType || e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - u) / 3).toString(), u = e.googFramesDecoded)
                        }), e(t)
                    })
                }, t.getStats = function (e, n) {
                    n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function (n, i) {
                        t.filterStatsCache = n, t.originStatsCache = i, t.lastTimeGetStats = Date.now(), e && e(n, i)
                    })
                }, t._getStats = function (e) {
                    t.peerConnection.getStats().then(function (n) {
                        var i = [], a = !0, r = !1, u = void 0;
                        try {
                            for (var l, p = n.values()[Symbol.iterator](); !(a = (l = p.next()).done); a = !0) {
                                var f = l.value;
                                i.push(f), "outbound-rtp" !== f.type && "outboundrtp" !== f.type || "video" !== f.mediaType || -1 !== f.id.indexOf("rtcp") || (s.id = f.id, s.type = f.type, s.mediaType = f.mediaType, s.bytesSent = f.bytesSent ? f.bytesSent + "" : "0", s.packetsSent = f.packetsSent ? f.packetsSent + "" : "0", s.googPlisReceived = f.pliCount ? f.pliCount + "" : "0", s.googNacksReceived = f.nackCount ? f.nackCount + "" : "0", s.googFirsReceived = f.firCount ? f.firCount + "" : "0", s.googFrameRateSent = f.framerateMean ? f.framerateMean + "" : "0"), "outbound-rtp" !== f.type && "outboundrtp" !== f.type || "audio" !== f.mediaType || -1 !== f.id.indexOf("rtcp") || (o.id = f.id, o.type = f.type, o.mediaType = f.mediaType, o.bytesSent = f.bytesSent ? f.bytesSent + "" : "0", o.packetsSent = f.packetsSent ? f.packetsSent + "" : "0"), "inbound-rtp" !== f.type && "inboundrtp" !== f.type || "audio" !== f.mediaType || f.isRemote || -1 !== f.id.indexOf("rtcp") || (c.id = f.id, c.type = f.type, c.mediaType = f.mediaType, c.bytesReceived = f.bytesReceived ? f.bytesReceived + "" : "0", c.packetsLost = f.packetsLost ? f.packetsLost + "" : "0", c.packetsReceived = f.packetsReceived ? f.packetsReceived + "" : "0", c.googJitterReceived = f.jitter ? f.jitter + "" : "0"), "inbound-rtp" !== f.type && "inboundrtp" !== f.type || "video" !== f.mediaType || f.isRemote || -1 !== f.id.indexOf("rtcp") || (d.id = f.id, d.type = f.type, d.mediaType = f.mediaType, d.bytesReceived = f.bytesReceived ? f.bytesReceived + "" : "0", d.googFrameRateReceived = f.framerateMean ? f.framerateMean + "" : "0", d.googFramesDecoded = f.framesDecoded ? f.framesDecoded + "" : "0", d.packetsLost = f.packetsLost ? f.packetsLost + "" : "0", d.packetsReceived = f.packetsReceived ? f.packetsReceived + "" : "0", d.googJitterBufferMs = f.jitter ? f.jitter + "" : "0", d.googNacksSent = f.nackCount ? f.nackCount + "" : "0", d.googPlisSent = f.pliCount ? f.pliCount + "" : "0", d.googFirsSent = f.firCount ? f.firCount + "" : "0"), -1 !== f.id.indexOf("outbound_rtcp_video") && (s.packetsLost = f.packetsLost ? f.packetsLost + "" : "0")
                            }
                        } catch (e) {
                            r = !0, u = e
                        } finally {
                            try {
                                a || null == p.return || p.return()
                            } finally {
                                if (r) throw u
                            }
                        }
                        var m = [s, o, c, d];
                        m.push({id: "time", startTime: t.connectedTime, timestamp: new Date}), e(m, i)
                    }, function (e) {
                        r.default.error("[" + t.clientId + "]" + e)
                    })
                }, t.addStream = function (e) {
                    i = !0, t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function () {
                    t.markActionNeeded()
                }, t.close = function () {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function () {
                    t.actionNeeded = !0, t.doLater(function () {
                        t.onstablestate()
                    })
                }, t.doLater = function (e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function () {
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) i && (t.mediaConstraints = void 0), t.peerConnection.createOffer(function (e) {
                            if (e.sdp = l(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            r.default.debug("[" + t.clientId + "]Not sending a new offer")
                        }, function (e) {
                            r.default.debug("[" + t.clientId + "]Ups! create offer failed ", e)
                        }, t.mediaConstraints); else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (r.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(a.getParameter)("SHIM_CANDIDATE") ? (r.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function (e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded(); else {
                                var n = new Date;
                                r.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                            }
                        }, function () {
                            r.default.debug("[" + t.clientId + "]Ups! Something went wrong")
                        }); else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            var e = t.peerConnection.localDescription.sdp;
                            t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendMessage = function (e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t._getSender = function (e) {
                    if (t.peerConnection && t.peerConnection.getSenders) {
                        var n = t.peerConnection.getSenders().find(function (t) {
                            return t.track.kind == e
                        });
                        if (n) return n
                    }
                    return null
                }, t.hasSender = function (e) {
                    return !!t._getSender(e)
                }, t.replaceTrack = function (e, n, i) {
                    var a = t._getSender(e.kind);
                    if (!a) return i("NO_SENDER_FOUND");
                    try {
                        a.replaceTrack(e)
                    } catch (e) {
                        return i && i(e)
                    }
                    setTimeout(function () {
                        return n && n()
                    }, 50)
                }, t.error = function (e) {
                    throw"Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onremovestream = function (e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function (e) {
                    "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                };
                var l = function (t) {
                    var n;
                    if (e.video && e.maxVideoBW && (null == (n = t.match(/m=video.*\r\n/)) && (n = t.match(/m=video.*\n/)), n && n.length > 0)) {
                        var i = n[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
                        t = t.replace(n[0], i)
                    }
                    return e.audio && e.maxAudioBW && (null == (n = t.match(/m=audio.*\r\n/)) && (n = t.match(/m=audio.*\n/)), n && n.length > 0) && (i = n[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n", t = t.replace(n[0], i)), t
                };
                return t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            }, W = n(14), H = n.n(W), G = null, q = function () {
                try {
                    G = window.require("electron")
                } catch (e) {
                }
                return G
            }, J = function (e) {
                var t = o.b.reportApiInvoke(null, {
                    callback: e,
                    name: "getScreenSources",
                    options: arguments,
                    tag: "tracer"
                }), n = q();
                if (!n) return t && t("electron is null");
                n.desktopCapturer.getSources({types: ["window", "screen"]}, function (e, n) {
                    if (e) return t && t(e);
                    t && t(null, n)
                })
            }, Y = function (e, t, n) {
                var i = t.width;
                t = {
                    audio: !1,
                    video: {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e,
                            maxHeight: t.height,
                            maxWidth: i,
                            maxFrameRate: t.frameRate && t.frameRate.max,
                            minFrameRate: t.frameRate && t.frameRate.min
                        }
                    }
                };
                navigator.webkitGetUserMedia(t, function (e) {
                    n && n(null, e)
                }, function (e) {
                    n && n(e)
                })
            }, z = function () {
                return !!q()
            }, K = J, X = Y, Q = function (e, t) {
                J(function (n, i) {
                    if (n) return t && t(n);
                    !function (e, t) {
                        var n = document.createElement("div");
                        n.innerText = "share screen", n.setAttribute("style", "text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");
                        var i = document.createElement("div");
                        i.setAttribute("style", "width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");
                        var a = document.createElement("div");
                        a.innerText = "Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.", a.setAttribute("style", "height: 12%;");
                        var r = document.createElement("div");
                        r.setAttribute("style", "width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");
                        var o = document.createElement("div");
                        o.setAttribute("style", "text-align: right; padding: 16px 0;");
                        var s = document.createElement("button");
                        s.innerHTML = "cancel", s.setAttribute("style", "width: 85px;"), s.onclick = function () {
                            document.body.removeChild(c), t && t("NotAllowedError")
                        }, o.appendChild(s), i.appendChild(a), i.appendChild(r), i.appendChild(o);
                        var c = document.createElement("div");
                        c.setAttribute("style", "position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);"), c.appendChild(n), c.appendChild(i), document.body.appendChild(c), e.map(function (e) {
                            if (e.id) {
                                var n = document.createElement("div");
                                n.setAttribute("style", "width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;"), n.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + e.thumbnail.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + e.name + "</span>", n.onclick = function () {
                                    document.body.removeChild(c), t && t(null, e.id)
                                }, r.appendChild(n)
                            }
                        })
                    }(i, function (n, i) {
                        if (n) return t && t(n);
                        Y(i, e, t)
                    })
                })
            }, $ = 103, Z = function (e) {
                var t = {};
                if (t.clientId = e.clientId, e.session_id = $ += 1, "undefined" == typeof window || !window.navigator) throw r.default.error("[" + t.streamId + "][" + t.clientId + "]Publish/subscribe video/audio streams not supported yet"), new Error("NON_BROWSER_ENV_DETECTED");
                return null !== window.navigator.userAgent.match("Firefox") ? (t.browser = "mozilla", t = B(e)) : "iOS" === f.getBrowserOS() || f.isSafari() ? (r.default.debug("[" + t.streamId + "][" + t.clientId + "]Safari"), (t = j(e)).browser = "safari") : ~window.navigator.userAgent.indexOf("Edge") ? t = new H.a(e) : (t = F(e)).browser = "chrome-stable", t
            }, ee = function (e, t, n) {
                var i = {};
                i.config = e, i.streamId = e.streamId, delete e.streamId, navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                var a = 0, o = 1, s = !1, c = null, d = function (e) {
                    if (a++, c) if (c === e) r.default.debug("Using Video Source/ Audio Source"); else {
                        var n = c.getVideoTracks()[0], i = c.getAudioTracks()[0], d = e.getVideoTracks()[0],
                            u = e.getAudioTracks()[0];
                        d && (n && c.removeTrack(n), c.addTrack(d)), u && (i && c.removeTrack(i), c.addTrack(u))
                    } else c = e;
                    a !== o || s || (s = !0, setTimeout(function () {
                        t(c)
                    }, 0))
                }, u = function (e) {
                    r.default.error("Failed to GetUserMedia", e.name, e.code, e.message, e), a++, s || (s = !0, setTimeout(function () {
                        n && n(e)
                    }, 0))
                }, l = function () {
                    var t = {video: e.video, audio: e.audio};
                    if (r.default.debug("GetUserMedia", JSON.stringify(t)), navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia(t).then(d).catch(u); else if ("undefined" != typeof navigator && navigator.getMedia) navigator.getMedia(e, d, u); else {
                        var a = {name: "MEDIA_NOT_SUPPORT", message: "Video/audio streams not supported yet"};
                        r.default.error("[" + i.streamId + "]" + a.message), n && n(a)
                    }
                };
                if ((e.videoSource || e.audioSource) && (c = new MediaStream, e.videoSource && c.addTrack(e.videoSource), e.audioSource && c.addTrack(e.audioSource)), e.video || e.audio || e.screen) if (e.screen) {
                    if (z()) return e.screen.sourceId ? X(e.screen.sourceId, e.screen, function (e, t) {
                        e ? u(e) : d(t)
                    }) : Q(e.screen, function (e, t) {
                        e ? u(e) : d(t)
                    });
                    if (f.isFireFox()) {
                        r.default.debug("[" + i.streamId + "]Screen access requested");
                        if (!~["screen", "window", "application"].indexOf(e.screen.mediaSource)) return n && n({code: "Invalid mediaSource, mediaSource should be one of [screen, window, application]"});
                        navigator.getMedia({video: e.screen}, function (t) {
                            e.audio && (o++, l()), d(t)
                        }, u)
                    } else if (f.isChrome() && e.screen.extensionId) {
                        if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void n({code: "This browser does not support screen sharing"});
                        r.default.debug("[" + i.streamId + "]Screen access on chrome stable, looking for extension");
                        try {
                            chrome.runtime.sendMessage(e.screen.extensionId, {getStream: !0}, function (t) {
                                if (void 0 === t) {
                                    r.default.error("[" + i.streamId + "]No response from Chrome Plugin. Plugin not installed properly");
                                    u({
                                        name: "PluginNotInstalledProperly",
                                        message: "No response from Chrome Plugin. Plugin not installed properly."
                                    })
                                } else e.screen.mandatory.chromeMediaSourceId = t.streamId, navigator.getMedia({video: e.screen}, function (t) {
                                    e.audio && (o++, l()), d(t)
                                }, u)
                            })
                        } catch (e) {
                            r.default.debug("[" + i.streamId + "]AgoraRTC screensharing plugin is not accessible");
                            return void n({code: "no_plugin_present"})
                        }
                    } else {
                        if (window.navigator.mediaDevices.getDisplayMedia) {
                            var p = {};
                            return "number" == typeof e.screen.width && "number" == typeof e.screen.height ? p.video = {
                                width: {ideal: e.screen.width},
                                height: {ideal: e.screen.height}
                            } : p.video = {
                                width: e.screen.width,
                                height: e.screen.height
                            }, e.screen.frameRate && e.screen.frameRate.min ? p.video.frameRate = {
                                ideal: e.screen.frameRate.max,
                                max: e.screen.frameRate.max
                            } : p.video.frameRate = e.screen.frameRate, r.default.debug("use getDisplayMedia, constraints:", p), window.navigator.mediaDevices.getDisplayMedia(p).then(function (t) {
                                e.audio && (o++, l()), d(t)
                            }).catch(u)
                        }
                        r.default.error("[" + i.streamId + "]This browser does not support screenSharing"), n({code: "This browser does not support screen sharing"})
                    }
                } else l(); else d(c)
            }, te = n(8), ne = function (e, t, n) {
                if (["End2EndDelay", "TransportDelay", "PacketLossRate", "RecvLevel", "RecvBitrate", "CodecType", "MuteState", "TotalFreezeTime", "TotalPlayDuration", "RecordingLevel", "SendLevel", "SamplingRate", "SendBitrate", "CodecType", "MuteState", "End2EndDelay", "TransportDelay", "PacketLossRate", "RecvBitrate", "RecvResolutionWidth", "RecvResolutionHeight", "RenderResolutionHeight", "RenderResolutionWidth", "RenderFrameRate", "TotalFreezeTime", "TotalPlayDuration", "TargetSendBitrate", "SendFrameRate", "SendFrameRate", "SendBitrate", "SendResolutionWidth", "SendResolutionHeight", "CaptureResolutionHeight", "CaptureResolutionWidth", "EncodeDelay", "MuteState", "TotalFreezeTime", "TotalDuration", "CaptureFrameRate", "RTT", "OutgoingAvailableBandwidth", "Duration", "UserCount", "SendBytes", "RecvBytes", "SendBitrate", "RecvBitrate", "accessDelay", "audioSendBytes", "audioSendPackets", "videoSendBytes", "videoSendPackets", "videoSendPacketsLost", "videoSendFrameRate", "audioSendPacketsLost", "videoSendResolutionWidth", "videoSendResolutionHeight", "accessDelay", "audioReceiveBytes", "audioReceivePackets", "audioReceivePacketsLost", "videoReceiveBytes", "videoReceivePackets", "videoReceivePacketsLost", "videoReceiveFrameRate", "videoReceiveDecodeFrameRate", "videoReceiveResolutionWidth", "videoReceiveResolutionHeight", "endToEndDelay", "videoReceiveDelay", "audioReceiveDelay", "FirstFrameTime", "VideoFreezeRate", "AudioFreezeRate", "RenderResolutionWidth", "RenderResolutionHeight"].indexOf(t) > -1 && ("string" == typeof n || isFinite(n))) return e[t] = "" + n
            }, ie = new function () {
                var e = s();
                return e.devicesHistory = {}, e.states = {
                    UNINIT: "UNINIT",
                    INITING: "INITING",
                    INITED: "INITED"
                }, e.state = e.states.UNINIT, e.deviceStates = {
                    ACTIVE: "ACTIVE",
                    INACTIVE: "INACTIVE"
                }, e.deviceReloadTimer = null, e._init = function (t, n) {
                    e.state = e.states.INITING, e.devicesHistory = {}, e._reloadDevicesInfo(function () {
                        e.state = e.states.INITED, e.dispatchEvent({type: "inited"}), t && t()
                    }, function (t) {
                        r.default.warning("Device Detection functionality cannot start properly."), e.state = e.states.UNINIT, n && n(t)
                    })
                }, e._enumerateDevices = function (e, t) {
                    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return r.default.warning("enumerateDevices() not supported."), t && t("enumerateDevices() not supported");
                    navigator.mediaDevices.enumerateDevices().then(function (t) {
                        e && setTimeout(function () {
                            e(t)
                        }, 0)
                    }).catch(function (e) {
                        t && t(e)
                    })
                }, e._reloadDevicesInfo = function (t, n) {
                    var i = [];
                    e._enumerateDevices(function (n) {
                        var a = Date.now();
                        for (var o in n.forEach(function (t) {
                            var n = e.devicesHistory[t.deviceId];
                            if ((n ? n.state : e.deviceStates.INACTIVE) != e.deviceStates.ACTIVE) {
                                var r = n || {initAt: a};
                                r.device = t, r.state = e.deviceStates.ACTIVE, i.push(r), e.devicesHistory[t.deviceId] = r
                            }
                            e.devicesHistory[t.deviceId].lastReloadAt = a
                        }), e.devicesHistory) {
                            var s = e.devicesHistory[o];
                            s && s.state == e.deviceStates.ACTIVE && s.lastReloadAt !== a && (s.state = e.deviceStates.INACTIVE, i.push(s)), s.lastReloadAt = a
                        }
                        e.state == e.states.INITED && i.forEach(function (t) {
                            var n = S()({}, t);
                            switch (t.device.kind) {
                                case"audioinput":
                                    n.type = "recordingDeviceChanged";
                                    break;
                                case"audiooutput":
                                    n.type = "playoutDeviceChanged";
                                    break;
                                case"videoinput":
                                    n.type = "cameraChanged";
                                    break;
                                default:
                                    r.default.warning("Unknown device change", n), n.type = "unknownDeviceChanged"
                            }
                            e.dispatchEvent(n)
                        }), t && t()
                    }, n)
                }, e.getDeviceById = function (t, n, i) {
                    e.getDevices(function (e) {
                        for (var a = 0; a < e.length; a++) {
                            var r = e[a];
                            if (r && r.deviceId === t) return n && n(r)
                        }
                        return i && i()
                    })
                }, e.searchDeviceNameById = function (t) {
                    var n = e.devicesHistory[t];
                    return n ? n.device.label || n.device.deviceId : null
                }, e.getDevices = function (t, n) {
                    e._enumerateDevices(t, function (e) {
                        n && n(e.name + ": " + e.message)
                    })
                }, e.getVideoCameraIdByLabel = function (t, n, i) {
                    e.getCameras(function (e) {
                        var a = !0, r = !1, o = void 0;
                        try {
                            for (var s, c = e[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                                var d = s.value;
                                if (d.label === t) return n && n(d.deviceId)
                            }
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                a || null == c.return || c.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return i && i(x.NOT_FIND_DEVICE_BY_LABEL)
                    }, i)
                }, e.getRecordingDevices = function (t, n) {
                    return e._enumerateDevices(function (e) {
                        var n = e.filter(function (e) {
                            return "audioinput" == e.kind
                        });
                        t && t(n)
                    }, function (e) {
                        n && n(e)
                    })
                }, e.getPlayoutDevices = function (t, n) {
                    return e._enumerateDevices(function (e) {
                        var n = e.filter(function (e) {
                            return "audiooutput" == e.kind
                        });
                        t && t(n)
                    }, function (e) {
                        n && n(e)
                    })
                }, e.getCameras = function (t, n) {
                    return e._enumerateDevices(function (e) {
                        var n = e.filter(function (e) {
                            return "videoinput" == e.kind
                        });
                        t && t(n)
                    }, function (e) {
                        n && n(e)
                    })
                }, e._init(function () {
                    navigator.mediaDevices && navigator.mediaDevices.addEventListener && navigator.mediaDevices.addEventListener("devicechange", function () {
                        e._reloadDevicesInfo()
                    }), e.deviceReloadTimer = setInterval(e._reloadDevicesInfo, 5e3)
                }), e
            }, ae = n(6), re = n.n(ae), oe = function (e, t, n) {
                for (var i = 0; i < n.length; i++) if (e === n[i]) return !0;
                throw new Error("".concat(t, " can only be set as ").concat(JSON.stringify(n)))
            }, se = function (e, t) {
                if (!e) throw new Error("Invalid param: ".concat(t || "param", " cannot be empty"));
                if ("object" !== re()(e)) throw new Error("".concat(t || "This paramter", " is of the object type"));
                return !0
            }, ce = function (e, t, n, i, a) {
                if (_e(n) && (n = 1), i = i || 255, _e(a) && (a = !0), _e(e)) throw new Error("".concat(t || "param", " cannot be empty"));
                if (!le(e, n, i, a)) throw new Error("Invalid ".concat(t || "string param", ": Length of the string: [").concat(n, ",").concat(i, "].").concat(a ? " ASCII characters only." : ""))
            }, de = function (e, t, n, i) {
                if (_e(n) && (n = 1), i = i || 1e4, _e(e)) throw new Error("".concat(t || "param", " cannot be empty"));
                if (!pe(e, n, i)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(i, "]. integer only"))
            }, ue = function (e, t) {
                if (_e(e)) throw new Error("".concat(t || "param", " cannot be empty"));
                if (!fe(e)) throw new Error("Invalid ".concat(t || "boolean param", ": The value is of the boolean type."))
            }, le = function (e, t, n, i) {
                return t || (t = 0), n || (n = Number.MAX_SAFE_INTEGER), _e(i) && (i = !0), Ie(e) && (!i || ge(e)) && e.length >= t && e.length <= n
            }, pe = function (e, t, n) {
                return ve(e) && e >= t && e <= n
            }, fe = function (e) {
                return "boolean" == typeof e
            }, me = function (e) {
                return le(e, 1, 2047)
            }, ge = function (e) {
                if ("string" == typeof e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e.charCodeAt(t);
                        if (n < 0 || n > 255) return !1
                    }
                    return !0
                }
            }, ve = function (e) {
                return "number" == typeof e && e % 1 == 0
            }, Se = function (e) {
                return "number" == typeof e
            }, Ie = function (e) {
                return "string" == typeof e
            }, he = function (e) {
                return e instanceof Array
            }, _e = function (e) {
                return null == e
            }, ye = n(13);
        var Ee = function (e) {
            ce(e, "profileName"), -1 === (e = e.toLowerCase()).indexOf("_") && (e += "_1"), oe(e, "profileName", Object.keys(a.SUPPORT_RESOLUTION_LIST));
            var t = a.SUPPORT_RESOLUTION_LIST[e];
            t || (e = Object(a.getParameter)("DEFAULT_PROFILE"), t = a.SUPPORT_RESOLUTION_LIST[e]);
            var n = {
                profileName: e,
                video: {width: t[0], height: t[1]},
                attributes: {
                    resolution: "".concat(t[0], "x").concat(t[1]),
                    minFrameRate: t[2],
                    maxFrameRate: t[3],
                    minVideoBW: t[4],
                    maxVideoBW: t[5]
                }
            };
            return t[2] && t[3] && (n.video.frameRate = {
                ideal: t[2],
                max: t[3]
            }), t[6] && t[7] && (n.screen = {width: t[0], height: t[1], frameRate: {min: t[6], max: t[7]}}), n
        }, be = function (e) {
            return Object.keys(a.SUPPORT_RESOLUTION_LIST).filter(function (t) {
                var n = a.SUPPORT_RESOLUTION_LIST[t], i = ["width", "height", "frameRate"];
                for (var r in i) {
                    var o = i[r];
                    if (e[o] && n[r]) {
                        if ("number" == typeof e[o].max && e[o].max < n[r]) return !1;
                        if ("number" == typeof e[o].min && e[o].min > n[r]) return !1
                    }
                }
                return !0
            }).reverse()
        }, Te = function (e) {
            var t = a.AUDIO_PROFILE_SETTINGS[e] || a.AUDIO_PROFILE_SETTINGS.default;
            return {highQuality: t[0], stereo: t[1], speech: t[2], lowQuality: t[3]}
        };
        var Re = function (e) {
                var t = s();
                if (t.params = S()({}, e), t.stream = e.stream, t.url = e.url, t.onClose = void 0, t.local = !1, t.videoSource = e.videoSource, t.audioSource = e.audioSource, e.video = !(!e.videoSource && !e.video), t.video = e.video, e.audio = !(!e.audioSource && !e.audio), t.audio = e.audio, t.screen = !!e.screen, t.screenAttributes = {
                    width: 1920,
                    height: 1080,
                    maxFr: 5,
                    minFr: 1
                }, t.videoSize = e.videoSize, t.player = void 0, t.audioLevelHelper = null, e.attributes = e.attributes || {}, t.attributes = e.attributes, t.microphoneId = e.microphoneId, t.cameraId = e.cameraId, t.facingMode = e.facingMode, t.inSwitchDevice = !1, t.userMuteVideo = !1, t.userMuteAudio = !1, t.peerMuteVideo = !1, t.peerMuteAudio = !1, t.lowStream = null, t.videoWidth = 0, t.videoHeight = 0, t.streamId = e.streamID, t.userId = null, t.mirror = !1 !== e.mirror, t.DTX = e.audioProcessing && e.audioProcessing.DTX, t.audioProcessing = e.audioProcessing, t.highQuality = !1, t.stereo = !1, t.speech = !1, t.screen || delete t.screen, !(void 0 === t.videoSize || t.videoSize instanceof Array && 4 === t.videoSize.length)) throw Error("Invalid Video Size");

                function n() {
                    var e = {};
                    t.getVideoTrack() === this ? (r.default.debug("Video Track Ended"), e.type = "videoTrackEnded", e.track = this) : t.getAudioTrack() === this ? (r.default.debug("Audio Track Ended"), e.type = "audioTrackEnded", e.track = this) : r.default.debug("Detached Track ended", this.kind, this.label, this), e.type && t.dispatchEvent(e)
                }

                return t.videoSize = [640, 480, 640, 480], void 0 !== e.local && !0 !== e.local || (t.local = !0), t.initialized = !t.local, t._streamInitID = null, function (e) {
                    e.audioMixing = {
                        audioContextInited: !1,
                        defaultVolume: 100,
                        inEarMonitoring: "FILE",
                        sounds: {},
                        states: {IDLE: "IDLE", STARTING: "STARTING", BUSY: "BUSY", PAUSED: "PAUSED"},
                        inEarMonitoringModes: {NONE: "NONE", FILE: "FILE", MICROPHONE: "MOCROPHONE", ALL: "ALL"},
                        ctx: null,
                        mediaStreamSource: null,
                        mediaStreamDest: null,
                        buffer: {}
                    }, e._initSoundIfNotExists = function (t, n) {
                        e.audioMixing.sounds[t] || (e.audioMixing.sounds[t] = {
                            soundId: t,
                            state: "IDLE",
                            muted: e.userMuteAudio,
                            filePath: n,
                            volume: e.audioMixing.defaultVolume,
                            startAt: null,
                            startOffset: null,
                            pauseAt: null,
                            pauseOffset: null,
                            resumeAt: null,
                            resumeOffset: null,
                            stopAt: null,
                            options: null,
                            source: null
                        })
                    }, e._initSoundIfNotExists(-1), e.loadAudioBuffer = function (t, n, i) {
                        var a = o.b.reportApiInvoke(e.sid, {
                            callback: i,
                            name: "Stream.loadAudioBuffer",
                            options: arguments,
                            tag: "tracer"
                        });
                        ce(n, "url", 1, 1024, !1), ce(t, "id", 1, 1024, !1);
                        var s = function (t) {
                            r.default.error("[".concat(e.streamId, "] loadAudioBuffer Failed: ") + t), a(x.LOAD_AUDIO_FAILED)
                        }, c = new XMLHttpRequest;
                        c.open("GET", n, !0), c.responseType = "arraybuffer", c.onload = function () {
                            if (c.status > 400) s("".concat(c.status, " ").concat(c.statusText)); else {
                                var n = c.response;
                                e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.ctx.decodeAudioData(n, function (n) {
                                    e.audioMixing.buffer[t] = n, a(null)
                                }, function (t) {
                                    r.default.error("[".concat(e.streamId, "] decodeAudioData Failed: "), t), a(t)
                                })
                            }
                        }, c.onerror = function () {
                            return s("load error")
                        }, c.ontimeout = function () {
                            return s("timeout")
                        }, c.send()
                    }, e.createAudioBufferSource = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.createAudioBufferSource",
                            options: arguments,
                            tag: "tracer"
                        });
                        if (e.audioMixing.buffer[t.id]) {
                            var i = e.audioMixing.buffer[t.id], a = e.audioMixing.ctx.createBufferSource();
                            a.buffer = i;
                            var s = e.audioMixing.ctx.createGain();
                            if (a.connect(s), s.connect(e.audioMixing.mediaStreamDest), a.gainNode = s, t.loop) a.loop = !0, a.start(0, t.playTime / 1e3); else if (t.cycle > 1) if (Object(f.isChrome)()) {
                                a.loop = !0;
                                var c = t.cycle * i.duration * 1e3 - (t.playTime || 0);
                                a.start(0, t.playTime / 1e3, c / 1e3)
                            } else r.default.warning("[".concat(e.streamId, "] Cycle Param is ignored by current browser")), a.start(0, t.playTime / 1e3); else a.start(0, t.playTime / 1e3);
                            var d = e.audioMixing.sounds[t.soundId];
                            return d.source = a, e._flushAudioMixingMuteStatus(), a.addEventListener("ended", function () {
                                a === d.source && e.dispatchEvent({
                                    type: "audioSourceEnded",
                                    soundId: t.soundId,
                                    source: a,
                                    sound: d
                                })
                            }), n(), a
                        }
                        return r.default.error("[".concat(e.streamId, "] "), "AUDIOBUFFER_NOT_FOUND", t.id), n(!1), !1
                    }, e.on("audioSourceEnded", function (t) {
                        var n = t.source, i = t.sound;
                        i && i.state === e.audioMixing.states.BUSY && !i.pauseAt && (i.state = e.audioMixing.states.IDLE, i.startAt = null, i.startOffset = null, i.resumeAt = null, i.resumeOffset = null, n.gainNode && n.gainNode.disconnect && n.gainNode.disconnect(), n.buffer = null, e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest))
                    }), e.clearAudioBufferSource = function () {
                        e.audioBufferSource.forEach(function (e) {
                            e.stop()
                        })
                    }, e._isSoundExists = function (t) {
                        return !!e.audioMixing.sounds[t.soundId] || (r.default.error("SoundId not exists. #".concat(t.soundId)), !1)
                    }, e._initAudioContext = function () {
                        if (e.audioMixing.audioContextInited) throw new Error("Failed to init audio context. Already inited");
                        if (!e.stream) throw new Error("Failed to init audio context. Local Stream not initialized");
                        e.audioMixing.ctx = Object(ye.a)(), e.audioMixing.mediaStreamSource = e.audioMixing.ctx.createMediaStreamSource(e.stream), e.audioMixing.mediaStreamDest = e.audioMixing.ctx.createMediaStreamDestination(), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest);
                        var t = e.stream.getVideoTracks()[0];
                        if (t && e.audioMixing.mediaStreamDest.stream.addTrack(t), e._isAudioMuted() ? (e._unmuteAudio(), e.stream = e.audioMixing.mediaStreamDest.stream, e._muteAudio()) : e.stream = e.audioMixing.mediaStreamDest.stream, e.audioLevelHelper = null, e.pc && e.pc.peerConnection && e.pc.peerConnection) {
                            var n = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find(function (e) {
                                return e && e.track && "audio" == e.track.kind
                            }), i = e.audioMixing.mediaStreamDest.stream.getAudioTracks()[0];
                            n && n.replaceTrack && i && n.replaceTrack(i)
                        }
                        e.audioMixing.audioContextInited = !0
                    }, e._cleanupAudioMixing = function () {
                        if (e.audioMixing.audioContextInited) {
                            for (var t in e.audioMixing.sounds) {
                                var n = e.audioMixing.sounds[t];
                                n.state !== e.audioMixing.states.BUSY && n.state !== e.audioMixing.states.PAUSED || e._stopOneEffect({soundId: t})
                            }
                            e.audioLevelHelper = null, e.audioMixing.audioContextInited = !1
                        }
                    }, e._reloadInEarMonitoringMode = function (t) {
                        if (t) {
                            if (!e.audioMixing.inEarMonitoringModes[t]) return r.default.error("[".concat(e.streamId, "] Invalid InEarMonitoringMode ").concat(t));
                            e.audioMixing.inEarMonitoring = t
                        }
                        switch (e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.inEarMonitoring) {
                            case e.audioMixing.inEarMonitoringModes.FILE:
                                e.audioMixing.mediaStreamSource.connectedToDestination && (e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !1);
                            case e.audioMixing.inEarMonitoringModes.ALL:
                                for (var n in e.audioMixing.sounds) {
                                    var i = e.audioMixing.sounds[n];
                                    i && i.source && !i.source.connectedToDestination && (i.source.gainNode.connect(e.audioMixing.ctx.destination), i.source.connectedToDestination = !0)
                                }
                        }
                        switch (e.audioMixing.inEarMonitoring) {
                            case e.audioMixing.inEarMonitoringModes.MICROPHONE:
                                e.audioMixing.source.forEach(function (t) {
                                    t.connectedToDestination && (t.gainNode.disconnect(e.audioMixing.ctx.destination), t.connectedToDestination = !1)
                                });
                            case e.audioMixing.inEarMonitoringModes.ALL:
                                e.audioMixing.mediaStreamSource.connectedToDestination || (e.audioMixing.mediaStreamSource.connect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !0)
                        }
                    }, e._startAudioMixingBufferSource = function (t) {
                        e.audioMixing.audioContextInited || e._initAudioContext();
                        var n = {
                            soundId: t.soundId,
                            id: t.filePath,
                            loop: t.loop,
                            cycle: t.cycle,
                            playTime: t.playTime || 0
                        }, i = t.replace, a = e.createAudioBufferSource(n);
                        return a.sound = e.audioMixing.sounds[t.soundId], a ? (a.addEventListener("ended", e._audioMixingFinishedListener, {once: !0}), e._reloadInEarMonitoringMode(), i && e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.mediaStreamDest), a) : null
                    }, e._stopAudioMixingBufferSource = function (t) {
                        var n = e.audioMixing.sounds[t.soundId].source;
                        return n ? (n.removeEventListener("ended", e._audioMixingFinishedListener), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest), n.stop(), n.gainNode && n.gainNode.disconnect && n.gainNode.disconnect(), n.buffer = null, n) : null
                    }, e._flushAudioMixingMuteStatus = function (t) {
                        for (var n in e.audioMixing.sounds) {
                            var i = e.audioMixing.sounds[n];
                            i && (void 0 !== t && (i.muted = !!t), i.source && (i.muted ? i.source.gainNode.gain.value = 0 : i.source.gainNode.gain.value = i.volume / 100))
                        }
                    }, e._handleAudioMixingInvalidStateError = function (t, n, i) {
                        var a = e.audioMixing.sounds[n.soundId],
                            o = -1 === n.soundId ? "INVALID_AUDIO_MIXING_STATE" : "INVALID_PLAY_EFFECT_STATE";
                        r.default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(o, ", state is ").concat(a.state)), i && i(o)
                    }, e._handleAudioMixingNoSourceError = function (t, n, i) {
                        e.audioMixing.sounds[n.soundId].state = e.audioMixing.states.IDLE;
                        var a = -1 === n.soundId ? "NO_AUDIO_MIXING_SOURCE" : "NO_EFFECT_SOURCE";
                        r.default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(a)), i && i(a)
                    }, e._getOneEffectStates = function (t) {
                        var n = e.audioMixing.sounds[t.soundId];
                        return function () {
                            return n ? {
                                state: n.state,
                                startAt: n.startAt,
                                resumeAt: n.resumeAt,
                                pauseOffset: n.pauseOffset,
                                pauseAt: n.pauseAt,
                                resumeOffset: n.resumeOffset,
                                stopAt: n.stopAt,
                                duration: e._getOneEffectDuration(t),
                                position: e._getOneEffectCurrentPosition(t)
                            } : {}
                        }
                    }, e._audioMixingFinishedListener = function () {
                        var t = this.sound;
                        t.state === e.audioMixing.states.IDLE && e.audioMixing.buffer[t.options.filePath] && !t.options.cacheResource && (r.default.debug("Recycled buffer ".concat(t.options.filePath)), delete e.audioMixing.buffer[t.options.filePath]), -1 === t.soundId && e.dispatchEvent({type: "audioMixingFinished"})
                    }, e._playOneEffect = function (t, n) {
                        se(t, "options");
                        var i = t.soundId, a = (t.filePath, t.cacheResource);
                        if (t.cycle, t.loop, t.playTime, t.replace, Object(f.isSafari)() && Object(f.getBrowserVersion)() < 12) {
                            var o = "BROWSER_NOT_SUPPORT";
                            return r.default.error("[".concat(e.streamId, "] Cannot _playOneEffect: "), o), n(o)
                        }
                        e.audioMixing.audioContextInited || e._initAudioContext(), e._initSoundIfNotExists(i);
                        var s = e.audioMixing.sounds[i];
                        if (s.state === e.audioMixing.states.IDLE) {
                            if (void 0 !== t.cycle && !t.cycle > 0) return o = "Invalid Parmeter cycle: " + t.cycle, r.default.error("[".concat(e.streamId, "] ").concat(i), o), n(o);
                            if (_e(a) && (t.cacheResource = !0), s.state = e.audioMixing.states.STARTING, s.options = t, e.audioMixing.buffer[t.filePath]) {
                                var c = e._startAudioMixingBufferSource(t);
                                if (c) return s.source = c, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                                s.state = e.audioMixing.states.IDLE;
                                var d = "CREATE_BUFFERSOURCE_FAILED";
                                if (n) return n(d);
                                r.default.error("[".concat(e.streamId, "] "), d)
                            } else e.loadAudioBuffer(t.filePath, t.filePath, function (i) {
                                if (i) s.state = e.audioMixing.states.IDLE, n ? n(i) : r.default.error("[".concat(e.streamId, "] "), i); else {
                                    var a = e._startAudioMixingBufferSource(t);
                                    if (a) return s.source = a, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                                    if (s.state = e.audioMixing.states.IDLE, i = "CREATE_BUFFERSOURCE_FAILED", n) return n(i);
                                    r.default.error("[".concat(e.streamId, "] "), i)
                                }
                            })
                        } else e._handleAudioMixingInvalidStateError("_playEffect", t, n)
                    }, e._stopOneEffect = function (t, n) {
                        var i = e.audioMixing.sounds[t.soundId];
                        return e._isSoundExists(t) ? i.state === e.audioMixing.states.BUSY || i.state === e.audioMixing.states.PAUSED ? (e._stopAudioMixingBufferSource(t), i.stopAt = Date.now(), i.state = e.audioMixing.states.IDLE, e.audioMixing.buffer[i.options.filePath] && !i.options.cacheResource && (r.default.debug("Recycled buffer ".concat(i.options.filePath)), delete e.audioMixing.buffer[i.options.filePath]), void (n && n(null))) : void e._handleAudioMixingInvalidStateError("_stopOneEffect", t, n) : n("SOUND_NOT_EXISTS")
                    }, e._pauseOneEffect = function (t, n) {
                        var i = e.audioMixing.sounds[t.soundId];
                        if (i.state === e.audioMixing.states.BUSY) return e._stopAudioMixingBufferSource(t) ? (i.pauseAt = Date.now(), i.state = e.audioMixing.states.PAUSED, i.resumeAt ? i.pauseOffset = i.pauseAt - i.resumeAt + i.resumeOffset : i.pauseOffset = i.pauseAt - i.startAt + i.startOffset, n && n(null)) : void e._handleAudioMixingNoSourceError("_pauseOneEffect", t, n);
                        e._handleAudioMixingInvalidStateError("_pauseOneEffect", t, n)
                    }, e._resumeOneEffect = function (t, n) {
                        var i = e.audioMixing.sounds[t.soundId];
                        if (i.state === e.audioMixing.states.PAUSED) {
                            var a = {
                                soundId: t.soundId,
                                filePath: i.options.filePath,
                                cycle: i.options.cycle,
                                loop: i.options.loop,
                                playTime: i.pauseOffset,
                                replace: i.options.replace
                            }, o = e._startAudioMixingBufferSource(a);
                            if (!o) {
                                var s = "CREATE_BUFFERSOURCE_FAILED";
                                return n(s), void r.default.error("[".concat(e.streamId, "] "), s)
                            }
                            i.source = o, i.resumeAt = Date.now(), i.resumeOffset = i.pauseOffset, i.state = e.audioMixing.states.BUSY, i.pauseAt = null, i.pauseOffset = null, n(null)
                        } else e._handleAudioMixingInvalidStateError("_resumeOneEffect", t, n)
                    }, e._getOneEffectDuration = function (t) {
                        var n = e.audioMixing.sounds[t.soundId];
                        return n.options && n.options.filePath && e.audioMixing.buffer[n.options.filePath] ? 1e3 * e.audioMixing.buffer[n.options.filePath].duration : null
                    }, e._getOneEffectCurrentPosition = function (t, n) {
                        var i = e.audioMixing.sounds[t.soundId];
                        return i.state === e.audioMixing.states.PAUSED ? i.pauseOffset % e._getOneEffectDuration(t) : i.state === e.audioMixing.states.BUSY ? i.resumeAt ? (Date.now() - i.resumeAt + i.resumeOffset + i.startOffset) % e._getOneEffectDuration(t) : (Date.now() - i.startAt + i.startOffset) % e._getOneEffectDuration(t) : void (n && e._handleAudioMixingInvalidStateError("_getOneEffectCurrentPosition", t))
                    }, e._setOneEffectPosition = function (t, n, i) {
                        var a = e.audioMixing.sounds[t.soundId];
                        if (a.state === e.audioMixing.states.BUSY) {
                            if (!e._stopAudioMixingBufferSource(t)) return void e._handleAudioMixingNoSourceError("_setOneEffectPosition", t, i);
                            var o = {
                                soundId: t.soundId,
                                filePath: a.options.filePath,
                                loop: a.options.loop,
                                cycle: a.options.cycle,
                                playTime: n
                            }, s = e._startAudioMixingBufferSource(o);
                            if (!s) {
                                var c = "CREATE_BUFFERSOURCE_FAILED";
                                return i && i(c), void r.default.error("[".concat(e.streamId, "] "), c)
                            }
                            a.source = s, a.startAt = Date.now(), a.startOffset = n, a.resumeAt = null, a.resumeOffset = null, a.pauseOffset = null, a.pauseAt = null
                        } else {
                            if (a.state !== e.audioMixing.states.PAUSED) return void e._handleAudioMixingInvalidStateError("_setOneEffectPosition", t, i);
                            a.pauseOffset = n
                        }
                        i && i(null)
                    }, e.startAudioMixing = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: function (t) {
                                if (t) return n && n(t);
                                e.dispatchEvent({type: "audioMixingPlayed"}), n && n(null)
                            }, getStates: e._getOneEffectStates({soundId: -1}), name: "Stream.startAudioMixing", options: t
                        });
                        se(t, "options");
                        var r = t.filePath, s = t.cacheResource, c = t.cycle, d = t.loop, u = t.playTime, l = t.replace;
                        ce(r, "filePath", 1, Object(a.getParameter)("FILEPATH_LENMAX"), !1), de(u, "playTime", 0, 1e8), !_e(c) && de(c, "cycle"), !_e(d) && ue(d, "loop"), !_e(l) && ue(l, "replace"), !_e(s) && ue(s, "cacheResource");
                        var p = S()({soundId: -1}, t);
                        e._playOneEffect(p, i)
                    }, e.stopAudioMixing = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            callback: t,
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.stopAudioMixing"
                        });
                        e._stopOneEffect({soundId: -1}, n)
                    }, e.pauseAudioMixing = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            callback: t,
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.pauseAudioMixing"
                        });
                        return e._pauseOneEffect({soundId: -1}, n)
                    }, e.resumeAudioMixing = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            callback: function (n, i) {
                                if (n) return t && t(n);
                                e.dispatchEvent({type: "audioMixingPlayed"}), t && t(null)
                            }, getStates: e._getOneEffectStates({soundId: -1}), name: "Stream.resumeAudioMixing"
                        });
                        e._resumeOneEffect({soundId: -1}, n)
                    }, e.adjustAudioMixingVolume = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.adjustAudioMixingVolume",
                            options: arguments,
                            tag: "tracer"
                        });
                        de(t, "volume", 0, 100), e.audioMixing.sounds[-1].volume = t, e._flushAudioMixingMuteStatus(), n()
                    }, e.getAudioMixingDuration = function () {
                        var t = o.b.reportApiInvoke(e.sid, {
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.getAudioMixingDuration"
                        }), n = e._getOneEffectDuration({soundId: -1});
                        return t(null, n), n
                    }, e.getAudioMixingCurrentPosition = function () {
                        var t = o.b.reportApiInvoke(e.sid, {
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.getAudioMixingCurrentPosition"
                        }), n = e._getOneEffectCurrentPosition({soundId: -1}, !0);
                        return t(null, n), n
                    }, e.setAudioMixingPosition = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: n,
                            options: arguments,
                            tag: "tracer",
                            getStates: e._getOneEffectStates({soundId: -1}),
                            name: "Stream.setAudioMixingPosition"
                        });
                        de(t, "position", 0, 1e8), e._setOneEffectPosition({soundId: -1}, t, i)
                    }, e.playEffect = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: function (t) {
                                if (t) return n && n(t);
                                e.dispatchEvent({type: "effectPlayed"}), n && n(null)
                            }, name: "Stream.playEffect", options: t
                        });
                        se(t, "options");
                        var r = t.soundId, s = t.filePath, c = t.cycle;
                        de(r, "soundId", 1, 1e4), ce(s, "filePath", 0, Object(a.getParameter)("FILEPATH_LENMAX"), !1), !_e(c) && de(c, "cycle"), e._playOneEffect(t, i)
                    }, e.stopEffect = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: n,
                            getStates: e._getOneEffectStates({soundId: t}),
                            name: "Stream.stopEffect"
                        });
                        de(t, "soundId", 1, 1e4), e._stopOneEffect({soundId: t}, i)
                    }, e.stopAllEffects = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {callback: t, name: "Stream.stopAllEffect"}), i = !1, a = 0,
                            r = 0, s = function (e) {
                                i || (e ? (n(e), i = !0) : a += 1, a === r && (n(null), i = !0))
                            };
                        for (var c in e.audioMixing.sounds) {
                            var d = e.audioMixing.sounds[c];
                            -1 !== d.soundId && (d.state !== e.audioMixing.states.BUSY && d.state !== e.audioMixing.states.PAUSED || (r++, e._stopOneEffect({soundId: c}, s)))
                        }
                        r || n(null)
                    }, e.preloadEffect = function (t, n, i) {
                        var r = o.b.reportApiInvoke(e.sid, {
                            callback: i,
                            options: arguments,
                            tag: "tracer",
                            name: "Stream.preloadEffect"
                        });
                        de(t, "soundId", 1, 1e4), ce(n, "filePath", 1, Object(a.getParameter)("FILEPATH_LENMAX"), !1), e._initSoundIfNotExists(t, n), e.audioMixing.buffer[n] ? r(null) : e.loadAudioBuffer(n, n, r)
                    }, e.unloadEffect = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: n,
                            options: arguments,
                            tag: "tracer",
                            name: "Stream.unloadEffect"
                        });
                        de(t, "soundId", 1, 1e4);
                        var a = e.audioMixing.sounds[t];
                        if (!a) {
                            var s = "SOUND_NOT_EXISTS";
                            return r.default.error(s, t), void i(s)
                        }
                        var c = a.options ? a.options.filePath : a.filePath;
                        if (c) delete e.audioMixing.buffer[c], delete e.audioMixing.sounds[t], i(null); else {
                            var d = "SOUND_BUFFER_NOT_FOUND";
                            r.default.error(d, t), i(d)
                        }
                    }, e.pauseEffect = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: n,
                            options: arguments,
                            tag: "tracer",
                            name: "Stream.pauseEffect"
                        });
                        return e._pauseOneEffect({soundId: t}, i)
                    }, e.pauseAllEffects = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {callback: t, name: "Stream.pauseAllEffects"}), i = !1, a = 0,
                            r = 0, s = function (e) {
                                i || (e ? (n(e), i = !0) : a += 1, a === r && (n(null), i = !0))
                            };
                        for (var c in e.audioMixing.sounds) "-1" !== c && e.audioMixing.sounds[c].state === e.audioMixing.states.BUSY && (r++, e._pauseOneEffect({soundId: c}, s));
                        r || n(null)
                    }, e.resumeEffect = function (t, n) {
                        de(t, "soundId", 1, 1e4);
                        var i = o.b.reportApiInvoke(e.sid, {
                            callback: n,
                            options: arguments,
                            tag: "tracer",
                            name: "Stream.resumeEffect"
                        });
                        return e._resumeOneEffect({soundId: t}, i)
                    }, e.resumeAllEffects = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {callback: t, name: "Stream.resumeAllEffects"}), i = !1, a = 0,
                            r = 0, s = function (e) {
                                i || (e ? (n(e), i = !0) : a += 1, a === r && (n(null), i = !0))
                            };
                        for (var c in e.audioMixing.sounds) "-1" !== c && e.audioMixing.sounds[c].state === e.audioMixing.states.PAUSED && (r++, e._resumeOneEffect({soundId: c}, s));
                        r || n(null)
                    }, e.getEffectsVolume = function () {
                        var t = [];
                        for (var n in e.audioMixing.sounds) {
                            var i = e.audioMixing.sounds[n];
                            i && "-1" !== n && t.push({soundId: parseInt(n), volume: i.volume})
                        }
                        return t
                    }, e.setEffectsVolume = function (t, n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setEffectsVolume",
                            options: arguments,
                            tag: "tracer",
                            callback: n
                        });
                        for (var a in de(t, "volume", 0, 100), e.audioMixing.defaultVolume = t, e.audioMixing.sounds) {
                            var r = e.audioMixing.sounds[a];
                            "-1" !== a && (r.volume = t)
                        }
                        e._flushAudioMixingMuteStatus(), i(null)
                    }, e.setVolumeOfEffect = function (t, n, i) {
                        var a = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVolumeOfEffect",
                            options: arguments,
                            tag: "tracer",
                            callback: i
                        });
                        de(t, "soundId", 0, 1e4), de(n, "volume", 0, 100), e._initSoundIfNotExists(t), e.audioMixing.sounds[t].volume = n, e._flushAudioMixingMuteStatus(), a(null)
                    }
                }(t), function (e, t) {
                    e.videoConstraint = {}, t.cameraId && (e.videoConstraint.deviceId = {exact: t.cameraId}), t.facingMode && (e.videoConstraint.facingMode = t.facingMode), e.videoSize && (e.videoConstraint.width = e.videoSize[0], e.videoConstraint.height = e.videoSize[1]), Object(f.isLegacyChrome)() || (e.videoConstraint.frameRate = {
                        ideal: 30,
                        max: 30
                    }), e.audioConstraint = {}, t.microphoneId && (e.audioConstraint.deviceId = {exact: t.microphoneId}), Object(f.isLegacyChrome)() || e.audioProcessing && (void 0 !== e.audioProcessing.AGC && (Object(f.isFireFox)() ? e.audioConstraint.autoGainControl = e.audioProcessing.AGC : Object(f.isChrome)() && (e.audioConstraint.googAutoGainControl = e.audioProcessing.AGC, e.audioConstraint.googAutoGainControl2 = e.audioProcessing.AGC)), void 0 !== e.audioProcessing.AEC && (e.audioConstraint.echoCancellation = e.audioProcessing.AEC), void 0 !== e.audioProcessing.ANS && (Object(f.isFireFox)() ? e.audioConstraint.noiseSuppression = e.audioProcessing.ANS : Object(f.isChrome)() && (e.audioConstraint.googNoiseSuppression = e.audioProcessing.ANS))), e.screenConstraint = {}, t.sourceId && (e.screenConstraint.sourceId = t.sourceId), t.extensionId && Object(f.isChrome)() ? (e.screenConstraint.extensionId = t.extensionId, e.screenConstraint.mandatory = {
                        chromeMediaSource: "desktop",
                        maxWidth: e.screenAttributes.width,
                        maxHeight: e.screenAttributes.height,
                        maxFrameRate: e.screenAttributes.maxFr,
                        minFrameRate: e.screenAttributes.minFr
                    }) : (e.screenConstraint.mediaSource = "screen", e.screenConstraint.width = e.screenAttributes.width, e.screenConstraint.height = e.screenAttributes.height, e.screenConstraint.frameRate = {
                        ideal: e.screenAttributes.maxFr,
                        max: e.screenAttributes.maxFr
                    }), t.mediaSource && (e.screenConstraint.mediaSource = t.mediaSource), e.setVideoResolution = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoResolution",
                            options: arguments,
                            tag: "tracer"
                        });
                        if (!(n instanceof Array)) {
                            var a = Ee(n += "");
                            return a && a.video ? (e.videoConstraint = S()(e.videoConstraint, {
                                width: {ideal: a.video.width},
                                height: {ideal: a.video.height}
                            }), t.attributes.resolution = a.attributes.resolution, (s = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && s.applyConstraints ? (r.default.debug("setVideoResolution applyConstraints", e.videoConstraint), s.applyConstraints(e.videoConstraint).then(i).catch(i)) : i(), !0) : (i("NO_PROFILE_".concat(n)), !1)
                        }
                        var s, c = n[0], d = n[1];
                        e.videoConstraint = S()(e.videoConstraint, {
                            width: {ideal: c},
                            height: {ideal: d}
                        }), t.attributes.resolution = "".concat(c, "x").concat(d), (s = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && s.applyConstraints ? (r.default.debug("setVideoResolution applyConstraints", e.videoConstraint), s.applyConstraints(e.videoConstraint).then(i).catch(i)) : i()
                    }, e.setVideoFrameRate = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoFrameRate",
                            options: arguments,
                            tag: "tracer"
                        });
                        if (Object(f.isFireFox)()) return i("FIREFOX_NOT_SUPPORTED"), !1;
                        if ("object" === re()(n) && n instanceof Array && n.length > 1) {
                            e.videoConstraint = S()(e.videoConstraint, {
                                frameRate: {
                                    ideal: n[0],
                                    max: n[1]
                                }
                            }), t.attributes.minFrameRate = n[0], t.attributes.maxFrameRate = n[1];
                            var a = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0];
                            return a && a.applyConstraints ? (r.default.debug("setVideoFrameRate applyConstraints", e.videoConstraint), a.applyConstraints(e.videoConstraint).then(i).catch(i)) : i(), !0
                        }
                        return i("INVALID_PARAM_".concat(JSON.stringify(n))), !1
                    }, e.setVideoBitRate = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoBitRate",
                            options: arguments,
                            tag: "tracer"
                        });
                        return "object" === re()(n) && n instanceof Array && n.length > 1 ? (t.attributes.minVideoBW = n[0], t.attributes.maxVideoBW = n[1], e.connectionSpec && (e.connectionSpec.minVideoBW = n[0], e.connectionSpec.maxVideoBW = n[1]), e.pc && e.pc.renegotiate && e.pc.renegotiate(), i(), !0) : (i("INVALID_PARAM_".concat(JSON.stringify(n))), !1)
                    }, e.setScreenBitRate = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setScreenBitRate",
                            options: arguments,
                            tag: "tracer"
                        });
                        return "object" === re()(n) && n instanceof Array && n.length > 1 ? (t.screenAttributes.minVideoBW = n[0], t.screenAttributes.maxVideoBW = n[1], i(), !0) : (i("INVALID_PARAM_".concat(JSON.stringify(n))), !1)
                    }, e.setScreenProfile = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setScreenProfile",
                            options: arguments,
                            tag: "tracer"
                        });
                        oe(t, "profile", ["480p_1", "480p_2", "720p_1", "720p_2", "1080p_1", "1080p_2"]);
                        var i = Ee(t);
                        return i && i.screen ? (e.screenConstraint.mandatory ? (e.screenConstraint.mandatory.maxWidth = i.screen.width, e.screenConstraint.mandatory.maxHeight = i.screen.height, i.screen.frameRate && i.screen.frameRate.min && i.screen.frameRate.max && (e.screenConstraint.mandatory.minFrameRate = i.screen.frameRate.min, e.screenConstraint.mandatory.maxFrameRate = i.screen.frameRate.max)) : e.screenConstraint = S()(e.screenConstraint, i.screen), e.screenAttributes.width = i.screen.width, e.screenAttributes.height = i.screen.height, e.screenAttributes.minFr = i.screen.frameRate.min, e.screenAttributes.maxFr = i.screen.frameRate.max, n(), !0) : (n("NO_SCREEN_PROFILE_".concat(JSON.stringify(t))), !1)
                    }, e.setVideoProfileCustom = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoProfileCustom",
                            options: arguments,
                            tag: "tracer"
                        });
                        e.setVideoResolution(t[0]), e.setVideoFrameRate([t[1], t[1]]), e.setVideoBitRate([t[2], t[2]]), n()
                    }, e.setVideoProfileCustomPlus = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoProfileCustom",
                            options: arguments,
                            tag: "tracer"
                        });
                        e.videoConstraint.width = n.width, e.videoConstraint.height = n.height, t.attributes.resolution = "".concat(n.width, "x").concat(n.height), e.setVideoFrameRate([n.framerate, n.framerate]), e.setVideoBitRate([n.bitrate, n.bitrate]), i()
                    }, e.setVideoProfile = function (n) {
                        var i = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoProfile",
                            options: arguments,
                            tag: "tracer"
                        }), a = Ee(n);
                        if (!a) {
                            var s = "Invalid Profile ".concat(n);
                            throw new Error(s)
                        }
                        if (e.profile = n, a && a.video) {
                            e.profile = a.profileName, e.videoConstraint = S()(e.videoConstraint, a.video), e.connectionSpec && a.attributes.maxVideoBW && (e.connectionSpec.minVideoBW = a.attributes.minVideoBW, e.connectionSpec.maxVideoBW = a.attributes.maxVideoBW), Object(f.isEdge)() && (e.videoConstraint.frameRate.max = 60), Object(f.isFireFox)() && (e.videoConstraint.frameRate = {
                                ideal: 30,
                                max: 30
                            }), t.attributes = S()(t.attributes, a.attributes), e.pc && e.pc.renegotiate && e.pc.renegotiate();
                            var c = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0];
                            return c && c.applyConstraints ? (r.default.debug("setVideoProfile applyConstraints", e.videoConstraint), c.applyConstraints(e.videoConstraint).then(function (t) {
                                i(t), Object(te.g)(e.stream, function (t, n) {
                                    e.videoWidth = t, e.videoHeight = n
                                }, function (t) {
                                    r.default.warning("[".concat(e.streamId, "] vsResHack failed: "), t)
                                })
                            }).catch(i)) : i(), !0
                        }
                        return i("INVALID_VIDEO_PROFILE_".concat(n)), !1
                    }, e.setAudioProfile = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setAudioProfile",
                            options: arguments,
                            tag: "tracer"
                        });
                        oe(t, "profile", ["speech_low_quality", "speech_standard", "music_standard", "standard_stereo", "high_quality", "high_quality_stereo"]), e.audioProfile = t;
                        var i = Te(t);
                        return e.highQuality = i.highQuality, e.stereo = i.stereo, e.speech = i.speech, e.lowQuality = i.lowQuality, e.stereo && Object(f.isChrome)() && (e.audioConstraint.googAutoGainControl = !1, e.audioConstraint.googAutoGainControl2 = !1, e.audioConstraint.echoCancellation = !1, e.audioConstraint.googNoiseSuppression = !1), n(), !0
                    }, e.setVideoEncoderConfiguration = function (t) {
                        se(t, "config");
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.setVideoEncoderConfiguration",
                            options: t,
                            tag: "tracer"
                        });
                        t.resolution && (de(t.resolution.width, "config.resolution.width"), de(t.resolution.height, "config.resolution.height"), e.setVideoResolution([t.resolution.width, t.resolution.height])), t.frameRate && (de(t.frameRate.min, "config.frameRate.min"), de(t.frameRate.max, "config.frameRate.max"), e.setVideoFrameRate([t.frameRate.min, t.frameRate.max])), t.bitrate && (de(t.bitrate.min, "config.bitrate.min", 1, 1e7), de(t.bitrate.max, "config.bitrate.max", 1, 1e7), e.setVideoBitRate([t.bitrate.min, t.bitrate.max])), n()
                    }, e.getSupportedProfile = function (t) {
                        var n = o.b.reportApiInvoke(e.sid, {
                            name: "Stream.getSupportedProfile",
                            options: arguments,
                            tag: "tracer",
                            callback: t
                        });
                        if (!e.local) {
                            var i = "ONLY_LOCAL_STREAM_SUPPORTED";
                            return r.default.error(i), n(i)
                        }
                        if (!e.stream) return i = "STREAM_NOT_INIT", r.default.error(i), n(i);
                        if (!e.stream.getVideoTracks) return i = "TRACK_NOT_SUPPORT", r.default.error(i), n(i);
                        var a = e.stream.getVideoTracks()[0];
                        if (!a) return i = "NO_VIDEO_TRACK_FOUND", r.default.error(i), n(i);
                        if (!a.getCapabilities) return i = "GETCAPABILITY_NOT_SUPPORT", r.default.error(i), n(i);
                        var s = a.getCapabilities();
                        return n(null, be(s))
                    }
                }(t, e), t.on("collectStats", function (e) {
                    e.promises.push(t._getPCStats(e.interval)), e.promises.push(new Promise(function (e) {
                        var n = {};
                        t.pc && t.pc.isSubscriber ? null !== window.navigator.userAgent.match("Firefox") && (ne(n, "videoReceiveResolutionHeight", t.videoHeight), ne(n, "videoReceiveResolutionWidth", t.videoWidth)) : t.pc && !t.pc.isSubscriber && ((Object(f.isSafari)() || Object(f.isFireFox)()) && (ne(n, "videoSendResolutionHeight", t.videoHeight), ne(n, "videoSendResolutionWidth", t.videoWidth)), (Object(f.isSafari)() || Object(f.isFireFox)()) && t.uplinkStats && ne(n, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)), e(n)
                    })), e.promises.push(new Promise(function (e) {
                        var n = {};
                        return t.traffic_stats && t.pc && t.pc.isSubscriber ? (ne(n, "accessDelay", t.traffic_stats.access_delay), ne(n, "endToEndDelay", t.traffic_stats.e2e_delay), ne(n, "videoReceiveDelay", t.traffic_stats.video_delay), ne(n, "audioReceiveDelay", t.traffic_stats.audio_delay)) : t.traffic_stats && t.pc && !t.pc.isSubscriber && ne(n, "accessDelay", t.traffic_stats.access_delay), e(n)
                    }))
                }), t.getId = function () {
                    return t.streamId
                }, t.getUserId = function () {
                    return t.userId
                }, t.checkDualStreamEnabled = function () {
                    if (Object(a.getParameter)("DUALSTREAM_OPERATION_CHECK") && t.isDualStream) {
                        return r.default.error("Operation not permitted: ".concat("DUAL_STREAM_ENABLED")), "DUAL_STREAM_ENABLED"
                    }
                    return !1
                }, t.setUserId = function (e) {
                    var n = o.b.reportApiInvoke(t.sid, {name: "Stream.setUserId", options: arguments, tag: "tracer"});
                    t.userId && r.default.warning("[".concat(t.streamId, "] Stream.userId ").concat(t.userId, " => ").concat(e)), t.userId = e, n()
                }, t.getAttributes = function () {
                    return e.screen ? t.screenAttributes : e.attributes
                }, t.hasAudio = function () {
                    return t.audio
                }, t.hasVideo = function () {
                    return t.video
                }, t.hasScreen = function () {
                    return t.screen
                }, t.isVideoOn = function () {
                    return (t.hasVideo() || t.hasScreen()) && !t.userMuteVideo
                }, t.isAudioOn = function () {
                    return t.hasAudio() && !t.userMuteAudio
                }, t.init = function (i, a) {
                    var s = o.b.reportApiInvoke(t.sid, {
                        callback: function (e, t) {
                            if (e) return a && a(e);
                            i && i(t)
                        }, name: "Stream.init", options: arguments, tag: "tracer"
                    }), c = ((new Date).getTime(), arguments[2]);
                    if (void 0 === c && (c = 2), !0 === t.initialized) return s({
                        type: "warning",
                        msg: "STREAM_ALREADY_INITIALIZED"
                    });
                    if (!0 !== t.local) return s({type: "warning", msg: "STREAM_NOT_LOCAL"});
                    var d = Math.random().toString().slice(3);
                    this._streamInitID = d, t.videoSource ? t.videoName = "videoSource" : t.video && (t.videoName = ie.searchDeviceNameById(e.cameraId) || "default"), t.audioSource ? t.audioName = "audioSource" : t.audio && (t.audioName = ie.searchDeviceNameById(e.microphoneId) || "default"), t.screen && (t.screenName = e.extensionId || "default");
                    try {
                        if (e.audio || e.video || e.screen || e.videoSource || e.audioSource) {
                            r.default.debug("[".concat(t.streamId, "] Requested access to local media"));
                            var u = {streamId: t.streamId};
                            e.videoSource ? u.videoSource = e.videoSource : e.screen ? u.screen = t.screenConstraint : e.video && (u.video = t.videoConstraint), e.audioSource ? u.audioSource = e.audioSource : e.audio && (u.audio = t.audioConstraint), ee(u, function (i) {
                                if (u.screen && r.default.debug("[".concat(t.streamId, "] User has granted access to screen sharing")), (u.video || u.audio) && r.default.debug("[".concat(t.streamId, "] User has granted access to local media")), null === t._streamInitID) {
                                    i.getTracks().forEach(function (e) {
                                        e.stop()
                                    });
                                    var a = {
                                        type: "error",
                                        msg: "STREAM_IS_CLOSED",
                                        info: "stream is closed and cannot be initialized"
                                    };
                                    return r.default.error(t.streamId, a.info), void s(a)
                                }
                                if (t._streamInitID !== d) {
                                    i.getTracks().forEach(function (e) {
                                        e.stop()
                                    });
                                    a = {
                                        type: "error",
                                        msg: "ABORT_OTHER_INIT",
                                        info: "stream initialization is aborted because of another stream.init"
                                    };
                                    return r.default.error(t.streamId, a.info), void s(a)
                                }
                                t.dispatchEvent({type: "accessAllowed"}), t.stream = i, t.initialized = !0, t.reloadDeviceName(), t.hasVideo() && Object(te.g)(i, function (e, n) {
                                    t.videoWidth = e, t.videoHeight = n
                                }, function (e) {
                                    r.default.warning("[".concat(t.streamId, "] vsResHack failed: "), e)
                                }), e.screen && t.stream && t.stream.getVideoTracks()[0] && (t.stream.getVideoTracks()[0].onended = function () {
                                    t.dispatchEvent({type: "stopScreenSharing"})
                                }), t.stream && t.stream.getTracks && t.stream.getTracks().forEach(function (e) {
                                    e && !e.onended && (e.onended = n)
                                }), s()
                            }, function (e) {
                                var n = {type: "error", info: null};
                                switch (e && (n.msg = e.name || e.code || e, e.message && (n.info = e.message), e.code && (n.info ? n.info += ". " + e.code : n.info = " " + e.code), e.constraint && (n.info ? n.info += ". Constraint: " + e.constraint : n.info = "constraint: " + e.constraint)), n.msg) {
                                    case"Starting video failed":
                                    case"TrackStartError":
                                        if (t.videoConstraint && (delete t.videoConstraint.width, delete t.videoConstraint.height), c > 0) return void setTimeout(function () {
                                            t.init(function (e) {
                                                return s(e)
                                            }, s, c - 1)
                                        }, 1);
                                        n.msg = "MEDIA_OPTION_INVALID";
                                        break;
                                    case"DevicesNotFoundError":
                                        n.msg = "DEVICES_NOT_FOUND";
                                        break;
                                    case"NotSupportedError":
                                        n.msg = "NOT_SUPPORTED";
                                        break;
                                    case"PermissionDeniedError":
                                    case"InvalidStateError":
                                        n.msg = "PERMISSION_DENIED", t.dispatchEvent({type: "accessDenied"});
                                        break;
                                    case"PERMISSION_DENIED":
                                    case"NotAllowedError":
                                        t.dispatchEvent({type: "accessDenied"});
                                        break;
                                    case"ConstraintNotSatisfiedError":
                                        n.msg = "CONSTRAINT_NOT_SATISFIED";
                                        break;
                                    default:
                                        n.msg || (n.msg = "UNDEFINED")
                                }
                                var i = "Media access ".concat(n.msg).concat(n.info ? ": " + n.info : "");
                                r.default.error("[".concat(t.streamId, "] "), i), s(n)
                            })
                        } else s({type: "warning", msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"})
                    } catch (e) {
                        r.default.error("[".concat(t.streamId, "] Stream init: "), e), s({
                            type: "error",
                            msg: e.message || e
                        })
                    }
                }, t.reloadDeviceName = function () {
                    if (t.stream) {
                        if (t.stream.getVideoTracks) {
                            var e = t.stream.getVideoTracks()[0];
                            e && e.label && (t.videoName = e.label)
                        }
                        if (t.stream.getAudioTracks) {
                            var n = t.stream.getAudioTracks()[0];
                            n && n.label && (t.audioName = n.label)
                        }
                    }
                }, t.close = function () {
                    var e = o.b.reportApiInvoke(null, {name: "Stream.close", options: arguments, tag: "tracer"});
                    if (r.default.debug("[".concat(t.streamId, "] Close stream with id"), t.streamId), void 0 !== t.stream) {
                        var n = t.stream.getTracks();
                        for (var i in n) n.hasOwnProperty(i) && n[i].stop();
                        t.stream = void 0
                    }
                    Object(f.isSafari)() && t.pc && t.pc.peerConnection && t.pc.peerConnection.removeTrack && t.pc.peerConnection.getSenders && t.pc.peerConnection.getSenders().forEach(function (e) {
                        e && (r.default.debug("[".concat(t.streamId, "] Remove Track"), e), t.pc.peerConnection.removeTrack(e))
                    });
                    t.initialized = !1, t._streamInitID = null, t._onAudioMute = void 0, t._onAudioUnmute = void 0, t._onVideoMute = void 0, t._onVideoUnmute = void 0, t.lowStream && t.lowStream.close(), e()
                }, t.enableAudio = function () {
                    var e, n = o.b.reportApiInvoke(t.sid, {name: "Stream.enableAudio", options: arguments, tag: "tracer"});
                    return r.default.deprecate("[".concat(t.streamId, "] Stream.enableAudio is deprecated and will be removed in the future. Use Stream.unmuteAudio instead")), t.userMuteAudio || r.default.warning("[".concat(t.streamId, "] User already enableAudio")), t.userMuteAudio = !1, n(null, e = !t.peerMuteAudio && t._unmuteAudio()), e
                }, t.disableAudio = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.disableAudio", options: arguments, tag: "tracer"});
                    r.default.deprecate("[".concat(t.streamId, "] Stream.disableAudio is deprecated and will be removed in the future. Use Stream.muteAudio instead")), t.userMuteAudio && r.default.warning("[".concat(t.streamId, "] User already disableAudio")), t.userMuteAudio = !0;
                    var n = t._muteAudio();
                    return e(null, n), n
                }, t.enableVideo = function () {
                    var e, n = o.b.reportApiInvoke(t.sid, {name: "Stream.enableVideo", options: arguments, tag: "tracer"});
                    return r.default.deprecate("[".concat(t.streamId, "] Stream.enableVideo is deprecated and will be removed in the future. Use Stream.unmuteVideo instead")), t.userMuteVideo || r.default.warning("[".concat(t.streamId, "] User already enableVideo")), t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1), n(null, e = !t.peerMuteVideo && t._unmuteVideo()), e
                }, t.disableVideo = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.disableVideo", options: arguments, tag: "tracer"});
                    r.default.deprecate("[".concat(t.streamId, "] Stream.disableVideo is deprecated and will be removed in the future. Use Stream.muteVideo instead")), t.userMuteVideo && r.default.warning("[".concat(t.streamId, "] User already disableVideo")), t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0);
                    var n = t._muteVideo();
                    return e(null, n), n
                }, t.unmuteAudio = function () {
                    var e, n = o.b.reportApiInvoke(t.sid, {name: "Stream.unmuteAudio", options: arguments, tag: "tracer"});
                    return t.userMuteAudio || r.default.warning("[".concat(t.streamId, "] User already unmuteAudio")), t.userMuteAudio = !1, n(null, e = !t.peerMuteAudio && t._unmuteAudio()), e
                }, t.muteAudio = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.muteAudio", options: arguments, tag: "tracer"});
                    t.userMuteAudio && r.default.warning("[".concat(t.streamId, "] User already muteAudio")), t.userMuteAudio = !0;
                    var n = t._muteAudio();
                    return e(null, n), n
                }, t.unmuteVideo = function () {
                    var e, n = o.b.reportApiInvoke(t.sid, {name: "Stream.unmuteVideo", options: arguments, tag: "tracer"});
                    return t.userMuteVideo || r.default.warning("[".concat(t.streamId, "] User already unmuteVideo")), t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1), n(null, e = !t.peerMuteVideo && t._unmuteVideo()), e
                }, t.muteVideo = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.muteVideo", options: arguments, tag: "tracer"});
                    t.userMuteVideo && r.default.warning("[".concat(t.streamId, "] User already muteVideo")), t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0);
                    var n = t._muteVideo();
                    return e(null, n), n
                }, t._unmuteAudio = function () {
                    return r.default.debug("[".concat(t.streamId, "] Unmuted audio stream with id "), t.streamId), t._flushAudioMixingMuteStatus(!1), !(!t.hasAudio() || !t.initialized || void 0 === t.stream || !0 === t.stream.getAudioTracks()[0].enabled) && (t._onAudioUnmute && t._onAudioUnmute(), t.pc && (t.pc.isAudioMute = !1), t.stream.getAudioTracks()[0].enabled = !0, !0)
                }, t._isAudioMuted = function () {
                    if (t.stream && t.hasAudio()) {
                        var e = t.stream.getAudioTracks();
                        return e.length > 0 && !e[0].enabled
                    }
                    return !1
                }, t._isVideoMuted = function () {
                    if (t.stream && t.hasVideo()) {
                        var e = t.stream.getVideoTracks();
                        return e.length > 0 && !e[0].enabled
                    }
                    return !1
                }, t._muteAudio = function () {
                    return r.default.debug("[".concat(t.streamId, "] Muted audio stream with id "), t.streamId), t._flushAudioMixingMuteStatus(!0), !!(t.hasAudio() && t.initialized && void 0 !== t.stream && t.stream.getAudioTracks()[0].enabled) && (t._onAudioMute && t._onAudioMute(), t.pc && (t.pc.isAudioMute = !0), t.stream.getAudioTracks()[0].enabled = !1, t.sid && o.b.audioSendingStopped(t.sid, {
                        succ: !0,
                        reason: "muteAudio"
                    }), !0)
                }, t._unmuteVideo = function () {
                    return r.default.debug("[".concat(t.streamId, "] Unmuted video stream with id"), t.streamId), !(!t.initialized || void 0 === t.stream || !t.stream.getVideoTracks().length || !0 === t.stream.getVideoTracks()[0].enabled) && (t._onVideoUnmute && t._onVideoUnmute(), t.pc && (t.pc.isVideoMute = !1), t.stream.getVideoTracks()[0].enabled = !0, t.lowStream && t.lowStream._unmuteVideo(), !0)
                }, t._muteVideo = function () {
                    return r.default.debug("[".concat(t.streamId, "] Muted video stream with id"), t.streamId), !!(t.initialized && void 0 !== t.stream && t.stream.getVideoTracks().length && t.stream.getVideoTracks()[0].enabled) && (t._onVideoMute && t._onVideoMute(), t.pc && (t.pc.isVideoMute = !0), t.stream.getVideoTracks()[0].enabled = !1, t.lowStream && t.lowStream._muteVideo(), t.sid && o.b.videoSendingStopped(t.sid, {
                        succ: !0,
                        reason: "muteVideo"
                    }), !0)
                }, t.addTrack = function (i) {
                    var a = o.b.reportApiInvoke(t.sid, {name: "Stream.addTrack", options: arguments, tag: "tracer"}),
                        r = t.checkDualStreamEnabled();
                    if (r) return a(r);
                    if (t.pc && t.pc.addTrack(i, t.stream), "audio" == i.kind) {
                        t._cleanupAudioMixing();
                        var s = new MediaStream;
                        t.userMuteAudio && (i.enabled = !1), s.addTrack(i);
                        var c = t.stream.getVideoTracks()[0];
                        c && (s.addTrack(c), t.audio = !0, e.audio = !0), t.stream = s, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream)
                    } else t.userMuteVideo && (i.enabled = !1), t.stream.addTrack(i), t.video = !0, e.video = !0;
                    i.onended || (i.onended = n), a()
                }, t.removeTrack = function (n) {
                    var i = o.b.reportApiInvoke(t.sid, {name: "Stream.removeTrack", options: arguments, tag: "tracer"}),
                        a = t.checkDualStreamEnabled();
                    if (a) return i(a);
                    t.pc && t.pc.removeTrack(n, t.stream), t.stream.removeTrack(n), t._cleanupAudioMixing(), "audio" === n.kind ? (t.audio = !1, e.audio = !1) : (t.video = !1, e.video = !1), t.audioLevelHelper = null, "live" == n.readyState && (n.stop(), r.default.debug("[".concat(t.streamId, "] Track ").concat(n.kind, " Stopped"))), i()
                }, t.setAudioOutput = function (e, n, i) {
                    var a = o.b.reportApiInvoke(t.sid, {
                        callback: function (e, t) {
                            if (e) return i && i(e);
                            n && n(t)
                        }, name: "Stream.setAudioOutput", options: arguments, tag: "tracer"
                    });
                    return le(e, 1, 255) ? (t.audioOutput = e, t.player ? void t.player.setAudioOutput(e, function () {
                        return a()
                    }, a) : a()) : (r.default.error("[".concat(t.streamId, "] setAudioOutput Invalid Parameter"), e), a(x.INVALID_PARAMETER))
                }, t.play = function (e, n, i) {
                    "function" == typeof n && (i = n, n = null), r.default.debug("[".concat(t.streamId, "] play()."), e, n);
                    var a = o.b.reportApiInvoke(t.sid, {
                        name: "Stream.play",
                        options: arguments,
                        tag: "tracer",
                        callback: i
                    });
                    if (ce(e, "elementID"), _e(n) || (_e(n.fit) || oe(n.fit, "fit", ["cover", "contain"]), _e(n.muted) || ue(n.muted, "muted")), t.player) r.default.warning("[".concat(t.streamId, "] Stream.play(): Stream is already playing. Fallback to resume stream")), t.resume().then(function () {
                        a(null)
                    }).catch(a); else {
                        t.elementID = e, t.playOptions = n, !t.local || t.video || t.screen ? t.player = new V({
                            id: t.getId(),
                            stream: t,
                            elementID: e,
                            options: n
                        }) : t.hasAudio() && (t.player = new V({id: t.getId(), stream: t, elementID: e, options: n}));
                        var s = {audio: null, video: null};
                        t.on("player-status-change", function e(n) {
                            if (s[n.mediaType] = n, s.audio && s.video) if (t.removeEventListener("player-status-change", e), s.video.isErrorState || s.audio.isErrorState) {
                                var i = s.video.isErrorState ? s.video : s.audio;
                                a({isErrorState: !0, status: i.status, reason: i.reason, video: s.video, audio: s.audio})
                            } else "aborted" === s.video.status && "aborted" === s.audio.status ? a({
                                status: "aborted",
                                reason: "stop",
                                video: s.video,
                                audio: s.audio
                            }) : a(null)
                        }), t.audioOutput && t.player.setAudioOutput(t.audioOutput), void 0 !== t.audioLevel && t.player.setAudioVolume(t.audioLevel), t._flushAudioMixingMuteStatus(!1)
                    }
                }, t.stop = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.stop", options: arguments, tag: "tracer"});
                    r.default.debug("[".concat(t.streamId, "] Stop stream player with id "), t.streamId), t.player ? (t.player.destroy(), delete t.player) : r.default.error("[".concat(t.streamId, "] Stream.stop(): Stream is not playing")), t._flushAudioMixingMuteStatus(!0), e()
                }, t.isPlaying = function () {
                    return !!t.player
                }, t.isPaused = function () {
                    return !!t.player && (!!(t.player.video && t.player.video.paused && t.player.mediaElemExists(t.player.video)) || !!(t.player.audio && t.player.audio.paused && t.player.mediaElemExists(t.player.audio)))
                }, t.resume = function () {
                    var e, n;
                    return t.player ? (t.player.video && t.player.video.play && (e = t.player.video.play()), e = e || Promise.resolve(), t.player.audio && t.player.audio.play && (n = t.player.audio.play()), n = n || Promise.resolve(), Promise.all([e, n])) : Promise.reject("NO_PLAYER_FOUND")
                }, t.getVideoTrack = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.getVideoTrack", options: arguments, tag: "tracer"});
                    if (t.stream && t.stream.getVideoTracks) {
                        var n = t.stream.getVideoTracks()[0];
                        if (n) return r.default.info("[".concat(t.streamId, "] getVideoTrack"), n), e(), n
                    }
                    r.default.info("[".concat(t.streamId, "] getVideoTrack None")), e(null, "getVideoTrack None")
                }, t.getAudioTrack = function () {
                    var e = o.b.reportApiInvoke(t.sid, {name: "Stream.getAudioTrack", options: arguments, tag: "tracer"});
                    if (t.stream && t.stream.getAudioTracks) {
                        var n = t.stream.getAudioTracks()[0];
                        if (n) return r.default.info("[".concat(t.streamId, "] getAudioTracks"), n), e(), n
                    }
                    r.default.info("[".concat(t.streamId, "] getAudioTracks None")), e(null, "getAudioTracks None")
                }, t._replaceMediaStreamTrack = function (e, n, i) {
                    if (t.stream) {
                        if ("video" == e.kind) {
                            if (o = t.stream.getVideoTracks()[0]) return t.userMuteVideo && (e.enabled = !1), t.stream.removeTrack(o), t.stream.addTrack(e), r.default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(e.kind, " SUCCESS")), "live" == o.readyState && (o.stop(), r.default.debug("[".concat(t.streamId, "] Track ").concat(o.kind, " Stopped"))), n && n();
                            var a = "MEDIASTREAM_TRACK_NOT_FOUND";
                            return r.default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)), i(a)
                        }
                        if ("audio" == e.kind) {
                            var o;
                            if (o = t.stream.getAudioTracks()[0]) {
                                t.userMuteAudio && (e.enabled = !1);
                                var s = new MediaStream;
                                s.addTrack(e);
                                var c = t.stream && t.stream.getVideoTracks()[0];
                                return c && s.addTrack(c), t.stream = s, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream), r.default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack SUCCESS")), "live" == o.readyState && (o.stop(), r.default.debug("[".concat(t.streamId, "] Track ").concat(o.kind, " Stopped"))), n && n()
                            }
                            a = "MEDIASTREAM_TRACK_NOT_FOUND";
                            return r.default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)), i(a)
                        }
                        a = "INVALID_TRACK_TYPE";
                        return r.default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(a, " ").concat(e.kind)), i && i(a)
                    }
                    a = "NO_STREAM_FOUND";
                    return r.default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(a)), i && i(a)
                }, t.replaceTrack = function (e, i, a) {
                    var s = o.b.reportApiInvoke(t.sid, {
                        callback: function (e, t) {
                            if (e) return a && a(e);
                            i && i(t)
                        }, name: "Stream.replaceTrack", options: arguments, tag: "tracer"
                    });
                    if (!e || !e.kind) return s("INVALID_TRACK");
                    var c = t.checkDualStreamEnabled();
                    return c ? s(c) : (t._cleanupAudioMixing(), e.onended || (e.onended = n), t.pc && t.pc.hasSender && t.pc.hasSender(e.kind) ? void t.pc.replaceTrack(e, function () {
                        return r.default.debug("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " SUCCESS")), t._replaceMediaStreamTrack(e, function (e) {
                            return s(null, e)
                        }, s)
                    }, function (n) {
                        return r.default.error("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " Failed ").concat(n)), s(n)
                    }) : t._replaceMediaStreamTrack(e, function (e) {
                        return s(null, e)
                    }, s))
                }, t.setAudioVolume = function (e) {
                    var n = o.b.reportApiInvoke(t.sid, {name: "Stream.setAudioVolume", options: arguments, tag: "tracer"});
                    de(e, "level", 0, 100), t.audioLevel = e, t.player && t.player.setAudioVolume(e), n()
                }, t.getStats = function (e, n, i) {
                    var a = {type: "collectStats", promises: [], interval: i};
                    t.dispatchEvent(a), Promise.all(a.promises).then(function (n) {
                        for (var i = {}, a = n.length - 1; a >= 0; a--) {
                            var r = n[a];
                            S()(i, r)
                        }
                        e && setTimeout(e.bind(t, i), 0)
                    }).catch(function (e) {
                        n && setTimeout(n.bind(t, e), 0)
                    })
                }, t._getPCStats = function (e) {
                    return new Promise(function (n, i) {
                        if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) {
                            return i("PEER_CONNECTION_NOT_ESTABLISHED")
                        }
                        t.pc.getStats(function (e) {
                            if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) {
                                return i("PEER_CONNECTION_STATE_CHANGE")
                            }
                            var a = t.pc.isSubscriber ? function (e) {
                                var t = {};
                                return e.forEach(function (e) {
                                    e.id && (-1 === e.id.indexOf("recv") && -1 === e.id.indexOf("inbound_rtp") && -1 === e.id.indexOf("inbound-rtp") && -1 === e.id.indexOf("InboundRTP") || ("audio" === e.mediaType ? (ne(t, "audioReceiveBytes", e.bytesReceived), ne(t, "audioReceivePackets", e.packetsReceived), ne(t, "audioReceivePacketsLost", e.packetsLost)) : (ne(t, "videoReceiveBytes", e.bytesReceived), ne(t, "videoReceivePacketsLost", e.packetsLost), ne(t, "videoReceivePackets", e.packetsReceived), ne(t, "videoReceiveFrameRate", e.googFrameRateReceived), ne(t, "videoReceiveDecodeFrameRate", e.googFrameRateDecoded), ne(t, "videoReceiveResolutionWidth", e.googFrameWidthReceived), ne(t, "videoReceiveResolutionHeight", e.googFrameHeightReceived))))
                                }), t
                            }(e) : function (e) {
                                var t = {};
                                return e.forEach(function (e) {
                                    e.id && (-1 === e.id.indexOf("send") && -1 === e.id.indexOf("outbound_rtp") && -1 === e.id.indexOf("OutboundRTP") || ("audio" === e.mediaType ? (ne(t, "audioSendBytes", e.bytesSent), ne(t, "audioSendPackets", e.packetsSent), ne(t, "audioSendPacketsLost", e.packetsLost)) : (ne(t, "videoSendBytes", e.bytesSent), ne(t, "videoSendPackets", e.packetsSent), ne(t, "videoSendPacketsLost", e.packetsLost), ne(t, "videoSendFrameRate", e.googFrameRateSent), ne(t, "videoSendResolutionWidth", e.googFrameWidthSent), ne(t, "videoSendResolutionHeight", e.googFrameHeightSent))))
                                }), t
                            }(e);
                            return n(a)
                        }, e)
                    }).then(function (e) {
                        return t.pc.isSubscriber ? (Object(f.isFireFox)() || Object(f.isSafari)()) && (e.videoReceiveResolutionHeight && "0" !== e.videoReceiveResolutionHeight || e.videoReceiveResolutionWidth && "0" !== e.videoReceiveResolutionWidth || (ne(e, "videoReceiveResolutionHeight", t.videoHeight), ne(e, "videoReceiveResolutionWidth", t.videoWidth))) : ((Object(f.isSafari)() || Object(f.isFireFox)()) && (e.videoSendResolutionHeight && "0" !== e.videoSendResolutionHeight || e.videoSendResolutionWidth && "0" !== e.videoSendResolutionWidth || (ne(e, "videoSendResolutionHeight", t.videoHeight), ne(e, "videoSendResolutionWidth", t.videoWidth))), (Object(f.isSafari)() || Object(f.isFireFox)()) && t.uplinkStats && ne(e, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)), Promise.resolve(e)
                    })
                }, t.getAudioLevel = function () {
                    if (t.audioLevelHelper) return t.audioLevelHelper.getAudioLevel();
                    if (t.stream) {
                        if (0 !== t.stream.getAudioTracks().length) return t.audioLevelHelper = new te.a(t.stream), t.audioLevelHelper.getAudioLevel();
                        r.default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no audio trace in stream"))
                    } else r.default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no stream exist"))
                }, t.setVideoProfile("480P"), t._switchVideoDevice = function (e, n, i) {
                    if (e === t.cameraId) return n && n();
                    var a = {video: S()({}, t.videoConstraint, {deviceId: {exact: e}}), audio: !1};
                    r.default.debug("[".concat(t.streamId, "] ").concat(a)), ee(a, function (a) {
                        try {
                            var r = function () {
                                t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID, t.playOptions)), t.cameraId = e, t.videoConstraint.deviceId = {exact: e}, t.userMuteVideo && (t.stream.getVideoTracks()[0].enabled = !1), n && n()
                            };
                            Object(f.isSafari)() ? t.replaceTrack(a.getVideoTracks()[0], r, i) : (t.removeTrack(t.stream.getVideoTracks()[0]), t.addTrack(a.getVideoTracks()[0]), r())
                        } catch (e) {
                            return i && i(e)
                        }
                    }, function (e) {
                        return i && i(e)
                    })
                }, t._switchAudioDevice = function (e, n, i) {
                    if (e === t.microphoneId) return n && n();
                    var a = {video: !1, audio: S()({}, t.audioConstraint, {deviceId: {exact: e}})};
                    r.default.debug("[".concat(t.streamId, "] "), a), ee(a, function (a) {
                        var r = function () {
                            t._cleanupAudioMixing(), t.userMuteAudio && (t.stream.getAudioTracks()[0].enabled = !1), t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID)), t.microphoneId = e, t.audioConstraint.deviceId = {exact: e}, n && n()
                        };
                        try {
                            Object(f.isSafari)() ? t.replaceTrack(a.getAudioTracks()[0], r, i) : (t.removeTrack(t.stream.getAudioTracks()[0]), t.addTrack(a.getAudioTracks()[0]), r())
                        } catch (e) {
                            return i && i(e)
                        }
                    }, function (e) {
                        return i && i(e)
                    })
                }, t.switchDevice = function (e, n, i, a) {
                    var s = o.b.reportApiInvoke(t.sid, {
                        callback: function (e, t) {
                            if (e) return a && a(e);
                            i && i(t)
                        }, name: "Stream.switchDevice", options: arguments, tag: "tracer"
                    });
                    ce(n, "deviceId");
                    var c = function () {
                        return t.inSwitchDevice = !1, s()
                    }, d = function (e) {
                        t.inSwitchDevice = !1, r.default.error("[".concat(t.streamId, "] "), e), s(e)
                    };
                    if (t.inSwitchDevice) return s("Device switch is in process.");
                    if (t.inSwitchDevice = !0, !t.local) return d("Only the local stream can switch the device.");
                    if (t.screen && "video" === e) return d("The device cannot be switched during screen-sharing.");
                    if (t.videoSource || t.audioSource) return d("The device cannot be switched when using videoSource or audioSource.");
                    if (t.lowStream) return d("The device cannot be switched when using lowstream.");
                    var u = !1;
                    for (var l in t.audioMixing.sounds) {
                        if (t.audioMixing.sounds[l].state !== t.audioMixing.states.IDLE) {
                            u = !0;
                            break
                        }
                    }
                    if (t.audioMixing.audioContextInited && u) return d("The device cannot be switched when using audio Mixing.");
                    ie.getDeviceById(n, function () {
                        if ("video" === e) t._switchVideoDevice(n, c, d); else {
                            if ("audio" !== e) return d("Invalid type.");
                            t._switchAudioDevice(n, c, d)
                        }
                    }, function () {
                        return d("The device does not exist.")
                    })
                }, t
            }, Ae = n(15), Ce = ["live", "rtc", "web", "interop", "h264_interop", "web-only"], Oe = ["vp8", "h264"],
            Ne = ["aes-128-xts", "aes-256-xts", "aes-128-ecb"], we = n(16), De = n.n(we), ke = function (e) {
                e && e.apply(this, [].slice.call(arguments, 1))
            }, Le = n(7), Me = function (e) {
                var t = s(e);
                t.needReconnect = !0, t.isTimeout = !1, t.isInit = !0, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), t.lastMsgTime = null, t.clientId = e.clientId, t.hostIndex = 0, t.requestID = 0, e.host instanceof Array ? t.host = e.host : t.host = [e.host], t.getSendBytes = function () {
                    return t.sendbytes
                }, t.getRecvBytes = function () {
                    return t.recvbytes
                }, t.getDuration = function () {
                    return Math.ceil((Date.now() - t.startTime) / 1e3)
                }, t.getURL = function () {
                    return t.connection.url
                }, t.reconnect = function () {
                    t.isInit = !0, t.creatConnection()
                }, t.connectNext = function () {
                    t.isInit = !0, ++t.hostIndex, r.default.debug("[" + t.clientId + "] Gateway length:" + t.host.length + " current index:" + t.hostIndex), t.hostIndex >= t.host.length ? t.dispatchEvent(l({type: "recover"})) : t.creatConnection()
                }, t.replaceHost = function (e) {
                    t.host = e || t.host, t.hostIndex = 0, t.creatConnection()
                }, t.creatConnection = function () {
                    if (t.needReconnect = !0, r.default.debug("[" + t.clientId + "] start connect:" + t.host[t.hostIndex]), t.lts = (new Date).getTime(), t.connection = new WebSocket("wss://" + t.host[t.hostIndex]), t.connection.binaryType = "arraybuffer", t.turnConfig = {}, t.connection.url) {
                        var n = t.connection.url.match(/wss\:\/\/([^:]+):(\d+)/);
                        if (n) t.turnConfig.url = n[1], Object(a.getParameter)("TURN_ENABLE_TCP") && (t.turnConfig.tcpport = parseInt(n[2]) + 30), Object(a.getParameter)("TURN_ENABLE_UDP") && (t.turnConfig.udpport = parseInt(n[2]) + 30); else {
                            var i = t.host[t.hostIndex].split(":");
                            t.turnConfig.url = i[0], Object(a.getParameter)("TURN_ENABLE_TCP") && (t.turnConfig.tcpport = parseInt(i[1]) + 30), Object(a.getParameter)("TURN_ENABLE_UDP") && (t.turnConfig.udpport = parseInt(i[1]) + 30)
                        }
                    }
                    t.connection.onopen = function (e) {
                        r.default.debug("[" + t.clientId + "] websockect opened: " + t.host[t.hostIndex]), t.needReconnect = !0, t.isTimeout = !1, t.isInit = !1, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), Object(Le.d)(), clearTimeout(t.timeoutCheck), t.dispatchEvent(l({
                            type: "onopen",
                            event: e,
                            socket: t
                        }))
                    }, t.connection.onmessage = function (e) {
                        if (e.data instanceof ArrayBuffer) t.dispatchEvent({type: "onBinaryData", data: e.data}); else {
                            t.recvbytes += Object(te.d)(e.data);
                            var n = JSON.parse(e.data);
                            t.lastMsgTime = Date.now(), n.hasOwnProperty("_id") ? t.dispatchEvent(l({
                                type: n._id,
                                msg: n
                            })) : n.hasOwnProperty("_type") && t.dispatchSocketEvent(l({type: n._type, msg: n._message}))
                        }
                    }, t.connection.onclose = function (n) {
                        t.needReconnect ? t.isTimeout || t.isInit ? (r.default.debug("[" + t.clientId + "] websockect connect timeout"), o.b.joinGateway(e.sid, {
                            lts: t.lts,
                            succ: !1,
                            ec: "timeout",
                            addr: t.connection.url
                        }), t.connectNext()) : t.dispatchEvent(l({
                            type: "disconnect",
                            event: n
                        })) : (r.default.debug("[" + t.clientId + "] websockect closeed"), ke(e.onFailure, n), clearTimeout(t.timeoutCheck), t.dispatchEvent(l({
                            type: "close",
                            event: n
                        })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0)
                    }, t.connection.onerror = function (e) {
                    }, setTimeout(function () {
                        t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close())
                    }, 5e3)
                }, t.creatConnection(), t.sendMessage = function (e, n) {
                    if (t.connection && t.connection.readyState == WebSocket.OPEN) {
                        var i = JSON.stringify(e);
                        t.sendbytes += Object(te.d)(i), t.connection.send(i)
                    } else n({error: "Gateway not connected"})
                }, t.disconnect = function () {
                    t.needReconnect = !0, t.connection.close()
                }, t.close = function () {
                    t.needReconnect = !1, t.connection.onclose = void 0, t.connection.close()
                }, t.sendSignalCommand = function (e, n) {
                    e._id = "_request_" + t.requestID, t.requestID += 1, "publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id, function (i) {
                        i.msg && n && n(i.msg._result, i.msg.message), delete t.dispatcher.eventListeners[e._id]
                    }), t.sendMessage(e, function (e) {
                        e.reason = "NOT_CONNECTED", n && n(e.reason, e)
                    })
                }, t.requests = [];
                var n = function (e) {
                    var n = t.requests.findIndex(function (t) {
                        return t.id === e.type
                    });
                    if (n >= 0) var i = t.requests.splice(n, 1)[0];
                    i && t.dispatcher.eventListeners[e.type] ? (delete t.dispatcher.eventListeners[e.type], e.msg && i.callback && i.callback(e.msg._result, e.msg._message)) : r.default.warning("Detached Response", e.type, e.msg)
                };
                return t.sendRequest = function (e, i) {
                    e = S()({_id: "_request_" + t.requestID}, e), t.requestID += 1;
                    var a = {id: e._id, timeoutCounter: 0, stalledAt: Date.now(), message: e, callback: i};
                    t.requests.push(a), t.addEventListener(e._id, n), t.sendMessage(e, function (e) {
                        var n = this, i = t.requests.findIndex(function (e) {
                            return e.id === n.id
                        });
                        i >= 0 && (n = t.requests.splice(i, 1)[0]), n && t.dispatcher.eventListeners[e.type] ? (delete t.dispatcher.eventListeners[e.type], e.reason = "NOT_CONNECTED", n.callback && n.callback(e.reason, e)) : r.default.warning("handleSendError", n)
                    }.bind(a))
                }, t.checkRequestTimeout = function () {
                    for (var e = Math.ceil(Object(a.getParameter)("SIGNAL_REQUEST_TIMEOUT") / Object(a.getParameter)("SIGNAL_REQUEST_WATCH_INTERVAL")), n = t.requests.length - 1; n >= 0; n--) {
                        var i = t.requests[n];
                        i.timeoutCounter >= e ? (t.requests.splice(n, 1), r.default.error("Request Timeout", i.timeoutCounter, i.message), i.callback && i.callback("TIMEOUT")) : i.timeoutCounter++
                    }
                }, clearInterval(t.requestTimer), t.requestTimer = setInterval(t.checkRequestTimeout, Object(a.getParameter)("SIGNAL_REQUEST_WATCH_INTERVAL")), t.sendReport = function (e) {
                    t.sendMessage(e, function () {
                    })
                }, t
            }, Pe = function (e, t) {
                var n = {
                    connect: function () {
                        t.host = e, n.signal = Me(t), n.on = n.signal.on, n.dispatchEvent = n.signal.dispatchEvent, n.signal.on("onopen", function (e) {
                            n.signal.onEvent = function (e) {
                                n.dispatchEvent(l({type: e.event, msg: e}))
                            }, n.dispatchEvent(l({type: "connect", msg: e}))
                        }), n.signal.on("onError", function (e) {
                            var t = e.msg;
                            onError(t.code, "error")
                        })
                    }, getLastMsgTime: function () {
                        return n.signal && n.signal.lastMsgTime
                    }, getSendBytes: function () {
                        return n.signal.getSendBytes()
                    }, getRecvBytes: function () {
                        return n.signal.getRecvBytes()
                    }, getDuration: function () {
                        return n.signal.getDuration()
                    }, disconnect: function () {
                        n.signal.disconnect()
                    }, close: function () {
                        n.signal.close()
                    }, getURL: function () {
                        return n.signal.getURL()
                    }, reconnect: function () {
                        n.signal.reconnect()
                    }, connectNext: function () {
                        n.signal.connectNext()
                    }, replaceHost: function (e) {
                        n.signal.replaceHost(e)
                    }, emitSimpleMessage: function (e, t) {
                        n.signal.sendSignalCommand(e, t)
                    }, emitRequest: function (e, t) {
                        n.signal.sendRequest(e, t)
                    }, emitReport: function (e) {
                        n.signal.sendReport(e)
                    }
                };
                return n.connect(), n
            }, xe = n(5), Ue = n.n(xe), Ve = n(9), Fe = n.n(Ve), je = function (e, t) {
                var n = !1, i = 0, s = {
                    command: "convergeAllocateEdge",
                    sid: e.sid,
                    appId: e.appId,
                    token: e.token,
                    uid: e.uid,
                    cname: e.cname,
                    ts: Math.floor(Date.now() / 1e3),
                    version: a.VERSION,
                    seq: 0,
                    requestId: 1
                };
                Object(a.getParameter)("PROXY_CS").map(function (c) {
                    var d = (new Date).getTime();
                    Be("https://" + c + "/api/v1", s, function (s, u) {
                        if (s) return r.default.debug("[" + e.clientId + "] Request proxy server failed: ", s), i++, o.b.requestProxyAppCenter(e.sid, {
                            lts: d,
                            succ: !1,
                            APAddr: c,
                            workerManagerList: null,
                            ec: JSON.stringify(s),
                            response: JSON.stringify({err: s, res: u})
                        }), void (i >= Object(a.getParameter)("PROXY_CS").length && t && t("Get proxy server failed: request all failed"));
                        if (!n) if ((u = JSON.parse(u)).json_body) {
                            var l = JSON.parse(u.json_body);
                            if (r.default.debug("[" + e.clientId + "] App return:", l.servers), 200 !== l.code) {
                                s = "Get proxy server failed: response code [" + l.code + "], reason [ " + l.reason + "]";
                                r.default.debug("[" + e.clientId + "] " + s), o.b.requestProxyAppCenter(e.sid, {
                                    lts: d,
                                    succ: !1,
                                    APAddr: c,
                                    workerManagerList: null,
                                    ec: s,
                                    response: JSON.stringify({err: s, res: u})
                                })
                            } else {
                                n = !0;
                                var p = He(l.servers);
                                o.b.requestProxyAppCenter(e.sid, {
                                    lts: d,
                                    succ: !0,
                                    APAddr: c,
                                    workerManagerList: JSON.stringify(p),
                                    ec: null,
                                    response: JSON.stringify({res: u})
                                }), t && t(null, p)
                            }
                        } else r.default.debug("[" + e.clientId + "] Get proxy server failed: no json_body"), o.b.requestProxyAppCenter(e.sid, {
                            lts: d,
                            succ: !1,
                            APAddr: c,
                            workerManagerList: null,
                            ec: "Get proxy server failed: no json_body",
                            response: JSON.stringify({res: u})
                        })
                    })
                })
            }, Be = function (e, t, n) {
                var i = {service_name: "webrtc_proxy", json_body: JSON.stringify(t)};
                Object(Le.c)(e, i, function (e) {
                    n && n(null, e)
                }, function (e) {
                    n && n(e)
                }, {"X-Packet-Service-Type": 0, "X-Packet-URI": 61})
            }, We = function (e, t, n) {
                var i = !1, a = 0, s = {
                    command: "request",
                    gatewayType: "http",
                    appId: e.appId,
                    cname: e.cname,
                    uid: e.uid + "",
                    sdkVersion: "2.3.1",
                    sid: e.sid,
                    seq: 1,
                    ts: +new Date,
                    requestId: 3,
                    clientRequest: {appId: e.appId, cname: e.cname, uid: e.uid + "", sid: e.sid}
                };
                t.map(function (c) {
                    var d = (new Date).getTime();
                    !function (e, t, n) {
                        Object(Le.c)(e, t, function (e) {
                            n && n(null, e)
                        }, function (e) {
                            n && n(e)
                        })
                    }("https://" + c + ":4000/v2/machine", s, function (s, u) {
                        if (s) return r.default.debug("[" + e.clientId + "] Request worker manager failed: ", s), a++, o.b.requestProxyWorkerManager(e.sid, {
                            lts: d,
                            succ: !1,
                            workerManagerAddr: c,
                            ec: JSON.stringify(s),
                            response: JSON.stringify({res: u})
                        }), void (a >= t.length && n && n("requeet worker manager server failed: request failed"));
                        if (!i) {
                            if (!(u = JSON.parse(u)).serverResponse) return n && n("requeet worker manager server failed: serverResponse is undefined");
                            i = !0, o.b.requestProxyWorkerManager(e.sid, {
                                lts: d,
                                succ: !0,
                                workerManagerAddr: c,
                                ec: JSON.stringify(s),
                                response: JSON.stringify({res: u})
                            }), n && n(null, {address: c, serverResponse: u.serverResponse})
                        }
                    })
                })
            }, He = function (e) {
                if (!e || [] instanceof Array == !1) return [];
                var t = [];
                return e.forEach(function (e) {
                    var n;
                    e.address && e.tcp ? (e.address.match(/^[\.\:\d]+$/) ? n = "".concat(e.address.replace(/[^\d]/g, "-"), ".edge.agora.io") : (r.default.info("[" + joinInfo.clientId + "] " + "Cannot recognized as IP address ".concat(e.address, ". Used As Host instead")), n = "".concat(e.address, ":").concat(e.tcp)), t.push(n)) : r.default.error("[" + joinInfo.clientId + "] Invalid address format ", e)
                }), t
            }, Ge = function (e, t) {
                var n = S()({}, e), i = Object(a.getParameter)("CDS_AP"), r = [], o = !1;
                (i = i.map(function (e) {
                    return n.proxyServer ? "https://".concat(n.proxyServer, "/ap/?url=").concat(e + "/api/v1") : "https://".concat(e, "/api/v1?action=config")
                })).map(function (e) {
                    !function (e, t, n) {
                        var i = {flag: 64, cipher_method: 0, timeout: 1e3, features: t};
                        Object(Le.c)(e, i, function (e) {
                            try {
                                var t = JSON.parse(e);
                                n && n(null, t)
                            } catch (e) {
                                n && n(e)
                            }
                            n && n(null, e)
                        }, function (e) {
                            n && n(e)
                        }, {"X-Packet-Service-Type": 0, "X-Packet-URI": 54})
                    }(e, n, function (e, n) {
                        o || (e ? (r.push(e), r.length >= i.length && t && t("ALL_REQUEST_FAILED")) : (o = !0, t && t(null, n)))
                    })
                })
            }, qe = {}, Je = {}, Ye = function (e, t, n, i) {
                var a = (new Date).getTime(), s = t, c = "";
                t.multiIP && t.multiIP.gateway_ip && (c = {
                    vocs_ip: [t.multiIP.uni_lbs_ip],
                    vos_ip: [t.multiIP.gateway_ip]
                });
                var d = {
                    opid: 133,
                    flag: 4096,
                    ts: +new Date,
                    key: t.token,
                    cname: t.cname,
                    sid: t.sid,
                    detail: {},
                    uid: t.uid || 0
                };
                c && (d.detail[5] = JSON.stringify(c)), Object(Le.c)(e + "".concat(-1 === e.indexOf("?") ? "?" : "&", "action=wrtc_gateway"), d, function (c) {
                    try {
                        var d = JSON.parse(c);
                        d.res && (d = d.res);
                        var u = d.code
                    } catch (e) {
                        var l = "requestChooseServer failed with unexpected body " + c;
                        return r.default.error("[" + s.clientId + "]", l), i(l)
                    }
                    if (u) {
                        var p = _[d.code] || u;
                        return o.b.joinChooseServer(t.sid, {
                            lts: a,
                            succ: !1,
                            csAddr: e,
                            serverList: null,
                            ec: p
                        }), i("Get server node failed [" + p + "]", e, p)
                    }
                    var f = [], m = [".agora.io", ".agoraio.cn"], g = 0;
                    if (e.indexOf(m[1]) > -1 && (g = 1), d.addresses.forEach(function (e) {
                        var t;
                        e.ip && e.port ? (e.ip.match(/^[\.\:\d]+$/) ? t = "".concat(e.ip.replace(/[^\d]/g, "-"), ".edge").concat(m[g++ % m.length], ":").concat(e.port) : (r.default.info("[" + s.clientId + "] " + "Cannot recognized as IP address ".concat(e.ip, ". Used As Host instead")), t = "".concat(e.ip, ":").concat(e.port)), f.push(t)) : r.default.error("[" + s.clientId + "] Invalid address format ", e)
                    }), !f.length) {
                        r.default.error("[" + s.clientId + "] Empty Address response", d);
                        p = "EMPTY_ADDRESS_RESPONSE";
                        return o.b.joinChooseServer(t.sid, {
                            lts: a,
                            succ: !1,
                            csAddr: e,
                            serverList: null,
                            ec: p
                        }), i("Get server node failed [" + p + "]", e, p)
                    }
                    var v = {
                        gateway_addr: f,
                        uid: d.uid,
                        cid: d.cid,
                        vid: d.detail && d.detail[8],
                        res: d,
                        uni_lbs_ip: d.detail
                    };
                    return n(v, e)
                }, function (e, n) {
                    "timeout" === e.type ? (o.b.joinChooseServer(t.sid, {
                        lts: a,
                        succ: !1,
                        csAddr: n,
                        serverList: null,
                        ec: "timeout"
                    }), i("Connect choose server timeout", n)) : o.b.joinChooseServer(t.sid, {
                        lts: a,
                        succ: !1,
                        csAddr: n,
                        serverList: null,
                        ec: "server_wrong"
                    })
                }, {"X-Packet-Service-Type": 0, "X-Packet-URI": 69})
            }, ze = function (e, t, n) {
                var i = !1, s = null, c = 1, d = 1, u = null, l = e.clientId, p = function t(n, d) {
                    if (!i) {
                        var p = !1, m = !1, g = [], v = f.getBrowserInfo() || {};
                        Ge({
                            device: v.name,
                            system: v.os,
                            vendor: e.appId,
                            version: a.VERSION,
                            cname: e.cname,
                            sid: e.sid,
                            session_id: Object(o.a)(),
                            detail: "",
                            proxyServer: n
                        }, function (t, n) {
                            m = !0;
                            try {
                                var i = Object.keys(n.test_tags)[0], a = JSON.parse(n.test_tags[i]);
                                u = a[1]
                            } catch (e) {
                                u = null
                            }
                            o.b.reportApiInvoke(e.sid, {
                                name: "_config-distribute-request",
                                options: {err: t, res: n}
                            })(), Je[l] !== ot.DISCONNECTED && Je[l] !== ot.DISCONNECTING ? p && d && d(g, u) : r.default.debug("[".concat(e.clientId, "] Request config success when connection state is ").concat(Je[l]))
                        }), function (e, t, n) {
                            for (var i = (new Date).getTime(), s = !1, c = !0, d = function (n, a) {
                                if (s) o.b.joinChooseServer(e.sid, {
                                    lts: i,
                                    succ: !0,
                                    csAddr: a,
                                    serverList: n.gateway_addr,
                                    cid: n.cid + "",
                                    uid: n.uid + "",
                                    ec: null
                                }, !1); else {
                                    if (clearTimeout(g), s = !0, r.default.debug("[" + e.clientId + "] Get gateway address:", n.gateway_addr), e.proxyServer) {
                                        for (var c = n.gateway_addr, d = 0; d < c.length; d++) {
                                            var u = c[d].split(":");
                                            n.gateway_addr[d] = e.proxyServer + "/ws/?h=" + u[0] + "&p=" + u[1]
                                        }
                                        r.default.debug("[" + e.clientId + "] Get gateway address:", n.gateway_addr)
                                    }
                                    t(n), o.b.joinChooseServer(e.sid, {
                                        lts: i,
                                        succ: !0,
                                        csAddr: a,
                                        serverList: n.gateway_addr,
                                        cid: n.cid + "",
                                        uid: n.uid + "",
                                        ec: null
                                    }, !0)
                                }
                            }, u = function (t, i, a) {
                                c && (r.default.error("[" + e.clientId + "]", t, i, a), a && -1 === b.indexOf(a) && (c = !1, n(a)))
                            }, l = Object(a.getParameter)("WEBCS_DOMAIN"), p = 0; p < l.length; ++p) {
                                var f;
                                if ("string" == typeof l[p]) {
                                    var m = l[p];
                                    f = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(m + "/api/v1") : "https://".concat(m, "/api/v1"), r.default.debug("[" + e.clientId + "] " + "Connect to choose_server: ".concat(f)), Ye(f, e, d, u)
                                } else r.default.error("[" + e.clientId + "] Invalid Host", l[p])
                            }
                            var g = setTimeout(function () {
                                if (!s) for (var t = Object(a.getParameter)("WEBCS_DOMAIN_BACKUP_LIST"), n = 0; n < t.length; ++n) if ("string" == typeof t[n]) {
                                    var i = t[n];
                                    f = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(i + "/api/v1") : "https://".concat(i, "/api/v1"), r.default.debug("[" + e.clientId + "] " + "Connect to backup_choose_server: ".concat(f)), Ye(f, e, d, u)
                                } else r.default.error("[" + e.clientId + "] Invalid Host", t[n])
                            }, 1e3);
                            setTimeout(function () {
                                !s && c && n()
                            }, Object(a.getParameter)("WEBCS_BACKUP_CONNECT_TIMEOUT"))
                        }(e, function (t) {
                            i = !0, p = !0, g = t, clearTimeout(s), Je[l] !== ot.DISCONNECTED && Je[l] !== ot.DISCONNECTING ? m && d && d(g, u) : r.default.debug("[".concat(e.clientId, "] Request gateway list success when connection state is ").concat(Je[l]))
                        }, function (i) {
                            i ? r.default.info("[" + e.clientId + "] Join failed: " + i) : Je[l] !== ot.DISCONNECTED && Je[l] !== ot.DISCONNECTING ? (r.default.debug("[" + e.clientId + "] Request gateway list will be restart in " + c + "s"), s = setTimeout(function () {
                                t(n, d)
                            }, 1e3 * c), qe[l] = s, c = c >= 3600 ? 3600 : 2 * c) : r.default.debug("[".concat(e.clientId, "] Request gateway list falied when connection state is ").concat(Je[l]))
                        })
                    }
                };
                e.useProxyServer ? function n() {
                    !function (e, t) {
                        je(e, function (n, i) {
                            if (n) return t && t(n);
                            r.default.debug("[" + e.clientId + "] getProxyServerList: ", i), We(e, i, t)
                        })
                    }(e, function (i, a) {
                        if (i) return r.default.debug("[" + e.clientId + "]", i), r.default.debug("[" + e.clientId + "] Request proxy will be restart in " + d + "s"), s = setTimeout(function () {
                            n()
                        }, 1e3 * d), qe[l] = s, void (d = d >= 3600 ? 3600 : 2 * d);
                        clearTimeout(s);
                        var c = a.address;
                        e.proxyServer = c, e.turnServer = {
                            mode: "manual",
                            url: a.address,
                            tcpport: a.serverResponse.tcpport || "3433",
                            udpport: a.serverResponse.udpport || "3478",
                            username: a.serverResponse.username || "test",
                            credential: a.serverResponse.password || "111111",
                            forceturn: !0
                        }, e.turnServer.tcpport += "", e.turnServer.udpport += "", o.b.setProxyServer(c), r.default.setProxyServer(c), p(c, t)
                    })
                }() : p(null, t)
            }, Ke = function (e, t, n, i) {
                var a = Date.now();
                i = i || t.stringUid;
                var s = {sid: t.sid, opid: 10, appid: t.appId, string_uid: i};
                return new Promise(function (c, d) {
                    Object(Le.c)(e + "".concat(-1 === e.indexOf("?") ? "?" : "&", "action=stringuid"), s, function (u) {
                        try {
                            var l = JSON.parse(u), p = l.code
                        } catch (c) {
                            var f = "requestUserAccount failed with unexpected body " + u;
                            return r.default.error("[" + t.clientId + "]", f), d({
                                retryable: !0,
                                info: f,
                                url: e
                            }), n && n.dispatchEvent({
                                type: "error",
                                reason: "USER_ACCOUNT_BODY_NOT_JSON"
                            }), void o.b.reqUserAccount(s.sid, {
                                lts: a,
                                success: !1,
                                serverAddress: e,
                                stringUid: i,
                                uid: null,
                                extend: u,
                                errorCode: "USER_ACCOUNT_BODY_NOT_JSON"
                            })
                        }
                        if (p) {
                            var m = E[l.code % 1e4] || "REQ_ACCOUNT_ERR_".concat(p);
                            return n && n.dispatchEvent({type: "error", reason: m}), o.b.reqUserAccount(s.sid, {
                                lts: a,
                                success: !1,
                                serverAddress: e,
                                stringUid: i,
                                uid: null,
                                errorCode: m,
                                extend: s
                            }), d({retryable: !1, info: f = "Get String Uid Failed [" + m + "]", url: e, error: m})
                        }
                        var g = l.uid;
                        if (!(g > 0 && g < Math.pow(2, 32))) {
                            r.default.error("[" + t.clientId + "] " + "Invalid Uint Uid ".concat(i, " => ").concat(g), l);
                            m = "INVALID_UINT_UID_".concat(g);
                            return n && n.dispatchEvent({type: "error", reason: m}), o.b.reqUserAccount(s.sid, {
                                lts: a,
                                success: !1,
                                serverAddress: e,
                                stringUid: i,
                                uid: null,
                                errorCode: m,
                                extend: s
                            }), d({retryable: !0, error: m, info: "Get String Uid failed [" + m + "]", url: e})
                        }
                        c({uid: g, url: e}), o.b.reqUserAccount(s.sid, {
                            lts: a,
                            success: !0,
                            serverAddress: e,
                            stringUid: i,
                            uid: g,
                            errorCode: null,
                            extend: s
                        })
                    }, function (e, t) {
                        if ("timeout" === e.type) {
                            var r = "USER_ACCOUNT_TIMEOUT";
                            n && n.dispatchEvent({type: "error", reason: r}), o.b.reqUserAccount(s.sid, {
                                lts: a,
                                success: !1,
                                serverAddress: t,
                                stringUid: i,
                                uid: null,
                                errorCode: r,
                                extend: s
                            }), d({retryable: !0, info: r, url: t})
                        } else {
                            var c = "USER_ACCOUNT_SERVER_WRONG_".concat(e.type);
                            n && n.dispatchEvent({type: "error", reason: c}), o.b.reqUserAccount(s.sid, {
                                lts: a,
                                success: !1,
                                serverAddress: t,
                                stringUid: i,
                                uid: null,
                                errorCode: c,
                                extend: s
                            }), d({retryable: !0, info: c, url: t})
                        }
                    }, {"X-Packet-Service-Type": 0, "X-Packet-URI": 72})
                })
            }, Xe = function (e, t, n) {
                Date.now();
                var o, s = Object(a.getParameter)("ACCOUNT_REGISTER"), c = !1,
                    d = Object(a.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT"), u = null, l = null,
                    p = new Promise(function () {
                        var p = Fe()(Ue.a.mark(function p(f, m) {
                            var g, v, S;
                            return Ue.a.wrap(function (p) {
                                for (; ;) switch (p.prev = p.next) {
                                    case 0:
                                        u = f, l = m, o = 0;
                                    case 3:
                                        if (!(o < Object(a.getParameter)("ACCOUNT_REGISTER_RETRY_COUNT_MAX"))) {
                                            p.next = 33;
                                            break
                                        }
                                        if (!c) {
                                            p.next = 6;
                                            break
                                        }
                                        return p.abrupt("return");
                                    case 6:
                                        return g = s[o % s.length], v = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(s[i] + "/api/v1") : "https://".concat(g, "/api/v1"), p.prev = 8, p.delegateYield(Ue.a.mark(function i() {
                                            var a;
                                            return Ue.a.wrap(function (i) {
                                                for (; ;) switch (i.prev = i.next) {
                                                    case 0:
                                                        return i.next = 2, Ke(v, e, t, n);
                                                    case 2:
                                                        if (a = i.sent, !c) {
                                                            i.next = 5;
                                                            break
                                                        }
                                                        return i.abrupt("return", {v: void 0});
                                                    case 5:
                                                        c = !0, setTimeout(function () {
                                                            r.default.debug("Get UserAccount Successfully", a), u(a)
                                                        }, 0);
                                                    case 7:
                                                    case"end":
                                                        return i.stop()
                                                }
                                            }, i, this)
                                        })(), "t0", 10);
                                    case 10:
                                        if (S = p.t0, "object" !== re()(S)) {
                                            p.next = 13;
                                            break
                                        }
                                        return p.abrupt("return", S.v);
                                    case 13:
                                        p.next = 30;
                                        break;
                                    case 15:
                                        if (p.prev = 15, p.t1 = p.catch(8), !c) {
                                            p.next = 19;
                                            break
                                        }
                                        return p.abrupt("return");
                                    case 19:
                                        if (!p.t1.retryable) {
                                            p.next = 27;
                                            break
                                        }
                                        return (d = Math.ceil(d * Object(a.getParameter)("ACCOUNT_REGISTER_RETRY_RATIO"))) > Object(a.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX") && (d = Object(a.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX")), r.default.error("".concat(p.t1.info, " ").concat(p.t1.url, " Will Fetch User Account in ").concat(d / 1e3, " seconds")), p.next = 25, new Promise(function (e) {
                                            setTimeout(e, d)
                                        });
                                    case 25:
                                        p.next = 30;
                                        break;
                                    case 27:
                                        r.default.error("Get UserAccount Error: ".concat(p.t1.info, " ").concat(p.t1.url), p.t1.error), c = !0, l(p.t1);
                                    case 30:
                                        o++, p.next = 3;
                                        break;
                                    case 33:
                                    case"end":
                                        return p.stop()
                                }
                            }, p, this, [[8, 15]])
                        }));
                        return function (e, t) {
                            return p.apply(this, arguments)
                        }
                    }());
                return p.cancel = function () {
                    c || (c = !0, l({info: "Request Cancelled", retryable: !1}))
                }, p.isFinished = function () {
                    return c
                }, p
            }, Qe = {
                ERR_NO_VOCS_AVAILABLE: "tryNext",
                ERR_NO_VOS_AVAILABLE: "tryNext",
                ERR_JOIN_CHANNEL_TIMEOUT: "tryNext",
                WARN_REPEAT_JOIN: "quit",
                ERR_JOIN_BY_MULTI_IP: "recover",
                WARN_LOOKUP_CHANNEL_TIMEOUT: "tryNext",
                WARN_OPEN_CHANNEL_TIMEOUT: "tryNext",
                ERR_VOM_SERVICE_UNAVAILABLE: "tryNext",
                ERR_TOO_MANY_USERS: "tryNext",
                ERR_MASTER_VOCS_UNAVAILABLE: "tryNext",
                ERR_INTERNAL_ERROR: "tryNext",
                K_SERVICE_NOT_READY: "recover",
                notification_test_recover: "recover",
                notification_test_tryNext: "tryNext",
                notification_test_retry: "retry"
            }, $e = {
                googActualEncBitrate: "A_aeb",
                googAvailableSendBandwidth: "A_asb",
                googRetransmitBitrate: "A_rb",
                googAvailableReceiveBandwidth: "A_arb",
                googTargetEncBitrate: "A_teb",
                googBucketDelay: "A_bd",
                googTransmitBitrate: "A_tb",
                googCodecName: "A_cn",
                bytesSent: "bytesSent",
                packetsLost: "packetsLost",
                packetsSent: "packetsSent",
                googAdaptationChanges: "A_ac",
                googAvgEncodeMs: "A_aem",
                googEncodeUsagePercent: "A_eup",
                googFirsReceived: "A_fr",
                googFrameHeightInput: "A_fhi",
                googFrameHeightSent: "A_fhs",
                googFrameRateInput: "A_fri",
                googFrameRateSent: "A_frs",
                googFrameWidthInput: "A_fwi",
                googFrameWidthSent: "A_fws",
                googNacksReceived: "A_nr",
                googPlisReceived: "A_pr",
                googRtt: "A_rtt",
                aecDivergentFilterFraction: "A_adff",
                audioInputLevel: "A_ail",
                googEchoCancellationReturnLoss: "A_ecrl",
                googEchoCancellationReturnLossEnhancement: "A_ecrle",
                googResidualEchoLikelihood: "A_rel",
                googResidualEchoLikelihoodRecentMax: "A_relrm",
                googTargetDelayMs: "A_tdm",
                bytesReceived: "bytesReceived",
                packetsReceived: "packetsReceived",
                googDecodeMs: "A_dm",
                googMaxDecodeMs: "A_mdm",
                googRenderDelayMs: "A_rdm",
                googFrameWidthReceived: "A_fwr",
                googFrameHeightReceived: "A_fhr",
                googFrameRateReceived: "A_frr",
                googFrameRateDecoded: "A_frd",
                googFrameRateOutput: "A_fro",
                googJitterBufferMs: "A_jbm",
                googCurrentDelayMs: "A_cdm",
                googMinPlayoutDelayMs: "A_mpdm",
                googNacksSent: "A_ns",
                googPlisSent: "A_ps",
                googFirsSent: "A_fs",
                audioOutputLevel: "A_aol",
                googAccelerateRate: "A_ar",
                googDecodingCNG: "A_dcng",
                googDecodingCTN: "A_dctn",
                googDecodingCTSG: "A_dctsg",
                googDecodingNormal: "A_dn",
                googDecodingPLC: "A_dplc",
                googDecodingPLCCNG: "A_dplccng",
                googExpandRate: "A_er",
                googJitterReceived: "A_jr",
                googPreemptiveExpandRate: "A_per",
                googPreferredJitterBufferMs: "A_pjbm",
                googSecondaryDecodedRate: "A_sdr",
                googSpeechExpandRate: "A_ser",
                uplink_fraction_lost: "B_ufl",
                uplink_cumulative_lost: "B_ucl",
                uplink_available_bandwidth: "B_uab",
                access_delay: "B_acd",
                uplink_network_quality: "B_unq",
                downlink_network_quality: "B_dnq",
                pub_audio_lost_ratio_400ms: "B_palr4",
                pub_video_lost_ratio_400ms: "B_pvlr4",
                e2e_delay: "B_ed",
                audio_delay: "B_ad",
                video_delay: "B_vd",
                stream_type: "B_st",
                e2e_audio_lost_ratio_400ms: "B_ealr4",
                e2e_video_lost_ratio_400ms: "B_evlr4",
                downlink_estimate_bandwidth: "B_deb"
            }, Ze = {};
        for (var et in $e) {
            var tt = $e[et];
            Ze[tt] && console.error("Key Conflict: ".concat(tt, ": ").concat($e[tt], "| ").concat(et)), Ze[tt] = et
        }
        var nt = function (e) {
            return $e[e] || e
        }, it = function (e) {
            return Ze[e] || e
        };
        var at = function e(t) {
            var n = !1, i = function (e) {
                return {_type: "control", _message: e}
            }, c = function (e, t) {
                var n = {};
                return Object.keys(t).forEach(function (e) {
                    Object(a.getParameter)("STATS_FILTER")[e] || (n[nt(e)] = t[e])
                }), {_type: "subscribe_related_stats", _message: {stream_type: "high", stream_id: e, stats: n}}
            }, m = function (e) {
                return {_type: "publish", _message: e}
            }, g = function (e, t) {
                var n = {};
                return Object.keys(t).forEach(function (e) {
                    Object(a.getParameter)("STATS_FILTER")[e] || (n[nt(e)] = t[e])
                }), {_type: "subscribe_stats", _message: {stream_id: e, stats: n}}
            }, v = e.DISCONNECTED, I = e.CONNECTING, h = e.CONNECTED, _ = e.DISCONNECTING, E = v, b = s(t);
            Object.defineProperty(b, "state", {
                set: function (t) {
                    var n = E;
                    E = t, function (e, t) {
                        Je[e] = t
                    }(b.clientId, t), n !== t && b.dispatchEvent({
                        type: "connection-state-change",
                        prevState: e.connetionStateMap[n],
                        curState: e.connetionStateMap[t]
                    })
                }, get: function () {
                    return E
                }
            }), b.socket = void 0, b.state = v, b.mode = t.mode, b.role = t.role, b.codec = t.codec, b.config = {}, b.timers = {}, b.timer_counter = {}, b.localStreams = {}, b.remoteStreams = {}, b.remoteMuteState = {}, b.attemps = 1, b.p2p_attemps = 1, b.audioLevel = {}, b.activeSpeaker = void 0, b.reconnectMode = "retry", b.rejoinAttempt = 0, b.hasChangeBGPAddress = !1, b.traffic_stats = {}, b.clientId = t.clientId, b.pingpongCounter = 0, b.hasInvokeLeave = !1, b.p2ps = new Map, b.liveStreams = new Map, b.injectLiveStreams = new Map, b.remoteStreamsInChannel = new Set, function (e) {
                var t = ke;
                e.makeRequest = function (n, i, a) {
                    if (void 0 === e.socket) return r.default.error("[".concat(e.clientId, "] No socket available")), void t(a, x.INVALID_OPERATION);
                    try {
                        e.socket.emitRequest(n, function (e, t) {
                            var n;
                            "success" === e ? "function" == typeof i && i(t) : "function" == typeof a && (n = t && t.error_code && y[t.error_code] ? y[t.error_code] : t && t.error_str ? t.error_str : t && t.error_code ? "UNKNOW_ERROR_".concat(t.error_code) : e, a(n, t))
                        })
                    } catch (i) {
                        r.default.error("[".concat(e.clientId, "] Socket emit message failed ").concat(JSON.stringify(n))), r.default.error("[".concat(e.clientId, "] "), i), t(a, x.SOCKET_ERROR)
                    }
                }, e.makeReport = function (t) {
                    void 0 === e.socket && r.default.error("[".concat(e.clientId, "] No socket available"));
                    try {
                        e.socket.emitReport(t)
                    } catch (n) {
                        r.default.error("[".concat(e.clientId, "] Socket emit report failed ").concat(JSON.stringify(t)))
                    }
                }
            }(b), b.inChannelInfo = {joinAt: null, duration: 0}, b._sendMessage = function (e, t) {
                switch (e) {
                    case"SubscribeStats":
                        sendMessage(g.apply(void 0, De()(t)))
                }
            };
            var T = ke;
            b.p2pCounter = Object(te.f)(1e5), b.generateP2PId = function () {
                return ++b.p2pCounter
            }, b.audioVolumeIndication = {
                enabled: !1,
                sortedAudioVolumes: [],
                smooth: 3,
                interval: 2e3
            }, b.remoteVideoStreamTypes = {
                REMOTE_VIDEO_STREAM_HIGH: 0,
                REMOTE_VIDEO_STREAM_LOW: 1,
                REMOTE_VIDEO_STREAM_MEDIUM: 2
            }, b.streamFallbackTypes = {
                STREAM_FALLBACK_OPTION_DISABLED: 0,
                STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: 1,
                STREAM_FALLBACK_OPTION_AUDIO_ONLY: 2
            }, b.configPublisher = function (e) {
                b.config = e
            }, b.getGatewayInfo = function (e, t) {
                b.makeRequest({_type: "gateway_info"}, e, t)
            }, b.setClientRole = function (e, t) {
                r.default.debug("[".concat(b.clientId, "] setClientRole to ").concat(e));
                var n = o.b.reportApiInvoke(b.joinInfo.sid, {name: "_setClientRole", callback: t});
                b.makeRequest({_type: "set_client_role", _message: {role: e}}, function () {
                    b.role = e, b.dispatchEvent({type: "client-role-changed", role: e}), n && n(null, {role: e})
                }, function (t, i) {
                    if (i && i.code && (t = P[i.code] || "UNKNOW_ERROR_" + i.code), "ERR_ALREADY_IN_USE" === t) return n && n(null);
                    r.default.error("set Client role error to " + e + ": " + t), n && n(t)
                })
            }, b.join = function (e, n, i, s) {
                e.useProxyServer && (b.hasChangeBGPAddress = !0);
                var c = (new Date).getTime(), d = e.uid;
                if (b.inChannelInfo.joinAt && (b.inChannelInfo.duration += c - b.inChannelInfo.joinAt), b.inChannelInfo.joinAt = c, b.state !== I) return r.default.error("[".concat(b.clientId, "] GatewayClient.join Failed: state "), b.state), s && s(x.INVALID_OPERATION), void o.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: x.INVALID_OPERATION,
                    addr: null
                });
                if (null != d && parseInt(d) !== d) return r.default.error("[".concat(b.clientId, "] Input uid is invalid")), b.state = v, s && s(x.INVALID_PARAMETER), void o.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: x.INVALID_PARAMETER,
                    addr: null
                });
                var u = rt.register(b, {uid: d, cname: e && e.cname});
                if (u) return b.state = v, s && s(u), void o.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: u,
                    addr: null
                });
                b.joinInfo = S()({}, e), b.uid = d, b.key = n, b.pingpongCounter = 0, O(e, function (n) {
                    var d, u, p, f;
                    b.state = h, r.default.debug("[".concat(b.clientId, "] Connected to gateway server")), clearInterval(b.pingTimer), b.pingTimer = setInterval(function () {
                        var e = Object(a.getParameter)("PING_PONG_TIME_OUT");
                        if (++b.pingpongCounter >= e) {
                            var t = Date.now();
                            r.default.warning("PINGPONG Timeout. Last Socket Message: ".concat(t - b.socket.getLastMsgTime(), "ms")), b.socket && b.socket.getLastMsgTime() && t - b.socket.getLastMsgTime() > Object(a.getParameter)("WEBSOCKET_TIMEOUT_MIN") && (b.pingpongCounter = 0, b.socket.close(), b.socket.dispatchEvent(l({
                                type: "disconnect",
                                event: {msg: "PING_PONG_TIME_OUT"}
                            })))
                        }
                        var n = Date.now();
                        b.makeRequest({_type: "ping"}, function () {
                            b.pingpongCounter = 0;
                            var e = Date.now() - n;
                            setTimeout(function () {
                                Object(a.getParameter)("REPORT_STATS") && b.makeRequest({
                                    _type: "ping_back",
                                    _message: {pingpongElapse: e}
                                })
                            }, 1e3)
                        }, function (e, t) {
                            "TIMEOUT" !== e && (r.default.error("Ping Error ".concat(e, " ").concat(JSON.stringify(t))), t && t.error_code && b.socket && b.socket.signal && b.socket.signal.connection && b.socket.signal.connection.readyState === WebSocket.OPEN && (r.default.info("Disconnecting websocket connection"), b.socket.signal.connection.close()))
                        })
                    }, 3e3), b.makeRequest((d = {role: b.role}, u = d.role, p = S()({}, b.joinInfo.apResponse), f = {
                        session_id: b.joinInfo.sid,
                        app_id: t.appId,
                        channel_key: b.key,
                        channel_name: b.joinInfo.cname,
                        sdk_version: a.VERSION,
                        browser: navigator.userAgent,
                        process_id: Object(o.a)(),
                        mode: b.mode,
                        codec: b.codec,
                        role: u,
                        has_changed_gateway: Object(a.getParameter)("FORCE_CHANGED_GATEWAY_FLAG") || b.hasChangeBGPAddress,
                        ap_response: p,
                        extend: Object(a.getParameter)("JOIN_EXTEND"),
                        details: {}
                    }, b.joinInfo.hasOwnProperty("stringUid") && (f.string_uid = b.joinInfo.stringUid), b.joinInfo.aesmode && b.joinInfo.aespassword && (f.aes_mode = b.joinInfo.aesmode, f.aes_secret = b.joinInfo.aespassword), b.socket && b.socket.signal && b.socket.signal && (p.addresses[b.socket.signal.hostIndex] && (f.ap_response.ticket = p.addresses[b.socket.signal.hostIndex].ticket, delete p.addresses), b.joinInfo.turnServer && "auto" === b.joinInfo.turnServer.mode && b.socket.signal.turnConfig && (b.joinInfo.turnServer.url = b.socket.signal.turnConfig.url, b.socket.signal.turnConfig.tcpport && (b.joinInfo.turnServer.tcpport = "" + b.socket.signal.turnConfig.tcpport), b.socket.signal.turnConfig.udpport && (b.joinInfo.turnServer.udpport = "" + b.socket.signal.turnConfig.udpport)), r.default.debug("Turn config", b.joinInfo.turnServer)), b.dispatchEvent({
                        type: "join-message-hook",
                        joinMessage: f
                    }), {_type: "join", _message: f}), function (t) {
                        if (o.b.joinGateway(e.sid, {
                            lts: c,
                            succ: !0,
                            ec: null,
                            vid: e.vid,
                            addr: b.socket.getURL()
                        }), b.rejoinAttempt = 0, i && i(t.uid), b.dispatchEvent({type: "join"}), b.leaveOnConnected) {
                            r.default.info("[".concat(b.clientId, "] Calling Leave() once joined"));
                            var n = b.leaveOnConnected;
                            b.leaveOnConnected = null, b.leave(n.onSuccess, n.onFailure)
                        }
                    }, function (t, n) {
                        if (r.default.error("[".concat(b.clientId, "] User join failed [").concat(t, "]")), "ERR_JOIN_BY_MULTI_IP" === t) return b.dispatchEvent({
                            type: "onMultiIP",
                            option: n.option
                        });
                        if (Qe[t] && b.rejoinAttempt < 4) {
                            if (b._doWithAction(Qe[t], i, s), b.leaveOnConnected) {
                                r.default.error("[".concat(b.clientId, "] Calling Leave() once joined: Join Failed"));
                                var a = b.leaveOnConnected;
                                b.leaveOnConnected = null, a.onFailure(x.JOIN_CHANNEL_FAILED)
                            }
                        } else s && s(t);
                        o.b.joinGateway(e.sid, {lts: c, succ: !1, ec: t, addr: b.socket.getURL()})
                    })
                }, function (t) {
                    r.default.error("[".concat(b.clientId, "] User join failed [").concat(t, "]")), s && s(t), o.b.joinGateway(e.sid, {
                        lts: c,
                        succ: !1,
                        ec: t,
                        addr: b.socket.getURL()
                    })
                }), clearInterval(b.timers.trafficStats), b.timers.trafficStats = setInterval(function () {
                    b.makeRequest({_type: "traffic_stats"}, function (e) {
                        var t = {};
                        for (var n in e) t[it(n)] = e[n];
                        if (t.peer_delay && t.peer_delay.length) {
                            var i = [];
                            t.peer_delay.forEach(function (e) {
                                var t = {};
                                for (var n in e) t[it(n)] = e[n];
                                i.push(t)
                            }), t.peer_delay = i
                        }
                        b.traffic_stats = t;
                        var a = b.joinInfo.stringUid, r = b.localStreams[d] || b.localStreams[a];
                        r && (r.traffic_stats = {access_delay: t.access_delay}), t.peer_delay && t.peer_delay.forEach(function (e) {
                            var n = b.remoteStreams[e.peer_uid];
                            n && (n.traffic_stats = {
                                access_delay: t.access_delay,
                                e2e_delay: e.e2e_delay,
                                audio_delay: e.audio_delay,
                                video_delay: e.video_delay
                            })
                        }), b.dispatchEvent({type: "after-getTrafficStats", trafficStats: t})
                    })
                }, 3e3), this.remoteMuteState = {}, b.resetAudioVolumeIndication()
            }, b.leave = function (e, t) {
                switch (b.state) {
                    case v:
                        return r.default.debug("[".concat(b.clientId, "] Client Already in DISCONNECTED status")), void T(e);
                    case _:
                        return r.default.error("[".concat(b.clientId, "] Client Already in DISCONNECTING status")), void T(t, x.INVALID_OPERATION);
                    case I:
                        if (b.leaveOnConnected) return r.default.error("[".concat(b.clientId, "] Client.leave() already called")), void T(t, x.INVALID_OPERATION);
                        if (1 == b.reconnectingCS) return;
                        return r.default.debug("[".concat(b.clientId, "] Client connecting. Waiting for Client Fully Connected(And leave)")), void (b.leaveOnConnected = {
                            onSuccess: e,
                            onFailure: t
                        })
                }
                var n = rt.unregister(b);
                if (n) r.default.error("[".concat(b.clientId, "] "), n); else {
                    for (var i in b.state = _, clearInterval(b.pingTimer), b.timers) b.timers.hasOwnProperty(i) && clearInterval(b.timers[i]);
                    for (var i in b.inChannelInfo.joinAt && (b.inChannelInfo.duration += Date.now() - b.inChannelInfo.joinAt, b.inChannelInfo.joinAt = null), b.makeRequest({_type: "leave"}, function (t) {
                        b.socket.close(), b.socket = void 0, r.default.info("[".concat(b.clientId, "] Leave channel success")), b.state = v, e && e(t)
                    }, function (e) {
                        r.default.error("[".concat(b.clientId, "] Leave Channel Failed"), e), b.state = h, t && t(e)
                    }), b.localStreams) if (b.localStreams.hasOwnProperty(i)) {
                        var a = b.localStreams[i];
                        delete b.localStreams[i], void 0 !== a.pc && (a.pc.close(), a.pc = void 0)
                    }
                    D()
                }
            }, b.publish = function (e, t, n, s) {
                var c = (new Date).getTime(), d = !1;
                if (e.publishLTS = c, "object" !== re()(e) || null === e) return r.default.error("[".concat(b.clientId, "] Invalid local stream")), s && s(x.INVALID_LOCAL_STREAM), void o.b.publish(b.joinInfo.sid, {
                    lts: c,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: x.INVALID_LOCAL_STREAM
                });
                if (!e.stream && void 0 === e.url) return r.default.error("[".concat(b.clientId, "] Invalid local media stream")), s && s(x.INVALID_LOCAL_STREAM), void o.b.publish(b.joinInfo.sid, {
                    lts: c,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: x.INVALID_LOCAL_STREAM
                });
                if (b.state !== h) return r.default.error("[".concat(b.clientId, "] User is not in the session")), s && s(x.INVALID_OPERATION), void o.b.publish(b.joinInfo.sid, {
                    lts: c,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: x.INVALID_OPERATION
                });
                var l = e.getAttributes() || {};
                if (e.local && void 0 === b.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
                    var p = b.generateP2PId();
                    if (b.p2ps.set(p, e), e.p2pId = p, void 0 !== e.url) N(m({
                        state: "url",
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        attributes: e.getAttributes(),
                        mode: b.mode
                    }, e.url), function (t, n) {
                        "success" === t ? (e.getUserId() !== n && e.setUserId(n), b.localStreams[n] = e, e.onClose = function () {
                            b.unpublish(e)
                        }) : r.default.error("[".concat(b.clientId, "] Publish local stream failed"), t)
                    }); else {
                        b.localStreams[e.getId()] = e, e.connectionSpec = {
                            callback: function (l) {
                                r.default.debug("[".concat(b.clientId, "] SDP exchange in publish : send offer --  "), JSON.parse(l)), b.makeRequest(m({
                                    state: "offer",
                                    stream_type: 1 == t.streamType ? "low" : "high",
                                    p2p_id: p,
                                    sdp: l,
                                    audio: e.audio,
                                    video: e.screen || e.video,
                                    screen: e.screen,
                                    attributes: e.getAttributes(),
                                    dtx: e.DTX,
                                    hq: e.highQuality,
                                    lq: e.lowQuality,
                                    stereo: e.stereo,
                                    speech: e.speech,
                                    mode: b.mode,
                                    codec: b.codec,
                                    extend: Object(a.getParameter)("PUB_EXTEND")
                                }), function (t) {
                                    e.getUserId() !== t.uid && e.setUserId(t.uid), r.default.info("[".concat(b.clientId, "] Local stream published with uid"), t.uid), e.onClose = function () {
                                        b.unpublish(e)
                                    }, e._onAudioUnmute = function () {
                                        b.makeReport(i({action: "unmute_local_audio", stream_id: e.getId()}))
                                    }, e._onVideoUnmute = function () {
                                        b.makeReport(i({action: "unmute_local_video", stream_id: e.getId()}))
                                    }, e._onAudioMute = function () {
                                        b.makeReport(i({action: "mute_local_audio", stream_id: e.getId()}))
                                    }, e._onVideoMute = function () {
                                        b.makeReport(i({action: "mute_local_video", stream_id: e.getId()}))
                                    }, e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (r.default.debug("[".concat(b.clientId, "] local stream audio mute")), e._onAudioMute()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (r.default.debug("[".concat(b.clientId, "] local stream video mute")), e._onVideoMute())), e.pc.oniceconnectionstatechange = function (t) {
                                        if ("failed" === t) {
                                            if (null != b.timers[e.getId()] && (clearInterval(b.timers[e.getId()]), clearInterval(b.timers[e.getId()] + "_RelatedStats")), r.default.error("[".concat(b.clientId, "] Publisher connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(p)), b.p2ps.delete(p), r.default.debug("[".concat(b.clientId, "] publish p2p failed: "), b.p2ps), !d) return d = !0, o.b.publish(b.joinInfo.sid, {
                                                lts: c,
                                                succ: !1,
                                                audioName: e.hasAudio() && e.audioName,
                                                videoName: e.hasVideo() && e.videoName,
                                                screenName: e.hasScreen() && e.screenName,
                                                ec: x.PEERCONNECTION_FAILED
                                            }), b.dispatchEvent(u({
                                                type: "pubP2PLost",
                                                stream: e
                                            })), s && s(x.PEERCONNECTION_FAILED);
                                            b.dispatchEvent(u({type: "pubP2PLost", stream: e}))
                                        } else if ("connected" === t && (r.default.debug("[".concat(b.clientId, "] publish p2p connected: "), b.p2ps), e._isAudioMuted() ? b.makeReport(i({
                                            action: "mute_local_audio",
                                            stream_id: e.getId()
                                        })) : b.makeReport(i({
                                            action: "unmute_local_audio",
                                            stream_id: e.getId()
                                        })), e._isVideoMuted() ? b.makeReport(i({
                                            action: "mute_local_video",
                                            stream_id: e.getId()
                                        })) : b.makeReport(i({
                                            action: "unmute_local_video",
                                            stream_id: e.getId()
                                        })), !d)) return d = !0, o.b.publish(b.joinInfo.sid, {
                                            lts: c,
                                            succ: !0,
                                            audioName: e.hasAudio() && e.audioName,
                                            videoName: e.hasVideo() && e.videoName,
                                            screenName: e.hasScreen() && e.screenName,
                                            ec: null
                                        }), n && n()
                                    }, r.default.debug("[".concat(b.clientId, "] SDP exchange in publish : receive answer --  "), JSON.parse(t.sdp)), e.pc.processSignalingMessage(t.sdp)
                                }, function (t, n) {
                                    r.default.error("Publish Failed: ".concat(t)), o.b.publish(b.joinInfo.sid, {
                                        lts: c,
                                        succ: !0,
                                        audioName: e.hasAudio() && e.audioName,
                                        videoName: e.hasVideo() && e.videoName,
                                        screenName: e.hasScreen() && e.screenName,
                                        ec: t
                                    }), "TIMEOUT" != t && (b.processPublishFailure(e), s && s(t))
                                })
                            },
                            audio: e.hasAudio(),
                            video: e.hasVideo(),
                            screen: e.hasScreen(),
                            isSubscriber: !1,
                            stunServerUrl: b.stunServerUrl,
                            turnServer: b.joinInfo.turnServer,
                            maxAudioBW: l.maxAudioBW,
                            minVideoBW: l.minVideoBW,
                            maxVideoBW: l.maxVideoBW,
                            mode: b.mode,
                            codec: b.codec,
                            isVideoMute: e.userMuteVideo || e.peerMuteVideo,
                            isAudioMute: e.userMuteAudio || e.peerMuteAudio,
                            maxFrameRate: e.attributes.maxFrameRate,
                            clientId: b.clientId
                        }, e.pc = Z(e.connectionSpec), e.pc.addStream(e.stream), r.default.debug("[".concat(b.clientId, "] PeerConnection add stream :"), e.stream), e.pc.onnegotiationneeded = function (n) {
                            var i = {
                                state: "negotiation",
                                stream_type: 1 === t.streamType ? "low" : "high",
                                p2p_id: p,
                                sdp: n
                            };
                            b.makeRequest(m(i), function (t) {
                                r.default.debug("Negotating Stream ".concat(e.getId())), e.pc.processSignalingMessage(t.sdp)
                            }, function (e, t) {
                                r.default.error("Negotiation failed ".concat(e), t, i)
                            })
                        }, clearInterval(b.timers[e.getId()]), b.timers[e.getId()] = setInterval(function () {
                            if (Object(a.getParameter)("REPORT_STATS")) {
                                var t = 0;
                                e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (n) {
                                    n.forEach(function (n) {
                                        if (n && n.id && !/_recv$/.test(n.id) && !/^time$/.test(n.id) && e.getUserId()) if (-1 === n.id.indexOf("outbound_rtp") && -1 === n.id.indexOf("OutboundRTP") || "video" !== n.mediaType || (n.googFrameWidthSent = e.videoWidth + "", n.googFrameHeightSent = e.videoHeight + ""), e.getId() == e.getUserId()) {
                                            var i = 200 * t;
                                            t++, setTimeout(function () {
                                                var e = b.socket && b.socket.getLastMsgTime() && Date.now() - b.socket.getLastMsgTime();
                                                e > Object(a.getParameter)("REPORT_STATS_TIMEOUT") ? r.default.debug("PublishStats report blocked by REPORT_STATS_TIMEOUT ".concat(e)) : b.makeReport(function (e) {
                                                    var t = {};
                                                    return Object.keys(e).forEach(function (n) {
                                                        Object(a.getParameter)("STATS_FILTER")[n] || (t[nt(n)] = e[n])
                                                    }), {
                                                        _type: "publish_stats",
                                                        _message: {stream_type: "high", stats: t}
                                                    }
                                                }(n))
                                            }, i)
                                        } else {
                                            i = 200 * t;
                                            t++, setTimeout(function () {
                                                var e = b.socket && b.socket.getLastMsgTime() && Date.now() - b.socket.getLastMsgTime();
                                                e > Object(a.getParameter)("REPORT_STATS_TIMEOUT") ? r.default.debug("PublishStatsLow report blocked by REPORT_STATS_TIMEOUT ".concat(e)) : b.makeReport(function (e) {
                                                    var t = {};
                                                    return Object.keys(e).forEach(function (n) {
                                                        Object(a.getParameter)("STATS_FILTER")[n] || (t[nt(n)] = e[n])
                                                    }), {
                                                        _type: "publish_stats",
                                                        _message: {stream_type: "low", stats: t}
                                                    }
                                                }(n))
                                            }, i)
                                        }
                                    })
                                })
                            }
                        }, 3e3);
                        var f = function () {
                            Object(a.getParameter)("REPORT_STATS") && e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function (t) {
                                var n, i,
                                    o = b.socket && b.socket.getLastMsgTime() && Date.now() - b.socket.getLastMsgTime();
                                o > Object(a.getParameter)("REPORT_STATS_TIMEOUT") ? r.default.debug("PublishRelatedStats report blocked by REPORT_STATS_TIMEOUT ".concat(o)) : e.getId() === e.getUserId() ? b.makeReport((n = t, i = {}, Object.keys(n).forEach(function (e) {
                                    Object(a.getParameter)("STATS_FILTER")[e] || (i[nt(e)] = n[e])
                                }), {
                                    _type: "publish_related_stats",
                                    _message: {stream_type: "high", stats: i}
                                })) : b.makeReport(function (e) {
                                    var t = {};
                                    return Object.keys(e).forEach(function (n) {
                                        Object(a.getParameter)("STATS_FILTER")[n] || (t[nt(n)] = e[n])
                                    }), {_type: "publish_related_stats", _message: {stream_type: "low", stats: t}}
                                }(t))
                            })
                        };
                        f(), clearInterval(b.timers[e.getId() + "_RelatedStats"]), b.timers[e.getId() + "_RelatedStats"] = setInterval(f, 1e3)
                    }
                }
            }, b.unpublish = function (e, t, n, i) {
                if ("object" !== re()(e) || null === e) return r.default.error("[".concat(b.clientId, "] Invalid local stream")), void T(i, x.INVALID_LOCAL_STREAM);
                if (b.state !== h) return r.default.error("[".concat(b.clientId, "] User not in the session")), void T(i, x.INVALID_OPERATION);
                if (null != b.timers[e.getId()] && (clearInterval(b.timers[e.getId()]), clearInterval(b.timers[e.getId() + "_RelatedStats"])), void 0 !== b.socket) if (e.local && void 0 !== b.localStreams[e.getId()]) {
                    delete b.localStreams[e.getId()];
                    var a = {stream_id: e.getUserId(), stream_type: 1 === t.streamType ? "low" : "high"};
                    b.makeRequest({
                        _type: "unpublish",
                        _message: a
                    }), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, b.p2ps.delete(e.p2pId), b.dispatchEvent({
                        type: "stream-unpublished",
                        stream: e,
                        options: t
                    }), n && n()
                } else r.default.error("[".concat(b.clientId, "] Invalid local stream")), T(i, x.INVALID_LOCAL_STREAM); else r.default.error("[".concat(b.clientId, "] User not in the session")), T(i, x.INVALID_OPERATION)
            }, b.subscribe = function (e, t, n) {
                var s = (new Date).getTime();
                e.subscribeLTS = s;
                var l = !1;
                if (r.default.info("[".concat(b.clientId, "] Gatewayclient ").concat(b.uid, " Subscribe ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))), "object" !== re()(e) || null === e) return r.default.error("[".concat(b.clientId, "] Invalid remote stream")), n && n(x.INVALID_REMOTE_STREAM), void o.b.subscribe(b.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: x.INVALID_REMOTE_STREAM
                });
                if (b.state !== h && (r.default.error("[".concat(b.clientId, "] User is not in the session")), !l)) return l = !0, o.b.subscribe(b.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: x.INVALID_OPERATION
                }), n && n(x.INVALID_OPERATION);
                if (!e.local && b.remoteStreams.hasOwnProperty(e.getId())) if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
                    var p = b.generateP2PId();
                    b.p2ps.set(p, e), e.p2pId = p, e.pc = Z({
                        callback: function (t) {
                            r.default.debug("[".concat(b.clientId, "] SDP exchange in subscribe : send offer --  "), JSON.parse(t));
                            var i = {
                                stream_id: e.getId(),
                                audio: !e.subscribeOptions || e.subscribeOptions.audio,
                                video: !e.subscribeOptions || e.subscribeOptions.video,
                                mode: b.mode,
                                codec: b.codec,
                                p2p_id: p,
                                sdp: t,
                                tcc: Object(a.getParameter)("SUBSCRIBE_TCC"),
                                extend: Object(a.getParameter)("SUB_EXTEND")
                            };
                            b.makeRequest({_type: "subscribe", _message: i}, function (t) {
                                r.default.debug("[".concat(b.clientId, "] SDP exchange in subscribe : receive answer --  "), JSON.parse(t.sdp)), e.pc.processSignalingMessage(t.sdp)
                            }, function (t, i) {
                                r.default.error("[".concat(b.clientId, "] Subscribe remote stream Failed: ").concat(t, ", closing stream "), e.getId(), i), o.b.subscribe(b.joinInfo.sid, {
                                    lts: s,
                                    succ: !1,
                                    video: e.subscribeOptions && e.subscribeOptions.video,
                                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                                    peerid: e.getId(),
                                    ec: t
                                }), "TIMEOUT" != err && (b.processSubscribeFailure(e), n && n(t))
                            })
                        },
                        nop2p: !0,
                        audio: !0,
                        video: !0,
                        screen: e.hasScreen(),
                        isSubscriber: !0,
                        stunServerUrl: b.stunServerUrl,
                        turnServer: b.joinInfo.turnServer,
                        isVideoMute: e.userMuteVideo,
                        isAudioMute: e.userMuteAudio,
                        uid: e.getId(),
                        clientId: b.clientId
                    }), e.pc.onaddstream = function (t, n) {
                        if (e._onAudioUnmute = function () {
                            b.makeRequest(i({action: "unmute_remote_audio", stream_id: e.getId()}), function () {
                            }, function () {
                            })
                        }, e._onAudioMute = function () {
                            b.makeRequest(i({action: "mute_remote_audio", stream_id: e.getId()}), function () {
                            }, function () {
                            })
                        }, e._onVideoUnmute = function () {
                            b.makeRequest(i({action: "unmute_remote_video", stream_id: e.getId()}), function () {
                            }, function () {
                            })
                        }, e._onVideoMute = function () {
                            b.makeRequest(i({action: "mute_remote_video", stream_id: e.getId()}), function () {
                            }, function () {
                            })
                        }, "ontrack" === n && "video" === t.track.kind || "onaddstream" === n) {
                            r.default.info("[".concat(b.clientId, "] Remote stream subscribed with uid "), e.getId());
                            var a = b.remoteStreams[e.getId()];
                            if (b.remoteStreams[e.getId()].stream = "onaddstream" === n ? t.stream : t.streams[0], b.remoteStreams[e.getId()].hasVideo()) {
                                if (Object(f.isFireFox)() || Object(f.isSafari)()) {
                                    var o = b.remoteStreams[e.getId()].stream;
                                    Object(te.g)(o, function (t, n) {
                                        e.videoWidth = t, e.videoHeight = n
                                    }, function (e) {
                                        return r.default.warning("[".concat(b.clientId, "] vsResHack failed: ") + e)
                                    })
                                }
                            } else {
                                var s = b.remoteStreams[e.getId()];
                                s.peerMuteVideo = !0, b._adjustPCMuteStatus(s)
                            }
                            a && a.isPlaying() && a.elementID && (r.default.debug("[".concat(b.clientId, "] Reload Player ").concat(a.elementID, " StreamId ").concat(a.getId())), e.audioOutput = a.audioOutput, a.stop(), e.play(a.elementID, a.playOptions)), delete e.audioLevelHelper;
                            var c = d({type: "stream-subscribed", stream: b.remoteStreams[e.getId()]});
                            b.dispatchEvent(c)
                        }
                    }, clearInterval(b.timers[e.getId()]), b.timers[e.getId()] = setInterval(function () {
                        if (Object(a.getParameter)("REPORT_STATS")) {
                            var t = 0;
                            e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (n) {
                                n.forEach(function (n) {
                                    if (n && n.id) {
                                        if (/_send$/.test(n.id) || /^time$/.test(n.id) || /^bweforvideo$/.test(n.id)) return;
                                        -1 === n.id.indexOf("inbound_rtp") && -1 === n.id.indexOf("inbound-rtp") || "video" !== n.mediaType || (n.googFrameWidthReceived = e.videoWidth + "", n.googFrameHeightReceived = e.videoHeight + "");
                                        var i = 200 * t;
                                        t++;
                                        var o = e.getId();
                                        setTimeout(function () {
                                            var e = b.socket && b.socket.getLastMsgTime() && Date.now() - b.socket.getLastMsgTime();
                                            e > Object(a.getParameter)("REPORT_STATS_TIMEOUT") ? r.default.debug("SubscribeStats report blocked by REPORT_STATS_TIMEOUT ".concat(e)) : b.makeReport(g(o, n))
                                        }, i)
                                    } else ;
                                })
                            })
                        }
                    }, 3e3), clearInterval(b.timers[e.getId() + "_RelatedStats"]), b.timers[e.getId() + "_RelatedStats"] = setInterval(function () {
                        if (Object(a.getParameter)("REPORT_STATS") && e && e.pc) {
                            var t = b.socket && b.socket.getLastMsgTime() && Date.now() - b.socket.getLastMsgTime();
                            if (t > Object(a.getParameter)("REPORT_STATS_TIMEOUT")) return void r.default.debug("SubscribeRelatedStats report blocked by REPORT_STATS_TIMEOUT ".concat(t));
                            e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function (t) {
                                b.makeReport(c(e.getId(), t))
                            }), e.pc.getAudioRelatedStats && e.pc.getAudioRelatedStats(function (t) {
                                b.makeReport(c(e.getId(), t))
                            })
                        }
                    }, 1e3), b.audioLevel[e.getId()] = 0, clearInterval(b.timers[e.getId() + "audio"]), b.timers[e.getId() + "audio"] = setInterval(function () {
                        b.hasListeners("active-speaker") && e && e.pc && "established" === e.pc.state && e.pc.getStats && e.pc.getStats(function (t) {
                            t.forEach(function (t) {
                                if ("audio" === t.mediaType) {
                                    if (t.audioOutputLevel > 5e3) for (var n in b.audioLevel[e.getId()] < 20 && (b.audioLevel[e.getId()] += 1), b.audioLevel) n !== "" + e.getId() && b.audioLevel[n] > 0 && (b.audioLevel[n] -= 1);
                                    var i = Object.keys(b.audioLevel).sort(function (e, t) {
                                        return b.audioLevel[t] - b.audioLevel[e]
                                    });
                                    if (b.activeSpeaker !== i[0]) {
                                        var a = u({type: "active-speaker", uid: i[0]});
                                        b.dispatchEvent(a), b.activeSpeaker = i[0], r.default.debug("[".concat(b.clientId, "] Update active speaker: ").concat(b.activeSpeaker))
                                    }
                                }
                            })
                        }, 50)
                    }, 50), e.pc.oniceconnectionstatechange = function (i) {
                        if ("failed" === i) null != b.timers[e.getId()] && (clearInterval(b.timers[e.getId()]), clearInterval(b.timers[e.getId()] + "audio")), r.default.error("[".concat(b.clientId, "] Subscriber connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(p)), r.default.debug("[".concat(b.clientId, "] subscribe p2p failed: "), b.p2ps), l || (l = !0, n && n(x.PEERCONNECTION_FAILED), o.b.subscribe(b.joinInfo.sid, {
                            lts: s,
                            succ: !1,
                            video: e.subscribeOptions && e.subscribeOptions.video,
                            audio: e.subscribeOptions && e.subscribeOptions.audio,
                            peerid: e.getId(),
                            ec: x.PEERCONNECTION_FAILED
                        })), b.remoteStreams[e.getId()] && b.p2ps.has(p) && (b.p2ps.delete(p), b.dispatchEvent(u({
                            type: "subP2PLost",
                            stream: e
                        }))); else if ("connected" === i && (r.default.debug("[".concat(b.clientId, "] subscribe p2p connected: "), b.p2ps), !l)) {
                            l = !0, o.b.subscribe(b.joinInfo.sid, {
                                lts: s,
                                succ: !0,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: null
                            }), b._adjustPCMuteStatus(e);
                            var a = !1, c = setInterval(function () {
                                e.pc ? e.pc.getStats(function (t) {
                                    t.forEach(function (t) {
                                        -1 !== t.id.indexOf("recv") && "audio" === t.mediaType && parseInt(t.googDecodingNormal) > 0 && (a || (a = !0, b.dispatchEvent({
                                            type: "first-audio-frame-decode",
                                            stream: e
                                        }), clearInterval(c), o.b.reportApiInvoke(b.joinInfo.sid, {name: "firstAudioDecode"})(null, {elapse: Date.now() - e.subscribeLTS})))
                                    })
                                }, 100) : clearInterval(c)
                            }, 100), d = !1, f = setInterval(function () {
                                e.pc ? e.pc.getStats(function (t) {
                                    t.forEach(function (t) {
                                        -1 === t.id.indexOf("recv") && -1 === t.id.indexOf("inbound_rtp") && -1 === t.id.indexOf("inbound-rtp") && -1 === t.id.indexOf("InboundRTP") || "video" === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (d || (d = !0, b.dispatchEvent({
                                            type: "first-video-frame-decode",
                                            stream: e
                                        }), clearInterval(f), e.firstFrameTime = (new Date).getTime() - e.subscribeLTS, o.b.firstRemoteFrame(b.joinInfo.sid, {
                                            lts: (new Date).getTime(),
                                            peerid: e.getId(),
                                            succ: !0,
                                            width: +t.googFrameWidthReceived,
                                            height: +t.googFrameHeightReceived
                                        })))
                                    })
                                }, 100) : clearInterval(f)
                            }, 100);
                            return e.sid = b.joinInfo.sid, t && t()
                        }
                    }
                } else r.default.error("[".concat(b.clientId, "] Invalid remote stream")), l || (l = !0, n && n(x.INVALID_REMOTE_STREAM), o.b.subscribe(b.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: x.INVALID_REMOTE_STREAM
                })); else r.default.error("[".concat(b.clientId, "] No such remote stream")), l || (l = !0, n && n(x.NO_SUCH_REMOTE_STREAM), o.b.subscribe(b.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: x.NO_SUCH_REMOTE_STREAM
                }))
            }, b.subscribeChange = function (e, t, n) {
                var i = Date.now();
                r.default.info("[".concat(b.clientId, "] Gatewayclient ").concat(b.uid, " SubscribeChange ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))), b._adjustPCMuteStatus(e);
                var a = {stream_id: e.getId(), audio: e.subscribeOptions.audio, video: e.subscribeOptions.video};
                b.makeRequest({_type: "subscribe_change", _message: a}, function (n) {
                    var a = d({type: "stream-subscribe-changed", stream: b.remoteStreams[e.getId()]});
                    o.b.subscribe(b.joinInfo.sid, {
                        lts: i,
                        succ: !0,
                        video: e.subscribeOptions && e.subscribeOptions.video,
                        audio: e.subscribeOptions && e.subscribeOptions.audio,
                        peerid: e.getId(),
                        ec: null
                    }), b.dispatchEvent(a), t && t()
                }, function (t, i) {
                    r.default.error("[".concat(b.clientId, "] Subscribe Change Failed ").concat(e.getId()), t, i), n && n(t, i)
                })
            }, b.processPublishFailure = function (e) {
                e.publishLTS = null, e.p2pId && b.p2ps.get(e.p2pId) === e && b.p2ps.delete(e.p2pId), b.localStreams[e.getUserId()] === e && delete b.localStreams[e.getUserId()], b.localStreams[e.getId()] === e && delete b.localStreams[e.getId()], e.pc && (e.pc.processSignalingMessage = function () {
                }, e.pc.oniceconnectionstatechange = function () {
                }, e.pc.close(), delete e.pc), delete e.onClose, delete e._onAudioUnmute, delete e._onVideoUnmute, delete e._onAudioMute, delete e._onVideoMute, delete e._onAudioUnmute
            }, b.processSubscribeFailure = function (e) {
                e.p2pId && b.p2ps.get(e.p2pId) === e && b.p2ps.delete(e.p2pId), b.remoteStreams[e.getId()] === e && delete b.remoteStreams[e.getId()], b.remoteStreams[e.getId()] === e && delete b.remoteStreams[e.getId()], e.pc && (e.pc.onaddstream = function () {
                }, e.pc.processSignalingMessage = function () {
                }, e.pc.oniceconnectionstatechange = function () {
                }, e.pc.close(), delete e.pc), delete e.onClose, delete e._onAudioUnmute, delete e._onVideoUnmute, delete e._onAudioMute, delete e._onVideoMute, delete e._onAudioUnmute
            }, b._adjustPCMuteStatus = function (e) {
                !e.local && e.pc && e.pc.peerConnection.getReceivers && e.pc.peerConnection.getReceivers().forEach(function (t) {
                    if (t && t.track && "audio" === t.track.kind) {
                        var n = !e.userMuteAudio && !e.peerMuteAudio;
                        e.subscribeOptions && !e.subscribeOptions.audio && (n = !1), t.track.enabled = !!n
                    } else if (t && t.track && "video" === t.track.kind) {
                        var i = !e.userMuteVideo && !e.peerMuteVideo;
                        e.subscribeOptions && !e.subscribeOptions.video && (i = !1), t.track.enabled = !!i
                    }
                })
            }, b.unsubscribe = function (e, t, n) {
                if ("object" !== re()(e) || null === e) return r.default.error("[".concat(b.clientId, "] Invalid remote stream")), void T(n, x.INVALID_REMOTE_STREAM);
                if (b.state !== h) return r.default.error("[".concat(b.clientId, "] User is not in the session")), void T(n, x.INVALID_OPERATION);
                if (null != b.timers[e.getId()] && (clearInterval(b.timers[e.getId()]), clearInterval(b.timers[e.getId()] + "audio")), null != b.audioLevel[e.getId()] && delete b.audioLevel[e.getId()], null != b.timer_counter[e.getId()] && delete b.timer_counter[e.getId()], b.remoteStreams.hasOwnProperty(e.getId())) {
                    if (!b.socket) return r.default.error("[".concat(b.clientId, "] User is not in the session")), void T(n, x.INVALID_OPERATION);
                    if (e.local) return r.default.error("[".concat(b.clientId, "] Invalid remote stream")), void T(n, x.INVALID_REMOTE_STREAM);
                    e.close();
                    var i = {stream_id: e.getId()};
                    b.makeRequest({
                        _type: "unsubscribe",
                        _message: i
                    }), void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, delete e.subscribeOptions, b.p2ps.delete(e.p2pId), r.default.info("[".concat(b.clientId, "] Unsubscribe stream success")), t && t()
                } else T(n, x.NO_SUCH_REMOTE_STREAM)
            }, b.setRemoteVideoStreamType = function (e, t) {
                if (r.default.debug("[".concat(b.clientId, "] Switching remote video stream ").concat(e.getId(), " to ").concat(t)), "object" === re()(e) && null !== e) if (b.state === h) {
                    if (!e.local) {
                        switch (t) {
                            case b.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                            case b.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                            case b.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                                break;
                            default:
                                return
                        }
                        var n = {stream_id: e.getId(), stream_type: t};
                        b.makeRequest({_type: "switch_video_stream", _message: n}, function () {
                            r.default.debug("SwitchVideoStream Success ".concat(n.stream_id, " ").concat(n.stream_type))
                        }, function (e, t) {
                            r.default.error("SwitchVideoStream Error ".concat(e, " ").concat(n.stream_id, " ").concat(n.stream_type), t)
                        })
                    }
                } else r.default.error("[".concat(b.clientId, "] User is not in the session")); else r.default.error("[".concat(b.clientId, "] Invalid remote stream"))
            }, b.renewToken = function (e, t, n) {
                e ? b.key ? b.state !== h ? (r.default.debug("[".concat(b.clientId, "] Client is not connected. Trying to rejoin")), b.key = e, b.rejoin(), t && t()) : (r.default.debug("[".concat(b.clientId, "] renewToken from ").concat(b.key, " to ").concat(e)), b.makeRequest({
                    _type: "renew_token",
                    _message: {token: e}
                }, t, n)) : (r.default.error("[".concat(b.clientId, "] Client is previously joined without token")), n && n(x.INVALID_PARAMETER)) : (r.default.error("[".concat(b.clientId, "] Invalid Token ").concat(e)), n && n(x.INVALID_PARAMETER))
            }, b.setStreamFallbackOption = function (e, t) {
                if (r.default.debug("[".concat(b.clientId, "] Set stream fallback option ").concat(e.getId(), " to ").concat(t)), "object" === re()(e) && null !== e) if (b.state === h) {
                    if (!e.local) {
                        switch (t) {
                            case b.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:
                            case b.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:
                            case b.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:
                                break;
                            default:
                                return
                        }
                        var n = {stream_id: e.getId(), fallback_type: t};
                        b.makeRequest({_type: "set_fallback_option", _message: n}, function () {
                            r.default.debug("SetStreamFallbackOption success ".concat(n.stream_id, " ").concat(t))
                        }, function (e, i) {
                            r.default.error("Failed to SetStreamFallbackOption ".concat(n.stream_id, " ").concat(t, " ").concat(e), i)
                        })
                    }
                } else r.default.error("[".concat(b.clientId, "] User is not in the session")); else r.default.error("[".concat(b.clientId, "] Invalid remote stream"))
            }, b.enableAudioVolumeIndicator = function (e, t) {
                b.audioVolumeIndication.enabled = !0, b.audioVolumeIndication.interval = e, b.audioVolumeIndication.smooth = t, b.resetAudioVolumeIndication()
            }, b.resetAudioVolumeIndication = function () {
                if (clearInterval(b.timers.audioVolumeIndication), clearInterval(b.timers.audioVolumeSampling), b.audioVolumeIndication.enabled && b.audioVolumeIndication.interval) {
                    var e = Math.floor(1e3 * b.audioVolumeIndication.smooth / 100);
                    clearInterval(b.timers.audioVolumeSampling), b.timers.audioVolumeSampling = setInterval(function () {
                        b.audioVolumeSampling || (b.audioVolumeSampling = {});
                        var t = {};
                        for (var n in b.remoteStreams) {
                            var i = b.remoteStreams[n];
                            if (i.stream && i.hasAudio()) {
                                var a = i.getAudioLevel();
                                a > 0 && a < 1 && (a *= 100);
                                var r = b.audioVolumeSampling[n] || [];
                                for (r.push(a); r.length > e;) r.shift();
                                t[n] = r
                            }
                        }
                        b.audioVolumeSampling = t
                    }, 100), clearInterval(b.timers.audioVolumeIndication), b.timers.audioVolumeIndication = setInterval(function () {
                        if (b.socket && b.socket.signal && b.socket.signal.connection && b.socket.signal.connection.readyState === WebSocket.OPEN) {
                            var e = [];
                            for (var t in b.remoteStreams) if (b.audioVolumeSampling && b.audioVolumeSampling[t]) {
                                var n = b.audioVolumeSampling[t], i = 0;
                                n.forEach(function (e) {
                                    i += e
                                });
                                var a = {uid: t, level: Math.floor(i / n.length)};
                                a.level && e.push(a)
                            }
                            var o = e.sort(function (e, t) {
                                return e.level - t.level
                            });
                            r.default.debug("[".concat(b.clientId, "] volume-indicator "), JSON.stringify(o)), b.audioVolumeIndication.sortedAudioVolumes = o;
                            var s = u({type: "volume-indicator", attr: o});
                            b.dispatchEvent(s)
                        }
                    }, b.audioVolumeIndication.interval)
                }
            }, b.closeGateway = function () {
                r.default.debug("[".concat(b.clientId, "] close gateway")), b.state = v, b.socket.close(), A()
            };
            var R = function () {
                r.default.debug("[".concat(b.clientId, "] Reconnect gateway")), b.state = v, b.socket.close(), A(), b.reconnectMode = "recover", b.state = I, C()
            };
            b.recover = R;
            var A = function () {
                for (var e in b.dispatchEvent({type: "before-clear-connection"}), b.timers) b.timers.hasOwnProperty(e) && clearInterval(b.timers[e]);
                for (var e in b.remoteStreams) if (b.remoteStreams.hasOwnProperty(e)) {
                    var t = b.remoteStreams[e], n = u({type: "stream-removed", uid: t.getId(), stream: t});
                    b.dispatchEvent(n)
                }
                b.p2ps.clear(), D(), w(), clearInterval(b.pingTimer)
            };
            b.rejoin = function () {
                b.socket && (clearInterval(b.pingTimer), b.socket.close(), b.socket = void 0), b.state = I, C()
            };
            var C = function (e, t) {
                b.dispatchEvent(u({type: "rejoin-start"})), e = e || function (e) {
                    r.default.info("[".concat(b.clientId, "] User ").concat(e, " is re-joined to ").concat(b.joinInfo.cname)), b.dispatchEvent(u({type: "rejoin"})), b.liveStreams && b.liveStreams.size && b.liveStreams.forEach(function (e, t) {
                        e && b.setLiveTranscoding(b.transcoding), b.startLiveStreaming(t, e)
                    }), b.injectLiveStreams && b.injectLiveStreams.size && b.injectLiveStreams.forEach(function (e, t) {
                        b.addInjectStreamUrl(t, e)
                    })
                }, t = t || function (e) {
                    r.default.error("[".concat(b.clientId, "] Re-join to channel failed "), e), b.dispatchEvent(d({
                        type: "error",
                        reason: e
                    }))
                }, b.key ? (++b.rejoinAttempt, b.join(b.joinInfo, b.key, e, t)) : r.default.error("[".concat(b.clientId, "] Connection recover failed [Invalid channel key]"))
            }, O = function (e, t, i) {
                if (b.onConnect = t, b.socket) {
                    if (b.dispatchEvent({type: "reconnect"}), "retry" === b.reconnectMode) r.default.debug("[".concat(b.clientId, "] Retry current gateway")), b.socket.reconnect(); else if ("tryNext" === b.reconnectMode) r.default.debug("[".concat(b.clientId, "] Try next gateway")), b.socket.connectNext(); else if ("recover" === b.reconnectMode) {
                        r.default.debug("[".concat(b.clientId, "] Recover gateway")), r.default.debug("[".concat(b.clientId, "] Try to reconnect choose server and get gateway list again ")), b.reconnectingCS = !0;
                        var s = b.joinInfo && b.joinInfo.sid;
                        ze(b.joinInfo, function (e) {
                            r.default.debug("[".concat(b.clientId, "] session:  ").concat(s, " get gateway list success")), b.joinInfo.apResponse = e.res, b.reconnectingCS ? b.socket.replaceHost(e.gateway_addr) : r.default.debug("[".concat(b.clientId, "] session:  ").concat(s, " already leave"))
                        })
                    }
                } else c = e.gatewayAddr, b.socket = Pe(c, {
                    sid: b.joinInfo.sid,
                    clientId: b.clientId
                }), b.socket.on("start-connection", function (e) {
                    b.ticket = e && e.msg && e.msg.ticket
                }), b.socket.on("on_uplink_stats", function (e) {
                    var t = {};
                    for (var n in e) t[it(n)] = e[n];
                    b.OutgoingAvailableBandwidth = t.uplink_available_bandwidth, b.localStreams[b.uid] && (b.localStreams[b.uid].uplinkStats = t)
                }), b.socket.on("connect", function () {
                    b.dispatchEvent({type: "connected"}), b.attemps = 1, b.onConnect()
                }), b.socket.on("recover", function () {
                    b.state = I, r.default.debug("[".concat(b.clientId, "] Try to reconnect choose server and get gateway list again ")), b.reconnectingCS = !0, b.leaveOnConnected = null;
                    var e = b.joinInfo && b.joinInfo.sid;
                    ze(b.joinInfo, function (t) {
                        r.default.debug("[".concat(b.clientId, "] session:  ").concat(e, " get gateway list success")), b.reconnectingCS ? b.socket.replaceHost(t.gateway_addr) : r.default.debug("[".concat(b.clientId, "] session:  ").concat(e, " already leave"))
                    })
                }), b.socket.on("disconnect", function (e) {
                    if (r.default.debug("[".concat(b.clientId, "] Receive disconnect message")), b.state !== v) {
                        b.state = v;
                        var t = d({type: "error", reason: x.SOCKET_DISCONNECTED});
                        if (b.dispatchEvent(t), 0 === b.p2ps.size ? b.reconnectMode = "tryNext" : b.reconnectMode = "retry", A(), 1 != n) {
                            var i, o = (i = b.attemps, 1e3 * Math.min(30, Math.pow(2, i) - 1));
                            if (r.default.error("[".concat(b.clientId, "] Disconnect from server [").concat(JSON.stringify(e), "], attempt to recover [#").concat(b.attemps, "] after ").concat(o / 1e3, " seconds")), b.hasInvokeLeave) return r.default.debug("[".concat(b.clientId, "] No reconnection becase client.leave has been invoked")), void (b.hasInvokeLeave = !1);
                            setTimeout(function () {
                                b.attemps++, b.state = I, b.inChannelInfo && Date.now() - b.inChannelInfo.joinAt > Object(a.getParameter)("TICKET_RENEW_TIMEOUT") ? (r.default.debug("Recovering to renew ticket"), R()) : C()
                            }, o)
                        }
                    }
                }), b.socket.on("on_add_audio_stream", function (e) {
                    if (r.default.info("[".concat(b.clientId, "] Newly added audio stream with uid ").concat(e.uid)), b.joinInfo.stringUid && "string" != typeof e.uid && r.default.error("StringUID is Mixed with UintUID"), b.remoteStreamsInChannel.has(e.uid) || b.remoteStreamsInChannel.add(e.uid), void 0 === b.remoteStreams[e.uid]) {
                        var t = Re({streamID: e.uid, local: !1, audio: e.audio, video: e.video});
                        t.peerMuteVideo = !0, b.remoteStreams[e.uid] = t;
                        var n = d({type: "stream-added", stream: t});
                        b.dispatchEvent(n);
                        var i = b.remoteMuteState[e.uid];
                        if (i && i.audio) {
                            n = u({type: "mute-audio", uid: e.uid});
                            b.dispatchEvent(n)
                        }
                        if (i && i.video) {
                            n = u({type: "mute-video", uid: e.uid});
                            b.dispatchEvent(n)
                        }
                    }
                }), b.socket.on("on_update_stream", function (e) {
                    var t = b.remoteStreams[e.uid];
                    if (b.joinInfo.stringUid && "string" != typeof e.uid && r.default.error("StringUID is Mixed with UintUID"), t) {
                        t.audio = e.audio, t.video = e.video, t.screen = e.screen, t.pc && b._adjustPCMuteStatus(t);
                        var n = d({type: "stream-updated", stream: t});
                        b.dispatchEvent(n)
                    } else r.default.debug("[".concat(b.clientId, "] Ignoring onUpdateStream event before onAddStream for uid ").concat(e.uid))
                }), b.socket.on("on_add_video_stream", function (e) {
                    if (r.default.info("[".concat(b.clientId, "] Newly added remote stream with uid ").concat(e.uid, ".")), b.joinInfo.stringUid && "string" != typeof e.uid && r.default.error("StringUID is Mixed with UintUID"), b.remoteStreamsInChannel.has(e.uid) || b.remoteStreamsInChannel.add(e.uid), void 0 === b.remoteStreams[e.uid]) {
                        var t = Re({streamID: e.uid, local: !1, audio: e.audio, video: e.video});
                        b.remoteStreams[e.uid] = t;
                        var n = d({type: "stream-added", stream: t});
                        b.dispatchEvent(n);
                        var i = b.remoteMuteState[e.uid];
                        if (i && i.audio) {
                            n = u({type: "mute-audio", uid: e.uid});
                            b.dispatchEvent(n)
                        }
                        if (i && i.video) {
                            n = u({type: "mute-video", uid: e.uid});
                            b.dispatchEvent(n)
                        }
                    } else {
                        var a = b.remoteStreams[e.uid];
                        if (void 0 !== a.stream) {
                            if ((t = b.remoteStreams[e.uid]).video = !0, t.peerMuteVideo = !1, t.pc && b._adjustPCMuteStatus(t), r.default.info("[".concat(b.clientId, "] Stream changed: enable video ").concat(e.uid)), t.isPlaying()) {
                                var o = t.player.elementID;
                                t.stop(), t.play(o, t.playOptions)
                            }
                        } else if (a.p2pId) b.remoteStreams[e.uid].video = !0; else {
                            t = Re({streamID: e.uid, local: !1, audio: !0, video: !0});
                            b.remoteStreams[e.uid] = t, r.default.info("[".concat(b.clientId, "] Stream changed: modify video ").concat(e.uid))
                        }
                    }
                }), b.socket.on("on_remove_stream", function (e) {
                    b.remoteStreamsInChannel.has(e.uid) && b.remoteStreamsInChannel.delete(e.uid);
                    var t = b.remoteStreams[e.uid];
                    if (t) {
                        delete b.remoteStreams[e.uid], delete b.remoteMuteState[e.uid];
                        var n = d({type: "stream-removed", stream: t});
                        b.dispatchEvent(n), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0, b.p2ps.delete(t.p2pId))
                    } else r.default.error("ERROR stream ", e.uid, " not found onRemoveStream ", e)
                }), b.socket.on("on_publish_stream", function (e) {
                    var t = b.localStreams[e.uid], n = d({type: "streamPublished", stream: t});
                    b.dispatchEvent(n)
                }), b.socket.on("mute_audio", function (e) {
                    r.default.info("[".concat(b.clientId, "] rcv peer mute audio: ").concat(e.uid)), b.remoteMuteState[e.uid] = b.remoteMuteState[e.uid] || {
                        audio: !1,
                        video: !1
                    }, b.remoteMuteState[e.uid].audio = !0;
                    var t = u({type: "mute-audio", uid: e.uid}), n = b.remoteStreams[e.uid];
                    n ? (n.peerMuteAudio = !0, n.pc && b._adjustPCMuteStatus(n), b.dispatchEvent(t)) : r.default.debug("Ignoring event ".concat(e.type), e)
                }), b.socket.on("unmute_audio", function (e) {
                    r.default.info("[".concat(b.clientId, "] rcv peer unmute audio: ").concat(e.uid)), b.remoteMuteState[e.uid] = b.remoteMuteState[e.uid] || {
                        audio: !1,
                        video: !1
                    }, b.remoteMuteState[e.uid].audio = !1;
                    var t = u({type: "unmute-audio", uid: e.uid}), n = b.remoteStreams[e.uid];
                    n ? (n.peerMuteAudio = !1, n.pc && b._adjustPCMuteStatus(n), b.dispatchEvent(t)) : r.default.debug("Ignoring event ".concat(e.type), e)
                }), b.socket.on("mute_video", function (e) {
                    r.default.info("[".concat(b.clientId, "] rcv peer mute video: ").concat(e.uid)), b.remoteMuteState[e.uid] = b.remoteMuteState[e.uid] || {
                        audio: !1,
                        video: !1
                    }, b.remoteMuteState[e.uid].video = !0;
                    var t = u({type: "mute-video", uid: e.uid}), n = b.remoteStreams[e.uid];
                    n ? (n.peerMuteVideo = !0, n.pc && b._adjustPCMuteStatus(n), b.dispatchEvent(t)) : r.default.debug("Ignoring event ".concat(e.type), e)
                }), b.socket.on("unmute_video", function (e) {
                    r.default.info("[".concat(b.clientId, "] rcv peer unmute video: ").concat(e.uid)), b.remoteMuteState[e.uid] = b.remoteMuteState[e.uid] || {
                        audio: !1,
                        video: !1
                    }, b.remoteMuteState[e.uid].video = !1;
                    var t = u({type: "unmute-video", uid: e.uid}), n = b.remoteStreams[e.uid];
                    n ? (n.peerMuteVideo = !1, n.pc && b._adjustPCMuteStatus(n), b.dispatchEvent(t)) : r.default.debug("Ignoring event ".concat(e.type), e)
                }), b.socket.on("on_user_banned", function (e) {
                    r.default.info("[".concat(b.clientId, "] user banned uid: ").concat(e.uid, " error: ").concat(e.error_code));
                    var t = u({type: "client-banned", uid: e.uid, attr: e.error_code});
                    b.dispatchEvent(t), n = !0
                }), b.socket.on("on_stream_fallback_update", function (e) {
                    r.default.info("[".concat(b.clientId, "] stream fallback peerId: ").concat(e.stream_id, " type: ").concat(e.stream_type));
                    var t = u({type: "stream-fallback", uid: e.stream_id, stream: e.stream_id, attr: e.stream_type});
                    b.dispatchEvent(t)
                }), b.socket.on("stream_recover", function (e) {
                    r.default.info("[".concat(b.clientId, "] stream recover uid: ").concat(e.id, " peerId: ").concat(e.peerid, " type: ").concat(e.type));
                    var t = u({type: "stream-recover", uid: e.id, stream: e.peerid, attr: e.type});
                    b.dispatchEvent(t)
                }), b.socket.on("on_p2p_lost", function (e) {
                    r.default.debug("[".concat(b.clientId, "] p2plost: "), e, "p2ps:", b.p2ps);
                    var t, n = "DTLS failed";
                    (t = b.localStreams[e.uid] || b.remoteStreams[e.uid]) ? (t.pc && t.pc.offerCandidates && 0 === t.pc.offerCandidates.length && (n = "NO_CANDIDATES_IN_OFFER"), "publish" === e.event && o.b.publish(b.joinInfo.sid, {
                        lts: t.publishLTS,
                        succ: !1,
                        audioName: t.hasAudio() && t.audioName,
                        videoName: t.hasVideo() && t.videoName,
                        screenName: t.hasScreen() && t.screenName,
                        ec: n
                    }), "subscribe" === e.event && o.b.subscribe(b.joinInfo.sid, {
                        lts: t.subscribeLTS,
                        succ: !1,
                        video: t.subscribeOptions && t.subscribeOptions.video,
                        audio: t.subscribeOptions && t.subscribeOptions.audio,
                        peerid: e.uid + "",
                        ec: n
                    })) : r.default.warning("P2PLost Stream Not found", e), r.default.debug("[".concat(b.clientId, "] p2plost:"), e.p2pid), (t = b.p2ps.get(e.p2pid)) && (b.p2ps.delete(e.p2pid), t.local ? b.dispatchEvent(u({
                        type: "pubP2PLost",
                        stream: t,
                        attr: n
                    })) : b.remoteStreams[t.getId()] && b.dispatchEvent(u({type: "subP2PLost", stream: t, attr: n})))
                }), b.socket.on("on_token_privilege_will_expire", function (e) {
                    r.default.debug("[".concat(b.clientId, "] Received Message onTokenPrivilegeWillExpire")), b.dispatchEvent(u({type: "onTokenPrivilegeWillExpire"}))
                }), b.socket.on("on_token_privilege_did_expire", function () {
                    r.default.warning("[".concat(b.clientId, "] Received Message onTokenPrivilegeDidExpire, please get new token and join again")), b.closeGateway(), b.dispatchEvent(u({type: "onTokenPrivilegeDidExpire"}))
                }), b._doWithAction = function (e, t, n) {
                    "tryNext" === e ? function (e, t) {
                        r.default.debug("[".concat(b.clientId, "] Connect next gateway")), b.state = v, b.socket.close(), A(), b.reconnectMode = "tryNext", C(e, t)
                    }(t, n) : "retry" === e ? function (e, t) {
                        r.default.debug("[".concat(b.clientId, "] Reconnect gateway")), b.state = v, b.socket.close(), A(), b.reconnectMode = "retry", C(e, t)
                    }(t, n) : "quit" === e ? (r.default.debug("[".concat(b.clientId, "] quit gateway")), b.state = v, b.socket.close(), A()) : "recover" === e && R()
                }, b.socket.on("on_notification", function (e) {
                    if (r.default.debug("[".concat(b.clientId, "] Receive notification: "), e), "ERR_JOIN_BY_MULTI_IP" === y[e.code]) return b.dispatchEvent({
                        type: "onMultiIP",
                        option: e.option
                    });
                    e.detail ? b._doWithAction(Qe[y[e.code]]) : e.action && b._doWithAction(e.action)
                }), b.socket.on("on_user_offline", function (e) {
                    var t = u({type: "peer-leave", uid: e.uid});
                    if (b.remoteStreamsInChannel.has(e.uid) && b.remoteStreamsInChannel.delete(e.uid), b.remoteStreams.hasOwnProperty(e.uid) && (t.stream = b.remoteStreams[e.uid]), b.dispatchEvent(t), b.remoteStreams.hasOwnProperty(e.uid)) {
                        r.default.info("[".concat(b.clientId, "] closing stream on peer leave"), e.uid);
                        var n = b.remoteStreams[e.uid];
                        n.close(), delete b.remoteStreams[e.uid], void 0 !== n.pc && (n.pc.close(), n.pc = void 0, b.p2ps.delete(n.p2pId))
                    }
                    b.timers.hasOwnProperty(e.uid) && (clearInterval(b.timers[e.uid]), clearInterval(b.timers[e.uid] + "_RelatedStats"), delete b.timers[e.uid]), null != b.audioLevel[e.uid] && delete b.audioLevel[e.uid], null != b.timer_counter[e.uid] && delete b.timer_counter[e.uid]
                }), b.socket.on("onUplinkStats", function (e) {
                }), b.socket.on("liveStreamingStarted", function (e) {
                    var t = p({type: "liveStreamingStarted", url: e.url});
                    b.dispatchEvent(t)
                }), b.socket.on("liveStreamingFailed", function (e) {
                    var t = p({type: "liveStreamingFailed", url: e.url});
                    b.dispatchEvent(t)
                }), b.socket.on("liveStreamingStopped", function (e) {
                    var t = p({type: "liveStreamingStopped", url: e.url});
                    b.dispatchEvent(t)
                }), b.socket.on("liveTranscodingUpdated", function (e) {
                    var t = p({type: "liveTranscodingUpdated", reason: e.reason});
                    b.dispatchEvent(t)
                }), b.socket.on("streamInjectedStatus", function (e) {
                    var t = p({type: "streamInjectedStatus", url: e.url, uid: e.uid, status: e.status});
                    b.dispatchEvent(t)
                }), b.socket.on("on_user_online", function (e) {
                    b.joinInfo.stringUid && "string" != typeof e.uid && r.default.error("StringUID is Mixed with UintUID"), b.dispatchEvent({
                        type: "peer-online",
                        uid: e.uid
                    })
                });
                var c
            }, N = function (e, t) {
                if (void 0 !== b.socket) try {
                    b.socket.emitSimpleMessage(e, function (e, n) {
                        t && t(e, n)
                    })
                } catch (e) {
                    r.default.error("[".concat(b.clientId, "] Error in sendSimpleSdp [").concat(e, "]"))
                } else r.default.error("[".concat(b.clientId, "] Error in sendSimpleSdp [socket not ready]"))
            }, w = function () {
                for (var e in b.localStreams) if (void 0 !== b.localStreams[e]) {
                    var t = b.localStreams[e];
                    delete b.localStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }
            }, D = function () {
                for (var e in b.remoteStreamsInChannel.clear(), b.remoteStreams) if (b.remoteStreams.hasOwnProperty(e)) {
                    var t = b.remoteStreams[e];
                    t.isPlaying() && t.stop(), t.close(), delete b.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }
            };
            return b
        }, rt = {
            _gatewayClients: {}, register: function (e, t) {
                if (!t.uid) {
                    var n = "NO_UID_PROVIDED";
                    return r.default.error("[".concat(e.clientId, "] "), n, t), n
                }
                if (t.cname) {
                    if (this._gatewayClients[t.cname] && this._gatewayClients[t.cname][t.uid] && this._gatewayClients[t.cname][t.uid] !== e) {
                        n = "UID_CONFLICT";
                        return r.default.error("[".concat(e.clientId, "] "), n, t), n
                    }
                    return r.default.debug("[".concat(e.clientId, "] register client Channel"), t.cname, "Uid", t.uid), this._gatewayClients[t.cname] || (this._gatewayClients[t.cname] = {}), this._gatewayClients[t.cname][t.uid] = e, null
                }
                var n = "NO_CHANNEL_PROVIDED";
                return r.default.error("[".concat(e.clientId, "] "), n, t), n
            }, unregister: function (e) {
                var t = e && e.uid, n = e.joinInfo && e.joinInfo.cname;
                if (!t || !n) {
                    var i = "INVALID_GATEWAYCLIENT";
                    return r.default.error("[".concat(e.clientId, "] "), i), i
                }
                if (this._gatewayClients[n] && this._gatewayClients[n][t]) {
                    if (this._gatewayClients[n][t] !== e) {
                        i = "GATEWAYCLIENT_UID_CONFLICT";
                        return r.default.error("[".concat(e.clientId, "] "), i), i
                    }
                    return r.default.debug("[".concat(e.clientId, "] unregister client "), e.uid), delete this._gatewayClients[n][t], null
                }
                var i = "GATEWEAY_CLIENT_UNREGISTERED";
                r.default.error("[".concat(e.clientId, "] "), i)
            }
        };
        at.DISCONNECTED = 0, at.CONNECTING = 1, at.CONNECTED = 2, at.DISCONNECTING = 3, at.connetionStateMap = {
            0: "DISCONNECTED",
            1: "CONNECTING",
            2: "CONNECTED",
            3: "DISCONNECTING"
        };
        var ot = at, st = function (e) {
                var t;
                switch (e) {
                    case"120p":
                    case"120p_1":
                        t = ["120p_1", "120p_1", "120p_1"];
                        break;
                    case"120p_3":
                        t = ["120p_3", "120p_3", "120p_3"];
                        break;
                    case"180p":
                    case"180p_1":
                        t = ["90p_1", "90p_1", "180p_1"];
                        break;
                    case"180p_3":
                        t = ["120p_3", "120p_3", "180p_3"];
                        break;
                    case"180p_4":
                        t = ["120p_1", "120p_1", "180p_4"];
                        break;
                    case"240p":
                    case"240p_1":
                        t = ["120p_1", "120p_1", "240p_1"];
                        break;
                    case"240p_3":
                        t = ["120p_3", "120p_3", "240p_3"];
                        break;
                    case"240p_4":
                        t = ["120p_4", "120p_4", "240p_4"];
                        break;
                    case"360p":
                    case"360p_1":
                    case"360p_4":
                    case"360p_9":
                    case"360p_10":
                    case"360p_11":
                        t = ["90p_1", "90p_1", "360p_1"];
                        break;
                    case"360p_3":
                    case"360p_6":
                        t = ["120p_3", "120p_3", "360p_3"];
                        break;
                    case"360p_7":
                    case"360p_8":
                        t = ["120p_1", "120p_1", "360p_7"];
                        break;
                    case"480p":
                    case"480p_1":
                    case"480p_2":
                    case"480p_4":
                    case"480p_10":
                        t = ["120p_1", "120p_1", "480p_1"];
                        break;
                    case"480p_3":
                    case"480p_6":
                        t = ["120p_3", "120p_3", "480p_3"];
                        break;
                    case"480p_8":
                    case"480p_9":
                        t = ["120p_4", "120p_4", "480p_8"];
                        break;
                    case"720p":
                    case"720p_1":
                    case"720p_2":
                    case"720p_3":
                        t = ["90p_1", "90p_1", "720p_1"];
                        break;
                    case"720p_5":
                    case"720p_6":
                        t = ["120p_1", "120p_1", "720p_5"];
                        break;
                    case"1080p":
                    case"1080p_1":
                    case"1080p_2":
                    case"1080p_3":
                    case"1080p_5":
                        t = ["90p_1", "90p_1", "1080p_1"];
                        break;
                    case"1440p":
                    case"1440p_1":
                    case"1440p_2":
                        t = ["90p_1", "90p_1", "1440p_1"];
                        break;
                    case"4k":
                    case"4k_1":
                    case"4k_3":
                        t = ["90p_1", "90p_1", "4k_1"];
                        break;
                    default:
                        t = ["120p_1", "120p_1", "360p_7"]
                }
                return Object(f.isOpera)() ? [e, 15, 50] : Object(f.isFireFox)() ? [t[1], 15, 100] : Object(f.isSafari)() ? [t[2], 15, 50] : [t[0], 15, 50]
            }, ct = {
                1001: "FRAMERATE_INPUT_TOO_LOW",
                1002: "FRAMERATE_SENT_TOO_LOW",
                1003: "SEND_VIDEO_BITRATE_TOO_LOW",
                1005: "RECV_VIDEO_DECODE_FAILED",
                2001: "AUDIO_INPUT_LEVEL_TOO_LOW",
                2002: "AUDIO_OUTPUT_LEVEL_TOO_LOW",
                2003: "SEND_AUDIO_BITRATE_TOO_LOW",
                2005: "RECV_AUDIO_DECODE_FAILED",
                3001: "FRAMERATE_INPUT_TOO_LOW_RECOVER",
                3002: "FRAMERATE_SENT_TOO_LOW_RECOVER",
                3003: "SEND_VIDEO_BITRATE_TOO_LOW_RECOVER",
                3005: "RECV_VIDEO_DECODE_FAILED_RECOVER",
                4001: "AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER",
                4002: "AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER",
                4003: "SEND_AUDIO_BITRATE_TOO_LOW_RECOVER",
                4005: "RECV_AUDIO_DECODE_FAILED_RECOVER"
            }, dt = {
                FramerateInput: 1001,
                FramerateSent: 1002,
                SendVideoBitrate: 1003,
                VideoDecode: 1005,
                AudioIntputLevel: 2001,
                AudioOutputLevel: 2002,
                SendAudioBitrate: 2003,
                AudioDecode: 2005
            }, ut = function (e) {
                var t = {remoteStreamStorage: {}, localStreamStorage: {}};
                return t.gatewayClient = e, t.checkAudioOutputLevel = function (e) {
                    return !(e && parseInt(e.audioRecvBytesDelta) > 0 && parseInt(e.audioDecodingNormalDelta) > 0 && 0 === parseInt(e.audioOutputLevel))
                }, t.checkAudioIntputLevel = function (e) {
                    return !e || 0 !== parseInt(e.audioInputLevel)
                }, t.checkFramerateInput = function (e, t) {
                    if (!e || !t.attributes) return !0;
                    var n = parseInt(t.attributes.maxFrameRate), i = parseInt(e.googFrameRateInput);
                    return !n || !i || !(n > 10 && i < 5 || n < 10 && n >= 5 && i <= 1)
                }, t.checkFramerateSent = function (e) {
                    return !(e && parseInt(e.googFrameRateInput) > 5 && parseInt(e.googFrameRateSent) <= 1)
                }, t.checkSendVideoBitrate = function (e) {
                    return !e || 0 !== parseInt(e.videoSendBytesDelta)
                }, t.checkSendAudioBitrate = function (e) {
                    return !e || 0 !== parseInt(e.audioSendBytesDelta)
                }, t.checkVideoDecode = function (e) {
                    return !e || 0 === parseInt(e.videoRecvBytesDelta) || 0 !== parseInt(e.googFrameRateDecoded)
                }, t.checkAudioDecode = function (e) {
                    return !e || 0 === parseInt(e.audioRecvBytesDelta) || 0 !== parseInt(e.audioDecodingNormalDelta)
                }, t.record = function (e, n, i, a, r) {
                    i[e] || (i[e] = {isPrevNormal: !0, record: []});
                    var o = i[e], s = t["check" + e](n, r);
                    if (o.record.push(s), o.record.length >= 5) {
                        o.isCurNormal = -1 !== o.record.indexOf(!0);
                        var c = dt[e];
                        o.isPrevNormal && !o.isCurNormal && t.gatewayClient.dispatchEvent({
                            type: "exception",
                            code: c,
                            msg: ct[c],
                            uid: a
                        }), !o.isPrevNormal && o.isCurNormal && t.gatewayClient.dispatchEvent({
                            type: "exception",
                            code: c + 2e3,
                            msg: ct[c + 2e3],
                            uid: a
                        }), o.isPrevNormal = o.isCurNormal, o.record = []
                    }
                }, t.setLocalStats = function (e) {
                    var n = {};
                    Object.keys(e).map(function (i) {
                        var a = e[i], r = t.gatewayClient.localStreams[parseInt(i)], o = t.localStreamStorage[i] || {};
                        r && r.hasVideo() && (t.record("SendVideoBitrate", a.videoStats, o, i), t.record("FramerateInput", a.videoStats, o, i, r), t.record("FramerateSent", a.videoStats, o, i)), r && r.hasAudio() && (t.record("AudioIntputLevel", a.audioStats, o, i), t.record("SendAudioBitrate", a.audioStats, o, i)), n[i] = o
                    }), t.localStreamStorage = n
                }, t.setRemoteStats = function (n) {
                    var i = {};
                    Object.keys(n).map(function (a) {
                        var r = n[a], o = e.remoteStreams[a], s = t.remoteStreamStorage[a] || {};
                        o && o.hasVideo() && o.isPlaying() && t.record("VideoDecode", r.videoStats, s, a), o && o.hasAudio() && o.isPlaying() && (t.record("AudioOutputLevel", r.audioStats, s, a), t.record("AudioDecode", r.audioStats, s, a)), i[a] = s
                    }), t.remoteStreamStorage = i
                }, t
            }, lt = new function () {
                var e = s();
                return e.states = {
                    UNINIT: "UNINIT",
                    INITING: "INITING",
                    INITED: "INITED"
                }, e.state = e.states.UNINIT, e.type = null, e.lastConnectedAt = null, e.lastDisconnectedAt = null, e.lastTypeChangedAt = null, e.networkChangeTimer = null, e._init = function (t, n) {
                    if (e.state = e.states.INITING, navigator.connection && navigator.connection.addEventListener) {
                        var i = e._getNetworkInfo();
                        e.type = i && i.type, e.state = e.states.INITED, t && t()
                    } else e.state = e.states.UNINIT, n && n("DO_NOT_SUPPORT")
                }, e._getNetworkInfo = function () {
                    return navigator.connection
                }, e._reloadNetworkInfo = function () {
                    var t = e._getNetworkInfo(), n = t && t.type || "UNSUPPORTED", i = Date.now();
                    if (n !== e.type) {
                        e.lastTypeChangedAt = i, "none" == n ? e.lastDisconnectedAt = i : "none" == e.type && (e.lastConnectedAt = i), e.type = n;
                        var a = {type: "networkTypeChanged", networkType: n};
                        e.dispatchEvent(a)
                    }
                }, e.getStats = function (t, n) {
                    var i = {}, a = e._getNetworkInfo();
                    a && (i.NetworkType = a.type || "UNSUPPORTED"), setTimeout(function () {
                        t(i)
                    }, 0)
                }, e._init(function () {
                    navigator.connection.addEventListener("change", function () {
                        e._reloadNetworkInfo()
                    }), e.networkChangeTimer = setInterval(function () {
                        e._reloadNetworkInfo()
                    }, 5e3)
                }, function (e) {
                }), e
            }, pt = "DISCONNECTING", ft = "DISCONNECTED", mt = "CONNECTED", gt = "INIT", vt = [],
            St = (setInterval(function () {
                Date.now();
                vt.forEach(function (e) {
                    for (var t = e.requests.length - 1; t >= 0; t--) {
                        var n = e.requests[t];
                        n.timeoutCnt++, n.timeoutCnt >= 15 && (e.requests.splice(t, 1), n.promises.reject({
                            reason: "TIMEOUT",
                            code: 499
                        }))
                    }
                })
            }, 1e3), 1), It = 1, ht = function () {
                var e = Fe()(Ue.a.mark(function e(t) {
                    var n, i, o, s, c, d;
                    return Ue.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.url, i = t.serviceName, o = t.sid, s = t.appId, c = t.cname, d = t.timeout, e.abrupt("return", new Promise(function (e, t) {
                                    var u = !1, l = new XMLHttpRequest;
                                    l.open("POST", n, !0), l.setRequestHeader("Content-Type", "application/json; charset=utf-8"), l.setRequestHeader("X-Packet-Service-Type", "0"), l.setRequestHeader("X-Packet-URI", "61"), l.onload = function () {
                                        if (!u) {
                                            var n = null, i = null;
                                            try {
                                                n = JSON.parse(l.responseText)
                                            } catch (e) {
                                                var a = "Invalid text ".concat(l.responseText);
                                                return r.default.error(a), u = !0, t(a)
                                            }
                                            if (n.code) {
                                                var o = "AP_ERR_".concat(n.code);
                                                return r.default.error(o, n), u = !0, t(o)
                                            }
                                            try {
                                                i = JSON.parse(n.json_body || n.json)
                                            } catch (e) {
                                                var s = "Invalid json_body ".concat(l.responseText);
                                                return r.default.error(s), u = !0, t(s)
                                            }
                                            if (200 !== i.code) {
                                                var c = "APPCENTER_CODE_".concat(i.code);
                                                return r.default.error(c, i), u = !0, t(c)
                                            }
                                            if (!(i.servers && i.servers.length > 0)) {
                                                return r.default.error("APPCENTER_EMPTY_SERVER", i), u = !0, t("APPCENTER_EMPTY_SERVER")
                                            }
                                            return u = !0, e(i)
                                        }
                                    }, l.onerror = function (e) {
                                        var i = "AP_REUEST_".concat(e.type);
                                        r.default.error(i, n, e), u || (u = !0, t(i))
                                    }, l.ontimeout = function (e) {
                                        r.default.error("AP_REUEST_TIMEOUT", n, e), u || (u = !0, t("AP_REUEST_TIMEOUT"))
                                    }, d && (l.timeout = d), l.send(JSON.stringify({
                                        service_name: i,
                                        json_body: JSON.stringify({
                                            command: "allocateEdge",
                                            sid: o,
                                            appId: s,
                                            ts: Math.floor(Date.now() / 1e3),
                                            seq: St++,
                                            cname: c,
                                            version: a.VERSION,
                                            requestId: It++
                                        })
                                    }))
                                }));
                            case 2:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), _t = function () {
                var e = Fe()(Ue.a.mark(function e(t) {
                    var n, i, o, s, c, d, u, l, p, f, m;
                    return Ue.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                n = t.serviceName, i = t.sid, o = t.appId, s = t.cname, c = null, e.t0 = Ue.a.keys(Object(a.getParameter)("UAP_AP"));
                            case 3:
                                if ((e.t1 = e.t0()).done) {
                                    e.next = 34;
                                    break
                                }
                                return d = e.t1.value, u = "https://".concat(Object(a.getParameter)("UAP_AP")[d], "/api/v1?action=uap"), l = void 0, e.prev = 7, e.next = 10, ht({
                                    url: u,
                                    appId: o,
                                    sid: i,
                                    serviceName: n,
                                    cname: s,
                                    timeout: Object(a.getParameter)("HTTP_CONNECT_TIMEOUT")
                                });
                            case 10:
                                l = e.sent, e.next = 18;
                                break;
                            case 13:
                                return e.prev = 13, e.t2 = e.catch(7), r.default.error(e.t2), c = e.t2, e.abrupt("continue", 3);
                            case 18:
                                p = Ue.a.mark(function e(t) {
                                    var i, a, o;
                                    return Ue.a.wrap(function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = l.servers[t], a = "wss://".concat(i.address.replace(/\./g, "-"), ".edge.").concat(t % 2 == 0 ? "agora.io" : "agoraio.cn", ":").concat(i.wss, "?serviceName=").concat(encodeURIComponent(n)), i.wss) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return r.default.error("Invalid server response", i), e.abrupt("return", "continue");
                                            case 5:
                                                return e.prev = 5, e.next = 8, new Promise(function (e, t) {
                                                    var n = new WebSocket(a), i = !1;
                                                    n.addEventListener("open", function () {
                                                        i || (i = !0, e(n))
                                                    }), n.addEventListener("error", function (e) {
                                                        i || (i = !0, t(e))
                                                    })
                                                });
                                            case 8:
                                                return (o = e.sent).workerToken = l.workerToken, e.abrupt("return", {v: o});
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(5), r.default.error(e.t0), c = e.t0;
                                            case 17:
                                            case"end":
                                                return e.stop()
                                        }
                                    }, e, this, [[5, 13]])
                                }), f = 0;
                            case 20:
                                if (!(f < l.servers.length)) {
                                    e.next = 32;
                                    break
                                }
                                return e.delegateYield(p(f), "t3", 22);
                            case 22:
                                m = e.t3, e.t4 = m, e.next = "continue" === e.t4 ? 26 : 27;
                                break;
                            case 26:
                                return e.abrupt("continue", 29);
                            case 27:
                                if ("object" !== re()(m)) {
                                    e.next = 29;
                                    break
                                }
                                return e.abrupt("return", m.v);
                            case 29:
                                f++, e.next = 20;
                                break;
                            case 32:
                                e.next = 3;
                                break;
                            case 34:
                                throw c;
                            case 35:
                            case"end":
                                return e.stop()
                        }
                    }, e, this, [[7, 13]])
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), yt = {}, Et = function (e) {
                return yt[e] ? (yt[e] += 1, yt[e]) : (yt[e] = 1, yt[e])
            }, bt = {}, Tt = function (e) {
                return bt[e] ? (bt[e] += 1, bt[e]) : (bt[e] = 1, bt[e])
            }, Rt = function (e) {
                var t = e.appId, n = e.cname, i = e.uid, o = e.sid, c = s();
                return c.status = gt, c.pingpongTimer = null, c.connection = null, c.requests = [], c.appId = t, c.cname = n, c.uid = i, c.sid = o, c.connection = null, c.connect = function () {
                    var e = Fe()(Ue.a.mark(function e(t) {
                        var n;
                        return Ue.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.wsClient, c.status === gt) {
                                        e.next = 4;
                                        break
                                    }
                                    return r.default.debug("Ignored UapConnection.connect: ".concat(c.status)), e.abrupt("return");
                                case 4:
                                    c.connection = n, c.status = mt, c._flush(), c.startPingpong(), n.addEventListener("close", function (e) {
                                        if (console.log("Weboskcet closed", e), n === c.connection) {
                                            var t = {type: "close", evt: e};
                                            c.dispatchEvent(t)
                                        }
                                    }), n.addEventListener("message", function (e) {
                                        if (e.data) {
                                            var t = null;
                                            try {
                                                t = JSON.parse(e.data)
                                            } catch (e) {
                                                return void r.default.error("Invalid data from worker manager", t)
                                            }
                                            if (t.requestId) for (var n = c.requests.length - 1; n >= 0; n--) {
                                                var i = c.requests[n];
                                                if (i.reqData.requestId === t.requestId) {
                                                    c.requests.splice(n, 1), t.code < 400 && t.code >= 200 ? i.promises.resolve(t) : i.promises.reject(t);
                                                    break
                                                }
                                            } else t.type = "notification", c.dispatchEvent(t)
                                        }
                                    });
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), c.disconnect = Fe()(Ue.a.mark(function e() {
                    var t;
                    return Ue.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                for (t in c.status = pt, clearInterval(c.pingpongTimer), c.pingpongTimer = null, c.requests) c.requests[t].promises.reject("DISCONNECTED");
                                return c.requests = [], null, c.connection && (c.connection.close(), c.connection = null), c.status = ft, e.abrupt("return", null);
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                })), c.request = function () {
                    var e = Fe()(Ue.a.mark(function e(t) {
                        var n, i, o, s;
                        return Ue.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = S()({
                                        command: "request",
                                        sdkVersion: a.VERSION,
                                        seq: Tt(c.sid),
                                        appId: c.appId,
                                        cname: c.cname,
                                        uid: "" + c.uid,
                                        sid: c.sid,
                                        requestId: Et(c.sid),
                                        ts: Math.floor(Date.now() / 1e3)
                                    }, t), "INIT" !== c.status) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", new Promise(function (e, t) {
                                        var i = {
                                            reqData: n,
                                            stalledTs: Date.now(),
                                            timeoutCnt: 0,
                                            promises: {resolve: e, reject: t}
                                        };
                                        c.requests.push(i)
                                    }));
                                case 5:
                                    if (c.connection) {
                                        e.next = 11;
                                        break
                                    }
                                    throw i = "NO_WEBSOCKET_CONNECTION", r.default.error(i), new Error(i);
                                case 11:
                                    if (c.status !== pt || t.clientRequest && "DestroyWorker" === t.clientRequest.command) {
                                        e.next = 17;
                                        break
                                    }
                                    throw o = "WEBSOCKET_DISCONNECTING", r.default.error(o), new Error(o);
                                case 17:
                                    if ("DISCONNECTED" !== c.status) {
                                        e.next = 23;
                                        break
                                    }
                                    throw s = "WEBSOCKET_DISCONNECTED", r.default.error(s), new Error(s);
                                case 23:
                                    return e.abrupt("return", new Promise(function (e, t) {
                                        var i = {
                                            reqData: n,
                                            stalledTs: Date.now(),
                                            timeoutCnt: 0,
                                            promises: {resolve: e, reject: t}
                                        };
                                        c.requests.push(i), c._flush()
                                    }));
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), c._flush = function () {
                    c.connection && c.status === mt && c.requests.forEach(function (e) {
                        e.sentTs || (e.sentTs = Date.now(), e.reqData.clientRequest && (e.reqData.clientRequest.workerToken = c.connection.workerToken), c.connection.send(JSON.stringify(e.reqData)))
                    })
                }, c.startPingpong = function () {
                    clearInterval(c.pingpongTimer), c.pingpongTimer = setInterval(Fe()(Ue.a.mark(function e() {
                        return Ue.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (c.status !== mt || !c.connection || 1 !== c.connection.readyState) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, c.request({command: "ping"});
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1), console.error("pingpong", e.t0);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this, [[1, 6]])
                    })), 6e3)
                }, c._flush(), c.startPingpong(), vt.push(c), c
            }, At = function (e) {
                return "number" == typeof e && 0 <= e && e <= 4294967295
            };
        var Ct = function (e) {
            var t = e;
            if (Object(a.getParameter)("LIVESTREAMING_ALIGN")) switch (e) {
                case 200:
                    t = T;
                    break;
                case 451:
                    t = R;
                    break;
                case 453:
                    t = A;
                    break;
                case 470:
                    t = M;
                    break;
                case 499:
                    t = C;
                    break;
                default:
                    t = O
            }
            return t
        }, Ot = function (e) {
            var t = e;
            if (Object(a.getParameter)("LIVESTREAMING_ALIGN")) switch (e) {
                case 200:
                    t = N;
                    break;
                case 404:
                case 452:
                    t = w;
                    break;
                case 453:
                    t = D;
                    break;
                case 499:
                    t = k;
                    break;
                default:
                    t = L
            }
            return t
        }, Nt = function (e) {
            var t = {
                key: void 0,
                highStream: null,
                lowStream: null,
                lowStreamParameter: null,
                isDualStream: !1,
                highStreamState: 2,
                lowStreamState: 2,
                proxyServer: null
            };
            t.turnServer = {
                mode: "auto",
                username: "test",
                credential: "111111",
                forceturn: Object(a.getParameter)("FORCE_TURN")
            }, t.useProxyServer = !1, t.mode = e.mode, t.codec = e.codec, t.clientId = Object(te.b)().slice(0, 5), t.uintUid = null;
            e = S()({}, e);
            return t.aespassword = null, t.aesmode = "none", t.hasPublished = !1, t.getSessionId = function () {
                return e.sessionId
            }, t.getConnectionState = function () {
                var n = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.getConnectionState",
                    options: arguments,
                    tag: "tracer"
                }), i = ot.connetionStateMap[t.gatewayClient.state];
                return n(), i
            }, t.setClientRole = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    callback: i,
                    name: "Client.setClientRole",
                    options: arguments,
                    tag: "tracer"
                });
                if (oe(n, "setClientRole", ["host", "audience"]), "rtc" === t.mode) {
                    var s = "RTC mode can not use setClientRole";
                    return r.default.warning("[".concat(t.clientId, "] ").concat(s)), a && a(s)
                }
                t.gatewayClient && t.gatewayClient.state === ot.CONNECTED ? ("audience" === n && (0 === this.highStreamState ? this._unpublish(this.highStream, function () {
                    a && a(null, {role: n})
                }, function (e) {
                    a && a(e)
                }) : t.gatewayClient.setClientRole("audience", a)), "host" === n && t.gatewayClient.setClientRole("host", a)) : (t.gatewayClient.role = n, a && a(null, {role: n}))
            }, t.getGatewayInfo = function (e) {
                if (t.gatewayClient.state !== ot.CONNECTED) {
                    var n = "Client is not in connected state";
                    return r.default.error("[".concat(t.clientId, "] ").concat(n)), void e(n)
                }
                t.gatewayClient.getGatewayInfo(function (t) {
                    e(null, t)
                }, e)
            }, t.renewToken = function (n, i, a) {
                var s = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return r.default.error("Failed to renew token ".concat(e), t), a && a(e);
                        i && i(t)
                    }, name: "Client.renewToken", options: arguments, tag: "tracer"
                });
                if (!me(n)) throw new Error("Invalid token: Token is of the string type .Length of the string: [1,255]. ASCII characters only.");
                return t.gatewayClient ? t.key ? (t.key = n, void t.gatewayClient.renewToken(n, function (e) {
                    return s(null, e)
                }, s)) : (r.default.error("[".concat(t.clientId, "] renewToken should not be called before user join")), s(x.INVALID_OPERATION)) : (r.default.error("[".concat(t.clientId, "] renewToken Failed. GatewayClient not Exist")), s(x.INVALID_OPERATION))
            }, t.setLowStreamParameter = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setLowStreamParameter",
                    options: arguments,
                    tag: "tracer"
                });
                se(n, "param");
                var a = n.width, s = n.height, c = n.framerate, d = n.bitrate;
                _e(a) || de(a, "width"), _e(s) || de(s, "height"), _e(c) || de(c, "framerate"), _e(d) || de(d, "bitrate", 1, 1e7), (!a && s || a && !s) && r.default.warning("[".concat(t.clientId, "] The width and height parameters take effect only when both are set")), t.lowStreamParameter = n, i()
            }, t.init = function (n, i, a) {
                var s = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return a && a(e);
                        i && i(t)
                    }, name: "Client.init", options: arguments, tag: "tracer"
                });
                ce(n), Object(f.isChromeKernel)() && Object(f.getChromeKernelVersion)() <= 48 ? a ? s(x.BAD_ENVIRONMENT) : Object(te.e)() : (r.default.info("[".concat(t.clientId, "] Initializing AgoraRTC client, appId: ").concat(n, ".")), e.appId = n, e.sessionId = Object(te.b)(), s())
            }, t.setTurnServer = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setTurnServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== ot.DISCONNECTED) throw new Error("Set turn server before join channel");
                if (t.useProxyServer) throw new Error("You have already set the proxy");
                se(n, "turnServer");
                var a = n.turnServerURL, s = n.username, c = n.password, d = n.udpport, u = n.forceturn, l = n.tcpport;
                ce(a, "turnServerURL"), ce(s, "username"), ce(c, "password"), ce(d, "udpport"), _e(u) || ue(u, "forceturn"), t.turnServer.mode = "manual", t.turnServer.url = a, t.turnServer.udpport = d, t.turnServer.username = s, t.turnServer.credential = c, t.turnServer.forceturn = u || !1, _e(l) || (ce(l, "tcpport"), t.turnServer.tcpport = l, r.default.info("[".concat(t.clientId, "] Set turnserver tcpurl. ").concat(t.turnServer.url, ":").concat(t.turnServer.tcpport))), r.default.info("[".concat(t.clientId, "] Set turnserver udpurl. ").concat(t.turnServer.url, ":").concat(t.turnServer.udpport, ",username: ").concat(t.turnServer.uername, ",password: ").concat(t.turnServer.credential)), i()
            }, t.setProxyServer = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== ot.DISCONNECTED) throw new Error("Set proxy server before join channel");
                if (!n) throw new Error("Do not set the proxyServer parameter as empty");
                if (t.useProxyServer) throw new Error("You have already set the proxy");
                ce(n, "proxyServer"), t.proxyServer = n, o.b.setProxyServer(n), r.default.setProxyServer(n), i()
            }, t.startProxyServer = function () {
                var n = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.startProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== ot.DISCONNECTED) throw new Error("Start proxy server before join channel");
                if (t.proxyServer || t.turnServer.url) throw new Error("You have already set the proxy");
                t.useProxyServer = !0, n()
            }, t.stopProxyServer = function () {
                var n = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.stopProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== ot.DISCONNECTED) throw new Error("Stop proxy server after leave channel");
                o.b.setProxyServer(), r.default.setProxyServer(), t.turnServer = {}, t.proxyServer = null, t.useProxyServer = !1, n()
            }, t.setEncryptionSecret = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setEncryptionSecret",
                    options: arguments,
                    tag: "tracer"
                });
                ce(n, "password"), t.aespassword = n, i()
            }, t.setEncryptionMode = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setEncryptionMode",
                    options: arguments,
                    tag: "tracer"
                });
                if (ce(n, "encryptionMode"), -1 === Ne.indexOf(n)) throw new Error('Invalid encryptionMode: encryptionMode should be "aes-128-xts" | "aes-256-xts" | "aes-128-ecb"');
                t.aesmode = n, i()
            }, t.configPublisher = function (n) {
                var i = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.configPublisher",
                    options: arguments,
                    tag: "tracer"
                });
                se(n, "config");
                var a = n.width, r = n.height, s = n.framerate, c = n.bitrate, d = n.publisherUrl;
                de(a, "width"), de(r, "height"), de(s, "framerate"), de(c, "bitrate", 1, 1e7), d && ce(d, "publisherUrl"), t.gatewayClient.configPublisher(n), i()
            }, t.enableDualStream = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return i && i(e);
                        n && n(t)
                    }, name: "Client.enableDualStream", options: arguments, tag: "tracer"
                });
                return "iOS" === Object(f.getBrowserOS)() ? (o.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !1
                }), a(x.IOS_NOT_SUPPORT)) : Object(f.isWeChatBrowser)() ? (o.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !1
                }), a(x.WECHAT_NOT_SUPPORT)) : (o.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !0
                }), t.isDualStream = !0, t.highStream && (t.highStream.isDualStream = !0), void (0 === t.highStreamState ? t._publishLowStream(function (e) {
                    return a(null, e)
                }, function (e) {
                    r.default.warning("[".concat(t.clientId, "]"), e), a(x.ENABLE_DUALSTREAM_FAILED)
                }) : 1 === t.highStreamState ? a(x.STILL_ON_PUBLISHING) : a(null)))
            }, t.disableDualStream = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return i && i(e);
                        n && n(t)
                    }, name: "Client.disableDualStream", options: arguments, tag: "tracer"
                });
                o.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !1,
                    succ: !0
                }), t.isDualStream = !1, t.highStream && (t.highStream.isDualStream = !1), 0 === t.highStreamState ? t._unpublishLowStream(function () {
                    t.highStream.lowStream = null, a()
                }, function (e) {
                    r.default.warning("[".concat(t.clientId, "]"), e), a(x.DISABLE_DUALSTREAM_FAILED)
                }) : 1 === t.highStreamState ? a(x.STILL_ON_PUBLISHING) : a()
            }, t._createLowStream = function (e, n) {
                if (t.highStream && t.highStream.stream) {
                    var i = S()({}, t.highStream.params);
                    if (i.streamID += 1, i.audio = !1, i.video) {
                        var o = t.highStream.stream.getVideoTracks()[0];
                        o ? ie.getVideoCameraIdByLabel(o.label, function (o) {
                            i.cameraId = o;
                            var s = new Re(i);
                            if (s.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
                                var c = S()({}, t.lowStreamParameter);
                                if (!c.width || !c.height) {
                                    var d = st(t.highStream.profile), u = a.SUPPORT_RESOLUTION_LIST[d[0]];
                                    c.width = u[0], c.height = u[1]
                                }
                                if (c.framerate = c.framerate || 5, c.bitrate = c.bitrate || 50, Object(f.isSafari)() || Object(f.isOpera)()) {
                                    r.default.debug("[".concat(t.clientId, "] Shimming lowStreamParameter"));
                                    u = a.SUPPORT_RESOLUTION_LIST[t.highStream.profile];
                                    c.width = u[0], c.height = u[1]
                                }
                                s.setVideoProfileCustomPlus(c)
                            } else s.setVideoProfileCustom(st(t.highStream.profile));
                            s.init(function () {
                                t.highStream.lowStream = s, t.highStream.userMuteVideo && s.muteVideo(), e && e(s)
                            }, n)
                        }, n) : n && n(x.HIGH_STREAM_NOT_VIDEO_TRACE)
                    } else n && n(x.HIGH_STREAM_NOT_VIDEO_TRACE)
                } else n && n(x.HIGH_STREAM_NOT_VIDEO_TRACE)
            }, t._getLowStream = function (e, n) {
                t.lowStream ? e(t.lowStream) : t._createLowStream(function (n) {
                    t.lowStream = n, e(t.lowStream)
                }, n)
            }, t._publishLowStream = function (e, n) {
                return 2 !== t.lowStreamState ? n && n(x.LOW_STREAM_ALREADY_PUBLISHED) : t.highStream && t.highStream.hasScreen() ? n && n(x.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream(function (i) {
                    t.lowStreamState = 1, t.gatewayClient.publish(i, {streamType: 1}, function () {
                        t.lowStreamState = 0, e && e()
                    }, function (e) {
                        1 === t.lowStreamState && (t.lowStreamState = 2), r.default.debug("[".concat(t.clientId, "] publish low stream failed")), n && n(e)
                    })
                }, n)
            }, t._unpublishLowStream = function (e, n) {
                if (0 !== t.lowStreamState) return n && n(x.LOW_STREAM_NOT_YET_PUBLISHED);
                t.lowStream && (t.gatewayClient.unpublish(t.lowStream, {streamType: 1}, function () {
                }, function (e) {
                    r.default.debug("[".concat(t.clientId, "] unpublish low stream failed")), n && n(e)
                }), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e())
            }, t.join = function (n, i, a, s, c) {
                var d, u = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return c && c(e);
                        s && s(t)
                    }, name: "Client.join", options: arguments, tag: "tracer"
                });
                if (n && !me(n)) return r.default.warning("[".concat(t.clientId, "] Param channelKey should be string")), u(x.INVALID_PARAMETER);
                if (!Ie(d = i) || !/^[a-zA-Z0-9 \!\#\$\%\&\(\)\+\-\:\;\<\=\.\>\?\@\[\]\^\_\{\}\|\~\,]{1,64}$/.test(d)) return r.default.error("Invalid Channel Name ".concat(i)), r.default.warning("[".concat(t.clientId, "] The length must be within 64 bytes. The supported characters: a-z,A-Z,0-9,space,!, #, $, %, &, (, ), +, -, :, ;, <, =, ., >, ?, @, [, ], ^, _,  {, }, |, ~, ,")), u(x.INVALID_PARAMETER);
                if ("string" == typeof i && "" === i) return r.default.warning("[".concat(t.clientId, "] Param channel should not be empty")), u(x.INVALID_PARAMETER);
                if (a && !Object(te.c)(a) && !le(a, 1, 255)) return r.default.error("Invalid UID ".concat(a, " ").concat(re()(a))), r.default.warning("[".concat(t.clientId, "] [String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]")), u(x.INVALID_PARAMETER);
                if ("string" == typeof a && 0 == a.length) return r.default.warning("[".concat(t.clientId, "] String uid should not be empty")), u(x.INVALID_PARAMETER);
                if ("string" == typeof a && a.length > 256) return r.default.warning("[".concat(t.clientId, "] Length of string uid should be less than 255")), u(x.INVALID_PARAMETER);
                t.highStream = null, t.lowStream = null, t.lowStreamParameter = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2;
                var l = {
                    clientId: t.clientId,
                    appId: e.appId,
                    sid: e.sessionId,
                    cname: i,
                    uid: a,
                    turnServer: t.turnServer,
                    proxyServer: t.proxyServer,
                    token: n || e.appId,
                    useProxyServer: t.useProxyServer
                };
                if ("string" == typeof a && (l.stringUid = a, t.uintUid ? (l.uid = t.uintUid, delete t.uintUid) : l.uid = 0), t.aespassword && "none" !== t.aesmode && S()(l, {
                    aespassword: t.aespassword,
                    aesmode: t.aesmode
                }), o.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    cname: i,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                }), t.onSuccess = function (e) {
                    t.rtcStatsCollector.startNetworkQualityTimer(), t.onSuccess = null, u(null, e)
                }, t.onFailure = function (e) {
                    return u(e)
                }, t.channel = i, t.gatewayClient.state !== ot.DISCONNECTED) return r.default.error("[".concat(t.clientId, "] Client already in connecting/connected state")), u(x.INVALID_OPERATION), void o.b.joinGateway(e.sessionId, {
                    lts: Date.now(),
                    succ: !1,
                    ec: x.INVALID_OPERATION,
                    addr: null
                });
                t.gatewayClient.state = ot.CONNECTING;
                var p = function (a, o) {
                    r.default.info("[".concat(t.clientId, "] Joining channel: ").concat(i)), t.gatewayClient.dispatchEvent({
                        type: "config-distribute",
                        config: o,
                        joinInfo: l
                    }), t.key = n || e.appId, l.cid = a.cid, l.uid || (l.uid = a.uid), l.vid = a.vid, l.clientId = t.clientId, l.apResponse = a.res, a.uni_lbs_ip && a.uni_lbs_ip[1] && (l.uni_lbs_ip = a.uni_lbs_ip[1]), l.gatewayAddr = a.gateway_addr, t.joinInfo = l, t.gatewayClient.join(l, t.key, function (e) {
                        r.default.info("[".concat(t.clientId, "] Join channel ").concat(i, " success, join with uid: ").concat(e, ".")), t.onSuccess = null, t.rtcStatsCollector.startNetworkQualityTimer(), u(null, e)
                    }, function (e) {
                        return u(e)
                    })
                };
                l.stringUid && !l.uid ? (t.userAccountReq && !t.userAccountReq.isFinished() && t.userAccountReq.cancel(), t.userAccountReq = Xe(l, t.gatewayClient), t.userAccountReq.then(function (e) {
                    r.default.debug("getUserAccount Success ".concat(e.url, " ").concat(l.stringUid, " => ").concat(e.uid)), l.uid = e.uid, ze(l, p)
                }).catch(function (e) {
                    r.default.error("getUserAccount rejected", e), u(e)
                })) : ze(l, p)
            }, t.renewChannelKey = function (n, i, a) {
                var s = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return a && a(e);
                        i && i(t)
                    }, name: "Client.renewChannelKey", options: arguments, tag: "tracer"
                });
                ce(n, "key", 1, 2047), void 0 === t.key ? (r.default.error("[".concat(t.clientId, "] renewChannelKey should not be called before user join")), s(x.INVALID_OPERATION)) : (t.key = n, t.gatewayClient.joinInfo.token = n, t.gatewayClient.key = n, t.gatewayClient.recover(), s())
            }, t.leave = function (n, i) {
                t.gatewayClient.hasInvokeLeave = !0;
                var s = !1, c = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, a) {
                        if (e) return i && i(e);
                        var r;
                        t.gatewayClient.reconnectingCS = !1, clearTimeout((r = t.clientId, qe[r])), t._renewSession(), t.rtcStatsCollector.clearNetworkQualityTimer(), n && n(a)
                    }, name: "Client.leave", options: arguments, tag: "tracer"
                });
                r.default.info("[".concat(t.clientId, "] Leaving channel")), t.userAccountReq && !t.userAccountReq.isFinished() && (t.userAccountReq.cancel(), t.gatewayClient.state === ot.CONNECTING && (t.gatewayClient.state = ot.DISCONNECTED)), t.gatewayClient.leave(function (e) {
                    s = !0, c(null, e)
                }, c), setTimeout(function () {
                    s || (t.gatewayClient.socket && (t.gatewayClient.socket.close(), t.gatewayClient.socket = null), t.gatewayClient.state = ot.DISCONNECTED, c(null, "LEAVE_MSG_TIMEOUT"))
                }, Object(a.getParameter)("LEAVE_MSG_TIMEOUT"))
            }, t._renewSession = function () {
                var n = Object(te.b)();
                if (r.default.debug("renewSession ".concat(e.sessionId, " => ").concat(n)), e.sessionId = n, t.joinInfo && (t.joinInfo.sid = n), t.gatewayClient && (t.gatewayClient.joinInfo && (t.gatewayClient.joinInfo.sid = n), t.gatewayClient.localStreams)) for (var i in t.gatewayClient.localStreams) {
                    var a = t.gatewayClient.localStreams[i];
                    a && (a.sid = n)
                }
            }, t._publish = function (n, i, o) {
                if (2 !== t.highStreamState) return r.default.warning("[".concat(t.clientId, "] Can't publish stream when stream already publish ").concat(n.getId())), o && o(x.STREAM_ALREADY_PUBLISHED);
                if ("auto" === t.turnServer.mode && Object(a.getParameter)("FORCE_TURN") && !Object(a.getParameter)("TURN_ENABLE_TCP") && !Object(a.getParameter)("TURN_ENABLE_UDP")) throw new Error("force TURN With No TURN Configuration");
                r.default.info("[".concat(t.clientId, "] Publishing stream, uid ").concat(n.getId())), t.highStream = n, t.highStreamState = 1, t.highStream.streamId = t.joinInfo.stringUid || t.joinInfo.uid, t.hasPublished = !1;
                var s = function (n, i, a) {
                    t.gatewayClient.publish(n, {streamType: 0}, function () {
                        n.sid = e.sessionId, t.highStreamState = 0, r.default.info("[".concat(t.clientId, "] Publish success, uid: ").concat(n.getId())), t.highStream && (t.highStream.isDualStream = t.isDualStream), t.isDualStream ? t._publishLowStream(function () {
                            i && i()
                        }, function (e) {
                            r.default.warning("[".concat(t.clientId, "] "), e), i && i()
                        }) : i && i()
                    }, a)
                };
                "audience" === t.gatewayClient.role && "live" === t.mode ? t.gatewayClient.setClientRole("host", function (e) {
                    if (e) return o && o(e);
                    s(n, i, o)
                }) : s(n, i, o)
            }, t._unpublish = function (e, n, i) {
                if (0 !== t.highStreamState) return r.default.warning("[".concat(t.clientId, "] Can't unpublish stream when stream not publish")), i && i(x.STREAM_NOT_YET_PUBLISHED);
                r.default.info("[".concat(t.clientId, "] Unpublish stream, uid ").concat(e.getId()));
                var a = function (e, n, i) {
                    t.isDualStream && t.lowStream && t._unpublishLowStream(null, i), t.gatewayClient.unpublish(e, {streamType: 0}, function () {
                        t.highStreamState = 2, r.default.info("[".concat(t.clientId, "] Unpublish stream success, uid: ").concat(e.getId())), n && n()
                    }, function (n) {
                        r.default.info("[".concat(t.clientId, "] Unpublish stream fail, uid: ").concat(e.getId())), i && i(n)
                    })
                };
                "host" === t.gatewayClient.role && "live" === t.mode ? t.gatewayClient.setClientRole("audience", function (t) {
                    if (t) return i && i(t);
                    a(e, n, i)
                }) : a(e, n, i)
            }, t.publish = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, n) {
                        if (e) return 1 === t.highStreamState && (t.highStreamState = 2), i && i(e)
                    }, name: "Client.publish", tag: "tracer", options: {stream: "too long to show", onFailure: !!i}
                });
                2 === t.highStreamState ? t._publish(n, function (e) {
                    return a(null, e)
                }, function (e) {
                    return a(e)
                }) : a(x.STREAM_ALREADY_PUBLISHED)
            }, t.unpublish = function (n, i, a) {
                var r = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return i && i(e);
                        a && a(t)
                    }, name: "Client.unpublish", tag: "tracer", options: {stream: "too long to show", onFailure: !!i}
                });
                0 === t.highStreamState ? t._unpublish(n, function (e) {
                    return r(null, e)
                }, function (e) {
                    return r(e)
                }) : r(x.STREAM_NOT_YET_PUBLISHED)
            }, t.subscribe = function (n, i, a) {
                var s = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return a && a(e)
                    },
                    name: "Client.subscribe",
                    tag: "tracer",
                    options: {stream: "too long to show", options: i, onFailure: !!a}
                });
                "function" == typeof i && (a = i, i = null), se(n, "stream"), _e(i) || (se(i, "options"), _e(i.video) || ue(i.video, "options.video"), _e(i.audio) || ue(i.audio, "options.audio"));
                var c = {video: !0, audio: !0};
                if (!_e(i)) {
                    if (Object(f.isSafari)() && (!i.video || !i.audio)) {
                        var d = "SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION";
                        return r.default.error("[".concat(t.clientId, "] "), d), void s(d)
                    }
                    if (!_e(i.video) && !fe(i.video) || !_e(i.audio) && !fe(i.audio) || !1 === i.audio && !1 === i.video) {
                        d = "INVALID_PARAMETER ".concat(JSON.stringify(i));
                        return r.default.error("[".concat(t.clientId, "] "), d), void s(d)
                    }
                }
                n.subscribeOptions ? (S()(n.subscribeOptions, c, i), t.gatewayClient.subscribeChange(n, function (e) {
                    return s(null, e)
                }, s)) : (n.subscribeOptions = S()({}, c, i), t.gatewayClient.subscribe(n, function (e) {
                    return s(null, e)
                }, s))
            }, t.unsubscribe = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    callback: function (e, t) {
                        if (e) return i && i(e)
                    }, name: "Client.unsubscribe", tag: "tracer", options: {stream: "too long to show", onFailure: !!i}
                });
                r.default.info("[".concat(t.clientId, "] Unsubscribe stream, uid: ").concat(n.getId())), t.gatewayClient.unsubscribe(n, function (e) {
                    return a(null, e)
                }, a)
            }, t.setRemoteVideoStreamType = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setRemoteVideoStreamType",
                    tag: "tracer",
                    options: {stream: "too long to show", streamType: i}
                });
                oe(i, "streamType", [0, 1]), t.gatewayClient.setRemoteVideoStreamType(n, i), a()
            }, t.setStreamFallbackOption = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setStreamFallbackOption",
                    tag: "tracer",
                    options: {stream: "too long to show", fallbackType: i}
                });
                oe(i, "fallbackType", [0, 1, 2]), t.gatewayClient.setStreamFallbackOption(n, i), a()
            }, t.enableAudioVolumeIndicator = function (n, i) {
                var a = o.b.reportApiInvoke(e.sessionId, {
                    name: "Client.enableAudioVolumeIndicator",
                    options: arguments,
                    tag: "tracer"
                });
                n = n || 2e3, de(i = i || 3, "smooth", 1, 100), de(n, "interval", 50, 1e5), t.audioVolumeIndication = t.audioVolumeIndication || {enabled: !0}, t.audioVolumeIndication.interval = n, t.audioVolumeIndication.smooth = i, t.audioVolumeIndication = {
                    interval: n,
                    smooth: i
                }, r.default.info("[".concat(t.clientId, "] enableAudioVolumeIndicator interval ").concat(n, " smooth ").concat(i)), t.gatewayClient.enableAudioVolumeIndicator(n, i), a()
            }, t.getNetworkStats = function (e, n) {
                return r.default.deprecate("[".concat(t.clientId, "] client.getNetworkStats is deprecated. Use client.getTransportStats instead.")), lt.getStats(e, n)
            }, t.getSystemStats = function (e, t) {
                return g.getStats(e, t)
            }, t.getRecordingDevices = function (e, t) {
                return ie.getRecordingDevices(e, t)
            }, t.getPlayoutDevices = function (e, t) {
                return ie.getPlayoutDevices(e, t)
            }, t.getCameras = function (e, t) {
                return ie.getCameras(e, t)
            }, t.getRemoteAudioStats = function (e, n) {
                return t.rtcStatsCollector.getRemoteAudioStats(e, n)
            }, t.getLocalAudioStats = function (e, n) {
                return t.rtcStatsCollector.getLocalAudioStats(e, n)
            }, t.getRemoteVideoStats = function (e, n) {
                return t.rtcStatsCollector.getRemoteVideoStats(e, n)
            }, t.getLocalVideoStats = function (e, n) {
                return t.rtcStatsCollector.getLocalVideoStats(e, n)
            }, t._getRemoteVideoQualityStats = function (e, n) {
                return t.rtcStatsCollector.getRemoteVideoQualityStats(e, n)
            }, t._getRemoteAudioQualityStats = function (e, n) {
                return t.rtcStatsCollector.getRemoteAudioQualityStats(e, n)
            }, t.getTransportStats = function (e, n) {
                return t.rtcStatsCollector.getTransportStats(function (t) {
                    return lt.getStats(function (n) {
                        var i = S()({}, t, n);
                        e && e(i)
                    }, n)
                }, n)
            }, t.getSessionStats = function (e, n) {
                return t.rtcStatsCollector.getSessionStats(e, n)
            }, t.onNetworkQuality = function () {
                return t.rtcStatsCollector.onNetworkQuality(onSuccess, onFailure)
            }, e.clientId = t.clientId, t.gatewayClient = ot(e), t.listenerLoggerTimer = null, t.listenerLoggerCache = [], t.on = function (e, n) {
                t.gatewayClient.on(e, n), t.listenerLoggerCache.push("".concat(e).concat(n.name ? ":" + n.name : "")), t.listenerLoggerTimer ? clearTimeout(t.listenerLoggerTimer) : r.default.info("[".concat(t.clientId, "] Adding event handler on ").concat(e)), t.listenerLoggerTimer = setTimeout(function () {
                    t.listenerLoggerCache.length && (t.listenerLoggerTimer = null, r.default.info("[".concat(t.clientId, "] Added event handler on ").concat(t.listenerLoggerCache.join(", "))), t.listenerLoggerCache = [])
                }, 0)
            }, t.off = function (e, n) {
                r.default.info("remove event handler from [".concat(e, "]")), t.gatewayClient.removeEventListener(e, n)
            }, t.rtcStatsCollector = function (e) {
                var t = s();
                return t.gatewayClient = e, t.exceptionMonitor = new ut(e), t.localStats = {}, t.remoteStats = {}, t.session = {
                    sendBytes: 0,
                    recvBytes: 0,
                    WSSendBytes: 0,
                    WSSendBytesDelta: 0,
                    WSRecvBytes: 0,
                    WSRecvBytesDelta: 0,
                    HTTPSendBytes: 0,
                    HTTPSendBytesDelta: 0,
                    HTTPRecvBytes: 0,
                    HTTPRecvBytesDelta: 0
                }, t.getRemoteAudioStats = function (e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var a = {}, r = t.remoteStats[i];
                        ne(a, "End2EndDelay", r.peer_delay && r.peer_delay.audio_delay), ne(a, "TransportDelay", r.peer_delay && r.peer_delay.e2e_delay), ne(a, "PacketLossRate", r.peer_delay && r.peer_delay.e2e_audio_lost_ratio_400ms), ne(a, "RecvLevel", r.audioStats && r.audioStats.audioOutputLevel), ne(a, "RecvBitrate", r.audioRecvBitrate), ne(a, "CodecType", r.audioStats && r.audioStats.googCodecName), ne(a, "MuteState", r.audioDisabled), ne(a, "TotalFreezeTime", r.audioStats && r.audioStats.audioTotalFreezeTime), ne(a, "TotalPlayDuration", r.audioStats && r.audioStats.audioTotalPlayDuration), n[i] = a
                    }
                    e && e(n)
                }, t.getLocalAudioStats = function (e) {
                    var n = {};
                    for (var i in t.localStats) {
                        var a = {}, r = t.localStats[i];
                        ne(a, "RecordingLevel", r.audioStats && r.audioStats.audioInputLevel), ne(a, "SendLevel", r.audioStats && r.audioStats.totalAudioEnergy), ne(a, "SamplingRate", r.audioStats && r.audioStats.totalSamplesDuration), ne(a, "SendBitrate", r.audioSendBitrate), ne(a, "CodecType", r.audioStats && r.audioStats.googCodecName), ne(a, "MuteState", r.audioDisabled);
                        var o = t.gatewayClient.localStreams[i];
                        o && o.isPlaying() && ne(a, "MuteState", o.userMuteAudio ? "1" : "0"), n[i] = a
                    }
                    e && e(n)
                }, t.getRemoteVideoStats = function (e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var a = {}, r = t.remoteStats[i];
                        ne(a, "End2EndDelay", r.peer_delay && r.peer_delay.video_delay), ne(a, "TransportDelay", r.peer_delay && r.peer_delay.e2e_delay), ne(a, "PacketLossRate", r.peer_delay && r.peer_delay.e2e_video_lost_ratio_400ms), ne(a, "RecvBitrate", r.videoRecvBitrate), ne(a, "RecvResolutionWidth", r.videoStats && r.videoStats.googFrameWidthReceived), ne(a, "RecvResolutionHeight", r.videoStats && r.videoStats.googFrameHeightReceived), ne(a, "RenderResolutionWidth", r.videoStats && r.videoStats.renderRemoteWidth), ne(a, "RenderResolutionHeight", r.videoStats && r.videoStats.renderRemoteHeight), ne(a, "RenderFrameRate", r.videoStats && r.videoStats.googFrameRateOutput), ne(a, "MuteState", r.videoDisabled), ne(a, "TotalFreezeTime", r.videoStats && r.videoStats.videoTotalFreezeTime), ne(a, "TotalPlayDuration", r.videoStats && r.videoStats.videoTotalPlayDuration), n[i] = a
                    }
                    e && e(n)
                }, t.getLocalVideoStats = function (e) {
                    var n = {};
                    for (var i in t.localStats) {
                        var a = {}, r = t.localStats[i];
                        ne(a, "TargetSendBitrate", r.videoTargetSendBitrate), ne(a, "SendFrameRate", r.videoStats && r.videoStats.googFrameRateSent), ne(a, "SendBitrate", r.videoSendBitrate), ne(a, "SendResolutionWidth", r.videoStats && r.videoStats.googFrameWidthSent), ne(a, "SendResolutionHeight", r.videoStats && r.videoStats.googFrameHeightSent), ne(a, "CaptureResolutionWidth", r.videoStats && r.videoStats.googFrameWidthInput), ne(a, "CaptureResolutionHeight", r.videoStats && r.videoStats.googFrameHeightInput), ne(a, "EncodeDelay", r.videoStats && r.videoStats.googAvgEncodeMs), ne(a, "MuteState", r.videoDisabled), ne(a, "TotalFreezeTime", r.videoStats && r.videoStats.videoTotalFreezeTime), ne(a, "TotalDuration", r.videoStats && r.videoStats.videoTotalPlayDuration), ne(a, "CaptureFrameRate", r.videoStats && r.videoStats.googFrameRateSent), r.videoStats && !r.videoStats.googFrameWidthInput && ne(a, "CaptureResolutionWidth", r.videoStats && r.videoStats.renderLocalWidth), r.videoStats && !r.videoStats.googFrameHeightInput && ne(a, "CaptureResolutionHeight", r.videoStats && r.videoStats.renderLocalHeight), n[i] = a, e && e(n)
                    }
                }, t.getRemoteVideoQualityStats = function (e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var a = {}, r = t.remoteStats[i];
                        ne(a, "videoReceiveDelay", r.videoStats && r.videoStats.googCurrentDelayMs), ne(a, "VideoFreezeRate", r.videoStats && r.videoStats.videoFreezeRate), ne(a, "FirstFrameTime", r.firstFrameTime), n[i] = a
                    }
                    e && e(n)
                }, t.getRemoteAudioQualityStats = function (e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var a = {}, r = t.remoteStats[i];
                        ne(a, "audioReceiveDelay", r.audioStats && r.audioStats.googCurrentDelayMs), ne(a, "AudioFreezeRate", r.videoStats && r.videoStats.videoFreezeRate), n[i] = a
                    }
                    e && e(n)
                }, t.getTransportStats = function (e) {
                    var n = {}, i = {}, a = t.gatewayClient.traffic_stats, r = a.peer_delay;
                    if (ne(n, "OutgoingAvailableBandwidth", t.gatewayClient.OutgoingAvailableBandwidth / 1e3), ne(n, "RTT", a && a.access_delay), r) {
                        var o = !0, s = !1, c = void 0;
                        try {
                            for (var d, u = r[Symbol.iterator](); !(o = (d = u.next()).done); o = !0) {
                                var l = d.value;
                                l.downlink_estimate_bandwidth && (i[l.peer_uid] = l.downlink_estimate_bandwidth / 1e3 + "")
                            }
                        } catch (e) {
                            s = !0, c = e
                        } finally {
                            try {
                                o || null == u.return || u.return()
                            } finally {
                                if (s) throw c
                            }
                        }
                    }
                    n.IncomingAvailableBandwidth = i, e && e(n)
                }, t.getSessionStats = function (e) {
                    var n = {}, i = t.gatewayClient.traffic_stats, a = t.gatewayClient.socket, r = 0, o = 0;
                    for (var s in t.remoteStats) (c = t.remoteStats[s]) && c.videoStats && c.videoStats.videoRecvBytesDelta && (o += parseInt(c.videoStats.videoRecvBytesDelta)), c && c.audioStats && c.audioStats.audioRecvBytesDelta && (o += parseInt(c.audioStats.audioRecvBytesDelta));
                    for (var s in t.localStats) {
                        var c;
                        (c = t.localStats[s]) && c.videoStats && c.videoStats.videoSendBytesDelta && (r += parseInt(c.videoStats.videoSendBytesDelta)), c && c.audioStats && c.audioStats.audioSendBytesDelta && (r += parseInt(c.audioStats.audioSendBytesDelta))
                    }
                    var d = r + t.session.WSSendBytesDelta + t.session.HTTPSendBytesDelta,
                        u = o + t.session.WSRecvBytesDelta + t.session.HTTPRecvBytesDelta,
                        l = t.session.sendBytes + Object(Le.b)(), p = t.session.recvBytes + Object(Le.a)();
                    t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED && (l += a.getSendBytes(), p += a.getRecvBytes());
                    var f = 1;
                    i.peer_delay && (f = i.peer_delay.length, f += 1), ne(n, "Duration", a.getDuration()), ne(n, "UserCount", f), ne(n, "SendBytes", l), ne(n, "RecvBytes", p), ne(n, "SendBitrate", 8 * d / 1e3), ne(n, "RecvBitrate", 8 * u / 1e3), e && e(n)
                }, t.isLocalVideoFreeze = function (e, t) {
                    var n = 0, i = 0;
                    if (!e || !t) return !1;
                    if (Object(f.isChrome)() || Object(f.isOpera)()) n = e.googFrameRateInput, i = e.googFrameRateSent; else if (Object(f.isSafari)()) n = parseInt(e.framerateMean), i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded); else {
                        if (!Object(f.isFireFox)()) return !1;
                        n = parseInt(e.framerateMean), i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded)
                    }
                    return n > 5 && i < 3
                }, t.isRemoteVideoFreeze = function (e, t) {
                    var n = 0, i = 0;
                    if (!e || !t) return !1;
                    if (Object(f.isChrome)() || Object(f.isOpera)()) n = e.googFrameRateReceived, i = e.googFrameRateDecoded; else if (Object(f.isSafari)()) n = e.framerateMean, i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded); else {
                        if (!Object(f.isFireFox)()) return !1;
                        n = parseInt(e.framesReceived) - parseInt(t.framesReceived), i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded)
                    }
                    return n > 5 && n < 10 && i < 3 || n > 10 && n < 20 && i < 4 || n > 20 && i < 5
                }, t.isAudioFreeze = function (e) {
                    if (Object(f.isChrome)() && e) {
                        if (e.googDecodingPLC && e.googDecodingPLCCNG && e.googDecodingCTN) return (parseInt(e.googDecodingPLC) + parseInt(e.googDecodingPLCCNG)) / parseInt(e.googDecodingCTN) > .2
                    } else if ((Object(f.isSafari)() || Object(f.isFireFox)()) && e.packetsLost && e.packetsReceived) return parseInt(e.packetsLost) / (parseInt(e.packetsLost) + parseInt(e.packetsReceived)) > .2;
                    return !1
                }, t.isAudioDecodeFailed = function (e) {
                    return !!((Object(f.isChrome)() || Object(f.isOpera)()) && e && parseInt(e.bytesReceived) > 0 && 0 === parseInt(e.googDecodingNormal))
                }, t.startNetworkQualityTimer = function () {
                    t.clearNetworkQualityTimer(), t.networkQualityTimer = setInterval(function () {
                        if (t.gatewayClient.state !== ot.CONNECTED) t.gatewayClient.dispatchEvent({
                            type: "network-quality",
                            uplinkNetworkQuality: 0,
                            downlinkNetworkQuality: 0
                        }); else {
                            var e = t.gatewayClient.traffic_stats;
                            t.gatewayClient.dispatchEvent({
                                type: "network-quality",
                                uplinkNetworkQuality: t.networkQualityTrans(e.uplink_network_quality),
                                downlinkNetworkQuality: t.networkQualityTrans(e.downlink_network_quality)
                            })
                        }
                    }, 2e3)
                }, t.clearNetworkQualityTimer = function () {
                    t.networkQualityTimer && clearInterval(t.networkQualityTimer)
                }, t.networkQualityTrans = function (e) {
                    return e >= 0 && e < .17 ? 1 : e >= .17 && e < .36 ? 2 : e >= .36 && e < .59 ? 3 : e >= .59 && e <= 1 ? 4 : e > 1 ? 5 : 0
                }, t.getStatsTimer = setInterval(function () {
                    var e = t.gatewayClient.traffic_stats, n = Date.now();
                    t.gatewayClient.dispatchEvent({type: "_testException"}), Object.keys(t.localStats).length && t.exceptionMonitor.setLocalStats(t.localStats), Object.keys(t.remoteStats).length && t.exceptionMonitor.setRemoteStats(t.remoteStats);
                    var i = {};
                    Object.keys(t.gatewayClient.remoteStreams).forEach(function (a) {
                        var r = t.gatewayClient.remoteStreams[a], o = t.remoteStats[a], s = {id: a, updatedAt: n};
                        i[a] = s, s.firstFrameTime = r.firstFrameTime, o ? (s.audioTotalPlayDuration = o.audioTotalPlayDuration + 1, s.audioTotalFreezeTime = o.audioTotalFreezeTime, s.isAudioFreeze = !1, s.isAudioDecodeFailed = !1, s.videoTotalPlayDuration = o.videoTotalPlayDuration + 1, s.videoTotalFreezeTime = o.videoTotalFreezeTime, s.isVideoFreeze = !1) : (s.audioTotalPlayDuration = 1, s.audioTotalFreezeTime = 0, s.videoTotalPlayDuration = 1, s.videoTotalFreezeTime = 0);
                        var c = e && e.peer_delay && e.peer_delay.find(function (e) {
                            return e.peer_uid == a
                        });
                        c && (s.peer_delay = c), r && (r.isPlaying() && (s.audioDisabled = r.userMuteAudio || r.peerMuteAudio ? "1" : "0", s.videoDisabled = r.userMuteVideo || r.peerMuteVideo ? "1" : "0"), o && o.peer_delay && c && o.peer_delay.stream_type !== c.stream_type && t.gatewayClient.dispatchEvent({
                            type: "streamTypeChange",
                            uid: a,
                            streamType: c.stream_type
                        }), r.pc && "established" == r.pc.state && r.pc.getStats(function (e) {
                            if (s.pcStats = e, s.audioStats = e.find(function (e) {
                                return "audio" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1)
                            }), s.videoStats = e.find(function (e) {
                                return "video" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1)
                            }), o && o.audioStats && s.audioStats) {
                                var n = parseInt(s.audioStats.bytesReceived) - parseInt(o.audioStats.bytesReceived),
                                    i = parseInt(s.audioStats.googDecodingNormal) - parseInt(o.audioStats.googDecodingNormal);
                                if (s.audioStats.audioRecvBytesDelta = n, s.audioStats.audioDecodingNormalDelta = i, t.session.recvBytes += n, isFinite(n) && s.audioStats.timestamp) {
                                    var a = s.audioStats.timestamp.getTime() - o.audioStats.timestamp.getTime();
                                    s.audioRecvBitrate = Math.floor(8 * n / a)
                                }
                                t.isAudioFreeze(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.audioTotalFreezeTime++, s.isAudioFreeze = !0), t.isAudioDecodeFailed(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.isAudioDecodeFailed = !0), s.audioStats.audioTotalFreezeTime = s.audioTotalFreezeTime, s.audioStats.audioTotalPlayDuration = s.audioTotalPlayDuration, s.audioStats.audioFreezeRate = Math.ceil(100 * s.audioTotalFreezeTime / s.audioTotalPlayDuration)
                            }
                            if (o && o.videoStats && s.videoStats) {
                                var c = parseInt(s.videoStats.bytesReceived) - parseInt(o.videoStats.bytesReceived);
                                s.videoStats.videoRecvBytesDelta = c, t.session.recvBytes += c, isFinite(c) && s.videoStats.timestamp && (a = s.videoStats.timestamp.getTime() - o.videoStats.timestamp.getTime(), s.videoRecvBitrate = Math.floor(8 * c / a)), t.isRemoteVideoFreeze(s.videoStats, o.videoStats) && (s.videoTotalFreezeTime++, s.isVideoFreeze = !0), s.videoStats.videoTotalFreezeTime = s.videoTotalFreezeTime, s.videoStats.videoTotalPlayDuration = s.videoTotalPlayDuration, s.videoStats.videoFreezeRate = Math.ceil(100 * s.videoTotalFreezeTime / s.videoTotalPlayDuration), r.player && r.player.video && r.player.video.videoWidth && r.player.video.videoHeight ? (s.videoStats.renderRemoteWidth = r.player.video.videoWidth, s.videoStats.renderRemoteHeight = r.player.video.videoHeight) : (s.videoStats.renderRemoteWidth = r.videoWidth || s.videoStats.googFrameWidthReceived, s.videoStats.renderRemoteHeight = r.videoHeight || s.videoStats.googFrameHeightReceived)
                            }
                        }))
                    }), t.remoteStats = i;
                    var a = {};
                    if (Object.keys(t.gatewayClient.localStreams).forEach(function (e) {
                        var i = t.gatewayClient.localStreams[e], r = t.localStats[e], o = {id: e, updatedAt: n};
                        a[e] = o, r ? (o.videoTotalPlayDuration = r.videoTotalPlayDuration + 1, o.videoTotalFreezeTime = r.videoTotalFreezeTime, o.isVideoFreeze = !1) : (o.videoTotalPlayDuration = 1, o.videoTotalFreezeTime = 0), i && (i.isPlaying() && (o.audioDisabled = i.userMuteAudio ? "1" : "0", o.videoDisabled = i.userMuteVideo ? "1" : "0"), i.video && i.attributes.maxVideoBW ? o.videoTargetSendBitrate = i.attributes.maxVideoBW : i.video && i.screenAttributes && (o.videoTargetSendBitrate = i.screenAttributes.maxVideoBW), i.pc && "established" == i.pc.state && i.pc.getStats(function (e) {
                            if (o.pcStats = e.reverse(), o.audioStats = e.find(function (e) {
                                return "audio" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1)
                            }), o.videoStats = e.find(function (e) {
                                return "video" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1)
                            }), o.audioStats && r && r.audioStats) {
                                var n = parseInt(o.audioStats.bytesSent) - parseInt(r.audioStats.bytesSent);
                                if (o.audioStats.audioSendBytesDelta = n, t.session.sendBytes += n, isFinite(n) && o.audioStats.timestamp) {
                                    var a = o.audioStats.timestamp.getTime() - r.audioStats.timestamp.getTime();
                                    o.audioSendBitrate = Math.floor(8 * n / a)
                                }
                            }
                            if (o.videoStats && r && r.videoStats) {
                                var s = parseInt(o.videoStats.bytesSent) - parseInt(r.videoStats.bytesSent);
                                o.videoStats.videoSendBytesDelta = s, t.session.sendBytes += s, isFinite(s) && o.videoStats.timestamp && (a = o.videoStats.timestamp.getTime() - r.videoStats.timestamp.getTime(), o.videoSendBitrate = Math.floor(8 * s / a)), t.isLocalVideoFreeze(o.videoStats, r.videoStats) && (o.videoTotalFreezeTime++, o.isVideoFreeze = !0), o.videoStats.videoTotalFreezeTime = o.videoTotalFreezeTime, o.videoStats.videoTotalPlayDuration = o.videoTotalPlayDuration, o.videoStats.videoFreezeRate = Math.ceil(100 * o.videoTotalFreezeTime / o.videoTotalPlayDuration), o.videoStats.renderLocalWidth = i.videoWidth || o.videoStats.googFrameWidthSent, o.videoStats.renderLocalHeight = i.videoHeight || o.videoStats.googFrameHeightSent
                            }
                        }))
                    }), t.localStats = a, t.session.HTTPSendBytesDelta = Object(Le.b)() - t.session.HTTPSendBytes, t.session.HTTPSendBytes = Object(Le.b)(), t.session.HTTPRecvBytesDelta = Object(Le.a)() - t.session.HTTPRecvBytes, t.session.HTTPRecvBytes = Object(Le.a)(), t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED) {
                        var r = t.gatewayClient.socket;
                        t.session.WSSendBytesDelta = r.getSendBytes() - t.session.WSSendBytes, t.session.WSSendBytes = r.getSendBytes(), t.session.WSRecvBytesDelta = r.getRecvBytes() - t.session.WSRecvBytes, t.session.WSRecvBytes = r.getRecvBytes()
                    }
                }, 1e3), t.gatewayClient.on("join", function () {
                    t.session = {
                        sendBytes: 0,
                        recvBytes: 0,
                        WSSendBytes: 0,
                        WSSendBytesDelta: 0,
                        WSRecvBytes: 0,
                        WSRecvBytesDelta: 0,
                        HTTPSendBytes: 0,
                        HTTPSendBytesDelta: 0,
                        HTTPRecvBytes: 0,
                        HTTPRecvBytesDelta: 0
                    }
                }), t
            }(t.gatewayClient), t.configDistributManager = function (e) {
                var t = {};
                return t.client = e, t.client.gatewayClient && t.client.gatewayClient.on("config-distribute", function (n) {
                    var i = n.joinInfo, s = n.config;
                    if (s) {
                        _e(s.uploadLog) || (Object(a.setParameter)("UPLOAD_LOG", s.uploadLog), o.b.reportApiInvoke(i.sid, {
                            name: "_configDistribute",
                            options: {feature: "uploadLog", value: s.uploadLog}
                        })()), _e(s.dualStream) || (e.isDualStream = s.dualStream, o.b.reportApiInvoke(i.sid, {
                            name: "_configDistribute",
                            options: {feature: "dualStream", value: s.dualStream}
                        })()), _e(s.streamFallbackOption) || t.client.gatewayClient && t.client.gatewayClient.on("stream-subscribed", function (e) {
                            var n = e.stream;
                            n ? (t.client.gatewayClient.setStreamFallbackOption(n, s.streamFallbackOption), o.b.reportApiInvoke(i.sid, {
                                name: "_configDistribute",
                                options: {
                                    feature: "streamFallbackOption",
                                    value: s.streamFallbackOption,
                                    streamId: n.getId()
                                }
                            })()) : o.b.reportApiInvoke(i.sid, {
                                name: "_configDistribute",
                                options: {
                                    feature: "streamFallbackOption",
                                    value: s.streamFallbackOption,
                                    streamId: n.getId(),
                                    err: "invalid stream"
                                }
                            })()
                        });
                        try {
                            r.default.debug("[".concat(e.clientId, "] setParameter in distribution: ").concat(JSON.stringify(s))), Object.keys(s).map(function (e) {
                                return Object(a.setParameter)(e, s[e])
                            })
                        } catch (t) {
                            r.default.debug("[".concat(e.clientId, "] setParameter in distribution failed: ").concat(JSON.stringify(s)))
                        }
                    }
                }), t
            }(t), function (e, t) {
                var n = arguments;
                e.liveStreaming = s(), e.liveStreaming.connections = {
                    inject_streaming: null,
                    mix_streaming: null,
                    raw_streaming: null
                }, e.liveStreaming.connectionTypes = {
                    inject_streaming: "pull",
                    mix_streaming: "push",
                    raw_streaming: "push"
                }, e.liveStreaming.pushStates = {}, e.liveStreaming.pullStates = {}, e.gatewayClient.addEventListener("join", function (t) {
                    e.liveStreaming.resumeStates("pull")
                }), e.gatewayClient.addEventListener("stream-unpublished", function (t) {
                    if (t.options && 0 === t.options.streamType) for (var n in e.liveStreaming.pushStates) {
                        var i = e.liveStreaming.pushStates[n];
                        i.url && e._stopLiveStreaming(i.url, i.transcodingEnabled, !0)
                    }
                }), e.gatewayClient.addEventListener("stream-published", function (t) {
                    e.liveStreaming.resumeStates("push")
                }), e.liveStreaming.connect = (m = Fe()(Ue.a.mark(function n(i) {
                    var a, r;
                    return Ue.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                if (e.joinInfo && e.joinInfo.uid && parseInt(e.joinInfo.vid, 10)) {
                                    n.next = 3;
                                    break
                                }
                                throw new Error("CLIENT_NOT_JOINED");
                            case 3:
                                return a = new Rt({
                                    appId: t.appId,
                                    cname: e.channel,
                                    sid: t.sessionId,
                                    uid: e.joinInfo.uid
                                }), e.liveStreaming.connections[i] = a, n.next = 7, _t({
                                    appId: t.appId,
                                    cname: e.channel,
                                    serviceName: i,
                                    sid: t.sessionId
                                });
                            case 7:
                                return r = n.sent, n.next = 10, a.connect({wsClient: r});
                            case 10:
                                return a.on("notification", function (t) {
                                    if (t.serviceName = i, e.liveStreaming.dispatchEvent(t), 503 === t.code) ; else switch (t.serviceName) {
                                        case"inject_streaming":
                                            var n = {
                                                reason: t && t.reason,
                                                status: Ct(t && t.code),
                                                type: "streamInjectedStatus",
                                                uid: t && t.serverStatus && t.serverStatus.inject_uid,
                                                url: t && t.serverStatus && t.serverStatus.url
                                            };
                                            e.gatewayClient.dispatchEvent(n);
                                            break;
                                        case"raw_streaming":
                                        case"mix_streaming":
                                            var a = {
                                                reason: t && t.reason,
                                                status: t && t.code,
                                                type: t && 200 === t.code ? "liveStreamingStarted" : "liveStreamingFailed",
                                                uid: t && t.serverStatus && t.uid,
                                                url: t && t.serverStatus && t.serverStatus.url
                                            };
                                            e.gatewayClient.dispatchEvent(a)
                                    }
                                }), n.abrupt("return", a);
                            case 12:
                            case"end":
                                return n.stop()
                        }
                    }, n, this)
                })), function (e) {
                    return m.apply(this, arguments)
                }), e.liveStreaming.disconnect = (f = Fe()(Ue.a.mark(function t(n) {
                    var i, a;
                    return Ue.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                t.t0 = Ue.a.keys(e.liveStreaming.connections);
                            case 1:
                                if ((t.t1 = t.t0()).done) {
                                    t.next = 13;
                                    break
                                }
                                if (i = t.t1.value, !e.liveStreaming.connections.hasOwnProperty(i)) {
                                    t.next = 11;
                                    break
                                }
                                if (!(a = e.liveStreaming.connections[i]) || n && n !== i) {
                                    t.next = 11;
                                    break
                                }
                                return r.default.info("Disconnecting liveStreaming ".concat(i)), t.next = 9, a.disconnect();
                            case 9:
                                t.sent, e.liveStreaming.connections[i] = null;
                            case 11:
                                t.next = 1;
                                break;
                            case 13:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                })), function (e) {
                    return f.apply(this, arguments)
                }), e.liveStreaming.resumeStates = (p = Fe()(Ue.a.mark(function t(n) {
                    var i, a, o, s, c, d, u, l;
                    return Ue.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                t.t0 = Ue.a.keys(e.liveStreaming.connections);
                            case 1:
                                if ((t.t1 = t.t0()).done) {
                                    t.next = 8;
                                    break
                                }
                                if (i = t.t1.value, !n || e.liveStreaming.connectionTypes[i] === n) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("continue", 1);
                            case 5:
                                e.liveStreaming.connections.hasOwnProperty(i) && (a = e.liveStreaming.connections[i]) && (r.default.info("LiveStreaming closing connection ".concat(i)), a.disconnect(), e.liveStreaming.connections[i] = null), t.next = 1;
                                break;
                            case 8:
                                t.t2 = Ue.a.keys(e.liveStreaming.pushStates);
                            case 9:
                                if ((t.t3 = t.t2()).done) {
                                    t.next = 37;
                                    break
                                }
                                if (o = t.t3.value, !n || "push" === n) {
                                    t.next = 13;
                                    break
                                }
                                return t.abrupt("continue", 9);
                            case 13:
                                if (!e.liveStreaming.pushStates.hasOwnProperty(o)) {
                                    t.next = 35;
                                    break
                                }
                                if (s = e.liveStreaming.pushStates[o], "audience" !== e.gatewayClient.role) {
                                    t.next = 19;
                                    break
                                }
                                r.default.warning("Cannot resume LiveStreaming in audience mode. ".concat(s.url), s), t.next = 35;
                                break;
                            case 19:
                                if (!s) {
                                    t.next = 35;
                                    break
                                }
                                return r.default.debug("Resuming LiveStreaming ".concat(s.url), s), t.prev = 21, t.next = 24, e._startLiveStreaming(s.url, s.transcodingEnabled);
                            case 24:
                                c = t.sent, r.default.debug("Resumed LiveStreaming ".concat(s.url, ": ").concat(c.reason)), t.next = 35;
                                break;
                            case 28:
                                if (t.prev = 28, t.t4 = t.catch(21), 454 !== t.t4.code) {
                                    t.next = 34;
                                    break
                                }
                                r.default.debug("Resumed LiveStreaming ".concat(s.url, ": ").concat(t.t4.reason)), t.next = 35;
                                break;
                            case 34:
                                throw t.t4;
                            case 35:
                                t.next = 9;
                                break;
                            case 37:
                                t.t5 = Ue.a.keys(e.liveStreaming.pullStates);
                            case 38:
                                if ((t.t6 = t.t5()).done) {
                                    t.next = 62;
                                    break
                                }
                                if (d = t.t6.value, !n || "pull" === n) {
                                    t.next = 42;
                                    break
                                }
                                return t.abrupt("continue", 38);
                            case 42:
                                if (!e.liveStreaming.pullStates.hasOwnProperty(d)) {
                                    t.next = 60;
                                    break
                                }
                                if (u = e.liveStreaming.pullStates[d], "audience" !== e.gatewayClient.role) {
                                    t.next = 48;
                                    break
                                }
                                r.default.warning("Cannot resume addInjectStreamUrl in audience mode. ".concat(u.url), u), t.next = 60;
                                break;
                            case 48:
                                if (!u) {
                                    t.next = 60;
                                    break
                                }
                                return r.default.debug("Resuming LiveStreaming pullStream ".concat(u.url), u), t.prev = 50, t.next = 53, e._addInjectStreamUrl(u.url, u.transcodingConfig);
                            case 53:
                                l = t.sent, r.default.debug("Resumed LiveStreaming pullStream ".concat(u.url, ": ").concat(l.reason)), t.next = 60;
                                break;
                            case 57:
                                t.prev = 57, t.t7 = t.catch(50), 451 === t.t7.code && r.default.debug("Resumed LiveStreaming pullStream ".concat(u.url, ": ").concat(t.t7.reason));
                            case 60:
                                t.next = 38;
                                break;
                            case 62:
                            case"end":
                                return t.stop()
                        }
                    }, t, this, [[21, 28], [50, 57]])
                })), function (e) {
                    return p.apply(this, arguments)
                }), e.liveStreaming.startOptions = {autoDestroyTime: 30}, e.liveStreaming.transcodingConfig = {
                    audioBitrate: 48,
                    audioChannels: 1,
                    audioSampleRate: 48e3,
                    backgroundColor: 0,
                    height: 360,
                    images: [],
                    lowLatency: !1,
                    metadata: "",
                    userConfigExtraInfo: "",
                    userConfigs: [],
                    videoBitrate: 400,
                    videoCodecProfile: 100,
                    videoCodecType: 1,
                    videoFramerate: 15,
                    videoGop: 30,
                    width: 640
                }, e.startLiveStreaming = function (n, i) {
                    _e(i) || ue(i, "transcodingEnabled"), ce(n, "url");
                    var a = o.b.reportApiInvoke(t.sessionId, {
                        name: "Client.startLiveStreaming",
                        options: arguments,
                        tag: "tracer"
                    });
                    if (e.gatewayClient && "audience" === e.gatewayClient.role) {
                        var r = {code: 403, reason: "AUDIENCE_STREAMING_FORBIDDEN"};
                        throw a(r), r
                    }
                    var s = e._startLiveStreaming(n, i);
                    return s.then(function (e) {
                        a(null, e)
                    }).catch(function (e) {
                        a(e)
                    }), s
                }, e._startLiveStreaming = (l = Fe()(Ue.a.mark(function n(i, a) {
                    var o, s, c, d;
                    return Ue.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return o = S()({
                                    allocate: !0,
                                    clientRequest: {command: "PublishStream"},
                                    command: "request"
                                }), r.default.debug("startLiveStreaming ".concat(i, ", ").concat(a)), S()(o.clientRequest, e.liveStreaming.startOptions, {
                                    ts: Date.now(),
                                    url: i,
                                    vid: parseInt(e.joinInfo.vid, 10)
                                }), s = null, a ? (e.liveStreaming.connections.mix_streaming || e.liveStreaming.connect("mix_streaming"), o.clientRequest.transcodingConfig = JSON.parse(JSON.stringify(e.liveStreaming.transcodingConfig)), s = e.liveStreaming.connections.mix_streaming) : ("vp8" === t.codec && r.default.warning("VP8 is not supported by raw_streaming. Subscriber side will suffer"), "rtc" === t.mode && r.default.warning("RTC mode is not supported by raw_streaming. Subscriber side will suffer"), e.liveStreaming.connections.raw_streaming || e.liveStreaming.connect("raw_streaming"), s = e.liveStreaming.connections.raw_streaming), c = null, d = {}, n.prev = 7, n.next = 10, s.request(o);
                            case 10:
                                c = n.sent, d.type = "liveStreamingStarted", d.reason = c && c.reason, d.status = c && c.code, d.url = c && c.serverResponse && c.serverResponse.url, e.gatewayClient.dispatchEvent(d), n.next = 26;
                                break;
                            case 18:
                                throw n.prev = 18, n.t0 = n.catch(7), d.type = "liveStreamingFailed", d.reason = n.t0 && n.t0.reason, d.status = n.t0 && n.t0.code, d.url = n.t0 && n.t0.serverResponse && n.t0.serverResponse.url, e.gatewayClient.dispatchEvent(d), n.t0;
                            case 26:
                                return e.liveStreaming.pushStates[i] = {
                                    transcodingEnabled: a,
                                    url: i
                                }, n.abrupt("return", c);
                            case 28:
                            case"end":
                                return n.stop()
                        }
                    }, n, this, [[7, 18]])
                })), function (e, t) {
                    return l.apply(this, arguments)
                }), e.setLiveTranscoding = function (n, i) {
                    se(n, "transcoding");
                    var a = n, r = a.width, s = a.height, c = a.videoBitrate, d = a.videoFramerate, u = a.lowLatency,
                        l = a.audioSampleRate, p = a.audioBitrate, f = a.audioChannels, m = a.videoGop,
                        g = a.videoCodecProfile, v = a.userCount, S = a.backgroundColor, I = a.transcodingUsers;
                    if (I || (I = n.userConfigs), _e(r) || de(r, "width"), _e(s) || de(s, "height"), _e(c) || de(c, "videoBitrate", 1, 1e6), _e(d) || de(d, "videoFramerate"), _e(u) || ue(u, "lowLatency"), _e(l) || oe(l, "audioSampleRate", [32e3, 44100, 48e3]), _e(p) || de(p, "audioBitrate", 1, 128), _e(f) || oe(f, "audioChannels", [1, 2, 3, 4, 5]), _e(m) || de(m, "videoGop"), _e(g) || oe(g, "videoCodecProfile", [66, 77, 100]), _e(v) || de(v, "userCount", 0, 17), _e(S) || de(S, "backgroundColor", 0, 16777215), !_e(I)) {
                        if (!he(I)) throw new Error("[transcodingUsers]: transcodingUsers should be Array");
                        if (I.length > 17) throw new Error("The length of transcodingUsers cannot greater than 17");
                        I.map(function (e, t) {
                            if (!_e(e.uid) && !At(e.uid) && !isValidString(e.uid, 1, 255)) throw new Error("[String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]");
                            if (_e(e.x) || de(e.x, "transcodingUser[".concat(t, "].x"), 0, 1e4), _e(e.y) || de(e.y, "transcodingUser[".concat(t, "].y"), 0, 1e4), _e(e.width) || de(e.width, "transcodingUser[".concat(t, "].width"), 0, 1e4), _e(e.height) || de(e.height, "transcodingUser[".concat(t, "].height"), 0, 1e4), _e(e.zOrder) || de(e.zOrder, "transcodingUser[".concat(t, "].zOrder"), 0, 100), !(_e(e.alpha) || Se(e.alpha) && e.alpha <= 1 && e.alpha >= 0)) throw new Error("transcodingUser[${index}].alpha: The value range is [0, 1]")
                        })
                    }
                    var h = o.b.reportApiInvoke(t.sessionId, {
                        name: "Client.setLiveTranscoding",
                        options: arguments,
                        tag: "tracer"
                    });
                    if ((n = JSON.parse(JSON.stringify(n))).transcodingUsers && (n.userConfigs = n.transcodingUsers, delete n.transcodingUsers), e.joinInfo.stringUid && n.userConfigs && n.userConfigs.length) {
                        var _ = [];
                        n.userConfigs.forEach(function (t) {
                            _.push(Xe(e.joinInfo, e.gatewayClient, t.uid).then(function (e) {
                                t.uid = e.uid
                            }))
                        });
                        var y = Promise.all(_).then(function () {
                            return e._setLiveTranscoding(n, i)
                        });
                        return y.then(function (e) {
                            h(null, e)
                        }).catch(function (e) {
                            h(e)
                        }), y
                    }
                    var E = e._setLiveTranscoding(n, i);
                    return E.then(function (e) {
                        h(null, e)
                    }).catch(function (e) {
                        h(e)
                    }), E
                }, e._setLiveTranscoding = (u = Fe()(Ue.a.mark(function t(n, i) {
                    var a, r, o;
                    return Ue.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (e.liveStreaming.transcodingConfig = S()(e.liveStreaming.transcodingConfig, n), "boolean" != typeof i && (i = !!e.liveStreaming.connections.mix_streaming), a = JSON.parse(JSON.stringify({
                                    allocate: !1,
                                    clientRequest: {
                                        command: "UpdateTranscoding",
                                        transcodingConfig: e.liveStreaming.transcodingConfig
                                    },
                                    command: "request"
                                })), r = {}, !i) {
                                    t.next = 16;
                                    break
                                }
                                return e.liveStreaming.connections.mix_streaming || e.liveStreaming.connect("mix_streaming"), t.next = 8, e.liveStreaming.connections.mix_streaming.request(a);
                            case 8:
                                return o = t.sent, r.type = "liveTranscodingUpdated", r.reason = o.reason, r.status = o.code, e.gatewayClient.dispatchEvent(r), t.abrupt("return", o);
                            case 16:
                                return t.abrupt("return", {code: 200, reason: "success"});
                            case 17:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                })), function (e, t) {
                    return u.apply(this, arguments)
                }), e.stopLiveStreaming = function (n, i) {
                    ce(n, "url");
                    var a = o.b.reportApiInvoke(t.sessionId, {
                        name: "Client.stopLiveStreaming",
                        options: arguments,
                        tag: "tracer"
                    }), r = e._stopLiveStreaming(n, i);
                    return r.then(function (e) {
                        a(null, e)
                    }).catch(function (e) {
                        a(e)
                    }), r
                }, e._stopLiveStreaming = (d = Fe()(Ue.a.mark(function t(n, i, a) {
                    var r, o, s, c, d, u;
                    return Ue.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return r = null, o = e.liveStreaming.pushStates[n], r = o ? o.transcodingEnabled ? "mix_streaming" : "raw_streaming" : i ? "mix_streaming" : "raw_streaming", s = {
                                    allocate: !1,
                                    clientRequest: {command: "UnpublishStream", url: n},
                                    command: "request"
                                }, e.liveStreaming.connections[r] || e.liveStreaming.connect(r), c = null, t.prev = 6, t.next = 9, e.liveStreaming.connections[r].request(s);
                            case 9:
                                c = t.sent, (d = {}).type = "liveStreamingStopped", d.reason = c && c.reason, d.status = c && c.code, d.url = c && c.serverResponse && c.serverResponse.url, e.gatewayClient.dispatchEvent(d), t.next = 27;
                                break;
                            case 18:
                                throw t.prev = 18, t.t0 = t.catch(6), (u = {}).type = "liveStreamingStopped", u.reason = t.t0 && t.t0.reason, u.status = t.t0 && t.t0.code, u.url = t.t0 && t.t0.serverResponse && t.t0.serverResponse.url, e.gatewayClient.dispatchEvent(u), t.t0;
                            case 27:
                                return a || delete e.liveStreaming.pushStates[n], t.abrupt("return", c);
                            case 29:
                            case"end":
                                return t.stop()
                        }
                    }, t, this, [[6, 18]])
                })), function (e, t, n) {
                    return d.apply(this, arguments)
                }), e.liveStreaming.injectStreamTranscodingConfig = {
                    autoDestroyTime: 30,
                    audioBitrate: 48,
                    audioChannels: 1,
                    audioSampleRate: 44100,
                    height: 0,
                    videoBitrate: 400,
                    videoFramerate: 15,
                    videoGop: 30,
                    width: 0
                }, e.addInjectStreamUrl = function (i, a) {
                    ce(i, "url", 1, 255), se(a, "config"), !_e(a && a.width) && de(a.width, "config.width", 0, 1e4), !_e(a && a.height) && de(a.height, "config.height", 0, 1e4), !_e(a && a.videoGop) && de(a.videoGop, "config.videoGop", 1, 1e4), !_e(a && a.videoFramerate) && de(a.videoFramerate, "config.videoFramerate", 1, 1e4), !_e(a && a.videoBitrate) && de(a.videoBitrate, "config.videoBitrate", 1, 1e4), !_e(a && a.audioSampleRate) && oe(a.audioSampleRate, "config.audioSampleRate", [32e3, 44100, 48e3]), !_e(a && a.audioBitrate) && de(a.audioBitrate, "config.audioBitrate", 1, 1e4), !_e(a && a.audioChannels) && de(a.audioChannels, "config.audioChannels", 1, 2);
                    var r = o.b.reportApiInvoke(t.sessionId, {
                        name: "Client.addInjectStreamUrl",
                        options: n,
                        tag: "tracer"
                    });
                    if ("audience" === e.gatewayClient.role) {
                        var s = {code: 403, reason: "AUDIENCE_INJECTING_FORBIDDEN"};
                        throw r(s), s
                    }
                    var c = e._addInjectStreamUrl(i, a);
                    return c.then(function (e) {
                        r(null, e)
                    }).catch(function (e) {
                        r(e)
                    }), c
                }, e._addInjectStreamUrl = (c = Fe()(Ue.a.mark(function n(i, a) {
                    var r, o, s, c, d;
                    return Ue.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return r = S()({}, e.liveStreaming.injectStreamTranscodingConfig, a), o = {
                                    allocate: !0,
                                    clientRequest: {
                                        cname: e.channel,
                                        command: "InjectStream",
                                        sid: t.sessionId,
                                        transcodingConfig: r,
                                        ts: Date.now(),
                                        url: i,
                                        vid: parseInt(e.joinInfo.vid, 10)
                                    },
                                    command: "request"
                                }, e.liveStreaming.connections.inject_streaming || e.liveStreaming.connect("inject_streaming"), s = null, n.prev = 4, n.next = 7, e.liveStreaming.connections.inject_streaming.request(o);
                            case 7:
                                s = n.sent, c = {
                                    reason: s && s.reason,
                                    status: Ct(s && s.code),
                                    type: "streamInjectedStatus",
                                    uid: s && s.serverResponse && s.serverResponse.inject_uid,
                                    url: s && s.serverResponse && s.serverResponse.url
                                }, e.gatewayClient.dispatchEvent(c), n.next = 17;
                                break;
                            case 12:
                                throw n.prev = 12, n.t0 = n.catch(4), d = {
                                    reason: n.t0 && n.t0.reason,
                                    status: Ct(n.t0 && n.t0.code),
                                    type: "streamInjectedStatus",
                                    uid: n.t0 && n.t0.serverResponse && n.t0.serverResponse.inject_uid,
                                    url: n.t0 && n.t0.serverResponse && n.t0.serverResponse.url
                                }, e.gatewayClient.dispatchEvent(d), n.t0;
                            case 17:
                                return e.liveStreaming.pullStates[i] = {
                                    transcodingConfig: r,
                                    url: i
                                }, n.abrupt("return", s);
                            case 19:
                            case"end":
                                return n.stop()
                        }
                    }, n, this, [[4, 12]])
                })), function (e, t) {
                    return c.apply(this, arguments)
                }), e.removeInjectStreamUrl = (a = Fe()(Ue.a.mark(function n(i) {
                    var a, r, s = arguments;
                    return Ue.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return ce(i, "url", 1, 255), a = o.b.reportApiInvoke(t.sessionId, {
                                    name: "Client.removeInjectStreamUrl",
                                    options: s,
                                    tag: "tracer"
                                }), (r = e._removeInjectStreamUrl(i)).then(function (e) {
                                    a(null, e)
                                }).catch(function (e) {
                                    a(e)
                                }), n.abrupt("return", r);
                            case 5:
                            case"end":
                                return n.stop()
                        }
                    }, n, this)
                })), function (e) {
                    return a.apply(this, arguments)
                }), e._removeInjectStreamUrl = (i = Fe()(Ue.a.mark(function t(n) {
                    var i, a, r, o;
                    return Ue.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return i = {
                                    allocate: !1,
                                    clientRequest: {command: "UninjectStream", url: n},
                                    command: "request"
                                }, e.liveStreaming.connections.inject_streaming || e.liveStreaming.connect("inject_streaming"), a = null, t.prev = 3, t.next = 6, e.liveStreaming.connections.inject_streaming.request(i);
                            case 6:
                                a = t.sent, r = {
                                    reason: a && a.reason,
                                    status: Ot(a && a.code),
                                    type: "streamInjectedStatus",
                                    uid: a && a.serverResponse && a.serverResponse.inject_uid,
                                    url: a && a.serverResponse && a.serverResponse.url
                                }, e.gatewayClient.dispatchEvent(r), t.next = 16;
                                break;
                            case 11:
                                throw t.prev = 11, t.t0 = t.catch(3), o = {
                                    reason: t.t0 && t.t0.reason,
                                    status: Ot(t.t0 && t.t0.code),
                                    type: "streamInjectedStatus",
                                    uid: t.t0 && t.t0.serverResponse && t.t0.serverResponse.inject_uid,
                                    url: t.t0 && t.t0.serverResponse && t.t0.serverResponse.url
                                }, e.gatewayClient.dispatchEvent(o), t.t0;
                            case 16:
                                return delete e.liveStreaming.pullStates[n], t.abrupt("return", a);
                            case 18:
                            case"end":
                                return t.stop()
                        }
                    }, t, this, [[3, 11]])
                })), function (e) {
                    return i.apply(this, arguments)
                });
                var i;
                var a;
                var c;
                var d;
                var u;
                var l;
                var p;
                var f;
                var m
            }(t, e), _e(e.turnServer) || t.setTurnServer(e.turnServer), _e(e.proxyServer) || t.setProxyServer(e.proxyServer), "live" === t.mode && (t.gatewayClient.role = "audience"), "rtc" === t.mode && (t.gatewayClient.role = "host"), t.gatewayClient.on("onMultiIP", function (e) {
                t.gatewayClient.closeGateway(), t.gatewayClient.socket = void 0, t.gatewayClient.hasChangeBGPAddress = !0, t.joinInfo.multiIP = e.option, t.gatewayClient.state = ot.CONNECTING;
                var n = function (e) {
                    r.default.info("[".concat(t.clientId, "] Joining channel: ").concat(t.channel)), t.joinInfo.cid = e.cid, t.joinInfo.uid || (t.joinInfo.uid = e.uid), t.joinInfo.uni_lbs_ip = e.uni_lbs_ip, t.joinInfo.gatewayAddr = e.gateway_addr, t.onSuccess ? t.gatewayClient.join(t.joinInfo, t.key, function (e) {
                        r.default.info("[".concat(t.clientId, "] Join channel ").concat(t.channel, " success"));
                        var n = t.onSuccess;
                        t.onSuccess = null, t.onFailure = null, n(e)
                    }, t.onFailure) : (t.gatewayClient.joinInfo = S()({}, t.joinInfo), t.gatewayClient.rejoin())
                };
                t.joinInfo.stringUid && !t.joinInfo.uid ? (t.userAccountReq && !t.userAccountReq.isFinished() && t.userAccountReq.cancel(), t.userAccountReq = Xe(joinInfo, t.gatewayClient), t.userAccountReq.then(function (e) {
                    r.default.error("getUserAccount Success ".concat(e.url, " ").concat(joinInfo.stringUid, " => ").concat(e.uid)), t.joinInfo.uid = e.uid, ze(t.joinInfo, n, t.onFailure)
                }).catch(function (e) {
                    r.default.error("getUserAccount rejected", e), t.onFailure(e)
                })) : ze(t.joinInfo, n, t.onFailure)
            }), t.gatewayClient.on("rejoin-start", function () {
                t._renewSession(), o.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    extend: {rejoin: !0},
                    cname: t.channel,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                })
            }), t.gatewayClient.on("recover", function () {
                t._renewSession(), console.log("recover", e.sessionId), o.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    extend: {recover: !0},
                    cname: t.channel,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                })
            }), t.gatewayClient.on("rejoin", function () {
                var e = t.highStreamState;
                if (r.default.debug("[".concat(t.clientId, "] Client local stream preState: ").concat(e)), t.onSuccess) {
                    var n = t.onSuccess;
                    t.onSuccess = null, t.onFailure = null, n()
                }
                !t.highStream || 0 !== e && 1 !== e || (r.default.info("[".concat(t.clientId, "] publish after rejoin")), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream, function (e) {
                    e && r.default.info("[".concat(t.clientId, "] "), e)
                }))
            }), t.gatewayClient.on("streamPublished", function (e) {
                t.hasPublished || (t.hasPublished = !0, t.gatewayClient.dispatchEvent(d({
                    type: "stream-published",
                    stream: e.stream
                })))
            }), t.gatewayClient.on("pubP2PLost", function (e) {
                r.default.debug("[".concat(t.clientId, "] Start reconnect local peerConnection: ").concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({
                    type: "stream-reconnect-start",
                    uid: t.highStream.getId()
                }), 1 === t.highStreamState && (t.highStreamState = 0, t.lowStreamState = 0), t._unpublish(t.highStream, function () {
                    t._publish(t.highStream, function () {
                        r.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection success: ").concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: t.highStream.getId(),
                            success: !0,
                            reason: ""
                        })
                    }, function (e) {
                        r.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)), t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: t.highStream.getId(),
                            success: !1,
                            reason: e
                        })
                    })
                }, function (e) {
                    r.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)), t.gatewayClient.dispatchEvent({
                        type: "stream-reconnect-end",
                        uid: t.highStream.getId(),
                        success: !1,
                        reason: e
                    })
                })
            }), t.gatewayClient.on("subP2PLost", function (e) {
                r.default.debug("[".concat(t.clientId, "] Start reconnect remote peerConnection: ").concat(e.stream.getId(), " ").concat(e.stream.subscribeOptions)), t.gatewayClient.dispatchEvent({
                    type: "stream-reconnect-start",
                    uid: e.stream.getId()
                });
                var n = e.stream.subscribeOptions;
                console.log("Re-subscribe stream", n, e.stream), t.gatewayClient.unsubscribe(e.stream, function () {
                    e.stream.subscribeOptions = n, t.gatewayClient.subscribe(e.stream, function () {
                        r.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection success: ").concat(e.stream.getId())), t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: e.stream.getId(),
                            success: !1,
                            reason: ""
                        })
                    }, function (n) {
                        r.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection failed: "), n), t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: e.stream.getId(),
                            success: !1,
                            reason: n
                        })
                    })
                }, function (n) {
                    r.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection failed: "), n), t.gatewayClient.dispatchEvent({
                        type: "stream-reconnect-end",
                        uid: e.stream.getId(),
                        success: !1,
                        reason: n
                    })
                })
            }), lt.on("networkTypeChanged", function (e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({}, e, {type: "network-type-changed"});
                t.gatewayClient.dispatchEvent(n)
            }), ie.on("recordingDeviceChanged", function (e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({}, e, {type: "recording-device-changed"});
                t.gatewayClient.dispatchEvent(n)
            }), ie.on("playoutDeviceChanged", function (e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({}, e, {type: "playout-device-changed"});
                t.gatewayClient.dispatchEvent(n)
            }), ie.on("cameraChanged", function (e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({}, e, {type: "camera-changed"});
                t.gatewayClient.dispatchEvent(n)
            }), t.gatewayClient.on("streamTypeChange", function (n) {
                var i = S()({}, n, {type: "stream-type-changed"});
                t.gatewayClient.dispatchEvent(i), o.b.reportApiInvoke(e.sessionId, {name: "streamTypeChange"})(null, JSON.stringify(n))
            }), t
        }, wt = {
            width: 640,
            height: 360,
            videoBitrate: 400,
            videoFramerate: 15,
            lowLatency: !1,
            audioSampleRate: 48e3,
            audioBitrate: 48,
            audioChannels: 1,
            videoGop: 30,
            videoCodecProfile: 100,
            userCount: 0,
            userConfigExtraInfo: {},
            backgroundColor: 0,
            transcodingUsers: []
        }, Dt = ie.getDevices, kt = K, Lt = JSON.parse(JSON.stringify(a.SUPPORT_RESOLUTION_LIST));
        t.default = {
            TranscodingUser: {uid: 0, x: 0, y: 0, width: 0, height: 0, zOrder: 0, alpha: 1},
            LiveTranscoding: wt,
            createClient: function (e) {
                var t = o.b.reportApiInvoke(null, {name: "createClient", options: arguments, tag: "tracer"});
                (e = S()({}, e || {})).codec || (e.codec = function (e) {
                    switch (e) {
                        case"h264_interop":
                            return "h264";
                        default:
                            return "vp8"
                    }
                }(e.mode));
                var n = function (e) {
                    return -1 === Ce.indexOf(e.mode) ? x.INVALID_CLIENT_MODE : -1 === Oe.indexOf(e.codec) ? x.INVALID_CLIENT_CODEC : "h264_interop" == e.mode && "h264" !== e.codec && x.CLIENT_MODE_CODEC_MISMATCH
                }(e);
                if (n) throw r.default.error("Invalid parameter setting MODE: ".concat(e.mode, " CODEC: ").concat(e.codec, " ERROR ").concat(n)), t(n), new Error(n);
                return r.default.info("Creating client, MODE: ".concat(e.mode, " CODEC: ").concat(e.codec)), function (e) {
                    switch (e.mode) {
                        case"interop":
                        case"h264_interop":
                            e.mode = "live";
                            break;
                        case"web-only":
                            e.mode = "rtc"
                    }
                }(e), t(null, e), Nt(e)
            },
            createStream: function (e) {
                var t = o.b.reportApiInvoke(null, {name: "createStream", options: arguments, tag: "tracer"});
                se(e, "StreamSpec");
                var n = e.streamID, i = e.audio, a = e.video, s = e.screen,
                    c = (e.audioSource, e.videoSource, e.cameraId), d = e.facingMode, u = e.microphoneId, l = e.mirror,
                    p = e.extensionId, f = e.mediaSource, m = e.audioProcessing;
                if (!_e(n) && !Object(te.c)(n) && !le(n, 1, 255)) throw new Error("[String streamID] Length of the string: [1,255]. ASCII characters only. [Number streamID] The value range is Uint32");
                if (ue(i, "audio"), ue(a, "video"), _e(s) || ue(s, "screen"), _e(c) || ce(c, "cameraId", 0, 255, !1), _e(d) || oe(d, "facingMode", ["user", "environment", "left", "right"]), _e(u) || ce(u, "microphoneId", 0, 255, !1), _e(p) || ce(p, "extensionId"), _e(f) || oe(f, "mediaSource", ["screen", "application", "window"]), _e(l) || ue(l, "mirror"), !_e(m)) {
                    var g = m.AGC, v = m.AEC, S = m.ANS;
                    _e(g) || ue(g, "AGC"), _e(v) || ue(v, "AEC"), _e(S) || ue(S, "ANS")
                }
                r.default.debug("Create stream");
                var I = Re(e);
                return t(), I
            },
            Logger: r.default,
            report: o.b,
            getDevices: Dt,
            getScreenSources: kt,
            getParameter: a.getParameter,
            setParameter: a.setParameter,
            checkSystemRequirements: function () {
                var e = o.b.reportApiInvoke(null, {name: "checkSystemRequirements", options: arguments, tag: "tracer"}),
                    t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                    n = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
                    i = window.WebSocket, a = !!t && !!n && !!i, s = !1;
                r.default.debug(f.getBrowserInfo(), "isAPISupport:" + a), f.isChrome() && f.getBrowserVersion() >= 58 && "iOS" !== f.getBrowserOS() && (s = !0), f.isFireFox() && f.getBrowserVersion() >= 56 && (s = !0), f.isOpera() && f.getBrowserVersion() >= 45 && (s = !0), f.isSafari() && f.getBrowserVersion() >= 11 && (s = !0), f.isEdge() && (s = !0), (f.isWeChatBrowser() || f.isQQBrowser()) && "iOS" !== f.getBrowserOS() && (s = !0), f.isSupportedPC() || f.isSupportedMobile() || (s = !1);
                var c = a && s;
                return e(null, c), c
            },
            getSupportedCodec: Ae.getSupportedCodec,
            VERSION: a.VERSION,
            BUILD: a.BUILD,
            PROFILE_TABLE: Lt,
            AUDIO_SAMPLE_RATE_32000: 32e3,
            AUDIO_SAMPLE_RATE_44100: 44100,
            AUDIO_SAMPLE_RATE_48000: 48e3,
            VIDEO_CODEC_PROFILE_BASELINE: 66,
            VIDEO_CODEC_PROFILE_MAIN: 77,
            VIDEO_CODEC_PROFILE_HIGH: 100,
            REMOTE_VIDEO_STREAM_HIGH: 0,
            REMOTE_VIDEO_STREAM_LOW: 1,
            REMOTE_VIDEO_STREAM_MEDIUM: 2
        }
    }]).default
});
