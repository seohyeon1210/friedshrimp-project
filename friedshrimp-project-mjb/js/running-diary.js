const run_add = document.querySelector('.run-add');
const first_badd = document.querySelector('.run-add');
const running_modal = document.querySelector('.running-modal');
const running_content = document.querySelector('.running-content');
const radd_close = document.querySelector('.radd-close');
const remov_add = document.querySelector('.remov-add');
const radd_form = document.querySelector('.radd_form');
const radd_months = document.querySelector('.radd-months');
const radd_days = document.querySelector('.radd-days');
const run_time = document.querySelector('.run-time');
const run_km = document.querySelector('.run-km');
const radd_btn = document.querySelector('.radd-btn');
const recod_area = document.querySelector('.radd-recodes');
const first_atitle = document.querySelector('.first_atitle');
const year = new Date().getFullYear();
let armon, arday, arkm, akcal;

first_badd.addEventListener('click', () => {
    running_modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});

run_add.addEventListener('click', () => {
    running_modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});

radd_close.addEventListener('click', () => {
    close_madd();
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
    } else {
        radd_days.innerHTML = `<option>월부터 선택하세요</option>`;
    }
});

remov_add.addEventListener('click', () => {
    del_areco();
});

function add_rrecode() {
    var armon = radd_months.value;
    var arday = radd_days.value;
    var artime = run_time.value;
    var arkm = run_km.value;
    if (armon && arday && artime && arkm) {
        var new_addcard = document.createElement('card');
        var new_list = document.createElement('li');
        recod_area.appendChild(new_list);
        new_list.appendChild(new_addcard);
        new_addcard.classList.add('run-card');
        new_addcard.innerHTML = `
        <div class="run-elem">
        <p class="run-date">${armon}월 ${arday}일</p>
        <form class="relem-card">
        <input type="checkbox" class="rch-boxs" />
        <div class="run-car-el run-evn1">
        <span class="run-time rcard-title">
        런닝시간
        </span>
        <span class="run-time">${artime}시간</span>
        </div>
        <div class="run-car-el run-evn2">
        <span class="run-km rcard-title">
        런닝거리
        </span>
        <span class="run-km">${arkm}km</span>
        </div>
        <div class="run-car-el run-evn3">
        <span class="run-kcal rcard-title">
        소모칼로리
        </span>
        <span class="run-kcal">${arkm * 75}kcal</span>
        </div>
        </form>
        </div>
        `
    } else {
        alert('모든 필드를 입력하세요.');
    }
    first_atitle.style.display = 'none';
    close_madd();
}

function del_areco() {
    const rch_boxs = document.querySelectorAll('.rch-boxs');
    rch_boxs.forEach(rch_box => {
        if (rch_box.checked) {
            rch_box.parentElement.parentElement.parentElement.remove();
        }
        if(recod_area.childElementCount) {
            first_atitle.style.display = 'block';
        }
    });
}

function radd_mon_opt() {
    for (let i = 1; i <= 12; i++) {
        radd_months.innerHTML += `<option value="${i}">${i}월</option>`;
    }
}

function close_madd() {
    running_modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
    radd_days.innerHTML = `<option>월부터 선택하세요</option>`;
    radd_form.reset();
}

function todo() {
    alert('기능 미구현');
    location.href = './running-diary.html';
}

window.onload = function () {
    radd_mon_opt();
};
