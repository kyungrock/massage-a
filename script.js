// 지역별 구 데이터
const districtData = {
    '서울': ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    '경기': ['수원시', '성남시', '의정부시', '안양시', '부천시', '광명시', '평택시', '과천시', '오산시', '시흥시', '군포시', '의왕시', '하남시', '용인시', '파주시', '이천시', '안성시', '김포시', '화성시', '광주시', '여주시', '양평군', '고양시', '의정부시', '동두천시', '가평군', '연천군'],
    '인천': ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
    '부산': ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'],
    '대구': ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
    '광주': ['동구', '서구', '남구', '북구', '광산구'],
    '대전': ['동구', '중구', '서구', '유성구', '대덕구'],
    '울산': ['중구', '남구', '동구', '북구', '울주군']
};

// 마사지 업체 데이터
const massageShops = [
    // 서울 업체들
    {
        id: 1,
        name: '힐링 스파 강남점',
        type: 'spa',
        region: '서울',
        district: '강남구',
        address: '서울 강남구 테헤란로 123',
        detailAddress: '강남역 2번 출구에서 도보 5분, 3층',
        phone: '02-1234-5678',
        rating: 4.8,
        reviewCount: 156,
        price: '80,000원',
        description: '프리미엄 스파 서비스',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['아로마테라피', '스톤마사지', '발마사지'],
        subway: '강남역, 선릉역'
    },
    {
        id: 2,
        name: '태국 전통 마사지 홍대점',
        type: 'thai',
        region: '서울',
        district: '마포구',
        address: '서울 마포구 홍익로 456',
        detailAddress: '홍대입구역 9번 출구에서 도보 3분, 지하 1층',
        phone: '02-2345-6789',
        rating: 4.6,
        reviewCount: 89,
        price: '60,000원',
        description: '진정한 태국 전통 마사지',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 전통 마사지', '오일 마사지', '발마사지'],
        subway: '홍대입구역, 합정역'
    },
    {
        id: 3,
        name: '한국 전통 찜질방',
        type: 'korean',
        region: '서울',
        district: '송파구',
        address: '서울 송파구 올림픽로 789',
        detailAddress: '잠실역 1번 출구에서 도보 7분, 2층',
        phone: '02-3456-7890',
        rating: 4.4,
        reviewCount: 203,
        price: '45,000원',
        description: '한국 전통 찜질방 체험',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['찜질방', '한국 전통 마사지', '족욕']
    },
    {
        id: 4,
        name: '발마사지 전문점 신촌점',
        type: 'foot',
        region: '서울',
        district: '서대문구',
        address: '서울 서대문구 신촌로 321',
        phone: '02-4567-8901',
        rating: 4.7,
        reviewCount: 134,
        price: '35,000원',
        description: '전문 발마사지 서비스',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['발마사지', '족욕', '경락 마사지']
    },
    {
        id: 5,
        name: '럭셔리 스파 건대점',
        type: 'spa',
        region: '서울',
        district: '광진구',
        address: '서울 광진구 능동로 654',
        phone: '02-5678-9012',
        rating: 4.9,
        reviewCount: 78,
        price: '120,000원',
        description: '럭셔리 스파 경험',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['프리미엄 스파', '아로마테라피', '바디 스크럽']
    },
    {
        id: 6,
        name: '태국 마사지 이태원점',
        type: 'thai',
        region: '서울',
        district: '용산구',
        address: '서울 용산구 이태원로 987',
        phone: '02-6789-0123',
        rating: 4.5,
        reviewCount: 167,
        price: '55,000원',
        description: '이태원의 대표 태국 마사지',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 마사지', '오일 마사지', '발마사지']
    },

    // 경기 업체들
    {
        id: 7,
        name: '수원 힐링 센터',
        type: 'korean',
        region: '경기',
        district: '수원시',
        address: '경기 수원시 영통구 월드컵로 111',
        phone: '031-1234-5678',
        rating: 4.6,
        reviewCount: 92,
        price: '50,000원',
        description: '수원 대표 힐링 센터',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['한국 전통 마사지', '찜질방', '족욕']
    },
    {
        id: 8,
        name: '성남 스파 리조트',
        type: 'spa',
        region: '경기',
        district: '성남시',
        address: '경기 성남시 분당구 판교역로 222',
        phone: '031-2345-6789',
        rating: 4.8,
        reviewCount: 145,
        price: '90,000원',
        description: '분당 프리미엄 스파',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['스파 패키지', '아로마테라피', '바디 마사지']
    },
    {
        id: 9,
        name: '의정부 태국 마사지',
        type: 'thai',
        region: '경기',
        district: '의정부시',
        address: '경기 의정부시 평화로 333',
        phone: '031-3456-7890',
        rating: 4.4,
        reviewCount: 67,
        price: '45,000원',
        description: '의정부 최고의 태국 마사지',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 전통 마사지', '오일 마사지', '발마사지']
    },
    {
        id: 10,
        name: '안양 발마사지 전문점',
        type: 'foot',
        region: '경기',
        district: '안양시',
        address: '경기 안양시 만안구 안양로 444',
        phone: '031-4567-8901',
        rating: 4.7,
        reviewCount: 89,
        price: '30,000원',
        description: '안양 발마사지 전문',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['발마사지', '족욕', '경락 마사지']
    },
    {
        id: 11,
        name: '부천 스파 센터',
        type: 'spa',
        region: '경기',
        district: '부천시',
        address: '경기 부천시 원미구 길주로 555',
        phone: '031-5678-9012',
        rating: 4.5,
        reviewCount: 112,
        price: '70,000원',
        description: '부천 대표 스파 센터',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['스파 서비스', '아로마테라피', '바디 스크럽']
    },
    {
        id: 12,
        name: '광명 힐링 마사지',
        type: 'korean',
        region: '경기',
        district: '광명시',
        address: '경기 광명시 광명로 666',
        phone: '031-6789-0123',
        rating: 4.6,
        reviewCount: 78,
        price: '40,000원',
        description: '광명 힐링 마사지 전문',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['한국 전통 마사지', '찜질방', '족욕']
    },

    // 인천 업체들
    {
        id: 13,
        name: '인천 스파 월드',
        type: 'spa',
        region: '인천',
        district: '연수구',
        address: '인천 연수구 컨벤시아대로 777',
        phone: '032-1234-5678',
        rating: 4.7,
        reviewCount: 134,
        price: '85,000원',
        description: '인천 최고의 스파 월드',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['프리미엄 스파', '아로마테라피', '바디 마사지']
    },
    {
        id: 14,
        name: '송도 태국 마사지',
        type: 'thai',
        region: '인천',
        district: '연수구',
        address: '인천 연수구 송도과학로 888',
        phone: '032-2345-6789',
        rating: 4.5,
        reviewCount: 98,
        price: '65,000원',
        description: '송도 태국 마사지 전문',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 전통 마사지', '오일 마사지', '발마사지']
    },
    {
        id: 15,
        name: '부평 발마사지 센터',
        type: 'foot',
        region: '인천',
        district: '부평구',
        address: '인천 부평구 부평대로 999',
        phone: '032-3456-7890',
        rating: 4.4,
        reviewCount: 76,
        price: '35,000원',
        description: '부평 발마사지 전문 센터',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['발마사지', '족욕', '경락 마사지']
    },
    {
        id: 16,
        name: '남동구 힐링 스파',
        type: 'spa',
        region: '인천',
        district: '남동구',
        address: '인천 남동구 구월로 1010',
        phone: '032-4567-8901',
        rating: 4.6,
        reviewCount: 89,
        price: '75,000원',
        description: '남동구 힐링 스파',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['힐링 스파', '아로마테라피', '바디 스크럽']
    },

    // 부산 업체들
    {
        id: 17,
        name: '해운대 스파 리조트',
        type: 'spa',
        region: '부산',
        district: '해운대구',
        address: '부산 해운대구 해운대로 1111',
        phone: '051-1234-5678',
        rating: 4.8,
        reviewCount: 234,
        price: '100,000원',
        description: '해운대 최고의 스파 리조트',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['오션뷰 스파', '아로마테라피', '바디 마사지']
    },
    {
        id: 18,
        name: '서면 태국 마사지',
        type: 'thai',
        region: '부산',
        district: '부산진구',
        address: '부산 부산진구 중앙대로 2222',
        phone: '051-2345-6789',
        rating: 4.6,
        reviewCount: 156,
        price: '55,000원',
        description: '서면 태국 마사지 전문',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 전통 마사지', '오일 마사지', '발마사지']
    },

    // 대구 업체들
    {
        id: 19,
        name: '동성로 힐링 센터',
        type: 'korean',
        region: '대구',
        district: '중구',
        address: '대구 중구 동성로 3333',
        phone: '053-1234-5678',
        rating: 4.5,
        reviewCount: 98,
        price: '45,000원',
        description: '동성로 힐링 센터',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['한국 전통 마사지', '찜질방', '족욕']
    },
    {
        id: 20,
        name: '수성구 스파 월드',
        type: 'spa',
        region: '대구',
        district: '수성구',
        address: '대구 수성구 동대구로 4444',
        phone: '053-2345-6789',
        rating: 4.7,
        reviewCount: 123,
        price: '80,000원',
        description: '수성구 스파 월드',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['프리미엄 스파', '아로마테라피', '바디 마사지']
    },

    // 광주 업체들
    {
        id: 21,
        name: '광주 힐링 마사지',
        type: 'korean',
        region: '광주',
        district: '서구',
        address: '광주 서구 상무대로 5555',
        phone: '062-1234-5678',
        rating: 4.4,
        reviewCount: 67,
        price: '40,000원',
        description: '광주 힐링 마사지',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['한국 전통 마사지', '찜질방', '족욕']
    },
    {
        id: 22,
        name: '동구 발마사지 전문점',
        type: 'foot',
        region: '광주',
        district: '동구',
        address: '광주 동구 중앙로 6666',
        phone: '062-2345-6789',
        rating: 4.6,
        reviewCount: 89,
        price: '35,000원',
        description: '동구 발마사지 전문점',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['발마사지', '족욕', '경락 마사지']
    },

    // 대전 업체들
    {
        id: 23,
        name: '대전 스파 센터',
        type: 'spa',
        region: '대전',
        district: '유성구',
        address: '대전 유성구 대학로 7777',
        phone: '042-1234-5678',
        rating: 4.5,
        reviewCount: 112,
        price: '70,000원',
        description: '대전 스파 센터',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['스파 서비스', '아로마테라피', '바디 마사지']
    },
    {
        id: 24,
        name: '중구 태국 마사지',
        type: 'thai',
        region: '대전',
        district: '중구',
        address: '대전 중구 중앙로 8888',
        phone: '042-2345-6789',
        rating: 4.6,
        reviewCount: 78,
        price: '50,000원',
        description: '중구 태국 마사지',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['태국 전통 마사지', '오일 마사지', '발마사지']
    },

    // 울산 업체들
    {
        id: 25,
        name: '울산 힐링 스파',
        type: 'spa',
        region: '울산',
        district: '남구',
        address: '울산 남구 삼산로 9999',
        phone: '052-1234-5678',
        rating: 4.7,
        reviewCount: 95,
        price: '75,000원',
        description: '울산 힐링 스파',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['힐링 스파', '아로마테라피', '바디 마사지']
    },
    {
        id: 26,
        name: '중구 발마사지 전문점',
        type: 'foot',
        region: '울산',
        district: '중구',
        address: '울산 중구 성남동 10101',
        phone: '052-2345-6789',
        rating: 4.4,
        reviewCount: 56,
        price: '30,000원',
        description: '중구 발마사지 전문점',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['발마사지', '족욕', '경락 마사지']
    },
    // 출장마사지 업체들
    {
        id: 27,
        name: '서울 출장마사지 전문',
        type: 'outcall',
        region: '서울',
        district: '강남구',
        address: '서울 강남구 테헤란로 1111',
        phone: '02-1111-2222',
        rating: 4.7,
        reviewCount: 89,
        price: '100,000원',
        description: '서울 전역 출장마사지 서비스',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['출장마사지', '홈케어', '24시간 서비스']
    },
    {
        id: 28,
        name: '경기 출장마사지 센터',
        type: 'outcall',
        region: '경기',
        district: '수원시',
        address: '경기 수원시 영통구 월드컵로 2222',
        phone: '031-2222-3333',
        rating: 4.6,
        reviewCount: 67,
        price: '90,000원',
        description: '경기 전역 출장마사지',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
        services: ['출장마사지', '기업출장', '이벤트 마사지']
    },
    {
        id: 29,
        name: '인천 출장마사지',
        type: 'outcall',
        region: '인천',
        district: '연수구',
        address: '인천 연수구 컨벤시아대로 3333',
        phone: '032-3333-4444',
        rating: 4.5,
        reviewCount: 45,
        price: '85,000원',
        description: '인천 출장마사지 전문',
        image: 'https://images.unsplash.com/photo-1596178060810-6e0a0a4a0b8a?w=400&h=250&fit=crop&crop=center',
        services: ['출장마사지', '호텔출장', '공항출장']
    },
    // 왁싱 업체들
    {
        id: 30,
        name: '서울 왁싱 전문점',
        type: 'waxing',
        region: '서울',
        district: '강남구',
        address: '서울 강남구 선릉로 4444',
        phone: '02-4444-5555',
        rating: 4.8,
        reviewCount: 123,
        price: '50,000원',
        description: '서울 최고의 왁싱 전문점',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
        services: ['왁싱', '브라질리언 왁싱', '페이셜 왁싱']
    },
    {
        id: 31,
        name: '경기 왁싱 스튜디오',
        type: 'waxing',
        region: '경기',
        district: '성남시',
        address: '경기 성남시 분당구 판교역로 5555',
        phone: '031-5555-6666',
        rating: 4.7,
        reviewCount: 78,
        price: '45,000원',
        description: '경기 왁싱 전문 스튜디오',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=250&fit=crop&crop=center',
        services: ['왁싱', '바디 왁싱', '아이브로우 왁싱']
    },
    {
        id: 32,
        name: '인천 왁싱 뷰티',
        type: 'waxing',
        region: '인천',
        district: '부평구',
        address: '인천 부평구 부평대로 6666',
        phone: '032-6666-7777',
        rating: 4.6,
        reviewCount: 56,
        price: '40,000원',
        description: '인천 왁싱 뷰티 전문',
        image: 'https://images.unsplash.com/photo-1540555700478-4be284f698e2?w=400&h=250&fit=crop&crop=center',
        services: ['왁싱', '왁싱 케어', '스킨케어']
    }
];

