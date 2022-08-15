let menuBtn = document.querySelector("[data-menu-toggle-btn]")
var header = document.querySelector(".header")

menuBtn.onclick = () => {
    header.classList.toggle("active")
}

var cardMenuBtn = document.querySelector("[data-menu-btn]")
var ctxMenu = document.querySelector("[data-ctx-menu]")

cardMenuBtn.onclick = () => {
    ctxMenu.classList.toggle("active")
}