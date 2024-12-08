const hamburgerBtn = document.querySelector("header nav button:first-of-type");
const navEL = document.querySelector("main > ul");
const bodyEl = document.body

console.log(hamburgerBtn); 
console.log(navEL);  

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openMenu);
}

function openMenu() {
    navEL.classList.toggle("active");
    bodyEl.classList.toggle('no-scroll')
}