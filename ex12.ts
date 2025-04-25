// Enunciado:
// Crie uma função que calcule a soma dos dígitos de um número. 
// Implemente duas versões da função:
// 1. Usando operações matemáticas, como divisão e módulo, para extrair cada dígito e somá-los.
// 2. Usando conversão de tipo, convertendo o número em uma string, percorrendo cada caractere,
//    convertendo de volta para número e somando os valores.

function somaDigitos(n: number): number{
    let digitos: number = 0;

    // Conta o número de dígitos do número.
    for (let i = n; i >= 1; i = Math.floor(i / 10)) {
        digitos++;
    }

    let aux = 0;
    let soma = 0;
    let copia = n;

    // Percorre cada dígito e soma.
    for(let i = digitos; i > 0; i--){
        aux = copia % 10; // Extrai o último dígito.
        soma += aux;      // Soma o dígito.
        copia = Math.floor(copia / 10);  // Remove o último dígito.
    }
    return soma; // Retorna a soma dos dígitos.
}

console.log(somaDigitos(505)); // 10


function somaDigitosFacil(n: number): number{
    let str = n.toString(); // Converte o número em uma string.
    let soma: number = 0;

    // Percorre cada caractere da string, converte para número e soma.
    for(let i = 0; i < str.length; i++){
        soma += Number(str[i]);
    }
    return soma; // Retorna a soma dos dígitos.
}

console.log(somaDigitosFacil(505));  // 10
