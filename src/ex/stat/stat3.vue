<template>
        <div class="wrapper">
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
                                                <span class="input-group-btn">
                                                <button class="btn btn-base" type="button" v-on:click="fnGetStat3List" >조회</button>&nbsp;
                                                </span>
                                            </div>
                                      </div>  
                                        <table id="example1" class="footable table table-bordered toggle-arrow-tiny" data-page-size="8" data-filter=#filter>
                                            <thead>
                                                <tr>
                                                  <th>부서</th>
                                                  <th>직급</th>
                                                  <th>작성자 이름</th>
                                                  <th>날짜</th>                                                
                                                  <th>근무 시간</th>
                                                    <!-- <th data-hide="all">Date of Birth</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, idx) in statList" :key="idx">
                                            <!-- <td>{{item.hour_date}}</td> -->
                                                  <td>{{item.user_dept}}</td>
                                                  <td>{{item.user_position}}</td>
                                                  <td>{{item.user_name}}</td>
                                                  <td>{{item.yyyymm}}</td>
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

    vm.fnGetStat3List();
  },
  methods: {
    fnGetStat3List: function() {
      let vm = this;
      let sendData = {
        yyyymm:vm.nowMonth
      };
      this.$sendAxios("/stat/stat3", sendData, 
        function(resp){
            vm.statList = resp.data;
        });
    },
  }
};
</script>
