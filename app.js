'use strict';
const sources = {
  "benefits": "https://www.visitehimejapan.com/ko/updates/update-002/",
  "airport": "https://www.iyotetsu.co.jp/bus/limousine/airport/?t=202610",
  "busStop": "https://www.iyotetsu.co.jp/bus/limousine/map/noriba.html?noriba=okaido",
  "rail": "https://www.iyotetsu.co.jp/rosen/rail/kogai_time.pdf?new=",
  "transit": "https://www.iyotetsu.co.jp/rosen/iyotetsu/gmap/",
  "mican": "https://mican-park.jp/info/?p=1481",
  "mitsuhama": "https://matsuyama-sightseeing.com/course/course06/",
  "hinode": "https://www.mitsuhamaru.com/mitsuhamayaki/shop/",
  "kadoya": "https://www.kadoya-taimeshi.com/kadoyamanage/shoplist/taimeshikadoyaropeway/",
  "ana": "https://www.kadoya-taimeshi.com/kadoyamanage/shoplist/kadoyaokaido/",
  "takashimaya": "https://www.iyotetsu-takashimaya.co.jp/business-hours-parking/",
  "tea": "https://www.iyotetsu-takashimaya.co.jp/restaurant-cafe/shop-list/afternoontea.php",
  "coffee": "https://shirasagicoffee.com/",
  "dogo": "https://dogo.jp/onsen/honkan",
  "uotake": "https://www.dogo.or.jp/eat/uotake/",
  "donki": "https://www.donki.com/store/shop_detail.php?shop_id=620",
  "akiyoshi": "https://w-harmony.jp/shop/akiyoshi/",
  "sakigake": "https://sakigake-okaido.com/access/",
  "sakigakeMenu": "https://sakigake-okaido.com/menu/",
  "shou": "https://www.hotpepper.jp/strJ001061739/drink/"
};
Object.assign(sources,{"hotel":"https://www.nesthotel.co.jp/matsuyama/sp/","castle":"https://www.city.matsuyama.ehime.jp/kanko/kankoguide/shitestukoen/matsuyamajyo/shitsumon.html","ferry":"https://gogoshima-ferry.com/timetable_faretable/","bike":"https://gogoshima-ferry.com/bicycle_rental/","island":"https://gogoshima-ferry.com/guide/","vjw":"https://services.digital.go.jp/visit-japan-web/","smartpass":"https://airport.kr/ap_ko/889/subview.do","esim":"https://support.apple.com/ja-jp/118227"});
const hotel="ネストホテル松山 松山市二番町1丁目7番1号";
const okaido="大街道駅 松山市 愛媛県 日本";
const days=[
  {
    "title": "출국 준비 · 마쓰야마성",
    "kicker": "DAY 1 · THURSDAY",
    "description": "입국 → 무료 셔틀 → 호텔 → 마쓰야마성 외관 → 저녁",
    "meta": [
      "네스트 호텔 마쓰야마",
      "천수각 내부 관람 불가"
    ],
    "note": "무료 셔틀은 오카이도 16:10 도착 예정. 천수각 마지막 입장 16:30에 맞추기 어려워 첫날은 혼마루 광장과 성 외관을 관람합니다.",
    "stops": [
      {
        "time": "출국 전",
        "name": "eSIM 설치",
        "type": "통신 준비",
        "jp": "",
        "copy": "설치 즉시 사용 기간이 시작되는 상품도 있습니다. 구매한 상품의 활성화 조건을 확인하세요.",
        "tip": "아래는 Apple 공식 안내입니다. 안드로이드는 기종과 통신사에 맞는 설치 안내를 사용하세요. 이 페이지에서 eSIM을 구매하거나 개통한 것은 아닙니다.",
        "source": "esim",
        "quick": "구매한 eSIM의 개통 시작 조건부터 확인",
        "steps": [
          "휴대폰 eSIM 지원·통신사 잠금 여부 확인",
          "Wi-Fi 환경에서 제공업체 안내대로 설치. QR 코드와 설치 안내 저장",
          "일본 도착 후 데이터 회선을 일본 eSIM으로 지정",
          "한국 회선 데이터 로밍·자동 데이터 전환 끄기. 일본 eSIM 로밍 설정은 제공업체 안내 따르기"
        ]
      },
      {
        "time": "출국 전",
        "name": "Visit Japan Web 등록",
        "type": "일본 입국·세관",
        "jp": "",
        "copy": "일본 디지털청의 공식 입국 사전 등록 서비스입니다. 공항에서 입력하는 시간을 줄일 수 있습니다.",
        "tip": "사전 등록을 해도 입국심사·세관 확인은 진행합니다. 원본 여권을 함께 지참하세요.",
        "source": "vjw",
        "quick": "여행자별 등록과 QR 준비",
        "steps": [
          "여권 정보와 2026.10.01 입국 일정 등록",
          "항공편 7C1703 · 마쓰야마 공항 입력",
          "숙소: ネストホテル松山 / 790-0002 / 愛媛県松山市二番町1丁目7番1号 / 089-945-8111",
          "입국심사·세관 신고를 작성하고 각자의 QR을 오프라인에서도 확인할 수 있게 준비"
        ]
      },
      {
        "time": "출국 전",
        "name": "인천공항 스마트패스 등록",
        "type": "인천공항 출국 준비",
        "jp": "",
        "copy": "얼굴 정보를 이용하는 출국장·일부 탑승구 통과 서비스입니다. 제주항공도 참여 항공사로 안내되어 있습니다.",
        "tip": "보안검색과 출국심사 면제 서비스가 아닙니다. 실제 이용 구간은 현장 안내를 따르고 여권·탑승권은 휴대하세요.",
        "source": "smartpass",
        "quick": "여권·얼굴 등록 → 당일 탑승권 등록",
        "steps": [
          "ICN SMARTPASS 앱에서 여권과 얼굴 등록",
          "체크인 후 이번 항공편 탑승권 등록",
          "인천공항 T1에서 스마트패스 이용 가능한 출국장·탑승구 확인"
        ]
      },
      {
        "time": "10:15",
        "name": "인천공항 T1 도착",
        "type": "출국 · 7C1703",
        "jp": "13:15 ICN → 14:50 MYJ",
        "copy": "출발 3시간 전 공항 도착을 계획합니다. 제주항공 체크인·수하물 위탁 후 보안검색과 출국심사를 진행하세요.",
        "tip": "실제 카운터와 탑승 시각은 당일 항공사 안내를 확인하세요."
      },
      {
        "time": "14:50",
        "type": "도착 · 7C1703",
        "name": "1층 안내데스크 · 여권과 쿠폰",
        "jp": "松山空港 1F インフォメーション",
        "place": "松山空港 愛媛県 日本",
        "mode": "walking",
        "copy": "수하물을 찾은 뒤 1층 인포메이션 센터에서 한국 여권을 제시해 관광지 무료 입장·할인 교환권을 받아요. 두 사람 각각 수령하고 무료 셔틀 승차 위치도 물어보세요.",
        "tip": "여권은 맡기는 것이 아니라 제시합니다. 안내데스크는 관광지 쿠폰 수령처이며, 무료 셔틀 탑승 시에는 기사님께 여권을 다시 보여주세요. 입국이 늦어지면 직원에게 셔틀 탑승을 먼저 문의하세요.",
        "source": "benefits",
        "steps": [
          "1층 인포메이션 센터 → 한국 여권 제시 → 관광지 쿠폰 수령",
          "국제선 도착장 기준 오른쪽 국내선 방향 끝까지 이동",
          "렌터카 카운터 바로 옆 자동문 → 관광버스 주차장",
          "기사님께 여권 제시 → 이치반초(오카이도) 하차를 알리고 무료 탑승"
        ]
      },
      {
        "time": "15:40",
        "type": "무료 · 공항 → 시내",
        "name": "무료 셔틀로 오카이도",
        "jp": "松山空港 → 一番町（大街道）",
        "place": "一番町 大街道 松山市 愛媛県",
        "shuttle": true,
        "copy": "도착장에서 오른쪽 국내선 방향 끝의 렌터카 카운터로 이동 → 옆 자동문 → 관광버스 주차장. 기사님께 여권을 보여주세요.",
        "travel": "공항 15:40 → 이치반초(오카이도) 16:10",
        "route": "무료 셔틀 · 약 30분 · 제주항공 인천 직항 이용객",
        "tip": "공식 10월 안내의 매일 오후편 기준. 무료 셔틀은 Google Maps 대중교통 검색에 표시되지 않을 수 있어요. 아래 지도는 도착 지역 확인용이며 시간표·탑승은 현장 안내를 따릅니다. 놓치면 유료 리무진 16:10→16:39편 등을 확인하세요. 자세한 탑승 순서는 첫 일정 카드와 교통·무료 혜택 메뉴에 있어요.",
        "source": "benefits",
        "quick": "편도 0엔 · 귀국 시 공항행도 무료",
        "storyKeys": [
          "matsuyama"
        ]
      },
      {
        "time": "16:20",
        "name": "네스트 호텔 · 체크인",
        "type": "숙소 · 짐 맡기기",
        "jp": "ネストホテル松山 松山市二番町1丁目7番1号",
        "copy": "체크인은 15:00부터입니다. 짐을 두고 16:35 전후 출발하는 계획입니다.",
        "tip": "입국·셔틀·체크인이 늦어지면 성 체류가 줄어듭니다. 천수각 내부 입장은 이날 계획에 포함하지 않습니다.",
        "place": "ネストホテル松山 松山市二番町1丁目7番1号",
        "origin": "大街道駅 松山市",
        "mode": "walking",
        "mapUrl": "https://maps.app.goo.gl/DVXxhWvR2gN6aePL6",
        "travel": "오카이도 → 호텔",
        "route": "도보 약 10–15분 · 짐 포함 추정",
        "source": "hotel"
      },
      {
        "time": "16:50",
        "name": "마쓰야마성 · 혼마루 광장과 외관",
        "type": "성 관람",
        "jp": "松山城 本丸広場",
        "copy": "16:50 전후 로프웨이 탑승, 17:05 전후 혼마루 광장 도착을 목표로 합니다. 성곽과 시내 전망을 본 뒤 17:15에는 광장에서 하산을 시작해 마지막 로프웨이 전에 도착하세요.",
        "tip": "10월 공식 운영: 천수각 09:00–17:00(입장 16:30까지), 로프웨이 08:30–17:30, 리프트 08:30–17:00. 혼마루 광장은 05:00–21:00입니다. 지연되면 도보 하산 약 20–30분을 고려하세요. 왕복 로프웨이는 공항 교환권 사용조건 확인.",
        "place": "松山城ロープウェイ 東雲口駅",
        "origin": "ネストホテル松山 松山市二番町1丁目7番1号",
        "mode": "walking",
        "source": "castle",
        "storyKeys": [
          "matsuyama"
        ],
        "quick": "천수각 16:30 입장 마감 / 로프웨이 17:30 종료",
        "travel": "호텔 → 로프웨이 동운구역",
        "route": "도보 약 15분 추정 → 로프웨이 → 상부역에서 광장까지 도보 약 10분"
      },
      {
        "time": "18:15",
        "name": "저녁",
        "type": "식사 시간",
        "jp": "호텔 주변 · 니반초·오카이도",
        "copy": "맛집 탭에서 현재 위치에 가까운 곳을 확인하세요.",
        "tip": "숙소 주변 야키니쿠·야키토리와 생맥주는 맛집 탭에서 선택하세요.",
        "food": true
      },
      {
        "time": "19:30",
        "name": "오카이도 쇼핑",
        "type": "쇼핑",
        "jp": "大街道商店街",
        "copy": "식사 후 영업 중인 상점 위주로 필요한 물건을 구입합니다.",
        "tip": "개별 점포 마감 시간을 확인하세요. 내일 섬에서 먹을 간식과 물도 준비합니다.",
        "place": "大街道商店街 松山市",
        "mode": "walking",
        "storyKeys": [
          "okaido"
        ]
      }
    ],
    "end": "20:30 전후 네스트 호텔 복귀.",
    "returnFrom": "大街道商店街 松山市"
  },
  {
    "title": "바이신지 → 고고섬",
    "kicker": "DAY 2 · FRIDAY",
    "description": "다카하마선 → 바이신지 → 유라항 → 전동 자전거 → 호텔",
    "meta": [
      "미쓰 관광 제외",
      "유라항 왕복",
      "전동 자전거"
    ],
    "note": "10/2(금) 계획: 다카하마 11:55 → 유라 12:08 / 유라 16:40 → 다카하마 16:53. 현재 선사 정기 시간표 기준이며, 10/2 운항 확정·예약을 의미하지 않습니다. 전날 기상·결항·변경 공지를 확인하세요.",
    "stops": [
      {
        "time": "09:00",
        "name": "호텔 → 마쓰야마시역 → 바이신지",
        "type": "이동·관람",
        "jp": "勝山町 → 松山市駅 → 梅津寺駅",
        "copy": "호텔에서 가쓰야마초 전차 정류장까지 공식 도보 3분. 마쓰야마시역에서 다카하마행 교외전철로 갈아타고 바이신지에 내립니다.",
        "tip": "JR 마쓰야마역이 아닌 이요테쓰 마쓰야마시역입니다. Google Maps에서 10/2 출발 시각을 지정해 실제 환승을 확인하세요.",
        "place": "梅津寺駅 松山市",
        "origin": "ネストホテル松山 松山市二番町1丁目7番1号",
        "mode": "transit",
        "travel": "가쓰야마초 전차 → 마쓰야마시역 환승 → 다카하마선",
        "route": "도보·대기·환승 포함 약 50–60분 추정",
        "source": "rail"
      },
      {
        "time": "10:00",
        "name": "바이신지 역·해안",
        "type": "이동·관람",
        "jp": "梅津寺駅・梅津寺海岸",
        "copy": "역과 해안 일대를 둘러봅니다. 카페를 이용한다면 11:00 전후까지 마무리하세요.",
        "tip": "선로·승강장에서는 역 안내를 따르세요. 11:55 배를 타기 위해 체류를 길게 늘리지 않습니다.",
        "place": "梅津寺海岸 松山市",
        "origin": "梅津寺駅 松山市",
        "mode": "walking",
        "must": true,
        "storyKeys": [
          "baishinji"
        ]
      },
      {
        "time": "11:10",
        "name": "다카하마항 · 유라행 승선 준비",
        "type": "이동·관람",
        "jp": "梅津寺 → 高浜駅 → 高浜港",
        "copy": "다카하마역 맞은편 고고섬 페리 항구에서 유라(由良)행을 확인합니다. 마쓰야마 관광항(松山観光港)으로 가지 마세요.",
        "tip": "대합실 자동발매기는 현금·캐시리스 결제를 지원합니다. 성인 편도 300엔. 전동 자전거 요금에 돌아오는 배가 포함되므로 출항 때는 편도만 구입하세요.",
        "place": "高浜港 興居島フェリー 松山市",
        "origin": "梅津寺駅 松山市",
        "mode": "transit",
        "source": "ferry",
        "travel": "바이신지 → 다카하마 1개 역 → 항구 도보",
        "route": "대기 포함 약 15–25분 추정 · 11:35까지 매표 목표"
      },
      {
        "time": "11:55",
        "name": "페리 · 다카하마 → 유라",
        "type": "이동·관람",
        "jp": "高浜 11:55 → 由良 12:08",
        "copy": "유라행에 승선하세요. 선내에서 자전거 대여를 문의할 수 있지만 전동 자전거는 미리 예약하는 편이 좋습니다.",
        "tip": "지도는 항구 위치 확인용입니다. 선사 시간표와 현장 안내가 우선이며 출항 전에 여유 있게 승선하세요.",
        "place": "興居島 由良港 松山市",
        "shuttle": true,
        "source": "ferry",
        "travel": "유라행 페리 · 13분",
        "route": "성인 편도 300엔 · 2인 600엔",
        "quick": "다음 출항은 13:15 → 13:28",
        "storyKeys": [
          "gogoOrigin"
        ]
      },
      {
        "time": "12:15",
        "name": "유라항 · 전동 자전거 대여",
        "type": "이동·관람",
        "jp": "由良港 レンタサイクル",
        "copy": "유라항에는 전동 19대가 안내되어 있습니다. 같은 유라항 반납으로 계획하면 다른 항구 반납료 1대 200엔이 들지 않습니다.",
        "tip": "대여료 1,500엔은 전동 1대 기준으로 복귀 배편 포함. 2인 출항 배 600엔 + 전동 2대 3,000엔 = 3,600엔(식비·시내 교통 별도). 16:00 반납은 계획 시각이며 실제 대여 마감은 인수할 때 확인하세요.",
        "place": "興居島 由良港 松山市",
        "mode": "walking",
        "source": "bike",
        "quick": "1대 1,500엔 · 돌아오는 페리 포함 / 2대 + 출항편 = 총 3,600엔",
        "steps": [
          "선사 공식 대여 페이지에서 전동 자전거 2대 예약 신청",
          "확인 메일을 받아야 예약 완료. 현재 이 페이지에서 예약하지는 않았습니다",
          "현장에서 반납 장소·마감 시각·복귀 승선권 수령 방법 확인",
          "헬멧 착용·브레이크와 배터리 점검 후 출발"
        ]
      },
      {
        "time": "12:30",
        "name": "점심",
        "type": "식사 시간",
        "jp": "유라항 주변 · 준비한 식사도 가능",
        "copy": "맛집 탭에서 현재 위치에 가까운 곳을 확인하세요.",
        "tip": "섬은 금요일 휴무인 가게가 있으므로 출항 전 점심·물·간식을 준비하면 편리합니다.",
        "food": true
      },
      {
        "time": "13:15",
        "name": "유라 일대 · 간논지·벤텐 신사",
        "type": "자전거 · 마을 관람",
        "jp": "観音寺・弁財天神社",
        "copy": "유라 마을의 간논지와 해안 벤텐 신사를 둘러봅니다. 좁은 참배로에서는 자전거를 세우고 걸어갑니다.",
        "tip": "Google Maps 도보 길찾기는 위치 참고용입니다. 자전거 통행 가능 여부·도로 상태는 현장에서 확인하고 선사 대여 안내의 섬 지도를 함께 보세요.",
        "place": "観音寺 松山市由良町1255",
        "origin": "興居島 由良港 松山市",
        "mode": "walking",
        "source": "island",
        "storyKeys": [
          "gogoCulture"
        ],
        "travel": "유라항 주변에서 시작",
        "route": "약 45분 체류 · 지도는 도보 경로 참고"
      },
      {
        "time": "14:00",
        "name": "후나코시 · 와케히메 신사·해안",
        "type": "자전거 · 해안 왕복",
        "jp": "船越和気比賣神社",
        "copy": "후나코시 신사와 해안 일대를 본 뒤 왔던 방향으로 유라항에 돌아옵니다. 이요코후지는 배나 해안에서 외형을 보는 일정으로, 등산은 포함하지 않습니다.",
        "tip": "15:20 전후에는 유라항 방향으로 돌아오세요. 오르막·차도·바람이 부담되면 유라 주변만 둘러봐도 됩니다. 자전거를 탄 뒤 음주는 하지 마세요.",
        "place": "船越和気比賣神社 松山市泊町1355",
        "origin": "観音寺 松山市由良町1255",
        "mode": "walking",
        "source": "island",
        "storyKeys": [
          "gogoSights"
        ],
        "travel": "유라 → 후나코시 → 유라 왕복",
        "route": "관람·휴식 포함 약 2시간 · 섬 일주는 제외"
      },
      {
        "time": "16:00",
        "name": "유라항 · 자전거 반납",
        "type": "반납·승선 대기",
        "jp": "由良港",
        "copy": "자전거를 반납하고 포함된 복귀 승선권을 확인합니다. 16:25 전후까지 승선 대기하세요.",
        "tip": "반납 마감은 대여처와 사전 확인. 배는 자전거 반납을 기다려 주지 않으므로 일찍 돌아옵니다.",
        "place": "興居島 由良港 松山市",
        "origin": "船越和気比賣神社 松山市泊町1355",
        "mode": "walking",
        "source": "bike"
      },
      {
        "time": "16:40",
        "name": "페리 · 유라 → 다카하마",
        "type": "이동·관람",
        "jp": "由良 16:40 → 高浜 16:53",
        "copy": "현장에서 받은 복귀 승선권으로 탑승합니다. 자전거 대여를 취소했다면 일반 성인 편도는 300엔입니다.",
        "tip": "17:50 배는 차선책이며 자전거 반납 마감이 연장된다는 뜻은 아닙니다.",
        "place": "高浜港 興居島フェリー 松山市",
        "shuttle": true,
        "source": "ferry",
        "travel": "유라 출발 · 13분",
        "route": "전동 자전거 요금에 복귀 배 포함",
        "quick": "앞선 편 15:35 / 다음 편 17:50"
      },
      {
        "time": "17:05",
        "name": "다카하마 → 네스트 호텔",
        "type": "이동·관람",
        "jp": "高浜 → 松山市 → 勝山町",
        "copy": "마쓰야마시역에서 시내 전차로 갈아타 가쓰야마초에서 내린 뒤 호텔로 돌아갑니다.",
        "tip": "Google Maps에서 실제 출발 시각 기준 환승을 확인하세요.",
        "place": "ネストホテル松山 松山市二番町1丁目7番1号",
        "origin": "高浜駅 松山市",
        "mode": "transit",
        "travel": "다카하마선 + 시내 전차 + 도보",
        "route": "약 50–65분 추정"
      },
      {
        "time": "18:30",
        "name": "저녁",
        "type": "식사 시간",
        "jp": "네스트 호텔 주변",
        "copy": "맛집 탭에서 현재 위치에 가까운 곳을 확인하세요.",
        "tip": "숙소 주변 야키니쿠·야키토리와 생맥주는 맛집 탭에서 선택하세요.",
        "food": true
      }
    ],
    "end": "20:00 전후 호텔 복귀.",
    "returnFrom": "ネストホテル松山 松山市二番町1丁目7番1号"
  },
  {
    "title": "쇼핑 · 도고온천",
    "kicker": "DAY 3 · SATURDAY",
    "description": "호텔 → 마쓰야마시역 쇼핑 → 도고 → 시내",
    "meta": [
      "가쓰야마초 거점",
      "입욕 선택"
    ],
    "note": "09:20 전후 호텔 출발. 도고에서 호텔로 바로 돌아올 때는 가쓰야마초에서 내려 도보 약 3분입니다.",
    "stops": [
      {
        "time": "10:00",
        "type": "쇼핑",
        "name": "다카시마야 & 시역 주변",
        "jp": "いよてつ髙島屋",
        "place": "いよてつ髙島屋 松山市湊町5丁目1-1",
        "origin": "ネストホテル松山 松山市二番町1丁目7番1号",
        "mode": "transit",
        "copy": "호텔에서 가쓰야마초 정류장으로 걸어가 마쓰야마시역 방향 전차를 이용합니다.",
        "travel": "호텔 → 가쓰야마초 → 마쓰야마시역",
        "route": "도보·대기 포함 약 25–40분 추정",
        "tip": "본점 공식 영업 10:00–19:00. 오후에 도고로 이동하므로 부피가 큰 쇼핑은 마지막 시내 시간으로 미뤄도 좋아요.",
        "source": "takashimaya",
        "hoursKey": "takashimaya",
        "storyKeys": [
          "shieki"
        ]
      },
      {
        "time": "12:15",
        "type": "식사 시간",
        "name": "점심",
        "jp": "마쓰야마시역 주변",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "14:00",
        "type": "이동 · 도고 도착",
        "name": "전차 타고 도고로",
        "jp": "松山市駅前 → 道後温泉",
        "place": "道後温泉駅 松山市 愛媛県 日本",
        "origin": "松山市駅 伊予鉄道 愛媛県 日本",
        "mode": "transit",
        "copy": "13:15쯤 마쓰야마시역 앞에서 도고온천행 전차를 타요. 도착 후에는 카페와 온천 거리로 이동합니다.",
        "travel": "마쓰야마시역 앞 → 도고온천역",
        "route": "도보·대기 포함 약 35–45분 · 식당에서는 현재 위치에서",
        "tip": "점심 식당은 정해져 있지 않아 구간 길찾기는 마쓰야마시역 기준이에요. 실제 식당에서는 현재 위치 버튼을 이용하세요.",
        "storyKeys": [
          "dogoStation"
        ]
      },
      {
        "time": "14:15",
        "type": "쉬는 시간",
        "name": "카페",
        "jp": "도고 주변 · 선택",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "15:30",
        "type": "산책 · 기념품",
        "name": "도고 상점가 구경",
        "jp": "道後ハイカラ通り",
        "place": "道後ハイカラ通り 松山市 愛媛県",
        "origin": "道後温泉駅 松山市 愛媛県 日本",
        "mode": "walking",
        "copy": "귤 과자와 작은 기념품을 구경하며 본관 쪽으로 걸어요. 중간에 마음에 드는 가게가 있으면 편하게 들르기.",
        "travel": "도고온천역 주변 → 하이카라 거리",
        "route": "입구까지 도보 약 2–3분 · 구경 약 45분",
        "tip": "점포별 영업시간은 달라요. 쇼핑 후 온천으로 이어지는 짧은 동선입니다.",
        "source": "dogo",
        "storyKeys": [
          "dogo",
          "honkan"
        ]
      },
      {
        "time": "16:30",
        "type": "선택 · 쿠폰으로 온천",
        "name": "아스카노유에서 쉬어가기",
        "jp": "道後温泉別館 飛鳥乃湯泉",
        "place": "道後温泉別館 飛鳥乃湯泉 松山市道後湯之町19-22",
        "origin": "道後ハイカラ通り 松山市 愛媛県",
        "mode": "walking",
        "copy": "공항에서 받은 교환권이 있다면 아스카노유 1층 입욕을 이용해요. 입욕 대신 본관 주변을 산책해도 좋아요.",
        "travel": "하이카라 거리 → 아스카노유",
        "route": "도보 약 3–5분 · 입욕 약 60분, 대기 별도",
        "tip": "여권과 교환권을 제시하세요. 무료 혜택 대상은 본관이 아닌 별관 아스카노유 1층입니다. 남녀 욕탕이 나뉘므로 만날 시각을 정해요. 본관을 원하면 기본 입욕은 별도 700엔/인입니다.",
        "source": "benefits",
        "hoursKey": "asuka",
        "storyKeys": [
          "asuka"
        ]
      },
      {
        "time": "18:30",
        "type": "식사 시간",
        "name": "저녁",
        "jp": "도고 또는 시내 · 자유 선택",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "20:00",
        "type": "마지막 쇼핑",
        "name": "돈키호테에서 마지막 쇼핑",
        "jp": "大街道 · ドン・キホーテ松山大街道店",
        "place": "ドン・キホーテ松山大街道店 松山市三番町2丁目3-7",
        "origin": "道後温泉駅 松山市 愛媛県 日本",
        "mode": "transit",
        "copy": "저녁을 먹고 필요한 선물을 마저 사요. 시내에서 식사했다면 현재 위치에서 버튼으로 바로 찾아가세요. 21:00 전후 숙소로 돌아가 짐과 여권을 챙겨요.",
        "travel": "도고온천역 → 오카이도 · 시내 복귀 기준",
        "route": "약 25–40분 · 식사 장소에서는 현재 위치에서",
        "tip": "Google Maps와 공식 영업은 09:00–다음 날 02:00. 내일 무료 셔틀은 07:05 출발이니 쇼핑은 짧게 마무리해요.",
        "source": "donki",
        "hoursKey": "donki"
      }
    ],
    "end": "21:00 전후 짐 정리. 내일 무료 셔틀 승차장과 알람 확인!",
    "returnFrom": "ドン・キホーテ松山大街道店 松山市三番町2丁目3-7"
  },
  {
    "title": "아침 비행기로 집에",
    "kicker": "SEE YOU AGAIN",
    "description": "무료 셔틀로 공항까지. 전날 짐과 승차 위치를 확인해요.",
    "meta": [
      "09:35 출국",
      "07:35 공항 도착 예정"
    ],
    "note": "무료 셔틀은 07:05 이치반초(오카이도) 출발. 06:50까지 승차 지점에 도착하는 계획입니다.",
    "stops": [
      {
        "time": "06:25",
        "type": "체크아웃 준비",
        "name": "네스트 호텔 체크아웃",
        "jp": "ネストホテル松山 松山市二番町1丁目7番1号",
        "copy": "짐과 여권을 확인하고 06:35 호텔에서 출발합니다. 무료 셔틀 승차 지점까지 도보 약 10–15분을 확보합니다.",
        "tip": "더 일찍 공항에 가고 싶으면 유료 리무진 06:11→06:40편을 이용할 수 있어요. 이 경우 숙소 출발도 앞당겨야 합니다."
      },
      {
        "time": "06:50",
        "type": "무료 셔틀 승차 대기",
        "name": "이치반초(오카이도)에서 대기",
        "jp": "一番町（大街道）無料シャトル乗車場所",
        "place": "大街道駅 松山市 愛媛県 日本",
        "mode": "walking",
        "copy": "도착 때 내렸던 위치와 공항행 승차 위치는 도로 반대편일 수 있어요. 전날 공식 승차 위치를 확인해 두세요.",
        "tip": "Google Maps는 오카이도 주변까지 안내합니다. 무료 셔틀 승차 핀은 에히메현 공식 안내도와 현장 표지로 확인하세요. 유료 리무진 승차장과 혼동하지 마세요.",
        "source": "benefits",
        "origin": "ネストホテル松山 松山市二番町1丁目7番1号"
      },
      {
        "time": "07:05",
        "type": "무료 · 시내 → 공항",
        "name": "무료 셔틀로 공항 이동",
        "jp": "一番町（大街道）→ 松山空港",
        "place": "松山空港 愛媛県 日本",
        "shuttle": true,
        "copy": "제주항공 인천–마쓰야마 이용 인바운드 여행객은 귀국 시 시내 → 공항 셔틀도 무료입니다. 기사님께 여권을 제시해요. 공항 07:35 도착 예정으로 09:35 귀국편까지 약 2시간을 확보했어요.",
        "travel": "이치반초 07:05 → 공항 07:35",
        "route": "무료 셔틀 · 약 30분 · 여권 지참",
        "tip": "공식 10월 안내의 매일 오전편입니다. 무료 셔틀이 지도 경로에 나오지 않아도 공식 시간표를 따르세요. 놓치면 유료 리무진 07:11→07:40편의 승차 위치·탑승 가능 여부를 확인하거나 택시를 이용해요. 도로 지연과 항공사 수속 마감에 유의하세요.",
        "source": "benefits",
        "quick": "귀국편도 무료 · 이치반초 07:05 → 공항 07:35"
      },
      {
        "time": "07:35",
        "type": "공항 · 수속",
        "name": "공항 도착, 출국 준비",
        "jp": "松山空港 国際線",
        "place": "松山空港 愛媛県 日本",
        "mode": "walking",
        "copy": "제주항공 국제선 카운터에서 수속하고 보안검색으로 이동해요.",
        "tip": "수속 마감·탑승구·탑승 시작 시각은 항공사 안내를 따르세요."
      },
      {
        "time": "09:35",
        "type": "귀국 · 7C1702",
        "name": "마쓰야마 출발",
        "jp": "MYJ → ICN",
        "copy": "11:15 인천공항 T1 도착 예정.",
        "tip": "사진의 예약편 기준입니다. 항공편 변경 여부와 당일 탑승권을 확인하세요."
      }
    ],
    "end": "11:15 인천 도착 예정. 한국과 일본은 시차가 없어요."
  }
];
const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m7 17 10-10M7 7h10v10"/></svg>';
const locate='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m3 10 18-7-7 18-3-8-8-3Z"/></svg>';
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function directionUrl(destination,origin,mode='walking'){
  const params=new URLSearchParams({api:'1',destination,travelmode:mode});
  if(origin)params.set('origin',origin);
  return 'https://www.google.com/maps/dir/?'+params.toString();
}
function placeUrl(place){return 'https://www.google.com/maps/search/?'+new URLSearchParams({api:'1',query:place});}
function routeAnchor(url,label,icon,accessible){return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(accessible)}">${icon}${label}</a>`;}
function hoursHtml(s){
  const h=placeHours[s.hoursKey];
  if(!h)return '';
  return `<div class="hours-box"><strong>Google Maps 영업시간</strong><p>${escapeHtml(h.label)}</p><small>2026.09.22 직접 확인 · 저장된 정보</small>${h.note?`<p class="hours-note">${escapeHtml(h.note)}</p>`:''}<a href="${escapeHtml(h.url||s.mapUrl||placeUrl(s.place))}" target="_blank" rel="noopener">지도에서 최신 영업시간 확인 ↗</a></div>`;
}
function storiesHtml(s){
  const stories=s.storyKeys?s.storyKeys.flatMap(key=>regionStories[key]||[]):s.stories;
  if(!stories?.length)return '';
  return `<details class="place-stories"><summary>지역·관광지 이야기 <span>역사·유래·전승 · ${stories.length}개 이야기</span></summary><p class="story-intro">이 동네가 생겨난 배경부터 오늘 유명해진 이유까지. 공식 자료를 바탕으로 풀어쓴 이야기예요.</p>${stories.map(story=>`<section class="story">${story.kind?`<p class="story-kind">${escapeHtml(story.kind)}</p>`:''}<h4>${escapeHtml(story.title)}</h4>${(story.paragraphs||[story.body]).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}<a href="${escapeHtml(story.url)}" target="_blank" rel="noopener">${escapeHtml(story.label)} ↗</a></section>`).join('')}<p class="story-checked">자료 확인 · 2026.09.22</p></details>`;
}
function stopHtml(s){
  let actions='';
  if(s.food)actions=routeAnchor('#food','가까운 맛집 고르기',locate,s.name+' 맛집 탭 열기').replace('target="_blank"','');
  if(s.source==='vjw'||s.source==='smartpass'||s.source==='esim')actions+=routeAnchor(sources[s.source],s.source==='vjw'?'Visit Japan Web 등록':s.source==='smartpass'?'스마트패스 공식 안내':'eSIM 설치 안내',arrow,s.name+' 공식 사이트');
  if(s.name==='유라 일대 · 간논지·벤텐 신사')actions+=routeAnchor(directionUrl('弁財天神社 松山市由良町',s.place,'walking'),'벤텐 신사 길찾기',arrow,'간논지에서 벤텐 신사 Google Maps');
  if(s.food&&s.jp.includes('유라항'))actions+=routeAnchor(placeUrl('興居島 由良港 レストラン'),'고고섬 식당 지도',arrow,'고고섬 식당 Google Maps 검색');
  if(s.place){
    if(s.shuttle){actions+=routeAnchor(placeUrl(s.place),'도착 지역 지도',arrow,s.name+' 도착 지역 Google Maps');}
    else {
      if(s.origin)actions+=routeAnchor(directionUrl(s.place,s.origin,s.mode),'구간 길찾기',arrow,s.name+' 앞 일정 기준 길찾기');
      actions+=routeAnchor(directionUrl(s.place,null,s.mode),'현재 위치에서',locate,s.name+' 현재 위치에서 길찾기');
    }
  }
  return `<li class="stop"><div class="time">${s.time}</div><article class="stop-card ${s.must?'must':''}"><div class="stop-type"><span>${escapeHtml(s.type)}</span>${s.must?'<span class="must-tag">꼭 가기</span>':''}</div><h3>${s.place?`<a href="${escapeHtml(s.mapUrl||placeUrl(s.place))}" target="_blank" rel="noopener" aria-label="${escapeHtml(s.name)} Google Maps 장소 보기">${escapeHtml(s.name)} ↗</a>`:escapeHtml(s.name)}</h3><p class="japanese">${escapeHtml(s.jp)}</p>${s.quick?`<p class="quick-note">${escapeHtml(s.quick)}</p>`:''}${s.travel?`<div class="travel"><b>${escapeHtml(s.travel)}</b>${escapeHtml(s.route)}</div>`:''}${actions?`<div class="actions">${actions}</div>`:''}<details ${s.steps?'open':''}><summary>메뉴·영업·방문 팁</summary><p class="stop-copy">${escapeHtml(s.copy)}</p>${s.steps?`<ol class="arrival-steps">${s.steps.map(step=>`<li>${escapeHtml(step)}</li>`).join('')}</ol>`:''}${hoursHtml(s)}<p>${escapeHtml(s.tip)}</p>${s.source?`<a href="${sources[s.source]}" target="_blank" rel="noopener">${s.source==='shou'?'가게 등록 메뉴 확인':s.source==='busStop'?'공항행 정확한 승차장 안내':'공식·지역 안내 확인'} ↗</a>`:''}</details>${storiesHtml(s)}</article></li>`;
}
let selectedDay=0;
function renderDay(index){
  selectedDay=index;
  const d=days[index];
  document.querySelectorAll('[data-day]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;});
  const panel=document.getElementById('day-panel');
  panel.setAttribute('aria-labelledby','day-tab-'+index);
  panel.innerHTML=`<header class="day-header"><span class="day-kicker">${d.kicker}</span><h2>${d.title}</h2><p>${d.description}</p><div class="day-meta">${d.meta.map(m=>`<span>${m}</span>`).join('')}</div></header><p class="day-note">${d.note}</p><ol class="timeline">${d.stops.map(stopHtml).join('')}</ol><div class="day-end">${d.end}${d.returnFrom?`<a href="${escapeHtml(directionUrl(hotel,null,'walking'))}" target="_blank" rel="noopener">현재 위치에서 호텔로 ↗</a><small>네스트 호텔 마쓰야마</small>`:''}</div><p class="fine-print">시간은 예약이 아닌 추천 일정입니다. 이동시간은 추정치, 길찾기는 Google 지도에서 열려요. 여행일 경로를 보려면 지도에서 출발 날짜·시각을 바꿔주세요. 현재 위치 제공 여부는 지도 앱에서 선택할 수 있어요.</p>`;
}
function showView(view){
  if(view==='food')openFoodView();
  for(const key of ['schedule','food','transport','info']){
    document.getElementById(key+'-view').hidden=key!==view;
    const button=document.querySelector(`[data-view="${key}"]`);
    if(key===view)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
  }
}
function syncHash(){
  const hash=location.hash.slice(1);
  if(hash==='food'||hash==='transport'||hash==='info'){showView(hash);return;}
  const match=/^day-([1-4])$/.exec(hash);
  showView('schedule');renderDay(match?Number(match[1])-1:0);
}
document.querySelectorAll('[data-day]').forEach(button=>{
  button.addEventListener('click',()=>{const i=Number(button.dataset.day);renderDay(i);history.replaceState(null,'','#day-'+(i+1));});
  button.addEventListener('keydown',event=>{
    let next=selectedDay;
    if(event.key==='ArrowRight')next=(selectedDay+1)%4;
    else if(event.key==='ArrowLeft')next=(selectedDay+3)%4;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=3;
    else return;
    event.preventDefault();document.querySelector(`[data-day="${next}"]`).click();document.querySelector(`[data-day="${next}"]`).focus();
  });
});
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  const view=button.dataset.view;showView(view);history.replaceState(null,'','#'+(view==='schedule'?'day-'+(selectedDay+1):view));
}));
window.addEventListener('hashchange',syncHash);
renderDay(0);
syncHash();
