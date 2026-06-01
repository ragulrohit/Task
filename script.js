const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".link");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

function openAccount() {
    alert("Welcome to Stackly SecureBank!\nLet's open your account.");
}