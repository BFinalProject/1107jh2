import "es6-promise/auto";
import Vue from "vue";
import VueRouter from "vue-router";
// import CompPager from './old/components/paging.vue';
// import Common from './components/common/common.js';
import axios from "axios";
import main from "./vues/main.vue";
import test from "./vues/test.vue";
import login from "./vues/login.vue";
import kakaomap from "./vues/kakaomap.vue";
import board from "./vues/board.vue";
import boardread from "./vues/boardread.vue";
import boardwrite from "./vues/boardwrite.vue";
// import '../mainboard/css/bootstrap.min.css'
// import '../mainboard/css/font-awesome.min.css'
// import '../mainboard/css/style.css'

// import Menu from './components/common/menu.vue'
// import projectList from './components/project/projectList.vue'
// import manHourInsert from './components/project/manHourInsert.vue'
// import monthList from './components/project/monthList.vue'
// import projectManage from './components/project/projectManage.vue'
// import timetableMngt from './components/project/timetableMngt.vue'

Vue.use(VueRouter);
// Vue.component('pager', CompPager);
// Vue.component('auto-menu', Menu);

Vue.config.devtools = true;

// const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];`
// const instance = axios.create({
//   headers: { "X-XSRF-TOKEN": CSRF_TOKEN }
// });
// export const AXIOS = instance;

// Vue.prototype.$axios = AXIOS;
Vue.prototype.$sendAxios = function(url, sendData, callback) {
  // console.log(url,sendData, callback);
  // AXIOS.post(url, sendData)
  // .then(function(response) {
  // try {
  // Common.fnCheckAxiosResult(response);
  // } catch (error) {
  //
  // } finally{
  // callback(response);
  // }
  // }).catch(function(error) {
  // if (error.response) {
  // console.log(error.response.data);
  // console.log(error.response.status);
  // console.log(error.response.headers);
  // }
  // else if (error.request) {
  // console.log(error.request);
  // }
  // else {
  // console.log('Error', error.message);
  // }
  // console.log(error.config);
  // });
};

//????????
const routes = [
  { path: "/", component: main, name: "main", nameKor: "??????", useYn: "Y" },
  {
    path: "/login",
    component: login,
    name: "login",
    nameKor: "?????????",
    useYn: "Y"
  },
  {
    path: "/test",
    component: test,
    name: "test",
    nameKor: "???????????? ??????",
    useYn: "Y"
  },
  {
    path: "/kakaomap",
    component: kakaomap,
    name: "kakaomap",
    nameKor: "???",
    useYn: "Y"
  },
  {
    path: "/board",
    component: board,
    name: "board",
    nameKor: "???????????????",
    useYn: "Y"
  },
  {
    path: "/boardread",
    component: boardread,
    name: "boardread",
    nameKor: "?????????",
    useYn: "Y"
  },
  {
    path: "/boardwrite",
    component: boardwrite,
    name: "boardwrite",
    nameKor: "?????????",
    useYn: "Y"
  }
];
Vue.prototype.$routeList = routes;

const router = new VueRouter({
  mode: "history",
  routes
});

const rootVm = new Vue({
  data: function() {
    return {
      csrf: {
        name: "",
        value: ""
      }
    };
  },
  mounted: function() {
    console.log("mount");
  },
  methods: {},
  router
}).$mount("#xp-container");
