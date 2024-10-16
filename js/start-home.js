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
const log_sig = document.querySelector(".log_sig");
const birth = document.querySelector(".birth");
const cn_name = document.querySelector("#cn_name");
const cn_email = document.querySelector("#cn_email");
const cn_contents = document.querySelector("#cn_contents");
const top_menu = document.querySelector(".top-menu");
const welcom_modal = document.querySelector(".welcom-modal");
const welcom_mhell = document.querySelector(".welcom-mhell");
const admin_modal = document.querySelector(".admin-modal");
const admin_mhell = document.querySelector(".admin-mhell");
const id_checkbtn = document.querySelector(".id_checkbtn");
const btn_rock = document.querySelector(".btn_rock");
const pw_info = document.querySelector(".pw_info");
const upw_first = document.querySelector("#upw_first");
const upw_second = document.querySelector("#upw_second");
const find_uid = document.querySelector("#find_uid");
const find_ukeyword = document.querySelector("#find_ukeyword");
const find_btn = document.querySelector(".find_btn");
const change_pw = document.querySelector("#change_pw");
const change_pw_ck = document.querySelector("#change_pw_ck");
const change_btn = document.querySelector(".change_btn");
const log_ent = document.querySelectorAll(".log_ent");
const sign_ent = document.querySelectorAll(".sign_ent");

let time_date = new Date();
let pass_age = time_date.getFullYear() - 19;
let user_id, user_pw, user_name, user_age, sta_us, days;
let id_pas = false;
let password_pas = false;

let admin_id = "admin";
let admin_pw = "admin1";

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        top_menu.classList.add("menu-down");
    } else {
        top_menu.classList.remove("menu-down");
    }
});

log_ent.forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            check_login();
        }
    });
});

sign_ent.forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            save();
        }
    });
});

login_open.addEventListener("click", () => {
    modal_log.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    modal_sig.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});

sign_open.forEach((sign) => {
    sign.addEventListener("click", () => {
        modal_sig.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
        modal_log.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    });
});

log_close.addEventListener("click", () => {
    modal_log.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});

sig_close.addEventListener("click", () => {
    modal_sig.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    pw_info.innerText = "";
});

log_sig.addEventListener("click", () => {
    modal_log.style.display = "none";
});

log_sig.addEventListener("mouseover", () => {
    log_sig.innerText = "같이 러닝을 뛰어요!!";
});

log_sig.addEventListener("mouseout", () => {
    log_sig.innerText = "회원이 아니신가요?";
});

upw_first.addEventListener("keyup", () => {
    password_check();
});
upw_second.addEventListener("keyup", () => {
    password_check();
});

find_btn.addEventListener("click", () => {
    find_pw();
});

change_pw.addEventListener("keyup", () => {
    update_ck();
});
change_pw_ck.addEventListener("keyup", () => {
    update_ck();
});

