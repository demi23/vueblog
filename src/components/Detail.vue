<template>
  <div class="detail">
   
     <nav class="breadcrumb">
     <a class="breadcrumb-item" href="#">Home</a>

     <span class="breadcrumb-item active">详情页</span>
</nav>

    <div class="wrapper">
      <h2 class="title">{{title}}</h2>
       <h2>{{author}}</h2>
       <h3>{{createdAt | formatDate}}</h3>
       <span>类别：{{ category}}</span>
       <div v-html="content"></div>
    <div v-if="author== username"> 
   <a class="btn btn-primary mr-2" :href="'/varticles/edit/'+this.$route.params.id"> Edit</a>
   <a class="btn btn-danger delete-article" @click="delect">Delete</a>  
   </div>
  </div>
</div>
 
</template>
<script>
import dateFormat from '../assets/js/date';
export default {
  data(){
    return{
     title:"",
     author:"",
     content:"",
     createdAt:"",
     category:""
    }
  },
  components:{
  //  List_home,
  },
     mounted: function () {
  
  if (this.$route.params.id) {  
    this.$axios.get('http://127.0.0.1:5000/varticles/'+ this.$route.params.id)
      .then((res)=>{
     
       // let article=res.data;
   
       this.title=res.data.article.title;
       this.content = res.data.article.body;
       this.author=res.data.user.name;
       this.createdAt=res.data.article.createdAt;
       this. category=res.data. category.title;
     
      })
        }
  },
  methods: {
   delect:function(){
       this.$axios.delete(this.webUrl+ this.$route.params.id)
       .then((res)=>{
       //  alert(res.data.msg);
          this.refreshArticleList()
       })
   },
      refreshArticleList: function () {
        this.$router.push({name:'/'})
      }
  },
  //   components: {
  //   Layout
  // },
  computed: {
     username() {
       return localStorage.getItem("username");
     }
  },
   filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy.MM.dd");
         }
     },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

