var getData = require('../../data/data.js');
var app = getApp();
Page({
  data: {
    signupimg: '../imgs/China.png',
    imgsrc: '../imgs/China.png',
    iconsrc: '../imgs/China.png',
  },
  change: function () {
    wx.navigateTo({
      url: '/pages/china/china',
    })
  }
})
