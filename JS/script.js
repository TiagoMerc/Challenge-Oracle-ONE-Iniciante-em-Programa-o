
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); //pega a class que eu criei "saida" que é onde vai sair o resultado da regra de criptografia conforme o que o usuário digitou

const cript = document.querySelector(".crip"); //Variável para ação no botão "Criptografar" quando o usuário clicar


let descripText; 

//Função para criptografar
function criptografar() {
  if(input.value !="") {

    // As "chaves" de criptografia que utilizaremos são:
     descripText = input.value.replace(/e/, "enter"); //`A letra "e" é convertida para "enter"`
      descripText = descripText.replace(/i/g, "imes"); //`A letra "i" é convertida para "imes"`

     result.textContent = descripText; //mostrar o resultado do input
     input.value = "";
  }
}

cript.addEventListener("click", criptografar); // depois do usuário digitar no textarea e clicar no botão "criptografar", vai aparecer o reusltado