import { fetchPost, fetchGet } from '@/api/fetch'
import {API_TEST } from '@/api/api'

/**
 * [apiTestQuery 事例接口]
 * @return {[type]} [description]
 * 在别的页面应用方法如下：
 * import { apiTestQuery} from "@/api/example"

 * apiTestQuery({
                companyid:this.session.companyid
            }).then((resp) => {}
 */
export function apiTestQuery(paramter){
   return fetchPost(API_TEST, paramter);
}