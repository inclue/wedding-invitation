const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "박인서 ❤️ 여희원의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: mainImageUrl,
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Happy Wedding Day",
    image: mainImageUrl,
    date: "2026년 6월 7일 일요일 오후 3시 10분",
    venue: "상록아트홀 5층"
  },

  // 소개글
  intro: {
    title: "",
    text: "",
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 6,
    day: 7,
    hour: 15,
    minute: 10,
    displayDate: "2026.06.07 SUN PM 03:10",
  },

  // 장소 정보
  venue: {
    name: "상록아트홀 5F 아트홀",
    address: "서울특별시 강남구 언주로 508 (역삼동 701번지)",
    tel: "02-564-5757",
    naverMapId: "상록아트홀", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.5038913,
      longitude: 127.0429552,
    },
    placeId: "366784007", // 네이버 지도 장소 ID
    mapZoom: "15", // 지도 줌 레벨
    transportation: {
      subway: "선릉역 5번 출구 도보 5분 (셔틀버스 수시 운행)",
      bus: "간선버스 - KT 강남지사 하차\n141(도봉산), 242(중랑, 신내역), 361(여의도)\n\n간선버스 - 한국기술센터.상록회관 하차\n146(상계동), 341(하남), 360(송파), 740(덕은동), N13(상계주공7단지), N61(양천)\n\n직행버스 및 급행버스\n1100(차산리), 1700(연대농장입구.도곡리), 2000(진벌리), 7007(광릉내), 8001(대성리), 9303(하남)",
    },
    parking: "건물 지하 주차장 이용 가능 (1시간 30분 무료)",
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "middle" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "서로의 이름이\n가장 편안한 집이 되었습니다.\n\n같이 웃고, 같이 걷고,\n그렇게 평생을 약속하고자 합니다.\n\n따뜻한 축복의 자리\n함께해 주시면 감사하겠습니다.",
    groom: {
      name: "박인서",
      label: "장남",
      father: "박승윤",
      mother: "김미경",
    },
    bride: {
      name: "여희원",
      label: "장녀",
      father: "여명석",
      mother: "김명주",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "은행명",
      number: "123-456-789012",
      holder: "박인서",
    },
    bride: {
      bank: "은행명",
      number: "987-654-321098",
      holder: "여희원",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "박승윤",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "김미경",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "여명석",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "김명주",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
