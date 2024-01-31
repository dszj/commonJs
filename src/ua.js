let c = navigator.userAgent;
let d = navigator.userAgent.toLowerCase();
let e = d.match(/MicroMessenger/i) == "micromessenger";
let b = e || (!!c.match(/(iPhone|iPod|Android|ios|Mobile)/i));
export default {
    mobile: b,
    pc: !b,
    ios: !!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: c.indexOf("Android") > -1,
    weixin: e,
    weibo: c.indexOf("weibo") > -1,
    isTest : window.location.href.search(/localhost|192\.|127\.|10\./) > -1,
}
