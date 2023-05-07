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
const addInput = document.querySelector('#idNome');
const divList = document.querySelector('#listHolder')

const formElement = document.getElementById("form");
formElement.addEventListener("submit", ()=>{
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.innerHTML;
    addInput.value = '';
    ul.appendChild(li);
});