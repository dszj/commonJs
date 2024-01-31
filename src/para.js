let getPara = function(e) {
    var d = location.search;
    var c = new RegExp("[&|?]" + e + "=([^&$]*)","gi");
    var b = c.test(d);
    return b ? RegExp.$1 : ""
}
let setPara = function(arg,arg_val,url){ 
    var pattern=arg+'=([^&]*)'; 
    var replaceText=arg+'='+arg_val; 
    var url = !!url ? url : location.href.toString();
    if(url.match(pattern)){ 
        // var tmp='/('+ arg+'=)([^&]*)/gi'; 
        // tmp=url.replace(eval(tmp),replaceText); 
        var tmp='('+ arg+'=)([^&]*)';
        tmp=url.replace(new RegExp(tmp,'gi'),replaceText); 
        return tmp; 
    }else{ 
        if(url.substring(url.length-1) == "#")url=url.substring(0,url.length-1);
        if(url.match('[\?]')){ 
            return url+'&'+replaceText; 
        }else{ 
            return url+'?'+replaceText; 
        } 
    } 
    return url+'\n'+arg+'\n'+arg_val; 
} 


export default {
    getPara , setPara
};