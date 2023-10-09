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
注：不要在trigger中异步请求，客户端分享操作是同步操作

每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：
成功时："xxx:ok" ，其中xxx为调用的接口名
取消时："xxx:cancel"，其中xxx为调用的接口名

window.__wxjs_environment变量判断是否在小程序环境
 */

import wx from './sdk';

let isInit = false;

export class Wechat {

  static config(options = {}) {
    return new Promise((resolve) => {
      wx.config(options);

      wx.ready(() => {
        console.log('jssdk wx.ready ----->');
        resolve(success(0));
      });

      wx.error((err) => {
        console.log('jssdk wx.error ----->', err);
        resolve(fail(-1, err));
      });
    });
  }
  static checkJsApi(jsApiList = []) { 
    return new Promise((resolve) => {
      if(isInit) {
        wx.checkJsApi({
          jsApiList,
          success: (res) => {
            const msg = res.errMsg||'';
            if(msg.includes(':ok')) {
              resolve(true);
            }else {
              // console.log('jssdk wx.checkJsApi ----->', msg);
              resolve(false);
            }
          },
          fail: (err) => {
            console.log('jssdk wx.checkJsApi ----->', err);
            resolve(false);
          }
        });
      }else {
        resolve(fail(-1, '初始化失败'));
      }
    });
  }
  static closeWindow() { 
    wx.closeWindow();
  }
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

function success(data) {
  return {code: 0, msg: 'ok', data};
}

function fail(code, msg) {
  return {code, msg, data: null};
}