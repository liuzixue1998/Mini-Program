<<<<<<< HEAD
//index.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['  ', '  ', '  ', '  ']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  change1: function () {
=======
var app = getApp();
var searchValue = ''


Page({
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分 
    searchstr: '',
    centent_Show: true,
    searchValue: '',
    img: '',
    nanshen_card: ''
  },
  onLoad() {

  },
  onShow() {

  },

  tap(e) {

  },

  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },
  pushbj: function () {
>>>>>>> 0a9d1a0eed7226794cdf9c8eaf1876995d75b2d2
    wx.navigateTo({
      url: '/pages/bj/bj',
    })
  },
<<<<<<< HEAD
  change2: function () {
=======
  pushcd: function () {
>>>>>>> 0a9d1a0eed7226794cdf9c8eaf1876995d75b2d2
    wx.navigateTo({
      url: '/pages/tj/tj',
    })
  },
<<<<<<< HEAD
  change3: function () {
=======
  pushsh: function () {
>>>>>>> 0a9d1a0eed7226794cdf9c8eaf1876995d75b2d2
    wx.navigateTo({
      url: '/pages/sh/sh',
    })
  },
<<<<<<< HEAD
  change4: function () {
=======
  pushtj: function () {
>>>>>>> 0a9d1a0eed7226794cdf9c8eaf1876995d75b2d2
    wx.navigateTo({
      url: '/pages/cd/cd',
    })
  },
<<<<<<< HEAD

  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})
=======
  

})
>>>>>>> 0a9d1a0eed7226794cdf9c8eaf1876995d75b2d2
