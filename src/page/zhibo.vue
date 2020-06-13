<!--
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-11 15:30:09
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-13 14:56:45
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
        <div class="middle">
          <div class="middle-title">
            <span>直播系统</span>
            <span>应用场景</span>
          </div>
          <div class="middle-dec">
            持续带动新行业，多领域的快速发展
          </div>
          <div class="middle-list">
            <div class="item" v-for="(item,index) in middleApplication" :key=index>
                  <img :src="item.icon" alt="">
                  <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-title">
            <span>10+营销变现功能</span>
            <span>玩法</span>
          </div>
          <ul class="bottom-lunbo">
            <transition-group name="list" tag="p" mode='out-in'>
              <li v-for="(item,index) in bottomLunbo" v-bind:key="item.demo" class="list-item" :style="config[index]">
                <img :src="item.demo" alt="" @click="toggle(index)">
              </li>
            </transition-group>

          </ul>
        </div>
    </div>
    <div class="wap">
      <div class="lunbo-top">
        1
      </div>
      <div class="gongneng">
        <div class="gongneng-title">
          <span>直播系统</span>
          <span>功能</span>
        </div>
        <div class="dec">
          以追求极致用户体验为目标，持续更新系统功能
        </div>
        <div class="list">
            <div class="item" v-for="(item,index) in dianbo" :key='index'>
              <div class="box">
                <img :src="item.iconWhite" alt="">
              </div>
              <span>{{item.title}}</span>
            </div>
        </div>
      </div>
      <div class="lunbo-bottom"></div>
      <div class="changjing">
        <div class="gongneng-title">
          <span>直播系统</span>
          <span>应用场景</span>
        </div>
        <div class="dec">
          持续带动新行业，多领域的快速发展
        </div>
        <div class="list">
            <div class="item" v-for="(item,index) in middleApplication" :key='index'>
              <div class="box">
                <img :src="item.icon" alt="">
              </div>
              <span>{{item.title}}</span>
            </div>
        </div>
      </div>
      <div class="zhibo-footer">
        --   广州大谦科技有限公司   --
      </div>
    </div>
  </div>
</template>
<script>
import '../../static/js/flexible'
export default {
  data () {
    return {
      activeTop:0,
      config: [
        {
          position: "relative",
          zIndex: 4,
       
        },
        {
          position: "relative",
          zIndex: 4,
       
        },
        {
          position: "relative",
          zIndex: 4,
       
        },
        {
          position: "relative",
          zIndex: 4,
       
        },
        {
          position: "relative",
          zIndex: 4,
       
        },
      ],
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
          title:'动态贴纸',
          demo:'../../static/image-zhibo/web/dongtai.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb4.png',
          iconBlue:'../../static/image-zhibo/web/gntb04.png',
          title:'转盘抽奖',
          demo:'../../static/image-zhibo/web/zhuanpan.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb5.png',
          iconBlue:'../../static/image-zhibo/web/gntb05.png',
          title:'幸运礼物',
          demo:'../../static/image-zhibo/web/liwu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb6.png',
          iconBlue:'../../static/image-zhibo/web/gntb06.png',
          title:'主播守护',
          demo:'../../static/image-zhibo/web/shouhu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb2.png',
          iconBlue:'../../static/image-zhibo/web/gntb02.png',
          title:'小视频拍摄',
          demo:'../../static/image-zhibo/web/xiaoshipin.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb8.png',
          iconBlue:'../../static/image-zhibo/web/gntb08.png',
          title:'付费直播',
          demo:'../../static/image-zhibo/web/zhibo.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb9.png',
          iconBlue:'../../static/image-zhibo/web/gntb09.png',
          title:'三级分销',
          demo:'../../static/image-zhibo/web/fenxiao.jpg'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb10.png',
          iconBlue:'../../static/image-zhibo/web/gntb010.png',
          title:'弹幕消息',
          demo:'../../static/image-zhibo/web/danmu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb11.png',
          iconBlue:'../../static/image-zhibo/web/gntb011.png',
          title:'礼物打赏',
          demo:'../../static/image-zhibo/web/dashang.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb12.png',
          iconBlue:'../../static/image-zhibo/web/gntb012.png',
          title:'频道分类',
          demo:'../../static/image-zhibo/web/pindao.gif'
        },
      ],
      middleApplication:[
        {icon:'../../static/image-zhibo/web/cj01.png',title:'综艺娱乐'},
        {icon:'../../static/image-zhibo/web/cj02.png',title:'游戏电竞'},
        {icon:'../../static/image-zhibo/web/cj03.png',title:'在线教育'},
        {icon:'../../static/image-zhibo/web/cj04.png',title:'电商购物'},
        {icon:'../../static/image-zhibo/web/cj05.png',title:'竞技体育'},
        {icon:'../../static/image-zhibo/web/cj06.png',title:'金融财经'},
        {icon:'../../static/image-zhibo/web/cj07.png',title:'户外旅游'},
        {icon:'../../static/image-zhibo/web/cj08.png',title:'综艺娱乐'}
      ],
      bottomLunbo:[
         {
          iconWhite:'../../static/image-zhibo/web/gntb8.png',
          iconBlue:'../../static/image-zhibo/web/gntb08.png',
          title:'付费直播',
          demo:'../../static/image-zhibo/web/zhibo.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb9.png',
          iconBlue:'../../static/image-zhibo/web/gntb09.png',
          title:'三级分销',
          demo:'../../static/image-zhibo/web/fenxiao.jpg'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb10.png',
          iconBlue:'../../static/image-zhibo/web/gntb010.png',
          title:'弹幕消息',
          demo:'../../static/image-zhibo/web/danmu.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb11.png',
          iconBlue:'../../static/image-zhibo/web/gntb011.png',
          title:'礼物打赏',
          demo:'../../static/image-zhibo/web/dashang.gif'
        },
        {
          iconWhite:'../../static/image-zhibo/web/gntb12.png',
          iconBlue:'../../static/image-zhibo/web/gntb012.png',
          title:'频道分类',
          demo:'../../static/image-zhibo/web/pindao.gif'
        },
      ],

    };
  },

  components: {},

  computed: {},

  methods: {
    chooseDemo(index){
      this.activeTop = index;
    },
      toggle(index){
        if(index>1){
          this.next();
          setTimeout(() => {
            this.config[4].zIndex = 4;
          }, 1100);
        }else{
          this.last();
        }
      },
      last() {
        
       let tmp = this.bottomLunbo[this.bottomLunbo.length - 1];
       this.bottomLunbo.splice(this.bottomLunbo.length - 1, 1)
      this.bottomLunbo.splice(0, 0, tmp)
    },
    next() {
      this.config[4].zIndex = 3;
      let tmp = this.bottomLunbo[0];
       this.bottomLunbo.splice(0, 1)
      this.bottomLunbo.splice(this.bottomLunbo.length, 0, tmp)
    },
  }
}

</script>
<style scoped lang='scss'>
  @import '../assets/css/zhibo.css';
</style>