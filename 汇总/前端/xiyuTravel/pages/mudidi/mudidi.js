// pages/mudidi/mudidi.js

var getData = require('../../data/data.js');
var app = getApp();
Page({
  data: {
    signupimg: '../../images/China.png',
    imgsrc: '../../images/China.png',
    iconsrc: '../../images/China.png',
  },
  change: function () {
    wx.navigateTo({
      url: '/pages/china/china',
    })
  }
})
