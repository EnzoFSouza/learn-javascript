let nome = prompt("Digite seu nome: ");
let num1 = parseFloat(prompt("Digite um numero: "));
let num2 = parseFloat(prompt("Digite outro numero: "));

console.log("Olá " + nome + ", seu nome possui " + nome.length + " caracteres");

console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + (num1 * num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2));
console.log("O resto da divisão entre " + num1 + " e " + num2 + " é " + (num1 % num2));
console.log(num1 + " é maior que " + num2 + "? " + (num1 > num2));
console.log(num1 + " é menor que " + num2 + "? " + (num1 < num2));
console.log(num1 + " é igual a " + num2 + "? " + (num1 == num2));