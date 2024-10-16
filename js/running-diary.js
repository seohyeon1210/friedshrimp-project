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
const paginationControls = document.getElementById("paginationControls");
const pageNumbers = document.getElementById("pageNumbers");

const running = JSON.parse(localStorage.getItem("running")) || [];
const loggedInUserId = "user123";

let currentPage = 1;
const itemsPerPage = 4;

if (running == "") {
    first_atitle.innerText = `${localStorage.getItem(
        "user_name"
    )}님, 아직 등록된 런닝 데이터가 없습니다!`;
}

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

function add_rrecode() {
    var adate = radd_date.value;
    var artime = run_time.value;
    var arkm = run_km.value;

    if (adate && artime && arkm) {
        running.push({
            no: running.length > 0 ? running[running.length - 1].no + 1 : 0,
            id: loggedInUserId,
            date: adate,
            time: artime,
            km: arkm,
            kcal: arkm * 75,
        });
        localStorage.setItem("running", JSON.stringify(running));
        renderRecords();
        close_madd();
    } else {
        alert("빈 칸이 존재합니다! 전부 입력하세요!!");
    }
}

function del_areco() {
    const rch_boxs = document.querySelectorAll(".rch-boxs");
    rch_boxs.forEach((rch_box) => {
        if (rch_box.checked) {
            const index = [
                ...rch_box.parentElement.parentElement.parentElement
                    .parentElement.children,
            ].indexOf(rch_box.parentElement.parentElement.parentElement);
            running.splice(index, 1);
            localStorage.setItem("running", JSON.stringify(running));
            if (running == "") {
                first_atitle.innerText = `${localStorage.getItem(
                    "user_name"
                )}님, 아직 등록된 런닝 데이터가 없습니다!`;
            }
        }
    });
    renderRecords();
}

function close_madd() {
    running_modal.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    radd_form.reset();
}

function renderRecords() {
    recod_area.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, running.length);

    for (let i = startIndex; i < endIndex; i++) {
        const record = running[i];
        const new_list = document.createElement("li");
        new_list.classList.add("run-card");
        new_list.innerHTML = `
            <div class="run-elem">
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

    updatePagination();
}

function updatePagination() {
    pageNumbers.innerHTML = "";
    const totalPages = Math.ceil(running.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.classList.add("pbtn");
        pageButton.addEventListener("click", () => {
            currentPage = i;
            renderRecords();
        });
        pageNumbers.appendChild(pageButton);
    }

    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;

    document.getElementById("prevPage").onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderRecords();
        }
    };

    document.getElementById("nextPage").onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderRecords();
        }
    };
}

window.onload = function () {
    renderRecords();
};
