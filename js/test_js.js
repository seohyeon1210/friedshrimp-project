const data_show = document.querySelector(".data_show");
const login_ck = document.querySelector(".login_ck");
const logout_ck = document.querySelector(".logout_ck");
const now_time = document.querySelector(".now_time");
const login_open = document.querySelector(".login_open");
const sign_open = document.querySelectorAll(".sign_open");
const sign_log = document.querySelector(".sign_open");
const log_close = document.querySelector(".log_close");
const sig_close = document.querySelector(".sig_close");
const modal_log = document.querySelector(".modal_log");
const modal_sig = document.querySelector(".modal_sig");
const birth = document.querySelector(".birth");

let time_date = new Date();
let pass_age = time_date.getFullYear() - 19;
let user_id, user_pw, user_name, user_age, sta_us, days;

login_open.addEventListener('click', () => {
    modal_log.style.display = 'block';
});

sign_open.forEach(sign => {
    sign.addEventListener('click', () => {
        modal_sig.style.display = 'block';
    }) 
});

birth.setAttributes('max' , `${pass_age}-12-31`);

log_close.addEventListener('click', () => {
    modal_log.style.display = 'none';
});

sig_close.addEventListener('click', () => {
    modal_sig.style.display = 'none';
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
    if(user_id == localStorage.getItem('user_id') && user_pw == localStorage.getItem('user_pw')) {
        alert(`'${localStorage.getItem('user_name')}'님, 환영합니다!`);
        localStorage.setItem('login_value', 1);
        location.href = './log_main.html';
    } else {
        alert("아이디와 비밀번호를 확인하세요!");
    }
}

function login_btn_state() {
    if(localStorage.getItem('login_value') == 1) {
        localStorage.setItem('login_value', 0);
        location.href = './index.html';
    }
}

function log_check() {
    if(localStorage.getItem('login_value') == 1) {
        // now_time.innerText = `${time_date.getFullYear()}년 ${time_date.getMonth()+1}월 ${time_date.getDate()}일 ${date_sh()}요일,　`;
        location.href = './log_main.html'
    } else {
        location.href = './index.html';
    }
}