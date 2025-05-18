import { slide1, slide2 } from "./informacoes.js"

const carrosel = document.getElementById("carrosel")
const setas = document.querySelectorAll(".seta");
const imagemProfessor = document.getElementById("imagem-professor")
const nomeprofessor = document.getElementById("professor");
const descricao = document.getElementById("descricao")
let slideAtual = 0;

setas[0].addEventListener("click", voltarCarrosel);
setas[1].addEventListener("click", avancaCarrosel);

function adicionarAnimacao() {
    setTimeout(() => {
        carrosel.classList.add("animacao-entrada");
    }, 70);
}

function removeAnimacao() {
   carrosel.classList.remove("animacao-entrada");
}

function avancaCarrosel() {

    slideAtual++
    if (slideAtual === 1) {
        removeAnimacao()
        adicionarAnimacao()
        imagemProfessor.src = slide2.imagem;
        nomeprofessor.innerHTML = slide2.professor;
        descricao.innerHTML = slide2.descricao;
        setas[1].classList.add("opacidade", "desativa-clique");
        setas[0].classList.remove("opacidade", "desativa-clique");
    }
}

function voltarCarrosel() {

    slideAtual--
    if (slideAtual === 0) {
        removeAnimacao()
        adicionarAnimacao()
        imagemProfessor.src = slide1.imagem;
        nomeprofessor.innerHTML = slide1.professor;
        descricao.innerHTML = slide1.descricao;
        setas[1].classList.remove("opacidade", "desativa-clique");
        setas[0].classList.add("opacidade", "desativa-clique");
    }
}