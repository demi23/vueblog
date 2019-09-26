<template>
   <div class="articles">
         <ul class=" list-group" >
          <li class="list-group-item w-100" v-for="(item) in articles" :key="item.id">
          <a :href="'/varticles/'+item._id" class="card_title text-dark float-left">
            {{item.title}}
          </a>
        <span class="float-right">{{item.createdAt | formatDate}}</span>
        </li>
      </ul>
      </div>
</template>
<script>
import dateFormat from '../../assets/js/date';
export default {
  data(){
    return{
     articles:[]
    }
  },
    filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy.MM.dd.hh");
         }
     },
mounted: function () {
      if(!this.$route.params.id){
      this.$axios.get(this.webUrl+'category/555')
      .then((res)=>{
        this.articles=res.data.article;
      })  
      } else{
      this.$axios.get(this.webUrl+'category/'+this.$route.params.id)
      .then((res)=>{
        this.articles=res.data.article;
      })  
      }
    },
  watch:{
    
  $route(to,from){
     if( this.$route.params.id){
     this.$axios.get(this.webUrl+'category/'+ this.$route.params.id)
      .then((res)=>{
        this.articles=res.data.article;
      })
   }  else{
      this.$axios.get(this.webUrl+'category/555')
      .then((res)=>{
        this.articles=res.data.article;
      })  
   }
  } 
},
  //  components: {
  //   Layout
  // },
}
</script>
