<template>
  <div>
    <div class="xp-breadcrumbbar text-center">
      <h4 class="page-title">코드관리</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">NOAA Code Management</a></li>
        <li class="breadcrumb-item active" aria-current="page">코드 관리</li>
      </ol>
    </div>
    <div class="xp-contentbar">
      <div class="row"> 
        <div class="col-lg-6">
          <div class="card m-b-30">
            <div class="card-header bg-white">
              <ul class="list-inline mb-0">
                <li class="list-inline-item"><h5 class="mt-2 mb-0 text-black">그룹 코드</h5></li>                
              </ul>
            </div>
            <div class="card-body">
              <div class="table-responsive m-b-10">
                <table class="table">
                  <thead class="thead-dark">
                    <tr class="headings">
                      <th class="column-title">코드그룹</th>
                      <th class="column-title">코드 그룹명</th>
                      <th class="column-title">삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for = "item in listGrpCode" :key="item.grp_code">
                      <td>
                        <a href="#" v-on:click ="fnSelectedGrp(item)" ><i v-bind:class="{'mdi mdi-check-circle mr-2':item.selected}"></i> {{item.grp_code}}</a> 
                      </td>
                      <td>{{item.grp_title}}</td>
                      <td>
                        <button type="button" v-on:click ="fnDelteGrpCode(item)" class="btn btn-outline-danger"> 삭제</button>
                      </td>
                    </tr>
                    <tr>
                       <!-- <td><input type="text" v-model="viewModel.listGrpCode" maxlength="8" /></td> -->
                      <!-- <td><input type="text" v-model="viewModel.inputGrpCodeTxt" /></td>  -->
                      <td>
                        <button type="button" v-on:click="fnClickAddGrpCode()" class="btn btn-outline-success"> 추가</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card m-b-30">
            <div class="card-header bg-white">
              <ul class="list-inline mb-0">
                <li class="list-inline-item"><h5 class="mt-2 mb-0 text-black">상세 코드</h5></li>                
              </ul>
            </div>
            <div class="card-body">
              <div class="table-responsive m-b-10">
                <table class="table">
                  <thead class="thead-light">
                    <tr class="headings">
                      <th class="column-title">코드</th>
                      <th class="column-title">코드명</th>
                      <th class="column-title">삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr v-for="item in listSysCodes" :key="item.sys_code">
                      <td>{{item.sys_code}}</td>
                      <td>{{item.sys_title}}</td>
                      <td>
                        <button type="button" v-on:click="fnDeleteSysCode(item)" class="btn btn-outline-danger"> 삭제</button>
                      </td>
                    </tr>
                    <tr>
                      <!-- <td><input type="text" v-model="viewModel.inputSysCode" maxlength="8"/></td>
                      <td><input type="text" v-model="viewModel.inputSysCodeTxt" /></td> -->
                      <td>
                        <!-- <button type="button" v-on:click="fnClickAddSysCode()" class="btn btn-outline-success"> 추가</button> -->
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
</template>

<script>
// import Axios from 'axios'

export default{
    data: function () {
      return {
          listGrpCode: {
            grp_code : "",
            grp_title : ""
          },
          listSysCodes: {
            grp_code : "",
            sys_code : "",
            sys_title : ""
          },
          selectedGrp : null

      }
    }
    , created: function () {
      // console.log("created");
    }
    , mounted: function () {
        let vm = this;
        console.log("mounted codeManage");
        vm.fnGetListGrpCode();
        vm.fnGetListSysCodes();
    }
    , methods: {
        fnGetListGrpCode: function() {
          let vm = this;
          let sendData = {};
          
          this.$sendAxios("/user/codeManage", sendData,
              function(response) {
                console.log(response);
                vm.listGrpCode = response.data;
              }
          );
        },
        fnGetListSysCodes: function(paramGrpCode) {
            let vm = this;
            let sendData = {
              paramGrpCode : vm.selectedGrp.grp_code
            };
            this.$sendAxios("/user/codeManage/list", sendData,
            function(sysResponse) {
              console.log("sys code");
              if(sysResponse.data.length != 0){
                vm.listSysCodes = sysResponse.data;
              }
              console.log(sysResponse);
            }
              )
        },
        
        fnSelectedGrp: function(paramItem) {
            let vm = this;
            
            for(var i=0; i<vm.listGrpCode.length; i++){
                vm.listGrpCode[i].selected = false;
            }
              paramItem.selected=true;
              vm.selectedGrp = paramItem;     
                        
            this.fnGetListSysCodes(paramItem.grp_code);
        },

        //그룹코드 추가 버튼 클릭
        fnClickAddGrpCode: function() {
            let vm = this;
            if(vm.viewModel.inputGrpCode==""||vm.viewModel.inputGrpCodeTxt==""){
                alert("모든 필드는 필수 입력 항목 입니다.","");
                return false;
            }
            this.fnCreateGrpCode();
        }

    }
  }
</script>

