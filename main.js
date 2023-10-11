//alert("Hello World!")

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);

function verifyNum(value){
    return typeof value === 'number' ? "É um Número": "Não é um Número";
}

function verifyStr(value){
    return typeof value === 'string' ? "É uma String": "Não é uma String";
}

function verifyBool(value){
    return typeof value === 'boolean' ? "É um Boolean": "Não é um Boolean";
}

function verifyPar(value){
    return value %  2 === 0 ? "É um numero par" : "Não é um numero par"
}

function verifyImpar(value){
    return value %  2 !== 0 ? "É um numero ímpar" : "Não é um numero ímpar"
}

let valueTest = 99;
console.log(verifyNum(valueTest));
console.log(verifyStr(valueTest));
console.log(verifyBool(valueTest));
console.log(verifyPar(valueTest));
console.log(verifyImpar(valueTest));