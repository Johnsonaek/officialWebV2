<!--
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-10 11:56:06
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-11 15:10:44
--> 
<template>
  <div class="container-IM">
    <div class="row">
      <div class="header-IM col-xs-12 ">
        <img src="../../static/image-IM/header.png" alt="">
       </div>
    </div>
    <ul class="list container">
  
      <li class="item row" v-for="(item,index) in serviceList" :key=index>
        <div class="left col-md-6 col-xs-12">
          <img :src="item.img" alt="">
        </div>
        <div class=" col-md-6 col-xs-12 right">
          <span class="title">{{item.title}}</span>
          <p class="innerItem" v-for="(innerItem,innerIndex) in item.list" :key=innerIndex>
            {{innerItem}}
          </p>
        </div>
      </li>

    </ul>			
  </div>
</template>

<script>

import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  data () {
    return {
      serviceList:[
        {
          img:'../../static/image-IM/yun.png',
          title:'对比IM云服务',
          list:[
            '掌控全部源代码,想怎么改就怎么改，不受制于人',
            '布署时一次性开支再无费用，用户再多也无软件费',
            '可控性高，服务稳定',
            '私有化部署，聊天记录不外泄'
          ]
        },
        {
          img:'../../static/image-IM/msg.png',
          title:'即时消息/单聊',
          list:[
            '支持文字、图片、表情、语音、视频、位置、名片、文件、红包等',
            '支持好友验证机制，支持保证消息100%送达的回执机制',
            '支持离线消息推送，关掉APP仍能收到系统级提醒'
          ]
        },
        {
          img:'../../static/image-IM/group.png',
          title:'群组/讨论组',
          list:[
            '支持主动加入、邀请加入、踢出好友、禁言等功能',
            '丰富的权限及管理功能，并有操作日志实时显示在房间中',
            '最高支持10000人大群'
          ]
        },
        {
          img:'../../static/image-IM/nearby.png',
          title:'附近的人',
          list:[
            '默认根据距离的远近显示附近的人',
            '也可以根据关键字、性别、年龄、出现时间等进行搜索'
          ]
        },
        {
          img:'../../static/image-IM/my.png',
          title:'个人中心',
          list:[
            '管理好友和黑名单、管理我的收藏、管理我的朋友圈等',
            '在地图上查看附近的人',
            '个人隐私设置，比如加好友需不需要验证'
          ]
        },
        {
          img:'../../static/image-IM/video.png',
          title:'语音/视频聊天',
          list:[
            '高清的视频聊天、零延迟 ',
            '群组内可召开语音会议或视频会议',
            '多种编码格式、分辨率可选'
          ]
        },
        {
          img:'../../static/image-IM/friends.png',
          title:'朋友圈',
          list:[
            '和微信的朋友圈无限相似',
            '可发语音、视频，更好玩',
            '方便集成，成为子模块',
            '支持点赞和评论，并第一时间推送给相关人员 '
          ]
        },
        {
           img:'../../static/image-IM/colleague.png',
          title:'公司通讯录',
          list:[
            '树的表现形式，使公司组织架构一目了然',
            '支持被邀加入多个公司',
            '找同事加好友，特别方便'
          ]
        },
        {
         img:'../../static/image-IM/shin.png',
          title:'百变皮肤',
          list:[
            '支持中文简体、中文繁体、英文，实时切换',
            '支持绿、红、灰、蓝、粉各种皮肤，一键切换'
          ]
        },
        {
          img:'../../static/image-IM/pay.png',
          title:'支付系统',
          list:[
            '支持微信、支付宝、银行卡充值和提现，手续费低',
            '支持转账、收发红包、二维码收付款等',
            '实名认证，可绑定多张银行卡',
            '提供实时到账、两小时到账等多种提现方式'
          ]
        },
        {
         img:'../../static/image-IM/WechatIMG80.png',
          title:'短视频功能',
          list:[
            '在线录制 滤镜美颜',
            '背景音乐一键添加',
            '点赞、留言、分享给好友'
          ]
        },
        {
           img:'../../static/image-IM/download.png',
          title:'直播间/聊天室',
          list:[
            '视频质量高清，支持苹果设备和安卓设备',
            '支持聊天、弹幕',
            '多种美颜算法，速度超快',
            '支持给心爱主播点赞送礼'
          ]
        },
        {
           img:'../../static/image-IM/other.png',
          title:'其他亮点',
          list:[
            '支持是否需要好友验证',
            '加密通讯，使用高强度算法',
            '支持是否需要好友验证'
          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

 // mounted: {},

  methods: {}
}

</script>
<style scoped>
@import '../assets/css/IM.css';
@import 'bootstrap/dist/css/bootstrap.min.css'
</style>