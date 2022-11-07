<template>
 <div class="content-wrapper">
                <div class="content">
                  <div class="from-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-bd">
                                <div class="panel-body">
                                    <div class="modal-text-header">
                                        <h1><span>일일업무 입력은 "HR" > "타임테이블" 메뉴를 이용해주세요.</span>
                                        <h4><span> 오류 발생 시 "임 형민" 사원(6690) 에게 연락 바랍니다.</span></h4></h1>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="panel panel-bd lobidrag">
                                <div class="panel-heading">
                                    <div class="panel-title">
                                        <h4>Notice</h4>
                                    </div>
                                </div>
                                <div class="panel-body" style = "height:305px;">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Abdullah</td>
                                                    <td>Bin</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Md</td>
                                                    <td>Salah</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Ibrahim</td>
                                                    <td>Hossain</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Mubin</td>
                                                    <td>Khan</td>
                                                    <td>@mubin15</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Ruzel</td>
                                                    <td>Ahmad</td>
                                                    <td>@Ruzeld</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="panel lobidisable panel-bd">
                                <div class=panel-heading>
                                    <div class=panel-title>
                                        <!-- <i class=ti-stats-up></i> -->
                                        <h4>Release Notes</h4>
                                    </div>
                                </div>
                                <div class=panel-body style = "height:305px;">
                                    <ul class="activity-list list-unstyled">
                                        <li class=activity-danger>
                                            <small class=text-muted>2022.02.04 업데이트</small>
                                            <p>타임테이블 작성 간 공휴일은 작성완료 표출 기능이 추가 되었습니다.</p>
                                        </li>
                                        <li class=activity-purple>
                                            <small class=text-muted>2022.01.28 업데이트</small>
                                            <p>비밀번호 변경 페이지가 추가 되었습니다.<br>
                                            <span class="label label-success label-pill" style="cursor: pointer;" v-on:click="pagelink">비밀번호 변경페이지로 이동하기</span></p>
                                        </li>
                                        <!--<li class=activity-warning>
                                            <small class=text-muted>22 minutes ago</small>
                                            <p>You <span class=text-danger>subscribed</span> to Harold Fuller</p>
                                        </li>
                                        <li class=activity-primary>
                                            <small class=text-muted>30 minutes ago</small>
                                            <p>You updated your profile picture</p>
                                        </li>
                                        <li>
                                            <small class=text-muted>35 minutes ago</small>
                                            <p>You deleted homepage.psd</p>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>                            
                            <!-- <div class="panel panel-bd lobidrag">                                
                                <div class=panel-heading>
                                    <div class=panel-title>
                                         <i class=ti-email></i> 
                                        <h4>Messages</h4>
                                    </div>
                                </div>
                                <div class="panel-body" style = "height:180px;">
                                    <div class=message_inner>
                                        <div class=message_widgets>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Farzana Yasmin</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status available pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar2.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Mubin Khan</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status away pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar3.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Mozammel Hoque</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status busy pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar4.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Tanzil Ahmed</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status offline pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar5.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Amir Khan</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status available pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Salman Khan</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status available pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Farzana Yasmin</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status available pull-right"></span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div class=inbox-item>
                                                    <div class=inbox-item-img><img src="contents/assets/dist/img/avatar4.png" class=img-circle alt=""></div>
                                                    <strong class=inbox-item-author>Tanzil Ahmed</strong>
                                                    <span class=inbox-item-date>-13:40 PM</span>
                                                    <p class=inbox-item-text>Hey! there I'm available...</p>
                                                    <span class="profile-status offline pull-right"></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-sm-6">
                            <div class="panel panel-bd lobidrag">
                                <div class="panel-heading">
                                    <div class="panel-title">
                                        <h4>Calender&nbsp;<h6>일자 클릭 시 타임테이블 조회로 이동합니다.</h6></h4>
                                    </div>
                                </div>
                                <div class="panel-body">
                                <!-- <div class="panel-body" v-for="obj in manHourList" :key ="obj.use_yn"> -->
                                    <div id="calendar" v-on:click ='dayClick'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
</div>
</template>

