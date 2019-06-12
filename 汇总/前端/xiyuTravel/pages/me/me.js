//index.js
//获取应用实例
const app = getApp()

Page({

  

  data: {

    items: [
      {
        "id": "1",
        "url": "",
        "img": "https://graph.baidu.com/resource/101983553e09e0b8ae42f01558941269.jpg",
        "title": "打翻了上帝的调色盘，十月环青海湖。",
        "price": "2019-05-07",
        "type": "0"
      },
      {
        "id": "2",
        "url": "",
        "img": "https://graph.baidu.com/resource/1013c7e2714e682613fdb01558941451.jpg",
        "title": "甲天下的桂林如何玩？4天攻略玩法，带上就出发。",
        "price": "2019-4-1",
        "type": "0"
      },
      {
        "id": "3",
        "url": "",
        "img": "https://graph.baidu.com/resource/1010ab414e36c5468978601558941582.jpg",
        "title": "布拉格|童话之都的经典拍照取景地盘点",
        "price": "2018-12-10",
        "type": "0"
      },
    ],
    startX: 0, //开始坐标
    startY: 0,

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    actIndex: 'first',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  changeMenu: function (e) {
    this.setData({
      actIndex: e.currentTarget.id
    })
    if (this.data.actIndex == 'first') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 1) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    } else if (this.data.actIndex == 'second') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 2) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    } else if (this.data.actIndex == 'third') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 3) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    }
  },


  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      items: this.data.items
    })
  },
})
