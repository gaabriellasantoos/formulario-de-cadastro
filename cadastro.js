function Validar(){
    let email = document.getElementById('email').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let data = document.getElementById('data').value;
    let CPF = document.getElementById('CPF').value;
    let cidade = document.getElementById('cidade').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let senha = document.getElementById('senha').value;
    let Bairro = document.getElementById('Bairro').value;
    let estado = document.getElementById('estado').value;


    if(!email || !nome || !telefone || !data || !CPF || !cidade || !rua || !numero || !senha || !Bairro || !estado){
        alert("Campos preenchidos obrigatório. Favor preencher");
    }else{
        alert("Campos preenchidos com sucesso!");
    }

}
