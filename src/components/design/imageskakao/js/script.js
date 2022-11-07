const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

//1. 비밀번호 재확인
//2. 아이디 중복확인



// 비밀번호 재확인
function passwordreconfirm(){
  let p1 = document.getElementById('password1').value;
  let p2 = document.getElementById('password2').value;
  
  if(p1.length < 6) {
    $("#pwConfirm").show();
    return ('입력한 글자가 6글자 이상이어야 합니다.');
}else{
  // alert("비밀번호가 일치합니다");
  $("#pwConfirm").hide();
  
  // return ("비밀번호가 일치합니다");
}

if( p1 != p2 ) {
  // alert("비밀번호불일치");
  $("#pwConfirm2").show();
 
  // return ("비밀번호불일치");
} else{
  // alert("비밀번호가 일치합니다");
  $("#pwConfirm2").hide();
  
  // return ("비밀번호가 일치합니다");
}if( p1 == p2 ) {
  // alert("비밀번호불일치");
  $("#pwConfirm3").show();
 
  // return ("비밀번호불일치");
} else{
  // alert("비밀번호가 일치합니다");
  $("#pwConfirm3").hide();
  
  // return ("비밀번호가 일치합니다");
}
}



//  아이디 중복확인
function updateValue(e) {
  let x = "tkdwns987"
  if (x == e.target.value) {

    console.log("중복된 아이디입니다.")
  }
  else {
    console.log("사용 가능한 아이디 입니다.")
  }

}



// $(document).ready(function(){
//   isShow = true; //변수 하나를 설정 화면에 보이면 true, 보이지 않으면 false;
//   $('button').on('click',function(){
//     if(isShow){ //보이니까 숨기고
//       isShow = false;
//       $('#popup').hide();   //요소를 안보이게 한다.
//       $('button').text('on');
//     }else{  //안보이니까 보이게 한다
//       isShow = true;
//       $('#popup').show();   //요소를 보이게 한다
//       $('button').text('off');
//     }
//   })
// })