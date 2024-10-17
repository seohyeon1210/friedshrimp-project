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
const pw_info2 = document.querySelector(".pw_info2");
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
const user_id = document.querySelector(".user_id");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (users.length === 0) {
    users.push({
        no: 0,
        id: "admin",
        pw: "admin1",
        name: "관리자1",
        birth: "1991-01-01",
        keyword: "관리자의 권한1",
    });
    localStorage.setItem("users", JSON.stringify(users));
}

let time_date = new Date();
let pass_age = time_date.getFullYear() - 19;
let id_pas = false;
let password_pas = false;

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
    id_rock_unrock(1);
});

log_sig.addEventListener("click", () => {
    modal_log.style.display = "none";
});

log_sig.addEventListener("mouseover", () => {
    log_sig.innerText = "같이 런닝을 뛰어요!!";
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

document.getElementById("user_id").oninput = function () {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, "");
};

document.getElementById("login_id").oninput = function () {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, "");
};

function id_checkfun() {
    var chk_yes = document.getElementById("user_id").value;
    var search_id = users.some((user) => user.id == chk_yes);

    if (chk_yes == "") {
        alert("아이디를 입력하세요!!");
    } else if (search_id == false) {
        alert(`'${chk_yes}' 아이디는 사용할 수 있습니다!`);
        id_pas = true;
        id_rock_unrock("");
    } else if (chk_yes.includes("admin") || search_id == true) {
        alert(`'${chk_yes}' 아이디는 사용할 수 없습니다!!`);
        id_pas = false;
    }
}

function id_rock_unrock(item) {
    var rock_input = document.getElementById("user_id");
    if (id_pas && item == "") {
        rock_input.disabled = true;
        btn_rock.style.display = "block";
        id_checkbtn.style.display = "none";
    } else if (id_pas && item == "1") {
        id_pas = false;
        rock_input.disabled = false;
        btn_rock.style.display = "none";
        id_checkbtn.style.display = "block";
        document.getElementById("user_id").value = "";
    }
}

