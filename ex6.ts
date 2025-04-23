// Função que encontra o menor valor em um array de números
function mv(array: number[]): number {
    // Inicializa a variável 'm' com o primeiro elemento do array
    let m: number = array[0];

    // Laço que percorre o array a partir do segundo elemento
    for (let i = 1; i < array.length; i++) {
        // Se o elemento atual for menor que 'm', atualiza 'm'
        if (array[i] < m) {
            m = array[i];
        }
    }

    // Retorna o menor valor encontrado
    return m;
}

// Testes da função tradicional
console.log(mv([1, 2, 3, 4, 5, -55]));  // Saída esperada: -55
console.log(mv([10, 5, 3, 9, 7]));      // Saída esperada: 3


// Versão da função 'mv' usando arrow function
const mvA = (array: number[]): number => {
    let m: number = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < m) {
            m = array[i];
        }
    }
    return m;
}

// Testes da arrow function
console.log(mvA([99, 100, 5, 6]));      // Saída esperada: 5
console.log(mvA([0, -1, -2, -3]));      // Saída esperada: -3



// Função recursiva para encontrar o menor valor em um array de números
function mvRec(array: number[], index: number = 0, m: number = array[0]): number {
    // Caso base: se o índice atingir o final do array, retorna o menor valor encontrado
    if (index === array.length) {
        return m;
    }
    
    // Se o elemento atual for menor que 'm', atualiza 'm'
    if (array[index] < m) {
        m = array[index];
    }

    // Chama a função recursivamente para o próximo índice
    return mvRec(array, index + 1, m);
}

// Testes da função recursiva
console.log(mvRec([1, 2, 3, 4, 5, -55]));  // Saída esperada: -55
console.log(mvRec([10, 5, 3, 9, 7]));      // Saída esperada: 3
