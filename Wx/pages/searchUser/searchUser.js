// searchUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchTxt:'',
    list:[
      {
        sID:'001',
        beginTime:'2017.03.27  17:55:20',
        finishTime:'2017.03.28  12:30:05',
        sName:'李先生',
        sTel:'15833660105',
        sSN:'snew7mjw',
        sUrl:'../finishUser/finishUser',
      },
      {
        sID: '002',
        beginTime: '2017.03.27  17:55:20',
        finishTime: '2017.03.28  12:30:05',
        sName: '张先生',
        sTel: '15833660105',
        sSN: 'SNEW7MJW',
        sUrl: '../finishUser2/finishUser2',
      },
      {
        sID: '003',
        beginTime: '2017.03.27  17:55:20',
        finishTime: '2017.03.28  12:30:05',
        sName: '李先生',
        sTel: '15833660105',
        sSN: 'SNEW7MJW',
        sUrl: '../finishUser/finishUser',
      },
      {
        sID: '005',
        beginTime: '2017.03.27  17:55:20',
        finishTime: '2017.03.28  12:30:05',
        sName: '张先生',
        sTel: '15833660105',
        sSN: 'SNEW7MJW',
        sUrl: '../finishUser2/finishUser2',
      }
    ]
  },
  searchInput:function(){
    this.setData({ searchTxt: event.detail.value })
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