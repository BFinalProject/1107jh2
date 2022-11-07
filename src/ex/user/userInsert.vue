<template>
  <div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userList:[],
      // updatepassword:[]
    };
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
  },
  methods: {
    fnUserInsertList: function(jsonObj) {
      this.$sendAxios("/user/insertUserList", jsonObj, 
        function(resp){
            console.log(resp);
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
