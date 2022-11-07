
<template>
    <div class="content-wrapper">
        <div class = "content">
            <div class="col-sm-12 col-md-12"><br></div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel lobidisable panel-bd">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    <h4>월간 업무 확인</h4>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class = "form-group">
                                    <label> 월 단위 조회 </label>
                                    <div class = "input-group">                                            
                                        <input class="form-control" type="month" value=""  v-model="tomonthDate"/>
                                        <span class="input-group-btn">
                                            <button class="btn btn-base" type="button" v-on:click="fnGetManhourListTable" >조회</button>&nbsp;
                                        </span>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table table id="example1" class="table table-bordered" data-page-size="8" data-filter="#filter">
                                        <thead>
                                            <tr class="footable-odd" style="display: table-row;">
                                                <th style = "text-align: center">프로젝트 / 날짜</th>
                                                <td style = "text-align: center" class="footable-visible" v-for="day in lastday" :key="day" v-bind:style="{ 'background-color' : fnGetDayColor(day)}"><span >{{day}}</span>
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

</template>

<script>

export default {
  data: function() {
    return {
      manHourList:[],
      projectListTable:[],
      nowMonth:"",
      tomonthDate:"",
    };
  },
  created: function() {
  },
  mounted: function() {
    let vm = this;

    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    // let day  = today.getday();

    if(month<10){
      month="0"+month;
    }
    vm.nowMonth=year+""+month;
    vm.tomonthDate=year+"-"+month;

    vm.fnGetProjectListTable();
    vm.fnGetManhourListTable();
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
      return new Date(vm.tomonthDate.substring(0,4),vm.tomonthDate.substring(5,7), 0).getDate();
    }
  },

  methods: {
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
    fnGetManhourTimeFromDate : function(date, project_id){
      let vm = this;
      let returnObj
      if(date<10){
        date="0"+date;
      }
     date = vm.tomonthDate.split("-").join("")+date;
      
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
      let colornowmonth = vm.tomonthDate+"-";
      let returnColor = "#ffffff";
      switch (new Date(colornowmonth+day).getDay()) {
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
    }
  }
};
</script>