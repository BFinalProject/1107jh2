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
                                        <label> 일자 조회 </label>
                                            <div class = "input-group">
                                                <input type="text" class="form-control" v-model="nowDate"/>
                                                <span class="input-group-btn">
                                                <button class="btn btn-base" type="button" v-on:click="fnGetStat4List" >조회</button>&nbsp;
                                                </span>
                                            </div>
                                      </div>  
                                        <table id="example1" class="footable table table-bordered toggle-arrow-tiny" data-page-size="8" data-filter=#filter>
                                            <thead>
                                                <tr>
                                                  <!-- <th>날짜</th> -->
                                                  <th>부서</th>
                                                  <th>직급</th>
                                                  <th>작성자 이름</th>
                                                  <th>프로젝트 아이디</th>
                                                  <th>프로젝트 이름</th>
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
                                                  <td>{{item.project_id}}</td>
                                                  <td style="text-align: left;">&nbsp;{{item.project_name}}</td>
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

  <!-- <div>
    <div>
      <input type="text" v-model="nowDate"/>
      <button v-on:click="fnGetStat4List">조회</button>
    </div>
    <div>
      <table>
        <tr> -->
          <!-- <th>날짜</th> -->
          <!-- <th>부서</th>
          <th>작성자 이름</th>
          <th>프로젝트 아이디</th>
          <th>프로젝트 이름</th>
          <th>근무 시간</th>
        </tr> -->
        <!-- <tr v-for="(item, idx) in statList" :key="idx">  -->
          <!-- <td>{{item.hour_date}}</td> -->
          <!-- <td>{{item.user_dept}}</td> -->
          <!-- <td>{{item.user_name}}</td> -->
          <!-- <td>{{item.project_id}}</td> -->
          <!-- <td style="text-align: left;">&nbsp;{{item.project_name}}</td> -->
          <!-- <td>{{item.used_time}}</td> -->
        <!-- </tr> -->
      <!-- </table> -->
    <!-- </div> -->
  <!-- </div> -->


                


  
</template>

<script>
export default {
  data: function() {
    return {
      statList:[],
      nowDate:"",
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
    let date = today.getDate();  // 날짜

    if(month<10){
      month="0"+month;
    }
    if(date<10){
      date="0"+date;
    }

    vm.nowDate=year+""+month+""+date;

    vm.fnGetStat4List();
  },
  methods: {
    fnGetStat4List: function() {
      let vm = this;
      let sendData = {
        yyyymmdd:vm.nowDate
      };
      this.$sendAxios("/stat/stat4", sendData, 
        function(resp){
            vm.statList = resp.data;
        });
    },
  }
};
</script>