<script>
export default {
    data: function() { 
        return { 
            manHourListAll:[{
                hour_date:"",
                porject_id:"",
                user_id:"",
                use_yn:"",
                sys_title:"",
            }],
            tomonthDate:"",
            todayDate:"",
            lasttodayDate:"",
            senddate:"",
            calenderJsonArray:null,
            // calenderbackJsonArray:null
            }
        },
    created: function() {
    },
    mounted: function() {
    let vm = this;
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let day = today.getDate();  // 날짜
    
    if(month<10){
      month="0"+month;
    }

    if(day<10){
      day="0"+day;
    }
    
    vm.todayDate=year+"-"+month+"-"+day;
    vm.tomonthDate=year+"-"+month;
    
    // console.log('start',vm.todayDate);

    // vm.fnGetTest();
    vm.fnGetManhourListTable();
    
    },
methods: {
    fnGetManhourListTable: function() {
    let vm = this;
    let sendData = {
        hour_month: vm.tomonthDate.split("-").join("")
        };
    vm.$sendAxios("/proj/manhourListAll", sendData, 
        function(resp){
          vm.manHourListAll = resp.data;
        vm.getcalendarSettings();
        });
        // console.log(vm.manHourListAll);

    },

    // fnGetTest: function() {
    // let vm = this;
    // let sendData = {
        
    //     };
    // vm.$sendAxios("/user/Userauthority", sendData, 
    //     function(resp){
    //         vm.test = resp.data;
    //     });
    //     // console.log(vm.manHourListAll);

    // },
    

    getcalendarSettings:function(){
    let vm = this; 
    // var ddd = date;
    // console.log(ddd);
        $(document).ready(function() {  
            var jsonArray  = new Array();
            vm.manHourListAll.forEach(function(item){
                var jsonObj = new Object();
                if(item.use_yn === 'Y' || item.sys_title){
                    jsonObj.start = item.hour_date;
                    jsonObj.title = '작성완료';
                    jsonObj.rendering = 'background';
                    jsonObj.color = '#ffffff';
                    jsonObj.url = '/proj#/manHourInsert/';
                    jsonObj.sys_title = item.sys_title;
                    jsonArray.push(jsonObj);
                }
                if(item.use_yn === null || '' || 'N'){
                    jsonObj.start = item.hour_date;
                    jsonObj.title = '미작성';
                    jsonObj.url ="/proj#/manHourInsert/" + item.hour_date;
                    jsonObj.sys_title = item.sys_title;
                    jsonArray.push(jsonObj);
                }
                // jsonObj.url = '/proj#/manHourInsert/'
            })
            vm.calenderJsonArray = jsonArray;

            
            $('#calendar').fullCalendar({
            // eventClick: function(event, date) {
            // var senddate = date.format();
            // new Date(senddate).getDay();
            //     if (event.url) {
            //         window.open(event.url + date.format());

            //     }
            // },    
            
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,listMonth'    /* right: 'month,agendaWeek,agendaDay,listMonth' */
                    },
                defaultDate: vm.todayDate,
                // eventLimit : true,
                navLinks: false, // can click day/week names to navigate views
                businessHours: true, // display business hours
                editable: false,
                droppable: true, // this allows things to be dropped onto the calendar
                // defaultDate: moment(new Date(),'YYYY-MM-DD'),
                weekends: true,
                dayClick: function(date) {
                    var senddate = date.format();
                    console.log(senddate);
                    // var host = window.location.href="/proj#/manHourInsert/" + date.format();
                    switch (new Date(senddate).getDay()) {
                        case 1:
                        case 2:
                        case 3:
                        case 4: 
                        case 5: 
                                window.location.href="/proj#/manHourInsert/" + date.format();
                        break;
                        case 6:
                                alert('주말에는 조회하거나, 작성하실 수 없습니다.')
                        break;
                        case 0:
                                alert('주말에는 조회하거나, 작성하실 수 없습니다.')
                        break;
                        default:
                        break;
                        };
                    },      

                events:vm.calenderJsonArray
            });
        });
    },
    getFilterdRoutes:function(){
        let returnList=[]
        let vm = this;
        vm.$routeList.forEach(element => {
            // console.log(element.useYn == 'Y');
            if(element.useYn == 'Y'){
                returnList.push(element);
            }
        });
        return returnList;
    },
    
    pagelink:function(){
        let vm = this;
        window.location.href = "/user?#/userinfo"
    }

    
   
  }
};
</script>
