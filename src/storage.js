let setStorage = function(k,v) {
    let tem = {
        value:v,
        time:new Date().getTime()
    }
    tem = JSON.stringify(tem);
    localStorage.setItem(k,tem);
}
let getStorage = function(k,time){ 
    let tem = localStorage.getItem(k);
    if(!tem){return ''}
    tem = JSON.parse(tem);
    if(!time){
        time = new Date().getTime();
    }
    if(new Date().getTime() - tem.time > time){
        return ''
    }
    return tem.value;
} 


export default {
    setStorage , getStorage
};