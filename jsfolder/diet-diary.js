// 모달 요소 가져오기
const goalModal = document.getElementById('goal-modal');

// 아침, 점심, 저녁 칼로리 입력 필드 가져오기
const breakfastInput = document.getElementById('breakfast-calorie');
const lunchInput = document.getElementById('lunch-calorie');
const dinnerInput = document.getElementById('dinner-calorie');

// 오늘 칼로리를 표시할 요소
const todayCaloriesDisplay = document.getElementById('today-calories');

// 총 칼로리 표시할 요소
const totalCaloriesDisplay = document.getElementById('total-calories');

// 목표설정 버튼 클릭 시 모달 열기
const goalButton = document.querySelector('.button2'); // 목표설정 버튼이 아닌 모달 여는 버튼
goalButton.onclick = function() {
    goalModal.style.display = 'block';
}

// 닫기 버튼 가져오기 및 닫기 기능
const closeGoal = document.getElementById('close-goal');
closeGoal.onclick = function() {
    goalModal.style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == goalModal) {
        goalModal.style.display = 'none';
    }
}

// 저장 버튼 클릭 시 입력한 칼로리 값을 더하여 계산
const saveGoalButton = document.getElementById('save-goal');
saveGoalButton.onclick = function() {
    // 각 입력 필드 값 가져오기 (빈 값은 0으로 처리)
    const breakfastCalories = parseInt(breakfastInput.value) || 0;
    const lunchCalories = parseInt(lunchInput.value) || 0;
    const dinnerCalories = parseInt(dinnerInput.value) || 0;

    // 총 칼로리 계산
    const totalCalories = breakfastCalories + lunchCalories + dinnerCalories;

    // "오늘 칼로리"에 총 칼로리 값 반영
    const targetCalories = 2000; // 목표 칼로리, 예: 2000 Kcal
    const percentage = Math.round((totalCalories / targetCalories) * 100);

     // 오늘의 칼로리와 퍼센트 표시
    todayCaloriesDisplay.innerHTML = `${totalCalories} / ${targetCalories} Kcal <span>(${percentage}%)</span>`;

    // 모달 닫기
    goalModal.style.display = 'none';

    // 콘솔에 출력 (테스트용)
    console.log("아침: " + breakfastCalories + " Kcal, 점심: " + lunchCalories + " Kcal, 저녁: " + dinnerCalories + " Kcal");
    console.log("총 목표 칼로리: " + totalCalories + " Kcal");
}


// 식단등록js
// 모달 요소 가져오기
const mealModal = document.getElementById('meal-modal');

// 저장 버튼 클릭 시 모달 열기
const mealButton = document.querySelector('.button3'); // 식단등록 버튼
mealButton.onclick = function() {
    mealModal.style.display = 'block';
}

// 닫기 버튼 가져오기 및 닫기 기능
const closeMeal = document.getElementById('close-meal');
closeMeal.onclick = function() {
    mealModal.style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target === mealModal) {
        mealModal.style.display = 'none';
    }
}

// 저장 버튼 클릭 시 입력한 음식 정보를 추가
const saveMealButton = document.getElementById('save-meal');
saveMealButton.onclick = function() {
    // 선택한 식사 종류
    const mealType = document.getElementById('meal-type').value;
    const foodName = document.getElementById('food-name').value;
    const foodCalories = parseInt(document.getElementById('food-calorie').value) || 0;
    const eatingTime = document.getElementById('eating-time').value;

    // 입력값 검증
    if (!foodName || foodCalories < 0 || !eatingTime) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // div3의 아침, 점심, 저녁 카드에 정보 추가
    const mealCard = document.getElementById(`${mealType}-card`);
    mealCard.innerHTML += `<div>${foodName} - ${foodCalories} Kcal, 먹은 시간: ${eatingTime}</div>`;

    // 모달 닫기 및 입력 필드 초기화
    mealModal.style.display = 'none';
    document.getElementById('food-name').value = '';
    document.getElementById('food-calorie').value = '';
    document.getElementById('eating-time').value = '';
}

