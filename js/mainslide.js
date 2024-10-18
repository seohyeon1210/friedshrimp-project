let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// 다음 슬라이드로 이동
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

// 이전 슬라이드로 이동
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// 슬라이드 위치 업데이트
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 화살표 버튼 클릭 시 자동 슬라이드 멈춤
document.querySelector('.arrow.left').addEventListener('click', () => clearInterval(autoSlide));
document.querySelector('.arrow.right').addEventListener('click', () => clearInterval(autoSlide));


let currentSlide2 = 0;
const slides2 = document.querySelector('.hnslides');
const totalSlides2 = document.querySelectorAll('.hnslide').length;

let autoSlide2 = setInterval(nextSlide2, 2000); // 3초마다 다음 슬라이드로 전환

// 슬라이드 2 마우스 오버 및 아웃 이벤트 처리
slides2.addEventListener('mouseover', () => clearInterval(autoSlide2)); // 마우스 오버 시 자동 슬라이드 멈춤
slides2.addEventListener('mouseout', () => autoSlide2 = setInterval(nextSlide2, 3000)); // 마우스 아웃 시 자동 슬라이드 재개

// 다음 슬라이드로 이동 (슬라이드 2)
function nextSlide2() {
    currentSlide2 = (currentSlide2 + 1) % totalSlides2;
    updateSlidePosition2();
    updateActiveButton(currentSlide2);
}

// 이전 슬라이드로 이동 (슬라이드 2)
function prevSlide2() {
    currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
    updateSlidePosition2();
    updateActiveButton(currentSlide2);
}

// 슬라이드 위치 업데이트 (슬라이드 2)
function updateSlidePosition2() {
    slides2.style.transform = `translateX(-${currentSlide2 * 358}px)`; // 각 슬라이드 너비가 358px
}

// 버튼을 통해 슬라이드로 이동하는 함수 (슬라이드 2)
function goToSlide(index) {
    currentSlide2 = index; // 슬라이드 인덱스를 설정
    updateSlidePosition2(); // 슬라이드 위치 업데이트
    updateActiveButton(index); // 활성화된 버튼 업데이트
}

// 활성화된 버튼 스타일 업데이트 (슬라이드 2)
function updateActiveButton(index) {
    const buttons = document.querySelectorAll('.slide-btn'); // 모든 버튼 선택
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active-btn'); // 활성화된 버튼에 클래스 추가
        } else {
            btn.classList.remove('active-btn'); // 나머지 버튼에서 클래스 제거
        }
    });
}

// 슬라이드 3
let currentSlide3 = 0; // 슬라이드 상태 변수
const slides3 = document.querySelector('.crewslides'); // 새로운 슬라이드 요소 선택
const totalSlides3 = document.querySelectorAll('.crewslide').length; // 새로운 슬라이드 개수

let autoSlide3 = setInterval(nextSlide3, 2000); // 3초마다 다음 슬라이드로 전환

// 슬라이드 3 마우스 오버 및 아웃 이벤트 처리
slides3.addEventListener('mouseover', () => clearInterval(autoSlide3)); // 마우스 오버 시 자동 슬라이드 멈춤
slides3.addEventListener('mouseout', () => autoSlide3 = setInterval(nextSlide3, 3000)); // 마우스 아웃 시 자동 슬라이드 재개

// 다음 슬라이드로 이동 (슬라이드 3)
function nextSlide3() {
    currentSlide3 = (currentSlide3 + 1) % totalSlides3; // 슬라이드 인덱스 증가
    updateSlidePosition3(); // 슬라이드 위치 업데이트
    updateActiveButton3(currentSlide3); // 활성화된 버튼 업데이트
}

// 이전 슬라이드로 이동 (슬라이드 3)
function prevSlide3() {
    currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3; // 슬라이드 인덱스 감소
    updateSlidePosition3(); // 슬라이드 위치 업데이트
    updateActiveButton3(currentSlide3); // 활성화된 버튼 업데이트
}

// 슬라이드 위치 업데이트 (슬라이드 3)
function updateSlidePosition3() {
    slides3.style.transform = `translateX(-${currentSlide3 * 358}px)`; // 각 슬라이드 너비가 358px
}

// 버튼을 통해 슬라이드로 이동하는 함수 (슬라이드 3)
function goToSlide3(index) {
    currentSlide3 = index; // 슬라이드 인덱스를 설정
    updateSlidePosition3(); // 슬라이드 위치 업데이트
    updateActiveButton3(index); // 활성화된 버튼 업데이트
}

// 활성화된 버튼 스타일 업데이트 (슬라이드 3)
function updateActiveButton3(index) {
    const buttons = document.querySelectorAll('.slide-btn2'); // 모든 버튼 선택
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active-btn2'); // 활성화된 버튼에 클래스 추가
        } else {
            btn.classList.remove('active-btn2'); // 나머지 버튼에서 클래스 제거
        }
    });
}














// ------------------------------------------------------------------------------------- //


// let currentSlide2 = 0;
// const slides2 = document.querySelector('.adslides');
// const totalSlides2 = document.querySelectorAll('.adslide').length;

// // 다음 슬라이드로 이동
// function nextSlide2() {
//     currentSlide2 = (currentSlide2 + 1) % totalSlides2;
//     updateSlidePosition2();
//     updateActiveButton(currentSlide2);
// }

