import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompPager from './old/components/paging.vue';
import Common from './components/common/common.js';
import Axios from 'axios'
 
Vue.use(VueRouter);
Vue.component('pager', CompPager);
Vue.component('common', Common);

Vue.config.devtools = true;

new Vue({
    data: function() {
        return{
        }
    },
    mounted: function() {
        console.log("mount");
    },
    methods: {
    },
    router
}).$mount('#xp-container');
