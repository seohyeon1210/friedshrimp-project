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