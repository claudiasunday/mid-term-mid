const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".navLinks");

hamburguer.addEventListener ("click", () => {
    hamburguer.classList.toggle("active");
    navLinks.classList.toggle("active");
})


document.querySelectorAll(".navLinks").forEach(n => n.addEventListener ("click", () => {
    hamburguer.classList.remove("active");
    navLinks.classList.remove("active");
})
