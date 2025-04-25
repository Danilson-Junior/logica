// Enunciado:
// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Se não houver um segundo maior (por exemplo, se todos os números forem iguais ou houver apenas um número), retorne um valor indicativo, como -Infinity ou -1.

// Primeira solução: usando -Infinity
function segundo(array: number[]): number {
    let maior: number = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    let segMaior: number = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > segMaior && array[i] !== maior) {
            segMaior = array[i];
        }
    }
    return segMaior;
}

console.log(segundo([5, 3, 2, 4]));       // Esperado: 4
console.log(segundo([1, 1, 2, 2, 10]));   // Esperado: 2
console.log(segundo([10, 10, 10]));       // Esperado: -Infinity (não há segundo maior)









// Segunda solução: sem usar -Infinity
function segundo2(array: number[]): number {
    // Verificar se o array tem pelo menos dois números
    if (array.length < 2) {
        console.log("Não há segundo maior número");
        return -1;
    }

    let maior: number = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    let newArray: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== maior) {
            newArray.push(array[i]);
        }
    }

    // Verificar se o novo array tem algum valor
    if (newArray.length === 0) {
        console.log("Não há segundo maior número");
        return -1;
    }

    maior = newArray[0];
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] > maior) {
            maior = newArray[i];
        }
    }
    return maior;
}

console.log(segundo2([5, 3, 2, 4]));      // Esperado: 4
console.log(segundo2([1, 1, 2, 2, 10]));  // Esperado: 2
console.log(segundo2([10, 10, 10]));      // Esperado: -1
console.log(segundo2([1]));               // Esperado: -1
