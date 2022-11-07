import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '../vues/main.vue'
import test from '../vues/test.vue'
import login from '../vues/login.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    { path: '/',name: 'HelloWorld',component: HelloWorld},
    { path: '/', component: main, name: 'main', nameKor:'메인', useYn:"Y" },
    { path: '/login', component: login, name: 'login', nameKor:'로그인', useYn:"Y" },
    { path: '/test', component: test, name: 'test', nameKor:'일일업무 입력', useYn:"Y" },
    router = new VueRouter({
    mode: 'history',
    routes
})
  ]
})
