<template>
  <div>
    <button
      class="btn btn-warning"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
    >
      카테고리s
    </button>

    <div
      class="offcanvas offcanvas-start show"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header" display="flex" text-align="center">
        <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
          아래에 해당하는 카테고리를 선택해주세요
        </h4>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!-- 1 -->
      <div>
        <div>
          <input
            type="submit"
            class="btn-check"
            name="option1"
            id="option1"
            autocomplete="off"
            checked
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option1"
            >한식</label
          >

          <input
            type="submit"
            class="btn-check"
            name="option1"
            id="option2"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option2"
            >중식</label
          >

          <input
            type="submit"
            class="btn-check"
            name="option1"
            id="option3"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option3"
            >양식</label
          >

          <input
            type="submit"
            class="btn-check"
            name="option1"
            id="option4"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option4"
            >일식</label
          >
          <input
            type="submit"
            class="btn-check"
            name="option1"
            id="option5"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option5"
            >기타 음식</label
          >
        </div>
        <br />
        <!-- 2 -->
        <div>
          <input
            type="submit"
            class="btn-check"
            name="options2"
            id="option6"
            autocomplete="off"
            checked
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option6"
            >술집</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options2"
            id="option7"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option7"
            >맛집</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options2"
            id="option8"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option8"
            >기념일</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options2"
            id="option9"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option9"
            >가성비</label
          >
          <input
            type="submit"
            class="btn-check"
            name="options2"
            id="option10"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option10"
            >뷰</label
          >
        </div>
        <br />
        <!-- 3 -->
        <div>
          <input
            type="submit"
            class="btn-check"
            name="options3"
            id="option11"
            autocomplete="off"
            checked
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option11"
            >가족</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options3"
            id="option12"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option12"
            >애견동반</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options3"
            id="option13"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option13"
            >색다른</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options3"
            id="option14"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option14"
            >청결</label
          >
          <input
            type="submit"
            class="btn-check"
            name="options3"
            id="option15"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option15"
            >시끌벅적</label
          >
        </div>
        <br />
        <!-- 4 -->
        <div>
          <input
            type="submit"
            class="btn-check"
            name="options4"
            id="option16"
            autocomplete="off"
            checked
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option16"
            >한적</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options4"
            id="option17"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option17"
            >활동적</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options4"
            id="option18"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option18"
            >고급스런</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options4"
            id="option19"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option19"
            >감성적</label
          >
          <input
            type="submit"
            class="btn-check"
            name="options4"
            id="option20"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option20"
            >이국적</label
          >
        </div>
        <br />
        <!-- 5 -->
        <div>
          <input
            type="submit"
            class="btn-check"
            name="options5"
            id="option21"
            autocomplete="off"
            checked
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option21"
            >편리한</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options5"
            id="option22"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option22"
            >전통적</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options5"
            id="option23"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option23"
            >모던한</label
          >

          <input
            type="submit"
            class="btn-check"
            name="options5"
            id="option24"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option24"
            >편안한</label
          >
          <input
            type="submit"
            class="btn-check"
            name="options5"
            id="option25"
            autocomplete="off"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option25"
            >이색적</label
          >
        </div>
      </div>
      <div style="margin-top: 50px;">
        <button @click="displayMarker(markerPositions2)">마커 선택</button>
        <button @click="displayMarker([])">마커 삭제</button>
      </div>
    </div>

    <div id="map"></div>
    <!-- <div class="button-group">
      <button @click="changeSize(0)">Hide</button>
      <button @click="changeSize(900)">show</button>
      <button @click="displayMarker(markerPositions1)">marker set 1</button>
      <button @click="displayMarker(markerPositions2)">marker set 2</button>
      <button @click="datas()">마커 생성</button>
      <button @click="displayMarker([])">마커 지움 (empty)</button>
      <button @click="displayInfoWindow(markerPositions1)">인포 윈도우</button>
      
        <div v-if="show">yes</div>
        <div v-else>No</div>
        <button @click="toggleShow()">Toggle </button>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "kakaomap",
  data() {
    return {
      data2: [],

      data1: [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ],
      markerPositions1: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454]
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
      ],
      markers: [],

      infowindow: null
    };
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=adfe893e046c16c34558d22483c0563d";
      document.head.appendChild(script);
    }

    this.test();
  },

  methods: {
    datas: function() {
      let data = [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ];

      // 우선적으로 let data 는 비어져있겟지 니가 데이터를 어디선가 받아오면
      // let data = [];
      //  axios 써서 데이터를 받아오고 reponse.data 를 data = reponse.data 로집어넣으면 해당하는 리스트가
      // 위에 값이있는것처럼 채워질꺼고 밑에함수에서 if(data 가 널이 아니라면 해줘)
      // 이런식으로가면됨
      if (data.length != 0) {
        this.displayMarker(data);
        console.log(data);
      } else {
        alert("데이터를 확인해주세요");
      }
    },
    //   toggleShows: function{
    //     let data: {
    //       show: false
    //     }
    //     toggleShow() {
    //     this.show = !this.show;
    //   },
    // },

    //마커 on off 만드는 함수

    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },

    changeSize(size) {
      const container = document.getElementById("map");
      // container.style.width = `${size}px`;
      // container.style.height = `${size}px`;
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },

    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach(marker => marker.setMap(null));
      }

      const positions = markerPositions.map(
        position => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          position =>
            new kakao.maps.Marker({
              map: this.map,
              position
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },

    test: function() {
      // let vm = this;

      let sendData = {};
      // sendData 안에 {data : '123'} 이러면 백단으로 이데이터를 보냄ㅇㅋ?
      // 이건 그냥 말그대로 포스트 제대로안가져와서그런거같은데 일단 로그인페이지 만들어봐 여기서 백단가지고
      // 그리고 전역변수도 담긴다 {data : 전역변수} 이렇게써도 담김 이정도면 알아먹지? 얼추 해보면서 익혀야겟지 이건 모르면 물어볼듯다시 ㅇㅇ
      //  이게 비동기로 페이지 데이터를 가져오는거니까 한번 로그인 화면부터 만들어봐 백단 불러다가 이게왜 이거고 이건왜 저건지 한번씩 듣고.
      //  저id 는 왜 넣어놓은건지, 어디서오는건지, 로그인을하면 그상태에서지속적으로 로그인 정보를 가지고 저 {id} 에 던지는건지 뭔지.
      //  난 왜만들어놓은지는 모르겟는데 그냥 세션에서 계속 id 값을 던져서 확인하는거같은데 근데 그렇게받을꺼면 권한은 왜검? authorize 가 애초부터
      //  로그인안되있으면 작동안하게도할수있는데 ㅇㅂㅇ; 무튼 로그인만들고 페이지넘어가게 한다음 해봐봐 ㅇㅇ;

      Axios.post("/api/hello", sendData).then(function(response) {
        let data = response.data;
        console.log(data);
      });
    },

    displayInfoWindow() {
      let data = [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ];
      //   let data = [
      //     {lat : "37.482802136930516" , lon : "126.79564879005665"},
      //     {lat : "37.483987091628535" , lon : "126.7830868366494"},
      //     {lat : "37.46851044224279" , lon : "126.797275939562"}

      // data.forEach()
      data.forEach(element => {
        let iwContent = '<div style="padding:5px;">Hello World!</div>';
        let iwPosition = new kakao.maps.LatLng(element);
        let iwRemoveable = true;
        console.log(element);

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map, // 인포윈도우가 표시될 지도
          position: iwPosition,
          content: iwContent,
          removable: iwRemoveable
        });
        this.map.setCenter(iwPosition);
      });

      //       for(let i=0; i<data.length; i++){

      //         var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다.
      //         iwPosition = new kakao.maps.LatLng(data[i][0],data[i][1],data[i][2],), //인포윈도우 표시 위치입니다.
      //         iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다.
      //         console.log(data)
      // }

      // if (this.infowindow && this.infowindow.getMap()) {
      //   //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.

      //   this.map.setCenter(this.infowindow.getPosition());
      //   return;
      // }
      // console.log(this.infowindow)

      console.log(this.infowindow);
    }

    // displayInfoWindow() {

    //   // let data = [
    //   //   [37.482802136930516, 126.79564879005665],
    //   //   [37.483987091628535, 126.7830868366494],
    //   //   [37.46851044224279, 126.797275939562],
    //   // ]
    //   let data = [
    //     {test:"37.482802136930516, 126.79564879005665"},
    //     {test:"37.483987091628535, 126.7830868366494"},
    //     {test:"37.46851044224279, 126.797275939562"},
    //   ]

    //     data.forEach(element => console.log(element));

    //     // data.forEach(function (data) {
    //     //   console.log(data);
    //     // });

    //     var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //       iwPosition = new kakao.maps.LatLng(element), //인포윈도우 표시 위치입니다
    //       iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    //   if (this.infowindow && this.infowindow.getMap()) {
    //     //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.

    //     this.map.setCenter(this.infowindow.getPosition());
    //     return;
    //   }
    //   console.log(this.infowindow)

    //   this.infowindow = new kakao.maps.InfoWindow({
    //     map: this.map, // 인포윈도우가 표시될 지도
    //     position: iwPosition,
    //     content: iwContent,
    //     removable: iwRemoveable,

    //   });

    //   this.map.setCenter(iwPosition);
    //   console.log(this.infowindow)

    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css";
    @import "bootstrap"; */

#map {
  width: 100%;
  height: 96vh;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}

.box {
  margin: 30px 50px 30px 50px;
}

.offcanvas-start {
  width: 490px;
}

.offcanvas {
  text-align: center;
  justify-content: center;
}

.offcanvas-header {
  text-align: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
</style>
