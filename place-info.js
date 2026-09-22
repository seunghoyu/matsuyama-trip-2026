'use strict';
// Google Maps visible business listings, manually checked 2026-09-22.
// Static snapshots, not an API or a live open/closed calculation.
const placeHours = {
  kuraki:{label:'월·화·목–일 11:00–14:30 / 17:30–22:00',note:'확인 당시 이번 주 수요일(9/23 공휴일)은 11:30–14:30 / 17:30–22:00으로 표시됐어요. 방문 요일·임시 변경은 지도에서 다시 확인하세요.',url:'https://maps.app.goo.gl/shMqoMdTGFtHBy4z6'},
  shobu:{label:'수–일 11:30–13:30 / 17:30–21:00 · 월·화 휴무',note:'점심과 저녁 사이에는 영업하지 않는 것으로 표시됩니다.',url:'https://maps.app.goo.gl/CZKsHwQ5TgxnsFX5A'},
  yukemuri:{label:'매일 10:00–19:40',note:'방문 전 메뉴별 마지막 주문과 임시휴무를 확인하세요.',url:'https://maps.app.goo.gl/SdqvisgxBoiFpjus8'},
  sakigake:{label:'월·화·목–일 15:00–24:00',note:'공식 정기휴무는 수요일입니다. 지도 이번 주에는 9/23(수·공휴일) 15:00–24:00 특별 영업으로 표시돼요. 공식 마지막 주문은 음식 23:00·음료 23:30입니다.'},
  takashimaya:{label:'매일 10:00–19:00',note:'백화점 본점 기준입니다. 층별 식당·시설은 별도 시간이 있을 수 있어요.'},
  tea:{label:'매일 10:00–19:00',note:'다카시마야 4층 티룸 기준. 주말 대기시간은 별도입니다.'},
  donki:{label:'매일 09:00–다음 날 02:00',note:'오카이도점 기준입니다. 면세 수속 시간이 필요하면 마감 직전 방문은 피하세요.'},
  akiyoshi:{label:'월·수–일 11:00–14:30 / 17:30–20:00 · 화 휴무',note:'공식 사이트는 11:00–15:00(주문 14:30), 17:30–20:30(주문 20:00)로 안내합니다. 지도 마감 표기가 공식 마지막 주문과 같으니 마감 직전 방문은 피하세요.',url:'https://maps.app.goo.gl/uLbCv61KZek6UWKE7'},
  shou:{label:'금·토 18:00–다음 날 04:00',note:'Google Maps 이번 주 표시에서 목·일·월은 휴무, 화 18:00–다음 날 03:30, 수(9/23 공휴일)는 휴무입니다. 방문일의 임시 변경 여부는 출발 전 재확인해요.',url:'https://maps.app.goo.gl/GoDMe99R43EpBxkXA'},
  hinode:{label:'월·화·목–일 11:00–18:30 · 수 휴무',note:'지역 관광 안내에는 18:00 마감으로 기재되어 있어요. 점심 시간 방문을 고려하고 마감 직전에는 매장에 확인하세요.'},
  mican:{label:'화–금 10:00–16:00 / 토·일 10:00–17:00 · 월 휴무',note:'지도는 현재 표시값입니다. 10월 공식 변경 공지는 평일 16:30 마감·카페 주문 16:00, 주말 17:00 마감·주문 16:30. 여행 일정에는 10월 공지를 적용했어요.'},
  coffee:{label:'매일 09:00–18:00',note:'공식 안내의 음료·디저트 마지막 주문은 17:30입니다.'},
  asuka:{label:'매일 06:00–23:00',note:'시설 전체 표시시간입니다. 이용 코스별 마지막 접수는 공식 안내에서 확인하세요. 쿠폰은 1층 입욕 대상입니다.'}
};
