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
    wx.navigateTo({
      url: '/pages/bj/bj',
    })
  },
  pushcd: function () {
    wx.navigateTo({
      url: '/pages/cd/cd',
    })
  },
  pushsh: function () {
    wx.navigateTo({
      url: '/pages/sh/sh',
    })
  },
  pushtj: function () {
    wx.navigateTo({
      url: '/pages/tj/tj',
    })
  },
  

})