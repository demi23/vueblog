<template>
  <div class="category">
   
    <div class="container m-3">

        <router-link to="/articlelist">全部</router-link>
         <router-link v-for="(item) in categories" :key="item.id"  :to="'/articlelist/'+item.id ">{{item.title}}&nbsp;&nbsp;</router-link>
            <router-link to="/new" v-if="username!=null">增加分类</router-link><br/>
        </div>
        <router-view></router-view>
        
      
  
  </div>
</template>
<script>
import dateFormat from '../assets/js/date';
export default {
  data(){
    return{
     categories:[],
     articles:[]
    }
  },
  components:{
  //  List_home,
  },
    filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy.MM.dd.hh.mm");
         }
     },
  mounted: function () {
    this.$axios.get(this.webUrl+'category/555')
      .then((res)=>{
       
        this.categories=res.data.category;
       // this.articles=res.data.article;
      })
     
  },
    computed: {
       username() {
       return localStorage.getItem("username");
     }
    }
//   watch:{
//    'route'(to ,from){}
// }
  //  components: {
  //   Layout
  // },
}
</script>