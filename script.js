
// captura de formulário e os campos 

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const dataNasc = document.getElementById("data-nascimento");
const emprego = document.getElementById("emprego");
const btnEnviar = document.getElementById("btnEnviar");

const msgGlobal = document.createElement("div");
msgGlobal.id = "mensagem-global";
document.querySelector(".formulario").prepend(msgGlobal);

function mostrarErro(campo, mensagem) {
  let spanErro = campo.nextElementSibling;
  if(!spanErro || !spanErro.classList.contains("erro")){
    spanErro = document.createElement("div");
    spanErro.classList.add("erro");
    campo.insertAdjacentElement("afterend", spanErro);
  }
    spanErro.textContent = mensagem;
    campo.classList.add("borda-erro");

    setTimeout(() => {
      limparErro(campo);
    }, 3000);
}
  function limparErro(campo) {
    let spanErro = campo.nextElementSibling;
    if (spanErro && spanErro.classList.contains("erro")){
      spanErro.textContent = "";
    }
    campo.classList.remove("borda-erro");
  }

  function validarCampos(){
    let valido = true;

    if (nome.value.trim() === ""){
      mostrarErro(nome, "O campo Nome é obrigatório.");
      valido = false;
    } else {
      limparErro(nome);
    }

    if (email.value.trim() === "") {
      mostrarErro(email, "O campo E-mail é Obrigatório.");
      valido = false;
    } else {
      limparErro(email);
    }

    if(dataNasc.value.trim() === "") {
      mostrarErro(dataNasc, "A data de Nascimento é Obrigatório.");
      valido = false;
    } else {
      limparErro(dataNasc);
    }
    
    if (emprego.value.trim() === "") {
      mostrarErro(emprego, "O campo de emprego é obrigatório");
      valido = false;
    } else {
      limparErro(emprego);
    }
    return valido;
  }

function mostrarMensagemGlobal(tipo, texto) {
  msgGlobal.textContent = texto;
  msgGlobal.className = tipo;
}

function limparCampos() {
  nome.value = "";
  email.value = "";
  dataNasc.value = "";
  emprego.value = "";
  mostrarMensagemGlobal("", "");
}



btnEnviar.addEventListener("click", function(e) {
  e.preventDefault();
  if (validarCampos()){
    mostrarMensagemGlobal("sucesso", "Cadastro enviado com sucesso");
    limparCampos();
  }else {
    mostrarMensagemGlobal("erro","Por favor, corrija os campos obrigatórios");
  }
});