<template>
            <div class="content-wrapper">
                <!-- Main content -->
                <div class="content">
                    <div class="content-header">
                        <div class="header-icon">
                            <i class="pe-7s-note2"></i>
                        </div>
                        <div class="header-title">
                            <h1>비밀번호 변경</h1>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Form controls -->
                        <div class="col-sm-6">
                            <div class="panel panel-bd lobidrag">
                                <div class="panel-heading">
                                    <div class="panel-title">
                                        <h4>비밀번호 변경</h4>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p>초기비밀번호 문의는 (임형민)사원<code>&lt;6690&gt;</code>,
                                      / 계정 관련 오류 시 연락 부탁드립니다.</p>
                                    <form v-for="(item) in userinfo" :key="item.user_id">
                                        <div class="form-group">
                                            <label for="exampleName">아이디</label>
                                            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="item.user_id" disabled/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleName">이름</label>
                                            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="item.user_name" disabled/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputdepartment">부서</label>
                                            <input type="departmentnumber" class="form-control" v-model="item.user_dept" disabled/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputposition">직급</label>
                                            <input type="departmentnumber" class="form-control" v-model="item.user_position" disabled/>
                                        </div>
                                        <!-- <div class="form-group">
                                            <label for="exampleInputPassword1">내선번호</label>
                                            <input type="departmentnumber" class="form-control" v-model="item.user_phone_office" placeholder="Department number" disabled/>
                                        </div> -->
                                        <div class="form-group">
                                            <label for="exampleInputPassword2">연락처</label>
                                            <input type="phonenumber" class="form-control" v-model="item.user_phone" placeholder="Phone number" disabled/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail">이메일</label>
                                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="item.user_email" disabled/>
                                            <!-- <small id="emailHelp" class="text-muted">We'll never share your email with anyone else.</small> -->
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword">변경 비밀번호</label>
                                            <input type="password" class="form-control" placeholder="Password" v-model="updateinfo.user_pwd">
                                        </div>
                                        
                                        <!-- <div class="form-group">
                                            <label for="exampleTextarea">우편주소</label>
                                            <textarea class="form-control" rows="3" readonly="readonly" v-model="item.user_addr" disabled></textarea>
                                        </div> -->
                                        <button class="btn btn-base pull-right" v-on:click="fnUserUpdateinfo">비밀번호 변경하기</button>
                                    </form>
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
      // testaaa: "testtestttt",
      userinfo:[],
      // user_pwds:"",
      updateinfo:{
        // user_id:"",
        // user_phone_office:"",
        // user_phone:"",
        // user_email:"",
        user_pwd:""
        // use_yn:"Y"
      }
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
    // console.log("mounted userList");

    vm.fnGetUserinfo();
    // updateinfo.user_pwd = vm.userinfo.password
  },
  methods: {
    fnGetUserinfo: function() {
      let vm = this;
      let sendData = {};
      this.$sendAxios("/user/userinfo", sendData, 
        function(resp){
            vm.userinfo = resp.data;
            vm.userinfo.forEach(function(item){
              var jsonObj = new Object();
                if(vm.userinfo){
                  jsonObj.user_id = item.user_id;
                  jsonObj.user_phone_office = item.user_phone_office;
                  jsonObj.user_phone = item.user_phone;
                  jsonObj.user_email = item.user_email;
                  // jsonObj.user_pwd = item.user_pwd;

                  // vm.updateinfo.user_id = jsonObj.user_id;
                  // vm.updateinfo.user_phone_office = jsonObj.user_phone_office;
                  // vm.updateinfo.user_phone = jsonObj.user_phone;
                  // vm.updateinfo.user_email = jsonObj.user_email;
                  // vm.updateinfo.user_pwd = jsonObj.user_pwd;
                  // vm.fnUserUpdateinfo(jsonObj.user_pwd);
                };
            }); 
            // user_pwd = vm.userinfo.password
            // console.log(user_pwd);
            });
    },

  fnUserUpdateinfo: function(){
      let vm = this;
      // let user_id = vm.userinfo.user_id
      // let user_phone_office = vm.userinfo.user_phone_office
      // let user_email = vm.userinfo.user_email
      // let user_phone = vm.userinfo.user_phone
      // let user_pwd = user_pwd

      let sendData = {
        // user_id:user_id,
        // user_phone_office:user_phone_office,
        // user_email:user_email,
        // user_phone:user_phone,
        user_pwd:vm.updateinfo.user_pwd
      };
      // vm.fnGetUserinfo();
      this.$sendAxios("/user/updatePassword", sendData, 
        function(resp){
            // vm.alertupdate();
            vm.updateinfo = resp.data;
            alert("비밀번호 변경을 완료하였습니다. 다시 로그인 해주세요.");
            window.location.href='/logout';
            });
        },
    // alertupdate: function(){
    //   let vm = this;
    //     if(vm.fnUserUpdateinfo){
    //         alert("비밀번호 변경을 완료하였습니다. 다시 로그인 해주세요.");
    //         window.location.href='/logout'};
    // }
  }
};
</script>
