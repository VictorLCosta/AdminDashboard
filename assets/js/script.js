let menuBtn = document.querySelector("[data-menu-toggle-btn]")
var header = document.querySelector(".header")

menuBtn.onclick = () => {
    header.classList.toggle("active")
}