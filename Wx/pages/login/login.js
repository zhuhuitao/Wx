
var app = getApp();
var http = require('../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPass: '',
  },
  btclick: function () {
    if (this.data.userName.length == 0) {
      wx.showToast({
        title: '账号为空',
        icon: 'loading',
        duration: 500
      })
      return
    }
    if (this.data.userPass.length == 0) {
      wx.showToast({
        title: '密码为空',
        icon: 'loading',
        duration: 500
      })

      return
    }
    this.loginRequest()
  },

  bduser: function (event) {
    this.setData({ userName: event.detail.value })
  },
  bdpsw: function (event) {
    this.setData({ userPass: event.detail.value })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userName: wx.getStorageSync('name'),
      userPass: wx.getStorageSync('pwd')
    })
    if (this.data.userName.length == 0) {
      return
    }

    if (this.data.userPass.length == 0) {
      return
    }
   // this.loginRequest()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  loginRequest: function () {
    wx.showToast({
      title: '正在登录',
      icon: 'loading'
    })

    var params = new Object()
    params.umobile = this.data.userName
    params.upass = this.data.userPass
    var rootName = "LoginUser?"
    http.GET({
      rootName: rootName,
      params: params,
      success: function (res) {
        console.log(res[0])
        if (res.length == 0) {
          wx.showToast({
            title: '账号或密码错误',
            icon: 'loading',
            duration: 1000
          })
          return
        }

        app.globalData.userInfo = res[0];
        try {
          wx.setStorageSync('name', app.globalData.userInfo.u_mobile)
          wx.setStorageSync('pwd', app.globalData.userInfo.u_pass)
        } catch (e) {
          console.log("数据存储发生异常")
        }

        wx.switchTab({
          url: '../index/index',
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络错误',
          icon: 'loading',
          duration: 500
        })
      }
    })
  }
})