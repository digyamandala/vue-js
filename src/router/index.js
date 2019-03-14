import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/pages/ContactUsPage'
import ProductsPage from '@/pages/ProductsPage'
import CategoriesPage from '@/pages/CategoriesPage'
import MembersPage from '@/pages/MembersPage'
import HomeMainPage from '@/pages/HomeMainPage'

// This is the routing
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeMainPage',
      component: HomeMainPage
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesPage
    },
    {
      path: '/members',
      name: 'Members',
      component: MembersPage
    }
  ],
  mode: 'history'
})
