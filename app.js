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
const okaido="大街道駅 松山市 愛媛県 日本";
const days=[
  {
    "title": "도착, 저녁 먹고 시내 산책",
    "kicker": "HELLO, MATSUYAMA",
    "description": "무료 셔틀로 시내에 들어와, 맛있는 것부터.",
    "meta": [
      "무료 셔틀 우선",
      "저녁 · 가벼운 쇼핑"
    ],
    "note": "1층 안내데스크에서 여권 제시·쿠폰 수령 → 관광버스 주차장 → 기사님께 여권 제시 → 무료 셔틀. 15:40 출발 예정이며 현장 안내를 따라요.",
    "stops": [
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
        "time": "17:00",
        "type": "숙소 · 휴식",
        "name": "체크인하고 잠깐 쉬기",
        "jp": "大街道 주변 · 호텔 미정",
        "copy": "오카이도 도보권 숙소를 가정한 휴식 시간이에요. 물 한 잔 마시고, 저녁은 가볍게 나가요.",
        "tip": "호텔은 아직 정하지 않았어요. 실제 숙소가 확정되면 이 구간과 각 날의 출발·복귀 경로를 조정해야 합니다."
      },
      {
        "time": "17:30",
        "type": "식사 시간",
        "name": "저녁",
        "jp": "오카이도 주변",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "19:15",
        "type": "쇼핑 · 산책",
        "name": "오카이도 & 돈키호테",
        "jp": "大街道商店街 · ドン・キホーテ松山大街道店",
        "place": "ドン・キホーテ松山大街道店 松山市三番町2丁目3-7",
        "origin": "大街道駅 松山市 愛媛県 日本",
        "mode": "walking",
        "copy": "상점가를 천천히 걸으면서 간식과 필요한 물건만 먼저 구경해요. 본격적인 쇼핑은 토요일에 해도 충분해요.",
        "travel": "오카이도 주변 → 상점가 남쪽",
        "route": "구간 길찾기는 오카이도역 기준 · 식사 후에는 현재 위치에서",
        "tip": "돈키호테 공식 영업 09:00–다음 날 02:00. 상점가 개별 점포는 마감 시간이 달라요. 오늘은 20:30쯤 숙소로 돌아가 휴식해요.",
        "source": "donki",
        "hoursKey": "donki",
        "storyKeys": [
          "okaido"
        ]
      }
    ],
    "end": "20:30쯤 숙소로. 내일은 바다 보러 가는 날.",
    "returnFrom": "ドン・キホーテ松山大街道店 松山市三番町2丁目3-7"
  },
  {
    "title": "바이신지, 바다 앞의 오후",
    "kicker": "THE DAY WE CAME FOR",
    "description": "미쓰하마에서 점심을 먹고 바다로. 카페도, 사진도, 멍하니 앉아 있는 시간도 넉넉하게.",
    "meta": [
      "미쓰하마 → 바이신지",
      "바이신지 필수 방문"
    ],
    "note": "오후는 바이신지 바다와 여유로운 카페 시간. 카페 영업시간은 맛집 탭에서 확인해요.",
    "stops": [
      {
        "time": "10:30",
        "type": "시내 → 근교",
        "name": "느긋하게 미쓰로 출발",
        "jp": "大街道 → 松山市駅 → 三津駅",
        "place": "三津駅 松山市 愛媛県 日本",
        "origin": "大街道駅 松山市 愛媛県 日本",
        "mode": "transit",
        "copy": "오카이도에서 마쓰야마시역으로 이동해 다카하마행 전철에 올라요. 미쓰역에서 내려 점심을 먹습니다.",
        "travel": "시내 전차 + 다카하마선",
        "route": "전체 약 40–55분 · 도보·환승·대기 포함 추정",
        "tip": "JR 마쓰야마역이 아닌 松山市駅입니다. 전철의 高浜 방면을 확인하세요. 정확한 출발편과 운임은 지도·공식 검색에서 확인해요.",
        "source": "rail"
      },
      {
        "time": "11:30",
        "type": "식사 시간",
        "name": "점심",
        "jp": "미쓰하마 주변",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "12:30",
        "type": "항구 마을 산책",
        "name": "미쓰하마 골목 한 바퀴",
        "jp": "三津浜 · 三津浜商店街",
        "place": "三津浜商店街 松山市住吉 愛媛県",
        "origin": "三津駅 松山市 愛媛県 日本",
        "mode": "walking",
        "copy": "오래된 가게와 항구 풍경을 천천히 구경해요. 길게 걷기 싫으면 일찍 역으로 돌아가 바이신지 체류를 늘려도 좋아요.",
        "travel": "미쓰역 주변 → 항구 마을",
        "route": "도보 약 10–15분 · 식사 후에는 현재 위치에서",
        "tip": "가게마다 영업일이 달라 외관과 골목 산책 중심으로 잡았어요. 바이신지로 갈 때는 미쓰역으로 돌아오세요.",
        "source": "mitsuhama",
        "storyKeys": [
          "mitsuhama"
        ]
      },
      {
        "time": "13:30",
        "type": "미쓰 → 바이신지",
        "name": "바다 옆 역으로",
        "jp": "三津駅 → 梅津寺駅",
        "place": "梅津寺駅 松山市 愛媛県 日本",
        "origin": "三津浜商店街 松山市住吉 愛媛県",
        "mode": "transit",
        "copy": "미쓰역으로 돌아가 다카하마행 전철을 타면 바이신지까지 두 정거장. 내리면 바다가 가까워요.",
        "travel": "상점가 → 미쓰역 → 바이신지역",
        "route": "도보·대기 포함 약 20–30분 / 전철 승차 약 5분",
        "tip": "三津 → 港山 → 梅津寺 순서예요. 반대 방향인 松山市 방면으로 타지 않도록 확인하세요.",
        "source": "mitsuhama",
        "storyKeys": [
          "baishinji"
        ]
      },
      {
        "time": "14:00",
        "type": "쉬는 시간",
        "name": "카페",
        "jp": "바이신지 주변 · 선택",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      },
      {
        "time": "15:15",
        "type": "바다 · 사진 · 쉬는 시간",
        "name": "바이신지 해변, 우리 둘",
        "jp": "梅津寺海岸",
        "place": "梅津寺海岸 松山市 愛媛県 日本",
        "origin": "梅津寺駅 松山市 愛媛県 日本",
        "mode": "walking",
        "must": true,
        "copy": "이번 여행의 가장 중요한 시간. 다음 장소를 서두르지 않고 바다를 보며 걸어요. 16:30쯤 돌아갈 준비를 하면 됩니다.",
        "travel": "바이신지역 주변 → 해변",
        "route": "구간 길찾기는 역 기준 · 카페에서는 현재 위치에서",
        "tip": "역 승강장은 철도 이용구역이에요. 사진은 허용된 구역에서 촬영하고 바람이 강하면 카페·실내로 이동하세요. 일몰 관람을 고정한 일정은 아닙니다.",
        "source": "mitsuhama",
        "storyKeys": [
          "baishinji"
        ]
      },
      {
        "time": "16:30",
        "type": "바이신지 → 시내",
        "name": "시내로 돌아오기",
        "jp": "梅津寺駅 → 松山市駅 → 大街道",
        "place": "大街道駅 松山市 愛媛県 日本",
        "origin": "梅津寺海岸 松山市 愛媛県 日本",
        "mode": "transit",
        "copy": "바이신지역에서 마쓰야마시·요코가와라 방면 전철로 돌아와요. 숙소에서 잠깐 쉬고 저녁을 먹으러 나가요.",
        "travel": "다카하마선 + 시내 전차 또는 도보",
        "route": "약 45–60분 · 대기·환승 포함 추정",
        "tip": "역에서 승차 방향을 확인하세요. 숙소가 마쓰야마시역 부근이면 오카이도까지 가지 않고 바로 쉬면 됩니다.",
        "source": "rail"
      },
      {
        "time": "18:30",
        "type": "식사 시간",
        "name": "저녁",
        "jp": "시내 · 숙소 주변",
        "food": true,
        "copy": "그때 가까운 곳을 맛집 탭에서 골라요. 위치를 허용하면 길찾기를 누르기 전에 가까운 순서로 볼 수 있어요.",
        "tip": "식당과 메뉴는 미리 고정하지 않았어요. 영업시간과 현장 대기를 보고 편하게 선택해요."
      }
    ],
    "end": "20:00 전후 숙소로. 숙소 위치가 정해지면 도보 동선을 다시 맞춰요."
  },
  {
    "title": "쇼핑하고, 도고에서 쉬고",
    "kicker": "A SLOW SATURDAY",
    "description": "오전은 쇼핑, 오후는 카페와 온천 거리. 서로 마음에 드는 가게에서 조금 더 머물러요.",
    "meta": [
      "시역 → 도고 → 오카이도",
      "입욕은 선택"
    ],
    "note": "성 관람을 원하면 오전 쇼핑 대신 약 90분을 배정해요. 두 가지를 모두 넣기보다는 하나만 골라 여유를 남깁니다.",
    "stops": [
      {
        "time": "10:00",
        "type": "쇼핑",
        "name": "다카시마야 & 시역 주변",
        "jp": "いよてつ髙島屋",
        "place": "いよてつ髙島屋 松山市湊町5丁目1-1",
        "origin": "大街道駅 松山市 愛媛県 日本",
        "mode": "transit",
        "copy": "백화점과 지하 식품관부터 천천히. 09:30–09:40쯤 오카이도에서 출발하면 문 여는 시간에 맞출 수 있어요.",
        "travel": "오카이도 → 마쓰야마시역",
        "route": "시내 전차·도보 약 20–30분 / 전 구간 도보 약 20–25분",
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
        "copy": "13:15쯤 마쓰야마시역 앞에서 도고온천행 전차를 타요. 도착 후에는 카페와 온천 거리를 느긋하게 즐겨요.",
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
        "name": "여권, 짐, 그리고 체크아웃",
        "jp": "숙소 미정 · 오카이도 도보권 기준",
        "copy": "짐과 여권을 챙겨 06:40쯤 숙소를 나와요. 정류장까지의 거리는 호텔이 정해지면 맞춥니다.",
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
        "source": "benefits"
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
        "copy": "11:15 인천공항 T1 도착 예정. 우리 둘의 마쓰야마 여행, 다음에 또.",
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
  panel.innerHTML=`<header class="day-header"><span class="day-kicker">${d.kicker}</span><h2>${d.title}</h2><p>${d.description}</p><div class="day-meta">${d.meta.map(m=>`<span>${m}</span>`).join('')}</div></header><p class="day-note">${d.note}</p><ol class="timeline">${d.stops.map(stopHtml).join('')}</ol><div class="day-end">${d.end}${d.returnFrom?`<a href="${escapeHtml(directionUrl(okaido,d.returnFrom,'walking'))}" target="_blank" rel="noopener">오카이도 거점으로 돌아가기 ↗</a><small>호텔 미정 · 실제 숙소까지는 별도 이동</small>`:''}</div><p class="fine-print">시간은 예약이 아닌 추천 일정입니다. 이동시간은 추정치, 길찾기는 Google 지도에서 열려요. 여행일 경로를 보려면 지도에서 출발 날짜·시각을 바꿔주세요. 현재 위치 제공 여부는 지도 앱에서 선택할 수 있어요.</p>`;
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
