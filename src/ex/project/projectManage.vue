<template>
  <div>
    <div>
      <table>
        <tr>
          <td>프로젝트 아이디</td>
          <td><input type="text" v-model="insertObj.project_id"/></td>
        </tr>
        <tr>
          <td>프로젝트 이름</td>
          <td><input type="text" v-model="insertObj.project_name"/></td>
        </tr>
        <tr>
          <td>프로젝트 단축 이름</td>
          <td><input type="text" v-model="insertObj.project_short_name"/></td>
        </tr>
        <tr>
          <td>프로젝트 설명</td>
          <td><textarea v-model="insertObj.project_descript" id="" cols="30" rows="10"></textarea></td>
        </tr>
        <tr>
          <td><button v-on:click="fnInsertProject">입력</button></td>
        </tr>
      </table>
    </div>
    <div>
      <p v-for="item in projectList" :key="item.project_id">{{item.project_id}} {{item.project_name}} {{item.project_short_name}} {{item.create_user_id}} {{item.create_date}}</p>
    </div>
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
    // console.log("mounted projectList");
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
    },
    fnInsertProject: function() {
      let vm = this;
      console.log(vm.insertObj);
      this.$sendAxios("/proj/insertProject", vm.insertObj, 
        function(resp){
            vm.fnGetProjectList();
        });
    },
    fnInsertProjectList: function(jsonObj) {
      let vm = this;
      this.$sendAxios("/proj/insertProjectList", jsonObj, 
        function(resp){
            vm.fnGetProjectList();
        });
    },
  }
};
</script>
