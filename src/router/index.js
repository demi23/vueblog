import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import New from '@/components/New'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Edit from '@/components/Edit'
import Userinfo from '@/components/Userinfo'
import Category from '@/components/Category'
import NewCategory from '@/components/category/NewCategory'
import ArticleList from '@/components/category/ArticleList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/varticles/new',
      component: New
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/varticles/userinfo/:id',
      component: Userinfo
    },
     
    {
      path: '/category',
      component: Category,
      children: [
        {
         path: '/new',
         component: NewCategory
        },
        {
          path: '/articlelist',
          component: ArticleList
         },
        {
          path: '/articlelist/:id',
          component: ArticleList
         }
      ]
    },
    {
      path: '/varticles/:id',
      component: Detail
    },
    {
      path: '/varticles/edit/:id',
      component: Edit
    },
 
    
   
  ]
})
