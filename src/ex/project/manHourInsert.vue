
<template>

    <div class="content-wrapper">
        <div class="content">
            <div class="content-header">
                <div class="header-icon">
                    <i class="hvr-buzz-out fa fa-id-card-o"></i>
                </div>
                    <div class="header-title">
                        <h1>타임 테이블</h1>
                            <small>Show user timetable</small>
                                <ol class="breadcrumb">
                                    <li><a href="/#/main"><i class="pe-7s-home"></i> Home</a></li>
                                    <li><a href="#">manHourInsert</a></li>
                                    <li class="active">TimeTable</li>
                                </ol>
                    </div>
                </div>                  
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel lobidisable panel-bd">
                            <div class="panel-body">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class = "form-group">
                                        <div class="col-lg-1" style = "padding:0;">
                                            <div class = "input-group">                                            
                                                <input class="form-control" type="month" value=""  v-model="tomonthDate" style="text-align: right"/>
                                                <span class="input-group-btn">
                                                        <!-- <button class="btn btn-base" type="button" v-on:click="fnGetManhourListTable" >조회</button>&nbsp; -->
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                    <div class = "form-group">
                                        <div class="table-responsive">
                                            <table table id="example1" class="table table-bordered" data-page-size="8" data-filter="#filter">
                                                <thead>
                                                    <tr class="footable-odd" style="display: table-row;" id = "backgroundcolor" >
                                                        <th style = "text-align: center">프로젝트 / 날짜</th>
                                                        <td id = 'backgroundcolors' style = "text-align: center; font-weight: bold; text-decoration:underline;" v-on:click="fnGettablelistSelect(day)" class="footable-visible" v-for="day in lastday" :key="day" v-bind:style="{ 'background-color' : fnGetDayColor(day)}">
                                                        <span style = "cursor: pointer;" >{{day}}</span>
                                                    </tr>                                              
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in includeProject" :key="item.project_id">
                                                        <th style = "text-align: center" scope="row">{{item.project_short_name}}</th>
                                                        <td style = "text-align: center" class="footable-visible" v-for="day in lastday" :key="day" v-bind:style="{ 'background-color' : fnGetDayColor(day)}">{{fnGetManhourTimeFromDate(day, item.project_id)}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="content" style="padding-top: 5px;">  
                <div class="row">
                    <div class="col-sm-12 col-md-12">                
                        <div class="panel panel-bd">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    <h4>일일 업무 입력 &nbsp;&nbsp;<h6>※ 월간업무 입력에서 프로젝트/날짜 칸의 일자를 클릭하시면 일자별 조회/수정이 가능합니다.</h6></h4>
                                </div>
                            </div>        
                            <form>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-2 col-md-2 col-lg-2">
                                            <div class = "form-group" style = "margin:0px 0px 0px 10px;">
                                                <div class = "input-group">                                            
                                                    <input class="form-control" value=""  v-model="todayDate" style="text-align: center;height: 60px;" disabled/> <!--type ="date"-->
                                                    <span class="input-group-btn" >
                                                        <!-- <button class="btn btn-base" type="button" v-on:click="fnGetManhourList" disabled >조회</button>&nbsp; -->
                                                    </span>
                                                </div> 
                                            </div>
                                        </div>                                                
                                        <div class="col-sm-10 col-md-10 col-lg-10">
                                            <div class = "form-group">
                                                <div class="col-lg-6" style="padding: 0px;">
                                                    <label style = "padding: 0;"> 프로젝트 선택(※ 프로젝트가 보이지 않는 경우, 임형민(6690)사원에게 연락 부탁드립니다.) </label>
                                                    <div class = "input-group">
                                                        <div class="col-lg-4" style="padding: 0px;">                                            
                                                            <select class="form-control" title="프로젝트 구분" v-model="paramProject_type"  style = "margin-bottom: 20px;" >
                                                                <option disabled value="" >프로젝트 구분&nbsp;</option>
                                                                <option value="N">N / 공통 프로젝트</option>
                                                                <option value="P">P / 용역 프로젝트</option>
                                                                <option value="R">R / R&D 프로젝트</option>
                                                                <option value="Y">Y / 연차 관련</option>
                                                                <option value="Z">Z / 제안 관련</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-6" style="padding: 0px;">
                                                            <select title= "프로젝트 선택" class="form-control" v-model="paramProject_id" style = "margin-bottom: 20px;">
                                                                <option disabled value="">프로젝트 선택</option>
                                                                <option id="selectboxs" v-show="paramProject_type==prj.type||paramProject_type==''" v-for="prj in projectList" v-bind:key="prj.project_id" v-bind:value="prj.project_id">  
                                                                {{prj.project_id}}&nbsp;&nbsp;&nbsp;&nbsp;{{prj.project_short_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{prj.project_name}}</option>
                                                            </select>                                                                  
                                                        </div> 
                                                        <span class ="col-lg-1" style="padding: 0px;">
                                                            <button class="btn btn-danger" type="button" v-on:click="fnAddList">추가</button>&nbsp;
                                                        </span>
                                                    </div>                                                   
                                                </div>
                                                <div class="col-sm-4 col-md-4 col-lg-5" style="margin: 0 0 0 20px;">
                                                    <label style="padding: 0px;">당월 타임테이블 업무량</label> 
                                                    <div class="input-group" >
                                                        <div class="col-lg-12" style="padding: 0px;">
                                                            <tr v-for="jrk in projectjobRanking" :key='jrk.project_id'>
                                                            <!-- <td v-on:click="fngetMonthproject"> -->
                                                                <td>{{jrk.project_id}} / {{jrk.project_name}} / {{jrk.used_time}} 시간</td>
                                                            </tr>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>                                                 
                                    <div class="col-sm-4 col-md-4 col-lg-4" v-for="(obj, idx) in insertList" v-bind:key="obj.project_id">
                                        <form class="f1 alert alert-warning alert-dismissible" style="padding-right: 15px;">                    
                                            <label>프로젝트 작성</label>
                                            <button  style="background-color: #fcf8e3; border: none; color: red; cursor: pointer; float: right;" v-on:click="fnOnClickDelete(idx)">X</button>
                                            <div class="form-group">
                                                <div style="position: inherit; vertical-align:top;" >
                                                    <div class="col-lg-9" style="padding:inherit; margin-bottom: 20px;" >
                                                        <input class="form-control" v-model="obj.project_name" style="text-align: center" disabled/>
                                                    </div>                                                                          
                                                    <div class="col-lg-3" style="padding:inherit; margin-bottom: 20px;">
                                                        <select class="form-control" v-model.number="obj.used_time" v-on:change="fnCngSpendTime">
                                                        <!-- <option disabled value="">시간 선택</option> -->
                                                            <option v-for="num in 9 | reverse" v-bind:key="num" v-bind:value="9-num">{{9-num}}&nbsp;시간</option>
                                                        </select>  
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>설명</label>                                                  
                                                    <textarea class ="form-control" style = "margin-bottom: 20px;" v-model="obj.descript" cols="50" rows="5" /> 
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div>                                                
                                        <button class="btn btn-base w-md m-b-5" type="button" v-on:click="fnInsertManHour">저장</button>
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
      paramProject_type:'',
      paramProject_id:'',
      // returnColor:"",
      // fnGetDayColor:"",
      selectoptionList:"",
      manHourList:[],
      projectList:[],
      projectListTable:[],
      projectjobRanking:[],
      spendTime:8,
      // used_time:8,
      nowDate:"",
      nowMonth:"",
      tomonthDate:"",
      nowDateDP:{},
      insertSelect:[{
                    project_id:"",
                    project_type:"",
                    project_name:"",
                    used_time:"",
      }],
      insertList:[{
                    project_id:"",      
                    hour_date:"",
                    project_name:"",
                    used_time:8,
                    descript:"",
      }],
      insertObj:{
        project_id:"",
        project_name:"",
        hour_date:"",
        used_time:"",
        descript:"",
      }
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
    // console.log("mounted manHourInsert");

    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    if(month<10){
      month="0"+month;
    }

    if(date<10){
      date="0"+date;
    }

    vm.nowDate=year+""+month+""+date;
    vm.todayDate=year+"-"+month+"-"+date;

    vm.nowMonth=year+""+month;
    vm.tomonthDate=year+"-"+month;

    vm.insertList[0].hour_date = vm.nowDate;
    
    vm.insertObj.hour_date = vm.nowDate;

    
    vm.nowDateDP.date = new Date(year, month, date);
    // console.log(localStorage.getItem(senddate, senddate));
    // vm.reload();
    vm.fnGetProjectList(); 
    vm.fnGetjobRanking();
    // if(vm.fnGetManhourList() != vm.fnGetroutedate()){
    //   vm.fnGetManhourList();
    // }else{vm.fnGetroutedate();}
    vm.fnGetProjectListTable();
    vm.fnGetManhourListTable();
    vm.fnGetManhourList();
    vm.fnGetroutedate();


  },



  computed: {
    includeProject: function () {
      let vm =this;
      vm.fnCheckIncludeProject();
      return vm.projectListTable.filter(i => 
        i.includeFlag === 'Y'
      )
    },
    lastday: function () {
      let vm = this;
      // return new Date(vm.nowMonth.substring(0,4), vm.nowMonth.substring(5,6), 0).getDate();
      // console.log(new Date(vm.tomonthDate.substring(0,4),vm.tomonthDate.substring(5,7), 0).getDate());
      // console.log(vm.tomonthDate.substring(0,4));
      //       console.log(vm.tomonthDate.substring(5,7), 0);
      vm.fnGetManhourListTable()
          vm.fnGetjobRanking();
      return new Date(vm.tomonthDate.substring(0,4),vm.tomonthDate.substring(5,7), 0).getDate();
      
    },

  },
  
  

  methods: {
    fnGetjobRanking:function(){
      let vm = this;
      let date =  vm.tomonthDate.split("-").join("")
      let sendData = {
        hour_month: date.substring(0, 6)
      };
      this.$sendAxios("/proj/listJobRanking", sendData, 
        function(resp){
            vm.projectjobRanking = resp.data;
        });
    },
    fnCngSpendTime:function(){
      let vm = this;
      vm.spendTime=0;
      vm.insertList.forEach(el => {
        vm.spendTime+=el.used_time
      });
    },

    fnGetProjectList: function() {
      let vm = this;
      let sendData = {};
      sendData = vm.insertSelect[0];
      this.$sendAxios("/proj/projectList", sendData, 
        function(resp){
          //  console.log(resp.data);
          vm.projectList = resp.data;

          for(let i=0;i<vm.projectList.length;i++){
            let tp = vm.projectList[i].project_id.split('-');
            vm.projectList[i].type=tp[1];
          }
           
        });
    },
    fnGetManhourList: function() {
      let vm = this;
      // let routeData = {hour_date : vm.$route.params.date.split("-").join("")};
      let sendData = {
        hour_date : vm.todayDate.split("-").join("")
      };
      
      // if(sendDate != routeDate){
      //   sendDate = routeDate
      // }

      // console.log('ddd',sendData);

      this.$sendAxios("/proj/manhourList", sendData, 
        function(resp){
          if(resp.data.length != 0){
            vm.insertList = resp.data 
          }else{
            vm.insertList=[]
            vm.fnAddList();
          }
        });
    },
      fnGetroutedate: function() {
      let vm = this;
      let dates = vm.$route.params.date.split("-").join("")
      let sendData = {hour_date : dates};
      let targetDate = vm.$route.params.date 
      let monthtargetDate = vm.$route.params.date.substring(0,7);

      if(dates == '' || null){};
          vm.tomonthDate = monthtargetDate;
          vm.todayDate = targetDate;
      // if(sendData === null){
      //   sendData = {hour_date : vm.todayDate.split("-").join("")}
      // }
      // if(sendDate){
        
      // }
        // vm.todayDate = routeDate;
      // let sendData = {
      //   hour_date : vm.todayDate.split("-").join("")
      // };
      // if(sendDate != routeDate){
      //   sendDate = routeDate
      // }
      
      // console.log('ddd',sendData);

      this.$sendAxios("/proj/manhourList", sendData, 
        function(resp){
          if(resp.data.length != 0){
            vm.insertList = resp.data
          }else{
            vm.insertList=[]
            vm.fnAddList();
          }
        });
        window.history.replaceState("test",null,"./proj#/manHourinsert");
        // vm.fnGetProjectListTable();
        // vm.fnGetManhourListTable()
    },

    fnInsertManHour: function() {
      let vm = this;
      vm.fnCngSpendTime();

      if(vm.spendTime != 8){
        alert("8시간에 맞춰 입력 해주세요.");
        return; 
      }

      let selectProjectFlag = true;


      vm.insertList.forEach(el => {
      if(el.project_id === ""){
          selectProjectFlag = false;
          return;
        }
      });

      if(selectProjectFlag == false){
        alert("프로젝트를 선택 해주세요");
        return;
      }


      vm.insertList.forEach(el => {
        el.hour_date=vm.todayDate.split("-").join("");
      });


      // 중복프로젝트 체크
      let projectIdListObj={};
      let checkResult = false;


      vm.insertList.some(el => {
        if(projectIdListObj[el.project_id] != null){
          checkResult = true;
            //return true; // break
            //return false; // continue
        }else{
          projectIdListObj[el.project_id] = 1;
        }
      });

      if(checkResult == true){
        alert("중복된 같은 이름의 프로젝트가 있습니다");
        return;
      }

      this.$sendAxios("/proj/insertManhour", vm.insertList,
        function(resp){

          if(resp.data == "Not 8 Hour"){
            alert("8시간 초과 입니다");
          }else if(resp.data == "Null Project Id"){
            alert("NULL 프로젝트 아이디 에러");
          }else{
            alert("저장완료");
            vm.fnGetManhourListTable();
            vm.fnGetjobRanking();
          }
        });
    },
    fnAddList: function(){
      let vm =this;
      
      // let selectboxre = vm.paramProject_id
      // vm.paramProject_id//2020-D-564

      // vm.insertList.push(JSON.parse(JSON.stringify(vm.insertObj)));
      
          for(let i=0;i<vm.projectList.length;i++){
          if(vm.projectList[i].project_id==vm.paramProject_id){
            if(vm.insertList.indexOf(vm.projectList[i]) == -1){
              vm.projectList[i].used_time=0;
                vm.insertList.push(vm.projectList[i]);
                // vm.used_time.push(vm.projectList[i])
                // vm.insertList[0].push(vm.used_time=8)
                // vm.selectboxre = "";
                vm.paramProject_type = "";
                vm.paramProject_id = "";
              }else{
                alert("같은 프로젝트를 추가 할 수 없습니다. 다시 선택해주세요.");
              }
            // if(vm.insertList[0]){
            //   vm.used_time=8;
            //   }else{vm.used_time=0;}
            }

          
          }
          
          
    },
    
    fnOnClickDelete: function(idx){
      let vm =this;
      vm.insertList.splice(idx,1);
      // if(vm.insertList == 0){
      //   alert('프로젝트 작성 칸을 모두 지울 수 없습니다.');
      // }else{vm.insertList.splice(idx,1);}
    },

    fnCheckIncludeProject:function(){
      let vm = this;
      vm.projectListTable.some(element => {
        element.includeFlag='N'
        vm.manHourList.some(element2 =>{
          if(element.project_id == element2.project_id){
            element.includeFlag='Y'
            return true; // break
            //return false; // continue
          }
        })
      });
    },


    fnGetProjectListTable: function() {
      let vm = this;
      let sendData = {};
      this.$sendAxios("/proj/projectListTable", sendData, 
        function(resp){
            vm.projectListTable = resp.data;
        });
    },
    
    fnGetManhourListTable: function() {
      let vm = this;
      let sendData = {
        hour_month: vm.tomonthDate.split("-").join("")
      };
      this.$sendAxios("/proj/manhourList", sendData, 
        function(resp){
          vm.manHourList = resp.data;
        });
    },
    // fnGetJobRanking: function() {
    //   let vm = this;
    //   let sendData = {};
    //   this.$sendAxios("/proj/jobRanking", sendData, 
    //     function(resp){
    //         vm.projectjobRanking = resp.data;
    //         console.log(vm.projectjobRanking);
    //     });
    // },



    fnGetManhourTimeFromDate : function(date, project_id){
      let vm = this;
      let returnObj
      if(date<10){
        date="0"+date;
      }
      // console.log(date);
     date = vm.tomonthDate.split("-").join("")+date;
      // console.log(date);
      vm.manHourList.some(element2 =>{
        if(element2.hour_date == date && element2.project_id == project_id){
          returnObj = element2;
          return true; // break
          //return false; // continue
        }
      });

      if(returnObj != null){
        return returnObj.used_time;
      }else{
        return null;
      }
    },
    fnGetDayColor:function(day){
      let vm =this;
      //let weekArr = ['월', '화', '수', '목', '금', '토', '일'];
      let returnColor = "";

      let cngDay = day
      if(cngDay*1<10){
       cngDay="0"+cngDay;
      }
      let times = vm.tomonthDate+"-"+cngDay
      switch (new Date(times).getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          returnColor = "#ffffff";
          break;
        case 6:
          returnColor = "#94b8f7";
          break;
        case 0:
          returnColor = "#f79494";
          break;
        default:
          break;
      }
      
      // console.log(returnColor);
      return returnColor;
      
    },

    fnGettablelistSelect: function(day) {
      let vm = this;
      if(day*1 < 10){
        day = '0' + day;
      }
      let targetDate = vm.tomonthDate+'-'+day; 
          vm.todayDate = targetDate;
          // if(targetDate != $route.params.date){
          //   vm.todayDate = $route.params.date;
          // }else if(targetDate == $route.params.date){
          //   vm.todayDate = targetDate;
          // }else if($route.params.date = null || ''){
          //   vm.todayDate = targetDate;
          // }
          // console.log(vm.todayDate);

      // let routeDate = $route.params.date;
      //     vm.todayDate = routeDate
      // //   console.log(routeDate);
      // if(targetDate != routeDate){
      //   targetDate = routeDate;
      // }else if(routeDate == null || ''){
      //   targetDate;
      // }

      


      switch (new Date(targetDate).getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          
          vm.paramProject_id= "";
          vm.paramProject_type = "";
          vm.fnGetManhourList();
          

          break;
        case 6:
          alert('주말에는 조회하거나, 작성하실 수 없습니다.')
          break;
        case 0:
          alert('주말에는 조회하거나, 작성하실 수 없습니다.')
          break;
        default:
          break;
      }
    },
    // fngetMonthproject: function(jrk){
    //   let vm = this;
    //   vm.paramProject_id == jrk.project_id;
    //   if(jrk.project_id){
    //     fnAddList();
    //   }
    // },




    // reload: function(){
    //  if (self.name != 'reload') {
    //      self.name = 'reload';
    //      self.location.reload(true);
    //  }
    //  else self.name = ''; 
    // },

    
  }
};
// history.replaceState({}, null, location.pathname[8]);
// console.warn = console.error = () => {};
</script>
