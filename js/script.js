const form = document.getElementById("form");

form.addEventListener('submit', (e) => { 
e.preventDefault();

let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;

let dados = {
    nome,
    email
}

let converterDados = JSON.stringify(dados);

localStorage.setItem('lead', converterDados);

alert("Parabéns! \nNome e E-mail cadastrados com sucesso. \nAproveite a promoção e boa leitura!!!");

});