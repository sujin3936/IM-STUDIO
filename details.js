//상세 메인페이지 메인 사진 변경
var myIndex = 0;
    carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

//메인로고 누를 시 상세 메인페이지로 이동
function redirectToOtherPage() {
  var targetUrl = 'details.html';
  
  // 페이지 이동
  window.location.href = targetUrl;
}


//click 클래스를 가진 태그 위로 마우스를 올렸을 때 커서 모양 변경
function changeCursor(shouldChange) {
  var elements = document.querySelectorAll('.click');
  elements.forEach(function(element) {
    if (shouldChange) {
      element.classList.add('cursor-pointer');
    } else {
      element.classList.remove('cursor-pointer');
    }
  });
}


//카카오맵 지도 가져오기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5846502, 126.9254007), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

new daum.roughmap.Lander({
  "timestamp" : "1685994251549",
  "key" : "2f28s",
  "mapWidth" : "640",
  "mapHeight" : "360"
}).render();

//onclick시 alert 기능
function success() {
    alert('예약이 완료되었습니다');
}