import axios from 'axios'
// import Cookies from 'js-cookie';
/**
 * [fetchPost description]
 * @param  {[type]} url      [description]
 * @param  {[type]} paramter [description]
 * @param  {[type]} isRemoveData [是否移除data isRemoveData=true=删除data key]
 * @return {[type]}          [description]
 */

export function fetchPost(url, paramter,isRemoveData) {
    // let csrfToken = Cookies.get('csrfToken');
    let data = null;
    if(isRemoveData){
        data = paramter;
    } else {
        data = 'data='+ encodeURIComponent(JSON.stringify(paramter));
    }
    return axios({
        headers: {
            // 'x-csrf-token': csrfToken,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        method: 'post',
        url: url,
        data:data
    }).then(response => {
        return response.data;
    });
}

/**
 * [fetchGet description]
 * @param  {[type]} url      [description]
 * @param  {[type]} paramter [description]
 * @param  {[type]} isRemoveData [是否移除data isRemoveData=true=删除data key]
 */
export function fetchGet(url, paramter,isRemoveData) {
    // let csrfToken = Cookies.get('csrfToken');
    // console.log(url);
    let data = null;
    if(isRemoveData){
        data = paramter;
    } else {
        data = {data:JSON.stringify(paramter)};
    }
    return axios({
        headers: {
            // 'x-csrf-token': csrfToken,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        // headers: {'x-csrf-token': csrfToken},
        method: 'get',
        url: url,
        params: data
    }).then(response => {
        return response.data;
    });
}
