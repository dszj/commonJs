import ua from './ua.js';
import para from './para.js';
import jsLoad from './jsload.js';

export default function(){
    const c = ua;
    const d = ua.isTest;
    const e = !(navigator.platform.indexOf("Win") === 0 || navigator.platform.indexOf("Mac") === 0);
    if (!e) {
        // return
    }
    const b = para.getPara("vconsole");
    if ((c.mobile && d && b !== "false") || b === "true") {
        jsLoad(["https://cdn.jsdelivr.net/npm/vconsole@3.15.1/dist/vconsole.min.js"], function() {
            var f = new VConsole()
        })
    }
}