const run_add = document.querySelector(".run-add");
const first_badd = document.querySelector(".run-add");
const running_modal = document.querySelector(".running-modal");
const radd_close = document.querySelector(".radd-close");
const remov_add = document.querySelector(".remov-add");
const radd_form = document.querySelector(".radd_form");
const radd_date = document.querySelector(".radd-date");
const run_time = document.querySelector(".run-time");
const run_km = document.querySelector(".run-km");
const recod_area = document.querySelector(".radd-recodes");
const first_atitle = document.querySelector(".first_atitle");
const running_wow = document.querySelector(".running_wow");
const wow_atitle = document.querySelector(".wow_atitle");
const paginationControls = document.getElementById("paginationControls");
const pageNumbers = document.getElementById("pageNumbers");

let running = JSON.parse(localStorage.getItem("running")) || [];
let loggedInUserId = localStorage.getItem("user_id");

let user_ckadd;
let currentPage = 1;
const itemsPerPage = 4;
user_ckadd = running.filter((record) => record.id === loggedInUserId);
welcome_run();

running_wow.style.display = "none";

first_badd.addEventListener("click", () => {
    running_modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
});

run_add.addEventListener("click", () => {
    running_modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
});

radd_close.addEventListener("click", close_madd);
remov_add.addEventListener("click", del_areco);

var today = new Date();
today.setDate(today.getDate() + 1);
document.getElementById("radd_date").max = today.toISOString().split("T")[0];

function validateInput(input, max) {
    input.value = input.value.replace(/[^0-9]/g, "");

    if (input.value < 0) {
        input.value = 0;
    } else if (input.value > max) {
        input.value = max;
    }
}

function add_show() {
    var adate = radd_date.value;
    var artime = run_time.value;
    var arkm = run_km.value;

    if (adate && artime && arkm) {
        running.push({
            no: running.length,
            id: loggedInUserId,
            date: adate,
            time: artime,
            km: arkm,
            kcal: arkm * 75,
        });
        localStorage.setItem("running", JSON.stringify(running));
        add_record();

        user_ckadd = running.filter((record) => record.id === loggedInUserId);

        if (user_ckadd.length == 1) {
            running_wow.style.display = "block";
            wow_atitle.innerHTML = `<p class="wow_atitle"><b>${localStorage.getItem(
                "user_name"
            )}님, 축하드려요!!!</b>
            <br/>처음으로 런닝 기록이 되었어요!!
            <br/>항상 멋진 런닝 보여주세요!</p>`;
            setTimeout(function () {
                running_wow.style.display = "none";
                wow_atitle.innerHTML = "";
            }, 2000);
        }
        close_madd();
    } else if (!adate) {
        alert("날짜를 입력하세요!");
        document.getElementById("radd_date").focus();
    } else if (!artime) {
        alert("시간을 입력하세요!");
        document.getElementById("run_time").focus();
        return;
    } else if (!arkm) {
        alert("km를 입력하세요!");
        document.getElementById("run_km").focus();
        return;
    }
}

function del_areco() {
    const rch_boxs = document.querySelectorAll(".rch-boxs");
    const itemsToDelete = [];

    rch_boxs.forEach((rch_box) => {
        if (rch_box.checked) {
            var value =
                rch_box.parentElement.parentElement.getAttribute("value");
            itemsToDelete.push(value);
        }
    });

    running = running.filter(
        (item) => !itemsToDelete.includes(item.no.toString())
    );

    localStorage.setItem("running", JSON.stringify(running));
    add_record();

    user_ckadd = running.filter((record) => record.id === loggedInUserId);
    welcome_run();
}

function close_madd() {
    running_modal.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    radd_form.reset();
}

function add_record() {
    recod_area.innerHTML = "";
    const userRecords = running.filter(
        (record) => record.id === loggedInUserId
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, userRecords.length);

    for (let i = startIndex; i < endIndex; i++) {
        const record = userRecords[i];
        const new_list = document.createElement("li");
        new_list.classList.add("run-card");
        new_list.innerHTML = `
            <div class="run-elem" value="${record.no}">
                <p class="run-date">${record.date}</p>
                <form class="relem-card">
                    <input type="checkbox" class="rch-boxs" />
                    <div class="run-car-el run-evn1">
                        <span class="run-time rcard-title">런닝시간</span>
                        <span class="run-time">${record.time}시간</span>
                    </div>
                    <div class="run-car-el run-evn2">
                        <span class="run-km rcard-title">런닝거리</span>
                        <span class="run-km">${record.km}km</span>
                    </div>
                    <div class="run-car-el run-evn3">
                        <span class="run-kcal rcard-title">소모칼로리</span>
                        <span class="run-kcal">${record.kcal}kcal</span>
                    </div>
                </form>
            </div>
        `;
        recod_area.appendChild(new_list);
        first_atitle.innerText = "";
    }

    updatePagination(userRecords);
}

function updatePagination(userRecords) {
    pageNumbers.innerHTML = "";
    const totalPages = Math.ceil(userRecords.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.classList.add("pbtn");
        pageButton.addEventListener("click", () => {
            currentPage = i;
            add_record();
        });
        pageNumbers.appendChild(pageButton);
    }

    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;

    document.getElementById("prevPage").onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            add_record();
        }
    };

    document.getElementById("nextPage").onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            add_record();
        }
    };
}

function welcome_run() {
    if (user_ckadd == 0) {
        first_atitle.innerText = `${localStorage.getItem(
            "user_name"
        )}님, 아직 등록된 런닝 데이터가 없습니다!`;
    }
}

window.onload = function () {
    add_record();
};
