const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".link");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

function openAccount() {
    alert("Welcome to Stackly SecureBank!\nLet's open your account.");
}