const menuIcon = document.querySelector("#menu-icon")
const menu = document.querySelector("#menu")
const closeIcon = document.querySelector("#closeIcon")


menuIcon.addEventListener("click",function(){
    menu.style.display = "flex";
    closeIcon.style.display = "block"
    menuIcon.style.display = "none"
})

closeIcon.addEventListener("click", ()=>{
    menu.style.display = "none";
    closeIcon.style.display = "none"
    menuIcon.style.display ="block"
})

// normal funs=tion
// let changeicon=function(iconButton){
//     iconButton.classlist.toggle('fa-times')
// }