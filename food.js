'use strict';
const restaurants=[
  {
    "id": "shou",
    "name": "철판 이자카야 쇼우",
    "jp": "鉄板居酒屋 昇",
    "kind": "meal",
    "category": "오코노미야키 · 철판구이",
    "area": "오카이도",
    "place": "鉄板居酒屋 昇 松山市三番町2丁目6-3",
    "lat": 33.8382953,
    "lng": 132.7718058,
    "mapUrl": "https://maps.app.goo.gl/GoDMe99R43EpBxkXA",
    "hoursKey": "shou",
    "picked": true,
    "copy": "철판 요리와 오코노미야키를 나눠 먹고 싶은 날. 가게 등록 메뉴에 프리미엄 몰츠 생맥주가 있어요.",
    "tip": "구글 지도 표기에서 금·토 저녁 영업을 확인했어요. 방문일 휴무·좌석은 다시 확인해요.",
    "source": "shou",
    "storyKeys": [
      "okaido"
    ]
  },
  {
    "id": "akiyoshi",
    "name": "마쓰야마 타이메시 아키요시 본점",
    "jp": "松山 鯛めし 秋嘉 本店",
    "kind": "meal",
    "category": "도미밥",
    "area": "오카이도 · 로프웨이 거리",
    "place": "松山 鯛めし 秋嘉 本店 松山市大街道3丁目5-1",
    "lat": 33.8427705,
    "lng": 132.7708446,
    "mapUrl": "https://maps.app.goo.gl/uLbCv61KZek6UWKE7",
    "hoursKey": "akiyoshi",
    "picked": true,
    "copy": "따뜻한 도미 솥밥인 마쓰야마식과 회·달걀 소스의 우와지마식 중 선택할 수 있어요.",
    "tip": "본점은 예약 없이 방문 순서대로 입장. 도미가 소진되면 일찍 마감할 수 있어요.",
    "source": "akiyoshi",
    "storyKeys": [
      "taimeshi"
    ]
  },
  {
    "id": "kuraki",
    "name": "츠케멘 쿠라키",
    "jp": "つけめん 蔵木 松山店",
    "kind": "meal",
    "category": "라멘 · 츠케멘",
    "area": "오카이도",
    "place": "つけめん 蔵木 松山店 松山市大街道2丁目5-7",
    "lat": 33.840575,
    "lng": 132.7705475,
    "mapUrl": "https://maps.app.goo.gl/shMqoMdTGFtHBy4z6",
    "hoursKey": "kuraki",
    "picked": true,
    "copy": "보내준 라멘·츠케멘 후보. 오카이도 상점가에서 점심이나 저녁으로 고르기 좋은 위치예요.",
    "tip": "점심과 저녁 사이 영업 중단 시간이 있어요. 지도 시간부터 확인하고 출발하세요.",
    "storyKeys": [
      "okaido"
    ]
  },
  {
    "id": "shobu",
    "name": "아지고요미 쇼부",
    "jp": "味暦 正生",
    "kind": "meal",
    "category": "스시",
    "area": "마쓰야마시역 주변",
    "place": "味暦 正生 松山市湊町6丁目4-14",
    "lat": 33.8360063,
    "lng": 132.7608669,
    "mapUrl": "https://maps.app.goo.gl/CZKsHwQ5TgxnsFX5A",
    "hoursKey": "shobu",
    "picked": true,
    "copy": "보내준 스시집. 마쓰야마시역과 다카시마야 쪽에서 식사할 때 확인해보세요.",
    "tip": "지도 기준 점심 13:30 마감, 저녁 17:30 재개. 월·화 휴무 표기라 요일을 확인해요.",
    "storyKeys": [
      "shieki"
    ]
  },
  {
    "id": "yukemuri",
    "name": "도고 유케무리 카페",
    "jp": "どうごゆけむりかふぇ",
    "kind": "cafe",
    "category": "카페",
    "area": "도고",
    "place": "どうごゆけむりかふぇ 松山市道後湯之町3-16",
    "lat": 33.8504973,
    "lng": 132.7858518,
    "mapUrl": "https://maps.app.goo.gl/SdqvisgxBoiFpjus8",
    "hoursKey": "yukemuri",
    "picked": true,
    "copy": "도고에서 쉬어갈 카페로 보내준 곳. 산책이나 온천 전후에 가까운 카페를 비교해서 골라요.",
    "tip": "지도에는 19:40까지로 표시됩니다. 메뉴별 주문 마감은 현장에서 확인해요.",
    "storyKeys": [
      "dogo",
      "asuka"
    ]
  },
  {
    "id": "tea",
    "name": "애프터눈 티 티룸",
    "jp": "アフタヌーンティー・ティールーム いよてつ髙島屋",
    "kind": "cafe",
    "category": "카페 · 가벼운 식사",
    "area": "마쓰야마시역 · 다카시마야 4층",
    "place": "アフタヌーンティー ティールーム いよてつ髙島屋 松山市湊町5丁目1-1",
    "lat": 33.8357951,
    "lng": 132.7635909,
    "hoursKey": "tea",
    "copy": "다카시마야 쇼핑 중 커피나 가벼운 식사로 쉬어갈 곳입니다.",
    "tip": "공식 안내상 예약 불가. 주말 대기는 따로 고려하세요.",
    "source": "tea",
    "storyKeys": [
      "shieki"
    ]
  },
  {
    "id": "mican",
    "name": "미캰파크 바이신지",
    "jp": "みきゃんパーク梅津寺",
    "kind": "cafe",
    "category": "귤 디저트 · 카페",
    "area": "바이신지",
    "place": "みきゃんパーク梅津寺 松山市梅津寺町1374-1",
    "lat": 33.8749586,
    "lng": 132.7077835,
    "hoursKey": "mican",
    "copy": "바다를 보며 귤 주스와 디저트로 쉬어갈 카페. 바이신지역 근처에 있어요.",
    "tip": "10월 공식 영업 변경 공지를 우선 확인하세요. 카페 주문은 평일 16:00, 주말 16:30까지입니다.",
    "source": "mican",
    "storyKeys": [
      "baishinji"
    ]
  },
  {
    "id": "coffee",
    "name": "시라사기 커피",
    "jp": "道後 白鷺珈琲",
    "kind": "cafe",
    "category": "커피 · 디저트",
    "area": "도고",
    "place": "道後 白鷺珈琲 松山市道後湯之町12-1",
    "lat": 33.850741,
    "lng": 132.7851592,
    "hoursKey": "coffee",
    "copy": "도고역 앞, 로손 건물 2층 카페. 온천 거리에서 쉬어가고 싶을 때 확인해요.",
    "tip": "공식 음료·디저트 마지막 주문은 17:30입니다.",
    "source": "coffee",
    "storyKeys": [
      "dogo",
      "dogoStation"
    ]
  },
  {
    "id": "sakigake",
    "name": "사키가케 오카이도점",
    "jp": "大街道 焼き鳥 魁 SAKIGAKE",
    "kind": "meal",
    "category": "야키토리 · 생맥주",
    "area": "오카이도",
    "place": "大街道 焼き鳥 魁 松山市大街道1丁目5-7",
    "lat": 33.8369898,
    "lng": 132.7702314,
    "hoursKey": "sakigake",
    "copy": "야키토리와 나마비루가 생각날 때. 공식 메뉴 기준 꼬치 5종 820엔, 기린 이치방시보리 생맥주 640엔입니다(변경 가능).",
    "tip": "마쓰치카 지하상가점과 다른 오카이도점입니다.",
    "source": "sakigakeMenu",
    "storyKeys": [
      "okaido"
    ]
  },
  {
    "id": "hinode",
    "name": "히노데",
    "jp": "お好み焼き 日の出",
    "kind": "meal",
    "category": "미쓰하마야키",
    "area": "미쓰하마",
    "place": "お好み焼き 日の出 松山市三杉町11-8",
    "lat": 33.8649797,
    "lng": 132.7191433,
    "hoursKey": "hinode",
    "copy": "면이 들어가는 미쓰하마식 오코노미야키. 작은 가게라 대기를 고려해요.",
    "tip": "미쓰역 근처에서 점심을 고를 때 확인하세요.",
    "source": "hinode",
    "storyKeys": [
      "mitsuyaki",
      "mitsuhama"
    ]
  }
];
const foodState={phase:'idle',position:null,locatedAt:0,filter:'all',error:''};
function distanceMeters(a,b){
  const rad=Math.PI/180;
  const dLat=(b.lat-a.lat)*rad,dLng=(b.lng-a.lng)*rad;
  const h=Math.sin(dLat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dLng/2)**2;
  return 6371000*2*Math.atan2(Math.sqrt(Math.min(1,h)),Math.sqrt(Math.max(0,1-h)));
}
function sortedRestaurants(position,filter='all'){
  const list=restaurants.filter(r=>filter==='all'||r.kind===filter).map(r=>({...r,distance:position?distanceMeters(position,r):null}));
  return position?list.sort((a,b)=>a.distance-b.distance):list;
}
function distanceLabel(m){return m<1000?`약 ${Math.max(10,Math.round(m/10)*10)}m`:`약 ${(m/1000).toFixed(1)}km`;}
function foodRouteUrl(r){
  // Let Google Maps obtain the current position when the user actually opens directions.
  // User coordinates are never embedded in URLs or sent by this site.
  return directionUrl(r.place,null,'walking');
}
function renderFood(){
  const status=document.getElementById('food-location-status');
  const refresh=document.getElementById('food-location-refresh');
  if(foodState.phase==='loading')status.textContent='현재 위치 확인 중… 브라우저에서 위치를 허용하면 가까운 순서로 바뀝니다.';
  else if(foodState.position)status.textContent=`현재 위치 기준 · 직선거리 가까운 순${foodState.position.accuracy>500?' · 위치 정확도가 낮아 거리 순서가 다를 수 있어요':''}`;
  else status.textContent=foodState.error||'위치 확인 전 · 등록 순서로 표시 중입니다.';
  refresh.disabled=foodState.phase==='loading';
  const list=sortedRestaurants(foodState.position,foodState.filter);
  document.getElementById('food-count').textContent=`${list.length}곳 · ${foodState.position?'직선거리순 · 영업 여부와 별개':'위치를 허용하면 거리순으로 정렬'}`;
  document.getElementById('food-list').innerHTML=list.map((r,index)=>`<li class="food-card" data-restaurant="${r.id}"><div class="food-card-top"><span>${escapeHtml(r.category)}</span><span class="food-distance">${r.distance===null?'거리 확인 전':distanceLabel(r.distance)}</span></div>${foodState.position&&index===0?'<span class="nearest-label">이 목록에서 가장 가까워요</span>':''}<h3><a href="${escapeHtml(r.mapUrl||placeUrl(r.place))}" target="_blank" rel="noopener">${escapeHtml(r.name)} ↗</a></h3><p class="japanese">${escapeHtml(r.jp)} · ${escapeHtml(r.area)}</p><div class="actions">${routeAnchor(foodRouteUrl(r),'현위치에서 길찾기',locate,r.name+' 현위치에서 Google Maps 길찾기')}</div><details><summary>메뉴·영업·방문 팁</summary><p>${escapeHtml(r.copy)}</p>${hoursHtml(r)}<p>${escapeHtml(r.tip)}</p>${r.source?`<a href="${escapeHtml(sources[r.source])}" target="_blank" rel="noopener">${r.source==='shou'?'가게 등록 메뉴':'공식·지역 안내'} ↗</a>`:''}</details>${storiesHtml(r)}</li>`).join('');
  document.querySelectorAll('[data-food-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.foodFilter===foodState.filter)));
}
function requestFoodLocation(){
  if(foodState.phase==='loading')return;
  foodState.position=null;foodState.error='';
  if(!navigator.geolocation){foodState.phase='unavailable';foodState.error='이 브라우저에서는 위치를 확인할 수 없어 등록 순서로 표시합니다. 식당의 Google Maps 길찾기는 이용할 수 있어요.';renderFood();return;}
  foodState.phase='loading';renderFood();
  navigator.geolocation.getCurrentPosition(position=>{
    const {latitude:lat,longitude:lng,accuracy}=position.coords;
    if(!Number.isFinite(lat)||!Number.isFinite(lng)||Math.abs(lat)>90||Math.abs(lng)>180){locationFailed({code:2});return;}
    foodState.position={lat,lng,accuracy};foodState.locatedAt=Date.now();foodState.phase='ready';renderFood();
  },locationFailed,{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
}
function locationFailed(error){
  foodState.position=null;foodState.phase='error';
  foodState.error=error.code===1?'위치 권한이 없어 등록 순서로 표시합니다. 브라우저 사이트 설정에서 위치를 허용한 뒤 다시 확인해주세요.':error.code===3?'위치 확인 시간이 초과되어 등록 순서로 표시합니다. 신호가 잡히는 곳에서 다시 확인해주세요.':'현재 위치를 확인하지 못해 등록 순서로 표시합니다. 위치 기능을 켜고 다시 확인해주세요.';
  renderFood();
}
function openFoodView(){
  renderFood();
  if(foodState.phase==='idle'||(foodState.phase==='ready'&&Date.now()-foodState.locatedAt>300000))requestFoodLocation();
}
document.getElementById('food-location-refresh').addEventListener('click',requestFoodLocation);
document.querySelectorAll('[data-food-filter]').forEach(b=>b.addEventListener('click',()=>{foodState.filter=b.dataset.foodFilter;renderFood();}));
