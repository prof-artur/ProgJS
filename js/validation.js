let nomeIsOk;
function validaEmail(event){
    // pega o valor digitado no elemento input
    const inputEmail = event.target;
    // cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
    // se o email estiver correto muda a cor para verde
    if(regex.test(inputEmail.value)){
       
        inputEmail.style.color = "green";
    }
    // caso contrário, para vermelho
    else 
        inputEmail.style.color = "red";
}
function validaTelefone(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formatedPhone);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}
function validaRenda(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d+)(\d{0,2})/);
    console.log(formatedPhone);
    // inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}
function validaCPF(event){
    const inputCPF = event.target;
    let formatedCPF = inputCPF.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    inputCPF.value = !formatedCPF[2]?formatedCPF[1]:formatedCPF[1] + '.'+formatedCPF[2] +(formatedCPF[3] ? '.' + formatedCPF[3] : '')+(formatedCPF[4] ? '-' + formatedCPF[4] : '');

}
function mostrarSenha(event){
    let inputSenha = document.getElementById('senha');
    console.log(inputSenha);
    if(inputSenha.type === "password"){
        inputSenha.type = "text";
        event.target.innerHTML = "ocultar senha" 

    }
    else{

        inputSenha.type = "password";
        event.target.innerHTML = "ver senha" 
    }

}
function fazerLogin(event){
    let inputSenha = document.getElementById('senha');
    let inputUser = document.getElementById('user');
    let msgErro = document.getElementById('msgErro');
    const senha = "123456";
    const user = "docarmo";
    if((inputUser.value === user)&&(inputSenha.value === senha)){
        // alert("Bem Vinda Do Carmo!");
        inputSenha.style.borderColor = "#195EBA";
        inputUser.style.borderColor = "#195EBA";  
        msgErro.hidden = true;
    }
    else{
        // alert("Usuário ou senha incorretos");
        
        msgErro.hidden = false;
        inputSenha.style.borderColor = "#D93900";
        inputUser.style.borderColor = "#D93900";  

    }
}
function validaForm(event){

}
