
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); //pega a class que eu criei "saida" que é onde vai sair o resultado da regra de criptografia conforme o que o usuário digitou
//const inverso = document.querySelector(".saida");

const cript = document.querySelector(".crip"); //Variável para ação no botão "Criptografar" quando o usuário clicar
const descript = document.querySelector(".descrip");

let cripText; 
//let descripText
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
     input.value = "";
  }
}

//Função para descriptografar
function descriptografar() {
  if(input.value !="") {
    cripText = input.value.replace(/enter/g, "e");
    cripText = cripText.replace(/imes/g, "i");
    cripText = cripText.replace(/ai/g, "a");
    cripText = cripText.replace(/ober/g, "o");
    cripText = cripText.replace(/ufat/g, "u");
    
    result.textContent = cripText;
    input.value = "";  
  }
}

cript.addEventListener("click", criptografar); // depois do usuário digitar no textarea e clicar no botão "criptografar", vai aparecer o reusltado

descript.addEventListener("click", descriptografar);