const nome = "Gerson";
const idade = 33;
const nome1 = "GersonES";
const idade1 = 64;

function printData2(idade, idade1){
    const result = idade + idade1
    return result
}
const soman1en2 = printData2(idade, idade1);

console.log("soma das idades = " +  soman1en2)

function printData(){
    console.log("Nome: " + nome)
    console.log("idade: " + idade)
    console.log("soma das idades = ta errado" + idade + idade1)
}



printData();

function printData1(){
    console.log("Nome: " + nome)
    console.log("idade: " + idade)
}

printData1();

function parimpar(n){
    if(n%2==0){
        return `par`
     } else {  
        return `impar`    
    }
}

console.log(parimpar(3));
console.log(parimpar(4));

function soma1(n1=0, n2=0){
    return n1 + n2
}
console.log("soma1 = " + soma1(2))
console.log("soma1 = " + soma1(1957, 64))

function soma(n1, n2){
    return n1 + n2
}
console.log("soma = " + soma(2, 3))
console.log("soma = " + soma(1957, 64))

let v = function(x){return x*2}
console.log(v(5))

function fatorial(n){
    printInicio()
    let fat = 1
    for (let c = n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}
console.log("o Fatorial é "  + fatorial(5))
function printInicio(){console.log("inicio")}