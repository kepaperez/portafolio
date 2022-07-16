//navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


function copyToClipBoard() {

    var content = "kepaperez2001@gmail.com";
    
    navigator.clipboard.writeText(content)
    .then(() => {
        console.log('Correo copìado en el portapapeles');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });

    alert("Correo copìado en el portapapeles!");
}