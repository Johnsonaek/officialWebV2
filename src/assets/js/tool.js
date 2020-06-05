/*
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-05 09:54:17
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-05 17:00:13
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
    //是否是正确姓名
    /**
	 * 1.可以是中文
	   2.可以是英文，允许输入点（英文名字中的那种点）， 允许输入空格
           3.中文和英文不能同时出现
           4.长度在20个字符以内
	 */

export const isName = (s) => {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(s)
}