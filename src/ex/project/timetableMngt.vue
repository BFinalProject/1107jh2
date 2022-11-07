<template>
              
    <div class="content-wrapper">
        <div class="content">
            <div class="content-header">
                <div class="header-icon"><i class="hvr-buzz-out fa fa-id-card-o"></i></div>
                    <div class="header-title">
                        <h1>타임 테이블 관리</h1>
                        <small>Show user timetable management</small>
                        <ol class="breadcrumb">
                            <li><a href="/#/main"><i class="pe-7s-home"></i> Home</a></li>
                            <li><a href="#">Management</a></li>
                            <li class="active">TimeTable</li>
                        </ol>
                    </div>
                <div class="content" style="padding-top: 5px;">  
                    <div class="row">
                        <div class="col-sm-12 col-md-12">                
                            <div class="panel panel-bd">
                                <form>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-12 col-lg-12">
                                                <div class = "form-group" style = "margin:0px 0px 0px 10px;">
                                                    <label> 인원 선택 </label>
                                                <div class = "input-group col-lg-3">
                                                    <select class="form-control placeholder-single select2-hidden-accessible" id='valueSelect' aria-hidden="true" v-model="paramuserSelect">
                                                        <optgroup label="   유저ID / 이름 / 부서">
                                                            <option v-for='item in userList' v-bind:key='item.user_id' v-bind:value="item.user_id">
                                                                {{item.user_id}} / {{item.user_name}} / {{item.user_dept}}
                                                            </option>
                                                        </optgroup>
                                                    </select>
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-base" type="button" v-on:click="[fnGetClassvalueRead(), fnGetUserProjectList()]" v-bind:value="paramuserSelect"> 조회</button>
                                                    </span>
                                                </div>                                                       
                                                </div>
                                            </div>                                                
                                        </div>                                                      
                                    </div>
                                </form>                               
                                <div class="panel-body">
                                    <p>&nbsp;&nbsp;※ 인원을 선택 후 조회 시, 타임테이블 리스트 수정이 가능합니다. 오류 발생 시 임형민(6690) 사원에게 연락 부탁드립니다.</p>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <input v-show="paramuserSelect" type="text" class="form-control input-sm m-b-15" id="filter" placeholder="프로젝트를 검색 해주세요.">
                                            <table id="example1" class="footable table table-bordered toggle-arrow-tiny" data-page-size="50" data-filter=#filter>
                                                <thead>
                                                    <tr>
                                                        <th>Project_ID</th>
                                                        <th>Project_Name</th>
                                                        <th>project_short_name</th>
                                                        <th>Y/N Select</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for='item in userProjectList' v-bind:key='item.project_id' v-bind:value="item.project_id">
                                                        <td>{{item.project_id}}</td>
                                                        <td>{{item.project_name}}</td>
                                                        <td>{{item.project_short_name}}</td>
                                                        <td>
                                                            <button v-if="item.use_yn === 'N'" type="button" class="btn btn-labeled btn-base m-b-5" v-on:click='fnGetUseynUpdate(item)'>
                                                                <span class="btn-label"><i class="glyphicon glyphicon-ok"></i></span>&nbsp;&nbsp;&nbsp;활성화
                                                            </button>                     
                                                            <button v-else-if="item.use_yn === 'Y'" type="button" class="btn btn-labeled btn-danger m-b-5" v-on:click='fnGetUseynUpdate(item)'>
                                                                <span class="btn-label"><i class="glyphicon glyphicon-trash"></i></span>비활성화
                                                            </button>
                                                        </td>
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
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      userList:[],
      userProjectList:[],
      // insertList:[],
      UpdateList:[],
      paramproject_id:'',
      paramuserSelect:"",
      paramuseyn:'',
      useradmincheck:[],
      user_dept:'',
    //   user_dept: useradmincheck.user_dept,
      // [{
      //                 user_id:''
      // }],
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



    vm.reload();
    vm.fnGetaAminUserCheck();
    //vm.fnGetUserList();
    vm.fnGetClassvalueRead();
    
    // vm.fnGetUserProjectList();

  },

  computed:function() {
  },
  methods: {
    fnGetaAminUserCheck: function() {
        let vm = this;
        let sendData = {};
        vm.$sendAxios("/user/Userauthority", sendData, 
            function(resp){
                vm.useradmincheck = resp.data;
                vm.useradmincheck.forEach(function(item){
                        // console.log("ITEM ::: ",item);
                        var jsonObj = new Object();
                        if(item.user_type_code == 'admin'){
                            jsonObj.user_type_code = item.user_type_code;
                            jsonObj.user_name = item.user_name;
                            jsonObj.user_position = item.user_position;
                            jsonObj.user_dept = item.user_dept;
                            // jsonArray.push(jsonObj);
                            vm.user_dept = jsonObj.user_dept;
                            vm.fnGetUserList(jsonObj.user_dept);
                        };
                    });       
            });
    },


    fnGetUserList: function(user_dept) {
        let vm = this;
        let sendData = {
            user_dept:user_dept
        };
        // console.log(sendData);
        this.$sendAxios("/proj/timetableSelect", sendData,
        function(resp){
            vm.userList = resp.data;  
        });
    },    

    reload: function(){
     if (self.name != 'reload') {
         self.name = 'reload';
         self.location.reload(true);
     }
     else self.name = ''; 
    },

    fnGetClassvalueRead: function() {
      let vm = this;
        $(document).ready(function(){
        // display logs
        var IDvalue = $("#" + "valueSelect").val();
        vm.paramuserSelect = IDvalue;
        vm.user_dept = vm.user_dept;

        });

    },
    fnGetUserProjectList: function() {
      let vm = this;
      let userid = vm.paramuserSelect;
      // let projectid = vm.userProjectList.project_id;
      // console.log(projectid);
      let sendData = {
          user_id : userid
      };
      this.$sendAxios("/proj/userProjectList", sendData, 
        function(resp){
          if(userid == null || ''){
            alert('인원을 선택해주세요');
          }else{
            vm.userProjectList = resp.data;
          }
          // if(vm.userProjectList )

          // console.log(sendData);
            // for(i=0;i<vm.userList.length;i++){
            //   if(vm.userList.user_id.indexOf(vm.paramuserSelect) == -1){
            //   vm.userList.user_id.push(vm.paramuserSelect)};
            // }
        });
    },
      // fnGetTest: function() {
      //   let vm = this;
      //   let tdArr = new Array();
        
      //   // for (var i = 0; i < vm.userProjectList.length; i++ && vm.userProjectList.indexOf(vm.userProjectList) == -1){
      //   for (var i = 0; i < vm.userProjectList.length; i++){
      //     tdArr.push(vm.userProjectList[i]);
      //   }

      //   vm.UpdateList = tdArr
      //   console.log(tdArr);


      // },

    fnGetUseynUpdate: function(item) {
      let vm = this;
      let userid = vm.paramuserSelect;
      // let tdArr = new Array();

      //   // for (var i = 0; i < vm.userProjectList.length; i++ && vm.userProjectList.indexOf(vm.userProjectList) == -1){
      //   for (var i = 0; i < vm.userProjectList.length; i++){
      //     tdArr.push(vm.userProjectList[i]);
      //   }
      // vm.UpdateList = tdArr
      if(item.use_yn == 'Y'){
        item.use_yn = 'N'
      }else if(item.use_yn == 'N'){item.use_yn = 'Y'}



      let sendData = {
        use_yn : item.use_yn,
        project_id : item.project_id,
        user_id : userid
      }
      this.$sendAxios("/proj/updateUseyn", sendData,
        function(resp){
          // paramproject_id = vm.userProjectList.project_id;
          vm.updateUseyn = resp.data;
          vm.fnGetUserProjectList();
      })

      // console.log(sendData);
      ;    
    },

    
      // var paramuserSelect = document.getElementById('select2-efnl-container').title;
      // console.log(paramuserSelect);
      // let vm =this;
      //   for(let i=0;i<vm.userList.length;i++){}
      //   if(vm.userList.user_id.indexOf(vm.paramuserSelect) == -1){
      //   vm.userList.user_id.push(vm.paramuserSelect)};
      //   }
//     const self = this;
//   $("select").change(function () {
//         const val = $(this).find("option:selected").val();
//         self.selected = val;
//  });


    // cgUserSelect: function(){
      
    // }

  }
}
</script>