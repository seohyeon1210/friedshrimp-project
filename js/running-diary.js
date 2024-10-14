const run_add = document.querySelector('.run-add');
const running_modal = document.querySelector('.running-modal');
const running_content = document.querySelector('.running-content');
const radd_close = document.querySelector('.radd-close');
const radd_months = document.querySelector('.radd-months');
const radd_days = document.querySelector('.radd-days');

const year = new Date().getFullYear();

run_add.addEventListener('click', () => {
    running_modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});

radd_close.addEventListener('click', () => {
    running_modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

radd_months.addEventListener('click', () => {
    if (radd_months.value != '월 선택') {
        var mon_val = Number(radd_months.value);
        radd_days_opt(mon_val);
        function radd_days_opt(mon_val) {
            let final_days;
            if (mon_val === 2) {
                final_days =
                    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
                        ? 29
                        : 28;
            } else if ([4, 6, 9, 11].includes(mon_val)) {
                final_days = 30;
            } else {
                final_days = 31;
            }

            radd_days.innerHTML = '';

            for (let i = 1; i <= final_days; i++) {
                radd_days.innerHTML += `<option value="${i}">${i}일</option>`;
            }
        }
    } else if (radd_months.value == '월 선택') {
        radd_days.innerHTML = `<option>월부터 선택하세요.</option>`;
    }
});

function radd_mon_opt() {
    for (let i = 1; i <= 12; i++) {
        radd_months.innerHTML += `<option value="${i}">${i}월</option>`;
    }
}

function todo() {
    alert('기능 미구현');
    location.href = './running-diary.html';
}

window.onload = function () {
    radd_mon_opt();
};
