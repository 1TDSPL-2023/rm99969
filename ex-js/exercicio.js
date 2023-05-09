//EX 1 - MUDAR A COR DO BACKGROUND DO BODY (CONCLUÍDO)
const h2Element = document.getElementById("ex1");
const bodyElement = document.getElementById("body");

h2Element.addEventListener("click", ()=>{
    let r = ""
    let g = ""
    let b = ""
    
    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)

    bodyElement.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});

//EX 2 - CRIAR UM FORM COM BOTÃO "ENVIAR" QUE CRIA UMA LISTA (WIP)

//EX 3 -  CRIAR UM BOTÃO QUE TROCA UMA IMAGEM POR OUTRA
const h3Element = document.querySelector('#imgBtn');

h3Element.addEventListener("click", ()=>{
    const imgElement = document.getElementById("imgEx3");
    imgElement.src = "../img/lobo1.jpg"
    h3Element.innerHTML = "Clique novamente para voltar a imagem"

    h3Element.addEventListener("click", ()=>{
        imgElement.src = "../img/logo.png"
        h3Element.innerHTML = "Clique aqui para trocar de imagem"
    });
});


//EX 4 - CRIAR UM BOTÃO QUE ADICIONA UMA MENSAGEM EM ALGUM ELEMENTO
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", ()=>{
    const msgElement = document.getElementById("msg");
    msgElement.innerHTML = "Número aleatório: " + Math.round(Math.random()*1000);
});

//EX 5 - CRIAR UM BOTÃO QUE OCULTA ALGUM ELEMENTO DA PÁGINA
const hideBtn = document.getElementById("hideBtn");
const gif = document.getElementById("gifEmoji")
hideBtn.addEventListener("click", ()=>{
    if (gifEmoji.style.display === "none") {
        gifEmoji.style.display = "block";
        hideBtn.value = "Clique aqui para esconder o gif abaixo!"
      } else {
        gifEmoji.style.display = "none";
        hideBtn.value = "Clique novamente para mostrar o gif!"
      }
});