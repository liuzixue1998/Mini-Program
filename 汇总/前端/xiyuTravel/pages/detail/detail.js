// detail js
//引入本地json数据，这里引入的就是第一步定义的json数据
var getData = require('../../data/data.js');
let wxparse = require("../../wxParse/wxParse.js");
let app = getApp();
Page({

  data: {
    dkheight: 300,
    dkcontent: "",
    leassonTilte: '',
    time: '',
    id: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var getId = options.id;
    var cache = wx.getStorageSync('cache_key');
    if (cache) {
      var currentCache = cache[getId];
      this.setData({
        collection: currentCache
      })
    } else {
      var cache = {};
      cache[getId] = false;
      wx.setStorageSync('cache_key', cache);
    }


    console.log(options)
    this.setData({
      id: options.id
    })
    // 获得高度
    let winPage = this;
    wx.getSystemInfo({
      success: function(res) {
        let winHeight = res.windowHeight;
        console.log(winHeight);
        winPage.setData({
          dkheight: winHeight - winHeight * 0.05 - 80
        })
      }
    })
    for (var i = 0; i < getData.detailList.length; i++) {
      if (options.id == getData.detailList[i].id) {
        console.log(getData.detailList[i].html)
        this.setData({
          dkcontent: getData.detailList[i].html,
          leassonTilte: getData.detailList[i].title,
          time: getData.detailList[i].time
        })
        wxparse.wxParse('dkcontent', 'html', this.data.dkcontent, this, 5)
      }
    }
  },
  onShareAppMessage: function () {
    console.log(this.data.id)
    return {
      title: '西遇旅行',
      path: 'pages/detail/detail?id=' + this.data.id
    }
  },

  toCollect: function (event) {
    // 获取缓存，得到当前文章是否被点赞
    var cache = wx.getStorageSync('cache_key');
    // 获取当前文章是否被点赞的缓存
    var currentCache = cache[this.data.currentId];
    // 取反，点赞的变成未点赞 未点赞的变成点赞
    currentCache = !currentCache;
    // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
    cache[this.data.currentId] = currentCache;
    // 调用 showModal方法
    this.showModal(cache, currentCache);
  },
  showModal: function (cache, currentCache) {
    var that = this;
    wx.showModal({
     
      content: currentCache ? "点赞成功" : "取消点赞",
      showCancel: false,
      // cancelText: "取消111",
      // cancelColor: "#000",
      confirmText: "知道啦",
      confirmColor: "#0f0",
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          // 重新设置缓存
          wx.setStorageSync('cache_key', cache);
          // 更新数据绑定,从而切换图片
          that.setData({
            collection: currentCache
          })
        }
      }
    })
  }
  
})