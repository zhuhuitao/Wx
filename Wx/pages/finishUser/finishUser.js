// viewUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'李先生',
    userTel:'15833660105',
    userAddress:'广东·东莞·南城街道',
    userDetailed:'广东省东莞市隆溪路金汇科技园1楼',
    serialNb:'SNEW7MJW',
    list:[
      {
        qName:'UDF颗粒活性碳',
        qStatus:'已更换',
      },
      {
        qName: 'CTO压缩活性碳',
        qStatus: '已更换',
      },
      {
        qName: 'UDF颗粒活性碳',
        qStatus: '已更换',
      }
    ]
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