import { version } from '../package.json';
import qrcode from './qrcode.js';
import ua from './ua.js';
import para from './para.js';
import jsLoad from './jsload.js';
import vconsole from './vconsole.js';
import cookie from './cookie.js';
import storage from './storage.js';
import BGMAutoPlayMgr from './BGMAutoPlayMgr';

//控制台二维码
qrcode();
vconsole();
export default {
    v : version,
    version : version,
    ua : ua,
    getPara : para.getPara , 
    setPara : para.setPara,
    getStorage : storage.getStorage , 
    setStorage : storage.setStorage,
    jsLoad : jsLoad,
    cookie : cookie,
    BGMAutoPlayMgr : BGMAutoPlayMgr
}