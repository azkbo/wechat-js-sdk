/**
 * Author: Meng
 * Date: 2023-10-08
 * Modify: 2023-10-08
 * Desc:
 */

// 返回结果
type Result = {
  code: number;
  msg: string;
  data: any;
};

// 初始化参数
type ConfigBody = {
  debug?: boolean; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: string; // 必填，公众号的唯一标识
  timestamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名
  jsApiList: Array<string>; // 必填，需要使用的JS接口列表
};

// 分享参数
type ShareBody = {
  title: string; // 分享标题
  desc?: string; // 分享描述
  link: string; // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: string; // 分享图标
  trigger?: (res: any) => void;
};

// type SizeType = ['original', 'compressed'];
// 选择照片
type ImageBody = {
  count: number; // 默认9
  base64: boolean; // 默认base64编码图片，可选为blob
  sizeType: Array<string>; // 可以指定是原图还是压缩图，默认二者都有
  sourceType: Array<string>; // 可以指定来源是相册还是相机，默认二者都有
};

// 预览照片
type PreviewBody = {
  current: string; // 当前显示图片的http链接
  urls: Array<string>;
};

// 下载图片参数
type DownUploadBody = {
  serverId?: string;
  localId?: string; // 需要上传的图片的本地ID，由chooseImage接口获得
  isShowProgressTips: number; // 默认为1，显示进度提示
};

// 定位参数
type LocationBody = {
  latitude: number; // 纬度，浮点数，范围为90 ~ -90
  longitude: number; // 经度，浮点数，范围为180 ~ -180。
  name: string; // 位置名
  address: string; // 地址详情说明
  scale: number; // 地图缩放级别,整型值,范围从1~28。默认为最大
  infoUrl: string; // 在查看位置界面底部显示的超链接,可点击跳转
};
// 扫码参数
type ScanBody = {
  needResult: number; // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  scanType: Array<string>; // ["qrCode","barCode"] 可以指定扫二维码还是一维码，默认二者都有
};

type ProductBody = {
  productId: string; // 商品id
  viewType: string; // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
};

type CradBody = {
  shopId: string; // 门店Id
  cardType: string; // 卡券类型
  cardId: string; // 卡券Id
  timestamp: number; // 卡券签名时间戳
  nonceStr: string; // 卡券签名随机串
  signType: string; // 签名方式，默认'SHA1'
  cardSign: string; // 卡券签名
};

type CardList = {
  cardId: string;
  cardExt: string;
};

type CardList2 = {
  cardId: string;
  code: string;
};

type PayBody = {
  timestamp: number; // 1414723227
  nonceStr: string;
  package: string; //
  signType: string; // 'SHA1' 注意：新版支付接口使用 MD5 加密
  paySign: string; // 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
};

export declare class Wechat {
  /**
   * 初始化SDK
   */
  public static config(body: ConfigBody): Promise<Result>;

  /**
   * 判断当前客户端版本是否支持指定JS接口
   */
  public static checkJsApi(list: string[]): Promise<boolean>;

  /**
   * 判断当前客户端容器平台
   */
  public static platformApp(list: string[]): Promise<string>;

  /**
   * 关闭当前网页窗口接口
   */
  public static closeWindow(): Promise<Result>;

  /**
   * 拍照或从手机相册中选图接口
   */
  public static chooseImage(body: ImageBody): Promise<Result>;

  /**
   * 预览图片
   */
  public static previewImage(body: PreviewBody): Promise<Result>;

  /**
   * 上传图片
   */
  public static uploadImage(body: DownUploadBody): Promise<Result>;

  /**
   * 下载下载
   */
  public static downloadImage(body: DownUploadBody): Promise<Result>;

  /**
   * 获取本地图片base64编码
   */
  // public static getLocalImgData(localId: string): Promise<Result>;

  /**
   * 批量添加卡券接口
   */
  public static addCard(list: Array<CardList>): Promise<Result>;

  /**
   * 拉取适用卡券列表并获取用户选择信息
   */
  public static chooseCard(body: CradBody): Promise<Result>;

  /**
   * 查看微信卡包中的卡券接口
   */
  public static openCard(list: Array<CardList2>): Promise<Result>;

  /**
   * 播放语音接口
   */
  public static playVoice(localId: string): Promise<Result>;

  /**
   * 暂停播放接口
   */
  public static pauseVoice(localId: string): Promise<Result>;

  /**
   * 停止播放接口
   */
  public static stopVoice(localId: string): Promise<Result>;

  /**
   * 上传语音接口
   */
  public static uploadVoice(body: DownUploadBody): Promise<Result>;

  /**
   * 下载语音接口
   */
  public static downloadVoice(body: DownUploadBody): Promise<Result>;

  /**
   * 识别音频并返回识别结果接口
   */
  public static translateVoice(localId: string): Promise<Result>;

  /**
   * 获取网络状态接口 -2g，3g，4g，wifi
   */
  public static getNetworkType(): Promise<Result>;

  /**
   * 使用微信内置地图查看位置接口
   */
  public static openLocation(body: LocationBody): Promise<Result>;

  /**
   * 获取地理位置接口
   */
  public static getLocation(tag: string): Promise<Result>;

  /**
   * 开启查找周边ibeacon设备接口
   */
  public static startSearchBeacons(ticket: string): Promise<Result>;

  /**
   * 关闭查找周边ibeacon设备接口
   */
  public static stopSearchBeacons(): Promise<Result>;

  /**
   * 监听查找周边ibeacon设备接口
   */
  public static onSearchBeacons(callback: (res: any) => void): Promise<Result>;

  /**
   * 隐藏右上角菜单
   */
  public static hideOptionMenu(): Promise<Result>;

  /**
   * 显示右上角菜单
   */
  public static showOptionMenu(): Promise<Result>;
  /**
   * 批量隐藏功能按钮接口
   */
  public static hideMenuItems(menuList: string[]): Promise<Result>;
  /**
   * 批量显示功能按钮接口
   */
  public static showMenuItems(menuList: string[]): Promise<Result>;

  /**
   * 调起微信扫一扫接口
   */
  public static scanQRCode(body: ScanBody): Promise<Result>;

  /**
   * 停止录音接口
   */
  public static stopRecord(): Promise<Result>;

  /**
   * 开始录音接口
   */
  public static startRecord(): Promise<Result>;

  /**
   * 监听语音播放完毕接口
   */
  public static onVoicePlayEnd(callback: (res: any) => void): Promise<Result>;

  /**
   * 监听录音自动停止接口
   */
  public static onVoiceRecordEnd(callback: (res: any) => void): Promise<Result>;

  // public static onMenuShareQZone(): Promise<Result>;

  /**
   * 隐藏所有非基础按钮接口
   */
  public static hideAllNonBaseMenuItem(): Promise<Result>;

  /**
   * 显示所有功能按钮接口
   */
  public static showAllNonBaseMenuItem(): Promise<Result>;

  /**
   * 分享到朋友圈
   */
  public static updateTimelineShareData(body: ShareBody): Promise<Result>;

  /**
   * 分享给朋友
   */
  public static updateAppMessageShareData(body: ShareBody): Promise<Result>;

  /**
   * 跳转微信商品页接口
   */
  public static openProductSpecificView(body: ProductBody): Promise<Result>;

  /**
   * 微信支付
   */
  public static chooseWXPay(body: PayBody): Promise<Result>;
}
