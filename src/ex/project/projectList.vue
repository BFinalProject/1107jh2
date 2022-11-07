<style scoped> 
  table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
    text-align: center;
  }
  .left{
    text-align: left;
  }
</style>
<template>
  <div>
      <table>
        <tr>
          <td>아이디</td>
          <td>담당자</td>
          <td>이름</td>
          <td>단축 이름</td>
        </tr>
        <tr v-for="item in projectList" :key="item.project_id">
          <td>{{item.project_id}}</td>
          <td>{{item.project_pm_name}}</td>
          <td class="left">{{item.project_name}}</td>
          <td>{{item.project_short_name}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      testaaa: "testtestttt",
      projectList:[],
      insertObj:{
        project_id:"",
        project_name:"",
        project_short_name:"",
        project_descript:"",
        project_pm_id:"",
        project_pm_name:"",
        project_start_date:"",
        project_end_date:"",
        create_user_id:"",
        create_date:"",
      }
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
    console.log("mounted projectList");
    vm.fnGetProjectList();
  },
  methods: {
    fnGetProjectList: function() {
      let vm = this;
      let sendData = {};
      this.$sendAxios("/proj/projectList", sendData, 
        function(resp){
            vm.projectList = resp.data;
        });
    }
  }
};
</script>
