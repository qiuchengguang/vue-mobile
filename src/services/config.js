/**
 * [xlren 项目名称]
 */

const projectName = "/logisticsmgtweb";
const dynamicProjectName = process.env.NODE_ENV === 'development' ? "":"/logisticsmgtweb";

const WX_SESSION = "WX_SESSION"
const WX_AUTH_INFO = "WX_AUTH_INFO";
const WX_APP_ID = "wx443e606c968163bf"
const WX_APP_SECRET = ""
// const WX_REDIRECT_URI =  +"http://172.16.19.113:8080/#/reauthorize"
const WX_REDIRECT_URI = `${window.location.origin}${dynamicProjectName}/h5.html`

const KEYS = {
    HEADER_KEY_TOKEN:"Authorization",
    HEADER_KEY_REFRESH_TOKEN:"refreshtoken",
    SEARCH_HISTORY:'SEARCH_HISTORY',
    AUTHORIZE_COUNT:'AUTHORIZE_COUNT'
}

/**
 * [WX_MENU 微信菜单配置]
 * @type {Object}
 */
const WX_MENU = {
    1:"/sendgoods",
    2:"/my",
    3:"/orders",
    4:"/collect",
    5:"/search-orders"
}

/**
 * [setSession 设置session]
 * @param {[type]} info [description]
 */
function setWxSession(info){
    if(typeof info != 'string'){
        info = JSON.stringify(info);
    }
    window.localStorage.setItem(WX_SESSION, info);
}

/**
 * [setSession 获取session]
 * @param {[type]} info [description]
 */
function getWxSession(info){
    let session;
    try {
        let userInfo = window.localStorage.getItem(WX_SESSION);
        session = JSON.parse(userInfo);
        if(!session){
            window.location.href= `${dynamicProjectName}/h5.html`;
        }
    } catch (e) {
        console.error("解析session数据失败");
        window.location.href= `${dynamicProjectName}/h5.html`;
    }
    return session;
}

/**
 * [setSession 设置session]
 * @param {[type]} info [description]
 */
function removeWxSession(info){
    if (window.localStorage) {
        localStorage.removeItem(WX_SESSION)
    } else {
        console.error("您的浏览器你不支持localStorage");
    }
}


/**
 * [获取登陆 session]
 * @return {[type]} [description]
 */
function setToken(token) {
    if(!token){
        return;
    }
    if (window.localStorage) {
        localStorage.setItem(KEYS.HEADER_KEY_TOKEN, token);
    } else {
        console.error("您的浏览器你不支持localStorage");
    }
};

/**
 * [获取登陆 session]
 * @return {[type]} [description]
 */
function getToken() {
    if (window.localStorage) {
        return localStorage.getItem(KEYS.HEADER_KEY_TOKEN);
    } else {
        console.error("您的浏览器你不支持localStorage");
    }
};


/**
 * [removeToken 移除Token]
 * @param {[type]} info [description]
 */
function removeToken(){
    if (window.localStorage) {
        localStorage.removeItem(KEYS.HEADER_KEY_TOKEN)
    } else {
        console.error("您的浏览器你不支持localStorage");
    }
}

/**
 * [setAuthorizeCount 设置授权次数]
 * @return {[type]} [description]
 */
function setAuthorizeCount(){
    let count = getAuthorizeCount();
    count++;
    return localStorage.setItem(KEYS.AUTHORIZE_COUNT,count);
}

/**
 * [getAuthorizeCount 获取授权次数]
 * @return {[type]} [description]
 */
function getAuthorizeCount(){
    return Number(localStorage.getItem(KEYS.AUTHORIZE_COUNT)) || 0;
}

/**
 * [removeAuthorizeCount 删除授权次数]
 */
function removeAuthorizeCount(info){
    localStorage.removeItem(KEYS.AUTHORIZE_COUNT)
}

/**
 * [setSearchHistory 设置查询历史记录]
 * @param {[type]} info [description]
 */
function setSearchHistory(info){
    let session = getWxSession();
    let obj = {},objStr;
    if(!session || !session.staffid || !info || !info.length){
        return;
    }
    if(info.length>20){
        info = info.filter((item,index) => {
            return index != 0;
        })
    }
    obj[session.staffid] = info;
    objStr = JSON.stringify(obj);
    window.localStorage.setItem(KEYS.SEARCH_HISTORY, objStr);
}

/**
 * [getSearchHistory 获取历史记录]
 * @param {[type]} info [description]
 */
function getSearchHistory(info){
    let session = getWxSession();
    let history = [];
    let objHistory;
    if(!session || !session.staffid){
        return history;
    }
    try {
        let objStr = window.localStorage.getItem(KEYS.SEARCH_HISTORY);
        objHistory = JSON.parse(objStr);
        if(objHistory && objHistory[session.staffid]){
            history = objHistory[session.staffid];
        }
    } catch (e) {
        return history;
    }
    return history;
}

/**
 * 获取项目名
 */
export {
    projectName,
    dynamicProjectName,

    setToken,
    getToken,
    removeToken,

    setWxSession,
    getWxSession,
    removeWxSession,
    setSearchHistory,
    getSearchHistory,

    setAuthorizeCount,
    getAuthorizeCount,
    removeAuthorizeCount,

    KEYS,

    WX_MENU,
    WX_AUTH_INFO,
    WX_APP_ID,
    WX_REDIRECT_URI
}
