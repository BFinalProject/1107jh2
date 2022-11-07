<template>
  <div>
    <NavHeader />
    <!-- Wrapper -->
    <br />
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <a href="/board" class="logo"><h3>자유게시판</h3></a>
          </header>
          <!-- Content -->
          <p>
            <h1>Generic</h1>
          </p>
          <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
              auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit
              amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a
              elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
              Curabitur sapien risus, commodo eget turpis at, elementum
              convallis elit. Pellentesque enim turpis, hendrerit.
        </p>
        <hr>
          <section style="width:1300px">
            <header class="main">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </header>
            <!-- 
									<span class="image main"><img src="images/pic11.jpg" alt="" /></span> -->

            <!-- Preloader -->
            <div class="preloader"></div>
            <br />
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                답글쓰기
              </button>
            </div>
          </section>
        </div>
      </div>

      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
import NavHeader from "../views/NavHeader.vue";
export default {
  data: function() {
    return {
      // userList:[],
      // updatepassword:[]
    };
  },
  components: {
    NavHeader
  }
};
</script>
<style>
@import "../../boardread/css/boardread.css";
body {
  display: flex;
}
</style>