// // 이전 슬라이드로 이동
// function prevSlide2() {
//     currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
//     updateSlidePosition2();
//     updateActiveButton(currentSlide2);
// }

// // 슬라이드 위치 업데이트
// function updateSlidePosition2() {
//     slides2.style.transform = `translateX(-${currentSlide2 * 358}px)`; // 각 슬라이드 너비가 358px
// }

// // 버튼을 통해 슬라이드로 이동하는 함수
// function goToSlide(index) {
//     currentSlide2 = index; // 슬라이드 인덱스를 설정
//     updateSlidePosition2(); // 슬라이드 위치 업데이트
//     updateActiveButton(index); // 활성화된 버튼 업데이트
// }

// // 활성화된 버튼 스타일 업데이트
// function updateActiveButton(index) {
//     const buttons = document.querySelectorAll('.slide-btn'); // 모든 버튼 선택
//     buttons.forEach((btn, i) => {
//         if (i === index) {
//             btn.classList.add('active-btn'); // 활성화된 버튼에 클래스 추가
//         } else {
//             btn.classList.remove('active-btn'); // 나머지 버튼에서 클래스 제거
//         }
//     });
// }

// let autoSlide = setInterval(nextSlide2, 3000); // 3초마다 다음 슬라이드로 전환



// let currentSlide3 = 0; // 슬라이드 상태 변수
// const slides3 = document.querySelector('.crewslides'); // 새로운 슬라이드 요소 선택
// const totalSlides3 = document.querySelectorAll('.crewslide').length; // 새로운 슬라이드 개수

// // 다음 슬라이드로 이동
// function nextSlide3() {
//     currentSlide3 = (currentSlide3 + 1) % totalSlides3; // 슬라이드 인덱스 증가
//     updateSlidePosition3(); // 슬라이드 위치 업데이트
//     updateActiveButton3(currentSlide3); // 활성화된 버튼 업데이트
// }

// // 이전 슬라이드로 이동
// function prevSlide3() {
//     currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3; // 슬라이드 인덱스 감소
//     updateSlidePosition3(); // 슬라이드 위치 업데이트
//     updateActiveButton3(currentSlide3); // 활성화된 버튼 업데이트
// }

// // 슬라이드 위치 업데이트
// function updateSlidePosition3() {
//     slides3.style.transform = `translateX(-${currentSlide3 * 358}px)`; // 각 슬라이드 너비가 358px
// }

// // 버튼을 통해 슬라이드로 이동하는 함수
// function goToSlide3(index) {
//     currentSlide3 = index; // 슬라이드 인덱스를 설정
//     updateSlidePosition3(); // 슬라이드 위치 업데이트
//     updateActiveButton3(index); // 활성화된 버튼 업데이트
// }

// // 활성화된 버튼 스타일 업데이트
// function updateActiveButton3(index) {
//     const buttons = document.querySelectorAll('.slide-btn2'); // 모든 버튼 선택
//     buttons.forEach((btn, i) => {
//         if (i === index) {
//             btn.classList.add('active-btn2'); // 활성화된 버튼에 클래스 추가
//         } else {
//             btn.classList.remove('active-btn2'); // 나머지 버튼에서 클래스 제거
//         }
//     });
// }

// let autoSlide3 = setInterval(nextSlide3, 3000); // 3초마다 다음 슬라이드로 전환

// ------------------------------------------------------------------------------------- //


// let currentSlide2 = 0;
// const slides2 = document.querySelector('.adslides');
// const totalSlides2 = document.querySelectorAll('.adslide').length;

// // 다음 슬라이드로 이동
// function nextSlide2() {
//     currentSlide2 = (currentSlide2 + 1) % totalSlides2;
//     updateSlidePosition2();
// }

// // 이전 슬라이드로 이동
// function prevSlide2() {
//     currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
//     updateSlidePosition2();
// }

// // 슬라이드 위치 업데이트
// function updateSlidePosition2() {
//     slides2.style.transform = `translateX(-${currentSlide2 * 358}px)`; // 슬라이드 너비를 px로 설정
// }

// // 화살표 버튼 클릭 시 자동 슬라이드 멈춤
// document.querySelector('.adarrow.left').addEventListener('click', () => clearInterval(autoSlide));
// document.querySelector('.adarrow.right').addEventListener('click', () => clearInterval(autoSlide));


// // 슬라이드 배너 3
// let currentSlide3 = 0;
// const slides3 = document.querySelector('.crewslides'); // 슬라이드 3의 컨테이너
// const totalSlides3 = document.querySelectorAll('.crewslide').length; // 슬라이드 3의 개별 슬라이드 수

// // 다음 슬라이드로 이동
// function nextSlide3() {
//     currentSlide3 = (currentSlide3 + 1) % totalSlides3;
//     updateSlidePosition3();
// }

// // 이전 슬라이드로 이동
// function prevSlide3() {
//     currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3;
//     updateSlidePosition3();
// }

// // 슬라이드 위치 업데이트
// function updateSlidePosition3() {
//     slides3.style.transform = `translateX(-${currentSlide3 * 358}px)`; // 슬라이드 너비를 358px로 설정
// }

// // 화살표 버튼 클릭 시 자동 슬라이드 멈춤
// document.querySelector('.crewarrow.left').addEventListener('click', () => clearInterval(autoSlide3));
// document.querySelector('.crewarrow.right').addEventListener('click', () => clearInterval(autoSlide3));

// ------------------------------------------------------------------------------------- //


