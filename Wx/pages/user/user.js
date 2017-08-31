// user.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    userName: '李师傅',
    userSex: '男',
    userEmail: 'yihuan100@163.com',
    userTel: '15833660105',
    userAddress: '广东·东莞市·南城区',
    userDetailed: '隆溪路10号金汇科技园A112',
    repairsNb: '1280'
  },
  editClick: function () {
    wx.navigateTo({
      url: '../userEdit/userEdit',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this
    var userInfo =  app.globalData.userInfo
    var res = userInfo.u_address;
    console.log(res+"shuju")
    var arr = new Object()
    if(res.indexOf("*") > 0){
      arr = res.split("*")
    }
    console.log(arr[0])
    console.log(arr[1]+'详细地址')
    that.setData({
      userName: userInfo.u_realname,
      userTel: userInfo.u_mobile,
      userSet: userInfo.u_sex,
      userAddress:arr[0],
      userEmail:userInfo.u_mail,
      userDetailed:arr[1],
      repairsNb:app.complete.orderNum
    })
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

  }
})