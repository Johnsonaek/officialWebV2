/*
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-05 09:54:17
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-05 10:17:32
 */

export const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
export const isMobile = (s) => {
        return /^1[0-9]{10}$/.test(s)
    }
    //是否是六位验证码
export const isCode6 = (s) => {
    return /^[0-9]{6}$/.test(s)
}