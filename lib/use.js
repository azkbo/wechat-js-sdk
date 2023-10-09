/**
 * Author: Meng
 * Date: 2023-10-08
 * Modify: 2023-10-08
 * Desc: 
updateAppMessageShareData
updateTimelineShareData
onMenuShareQZone
startRecord
stopRecord
onVoiceRecordEnd
playVoice
pauseVoice
stopVoice
onVoicePlayEnd
uploadVoice
downloadVoice
chooseImage
previewImage
uploadImage
downloadImage
getLocalImgData
translateVoice
getNetworkType
openLocation
getLocation
hideOptionMenu
showOptionMenu
hideMenuItems
showMenuItems
hideAllNonBaseMenuItem
showAllNonBaseMenuItem
closeWindow
scanQRCode
openProductSpecificView
addCard
chooseCard
openCard
chooseWXPay

调用说明:
所有接口通过wx对象(也可使用 jWeixin对象)来调用，除了每个接口本身需要传的参数之外，还可加参数：

success：接口调用成功时执行的回调函数。
fail：接口调用失败时执行的回调函数。
complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。
cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
备注：不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回。

每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：
调用成功时："xxx:ok" ，其中xxx为调用的接口名
用户取消时："xxx:cancel"，其中xxx为调用的接口名

window.__wxjs_environment变量判断是否在小程序环境
 */

import wx from './sdk';

let isInit = false;

export class Wechat {

  static config(options = {}) { }
  static checkJsApi(apis = []) { }
  static closeWindow() { }
  static platformApp() { }
  static chooseImage(options = {}) { }
  static previewImage(options = {}) { }
  static uploadImage(options = {}) { }
  static downloadImage(options = {}) { }
  static addCard(cards = []) { }
  static chooseCard(options = {}) { }
  static openCard(cards = []) { }
  static playVoice(localId = '') { }
  static pauseVoice(localId = '') { }
  static stopVoice(localId = '') { }
  static uploadVoice(options = {}) { }
  static downloadVoice(options = {}) { }
  static translateVoice(localId = '') { }
  static getNetworkType(options = {}) { }
  static openLocation(options = {}) { }
  static getLocation(tag = '') { }
  static startSearchBeacons(ticket) { }
  static stopSearchBeacons() { }
  static onSearchBeacons(callback) { }
  static hideOptionMenu(options = {}) { }
  static showOptionMenu(options = {}) { }
  static hideMenuItems(menus = []) { }
  static showMenuItems(menus = []) { }
  static scanQRCode(options = {}) { }
  static stopRecord() { }
  static startRecord() { }
  static onVoicePlayEnd(callback) { }
  static onVoiceRecordEnd(callback) { }
  static hideAllNonBaseMenuItem() { }
  static showAllNonBaseMenuItem() { }
  static updateTimelineShareData(options = {}) { }
  static updateAppMessageShareData(options = {}) { }
  static openProductSpecificView(options = {}) { }
  static chooseWXPay(options = {}) { }


}