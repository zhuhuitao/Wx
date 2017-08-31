// viewUser.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    userName:'',
    userTel:'',
    userAddress:'广东·东莞·南城街道',
    userDetailed:'广东省东莞市隆溪路金汇科技园1楼',
    serialNb:'SNEW7MJW',
    status:'',
    btName:'立即处理',
    failure: ['水质异常', '电路板故障', '高压泵故障', '管线漏水', '无法启动','其他'],
    beizhu: '状态有点不稳定，总是一会红灯一会绿灯，重启无效果比较着急，请尽快安排处理。',
  },
  userCall:function(){
    var uTel = this.data.userTel;
    wx.makePhoneCall({
      phoneNumber: uTel,
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      that.setData({
        userName:'我们'
      })
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
  
  }
})