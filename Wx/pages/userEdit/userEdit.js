// userEdit.js
var tcity = require("../../utils/citys.js");
var app = getApp()
var http = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '李先生',
    userTel: '15833660105',
    userEmail: '1008611@qq.com',
    userAvatar: '../images/default-avatar.png',
    userSex: '男',
    items: [
      { name: 'man', value: '男', checked: 'true' },
      { name: 'girl', value: '女' },
    ],
    userDetailed:"",
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    isCancel:false
  },


  radioChange: function (e) {
    this.setData({
      userSex: e.detail.value
    })
    console.log(e.detail.value)
  },


  bindName: function (event) {
    this.setData({ userName: event.detail.value })
  },


  bindTel: function (event) {
    this.setData({ userTel: event.detail.value })
  },

  bindEmail: function (event) {
    this.setData({ userEmail: event.detail.value })
  },
  bindDetailed: function (event) {
    this.setData({ userDetailed: event.detail.value })
  },
  changeAvatar: function (event) {
    var that = this;
    wx.chooseImage({
      count: 1,
      //original原图，compressed压缩图
      sizeType: ['original'],
      //album来源相册 camera相机 
      sourceType: ['album', 'camera'],
      //成功时会回调
      success: function (res) {
        //重绘视图
        that.setData({
          userAvatar: res.tempFilePaths
        })
      }
    })
  },
  bindChange: function (e) {
    //console.log(e);
    if(this.isCancel){
      return
    }
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    if (val[0] != t[0]) {
      //console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]]+'·',
        city: cityData[val[0]].sub[0].name+'·',
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      //console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }

  },
 
  onLoad: function () {
    console.log("onLoad");
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }



    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      // 'province': cityData[0].name,
      // 'city': cityData[0].sub[0].name,
      // 'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');


  },
  /**
   * 生命周期函数--监听页面加载
   */

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
    var userInfo = app.globalData.userInfo
    var res = userInfo.u_address
    var arr = new Object()
    var citys = new Object()
    console.log(res+"---")
    if (res.indexOf('*')>0) {
      arr = res.split('*')
      if (arr[0].indexOf('·')) {
        citys = arr[0].split('·')
        
      }
    }else{
      arr = [res,'']
      if (arr[0].indexOf('·')) {
        citys = arr[0].split('·')
      }
    }
    
    that.setData({
      userName: userInfo.u_realname,
      userTel: userInfo.u_mobile,
      userEmail: userInfo.u_mail,
      userDetailed: arr[1],
      province:citys[0]+'·',
      city:citys[1]+'·',
      county:citys[2]
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

  open:function(){
    var that = this
    that.setData({
      condition:!that.data.condition
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  citySure: function () {
    var that = this
    that.setData({
      condition: !that.data.condition
    })

  },

  cityCancel: function () {
      var that = this
     
      that.setData({
        condition:!that.data.condition,
         isCancel: true
      })
  },

  btConfirm:function(){
    var that = this
    if(that.data.userName.length==0){
      wx.showToast({
        title: '姓名为空',
        icon:'loading',
        duration:700
      })
      return
    }

    if (that.data.userEmail.length==0){
      wx.showToast({
        title: '邮箱为空',
        icon:'loading',
        duration:700
      })

      return
    }

    if(that.data.value[0].length==0){
      wx.showToast({
        title: '请选择地区',
        icon:'loading',
        duration:700
      })

      return
    }

    if (that.data.userDetailed.length == 0){
      wx.showToast({
        title: '地址为空',
        icon:'loading',
        duration:700
      })
      return
    }

   this.doSubmitRequest()
  },

  doSubmitRequest:function(){
    wx.showToast({
      title: '请稍后...',
      icon:'loading',
      duration:1000
    })
    var that = this
    var address = ''
    address = that.data.province + that.data.city + that.data.county + "*" + that.data.userDetailed
    console.log(address)
    var rootName = 'EditUserByUid?'
    var params = new Object()
    params.uid = app.globalData.userInfo.u_id
    params.realname = that.data.userName
    params.address = address
    params.sex = that.data.userSex
    params.mail = that.userEmail
    http.GET({
      rootName:rootName,
      params:params,
      success:function(res){
        console.log(res)
          if(res==1){
            wx.showToast({
              title: '修改成功',
              icon:'success',
              duration:1000
            })

            app.globalData.userInfo.u_realname = that.data.userName
            app.globalData.userInfo.u_mail = that.data.userEmail
            app.globalData.userInfo.u_sex = that.data.userSex
            app.globalData.userInfo.u_address = address
          
          }
      },
      fail:function(){
        wx.showToast({
          title: '修改失败',
          icon:'loading',
          duration:1000
        })
      }
    })
  }
})