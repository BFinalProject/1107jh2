<template>
  <div>
    <NavHeader />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <main>
      <form class="write">
        <input type="text" placeholder="제목을 입력해주세요." required />
        <hr />
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          class="text"
          required
        />
        <div class="button">
          <p><a href="free.html">글쓰기</a><a href="free.html">취소</a></p>
        </div>
      </form>
    </main>
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

<style scoped>
.write {
  width: 700px;
  margin: 0 auto;
}
.write input {
  width: 676px;
  padding: 10px;
  margin: 12px auto 0;
  border: solid 2.5px rgb(102, 96, 98);
  border-radius: 12px;
}
.write .text {
  table-layout: fixed;
  height: 300px;
  white-space: pre-line;
  word-break: break-all;
}
.write .button {
  padding: 0 200px;
  margin: 15px auto;
}
.write .button a {
  border: 1px solid black;
  background: gainsboro;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  color: black;
}
.write .button a:hover {
  color: blueviolet;
}
.write p {
  text-align: center;
}
</style>
