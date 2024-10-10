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

let time_date = new Date();
let pass_age = time_date.getFullYear() - 19;
let user_id, user_pw, user_name, user_age, sta_us, days;

// birth.attributes('max', `${pass_age}-12-31`);
login_open.addEventListener('click', () => {
    modal_log.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});

sign_open.forEach((sign) => {
    sign.addEventListener('click', () => {
        modal_sig.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
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
        alert(`'${localStorage.getItem('user_name')}'님, 환영합니다!`);
        localStorage.setItem('login_value', 1);
        location.href = './log_main.html';
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

function log_check() {
    if (localStorage.getItem('login_value') == 1) {
        location.href = './log_main.html';
    } else {
        location.href = './index.html';
    }
}

function scrill_move(item) {
    var loc = document.querySelector("." + item).offsetTop;
    console.log(item);
    window.scrollTo({top: loc, behavior: 'smooth'});
}

function con_sub() {
    var email_rule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // var cn_name = document.querySelector('#cn_name').value;
    // var cn_email = document.querySelector('#cn_email').value;
    // var cn_contents = document.querySelector('#cn_contents').value;
    if(cn_name.value == '' || cn_email.value == '' || cn_contents.value == '') {
        alert('빈칸이 존재합니다. 모두 입력해주세요!');
    } else if(!email_rule.test(cn_email.value)) {
        alert("이메일 형식에 맞게 입력해주세요.");
    } else {
        localStorage.setItem('cn_name', cn_name.value);
        localStorage.setItem('cn_email', cn_email.value);
        localStorage.setItem('cn_contents', cn_contents.value);
        cn_name.value = '';
        cn_contents.value = '';
        cn_email.value = '';
    }
}
