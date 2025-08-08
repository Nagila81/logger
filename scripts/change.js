
var login = document.getElementById("login");

login.addEventListener("click", function(){
    var nova = document.getElementById("novaLogin").value;
    var confirma = document.getElementById("confirmaLogin").value;

    var novaRegister = sessionStorage.getItem("nova");
    var confirmaRegister = sessionStorage.getItem("confirma");

    if(nova === novaRegister && confirma === confirmaRegister){
        alert("Senha alterada com sucesso.");
        window.location.href = "../pages/change.html";
        return;
    }

    alert("Por gentileza, verificar se as senhas estão iguais!");

});