let ListMenuIcon = document.getElementById("menulist");
let navList = document.getElementById("nav-bar");
let navClick = navList.querySelectorAll("li");

ListMenuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
    ListMenuIcon.classList.toggle("fa-times");
});

navClick.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navList.classList.remove("active");
        ListMenuIcon.classList.toggle("fa-times");
    });
});