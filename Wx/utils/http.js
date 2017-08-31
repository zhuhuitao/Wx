var host = 'https://test.yihuan100.com/api/'

var requestHandler = {
  rootName :'',
  params : {},
  success : function(){
    //成功回调
  },
  fail : function(){
    //失败回调
  },
}


function GET (requestHandler){
  request('GET',requestHandler)
}

function POST (requestHandler){
  request('POST',requestHandler)
}

function request(method,requestHandler){
  var params = requestHandler.params
  var url = host+requestHandler.rootName;
  wx.request({
    url: url,
    data:params,
    method:method,
    success:function(res){
      requestHandler.success(res.data)
    },
    fail:function(){
      requestHandler.fail()
    }
  })
}

module.exports = {
  GET:GET,
  POST:POST
}