function st_input_ck() {
    var id_chk = document.getElementById("user_id").value;
    var name_chk = document.getElementById("user_name").value;
    var age_chk = document.getElementById("user_age").value;
    var keyword_chk = document.getElementById("user_keyword").value;
    var pw_first = document.getElementById("upw_first").value;
    var pw_second = document.getElementById("upw_second").value;

    var id_rule = /^[a-zA-Z0-9]+$/;

    if (
        id_pas == true &&
        id_chk &&
        password_pas == true &&
        name_chk &&
        age_chk &&
        keyword_chk
    ) {
        modal_sig.style.display = "none";
        save();
        id_rock_unrock(1);
    } else if (!id_chk) {
        alert("아이디를 입력하세요!");
        document.getElementById("user_id").focus();
    } else if (!id_rule.test(id_chk)) {
        alert("아이디는 영어와 숫자만 입력 가능합니다.");
        id_chk = document.getElementById("user_id").value = "";
        document.getElementById("user_id").focus();
    } else if (id_pas == false && id_chk) {
        alert("아이디 중복확인하세요!");
        document.getElementById("user_id").focus();
    } else if (pw_first == "") {
        alert("비밀번호를 입력하세요!");
        document.getElementById("upw_first").focus();
    } else if (pw_second == "") {
        alert("비밀번호 확인을 입력하세요!");
        document.getElementById("upw_second").focus();
    } else if (password_pas == false) {
        alert("비밀번호가 일치하지 않습니다!");
        document.getElementById("upw_first").focus();
    } else if (!name_chk) {
        alert("이름을 입력하세요!");
        document.getElementById("user_name").focus();
    } else if (!age_chk) {
        alert("생년월일을 입력하세요!");
        document.getElementById("user_age").focus();
    } else if (!keyword_chk) {
        alert("키워드를 입력하세요!");
        document.getElementById("user_name").focus();
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
    } else if (upw_second) {
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
let chg_id;
function find_pw() {
    var users_ck = users.find(
        (user) =>
            user.id == find_uid.value && user.keyword == find_ukeyword.value
    );
    if (users_ck) {
        alert("비밀번호 변경 승인 되었습니다.");
        passwordFindModal.style.display = "none";
        document.querySelector(
            ".change_id"
        ).innerText = `현재 아이디: ${users_ck.id}`;
        localStorage.setItem("user_id", users_ck.id);
        find_uid.value = "";
        find_ukeyword.value = "";
        chg_id = users_ck;
        passwordChangeModal.style.display = "block";
    } else {
        alert("아이디 및 키워드를 확인해주세요!");
    }
}

function update_pw() {
    const userId = localStorage.getItem("user_id");
    const user = users.find((user) => user.id === userId);

    if (change_pw.value == "") {
        alert("비밀번호가 입력되지 않았습니다.");
        change_pw.focus();
    } else if (change_pw_ck.value == "") {
        alert("비밀번호 재입력이 입력되지 않았습니다.");
        change_pw_ck.focus();
    } else if (change_pw.value != change_pw_ck.value) {
        alert("비밀번호와 비밀번호 재입력이 일치하지 않습니다.");
        change_pw.focus();
    } else if (user) {
        user.pw = change_pw.value;
        localStorage.setItem("users", JSON.stringify(users));
        alert("비밀번호 변경 완료되었습니다.");
        passwordChangeModal.style.display = "none";
    } else {
        alert("사용자를 찾을 수 없습니다.");
    }
}

function save() {
    var user_id = document.getElementsByName("user_id")[1].value;
    var user_pw = document.getElementsByName("user_pw")[1].value;
    var user_name = document.getElementById("user_name").value;
    var user_birth = document.getElementById("user_age").value;
    var user_keyword = document.getElementById("user_keyword").value;

    alert(`'${user_name}'님 회원가입을 축하드립니다.`);
    modal_sig.style.display = "none";
    if (users.length == 0) {
    }
    users.push({
        no: users.length,
        id: user_id,
        pw: user_pw,
        name: user_name,
        birth: user_birth,
        keyword: user_keyword,
    });

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementsByName("user_id")[1].value = "";
    document.getElementsByName("user_pw")[1].value = "";
    document.getElementById("upw_second").value = "";
    document.getElementById("user_name").value = "";
    document.getElementById("user_age").value = "";
    document.getElementById("user_keyword").value = "";
    pw_info.innerText = "";
}

function update_ck() {
    password_pas = false;
    if (change_pw.value) {
        change_pw.value == change_pw_ck.value
            ? (pw_info2.innerText = "비밀번호가 일치합니다.")
            : (pw_info2.innerText = "비밀번호가 일치하지 않습니다.");
        change_pw.value == change_pw_ck.value
            ? (password_pas = true)
            : (password_pas = false);
    } else if (change_pw_ck.value) {
        change_pw.value == change_pw_ck.value
            ? (pw_info2.innerText = "비밀번호가 일치합니다.")
            : (pw_info2.innerText = "비밀번호가 일치하지 않습니다.");
        change_pw.value == change_pw_ck.value
            ? (password_pas = true)
            : (password_pas = false);
    } else {
        pw_info2.innerText = "";
        password_pas = false;
    }
}

function check_login() {
    var user_id = document.getElementsByName("user_id")[0].value;
    var user_pw = document.getElementsByName("user_pw")[0].value;
    var search_user = users.find(
        (user) => user.id === user_id && user.pw === user_pw
    );
    if (search_user) {
        if (search_user != "" && !search_user.id.includes("admin")) {
            modal_log.style.display = "none";
            welcom_modal.style.display = "block";
            localStorage.setItem("user_id", search_user.id);
            localStorage.setItem("user_name", search_user.name);
            welcom_mhell.innerHTML = `<p class="welcom-mhell">'${search_user.name}'님, 오늘도 화이팅!!</p>`;
            setTimeout(function () {
                welcom_modal.style.display = "none";
                welcom_mhell.innerHTML = "";
                location.href = "./mainhome.html";
            }, 3000);
        } else {
            modal_log.style.display = "none";
            admin_modal.style.display = "block";
            admin_mhell.innerText = `${search_user.name}님, 반갑습니다!`;
            setTimeout(function () {
                admin_modal.style.display = "none";
                admin_mhell.innerHTML = "";
                location.href = "./admin/admin-mainhome.html";
            }, 3000);
        }
    } else {
        alert("아이디와 비밀번호를 확인하세요!");
    }
}

function scrill_move(item) {
    var loc = document.querySelector("." + item).offsetTop;
    window.scrollTo({ top: loc, behavior: "smooth" });
}

function con_sub() {
    var email_rule = /^[0-9a-zA-Z_]+@[0-9a-zA-Z]+[.][a-zA-Z]{2,3}$/i;
    var name_rule = /^[a-zA-Z가-힣]{1,20}$/;
    var cn_name = document.querySelector("#cn-name");
    var cn_email = document.querySelector("#cn-email");
    var cn_contents = document.querySelector("#cn-contents");

    if (cn_name.value == "") {
        alert("이름을 입력해주세요.");
        cn_name.focus();
    } else if (!name_rule.test(cn_name.value)) {
        alert("이름은 한글과 영어만 입력하세요!");
    } else if (cn_email.value == "") {
        alert("이메일을 입력해주세요.");
        cn_email.focus();
    } else if (!email_rule.test(cn_email.value)) {
        alert("이메일 형식에 맞게 입력해주세요.");
        cn_email.focus();
    } else if (cn_contents.value == "") {
        alert("내용을 입력해주세요.");
        cn_contents.focus();
    } else {
        cn_name.value = "";
        cn_contents.value = "";
        cn_email.value = "";
        alert("관리자에게 전달되었습니다.");
    }
}

window.onload = function () {
    birth.setAttribute("max", `${pass_age}-12-31`);
};
