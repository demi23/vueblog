<template>

  <div class="home ">
   
     <div class="row">
       <div class="col-lg-9">
      <ul class="Articles list-group" >
       <li class="list-group-item w-100" v-for="(item) in articles" :key="item.id">
       <a :href="'/varticles/'+item._id" class="card_title text-dark float-left">
        {{item.title}}
          </a>
        <span class="float-right">{{item.createdAt | formatDate}}</span>
        </li>
      </ul>
     </div>
      <div class="col-lg-3 text-left">
        <h4>活跃用户</h4>
        <p v-for="(user) in users"  :key="user.id">
          <img :src="'http://127.0.0.1:5000/uploads/'+user.portrait" style="height:50px;width:50px;">
          <a :href="'/varticles/userinfo/'+user._id"> {{user.name}} </a>
          </p>
      </div>
  </div>
</div>
 
</template>
<script>
import dateFormat from '../assets/js/date';
 
export default {
  data(){
    return{
      articles:[],
      users:[]
    }
  },
  components:{
  //  List_home,
  },
  created(){
    this.$axios.get(this.webUrl)
      .then((res)=>{
       
        this.articles=res.data.article;
        this.users=res.data.user;
      })
  },
  filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy.MM.dd");
         }
     },
  //  components: {
  //   Layout
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
