import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompPager from './old/components/paging.vue';
import Common from './components/common/common.js';
import axios from 'axios'
import Menu from './components/common/menu.vue'
import stat1 from './components/stat/stat1.vue'
import stat2 from './components/stat/stat2.vue'
import stat3 from './components/stat/stat3.vue'
import stat4 from './components/stat/stat4.vue'
import treeview from './components/stat/treeview.vue'
import scalender from './components/stat/scalender.vue'
 
Vue.use(VueRouter);
Vue.component('pager', CompPager);
Vue.component('auto-menu', Menu);

Vue.config.devtools = true;

const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
const instance = axios.create({
  headers: { "X-XSRF-TOKEN": CSRF_TOKEN }
});
export const AXIOS = instance;

Vue.prototype.$axios = AXIOS;
Vue.prototype.$sendAxios = function(url, sendData, callback){
    AXIOS.post(url, sendData)
    .then(function(response) {
        try {   
            Common.fnCheckAxiosResult(response);
        } catch (error) {
            
        } finally{
            callback(response);
        }
    }).catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
};

const routes = [    
    { path: '/stat1', component: stat1, name: 'stat1', nameKor:'월 전체 리스트', useYn:"Y" },
    { path: '/stat2', component: stat2, name: 'stat2', nameKor:'월 프로젝트별 시간', useYn:"Y" },
    { path: '/stat3', component: stat3, name: 'stat3', nameKor:'월 사람별 시간', useYn:"Y" },
    { path: '/stat4', component: stat4, name: 'stat4', nameKor:'일 데이터', useYn:"Y" },
    { path: '/treeview', component: treeview, name: 'treeview', nameKor:'조직도', useYn:"Y" },
    { path: '/scalender', component: scalender, name: 'scalender', nameKor:'일정관리', useYn:"Y" },
];

Vue.prototype.$routeList = routes;

const router = new VueRouter({
    routes
})

const rootVm = new Vue({
    data: function() {
        return{
            csrf:{
                name : "",
                value : ""
            },
            isActive: true,
            hasError: false

        }
    },
    mounted: function() {
    },
    methods: {
    },
    router
}).$mount('#xp-container');

