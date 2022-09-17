const menubtn = document.getElementById('menubtn')
const menulist = document.getElementById('menulist') 

menubtn.addEventListener("click",()=>{
    menulist.classList.toggle("show")
    menubtn.classList.toggle("active")
})



