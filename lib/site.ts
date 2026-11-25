/**
 * 아산자이 그랜드파크 콘텐츠 데이터.
 * 수치/문구는 실제 분양 정보에 맞게 이 파일에서 일괄 수정하세요.
 */

export const site = {
  name: "아산자이 그랜드파크",
  nameEn: "Asan Xi Grand Park",
  tel: "1555-0912",
  telLabel: "분양 상담 대표번호",
  smsNumber: "01034615252",
  smsNumberDisplay: "010-3461-5252",
  smsLabel: "문자 상담 접수",
  location: "충남 아산 · 용화동",
} as const;

/** 운영주체 정보 (사이트 제작·광고 운영 = 대한미디어그룹) */
export const operator = {
  company: "대한미디어그룹",
  bizNo: "707-25-02102",
  address: "서울특별시 금천구 디지털로9길 99, 스타밸리 1304-B호",
  adTel: "02-2088-4840",
  homepage: "https://www.daehanmedia.kr/",
  consultRole: "분양대행 상담사 (아산자이 그랜드파크)",
} as const;

/** 홍보 사이트 성격 고지문 — 메인 화면 + Footer 공통 사용 */
export const disclaimer =
  "본 사이트는 아산자이 그랜드파크 관련 분양 정보를 제공하고 상담 문의를 연결하기 위한 별도 홍보 페이지입니다. 시행사·시공사의 공식 홈페이지가 아니며, 홈페이지 제작 및 온라인 광고 운영은 대한미디어그룹에서 담당합니다. 실제 분양 조건 및 계약 관련 사항은 분양 담당자를 통해 확인하시기 바랍니다." as const;

/** 1. Hero */
export const hero = {
  headline: ["숲을 품고,", "중심에 서다"],
  subline: "아산의 중심, 자이가 그리는 1,588세대의 새로운 기준",
  slides: [
    { file: "hero-01.png", label: "전체 조감도" },
    { file: "hero-02.png", label: "주경 투시도" },
    { file: "hero-03.png", label: "야경 투시도" },
  ],
  stats: [
    { value: 1588, suffix: "세대", label: "총 세대수", separator: true },
    { value: 11, suffix: "개 동", label: "단지 규모", separator: false },
    { value: 37, suffix: "층", label: "최고 층수", separator: false },
    { value: 6, suffix: "타입", label: "84㎡ 주거", separator: false },
  ],
} as const;

/** 1-1. Promo — 분양 상담 안내 (Hero 직하, 중립 CTA) */
export const promo = {
  overline: "Consulting",
  title: "분양 상담 안내",
  lead: "정확한 분양 조건 및 계약 관련 사항은 상담 시 안내드립니다.",
} as const;

/** 2. Business — 사업개요 */
export const business = {
  title: ["아산 주거의", "기준을 다시 쓰다"],
  /** 데스크탑 강제 2줄(모바일 자동 줄바꿈) */
  lead: [
    "아산의 입지 위에, 자이의 설계와 커뮤니티를 더했습니다.",
    "숫자로 확인하는 아산자이 그랜드파크.",
  ],
  /** 표 데이터 */
  table: [
    ["사업명", "아산자이 그랜드파크"],
    ["대지위치", "충청남도 아산시 용화동 일원"],
    ["규모", "지하 3층 ~ 지상 37층 · 11개 동"],
    ["세대수", "총 1,588세대"],
    ["전용면적", "84㎡대 (6개 타입 · 84.27~84.95㎡)"],
    ["주차대수", "세대당 1.3대"],
    ["시공사", "GS건설 (Xi)"],
    ["입주 시기", "사업계획 승인에 따라 변경 (상담 시 확인)"],
  ],
  /** 카운트업 강조 수치 */
  highlights: [
    { value: 1588, suffix: "세대", label: "대단지 규모", separator: true },
    { value: 84, suffix: "㎡대", label: "전용면적 (6개 타입)", separator: false },
    { value: 6, suffix: "개 타입", label: "선택의 폭", separator: false },
  ],
} as const;

/** 3. Location — 입지환경 */
export const location = {
  title: ["아산의 중심,", "모든 것과 가깝다"],
  /** 도보 X분 리스트 */
  walk: [
    { min: "5", place: "온양온천역 (수도권 전철 1호선)", desc: "광역으로 이어지는 전철 생활권" },
    { min: "3", place: "근린공원 · 녹지축", desc: "사계절 녹음을 곁에 둔 산책로" },
    { min: "7", place: "초등학교 (예정)", desc: "차도를 건너지 않는 안심 통학 동선" },
    { min: "10", place: "상업 중심가", desc: "마트 · 병원 · 학원가를 원스톱으로" },
  ],
  /** 번호 인사이트 리스트 */
  insights: [
    "KTX 천안아산역 생활권으로 전국이 가까운 거리에 놓입니다.",
    "삼성 산업벨트 배후 주거지로 직주근접을 실현합니다.",
    "서해안고속도로 · 국도 21호선으로 사통팔달 광역 이동이 편리합니다.",
    "아산 학군과 도서관 인프라를 도보권에서 함께 누립니다.",
  ],
  mapFile: "location-map.jpg",
} as const;

