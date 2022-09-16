const menu = document.querySelector(".menu-left")
const btnExit = document.querySelector(".exit-menu")
const btnShow = document.querySelector(".menu-mobile")
const btnContact = document.querySelector(".btn-contact-header")
const btnContactIndex = document.querySelector(".btn-index-cont")
const btnIndexScroll = document.querySelector(".btn-scroll-down")
const btnRecentWork = document.querySelector(".btn-recent-work")
const linkLogo = document.querySelector(".content-logo")
const linkLogoLeft = document.querySelector(".box-logo-menu")

if(btnExit){

    btnExit.addEventListener("click", ()=>{
        menu.classList.toggle("menu-active")
    })
    
}

if(btnShow){
    btnShow.addEventListener("click", ()=>{
        menu.classList.toggle("menu-active")
    })
    
}

if(btnContact){
    btnContact.addEventListener("click", ()=>{
        window.location.href = "../../error.html"
    })
    
}

if(btnContactIndex){
    btnContactIndex.addEventListener("click", ()=>{
        window.location.href = "./error.html"
    })   
    
}

if(btnIndexScroll){
    btnIndexScroll.addEventListener("click",()=>{
        window.location.href="./pages/home/who-we-are.html"
    })
}

if(btnRecentWork){
    btnRecentWork.addEventListener("click",()=>{
        window.location.href= "./error.html"
    })
}

if(linkLogo){
    linkLogo.addEventListener("click", ()=>{
        try{
            window.location.href = "../../index.html"
        }
        catch(err){}
    })
}

if(linkLogoLeft){
    linkLogoLeft.addEventListener("click", ()=>{
        try{
            window.location.href = "../../index.html"
        }
        catch(err){}
    })
}

