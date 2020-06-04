<template>
  <div id="container">
     <div id="doc">
        <!-- header S -->
        <div class="header header-pc">
            <div class="wrap cl">
                <div class="logo">
                    <a href="javascript:;"><img class="img1" src="@/assets/image/logo.png" alt="大谦"><img class="img2" src="@/assets/image/logo-name.png" alt="大谦"></a>
                </div>
                <ul class="nav cl">
                    <li><i class="icon iconfont icon-nav-tel"></i>4008886455</li>
                    <li class="current">
                        <a href="javascript:;">首页</a>
                    </li>
                    <li>
                        <a href="javascript:;">
                产品解决方案                                                    </a></li>
                    <li>
                        <a href="javascript:;" rel="nofollow" target="_blank">
                            <!-- <i class="icon iconfont icon-hot"></i>云队友   -->
                            <div class="tip">APP开发</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;list/8.html">
                游戏开发                                                    </a></li>
                    <li>
                        <a href="javascript:;" rel="nofollow">
                小程序开发                                                    </a></li>
                    <li>
                        <a href="javascript:;" rel="nofollow">
                关于大谦                                                    </a></li>
                </ul>
            </div>
        </div>
        <div class="header header-mb cl">
            <i class="menu-btn icon iconfont icon-nav-menu" id="showIndexNav" @click='(ifMask = !ifMask)'></i>
            <!-- <a href="javascript:;" class="push-btn" rel="nofollow">发布项目</a> -->
        </div>
        <div class="index-nav" id="indexNav">
            <i class="icon iconfont icon-nav-close" id="closeIndexNav"></i>
            <ul class="nav cl">
                <li class="current">
                    <a href="javascript:;">首页</a>
                </li>
                <li>
                    <a href="javascript:;">
                        产品解决方案</a></li>
                <li>
                    <a href="javascript:;" rel="nofollow">
                        APP开发</a></li>
                <li>
                    <a href="javascript:;">
                        游戏开发</a></li>
                <li>
                    <a href="javascript:;" rel="nofollow">
                        小程序开发</a></li>
                <li>
                    <a href="javascript:;" rel="nofollow">
                        关于大谦</a></li>
            </ul>
            <div class="ft">
                <!--        <div class="push"><a href="http://www.waibaodashi.com/publish/type/default" class="btn" rel="nofollow">发布项目</a></div>-->
                <!--<div class="login"><a href="http://www.waibaodashi.com/login" class="btn">登录</a></div>-->
            </div>
        </div>
        <!-- header E -->
        <div class="container">
            <div class="first-screen" id="firstScreen">
                <div class="first-screen-center wrap" id="firstScreenCenter">
                    <!-- jumbotron S -->
                    <div class="jumbotron wrap">快速发布项目需求
                        <br><span>你成功背后的技术支持</span></div>
                    <!-- jumbotron E -->

                    <!-- project S -->
                    <div class="project wrap" id="project">
                        <div class="project-pc">
                            <ul class="filter cl">
                                <li class="item category">
                                    <p class="name"  @click='toggleNeeds("categoryList")'><span class="text">{{this.projectType.title}}</span><i class="icon iconfont icon-arrow-down"></i></p>
                                    <div class="product wrap project-pop" ref="categoryList">
                                        <ul class="list cl" id="categoryList" >
                                            <li v-for="(item,index) in projectOptions.type" :key=index @click='chooseType("type",item)'>
                                                  <img :src='item.img' :alt='item.title'>
                                                  <p>{{item.title}}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="item term">
                                    <p class="name" @click='toggleNeeds("termList")'><span class="text" >{{this.projectTime.title}}</span><i class="icon iconfont icon-arrow-down"></i></p>
                                    <ul class="filterlist project-pop" id="termList"  ref="termList">
                                      <li v-for="(item,index) in projectOptions.time" :key=index @click='chooseType("time",item)'>
                                        {{item.title}}
                                      </li>
                                  
                                    </ul>
                                </li>
                                <li class="item urgency">
                                    <p class="name" @click='toggleNeeds("urgencyList")'><span class="text" >{{this.projectUrgency.title}}</span><i class="icon iconfont icon-arrow-down"></i></p>
                                    <ul class="filterlist project-pop" id="urgencyList" ref="urgencyList">
                                      <li v-for="(item, index) in projectOptions.urgency" :key=index @click='chooseType("urgency",item)'>
                                            {{item.title}}
                                      </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="javascript:;" class="btn" id="index_push_pc" @click="submit()">马上发布项目</a>
                        </div>
                        <div class="project-mb">
                            <div class="filter">
                                <div class="group">
                                  <select class="category" id="categoryMbList" value="选择项目类型" @change='chooseType("type",$event)'>
                                    <option disabled="disabled" selected="" value="选择项目类型">选择项目类型</option>
                                    <option v-for='(item,index) in projectOptions.type' :key=index :value="item.id" >{{item.title}}</option>
                                </select>
                                </div>
                                <div class="group">
                                    <select class="term" id="termMbList" value="0"  @change='chooseType("time",$event)'>
                                        <option disabled="disabled" selected="" >选择项目时间</option>
                                      <option v-for='(item,index) in projectOptions.time' :key=index :value="item.id" >{{item.title}}</option>
                                    </select>
                                </div>
                                <div class="group">
                                    <select class="urgency" id="urgencyMbList" value="0"  @change='chooseType("urgency",$event)'>
                                    <option disabled="disabled" selected="" value="0">项目紧急程度</option>
                                <option v-for='(item,index) in projectOptions.urgency' :key=index :value="item.id" >{{item.title}}</option>
                                </select>
                                </div>
                            </div>
                            <a href="javascript:;" class="btn" id="index_push_mobile" @click="submit()">马上发布</a>
                        </div>
                    </div>
                    <!-- project E -->
                </div>
                <!-- case S -->

            </div>
            <!-- case E -->

            <!-- industry S -->
            <div class="mod industry wrap">
                <div class="hd">
                    <h2 class="title">行业解决方案</h2>
                </div>
                <div class="bd">
                    <ul class="list cl">
                        <li v-for='(item,index) in project' :key=index>
                            <a href="javascript:;" rel="nofollow">
                                <img :src='item.img'>
                                <p>{{item.title}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- industry E -->

            <div class="mod wm wrap">
                <div class="hd">
                    <h2 class="title">我们能做什么</h2>
                </div>
                <div class="bd">
                    <ul class="list cl candohref">
                      <li v-for='(item,index) in article' :key=index>
                            <img :src="item.img">
                            <div>
                                <span>{{item.title}}</span>
                                <p>{{item.subtitle}} </p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <!-- service S -->
            <div class="mod service wrap">
                <!-- <div class="hd">
                    <h2 class="title">我们的服务保障</h2>
                </div> -->
                <div class="bd">
                    <ul class="list cl" id="safeguard">
                        <li>
                            <img src="@/assets/image/c1.png">
                            <p class="txt">专业的商务洽谈</p>
                            <p class="desc">1对1具体沟通要求</p>
                            <p class="desc">专业梳理需求方案</p>
                            <p class="desc">签订正规项目合同</p>
                        </li>
                        <li>
                            <img src="@/assets/image/c2.png">
                            <p class="txt">准确的产品策划</p>
                            <p class="desc">调研行业受众与竞品分析</p>
                            <p class="desc">Axure专业策划原型图</p>
                            <p class="desc">创意UI、UE资深设计师</p>
                        </li>
                        <li>
                            <img src="@/assets/image/c3.png">
                            <p class="txt">成熟的技术架构</p>
                            <p class="desc">标准化技术开发管控流程</p>
                            <p class="desc">纯原生、Uni-app、Html5等语言</p>
                            <p class="desc">多兼容高并发服务器方案</p>
                        </li>
                        <li>
                            <img src="@/assets/image/c4.png">
                            <p class="txt">复合的测试模式</p>
                            <p class="desc">多轮BUG排查与修复</p>
                            <p class="desc">性能、兼容与适配测试</p>
                            <p class="desc">稳定安全渗透测试</p>
                        </li>
                        <li>
                            <img src="@/assets/image/c5.png">
                            <p class="txt">完善的项目管理</p>
                            <p class="desc">指定项目负责人对项目负责</p>
                            <p class="desc">成立项目小组实时反馈</p>
                            <p class="desc">把控周期进度与项目难点</p>
                        </li>
                        <li>
                            <img src="@/assets/image/c6.png">
                            <p class="txt">增值与售后服务</p>
                            <p class="desc">提供7*12小时响应机制</p>
                            <p class="desc">12个月免费维护服务</p>
                            <p class="desc">多项有价值的增值服务</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- service E -->
            <!-- company S-->

            <div class="mod company">
                <img src="@/assets/image/a1.png" alt="">
            </div>
            <!-- company E-->

        </div>

        <!-- footer S -->
        <div class="footer">
            <div class="links-wrap wrap cl">
                <dl class="links footer-contact">
                    <dt><em>联系</em> <p>Contact</p></dt>
                </dl>
                <dl class="links">
                    <dt>关注</dt>
                    <dd><img src="@/assets/image/share.jpg" alt=""><img src="@/assets/image/share.jpg" alt=""><img src="@/assets/image/share.jpg" alt=""></dd>
                </dl>
                <dl class="links footer-company">
                    <dt>集团网站响应式模板</dt>
                    <dd>公司：某某股份有限公司</dd>
                    <dd>手机：18888888888</dd>
                    <dd>邮箱：admin@admin.com</dd>
                </dl>
                <dl class="links footer-company">
                    <dt class="hide">联系方式</dt>
                    <dd>电话 400-400-4000</dd>
                    <dd>传真 400-400-4000</dd>
                    <dd>邮箱编码：136000</dd>
                </dl>
                <!-- <div class="weixin">
                    <p>关注微信公众号</p>
                    <img src="./static/index-qrcode.a91a24f.jpeg">
                </div> -->
            </div>
            <p class="cr wrap">© 大谦科技&nbsp;2020</p>
        </div>
        <div style="display: none">
      
        </div>
        <!-- footer E -->

    </div>
    <div id="formPop" class="form-pop-wrap" :class='ifPop?"active":""'>
        <div class="mask"></div>
        <div class="form-pop">
            <div class="hd">
                <h2>留下您的联系方式</h2>
                <i class="icon iconfont icon-nav-close" @click='(ifPop = !ifPop)'></i>
            </div>
            <div class="bd">
                <form>
                    <fieldset>
                        <input id="name" type="text" placeholder="您的姓名" v-model="name">
                    </fieldset>
                    <fieldset>
                        <input id="mobile" type="text" placeholder="联系电话" v-model="mobile">
                    </fieldset>
                    <fieldset>
                        <input id="code" class="sms-code" type="text" placeholder="手机验证码" v-model="code">
                        <span class="get-code" id="getCode" @click="getCode">{{countDowncode}}</span>
                    </fieldset>
                    <button class="btn" id="submitForm" @click="confirm()" >确认</button>
                </form>
            </div>
        </div>
    </div>

    <div id="submitSuccessPop" class="form-pop-wrap submit-success" :class='ifSuccess?"active":""'>
        <div class="mask"></div>
        <div class="form-pop">
            <div class="hd">
                <h2></h2>
                <i class="icon iconfont icon-nav-close" @click='ifSuccess = !ifSuccess'></i>
            </div>
            <div class="bd">
                <i class="icon iconfont icon-selected"></i>
                <p><strong>您的需求已经提交成功</strong><br>产品顾问将尽快与您取得联系</p>
                <img src="javascript:;" alt="">
                <p>扫码关注微信公众号<br>随时获取项目状态</p>
            </div>
        </div>
    </div>

    <div class="tips" id="projectTips">
        <span class="inner">
        <span class="text"></span>
        <span class="close-tips"></span>
        </span>
    </div>



    <div class="mask2" :class='ifMask?"active":""'>
      <li v-for="(item,index) in headerLink" :key=index >
          {{item}}
      </li>
    </div>



  </div>
</template>

<script>
import qs from 'qs';
export default {
  data () {
    return {
      projectType:{id:null,title:"选择您的项目类型"},
      projectTime: {id:null,title:"选择您的项目时间"},
      projectUrgency:{id:null,title:"选择项目紧急程度"},
      name:null,
      mobile:null,
      code:null,
      projectOptions:{
          type:[],
          time:[],
          urgency:[]
      },

      headerLink:['跳转1','跳转1','跳转1','跳转1','跳转1'],
      ifMask:false,
      ifPop:false,
      ifSuccess:false,
      countDowncode:'获取验证码',
      countdown:60,
      // 行业方案
      project:null,
      // 文章
      article:null
    };
  },

  components: {},

  computed: {},
 mounted:function(){  
       
          this.getProjectRequire();
                  
          this.getHomeIndex();
        }  ,

  methods: {


    // 获取项目需求列表
    getProjectRequire(){
       this.$axios.get("http://192.168.1.103/api/Project/getInfo")
          
            this.$http({
                method:'get',
                url:'api/Project/getInfo'
            }).then(res=>{
                console.log(res.data)
              let data = res.data;
              this.projectOptions.type = data.project;
              this.projectOptions.time = data.time;
              this.projectOptions.urgency = data.degree;
              console.log("this.projectOptions===========>",this.projectOptions);
            }).catch(err=>{
                
            })
    },

    // 获取首页信息
    getHomeIndex(){
    this.$http({
        url:'api/index/index',
        method:'get'
    }).then(res=>{
        this.article = res.data.project;
        this.project = res.data.article;
        console.log("this is res========>",res);
    }).catch(err=>{
         console.log("this is err========>",err);
    });
    },



    // 获得项目信息，提交
    submit(){


      // 检测项目信息是否完整
      if(this.projectType.id === null){
         this .$toast.center( '请选择项目类型' );
        return false;
      }else if(this.projectTime.id  ===null){
          this .$toast.center( '请选择项目时间' );
        return false;
      }else if(this.projectUrgency.id === null){
          this .$toast.center( '请项目紧急程度' );
        return false;
      }
      console.log("通过检测,弹出窗口");
      this.ifPop = true;      
    },
    // 确认个人信息，然后发送到后台
    confirm(){
        if(!this.name){
        this .$toast.center( '请填写您的姓名' );
        return false;
      }else if(!this.mobile){
this .$toast.center( '请选择您的手机号码' );
        return false;
      }else if(!this.code){
        this .$toast.center( '请填写您的验证码' );
        return false;
      }
      console.log("通过检测,发送请求");
      

    // 发送提交请求
      let data ={
                  "name":this.name,
                  "mobile":parseInt(this.mobile),
                  "code":parseInt(this.code),
                  "project":parseInt(this.projectType.id),
                  "time":parseInt(this.projectTime.id),
                  "degree":parseInt(this.projectUrgency.id)
                };
      let url = 'api/Project/upRelease';          

     this.$http({
         data,
         url
     }).then(res=>{
            if(res.code = 0){
this.ifPop = false;
      this.ifSuccess = true;
            }else{
                this.$toast.center(res.msg);
            }
     }).catch(err=>{

     })          

    },

    getCode(){
      if(true){
       this.countDowncode = this.countdown + 's 后重发'; 
       this.countDown();
      }
    },
    countDown(){
           var _self = this;
        let interval = setInterval(() => {
            _self.countdown--;
            
            if(_self.countdown<55){
                clearInterval(_self.interval);
            }
        }, 1000);
    },

    toggleNeeds(type) {

      let theType = {type:type};
      
      if(type == 'categoryList'){
          this.$refs.categoryList.style.display =  (this.$refs.categoryList.style.display === 'block')? 'none':'block';
                this.$refs.termList.style.display='none';
      this.$refs.urgencyList.style.display='none';
      }else
      if(type == 'termList'){
          this.$refs.termList.style.display =  (this.$refs.termList.style.display === 'block')? 'none':'block';
            this.$refs.categoryList.style.display='none';
             this.$refs.urgencyList.style.display='none';
      }
      else{
         this.$refs.urgencyList.style.display =  (this.$refs.urgencyList.style.display === 'block')? 'none':'block';
               this.$refs.categoryList.style.display='none';
      this.$refs.termList.style.display='none';
      }
      
    },
    closeNeeds(){
      this.$refs.categoryList.style.display='none';
      this.$refs.termList.style.display='none';
      this.$refs.urgencyList.style.display='none';
    },

    chooseType(list,value){
      if(value.timeStamp ){


         if(list === 'type'){
          this.projectType.id = value.target.value;
          console.log("this.projectType========>", this.projectType );
        
      }
      if(list === 'time'){
        this.projectTime.id = value.target.value;
          console.log("this.projectTime========>", this.projectTime );
     
      }
      if(list === 'urgency'){
            this.projectUrgency.id = value.target.value;
          console.log("this.projectUrgency========>", this.projectUrgency );

      }


        return false;
      }
      console.log("pc端");

      if(list === 'type'){
          this.projectType = value;
           this.$refs.categoryList.style.display='none';
            console.log("this.projectType========>", this.projectType );
      }
      if(list === 'time'){
          this.projectTime = value;
          this.$refs.termList.style.display='none';
          console.log("this.projectTime========>", this.projectTime );
      }
      if(list === 'urgency'){
          this.projectUrgency = value;
          this.$refs.urgencyList.style.display='none';
           console.log("this.projectUrgency========>", this.projectUrgency );

      }
    },
  }
}

</script>
<style scoped>
      @import '../assets/css/index.css';
</style>