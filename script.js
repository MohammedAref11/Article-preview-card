const shareBtn = document.getElementById("shareBtn"); 
const shareCon = document.querySelector(".shareitems-container")


shareBtn.addEventListener("click", () => { 
    shareCon.classList.toggle("hide")    
    shareCon.classList.toggle("show")    
})