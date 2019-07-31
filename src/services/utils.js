import _ from 'lodash'
import axios from 'axios'

/**
 * [pcaVerify 验证省市区]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 合法数据 广东省-北京区 ，广东省-北京区-何方去
 * 不合法数据： 广东省-北京区-、 广东省-北京区-何 、广东省-北京
 */
export function verifyPca(value) {
    return /^[\u4e00-\u9fa5]{2,8}-[\u4e00-\u9fa5]{2,20}(-[\u4e00-\u9fa5]{2,20}){0,1}$/.test(value)
}

/**
 * [timeHHmmss 验证24小时]
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 * @des 合法数据 00:00:00 23:59:59 23:56 12:45
 */
export function verifyTimeHHmmss(val) {
    return /(^0\d|^[1]\d|^[2][0-3])(\:[0-5]\d){1,2}/.test(val);
}

/**
 * [dateYYMMDD 匹配年月日]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 合法数据 2015-06-15
 */
export function verifyDateYYMMDD(val) {
    return /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(val)
}

/**
 * [合法电话号码]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * 最小7位，最大18位
 */
export function verifyTelphone(val) {
    return /^[0-9-()（）]{7,18}$/.test(val)
}
/**
 * [合法手机号]
 * @param  {[type]} value [description]
 * @returns {boolean}
 * @des
 */
export function verifyMobilephone(val) {
    return /^1[3|4|5|7|8|][0-9]{9}$/.test(val)
}

/**
 * [身份证号验证]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export function verifyIdcard(val) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)
}
/**
 * [车牌号码验证]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export function verifyVehicleNumber(val) {
    return /(^[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$)/.test(val)

}

/**
 * [银行卡号基本验证：16或19位非0开头]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export function verifyBankAccount(val) {
    return /(^([1-9]{1})(\d{18}|\d{15})$)/.test(val)

}

/**
 * [email 验证]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export function verifyEmail(val) {
    return /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(val)
}

/**
 * [nameVerify description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 不合法数据：含特殊字符
 * @note 不验证undefined
 */
export function verifyName(val) {
    return /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(val)
}

/**
 * [letterNumber 匹配字母或数字，包括大小写]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des A5454
 */
export function verifyLetterNumber(val) {
    return /^[a-z0-9]+$/i.test(val)
}
/**
 * [合法金额]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 合法数据 0,0.12,1.23，12345678912.12,12345678912
 * @des 不合法数据 00,0.212,1.123，123456789123.12,123456789123
 * @支持整数位数最大11位，小数2位
 */
export function verifyPrice(val) {
    return /^[1-9]\d{0,10}\.\d{1,2}$|0\.\d{1,2}$|^[1-9]\d{0,10}$|^0$/.test(val)
}
/**
 * [合法金额]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 合法数据 0,0.12,1.23，12345678912.12,12345678912
 * @des 不合法数据 00,0.212,1.123，123456789123.12,123456789123
 * @支持整数位数最大8位，小数2位
 */
export function verifyPriceTen(val) {
    return /^[1-9]\d{0,7}\.\d{1,2}$|0\.\d{1,2}$|^[1-9]\d{0,7}$|^0$/.test(val)
}
/**
 * @param value
 * @returns {boolean}
 * @des 合法数据：非0正整数,长度最大无限制
 * @des 不合法数据：0
 */
export function verifyNotZeroInteger(val) {
    return /^[1-9]\d*$/.test(val)
}
/**
 * @param value
 * @returns {boolean}
 * @des 合法数据：非0正整数,长度最大为11位
 * @des 不合法数据：0，123456789123
 */
export function verifyNotZeroLimitInteger(val) {
    return /^[1-9]\d{0,10}$/.test(val)
}
/**
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 * @des 合法数据：123456789.123456，0.123456
 * @des 不合法数据 123456789.1234567，1234567891
 * @支持整数位数最大10位，小数6位
 */
export function verifyNotZeroSixFloat(val) {
    return /^[1-9]\d{0,8}\.\d{0,6}$|0\.\d{1,6}$|^[1-9]\d{0,8}$/.test(val)
}

/**
 * @param value
 * @returns {boolean}
 * @des 合法数据：含0正整数,长度最大为11位
 * @des 不合法数据：123456789123
 */
export function verifyZeroLimitInteger(val) {
    return /^[1-9]\d{0,10}$|^0$/.test(val)
}

/**
 * @param value
 * @returns {boolean}
 * @des 不合法数据：0,0.12,100
 * @des 合法数据：0.10
 */
export function verifyFloat(val) {
    return /^[1-9]\d*\.\d+$|0\.\d*[1-9]\d*$|^[1-9]\d*$/.test(val)
}


export function verifyNumber(val){
    return /^[0-9]*$/.test(val)
}
/**
 * @param value
 * @returns {boolean}
 * @des 合法数据：小数点后最多保留两位的正数
 */
export function verifyFloatTwo(val) {
    return /^([1-9]\d*|0)(\.\d{1,2})?$/.test(val)
}
/**
 * @param value
 * @returns {boolean}
 * @des 合法数据: 0,0.10,100
 * @des 不合法数据: 0.0,-21,21.2
 */
export function verifyFloatZero(val) {
    return /^[1-9]\d*\.\d+$|0\.\d*[1-9]\d*$|^[1-9]\d*$|^0$/.test(val)
}

/**
 * [appendHTML description]
 * @param  {[String]} ele  [例如:#btn,body]
 * @param  {[String]} html [html文本]
 * @return {[type]}      [description]
 */
