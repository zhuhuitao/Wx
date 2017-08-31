// deviceSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  ResSettings:function(){
    wx.showModal({
      title: '确认恢复出厂设置？',
      content: '恢复后将无法控制与查看设备',
      cancelColor:'#454545',
      confirmColor:'#EF6B2B',
      success: function (res) {
        if (res.confirm) {
          //console.log('用户点击确定')
          wx.showModal({
            content: '设备已恢复出厂设置',
            showCancel:false,
            confirmColor: '#EF6B2B',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
     //fail:'',  //接口调用失败的回调函数
     //complete:'' 	//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  filterSet:function(){
    wx.navigateTo({
      url: '../deviceInfo/deviceInfo',
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