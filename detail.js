// 상세 페이지 JavaScript

// 로딩 상태 관리
let isPageLoaded = false;

// URL에서 업체 ID 가져오기
function getShopIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// 업체 데이터 가져오기
function getShopData(shopId) {
    // script.js에서 정의된 massageShops 배열 사용
    if (typeof massageShops !== 'undefined') {
        return massageShops.find(shop => shop.id == shopId);
    }
    return null;
}

// 상세 페이지 데이터 로드 (중복 방지)
function loadShopDetail() {
    // 이미 로드된 경우 중복 실행 방지
    if (isPageLoaded) {
        console.log('페이지가 이미 로드되었습니다.');
        return;
    }
    
    const shopId = getShopIdFromUrl();
    if (!shopId) {
        alert('잘못된 접근입니다.');
        goBack();
        return;
    }

    const shop = getShopData(shopId);
    if (!shop) {
        alert('업체 정보를 찾을 수 없습니다.');
        goBack();
        return;
    }

    // 로딩 상태 설정
    isPageLoaded = true;

    // 모든 정보를 즉시 로드 (성능 최적화)
    displayShopInfo(shop);
    displayShopServices(shop);
    displayShopCourses(shop);
    displayShopReviews(shop);
    console.log('업체 상세 페이지 로드 완료');
}


// 업체 정보 표시 (최적화됨)
function displayShopInfo(shop) {
    // DOM 요소들을 한 번에 가져오기 (성능 최적화)
    const elements = {
        shopName: document.getElementById('shopName'),
        shopDescription: document.getElementById('shopDescription'),
        shopAddress: document.getElementById('shopAddress'),
        shopPhone: document.getElementById('shopPhone'),
        shopPrice: document.getElementById('shopPrice'),
        bookingPrice: document.getElementById('bookingPrice'),
        shopImage: document.getElementById('shopImage'),
        shopType: document.getElementById('shopType'),
        shopStars: document.getElementById('shopStars'),
        shopRatingText: document.getElementById('shopRatingText'),
        overallRating: document.getElementById('overallRating'),
        overallStars: document.getElementById('overallStars'),
        totalReviews: document.getElementById('totalReviews'),
        shopCountryFlags: document.getElementById('shopCountryFlags')
    };

    // 모든 정보를 즉시 표시 (성능 최적화)
    elements.shopName.textContent = shop.name;
    elements.shopPrice.textContent = shop.price;
    elements.bookingPrice.textContent = shop.price;
    
    // 국기 표시
    if (typeof getCountryFlags === 'function') {
        elements.shopCountryFlags.innerHTML = getCountryFlags(shop.type);
    }
    
    // 나머지 정보 표시
    elements.shopDescription.textContent = shop.description;
    elements.shopPhone.textContent = shop.phone;
    
    // 타입 배지
    elements.shopType.textContent = getTypeName(shop.type);
    
    // 평점 계산
    const stars = '★'.repeat(Math.floor(shop.rating)) + '☆'.repeat(5 - Math.floor(shop.rating));
    elements.shopStars.textContent = stars;
    elements.shopRatingText.textContent = `${shop.rating} (${shop.reviewCount}개 리뷰)`;
    elements.overallRating.textContent = shop.rating;
    elements.overallStars.textContent = stars;
    elements.totalReviews.textContent = `총 ${shop.reviewCount}개 리뷰`;
    
    // 주소 설정
    setupAddressSection(elements.shopAddress, shop);
    
    // 이미지 로드
    elements.shopImage.src = shop.image || 'https://via.placeholder.com/400x250?text=' + encodeURIComponent(shop.name);
    elements.shopImage.alt = shop.name + ' 이미지';
    elements.shopImage.loading = 'lazy';
}

// 주소 섹션 설정 (다른 info-item들과 동일한 형태)
function setupAddressSection(addressElement, shop) {
    // 다른 info-item들과 동일한 구조로 렌더링
    let html = `<div class="address-container">
        <span>${shop.address}</span>
    </div>`;
    
    // 상세주소 (있는 경우에만 표시)
    if (shop.detailAddress) {
        html += `<div class="address-container">
            <span>${shop.detailAddress}</span>
        </div>`;
    }
    
    addressElement.innerHTML = html;
}



