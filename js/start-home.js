const data_show = document.querySelector('.data_show');
const login_ck = document.querySelector('.login_ck');
const logout_ck = document.querySelector('.logout_ck');
const now_time = document.querySelector('.now_time');
const login_open = document.querySelector('.login_open');
const sign_open = document.querySelectorAll('.sign_open');
const sign_log = document.querySelector('.sign_open');
const log_close = document.querySelector('.log_close');
const sig_close = document.querySelector('.sig_close');
const modal_log = document.querySelector('.modal_log');
const modal_sig = document.querySelector('.modal_sig');
const log_sig = document.querySelector('.log_sig');
const birth = document.querySelector('.birth');
const cn_name = document.querySelector('#cn_name');
const cn_email = document.querySelector('#cn_email');
const cn_contents = document.querySelector('#cn_contents');
const top_menu = document.querySelector('.top-menu');
const welcom_modal = document.querySelector('.welcom-modal');
const welcom_mhell = document.querySelector('.welcom-mhell');
const admin_modal = document.querySelector('.admin-modal');
const admin_mhell = document.querySelector('.admin-mhell');
const log_ent = document.querySelectorAll('.log_ent');
const sign_ent = document.querySelectorAll('.sign_ent');

let time_date = new Date();
let pass_age = time_date.getFullYear() - 19;
let user_id, user_pw, user_name, user_age, sta_us, days;

let admin_id = 'admin';
let admin_pw = 'admin1';

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        top_menu.classList.add('menu-down');
    } else {
        top_menu.classList.remove('menu-down');
    }
});

log_ent.forEach((btn) => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            check_login();
        }
    });
});

sign_ent.forEach((btn) => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            save();
        }
    });
});

// birth.attributes('max', `${pass_age}-12-31`);
login_open.addEventListener('click', () => {
    modal_log.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    modal_sig.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

sign_open.forEach((sign) => {
    sign.addEventListener('click', () => {
        modal_sig.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        modal_log.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    });
});

log_close.addEventListener('click', () => {
    modal_log.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

sig_close.addEventListener('click', () => {
    modal_sig.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

log_sig.addEventListener('click', () => {
    modal_log.style.display = 'none';
});

log_sig.addEventListener('mouseover', () => {
    log_sig.innerText = '같이 러닝을 뛰어요!!';
});

log_sig.addEventListener('mouseout', () => {
    log_sig.innerText = '회원이 아니신가요?';
});

function save() {
    user_id = document.getElementsByName('user_id')[1].value;
    user_pw = document.getElementsByName('user_pw')[1].value;
    user_name = document.getElementById('user_name').value;
    user_age = document.getElementById('user_age').value;
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('user_pw', user_pw);
    localStorage.setItem('user_name', user_name);
    localStorage.setItem('user_age', user_age);
    localStorage.setItem('state_user', 0);
    alert(`'${user_name}'님 회원가입을 축하드립니다.`);
    modal_sig.style.display = 'none';
}

function check_login() {
    user_id = document.getElementsByName('user_id')[0].value;
    user_pw = document.getElementsByName('user_pw')[0].value;
    if (
        user_id == localStorage.getItem('user_id') &&
        user_pw == localStorage.getItem('user_pw')
    ) {
        modal_log.style.display = 'none';
        welcom_modal.style.display = 'block';
        welcom_mhell.innerHTML = `<p class="welcom-mhell">'${localStorage.getItem(
            'user_name'
        )}'님, 오늘도 화이팅!!</p>`;
        setTimeout(function () {
            welcom_modal.style.display = 'none';
            welcom_mhell.innerHTML = '';
            localStorage.setItem('login_value', 1);
            location.href = './mainhome.html';
        }, 3000);
    } else if (user_id == admin_id && user_pw == admin_pw) {
        modal_log.style.display = 'none';
        admin_modal.style.display = 'block';
        admin_mhell.innerText = '관리자님, 반갑습니다!';
        setTimeout(function () {
            admin_modal.style.display = 'none';
            admin_mhell.innerHTML = '';
            location.href = './admin/admin-mainhome.html';
        }, 3000);
    } else {
        alert('아이디와 비밀번호를 확인하세요!');
    }
}

function login_btn_state() {
    if (localStorage.getItem('login_value') == 1) {
        localStorage.setItem('login_value', 0);
        location.href = './index.html';
    }
}

function scrill_move(item) {
    var loc = document.querySelector('.' + item).offsetTop;
    console.log(item);
    window.scrollTo({ top: loc, behavior: 'smooth' });
}

function con_sub() {
    var email_rule =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // var cn_name = document.querySelector('#cn_name').value;
    // var cn_email = document.querySelector('#cn_email').value;
    // var cn_contents = document.querySelector('#cn_contents').value;
    if (
        cn_name.value == '' ||
        cn_email.value == '' ||
        cn_contents.value == ''
    ) {
        alert('빈칸이 존재합니다. 모두 입력해주세요!');
    } else if (!email_rule.test(cn_email.value)) {
        alert('이메일 형식에 맞게 입력해주세요.');
    } else {
        localStorage.setItem('cn_name', cn_name.value);
        localStorage.setItem('cn_email', cn_email.value);
        localStorage.setItem('cn_contents', cn_contents.value);
        cn_name.value = '';
        cn_contents.value = '';
        cn_email.value = '';
    }
}
