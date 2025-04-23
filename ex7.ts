// Função que encontra o maior número em um array
function bNumber(array: number[]): number {
    // Inicializa a variável 'm' com o primeiro elemento do array
    let m: number = array[0];

    // Percorre o array a partir do segundo elemento (índice 1)
    for (let i = 1; i < array.length; i++) {
        // Se o elemento atual for maior que o valor armazenado em 'm',
        // então atualiza 'm' com esse novo valor
        if (array[i] > m) {
            m = array[i];
        }
    }

    // Retorna o maior valor encontrado no array
    return m;
}

console.log(bNumber([10, 20, 5, 90, 2])); // Deve imprimir 90
console.log(bNumber([-10, -5, -1, -99])); // Deve imprimir -1




// Função arrow que encontra o maior número em um array
const bNumberA = (array: number[]): number => {
    // Inicializa 'm' com o primeiro elemento do array
    let m: number = array[0];

    // Percorre o array a partir do índice 1 até o final
    for (let i = 1; i < array.length; i++) {
        // Se o valor atual for maior que o valor de 'm',
        // atualiza 'm' com esse valor
        if (array[i] > m) {
            m = array[i];
        }
    }

    // Retorna o maior valor encontrado
    return m;
};

console.log(bNumberA([3, 8, 1, 9, 4]));   // Deve imprimir 9
console.log(bNumberA([-20, -5, -1, -15])); // Deve imprimir -1


// Função recursiva para encontrar o maior número em um array
function bNumberR(array: number[], index: number = 0, m: number = array[0]): number {
    
    // Caso base: se o índice atingiu o final do array, retornamos o maior número encontrado até aqui
    if (index === array.length) {
        return m;
    }

    // Se o valor atual for maior que o maior encontrado até agora, atualizamos 'm'
    if (array[index] > m) {
        m = array[index];
    }

    // Chamada recursiva: avança para o próximo índice, levando o maior valor encontrado até o momento
    return bNumberR(array, index + 1, m);
}
console.log(bNumberR([3, 10, 7, 20, 5]));   // Deve retornar 20
console.log(bNumberR([-2, -10, -1, -5]));   // Deve retornar -1
