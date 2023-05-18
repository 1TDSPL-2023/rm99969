let listaDeUsuarios = [
    {
        nomeCompleto : "Edulado Capacho",
        emailUsuario : "dudu@email.com",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "José das Couves",
        emailUsuario : "jose@email.com",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Paulo Cabuloso",
        emailUsuario : "paulo@email.com",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Leonaldo Tufo",
        emailUsuario : "lele@email.com",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Mathias Aires",
        emailUsuario : "momo@email.com",
        senhaUsuario : "123456"
    }
];
//ADICIONANDO A LISTA DE USUARIOS NO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

//RECUPERANDO OS ITENS DOS INPUTS DOS FORM
const inputEmail = document.querySelector('#idEmail');
const inputSenha = document.querySelector('#idPass');
const msgStatus = document.querySelector('#msg')

//CAPTURA DE TODOS OS ELEMENTOS
addEventListener("click",(evt)=>{
    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value 
    }
    let usuarioValidado = {};
    //CAPTURA DE UM EVENTO DOM
    if (evt.target.id == "btnSubmit") {
        //RECUPERANDO A LISTA DO LOCAL-STORAGE
        let listaDosUsuarios = JSON.parse(localStorage.getItem("listaUser"));

        for (let x = 0; x < listaDeUsuarios.length; x++) {
            if(usuarioLogado.emailUsuarioLogado == listaDosUsuarios[x].emailUsuario && usuarioLogado.senhaUsuarioLogado == listaDosUsuarios[x].senhaUsuario){
                usuarioValidado = listaDosUsuarios[x];
                break;
            };
        };
        if (usuarioLogado.emailUsuarioLogado == usuarioValidado.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuarioValidado.senhaUsuario) {
            msgStatus.setAttribute("style", "color:green");
            msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} logou com sucesso!</strong></span>`;
            //Redirecionamento
            window.location.href = "../index.html"
        }else{
            msgStatus.setAttribute("style", "color:red");
            msgStatus.innerHTML = `<span><strong>Não conheço ninguém com esses dados...</strong></span>`
        };
    }
});