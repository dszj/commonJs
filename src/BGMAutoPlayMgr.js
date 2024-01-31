/**
 * @author ccbbs
 * @file 解决安卓webview自动播放背景音乐的问题
 */
export default function BGMAutoPlayMgr/* solveAndroidBGMAutoplay */(url) {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
    this.sourceNode = null;
    this.buffer = null;
    this.isPlayingBGM = false;
    this.toggleBGM = function () {
        if (typeof this.sourceNode == 'object') {
            if (this.isPlayingBGM) {
                this.sourceNode.stop();
                this.isPlayingBGM = false;
            } else this._playSourceNode();
        }
    }
    this._playSourceNode = function () {
        const audioContext = this.audioContext;
        audioContext.resume();
        const _sourceNode = audioContext.createBufferSource();
        _sourceNode.buffer = this.buffer;
        _sourceNode.loop = true;
        _sourceNode.connect(audioContext.destination);
        _sourceNode.start(0);
        this.sourceNode = _sourceNode;
        this.isPlayingBGM = true;
    }
    let loadAndAutoPlay = (audioUrl) => {
        const audioContext = this.audioContext;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', audioUrl, true);
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = () => {
            if (xhr.status < 400 && xhr.status >= 200 && xhr.readyState === 4) {
                audioContext.decodeAudioData(xhr.response, buffer => {
                    this.buffer = buffer;
                    if(typeof WeixinJSBridge != 'undefined'){
                        WeixinJSBridge.invoke("getNetworkType", {}, () => this._playSourceNode());
                    }else{
                        this._playSourceNode()
                    }
                });
            }
        }
        xhr.send();
    }
    loadAndAutoPlay(url);
    loadAndAutoPlay = null;
}
/* 
使用示例
const bgm = new BGMAutoPlayMgr('http://192.168.1.1:8080/bgm.mp3');
function toggleBGM() {
    bgm.toggleBGM();
} 
*/