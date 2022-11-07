<template>
        <div class="wrapper active">
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Main content -->
                <div class = "content">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-bd lobidrag">
                                <!-- <div class="panel-heading">
                                     <div class="panel-title">
                                        <h4>통계</h4>
                                    </div> 
                                </div> -->
                                <div class="panel-body">
                                    <div class="table-responsive">
                                      <div class = "form-group">
                                        <label> 월 단위 조회 </label>
                                            <div class = "input-group">
                                                <input type="text" class="form-control" v-model="nowMonth"/>
                                                <!-- <input class="form-control" type="month" v-model="toMonth" value="" id="example-month-input"> -->
                                                <span class="input-group-btn">
                                                <button class="btn btn-base" type="button" v-on:click="fnGetStat1List" >조회</button>
                                                </span>
                                            </div>
                                            <!-- <div class="input-group">
                                                <input type="month" value="" class="form-control" style="text-align: right;" v-model="nowMonth">
                                                <span class="input-group-btn"></span>
                                                <button class="btn btn-base" type="button" v-on:click="fnGetStat1List" >조회</button>
                                            </div> -->
                                      </div>  
                                        <table id="example1" class="footable table table-bordered toggle-arrow-tiny" data-page-size="8" data-filter=#filter>
                                            <thead>
                                                <tr>
                                                  <th>날짜</th>
                                                  <th>프로젝트 아이디</th>
                                                  <th>프로젝트 이름</th>
                                                  <th>작성자 이름</th>                                                
                                                  <th>근무 시간</th>
                                                    <!-- <th data-hide="all">Date of Birth</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, idx) in statList" :key="idx">
                                            <!-- <td>{{item.hour_date}}</td> -->
                                                  <td>{{item.hour_date}}</td>
                                                  <td>{{item.project_id}}</td>
                                                  <td>{{item.project_name}}</td>
                                                  <td>{{item.user_name}}</td>
                                                  <td>{{item.used_time}}</td>
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
      statList:[],
      nowMonth:"",
      toMonth:"",
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;

    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월

    if(month<10){
      month="0"+month;
    }
    vm.nowMonth=year+""+month;
    // vm.toMonth= vm.toMonth.substring(0, 4)+vm.toMonth.substring(5,6);
    vm.fnGetStat1List();
  },
  methods: {
    fnGetStat1List: function() {
      let vm = this;
      let sendData = {
        yyyymm:vm.nowMonth
      };
      this.$sendAxios("/stat/stat1", sendData, 
        function(resp){
            vm.statList = resp.data;
        });
    },
  }
};
</script>
