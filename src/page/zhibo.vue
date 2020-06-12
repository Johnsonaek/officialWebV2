<!--
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-11 15:30:09
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-12 11:33:06
-->
<template>
  <div class="container">
    <div class="web">
        <div class="top">
          <div class="content">
            <div class="left">  
              <div class="header-top">
                直播系统
              </div>
              <div class="dec">
                以追求极致用户体验为目标，持续更新系统功能
              </div>
              <ul class="list">
                <li class="item" v-for="(item,index) in dianbo" :key="index" @mouseout="chooseDemo(index)" :style="{backgroundColor:(activeTop == index)?'#fff':''}">
                  <img :src="activeTop == index?item.iconBlue:item.iconWhite" alt="">
                  <span :style="{color:(activeTop == index)?'#000':'#fff'}">{{item.title}}</span>
                </li>
              </ul>
            </div>
            <div class="right">
              <img :src='dianbo[activeTop].demo' alt="" class="demo">
              <img src="../../static/image-zhibo/web/sjk.png" alt="" class="kuan">
            </div>
          </div>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
    </div>
    <div class="wap">wap</div>
  </div>
</template>
<script>
import '../../static/js/flexible'
export default {
  data () {
    return {
      activeTop:0,
      dianbo:[
        {
          iconWhite:'../../static/image-zhibo/web/gntb7.png',
          iconBlue:'../../static/image-zhibo/web/gntb07.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/daihuo.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb1.png',
          iconBlue:'../../static/image-zhibo/web/gntb01.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/lianmai.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb3.png',
          iconBlue:'../../static/image-zhibo/web/gntb03.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/dongtai.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb4.png',
          iconBlue:'../../static/image-zhibo/web/gntb04.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/zhuanpan.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb5.png',
          iconBlue:'../../static/image-zhibo/web/gntb05.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/liwu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb6.png',
          iconBlue:'../../static/image-zhibo/web/gntb06.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/shouhu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb2.png',
          iconBlue:'../../static/image-zhibo/web/gntb02.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/xiaoshipin.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb8.png',
          iconBlue:'../../static/image-zhibo/web/gntb08.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/zhibo.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb9.png',
          iconBlue:'../../static/image-zhibo/web/gntb09.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/fenxiao.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb10.png',
          iconBlue:'../../static/image-zhibo/web/gntb010.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/danmu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb11.png',
          iconBlue:'../../static/image-zhibo/web/gntb011.png',
          title:'直播带货',
          demo:'../../static/image-zhibo/web/dashang.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb12.png',
          iconBlue:'../../static/image-zhibo/web/gntb012.png',
          title:'直播连麦PK',
          demo:'../../static/image-zhibo/web/pindao.gif'
        },
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    chooseDemo(index){
      this.activeTop = index;
    }
  }
}

</script>
<style scoped>
  @import '../assets/css/zhibo.css';
</style>