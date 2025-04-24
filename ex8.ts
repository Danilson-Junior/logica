// Função que soma os elementos de um array de forma iterativa
function sumArray(array: number[]): number {
    let sum: number = 0; // Inicializa a variável de soma

    // Laço para percorrer cada elemento do array
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // Adiciona o valor do elemento atual à soma
    }

    return sum; // Retorna o valor total da soma
}

// Função de soma utilizando arrow function
const sumArrayA = (array: number[]): number => {
    let sum: number = 0; // Inicializa a variável de soma

    // Laço para percorrer cada elemento do array
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // Adiciona o valor do elemento atual à soma
    }

    return sum; // Retorna o valor total da soma
}

// Função recursiva para somar os elementos do array
function sumArrayR(array: number[], index: number = 0, sum: number = 0): number {
    // Caso base: se o índice atingiu o final do array, retorna a soma acumulada
    if (index === array.length) {
        return sum;
    }

    sum += array[index]; // Adiciona o valor do elemento atual à soma

    // Chama a função recursivamente, avançando para o próximo índice
    return sumArrayR(array, index + 1, sum);
}

// Testando as funções
console.log(sumArray([1, 2, 3]));       // 6 (Soma: 1 + 2 + 3)
console.log(sumArrayA([10, -2, 5]));    // 13 (Soma: 10 + (-2) + 5)
console.log(sumArrayR([4, 4, 4]));      // 12 (Soma: 4 + 4 + 4)
