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
/* adiciona mascara para rg
 * Cada estado têm regras e quantidades diferentes de números no registro. Por isso,
 *não há uma maneira confiável de fazer a validação do mesmo.
 */
 function MascaraRg(event,errChar='?'){
    
    const v0 = event.currentTarget.value;
     
     console.log(event);
     const v = v0.toUpperCase().replace(/[^\dX]/g,'');
     event.currentTarget.value = (v.length==8 || v.length==9)?
     v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'):
     (""+v0);
     return (v.length==8 || v.length==9)?
        v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'):
        (errChar)
     ;
 
 } 
 /* adiciona mascara para rg
  * Cada estado têm regras e quantidades diferentes de números no registro. Por isso,
  *não há uma maneira confiável de fazer a validação do mesmo.
  */
  function MascaraCPF(event,errChar='?'){
     const v0 = event.currentTarget.value;
     console.log(v0);
     const v = v0.toUpperCase().replace(/[^\dX]/g,'');
     event.currentTarget.value = (v.length==11 )?
     v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,'$1.$2.$3-$4'):
     (errChar+v0);
     return v;
     ;
 
 } 
 