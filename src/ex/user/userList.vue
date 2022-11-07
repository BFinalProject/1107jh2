<template>
  <div>
    <div v-for="item in userList" :key="item.user_id">
      <p>{{item.user_id}} {{item.user_name}} {{item.user_phone}} {{item.user_phone_office}} {{item.user_email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      testaaa: "testtestttt",
      userList:[]
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
    console.log("mounted userList");
    vm.fnGetUserList();
  },
  methods: {
    fnGetUserList: function() {
      let vm = this;
      let sendData = {};
      this.$sendAxios("/user/userList", sendData, 
        function(resp){
            vm.userList = resp.data;
        });
    },

    // fnUserUpdatePassword: function(jsonObj) {
    //   this.$sendAxios("/user/updatePassword", jsonObj, 
    //     function(resp){
    //          console.log(resp);
    //         });
    //     },
  }
};
</script>
