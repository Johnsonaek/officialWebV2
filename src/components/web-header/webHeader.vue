<!--
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-16 11:44:56
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-16 17:19:30
--> 
<!--  -->
<template>
  <div class="container-header-web">
    <div class="content">
      <div class="left">
        <img src="../../assets/image/logo-big.png" alt="">
      </div>
      <ul class="right">
        <li class="phone"><i class="icon iconfont icon-nav-tel"></i>4008886455</li>
        <li class="items">
          <router-link to='./'>
              <p :style="{color:whereProp === 'shouye'?'red':''}">首页</p>
             </router-link>
          </li>
        <li class="items product" @click="toggleProduct">
          <span :style="{color:(whereProp === 'zhibo' || whereProp === 'im')?'red':''}">产品解决方案</span>
          <div class="list" :style="{display:(ifShowProduct)?'block':'none'}">
              
              <router-link to='./IM'>
              <p :style="{color:whereProp === 'im'?'red':''}">IM</p>
             </router-link>
              <router-link to='./zhibo'>
              <p :style="{color:whereProp === 'zhibo'?'red':''}">直播</p>
             </router-link>
          </div>
        </li>
        <li class="items">APP开发</li>
        <li class="items">游戏开发</li>
        <li class="items">小程序开发</li>
        <li class="items">关于大谦</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ifShowProduct:false
    };
  },
  props:['whereProp'],
  
  components: {},

  computed: {},

  methods: {
    toggleProduct(){
        this.ifShowProduct = !this.ifShowProduct
    }
  }
}

</script>
<style lang='scss' scoped>
    @import './webHeader.scss'
</style>