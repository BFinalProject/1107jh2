import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/App.vue';
// import UserList from './components/userList.vue';
// import UserLogList from './components/userLogList.vue';
// import UserLogDetail from './components/userLogDetail.vue';
// import BbsList from './components/bbsList.vue';
// import BbsContentList from './components/bbsContentList.vue';
// import BbsContentWrite from './components/bbsContentWrite.vue';
// import BbsContentUpdate from './components/bbsContentUpdate.vue';
// import BbsContentDetail from './components/bbsContentDetail.vue';
// import BbsContentReply from './components/bbsContentReply.vue';
// import MenuList from './components/menuList.vue';
// import MenuRoleMng from './components/menuRoleMng.vue';
// import MenuLogList from './components/menuLogList.vue';
// import CompPager from './components/paging.vue';

// import Common from './components/common.js';
 
Vue.use(VueRouter);
// Vue.component('pager', CompPager);
// Vue.component('common', Common);

const routes = [    
    { path: '/', component: Login, name: 'login' },
    // { path: '/userList', component: UserList, name: 'userList' },
    // { path: '/userLogDetail/:userID/:dateS/:dateE', component: UserLogDetail, name: 'userLogDetail' },
    // { path: '/userLogList', component: UserLogList, name: 'userLogList' },
    // { path: '/bbsList', component: BbsList, name: 'bbsList' },
    // { path: '/bbsContentList', component: BbsContentList, name: 'bbsContentList' },
    // { path: '/bbsContentWrite', component: BbsContentWrite, name: 'bbsContentWrite' },
    // { path: '/bbsContentUpdate/:bbsID/:seq', component: BbsContentUpdate, name: 'bbsContentUpdate' },
    // { path: '/bbsContentDetail/:bbsID/:seq', component: BbsContentDetail, name: 'bbsContentDetail' },
    // { path: '/bbsContentReply/:bbsID/:seq/:title/:secret', component: BbsContentReply, name: 'bbsContentReply'},
    // { path: '/menuList', component: MenuList, name: 'menuList' },
    // { path: '/menuRoleMng', component: MenuRoleMng, name: 'menuRoleMng' },
    // { path: '/menuLogList', component: MenuLogList, name: 'menuLogList' }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#xp-container')