change_btn.addEventListener("click", () => {
    if ((password_pas = true)) {
        update_pw();
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
});

id_checkbtn.addEventListener("click", () => {
    var chk_yes = document.getElementById("user_id").value;
    if (chk_yes == "") {
        alert(`아이디를 입력하세요!`);
        id_pas = false;
    } else if (chk_yes.includes("admin")) {
        alert(`'${chk_yes}' 아이디는 사용 불가능합니다.`);
        id_pas = false;
    } else if (chk_yes == localStorage.getItem("user_id")) {
        alert(`'${chk_yes}' 아이디는 사용 불가능합니다.`);
        id_pas = false;
    } else {
        alert(`'${chk_yes}' 아이디는 사용 가능합니다.`);
    }

    if (id_pas == true) {
        id_rock_unrock(id_pas);
    }
});

function id_rock_unrock(id_pas) {
    var rock_input = document.getElementById("user_id");
    if (id_pas) {
        rock_input.disabled = "true";
        btn_rock.style.display = "block";
        id_checkbtn.style.display = "none";
    } else {
        rock_input.disabled = "false";
        btn_rock.style.display = "block";
        id_checkbtn.style.display = "none";
    }
}

function st_input_ck() {
    var name_chk = document.getElementById("user_name").value;
    var age_chk = document.getElementById("user_age").value;
    var keyword_chk = document.getElementById("user_keyword").value;
    if (
        id_pas == true &&
        password_pas == true &&
        name_chk &&
        age_chk &&
        keyword_chk
    ) {
        modal_sig.style.display = "none";
        save();
    } else if (id_pas == false && password_pas == true && name_chk && age_chk) {
        alert("아이디 중복확인하세요!");
    } else if (id_pas == true && password_pas == false && name_chk && age_chk) {
        alert("비밀번호가 일치하지 않습니다!");
    } else if (id_pas == true && password_pas == false && name_chk && age_chk) {
        alert("비밀번호가 일치하지 않습니다!");
    } else if (id_pas == true && password_pas == false && name_chk && age_chk) {
        alert("비밀번호가 일치하지 않습니다!");
    } else {
        alert("빈 칸 없이 모두 입력하세요!");
    }
}

function password_check() {
    password_pas = false;
    if (upw_first.value) {
        upw_first.value == upw_second.value
            ? (pw_info.innerText = "비밀번호가 일치합니다.")
            : (pw_info.innerText = "비밀번호가 일치하지 않습니다.");
        upw_first.value == upw_second.value
            ? (password_pas = true)
            : (password_pas = false);
    } else {
        pw_info.innerText = "";
        password_pas = false;
    }
}

function find_pw() {
    if (
        localStorage.getItem("user_id") == find_uid.value &&
        localStorage.getItem("user_keyword") == find_ukeyword.value
    ) {
        alert("비밀번호 변경 승인 되었습니다.");
        passwordFindModal.style.display = "none";
        document.querySelector(
            ".change_pw"
        ).innerText = `현재 아이디: ${find_uid.value}`;
        passwordChangeModal.style.display = "block";
    } else {
        alert("아이디 및 비밀번호를 확인해주세요!");
    }
}

function save() {
    user_id = document.getElementsByName("user_id")[1].value;
    user_pw = document.getElementsByName("user_pw")[1].value;
    user_name = document.getElementById("user_name").value;
    user_age = document.getElementById("user_age").value;
    user_keyword = document.getElementById("user_keyword").value;
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("user_pw", user_pw);
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_age", user_age);
    localStorage.setItem("user_keyword", user_keyword);
    localStorage.setItem("state_user", 0);
    alert(`'${user_name}'님 회원가입을 축하드립니다.`);
    modal_sig.style.display = "none";
}

function update_ck() {
    password_pas = false;
    if (change_pw.value) {
        change_pw.value == change_pw_ck.value
            ? (pw_info.innerText = "비밀번호가 일치합니다.")
            : (pw_info.innerText = "비밀번호가 일치하지 않습니다.");
        change_pw.value == change_pw_ck.value
            ? (password_pas = true)
            : (password_pas = false);
    } else {
        pw_info.innerText = "";
        password_pas = false;
    }
}

function update_pw() {
    localStorage.setItem("user_pw", change_pw.value);
    alert("비밀번호 변경이 완료되었습니다.");
    passwordChangeModal.style.display = "none";
}

function check_login() {
    user_id = document.getElementsByName("user_id")[0].value;
    user_pw = document.getElementsByName("user_pw")[0].value;
    if (
        user_id == localStorage.getItem("user_id") &&
        user_pw == localStorage.getItem("user_pw")
    ) {
        modal_log.style.display = "none";
        welcom_modal.style.display = "block";
        welcom_mhell.innerHTML = `<p class="welcom-mhell">'${localStorage.getItem(
            "user_name"
        )}'님, 오늘도 화이팅!!</p>`;
        setTimeout(function () {
            welcom_modal.style.display = "none";
            welcom_mhell.innerHTML = "";
            localStorage.setItem("login_value", 1);
            location.href = "./mainhome.html";
        }, 3000);
    } else if (user_id == admin_id && user_pw == admin_pw) {
        modal_log.style.display = "none";
        admin_modal.style.display = "block";
        admin_mhell.innerText = "관리자님, 반갑습니다!";
        setTimeout(function () {
            admin_modal.style.display = "none";
            admin_mhell.innerHTML = "";
            location.href = "./admin/admin-mainhome.html";
        }, 3000);
    } else {
        alert("아이디와 비밀번호를 확인하세요!");
    }
}

function login_btn_state() {
    if (localStorage.getItem("login_value") == 1) {
        localStorage.setItem("login_value", 0);
        location.href = "./index.html";
    }
}

function scrill_move(item) {
    var loc = document.querySelector("." + item).offsetTop;
    console.log(item);
    window.scrollTo({ top: loc, behavior: "smooth" });
}

function con_sub() {
    var email_rule =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // var cn_name = document.querySelector('#cn_name').value;
    // var cn_email = document.querySelector('#cn_email').value;
    // var cn_contents = document.querySelector('#cn_contents').value;
    if (
        cn_name.value == "" ||
        cn_email.value == "" ||
        cn_contents.value == ""
    ) {
        alert("빈칸이 존재합니다. 모두 입력해주세요!");
    } else if (!email_rule.test(cn_email.value)) {
        alert("이메일 형식에 맞게 입력해주세요.");
    } else {
        localStorage.setItem("cn_name", cn_name.value);
        localStorage.setItem("cn_email", cn_email.value);
        localStorage.setItem("cn_contents", cn_contents.value);
        cn_name.value = "";
        cn_contents.value = "";
        cn_email.value = "";
    }
}

window.onload = function () {
    birth.setAttribute("max", `${pass_age}-12-31`);
};
