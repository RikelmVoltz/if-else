/*
let condicao1 = true

if (condicao1){
    // se o valor da condiçao e verdadeiro
    // o codigo e executado
    console.log('entrei no if1!')
}

let condicao2 = false

if (condicao2){
    // se o valor da condiçao e falso
    // o codigo não e executado
    console.log('entrei no if2!')
}
// EXERCICIO1

function number(num1,num2){
   if (num1 === num2){
    return 'Sucesso';
   }
    
}

console.log(receberDoisNumeros(Number(prompt("digite um numero")),
                       Number(prompt("digite outro numero"))
)
);

// EXERCICIO 1.1

function textoNumero(nome,idade){
 if (idade>= 18){
    return  nome + ' voce ja pode dirigir ';
 }   
}

console.log(textoNumero(
    prompt("digite seu nome"),
    Number(prompt("digite sua idade"))
)
);



let condicao = false

if (condicao){
    console.log('entrei no if1');
}else {
    // como o valor da condicao é false
    // o codigo do bloco else será executado
    console.log('entrei no else!')
}




function number(num1,num2){
    if (num1 === num2){
     return 'os numeros sao iguais';
    } else {
        return 'os numeros nao sao iguais'
     
 }
}
 
console.log(number(Number(prompt("digite um numero")),
                        Number(prompt("digite outro numero"))
 )
 );
 

 function number(num1,num2){
    if (num1 === num2){
     return 'os numeros sao iguais';
    } else if (num1 > num2){
        return 'o primeiro numero é maior que o segundo'
    } else{
        return 'o primeiro é menor que o segundo'
    }
    
     
 }

 
console.log(number(Number(prompt("digite um numero")),
                        Number(prompt("digite outro numero"))
 )
 );
 

 let paisOrigem
 switch (paisOrigem) {
    case 'brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte americano')
        break
       
    default:
        console.log('nacionalidade não encontrada')
        break
 }

let pokemon
switch (pokemon){
case 'bulbasauro':
    console.log('planta e veneno')
    break
case 'charmander':
    console.log('fogo')
    break
case 'squirtle':
    console.log('agua')
    break
  
 default:
    console.log('nenhum pokemon escolhido')   


 }
 */

 function info(ensinomedio,mais18,outrafacu){
     if (ensinomedio == 'sim' && mais18 >= 18 && outrafacu == 'nao'){
        return 'pode estudar na faculdade';
     }else{return "nao pode estudar na faculdade"}
 }

 console.log(info(
    prompt('concluiu ensino medio?').toLocaleLowerCase();
    Number(prompt('sua idade')),
    prompt('esta cursando outra faculdade?').toLocaleLowerCase();
 ));
 
