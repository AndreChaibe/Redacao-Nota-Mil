const botaoHamburguer = document.getElementById("botao-menu-hamburguer");
const miniMenu = document.getElementById("mini-menu");
const botaoFecharMenu = document.querySelector("#botao-fechar-menu")

botaoHamburguer.addEventListener("click", () => {
    miniMenu.classList.toggle("escondido-menu");

    if (miniMenu.classList.contains("escondido-menu") == false) {
        botaoHamburguer.classList.add("esconder");
        botaoFecharMenu.classList.remove("esconder")
    } 
});

botaoFecharMenu.addEventListener("click", () => {
    miniMenu.classList.toggle("escondido-menu")
    if (miniMenu.classList.contains("escondido-menu")) {
        botaoHamburguer.classList.remove("esconder");
        botaoFecharMenu.classList.add("esconder")
    } 
});