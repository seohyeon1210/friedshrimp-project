const honeytopBtn = document.querySelector(".top-btn");
honeytopBtn.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});