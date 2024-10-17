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


// 슬라이드 배너 3
let currentSlide3 = 0;
const slides3 = document.querySelector('crewslides');
const totalSlides3 = document.querySelectorAll('crewslide').length;

function nextSlide3() {
    currentSlide3 = (currentSlide3 + 1) % totalSlides3;
    updateSlidePosition3();
}

function prevSlide3() {
    currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3;
    updateSlidePosition3();
}

function updateSlidePosition3() {
    slides3.style.transform = `translateX(-${currentSlide3 * 100}%)`;
}

document.querySelector('crewarrow.left').addEventListener('click', () => clearInterval(autoSlide3));
document.querySelector('crewarrow.right').addEventListener('click', () => clearInterval(autoSlide3));
