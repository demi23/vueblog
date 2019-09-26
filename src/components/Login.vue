<template>
  <div class="login ">
   
     <h1>登录</h1>
  <div class="container">
    <div class="form-group ">
       <label class="float-left">用户名:</label><input class="form-control" name="username" type="text" v-model="username" placeholder="用户名">
    </div>
     <div class="form-group">
        <label  class="float-left">密码:</label><input class="form-control" name="password" type="password" v-model="password" placeholder="密码">
         </div>
         <br>
         <input class="btn btn-primary" type="submit" value="Submit"  @click="login">
  </div>
</div>
 
</template>
<script>



import qs from 'qs';
export default {
  data(){
    return{
     username:"",
     password:"",
     status: 1, //1登录,2注册，3loading
     txtSignIn: false
    }
  },
 
  //   components: {
  //   Layout
  // },
  methods:{
  login:function(){
  
     
  this.$axios.post(this.webUrl+'login',   
    qs.stringify({
         username: this.username,
         password: this.password,
      }))
     .then((res)=>{
        console.log(res.data.msg);
        
        if(res.data.status===1){
          //let type = res.data.type;
         // this.status = 3;
            localStorage.setItem("token", res.data.token);
             localStorage.setItem("username", res.data.username);
            localStorage.setItem("userid", res.data.userinfo._id);
           //  this.$store.commit("changeIsSignIn",1);
          //   window.location.reload()
            this.refreshArticleList()
           
            //  setTimeout(() => {
            //   this.txtSignIn = true;
            //   setTimeout(() => {
            //     if (type == 1) {
            //       this.$router.push({ name: "ArticleList" }); //admin
            //     } else if (type == 2) {
            //       this.$router.push({ name: "visiter" }); //游客
            //     }
            //   }, 1500);
            // }, 3000);
          } else {
            that.$message({
              type: "error",
              //message: response.data.msg
            });
          }
         // this.refreshArticleList()
        // this.$store.commit( 'setUserInfo', res.data);
           
        // this.$store.updateUserInfo(res.data);
       //  mapActions(`user`,[`updateToken`,`updateUserInfo`,`updateRoleInfoList`]),
       //  mapMutations(`user`, [`setUserInfo`, `setToken`,  `setRoleInfoList`])
      
         
      })
  },
    refreshArticleList:function () {
        this.$router.push({name:'/'});
        window.location.reload()
      },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
