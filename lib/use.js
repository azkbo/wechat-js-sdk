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

let WechatSdkInit = false;
let WechatConst = null;

export class Wechat {

  static config(options = {}) {
    WechatConst = options;

    return new Promise((resolve) => {
      wx.config(options);

      wx.ready(() => {
        console.log('jssdk wx.ready ----->');
        WechatSdkInit = true;
        resolve(success(0));
      });

      wx.error((err) => {
        console.log('jssdk wx.error ----->', err);
        WechatSdkInit = true;
        resolve(fail(-1, err));
      });
    });
  }

  static checkJsApi(jsApiList = []) {
    return new Promise((resolve) => {
      if (WechatSdkInit) {
        wx.checkJsApi({
          jsApiList,
          success: (res) => {
            const msg = res.errMsg || '';
            if (msg.includes(':ok')) {
              resolve(true);
            } else {
              // console.log('jssdk wx.checkJsApi ----->', msg);
              resolve(false);
            }
          },
          fail: (err) => {
            console.log('jssdk wx.checkJsApi ----->', err);
            resolve(false);
          }
        });
      } else {
        resolve(fail(-1, '初始化失败'));
      }
    });
  }

  static closeWindow() {
    wx.closeWindow();
  }

  static platformApp() {

  }

  static chooseImage(options = {}) {
    return new Promise((resolve) => {
      wx.chooseImage({
        ...options,
        success: (res) => {
          resolve(success(res));
          // const msg = res.errMsg || '';
          // if (msg.includes(':ok')) {
          //   const localIds = res.localIds;
          // }
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static previewImage(options = {}) {
    return new Promise((resolve) => {
      wx.previewImage({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static uploadImage(options = {}) {
    return new Promise((resolve) => {
      wx.uploadImage({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static downloadImage(options = {}) {
    return new Promise((resolve) => {
      wx.downloadImage({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static addCard(cardList = []) {
    return new Promise((resolve) => {
      wx.addCard({
        cardList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        },
        cancel: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }

  static chooseCard(options = {}) {
    return new Promise((resolve) => {
      wx.chooseCard({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        },
        cancel: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static openCard(cardList = []) {
    return new Promise((resolve) => {
      wx.openCard({
        cardList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        },
        cancel: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static playVoice(localId = '') {
    return new Promise((resolve) => {
      wx.playVoice({
        localId,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static pauseVoice(localId = '') {
    return new Promise((resolve) => {
      wx.pauseVoice({
        localId,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static stopVoice(localId = '') {
    return new Promise((resolve) => {
      wx.stopVoice({
        localId,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static uploadVoice(options = {}) {
    return new Promise((resolve) => {
      wx.uploadVoice({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static downloadVoice(options = {}) {
    return new Promise((resolve) => {
      wx.downloadVoice({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static translateVoice(localId = '') {
    return new Promise((resolve) => {
      wx.translateVoice({
        localId,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static getNetworkType() {
    return new Promise((resolve) => {
      wx.getNetworkType({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static openLocation(options = {}) {
    return new Promise((resolve) => {
      wx.openLocation({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static getLocation(tag = 'wgs84') {
    return new Promise((resolve) => {
      wx.getLocation({
        type: tag,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static startSearchBeacons(ticket) {
    return new Promise((resolve) => {
      wx.startSearchBeacons({
        ticket,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static stopSearchBeacons() {
    return new Promise((resolve) => {
      wx.stopSearchBeacons({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static onSearchBeacons(callback) {
    wx.onSearchBeacons({
      menuList,
      success: (res) => {
        callback(res);
      },
      fail: (err) => {
        callback(null, err);
      }
    });
  }
  static hideOptionMenu(menuList = []) {
    return new Promise((resolve) => {
      wx.hideOptionMenu({
        menuList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static showOptionMenu(menuList=[]) {
    return new Promise((resolve) => {
      wx.showOptionMenu({
        menuList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static hideMenuItems(menuList = []) {
    return new Promise((resolve) => {
      wx.hideMenuItems({
        menuList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static showMenuItems(menuList = []) {
    return new Promise((resolve) => {
      wx.showMenuItems({
        menuList,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static scanQRCode(options = {}) {
    return new Promise((resolve) => {
      wx.scanQRCode({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static stopRecord() {
    return new Promise((resolve) => {
      wx.stopRecord({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static startRecord() {
    return new Promise((resolve) => {
      wx.startRecord({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static onVoicePlayEnd(callback) {
    wx.onVoicePlayEnd({
      success: (res) => {
        callback(res);
      },
      fail: (err) => {
        callback(null, err);
      }
    });
  }
  static onVoiceRecordEnd(callback) {
    wx.onVoiceRecordEnd({
      success: (res) => {
        callback(res);
      },
      fail: (err) => {
        callback(null, err);
      }
    });
  }
  static hideAllNonBaseMenuItem() {
    return new Promise((resolve) => {
      wx.hideAllNonBaseMenuItem({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static showAllNonBaseMenuItem() {
    return new Promise((resolve) => {
      wx.showAllNonBaseMenuItem({
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
  static updateTimelineShareData(options = {}) {
    return new Promise((resolve) => {
      wx.updateTimelineShareData({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      })
    });
  }
  static updateAppMessageShareData(options = {}) {
    return new Promise((resolve) => {
      wx.updateAppMessageShareData({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      })
    });
  }
  static openProductSpecificView(options = {}) {
    return new Promise((resolve) => {
      wx.openProductSpecificView({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      })
    });
  }
  static chooseWXPay(options = {}) {
    return new Promise((resolve) => {
      wx.chooseWXPay({
        ...options,
        success: (res) => {
          resolve(success(res));
        },
        fail: (err) => {
          resolve(fail(-1, err));
        }
      });
    });
  }
}

function success(data) {
  return { code: 0, msg: 'ok', data };
}

function fail(code, msg) {
  return { code, msg, data: null };
}