import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // nameプロパティを指定することで名前を使ってルートを特定できるようになる
    // 名前を付けたルートにリンクするには、 router-link コンポーネントの to プロパティにオブジェクトを渡します。
    // e.g. <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    // ref. https://router.vuejs.org/ja/guide/essentials/named-routes.html
    name: 'home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  },
  {
    path: '/pets/:id',
    name: 'pets',
    component: Pets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
