<template>
  <div class="register ">
    
     <h1>注册</h1>
     <div class="container">
     <div class="form-group">
       <label class="float-left">昵称:</label><input class="form-control" name="name" type="text" v-model="name" placeholder="用户名">
    </div>
     <div class="form-group">
       <label class="float-left">邮箱:</label><input class="form-control" name="email" type="text" v-model="email" placeholder="邮箱">
    </div>
    <div class="form-group">
       <label class="float-left">用户名:</label><input class="form-control" name="username" type="text" v-model="username" placeholder="用户名">
    </div>
     <div class="form-group">
        <label class="float-left">密码:</label><input class="form-control" name="password" type="password" v-model="password" placeholder="密码">
         </div>
       <div class="form-group">
        <label class="float-left">重复密码:</label><input class="form-control" name="repassword" type="password" v-model="repassword" placeholder="重复密码">
         </div>
         <br>
         <input class="btn btn-primary" type="submit" value="Submit"  @click="register">
  </div> 
</div>
 
</template>
<script>

import qs from 'qs';
export default {
  data(){
    return{
    name:"",
    email:"",
    username:"",
    password:"",
    repassword:""
    }
  },
 
  methods:{
  register:function(){
    
      if(this.password==this.repassword){
          this.$axios.post(this.webUrl+'register',
      qs.stringify({
             name: this. name,
             email: this.email,
             username:this.username,
             password:this.password,
             portrait:"1566984222601.png"
           
      }))
    
      .then((res)=>{
         alert(res.data.msg)
    
      })
      }else{
          alert("重复密码不一致")
      }
   
    
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

