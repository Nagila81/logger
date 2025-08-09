
var recovery = document.getElementById("recovery");

recovery.addEventListener("click", function(){
    var nova = document.getElementById("passwordRecovery").value;
    var confirma = document.getElementById("passwordConfirmarRecovery").value;

    if(nova != confirma){
      alert("Por gentileza, verificar se as senhas estão iguais!");
    return;  
    }
        
    sessionStorage.setItem("password", nova);
    
    alert("Senha redefinida com sucesso!");

    window.location.href = "../pages/login.html";

});