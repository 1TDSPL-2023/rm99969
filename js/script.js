const h2Element = document.getElementById("titulo");
h2Element.addEventListener("click", ()=>{
    // alert("Baby, I'm preying on you tonight \nHunt you down eat you alive \nJust like animals \nAnimals \nLike animals-mals");
    let r = ""
    let g = ""
    let b = ""
    
    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)

    h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);
});

// const imgElements = [...document.querySelectorAll(".conteudo img")];
// imgElements.forEach((img)=>{
//     img.setAttribute("style", "width:30%");
// });

const inputUser = document.querySelector("input[type='email']");
inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000");
});

inputUser.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']")
    if(inputUser.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ff0000;'>E-mail: (Mínimo de 5 caractéres) </span>"
        inputUser.setAttribute("style", "outline-color:#ff0000");
    } else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>E-mail: </span>"
        inputUser.setAttribute("style", "outline-color:#00ff00");
    }
});

const eyePass = document.querySelector(".fa-eye");
eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idSenha");
    if (inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash")
    } else {
        inputPass.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye")
    }
});