export function appendHTML(ele, html) {
    var fatherNode = document.querySelector(ele);
    if (!fatherNode) {
        return;
    }
    var divTemp = document.createElement('div');
    var nodes = null;
    var fragment = document.createDocumentFragment();
    divTemp.innerHTML = html || '';
    nodes = divTemp.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        fragment.appendChild(nodes[i].cloneNode(true));
    }
    fatherNode.appendChild(fragment);
    nodes = null, fragment = null;
}

/**
 * @description 事件绑定，兼容各浏览器
 * @param target
 * 事件触发对象
 * @param type
 * 事件
 * @param func
 * 事件处理函数
 * @N
 */
export function addEvent(target, type, func, boolean) {
    var bln = boolean || false; //是否捕获事件
    if (target.addEventListener) {
        target.addEventListener(type, func, bln);
    } else if (target.attachEvent) {
        target.attachEvent('on' + type, func);
    } else {
        target["on" + type] = func;
    }
}
/**
 * [getScroll description]
 * @param  {[type]} target [description]
 * @param  {[type]} top    [description]
 * @return {[type]}        [description]
 */
export function getScroll(target, top) {
    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    let ret = target[prop];
    if (typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }
    return ret;
}

/**
 * @description 事件移除，兼容各浏览器
 * @param target
 * 事件触发对象
 * @param type
 * 事件
 * @param func
 * 事件处理函数
 * @N
 */
export function removeEvent(target, type, func, boolean) {
    var bln = boolean || false;
    if (target.removeEventListener) {
        target.removeEventListener(type, func, bln);
    } else if (target.detachEvent) {
        target.detachEvent('on' + type, func);
    } else {
        target["on" + type] = null;
    }
}

/**
 * @description 是否有类
 * @param elem
 * 事件触发对象
 * @param cls
 * 类名
 * @N
 */

function hasClass(elem, cls) {
    var classname = elem.className,
        re = new RegExp("(?:^|\\s)" + cls + "(?:\\s|$)");
    return elem && cls && classname && re.test(classname);
}
export { hasClass }

/**
 * @description 添加类
 * @param elem
 * 事件触发对象
 * @param cls
 * 类名
 * @N
 */
export function addClass(elem, cls) {
    if (hasClass(elem, cls)) {
        return;
    }
    if (elem.className.length) {
        var cln = elem.className.split(" ");
        cln.push(cls);
        elem.className = cln.join(" ");
    } else {
        elem.className = cls;
    }
}


/**
 * @description 移除类
 * @param elem
 * 事件触发对象
 * @param cls
 * 类名
 * @N
 */
export function removeClass(elem, cls) {
    var reg = new RegExp("(^|\\s)" + cls + "(\\s|$)");
    if (elem.className) {
        elem.className = (elem.className.split(' ').length <= 2) ? elem.className.replace(reg, '') : elem.className.replace(reg, ' ');
    } else {
        elem.className = elem.className.replace(reg, '');
    }
}

/**
 * @description  获取类对象，返回数组
 * @param cls
 * 事件触发对象
 * @param tagName
 * 标签名
 * @N
 */
export function getClassNameEle(cls, tagName) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(cls);
    } else {
        var nodes = document.getElementsByTagName(tagName),
            ret = [];
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].className.match(cls)) {
                ret.push(nodes[i]);
            }
        }
        return ret;
    }
}

/**
 * [getRectWidth 获取宽度]
 * @param  {[type]} ele [description]
 */
export function getRectWidth(ele) {
    var width = 0;
    if (ele.getBoundingClientRect) {
        width = ele.getBoundingClientRect().width;
    } else {
        width = ele.offsetWidth;
    }
    return width;
}

/**
 * [getRectHeight 获取高度]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
export function getRectHeight(ele){
    var height = 0;
    if(ele.getBoundingClientRect){
        height = ele.getBoundingClientRect().height;
    } else {
        height = ele.offsetHeight;
    }
    return height;
}

/**
 * @description  获取上一个元素
 * @N
 */
export function prev(elem) {
    do {
        elem = elem.previousSibling
    } while (elem && elem.nodeType != 1)
    return elem;
}

/**
 * @description  获取下一个元素
 * @N
 */
export function next(elem) {
    do {
        elem = elem.nextSibling
    } while (elem && elem.nodeType != 1)
    return elem;
}

/**
 * @description  获取元素样式
 * eg: getStyle(this.$refs.el, 'left')
 */
export function getStyle(e, attr) {
    if (e.currentStyle) {
        return e.currentStyle[attr]
    } else {
        return getComputedStyle(e)[attr]
    }
}


/**
 * [serialize 浅层序列化]
 * @param  {[type]} sessionflag [description]
 * @param  {[type]} parameter   [description]
 * @return {[type]}             [description]
 */
export function serialize(parameter){
    var arr = [];
    Object.keys(parameter).forEach((key) => {
        arr.push(key + '=' + parameter[key]);
    });
    return arr.join('&');
}

/**
 * @description 获取url参数
 * @对含有中文字符的必须使用escape编码
 */
export function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

/**
 * @param arr 查找数组
 * @param property 查找属性
 * @param value 查找值
 * @des:查找到值后返回其值
 */
export function findArrayReturnValue(arr, property, value, findKey) {
    let len,
        findValue;
    if (!Array.isArray(arr)) {
        return;
    }
    len = arr.length;
    for (var i = 0; i < len; i++) {
        if (arr[i].hasOwnProperty(property) && arr[i][property] == value && arr[i].hasOwnProperty(findKey)) {
            findValue = arr[i][findKey];
            break;
        }
    }
    return findValue;
}
