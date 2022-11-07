<template>
  <div class="header navbar-fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <a href="/"><img src="../../mainboard/images/logo.png"/></a>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div class="navigation">
            <div id="navigation">
              <ul>
                <li class="active">
                  <a href="/" title="Home">홈</a>
                </li>
                <li class="active">
                  <router-link to="#" title="Home">소개</router-link>
                </li>
                <li class="active">
                  <router-link to="#" title="Home">이용방법</router-link>
                </li>
                <li class="has-sub">
                  <a href="/board" title="board">게시판</a>
                  <ul>
                    <li>
                      <a href="/board" title="board">자유게시판</a>
                    </li>
                    <li>
                      <a href="/board" title="board">후기게시판</a>
                    </li>
                  </ul>
                </li>
                <li class="active">
                  <a href="/login" title="Blog ">로그인</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  setup() {
    return {};
  }
};
</script>
<style>
@import "../../mainboard/css/style.css";
</style>
