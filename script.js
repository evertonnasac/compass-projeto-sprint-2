const menu = document.querySelector(".menu-left")
const btnExit = document.querySelector(".exit-menu")
const btnShow = document.querySelector(".menu-mobile")

btnExit.addEventListener("click", ()=>{
    menu.classList.toggle("menu-active")
})


btnShow.addEventListener("click", ()=>{
    menu.classList.toggle("menu-active")
})