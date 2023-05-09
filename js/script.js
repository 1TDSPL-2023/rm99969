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

const imgElements = [...document.querySelectorAll(".conteudo img")];
imgElements.forEach((img)=>{
    img.setAttribute("style", "width:30%")
});
