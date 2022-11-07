import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompPager from './old/components/paging.vue';
import Common from './components/common/common.js';
import axios from 'axios'
import Menu from './components/project/menu.vue'
import projectList from './components/project/ProjectList.vue'
 
Vue.use(VueRouter);
Vue.component('pager', CompPager);
Vue.component('user-menu', Menu);

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
    { path: '/projectList', component: projectList, name: 'projectList' },
];

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
        }
    },
    mounted: function() {
        console.log("mount");
    },
    methods: {
        fnSendAxios:function(url, sendData, callback){
        },
    },
    router
}).$mount('#xp-container');



