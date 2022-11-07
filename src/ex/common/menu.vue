<template>
	<li>ㅇㅇ</li>
  <!-- <li>jsp 사용으로 menu.js 에서 관리 </li> -->
</template>

<script>
export default { 
    data: function() {
        return{
           ActiveObject:{
                isActive:true,
                hasError:false
            }

        }
    },
  created: function() {
  },
  mounted: function() {
      let vm =this;

    // vm.fnGetTest();
  },
  methods: {
    getFilterdRoutes:function(){
        let returnList=[]
        let vm = this;
        vm.$routeList.forEach(element => {
            console.log(element.useYn == 'Y');
            if(element.useYn == 'Y'){
                returnList.push(element);
            }
        });
        return returnList;
    },

    // fnGetTest: function() {
    // let vm = this;
    // let sendData = {
        
    //     };
    // vm.$sendAxios("/user/Userauthority", sendData, 
    //     function(resp){
    //         vm.test = resp.data;
    //     });
    //     // console.log(vm.manHourListAll);

    // },
  }
};
</script>
