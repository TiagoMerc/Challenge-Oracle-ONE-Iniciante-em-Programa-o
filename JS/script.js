
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); //pega a class que eu criei "saida" que é onde vai sair o resultado da regra de criptografia conforme o que o usuário digitou
//const inverso = document.querySelector(".saida");
const cript = document.querySelector(".crip"); //Variável para ação no botão "Criptografar" quando o usuário clicar
const descript = document.querySelector(".descrip"); //variável para ação no botão "Descriptografar" quando o usuário clicar
const copiar = document.querySelector(".copy"); //Variável para ação no botão "Copiar" quando o usuário clicar


let cripText; //Variável para receber as regras de criptografia

//Função para criptografar
function criptografar() {
  if(input.value !="") {

    // As "chaves" de criptografia que utilizaremos são:
     cripText = input.value.replace(/e/g, "enter"); //`A letra "e" é convertida para "enter"`
     cripText = cripText.replace(/i/g, "imes"); //`A letra "i" é convertida para "imes"`
     cripText = cripText.replace(/a/g, "ai"); // `A letra "a" é convertida para "ai"`
     cripText = cripText.replace(/o/g, "ober"); //`A letra "o" é convertida para "ober"`
     cripText = cripText.replace(/u/g, "ufat"); //`A letra "u" é convertida para "ufat"`

     result.textContent = cripText; //mostrar o resultado do input
     copiar.classList.add("showbutton"); //copiar o resultado 
     input.value = "";
     result.img1="none";
  }
}

//Função para descriptografar
/*Por exemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`
*/
function descriptografar() {
  if(input.value !="") {
    cripText = input.value.replace(/enter/g, "e"); //`A palavra "enter" é convertida para "e"`
    cripText = cripText.replace(/imes/g, "i"); //`A palavra "imes" é convertida para "i"`
    cripText = cripText.replace(/ai/g, "a"); //`A palavra "ai" é convertida para "a"`
    cripText = cripText.replace(/ober/g, "o"); //`A palavra "ober" é convertida para "o"`
    cripText = cripText.replace(/ufat/g, "u"); //`A palavra "ufat" é convertida para "u"`
    
    result.textContent = cripText;
    copiar.classList.add("showbutton"); //copiar o resultado 
    input.value = "";  

  }  
}

//Função para copiar o resultado da criptografia
function copiarResultado(){
  navigator.clipboard.writeText(result.textContent)
  alert("Mensagem copiada!"); //Alerta quando o usuaário clicar no botão "Copiar"
 //document.location.reload(true); // Recarrega a página atual sem usar o cache
}


//Eventos conforme o usuário clique nos botões na tela
cript.addEventListener("click", criptografar); // depois do usuário digitar no textarea e clicar no botão "criptografar", vai aparecer o resultado

descript.addEventListener("click", descriptografar); // depois do usuário copiar o resultado da criptografia, ele coloca o resultado no textarea e clica no botão "descriptografar", vai aparecer o resultado da descriptografia. Dessa forma, o usuário vai desconbrir a mensagem secreta

//Botão copiar
copiar.addEventListener("click", copiarResultado); // Copiar para a área de tranferência o reusltado da criptografia ou descriptografia para que o usuário consiga saber a mensagem criptografada
