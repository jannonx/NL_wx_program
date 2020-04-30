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
  onPullDownRefresh: function() {
    this.requestData()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
  },
  requestData: function(){
    var that = this;
    var url = 'http://118.114.244.93:60227/user/getRank';
    var urlTarget = 'http://118.114.244.93:60227/user/getTarget';
    var urlCurrent = 'http://118.114.244.93:60227/user/getSummary';
    var tartgetMoney=1;
    var currentMoney=0;
    var progressTxt=0;
    // 调用的是自己封装的工具函数，在utils中
    utils.myRequest({
      url:url,
      methods:'GET',
      success:function(result){
        that.setData({
          showitem:true,
          rankcontent:result.data.data,
          
          // progressTxt:Number(parseFloat(22589/10000*10).toFixed(1)),
        })
      },
      fail:function(){
        that.setData({
          showitem:false
        })
      }
    });
    utils.myRequest({
      url:urlCurrent,
      methods:'GET',
      success:function(result){
        that.setData({
          currentMoney:result.data.data.summary,
        })
      
      },
      fail:function(){
        that.setData({
          // showitem:false
        })
      }
    });
  },

})


