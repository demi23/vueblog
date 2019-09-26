<template>
  <div class="header mb-2 ">
      <nav class="navbar navbar-expand-sm  bg-dark navbar-dark">
        <div class="container">
       <a class="navbar-brand" href="#">我的博客</a>
    <ul class="nav">
 
  <li class="nav-item">
    <a class="nav-link" href="/">首页</a>
  </li>
  <li class="nav-item" v-if="username!=null">
    <a class="nav-link" href="/varticles/new">添加文章</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="/articlelist">分类</a>
  </li>
  <li class="nav-item"  v-if="username==null">
    <a class="nav-link" href="/register">注册</a>
  </li>
  <li class="nav-item"  v-if="username==null">
    <a class="nav-link" href="/login">登录</a>
  </li>
 
 <li  class="nav-item" ><a class="nav-link" :href="'/varticles/userinfo/'+userid">{{username}}</a></li>
<li>  <input class="btn btn-primary" v-if="username!=null" type="submit"  @click="logout" value="注销"> </li>
</ul>

  </div>
  </nav>

  </div>

 
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  data() {
    return {
       category:""
      
      // activeIndex: '1',
    //  navMobile: false
    };
  },
  methods: {
      logout:function(){
         localStorage.removeItem('username');
         localStorage.removeItem('userid');
          this.$router.push({name:'/'})
         // this.refreshArticleList();
       //    this.$store.commit("changeIsSignIn", 0);
       window.location.reload()
      },
     
  //   handleSelect(key, keyPath) {
  //     this.$store.commit("changeIndex", key);
  //   },
  //   navToggle() {
  //     this.navMobile = this.navMobile ? false : true;
  //   },
  //   slideUp() {
  //     this.navMobile = this.navMobile ? false : true;
  //   }

  },
  refreshArticleList:function () {
        this.$router.push({name:'/'})
      },
 
// created(){
//     this.$axios.get('http://127.0.0.1:5000/varticles/555')
//       .then((res)=>{
//         this.category=res.data;
//        // console.log(this.category)
      
//       })
//   },
  
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex;
    },
    isSignIn() {
     return  this.$store.state.isSignIn;
    },
    username() {
       return localStorage.getItem("username");
     },
     userid() {
       return localStorage.getItem("userid");
     }
    // avatar() {
    //   return localStorage.getItem("avatar");
    // }
 
}
}
</script>
