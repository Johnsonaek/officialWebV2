/*
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-02 16:26:37
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-15 11:54:59
 */

import Axios from "axios";



function http(payload) {
    let data = payload.data;
    let headers = payload.headers || { 'Content-Type': 'application/x-www-form-urlencoded' };
    let method = payload.method || 'post';
    let url = payload.url;

    // 改变data 的数据格式
    let formData;
    if (data) {
        formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
    } else {
        formData = null
    }

    // 给url 加 域名
    url = 'http://192.168.1.103/' + url;


    return new Promise((resolve, reject) => {
        Axios({
            method,
            data: formData,
            url,
            headers
        }).then(res => {
            resolve(res.data);
            console.log("接口:", url, "的成功回调========》", res);
        }).catch(err => {
            reject(err.data);
            console.log("接口:", url, "的失败回调========》", res);
        })
    })
}



export default http;