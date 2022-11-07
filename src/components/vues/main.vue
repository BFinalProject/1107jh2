<template>
  <div>
    <NavHeader />
    <TopMain />
    <MiddleMain />
    <BottomMain />
    <FloorFooter />
  </div>

  <!-- ?e왜두개를불러옴? 이거 내가 여기저기서 막붙인거라 도중에 뭔먹고 뭔안먹어서 어쩔수가 없음ㅁ,.. 안그러겟지 ㅇ

다음부턴이아니고 지금 당장 초기값으로바꾸고 하나만써라 니좆대로바꾸는거아님 -->
</template>

<style>
@import "../../mainboard/css/style.css";
body {
  display: unset;
}
/* @import '../../mainboard/css/bootstrap.min.css';
@import '../../mainboard/css/font-awesome.min.css'; */
</style>
<script>
import NavHeader from "../views/NavHeader.vue";
import TopMain from "../views/TopMain.vue";
import MiddleMain from "../views/MiddleMain.vue";
import BottomMain from "../views/BottomMain.vue";
import FloorFooter from "../views/FloorFooter.vue";

export default {
  setup() {
    return {};
  },

  components: {
    NavHeader,
    TopMain,
    MiddleMain,
    BottomMain,
    FloorFooter
  },
  mounted: function() {
    let vm = this;
  }
};
</script>
