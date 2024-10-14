// 모달 요소 가져오기
const goalModal = document.getElementById('goal-modal');
const mealModal = document.getElementById('meal-modal');

// 아침, 점심, 저녁 칼로리 입력 필드 가져오기
const breakfastInput = document.getElementById('breakfast-calorie');
const lunchInput = document.getElementById('lunch-calorie');
const dinnerInput = document.getElementById('dinner-calorie');

// 오늘 칼로리를 표시할 요소
const todayCaloriesDisplay = document.getElementById('today-calorie'); // 수정된 ID
// 총 칼로리 표시할 요소
const totalCaloriesDisplay = document.getElementById('total-calories');

// 총 칼로리 변수 초기화
let totalCalories = 0; // 목표 칼로리 총합
let consumedCalories = 0; // 섭취한 칼로리 총합

// 목표설정 버튼 클릭 시 모달 열기
const goalButton = document.querySelector('.button2');
goalButton.addEventListener('click', () => {
    goalModal.style.display = 'block';
});

// 식단등록 버튼 클릭 시 모달 열기
const mealButton = document.querySelector('.button3');
mealButton.addEventListener('click', () => {
    mealModal.style.display = 'block';
});

// 닫기 버튼 및 모달 외부 클릭 시 닫기
const closeGoal = document.getElementById('close-goal');
const closeMeal = document.getElementById('close-meal');

closeGoal.addEventListener('click', () => {
    goalModal.style.display = 'none';
});

closeMeal.addEventListener('click', () => {
    mealModal.style.display = 'none';
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target === goalModal) {
        goalModal.style.display = 'none';
    } else if (event.target === mealModal) {
        mealModal.style.display = 'none';
    }
});

// 저장 버튼 클릭 시 입력한 칼로리 값을 더하여 계산
const saveGoalButton = document.getElementById('save-goal');
saveGoalButton.addEventListener('click', () => {
    // 각 입력 필드 값 가져오기 (빈 값은 0으로 처리)
    const breakfastCalories = parseInt(breakfastInput.value) || 0;
    const lunchCalories = parseInt(lunchInput.value) || 0;
    const dinnerCalories = parseInt(dinnerInput.value) || 0;

    // 목표 칼로리 계산
    totalCalories = breakfastCalories + lunchCalories + dinnerCalories;

    // "오늘 칼로리"에 총 칼로리 값 반영
    const percentage = Math.round((consumedCalories / totalCalories) * 100);
    todayCaloriesDisplay.innerHTML = `${consumedCalories} / ${totalCalories} Kcal <span>(${percentage}%)</span>`;

    // 남은 칼로리 업데이트
    updateRemainingCalories();

    // 모달 닫기 및 입력 필드 초기화
    goalModal.style.display = 'none';
    breakfastInput.value = '';
    lunchInput.value = '';
    dinnerInput.value = '';

    // div2 카드의 목표 칼로리 업데이트
    totalCaloriesDisplay.innerHTML = totalCalories; // 총 칼로리 업데이트
});

// 저장 버튼 클릭 시 입력한 음식 정보를 추가
const saveMealButton = document.getElementById('save-meal');
saveMealButton.addEventListener('click', () => {
    // 선택한 식사 종류
    const mealType = document.getElementById('meal-type').value;
    const foodName = document.getElementById('food-name').value.trim(); // Trim whitespace
    const foodCalories = parseInt(document.getElementById('food-calorie').value) || 0;
    const eatingTime = document.getElementById('eating-time').value;

    // 입력값 검증
    if (!foodName || foodCalories < 0 || !eatingTime) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // 섭취한 칼로리 업데이트
    consumedCalories += foodCalories;

    // div3의 아침, 점심, 저녁 카드에 정보 추가
    const mealCard = document.getElementById(`${mealType}-card`);
    mealCard.innerHTML += `<div>${foodName} - ${foodCalories} Kcal, 먹은 시간: ${eatingTime}</div>`;

    // 오늘 칼로리 업데이트
    const percentage = Math.round((consumedCalories / totalCalories) * 100);
    todayCaloriesDisplay.innerHTML = `${consumedCalories} / ${totalCalories} Kcal <span>(${percentage}%)</span>`;

    // 남은 칼로리 업데이트
    updateRemainingCalories();

    // 모달 닫기 및 입력 필드 초기화
    mealModal.style.display = 'none';
    document.getElementById('food-name').value = '';
    document.getElementById('food-calorie').value = '';
    document.getElementById('eating-time').value = '';
});

// 남은 칼로리를 업데이트하는 함수
function updateRemainingCalories() {
    const remainingCalories = totalCalories - consumedCalories;
    const remainingText = remainingCalories > 0 ? `아직 ${remainingCalories} Kcal가 남았어요!` : `목표 칼로리를 초과했습니다!`;
    document.querySelector('.footer-text').innerHTML = remainingText;

    // 칼로리 막대 업데이트
    const calorieBar = document.querySelector('.calorie-bar');
    const targetCalories = totalCalories;
    const usedCalories = consumedCalories;
    const usedPercentage = Math.min(Math.round((usedCalories / targetCalories) * 100), 100); // 최대 100%로 제한

    calorieBar.style.width = `${usedPercentage}%`; // 칼로리 막대 너비 설정
}


