// deviceInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalTds: false ,
    showModalSN: false,
    dvId:'001',
    tdsVal:'139',
    tdsValInput:'139',
    dName:'智能水龙头',
    snNb:'SNYG462M',
    list:[
      {
        sID: '001',
        sName: '活性炭',
        sAllNb: '600',
        sUsedNb: '220',
      },
      {
        sID: '002',
        sName: '后置炭',
        sAllNb: '365',
        sUsedNb: '100',
      },
      {
        sID: '003',
        sName: '活性炭',
        sAllNb: '600',
        sUsedNb: '220',
      }
    ],
  },
  tdsInput: function (event) {
    this.setData({ tdsValInput: event.detail.value })
  },
  tdsClick: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    if (currentStatu == "close") {
      this.setData(
        {
          showModalTds: false
        }
      );
    }
    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalTds: true
        }
      );
    }
  },
  snClick: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
      if (currentStatu == "close") {
        this.setData(
          {
            showModalSN: false
          }
        );
      }
    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalSN: true
        }
      );
    }
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