var maxTime = 5
var steep_g = 1
var currentTime = maxTime
var interval = ''
var mobile = '',
    pass = '', 
    configPass = '', 
    code = '', 
    code = '', 
    confirmMobile = '', 
    randomCode='1234'

var http = require('../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:currentTime,
    codeText:"获取验证码",
    steep:steep_g
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
    currentTime = maxTime
    if(interval!=null){
      clearInterval(interval)
    }
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

  bindMobile: function (e) {
    mobile = e.detail.value
  },

  bindPass: function (e) {
    pass = e.detail.value

  },

  bindConfigPass: function (e) {
    configPass = e.detail.value
  },
  bindCode: function (e) {
    code = e.detail.value
  },

  btCode:function(){
    var that = this
    that.doCodeRequest()
    interval = setInterval(function(){
      currentTime --
      if(currentTime==-1){
        clearInterval(interval)
        that.setData({codeText:'获取验证码'})
        currentTime = maxTime
        return
      }
      that.setData({ codeText:currentTime+"s"})
    },1000)
  },

  btConfirm: function () {
    console.log("00000000000000")
    if(mobile.length == 0){
      wx.showToast({
        title: '号码为空',
        icon:'loading',
        duration:700
      })
      return
    }

     if(pass!==configPass){
       wx.showToast({
         title: '密码不一致',
         icon: 'loading',
         duration: 700
       })
       return
     }

     if(code != "1234"){
        wx.showToast({
          title: '验证码错误',
          icon:'loading',
          duration:700
        })

        return
     }

     this.doUpdatePass()
  },

  //获取验证码
  doCodeRequest:function(){
    wx.request({
      url: 'http://web.cr6868.com/asmx/smsservice.aspx?',
      data:{
        name:'13925876719',
        pwd:'9C72D3D823E48EB4273D44744532',
        content: '【智由控】尊敬的：' + this.mobile + '，您的注册验证码为：'
        + this.randomCode + '，请在5分钟内完成修改。#@#'+this.mobile,
        stime:'',
        sign:'',
        type:'pt',
        extno:''
      },
      method:'POST',
      success:function(res){
      
      },
      fail:function(){

      }
    })
  },

  doUpdatePass:function(){
    wx.showToast({
      title: '',
      icon:'loading',
      duration:500
    })
      var params = new Object()
      params.u_mobile = mobile
      params.u_pass = pass
      var rootName = 'EditUserPassword?'
      http.GET({
        rootName:rootName,
        params:params,
        success(res){
          if(res == "1"){
            wx.showToast({
              title: '修改成功',
              icon:'success',
              duration:1500
            })
          }else{
            wx.showToast({
              title: '修改失败',
              icon:'loading',
              duration:1500
            })
          }
        },
        fail(){
          wx.showToast({
            title: '网络错误',
            icon:'loading',
            duration:'700'
          })
        }
      })
  }

})