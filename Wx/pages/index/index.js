//index.js
//获取应用实例


var http = require('../../utils/http.js')
var app = getApp();
var total
var size = 10, page = 1
var wxList = []
var wxQos = []
var startTime = ''
var wxInfo = new Object()
Page({
  data: {
    isLoad: false,
    isRefresh: false,
    total: total,
    wxTotal: '',
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    list: [
      {
        id: '1001',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "003",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "王先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]

      }, {
        id: '1002',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1004',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "003",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "王先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1005',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "003",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "王先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1006',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "003",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "王先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1007',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1008',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }, {
        id: '1009',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]
      }
    ],

    wxlist: [
      {
        id: '1001',
        wxTime: '2017.03.27  17:55:20',
        wxName: '李先生',
        wxTel: '15833660105',
        wxSN: 'SNEW7MJW',
        wxStatus: '处理中...',
        wxzhuant: true,
        wxProblem: ['水质异常', '电路板故障', '高压泵故障', '管线漏水', '无法启动']
      },
      {
        id: '1002',
        wxTime: '2017.03.27  17:55:20',
        wxName: '王先生',
        wxTel: '15833660105',
        wxSN: 'SNEW7MJW',
        wxStatus: '待处理',
        wxzhuant: false,
        wxProblem: ['水质异常', '电路板故障', '高压泵故障', '管线漏水']
      },
      {
        id: '1003',
        wxTime: '2017.03.27  17:55:20',
        wxName: '张先生',
        wxTel: '15833660105',
        wxSN: 'SNEW7MJW',
        wxStatus: '待处理',
        wxzhuant: false,
        wxProblem: ['水质异常', '电路板故障', '高压泵故障']
      }
    ]

  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  // onRefresh:function(){
  //   console.log('======这是系统刷新')
  // },

  // onDataLoad:function(){
  //   console.log("=====这是系统加载")
  // },

  onLoad: function () {
    wx.showToast({
      title: '正在加载...',
      duration: 1000,
      icon: 'loading'
    })
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

    that.doOrderNum()
    that.doWxOrderNum()
    that.doWxorderList()
    that.doWhOrder()
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (that.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  onLoadMore: function () {
    console.log("=======加载")
    var that = this
    that.setData({
      isLoad: true
    })
    page++
    that.doWxorderList()

  },

  onFreshMore: function () {
    console.log("-------刷新")
    var that = this
    that.setData({
      isRefresh: true
    })
    page = 1
    that.doWxorderList()
  },


  doOrderNum: function () {
    var that = this
    var rootName = "GetMainCountWid?"
    var params = new Object()
    params.uid = app.globalData.userInfo.u_id
    http.GET({
      rootName: rootName,
      params: params,
      success: function (res) {
        total = res[0].Column1
        if (total.length == 0) {
          app.complete.orderNum = 0
        }
        app.complete.orderNum = total
        that.setData({
          total: total
        })
      },
      fail: function () {

      }
    })
  },

  doWxOrderNum: function () {
    var that = this
    var rootName = "GetSeviceCountWid?"
    var params = new Object()
    params.wid = app.globalData.userInfo.u_id
    http.GET({
      rootName: rootName,
      params: params,
      success: function (res) {
        total = res[0].Column1
        that.setData({
          wxTotal: total
        })
      },
      fail: function () {

      }
    })

  },

  doOrderList: function () {
    var that = this
    var rootName = "GetMainAll?"
    var parmas = new Object()

  },

  /**
   * wu_stat:1是处理中,2是待处理,0处理完成
   */
  doWxorderList: function () {
    var that = this
    var rootName = "GetSeviceAll?"
    var params = new Object()
    var stat = ""
    params.pagesize = size
    params.wid = app.globalData.userInfo.u_id
    params.pageindex = page
    http.GET({
      rootName: rootName,
      params: params,
      success: function (res) {
        console.log(res[0])
        let length = res.length
        for (let i = 0; i < length; i++) {
          if (res[i].start_time != null) {
            startTime = res[i].start_time.slice(0, 19).replace('T', " ")
          }
          if (res[i] != null) {
            var s = res[i].wu_stat
            if (s == 1) {
              stat = "处理中"
            } else if (s == 2) {
              stat = "待处理"
            } else if (s == 0) {
              stat = "处理完成"
            }
          }
          if (res[i].server_state != null) {
            var q = res[i].server_state.split(",")
            let len = q.length
            for (let j = 0; j < len; j++) {
              var wxQ = app.globalData.question[q[j]]
              wxQos[j] = wxQ
            }
          }
          wxInfo.id = res[i].rownum
          wxInfo.wxTime = startTime
          wxInfo.wxTel = res[i].server_tel
          wxInfo.wxSN = res[i].server_psn
          wxInfo.wxStatus = stat
          wxInfo.wxProblem = wxQos
          wxInfo.wxName = res[i].u_realname
          wxList.push(wxInfo)
        }

        that.setData({
          wxlist: wxList,
          isRefresh: false,
          isLoad: false,
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络错误',
          duration: 700,
          icon: 'loading'
        })
      }
    })
  },

/**
 * {
        id: '1001',
        open: false,
        content: [
          {
            subid: "001",
            time: "2017.03.27  17:55:20",
            status: "on",
            name: "李先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "002",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "张先生",
            question: "SNBJF6HW滤芯到期"
          },
          {
            subid: "003",
            time: "2017.03.27  17:55:20",
            status: "",
            name: "王先生",
            question: "SNBJF6HW滤芯到期"
          }
        ]

      },
 */
  doWhOrder:function(){
    var whOrder = new Object()
    var rootName = "GetMainAll?"
    var params = new Object()
    params.pagesize = 20
    params.wid = app.globalData.userInfo.u_id
    params.pageindex = 1
    http.GET({
      rootName:rootName,
      params:params,
      success:function(res1){
          let len = res1.length
          if(len!=0){
            for(let i = 0;i < len;i ++){
              var id = res1[i].wid
              var rootName = "GetMainWidPid?"
              var params = new Object()
              params.wid = id
              http.GET({
                rootName:rootName,
                params:params,
                success:function(res2){
                  console.log(res2[0])
                  whOrder.id = id
                  whOrder.open = false
                },
                fail:function(){

                }
              })
            }
          }
      },
      fail:function(){

      }
    })
  }

}) 