// 지도보기 함수 (최적화된 버전)
function openMap() {
    // 중복 실행 방지
    if (window.mapLoading) {
        console.log('지도 로딩 중입니다.');
        return;
    }
    
    // address-container에서 실제 주소 가져오기
    const addressContainer = document.querySelector('.address-container span');
    let destinationAddress = '';
    
    if (addressContainer) {
        // address-container에 있는 주소 텍스트 가져오기
        destinationAddress = addressContainer.textContent.trim();
        console.log('지도보기 - 가져온 주소:', destinationAddress);
    } else {
        // fallback: shop 데이터에서 주소 가져오기
        const shopId = getShopIdFromUrl();
        const shop = massageShops.find(s => s.id == shopId);
        if (shop) {
            destinationAddress = shop.address;
            // 상세주소가 있으면 함께 포함
            if (shop.detailAddress) {
                destinationAddress += ` ${shop.detailAddress}`;
            }
        }
    }
    
    if (destinationAddress) {
        // API 키 없이 URL 방식 사용
        openKakaoMapWithURL(destinationAddress);
    } else {
        alert('주소 정보를 찾을 수 없습니다.');
    }
}

// 카카오맵 URL 방식 (API 키 없이 사용)
function openKakaoMapWithURL(destinationAddress) {
    // 중복 실행 방지
    if (window.mapLoading) {
        console.log('지도 로딩 중입니다.');
        return;
    }
    
    try {
        window.mapLoading = true;
        
        // 간단한 카카오맵 검색 URL 생성
        const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(destinationAddress)}`;
        
        console.log('카카오맵 URL:', mapUrl);
        
        // 새 창에서 카카오맵 열기
        window.open(mapUrl, '_blank');
        
        // 로딩 상태 해제 (즉시)
        window.mapLoading = false;
        
    } catch (error) {
        console.error('지도 열기 오류:', error);
        window.mapLoading = false;
        alert('지도를 열 수 없습니다. 주소를 확인해주세요.');
    }
}



// 서비스 목록 표시 (최적화됨)
function displayShopServices(shop) {
    const servicesList = document.getElementById('servicesList');
    
    const services = shop.services && shop.services.length > 0 
        ? shop.services 
        : getDefaultServices(shop.type);
    
    // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
    if (servicesList) {
        const html = services.map(service => `<div class="service-item">${service}</div>`).join('');
        servicesList.innerHTML = html;
    }
}

// 코스 정보 표시 (최적화됨)
function displayShopCourses(shop) {
    const coursesList = document.getElementById('coursesList');
    
    // 업체 타입에 따른 코스 정보 생성
    const courses = getCoursesByType(shop.type);
    
    // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
    let html = '';
    courses.forEach(category => {
        html += `<div class="course-category">
            <div class="course-category-title">${category.name}</div>`;
        
        category.courses.forEach(course => {
            html += `<div class="course-item">
                <div class="course-header">
                    <span class="course-name">${course.name}</span>
                    <span class="course-price">${course.price}</span>
                </div>
                <div class="course-duration">${course.duration}</div>
                <div class="course-description">${course.description}</div>
            </div>`;
        });
        
        html += '</div>';
    });
    
    if (coursesList) {
        coursesList.innerHTML = html;
    }
}

// 타입별 코스 정보 반환
function getCoursesByType(type) {
    const courseMap = {
        'thai': [
            {
                name: '태국 전통 마사지',
                courses: [
                    {
                        name: 'A 코스',
                        price: '60,000원',
                        duration: '60분',
                        description: '태국 전통 마사지 60분 - 몸의 긴장을 완전히 풀어드립니다'
                    },
                    {
                        name: 'B 코스',
                        price: '80,000원',
                        duration: '90분',
                        description: '태국 전통 마사지 90분 - 더 깊은 힐링과 휴식을 제공합니다'
                    }
                ]
            }
        ],
        'outcall': [
            {
                name: '출장마사지',
                courses: [
                    {
                        name: 'A 코스',
                        price: '100,000원',
                        duration: '60분',
                        description: '출장마사지 60분 - 집에서 편안하게 받는 마사지'
                    },
                    {
                        name: 'B 코스',
                        price: '150,000원',
                        duration: '90분',
                        description: '출장마사지 90분 - 더 긴 시간의 완전한 힐링'
                    },
                    {
                        name: 'C 코스',
                        price: '200,000원',
                        duration: '120분',
                        description: '출장마사지 120분 - 프리미엄 홈케어 서비스'
                    }
                ]
            }
        ],
        'waxing': [
            {
                name: '왁싱 서비스',
                courses: [
                    {
                        name: 'A 코스',
                        price: '50,000원',
                        duration: '30분',
                        description: '기본 왁싱 30분 - 깔끔한 제모 서비스'
                    },
                    {
                        name: 'B 코스',
                        price: '80,000원',
                        duration: '60분',
                        description: '전신 왁싱 60분 - 완전한 제모 케어'
                    },
                    {
                        name: 'C 코스',
                        price: '120,000원',
                        duration: '90분',
                        description: '프리미엄 왁싱 90분 - 왁싱 + 스킨케어'
                    }
                ]
            }
        ],
        'korean': [
            {
                name: '한국 전통 찜질방',
                courses: [
                    {
                        name: 'A 코스',
                        price: '45,000원',
                        duration: '60분',
                        description: '찜질방 + 한국 전통 마사지 60분 - 전통적인 힐링 경험'
                    },
                    {
                        name: 'B 코스',
                        price: '65,000원',
                        duration: '90분',
                        description: '찜질방 + 한국 전통 마사지 90분 - 완전한 휴식과 힐링'
                    }
                ]
            }
        ],
        'foot': [
            {
                name: '발마사지 전문',
                courses: [
                    {
                        name: 'A 코스',
                        price: '35,000원',
                        duration: '60분',
                        description: '발마사지 60분 - 발의 피로를 완전히 풀어드립니다'
                    },
                    {
                        name: 'B 코스',
                        price: '50,000원',
                        duration: '90분',
                        description: '발마사지 + 족욕 90분 - 발과 다리 전체의 힐링'
                    }
                ]
            }
        ],
        'spa': [
            {
                name: '스웨디시 마사지',
                courses: [
                    {
                        name: 'A 코스',
                        price: '80,000원',
                        duration: '60분',
                        description: '스웨디시 30분 + 힐링 30분 - 근육의 긴장을 완화하고 마음을 편안하게'
                    },
                    {
                        name: 'B 코스',
                        price: '100,000원',
                        duration: '90분',
                        description: '스웨디시 60분 + 힐링 30분 - 더 깊은 근육 이완과 완전한 휴식'
                    }
                ]
            },
            {
                name: '아로마 마사지',
                courses: [
                    {
                        name: 'A 코스',
                        price: '80,000원',
                        duration: '60분',
                        description: '힐링 10분 + 아로마 50분 - 천연 에센셜 오일로 깊은 힐링'
                    },
                    {
                        name: 'B 코스',
                        price: '100,000원',
                        duration: '90분',
                        description: '힐링 20분 + 아로마 70분 - 프리미엄 아로마 테라피'
                    },
                    {
                        name: 'C 코스',
                        price: '150,000원',
                        duration: '120분',
                        description: '힐링 30분 + 아로마 90분 - 최고급 아로마 마사지 패키지'
                    }
                ]
            }
        ]
    };
    
    return courseMap[type] || [
        {
            name: '기본 마사지',
            courses: [
                {
                    name: 'A 코스',
                    price: '50,000원',
                    duration: '60분',
                    description: '기본 마사지 60분 - 몸과 마음의 휴식을 제공합니다'
                }
            ]
        }
    ];
}

// 타입별 기본 서비스 목록
function getDefaultServices(type) {
    const serviceMap = {
        'thai': ['태국 전통 마사지', '오일 마사지', '발마사지', '경락 마사지'],
        'korean': ['한국 전통 마사지', '찜질방', '족욕', '경락 마사지'],
        'foot': ['발마사지', '족욕', '경락 마사지', '지압 마사지'],
        'spa': ['아로마테라피', '바디 마사지', '스톤 마사지', '바디 스크럽']
    };
    return serviceMap[type] || ['마사지', '힐링 서비스', '휴식 공간'];
}

// 리뷰 목록 표시
function displayShopReviews(shop) {
    const reviewsList = document.getElementById('reviewsList');
    
    // 샘플 리뷰 데이터 생성
    const sampleReviews = generateSampleReviews(shop);
    
    // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
    let html = '';
    sampleReviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        html += `<div class="review-item">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">${stars}</div>
            <div class="review-text">${review.text}</div>
        </div>`;
    });
    
    if (reviewsList) {
        reviewsList.innerHTML = html;
    }
}

// 샘플 리뷰 생성
function generateSampleReviews(shop) {
    const reviewTemplates = [
        {
            name: '김○○',
            rating: 5,
            date: '2024.01.15',
            text: '정말 만족스러운 서비스였습니다. 직원분들도 친절하시고 시설도 깔끔해요. 다음에도 꼭 이용하고 싶어요!'
        },
        {
            name: '이○○',
            rating: 4,
            date: '2024.01.10',
            text: '가격 대비 좋은 서비스를 받았습니다. 마사지 기술도 훌륭하고 분위기도 좋았어요. 추천합니다.'
        },
        {
            name: '박○○',
            rating: 5,
            date: '2024.01.08',
            text: '스트레스가 많이 풀렸어요. 전문적인 마사지로 몸이 한결 가벼워진 느낌입니다. 감사합니다.'
        },
        {
            name: '최○○',
            rating: 4,
            date: '2024.01.05',
            text: '예약하기 쉽고 직원분들이 친절하세요. 시설도 깔끔하고 편안한 분위기였습니다.'
        },
        {
            name: '정○○',
            rating: 5,
            date: '2024.01.02',
            text: '정말 힐링되는 시간이었어요. 마사지 기술이 뛰어나고 시설도 최고입니다. 강력 추천!'
        }
    ];

    // 업체 평점에 따라 리뷰 개수 조정
    const reviewCount = Math.min(Math.floor(shop.rating), 5);
    return reviewTemplates.slice(0, reviewCount);
}

// 뒤로 가기
function goBack() {
    if (document.referrer && document.referrer.includes('index.html')) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// 공유하기
function shareShop() {
    const shopName = document.getElementById('shopName').textContent;
    const shopAddress = document.getElementById('shopAddress').textContent;
    const shareText = `${shopName} - ${shopAddress}`;
    
    if (navigator.share) {
        navigator.share({
            title: shopName,
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText + '\n' + window.location.href).then(() => {
            alert('업체 정보가 클립보드에 복사되었습니다.');
        });
    }
}

// 지도 모달 열기 (API 키 없이 간단한 방식)
function openMapModal() {
    // 간단한 URL 방식으로 바로 열기
    openMap();
}


// 지도 모달 창 닫기 (사용하지 않음)
function closeMapModal() {
    // API 키 없이 URL 방식 사용으로 모달 불필요
    console.log('모달 기능은 사용하지 않습니다.');
}

// 전화 걸기
function callShop() {
    const phoneNumber = document.getElementById('shopPhone').textContent;
    if (confirm(`전화를 걸까요?\n${phoneNumber}`)) {
        window.location.href = `tel:${phoneNumber}`;
    }
}


// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    loadShopDetail();
});

// 이미지 로드 실패 시 기본 이미지로 대체
document.addEventListener('DOMContentLoaded', function() {
    const shopImage = document.getElementById('shopImage');
    if (shopImage) {
        shopImage.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x250?text=이미지+준비중';
        });
    }
});
