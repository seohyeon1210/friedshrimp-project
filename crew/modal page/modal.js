const button = document.querySelector("button");
const dialog = document.querySelector("dialog");

button.addEventListener("click" , ()=>{
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    console.log(dialog.returnValue);
});