// DOM 요소들
const regionSelect = document.getElementById('regionSelect');
const districtSelect = document.getElementById('districtSelect');
const searchBtn = document.getElementById('searchBtn');
const mainSearchInput = document.getElementById('mainSearchInput');
const mainSearchBtn = document.getElementById('mainSearchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const massageList = document.getElementById('massageList');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');

// 현재 필터 상태
let currentFilter = 'all';
let currentRegion = '';
let currentDistrict = '';
let currentCountry = 'overall';

// 검색 디바운싱을 위한 타이머
let searchTimeout = null;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화
function initializeApp() {
    // 초기 상태 설정 - 전체 필터 버튼 활성화
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.classList.add('active');
    }
    
    // 검색 토글 버튼 이벤트 리스너 (검색창으로 스크롤)
    const searchToggle = document.getElementById('searchToggle');
    const searchSection = document.querySelector('.search-section');
    const mainSearchInput = document.getElementById('mainSearchInput');
    
    if (searchToggle && searchSection && mainSearchInput) {
        searchToggle.addEventListener('click', function() {
            // 검색창으로 부드럽게 스크롤
            searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // 검색 입력창에 포커스
            setTimeout(() => {
                mainSearchInput.focus();
            }, 500);
        });
    }
    
    // 지역 선택 이벤트 리스너 (즉각 반응)
    regionSelect.addEventListener('change', function() {
        updateDistrictOptions(this.value);
        currentRegion = this.value;
        currentDistrict = ''; // 구 선택 초기화
        // 즉시 검색 실행
        performLocationSearch();
    });

    // 구 선택 이벤트 리스너 (즉각 반응)
    districtSelect.addEventListener('change', function() {
        currentDistrict = this.value;
        // 즉시 검색 실행
        performLocationSearch();
    });

    // 검색 버튼 이벤트 리스너
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작 방지
        performSearch();
    });

    // 통합 검색 이벤트 리스너
    mainSearchBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작 방지
        // 기존 타이머 클리어
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        performMainSearch();
    });

    // 통합 검색 입력창 엔터키 이벤트
    mainSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // 기본 동작 방지
            // 기존 타이머 클리어
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            performMainSearch();
        }
    });

    // 통합 검색 실시간 검색 (디바운싱 적용)
    mainSearchInput.addEventListener('input', function() {
        // 기존 타이머 클리어
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // 300ms 후에 검색 실행
        searchTimeout = setTimeout(() => {
            if (this.value.length >= 2) {
                performMainSearch();
            } else if (this.value.length === 0) {
                // 검색어가 없으면 전체 표시
                displayMassageShops(massageShops);
                updateResultsHeader('전체 마사지 업체', massageShops.length);
            }
        }, 300);
    });

    // 필터 버튼 이벤트 리스너
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            // 모든 필터 버튼에서 active 클래스 제거
            filterBtns.forEach(b => b.classList.remove('active'));
            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');
            // 현재 필터 업데이트
            currentFilter = this.dataset.filter;
            
            // 마사지, 출장마사지 클릭 시 국가 필터만 전체로 초기화 (지역은 유지)
            if (currentFilter === 'massage' || currentFilter === 'outcall') {
                // 국가 필터만 전체로 초기화
                currentCountry = 'overall';
                
                // 국가 박스에서 active 클래스 제거
                const massageCountryBoxes = document.querySelectorAll('#massageCountryFilterSection .country-box');
                const outcallCountryBoxes = document.querySelectorAll('#outcallCountryFilterSection .country-box');
                massageCountryBoxes.forEach(box => box.classList.remove('active'));
                outcallCountryBoxes.forEach(box => box.classList.remove('active'));
                
                // 전체 박스에 active 클래스 추가
                const overallBoxes = document.querySelectorAll('.country-box[data-country="overall"]');
                overallBoxes.forEach(box => box.classList.add('active'));
            }
            
            // 필터별 국가 박스 표시/숨김
            if (currentFilter === 'massage') {
                document.getElementById('massageCountryFilterSection').style.display = 'block';
                document.getElementById('outcallCountryFilterSection').style.display = 'none';
                currentCountry = 'overall'; // 처음에는 전체로 설정
                // 구 선택 활성화
                districtSelect.disabled = false;
                districtSelect.style.opacity = '1';
            } else if (currentFilter === 'outcall') {
                document.getElementById('massageCountryFilterSection').style.display = 'none';
                document.getElementById('outcallCountryFilterSection').style.display = 'block';
                currentCountry = 'overall'; // 처음에는 전체로 설정
                // 출장마사지는 구 선택 비활성화
                districtSelect.disabled = true;
                districtSelect.style.opacity = '0.5';
                districtSelect.value = '';
                currentDistrict = '';
            } else {
                document.getElementById('massageCountryFilterSection').style.display = 'none';
                document.getElementById('outcallCountryFilterSection').style.display = 'none';
                currentCountry = '';
                // 구 선택 활성화
                districtSelect.disabled = false;
                districtSelect.style.opacity = '1';
            }
            
            // 필터링된 결과 표시
            displayFilteredResults();
        });
    });

    // 마사지 국가별 박스 이벤트 리스너
    const massageCountryBoxes = document.querySelectorAll('#massageCountryFilterSection .country-box');
    massageCountryBoxes.forEach(box => {
        box.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            // 마사지 국가 박스에서 active 클래스 제거
            massageCountryBoxes.forEach(b => b.classList.remove('active'));
            // 클릭된 박스에 active 클래스 추가
            this.classList.add('active');
            // 현재 국가 업데이트
            currentCountry = this.dataset.country;
            // 필터링된 결과 표시
            displayFilteredResults();
        });
    });

    // 출장마사지 국가별 박스 이벤트 리스너
    const outcallCountryBoxes = document.querySelectorAll('#outcallCountryFilterSection .country-box');
    outcallCountryBoxes.forEach(box => {
        box.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            // 출장마사지 국가 박스에서 active 클래스 제거
            outcallCountryBoxes.forEach(b => b.classList.remove('active'));
            // 클릭된 박스에 active 클래스 추가
            this.classList.add('active');
            // 현재 국가 업데이트
            currentCountry = this.dataset.country;
            // 필터링된 결과 표시
            displayFilteredResults();
        });
    });

    // 초기에는 전체 업체 표시
    displayFilteredResults();
}

