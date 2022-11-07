import 'es6-promise/auto'
import Vue from 'vue';
import CompPager from './old/components/paging.vue';
import Common from './components/common/common.js';
import axios from 'axios'
import Menu from './components/common/menu.vue'
 
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


const rootVm = new Vue({
    data: function() {
        return{
            todayDate : "",
            useradmincheck : [],
            csrf:{
                name : "",
                value : ""
            },
            PageCheck:null,

        }
    },
    mounted: function() {
        let vm = this;
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let day = today.getDay();

        let todayDate = year + '-' + month + '-' + date;
        // console.log(todayDate);
        let menuUriMapper = [
                            //GW
                            {uri : "#", id : "GW-1"}, 
                            {uri : "#", id : "GW-1-1"},
                            {uri : "#", id : "GW-1-2"}, 
                            {uri : "#", id : "GW-1-3"},
                            {uri : "/scheduleMngt", id : "GW-1-4"},
                            {uri : "#", id : "GW-1-5"},
                            {uri : "/orzChart", id : "GW-1-6"},
                            //HR
                            {uri : "#", id : "HR-1"},
                            {uri : "#", id : "HR-1-1"},
                            {uri : "#", id : "HR-1-1-1"},
                            {uri : "#", id : "HR-1-1-2"},
                            {uri : "#", id : "HR-1-1-3"},
                            {uri : "/proj#/manHourInsert", id : "HR-1-2"},
                            {uri : "/proj#/timetablemngt", id : "HR-1-4"},
                            {uri : "#", id : "HR-1-3"},
                            {uri : "/stat#/stat1", id : "HR-1-3-1"},
                            {uri : "/stat#/stat2", id : "HR-1-3-2"},
                            {uri : "/stat#/stat3", id : "HR-1-3-3"},
                            {uri : "/stat#/stat4", id : "HR-1-3-4"},
                            //ERP
                            {uri : "#",	id : "ERP-1"}];

            console.log(menuUriMapper);

        vm.fnGetaAminUserCheck();
        // vm.fnGetMenuFilter();
    },
    methods: {
        fnGetaAminUserCheck: function() {
            let vm = this;
            let sendData = {};
            vm.$sendAxios("/user/Userauthority", sendData, 
                function(resp){
                    vm.useradmincheck = resp.data;
                    // console.log('11111',vm.useradmincheck);
                    // var menuhide = document.getElementById("HR-1-4")
                    var jsonArray  = new Array();
                        vm.useradmincheck.forEach(function(item){
                            // console.log("ITEM ::: ",item);
                            var jsonObj = new Object();
                            if(item.user_type_code == 'admin'){
                                // item.user_position == '시스템' || '대표이사' || '사장'|| '부사장'|| '전무' || '상무' || '소장' || '이사' || '부장' || '과장'
                                jsonObj.user_type_code = item.user_type_code;
                                jsonObj.user_name = item.user_name;
                                jsonObj.user_position = item.user_position;
                                jsonObj.user_dept = item.user_dept;
                                // jsonArray.push(jsonObj);

                                // if(urls === '/proj#/timetablemngt'){
                                //     if(jsonObj.user_type_code === 'admin'){
                                //         // alert('접속완료')
                                //     }else{
                                //         alert('관리자만 접근 가능합니다');
                                //         window.location.href="/#/main/";
                                //     }
                                // };
                            }
                            // console.log(jsonObj.user_position)
                            // jsonObj.url = '/proj#/manHourInsert/'
                            var urls = window.location.href.substring((window.location.protocol + "//" + window.location.host).length);
                            
                            if(urls === '/proj#/timetablemngt'){
                                if(jsonObj.user_type_code === 'admin'){
                                    // alert('접속완료')
                                }else{
                                    alert('관리자만 접근 가능합니다');
                                    window.location.href="/#/main/";
                                }
                            };
                               
                            if(jsonObj.user_type_code === 'user'){
                                // menuhide.hide();
                                document.getElementById("HR-1-4").hide();
                                document.getElementById("HR-1-3-1").hide();
                                // $("#HR-1-4").hide();
                                // $("#HR-1-3").hide();
                            }
                        console.log(jsonObj.user_type_code);
                        });
                        // vm.PageCheck = jsonArray;
                        // console.log(vm.PageCheck)
                        // console.log(vm.PageCheck);**
                        // console.log(json.stingify(vm.PageCheck.user_type_code));
                        // console.log("tttt", vm.PageCheck[0]);
                    
                                    

                    });

                // console.log(vm.manHourListAll);
            },

        // fnUserUpdatePassword: function(jsonObj) {
        //         this.$sendAxios("/user/updatePassword", jsonObj, 
        //           function(resp){
        //               console.log(resp);
        //     });
        // },    
        // fnGetMenuFilter: function() {
        //     $(document).ready(function() {
        //         var totalUrl = window.location.href;
        //         var urls = window.location.href.substring((window.location.protocol + "//" + window.location.host).length);
        //         var activeid;
        //         var headerid;
        //         /*var blankLink = url.indexOf('#');*/
        //         menuUriMapper.forEach(function(e) {
        //             if (e.uri == urls) {
        //                 /* 	   		ajaxid = e.id */
        //                 activeid = e.id.substring(0, 6);
        //                 headerid = activeid.substring(0, 4); //기준이되는 헤더 id
        //                 treevueid = activeid.substring(0, 6); //treevue id
        
        // /*  				 console.log(urls); // ex ) /stat/stat4 //주소
        //                  console.log(headerid);  // ex) HR-1
        //                  console.log(activeid); //ex) HR-1-1 
        //                  console.log(treevueid);  */
        
        //                 {
        //                     $('li[id=' + headerid + ']').addClass(
        //                             'active')
        //                 }
        //                 ;
        //                 {
        //                     $('li[id=' + activeid + ']').addClass(
        //                             'active')
        //                 }
        //                 ;
        //                 {
        //                     $('li[id=' + treevueid + ']').addClass(
        //                             'active')
        //                 }
        //                 ;
        //             };
        //         });	 	
        //     });	
        // },
           
    },
}).$mount('#xp-container');

