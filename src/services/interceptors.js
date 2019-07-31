import {dynamicProjectName, removeWxSession,removeToken,setToken,getToken,KEYS,setAuthorizeCount,getAuthorizeCount} from "./config"


export default function (axios){
    // Add a request interceptor
    axios.interceptors.request.use( config => {
        let token = getToken();
        if(!config.headers){
            config.headers = {};
        }
        if(token){
            config.headers[KEYS.HEADER_KEY_TOKEN] = token;
        }
        // console.log(config,"config");
        return config;
    }, error => {
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use( response => {
        if(response.headers && response.headers[KEYS.HEADER_KEY_REFRESH_TOKEN]){
            setToken(response.headers[KEYS.HEADER_KEY_REFRESH_TOKEN]);
        }
        if(response.data){
            const result = response.data;
            if(result.ret === 1000 || result.ret === 10){
                if(window.location.href.indexOf('/authorize') == -1 ){
                    // window.location.href="http://172.16.19.113:8080/#/reauthorize";
                    let fromUrl = escape(window.location.href);
                    removeToken();
                    removeWxSession();
                    let count = getAuthorizeCount();
                    if(count>8){
                        window.location.href=`${window.location.origin}${dynamicProjectName}/h5.html#/reauthorize`
                    } else {
                        setAuthorizeCount();
                        let testUrl = `${window.location.origin}${dynamicProjectName}/h5.html?fromUrl=${fromUrl}#/authorize`;
                        // console.log("testUrl",testUrl);
                        window.location.href=testUrl
                    }
                }
            }
        }
        return response;
    }, error => {
        return Promise.reject(error);
    });
}