// 구 옵션 업데이트
function updateDistrictOptions(region) {
    districtSelect.innerHTML = '<option value="">구를 선택하세요</option>';
    
    if (region && districtData[region]) {
        districtData[region].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// 통합 검색 수행
function performMainSearch() {
    const searchTerm = mainSearchInput.value.trim().toLowerCase();
    
    if (searchTerm.length < 2) {
        return;
    }
    
    // 검색어로 필터링
    const filteredShops = massageShops.filter(shop => {
        return (
            shop.name.toLowerCase().includes(searchTerm) ||
            shop.address.toLowerCase().includes(searchTerm) ||
            shop.region.toLowerCase().includes(searchTerm) ||
            shop.district.toLowerCase().includes(searchTerm) ||
            shop.description.toLowerCase().includes(searchTerm) ||
            getTypeName(shop.type).toLowerCase().includes(searchTerm) ||
            (shop.subway && shop.subway.toLowerCase().includes(searchTerm))
        );
    });
    
    // 결과 표시
    displayMassageShops(filteredShops);
    updateResultsHeader(`"${searchTerm}" 검색 결과`, filteredShops.length);
}

// 지역별 검색 수행 (즉각 반응용)
function performLocationSearch() {
    if (!currentRegion) {
        // 지역이 선택되지 않은 경우 전체 표시
        displayMassageShops(massageShops);
        updateResultsHeader('전체 마사지 업체', massageShops.length);
        return;
    }
    
    // 검색 결과 필터링
    let filteredShops;
    
    // 출장마사지는 구를 무시하고 지역만으로 검색
    if (currentFilter === 'outcall') {
        filteredShops = massageShops.filter(shop => 
            shop.region === currentRegion && shop.type === 'outcall'
        );
        // 출장마사지 선택 시 구 선택 초기화
        currentDistrict = '';
        districtSelect.value = '';
    } else if (currentDistrict) {
        // 지역과 구 모두 선택된 경우
        filteredShops = massageShops.filter(shop => 
            shop.region === currentRegion && shop.district === currentDistrict
        );
    } else {
        // 지역만 선택된 경우
        filteredShops = massageShops.filter(shop => 
            shop.region === currentRegion
        );
    }
    
    // 결과 표시
    displayMassageShops(filteredShops);
    
    // 결과 헤더 업데이트
    let title;
    if (currentFilter === 'outcall') {
        title = `${currentRegion} 출장마사지`;
    } else {
        title = currentDistrict ? `${currentRegion} ${currentDistrict}` : currentRegion;
    }
    updateResultsHeader(title, filteredShops.length);
}

// 지역별 검색 수행
function performSearch() {
    const selectedRegion = regionSelect.value;
    const selectedDistrict = districtSelect.value;
    
    if (!selectedRegion) {
        alert('지역을 선택해주세요.');
        return;
    }
    
    currentRegion = selectedRegion;
    currentDistrict = selectedDistrict;
    
    // 검색 결과 필터링
    let filteredShops;
    if (selectedDistrict) {
        // 지역과 구 모두 선택된 경우
        filteredShops = massageShops.filter(shop => 
            shop.region === selectedRegion && shop.district === selectedDistrict
        );
    } else {
        // 지역만 선택된 경우
        filteredShops = massageShops.filter(shop => 
            shop.region === selectedRegion
        );
    }
    
    // 결과 표시
    displayMassageShops(filteredShops);
    
    // 결과 헤더 업데이트
    let title = selectedDistrict ? `${selectedRegion} ${selectedDistrict}` : selectedRegion;
    updateResultsHeader(title, filteredShops.length);
}

// 필터링된 결과 표시
function displayFilteredResults() {
    let filteredShops = massageShops;
    
    // 타입 필터 적용
    if (currentFilter === 'massage') {
        // 마사지 타입들 (태국, 한국, 발마사지, 스파)
        filteredShops = filteredShops.filter(shop => 
            ['thai', 'korean', 'foot', 'spa'].includes(shop.type)
        );
        
        // 국가별 필터 적용
        if (currentCountry && currentCountry !== 'overall') {
            filteredShops = filteredShops.filter(shop => {
                const countryMap = {
                    'korea': ['korean', 'foot'],
                    'thai': ['thai'],
                    'china': ['foot'],
                    'russia': ['spa'],
                    'japan': ['spa']
                };
                return countryMap[currentCountry]?.includes(shop.type) || false;
            });
        }
    } else if (currentFilter === 'outcall') {
        // 출장마사지 타입
        filteredShops = filteredShops.filter(shop => shop.type === 'outcall');
        
        // 국가별 필터 적용 (출장마사지는 모든 국가에서 가능)
        if (currentCountry && currentCountry !== 'overall') {
            // 출장마사지는 국가별 구분 없이 모든 국가에서 제공
            // 필요시 추가 로직 구현 가능
        }
    } else if (currentFilter !== 'all') {
        filteredShops = filteredShops.filter(shop => shop.type === currentFilter);
    }
    
    // 지역/구 필터 적용 (지역이 선택된 경우에만)
    if (currentRegion) {
        if (currentDistrict) {
            filteredShops = filteredShops.filter(shop => 
                shop.region === currentRegion && shop.district === currentDistrict
            );
        } else {
            filteredShops = filteredShops.filter(shop => 
                shop.region === currentRegion
            );
        }
    }
    
    displayMassageShops(filteredShops);
    
    // 결과 헤더 업데이트
    let title = '전체 마사지 업체';
    if (currentFilter === 'massage') {
        if (currentCountry && currentCountry !== 'overall') {
            const countryNames = {
                'korea': '한국',
                'thai': '태국',
                'china': '중국',
                'russia': '러시아',
                'japan': '일본'
            };
            title = `${countryNames[currentCountry]} 마사지`;
        } else {
            title = '마사지 (전체)';
        }
    } else if (currentFilter === 'outcall') {
        if (currentCountry && currentCountry !== 'overall') {
            const countryNames = {
                'korea': '한국',
                'thai': '태국',
                'china': '중국',
                'russia': '러시아',
                'japan': '일본'
            };
            title = `${countryNames[currentCountry]} 출장마사지`;
        } else {
            title = '출장마사지 (전체)';
        }
    } else if (currentFilter === 'waxing') {
        title = '왁싱';
    }
    
    if (currentRegion && currentDistrict) {
        title = `${currentRegion} ${currentDistrict} ${title}`;
    } else if (currentRegion) {
        title = `${currentRegion} ${title}`;
    }
    
    updateResultsHeader(title, filteredShops.length);
}


// 업체 카드 생성
function createShopCard(shop) {
    return `
        <div class="massage-card" data-type="${shop.type}" onclick="goToDetail(${shop.id})">
            <div class="card-image">
                <img src="${shop.image}" alt="${shop.name}" class="shop-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOazleWKoOi9vTwvdGV4dD48L3N2Zz4='; this.style.display='block';"
                     loading="lazy">
                <div class="image-overlay">
                    <div class="shop-type">${getTypeName(shop.type)}</div>
                </div>
            </div>
            
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <div class="shop-name">${shop.name}</div>
                    </div>
                </div>
                
                <div class="card-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${shop.address}</span>
                    </div>
                    <div class="info-item greeting">
                        <i class="fas fa-heart"></i>
                        <span>${getGreeting(shop.type)}</span>
                    </div>
                </div>
                
                <div class="card-footer">
                    <div class="price-container">
                        <div class="price"><span class="price-label">최저가</span> ${shop.price}</div>
                        <div class="price-flags">${getCountryFlags(shop.type)}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 타입 이름 반환
function getTypeName(type) {
    const typeNames = {
        'thai': '태국마사지',
        'korean': '한국마사지',
        'foot': '발마사지',
        'spa': '스파'
    };
    return typeNames[type] || type;
}

// 국기 데이터
const flagData = [
    { nationality: '한국국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/한국.jpg' },
    { nationality: '태국국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/태국.jpg' },
    { nationality: '중국국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/중국.jpg' },
    { nationality: '러시아국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/러시아-1.jpg' },
    { nationality: '일본국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/일본.jpg' },
    { nationality: '우크라이나국기', url: 'https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/우크라이나국기-1.jpg' }
];

// 국기 이미지 HTML 생성
function getCountryFlags(type) {
    const flagMap = {
        'thai': ['한국국기', '태국국기', '중국국기'],
        'korean': ['한국국기'],
        'foot': ['한국국기', '중국국기'],
        'spa': ['한국국기', '태국국기'],
        'outcall': ['한국국기', '태국국기', '중국국기'],
        'waxing': ['한국국기', '태국국기']
    };
    
    const flags = flagMap[type] || ['한국국기'];
    
    return flags.map(flagName => {
        const flag = flagData.find(f => f.nationality === flagName);
        return flag ? `<img src="${flag.url}" alt="${flag.nationality}" class="flag-image" 
                           onerror="this.onerror=null; this.style.display='none';" 
                           loading="lazy">` : '';
    }).join('');
}

// 인사말 반환
function getGreeting(type) {
    const greetingMap = {
        'thai': '안녕하세요! 태국 전통 마사지로 힐링해드립니다 💆‍♀️',
        'korean': '어서오세요! 한국 전통 찜질방에서 휴식을 취하세요 🧖‍♀️',
        'foot': '환영합니다! 전문 발마사지로 피로를 풀어드립니다 🦶',
        'spa': 'Welcome! 프리미엄 스파로 완벽한 휴식을 경험하세요 ✨',
        'outcall': '안녕하세요! 언제 어디서나 출장마사지로 편리하게 🚗💆‍♀️',
        'waxing': '환영합니다! 전문 왁싱으로 매끄러운 피부를 만들어드려요 ✨'
    };
    return greetingMap[type] || '안녕하세요! 마사지로 힐링해드립니다 💆‍♀️';
}

// 결과 헤더 업데이트
function updateResultsHeader(title, count) {
    resultsTitle.textContent = title;
    resultsCount.textContent = `총 ${count}개`;
}

// 전화 걸기
function callShop(phoneNumber) {
    if (confirm(`전화를 걸까요?\n${phoneNumber}`)) {
        window.location.href = `tel:${phoneNumber}`;
    }
}

// 상세 페이지로 이동
function goToDetail(shopId) {
    window.location.href = `detail.html?id=${shopId}`;
}

// 스크롤 애니메이션
function observeCards() {
    const cards = document.querySelectorAll('.massage-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 검색 결과 표시 후 애니메이션 적용 (최적화됨)
function displayMassageShopsWithAnimation(shops) {
    displayMassageShops(shops);
    // 즉시 애니메이션 적용 (setTimeout 제거)
    observeCards();
}

// 빈 상태 표시
function displayEmptyState() {
    massageList.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-map-marker-alt"></i>
            <h3>지역을 선택해주세요</h3>
            <p>원하는 지역과 구를 선택하여<br>마사지 업체를 검색해보세요.</p>
        </div>
    `;
    updateResultsHeader('마사지 업체 검색', 0);
}

// 업체 목록 표시 (애니메이션 포함)
function displayMassageShops(shops) {
    if (shops.length === 0) {
        massageList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 지역이나 필터를 선택해보세요.</p>
            </div>
        `;
        return;
    }
    
    massageList.innerHTML = shops.map(shop => createShopCard(shop)).join('');
    
    // 카드 애니메이션 적용 (즉시 실행)
    observeCards();
}
