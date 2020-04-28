//index.js
//获取应用实例
const app = getApp()
var utils = require('../../utils/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  n_number:'29.3231565',
    //  n_number:parseFloat(n_number).toFixed(1)
  
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   var that = this;
  //   var n_number;
  //   wx.getSystemInfo({
  //     success (res) {
  //       console.log(res.windowHeight);
  //       height = res.windowHeight
  //     }
  //   })
  //   if (app.globalData.userInfo === null){
  //     that.setData({
  //       login:true
  //     })
  //   }else{
  //     that.setData({
  //       login: false,
  //       height:height
  //     })
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = 'http://118.114.244.93:60226/student/select-doctor-classcode?classcode=115';

    // 调用的是自己封装的工具函数，在utils中
    utils.myRequest({
      url:url,
      methods:'GET',
      success:function(result){
        that.setData({
          showitem:true,
    
          rankcontent:result.data.data,
          time_pro:Number(parseFloat(22589/10000*10).toFixed(1)),
          
        })
      },
      fail:function(){
        that.setData({
          showitem:false
        })
      }
    });
  },

})