/** 4. Complex — 단지안내 */
export const complex = {
  title: ["숲을", "설계에 들이다"],
  /** 데스크탑 강제 2줄(모바일 자동 줄바꿈) */
  lead: [
    "녹지축과 커뮤니티를 중심에 둔 배치.",
    "두 개의 단지가 서로 다른 리듬으로 조망과 채광을 나눕니다.",
  ],
  /**
   * copy: 줄 단위 배열. 각 줄은 text(기본) + accent(골드 강조 명사구).
   * accent 는 핵심 명사구만 골드 컬러 + SemiBold 로 강조한다.
   */
  blocks: [
    {
      id: "block-1",
      no: "01",
      title: "1단지",
      copy: [
        { text: "중앙광장을 감싸는 프라이빗 배치로", accent: "" },
        { text: "단지 안에서 ", accent: "완성되는 일상" },
      ],
      file: "complex-1-aerial.jpg",
    },
    {
      id: "block-2",
      no: "02",
      title: "2단지",
      copy: [
        { text: "녹지축과 이어지는 개방형 동 배치로", accent: "" },
        { text: "", accent: "극대화한 조망과 채광" },
      ],
      file: "complex-2-aerial.jpg",
    },
  ],
} as const;

/**
 * 5. Unit — 평면
 * 단지별로 브랜드 제공 "풀사이즈 평면 카드" 이미지 1장을 통으로 노출한다.
 * (이미지 안에 타입명·세대수·면적·평면도·키맵·특장점이 모두 포함)
 * 파일 규칙: plan-{danji}-{type}.jpg  (예: plan-1danji-84a.jpg)
 */
export const unitDanji = [
  {
    id: "1danji",
    name: "1단지",
    types: ["84A", "84B", "84C", "84E", "149A", "149C"],
  },
  {
    id: "2danji",
    name: "2단지",
    types: ["84A", "84B", "84C", "84D", "84F", "149A", "149B", "149D", "149E"],
  },
].map((d) => ({
  ...d,
  cards: d.types.map((type) => ({
    type,
    file: `plan-${d.id}-${type.toLowerCase()}.jpg`,
  })),
}));

/** 6. Community — 커뮤니티 */
export const community = {
  title: ["일상이", "머무는 곳"],
  /** 데스크탑 강제 2줄(모바일 자동 줄바꿈) */
  lead: [
    "운동과 휴식, 배움과 돌봄.",
    "단지 안에서 하루가 자연스럽게 이어집니다.",
  ],
  facilities: [
    {
      no: "01",
      name: "CLUB CLOUD",
      kr: "피트니스 · GX 스튜디오",
      copy: "전문 장비를 갖춘 피트니스와 그룹 운동 공간",
      file: "community-club-cloud.jpg",
    },
    {
      no: "02",
      name: "CLUB XIAN",
      kr: "라운지 · 게스트하우스",
      copy: "입주민과 방문객을 위한 프라이빗 라운지",
      file: "community-club-xian.jpg",
    },
    {
      no: "03",
      name: "GRAND LIBRARY",
      kr: "북카페 · 스터디존",
      copy: "집중과 몰입을 위한 라이브러리 라운지",
      file: "community-library.jpg",
    },
    {
      no: "04",
      name: "KYOBO LIBRARY",
      kr: "교보문고 큐레이션 도서관",
      copy: "교보문고에서 선정한 인기·신작 도서로 채워진 단지 내 도서관",
      file: "community-kyobo-library.jpg",
    },
  ],
} as const;

/** 7. Point — 프리미엄 */
export const points = {
  title: ["선택의 이유는", "분명하다"],
  rows: [
    {
      no: "01",
      title: "숲세권",
      /** 데스크탑 강제 2줄(모바일 자동 줄바꿈) */
      copy: [
        "녹지축과 근린공원을 곁에 둔 조망.",
        "창을 열면 사계절의 녹음이 일상이 됩니다.",
      ],
    },
    {
      no: "02",
      title: "신축 대단지",
      copy: "1,588세대가 만드는 커뮤니티의 밀도. 자이의 설계가 단지의 격을 완성합니다.",
    },
    {
      no: "03",
      title: "직주근접",
      copy: "삼성 산업벨트로 이어지는 출퇴근 동선. 저녁이 있는 삶이 가까워집니다.",
    },
  ],
} as const;
