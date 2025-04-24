// Função que conta as ocorrências de um número e suas posições de forma iterativa
function countOccurrences(array: number[], n: number): [number, number[]] {
    let oc: number = 0; // Variável para armazenar a quantidade de ocorrências
    let positions: number[] = []; // Array para armazenar os índices das ocorrências

    // Laço para percorrer o array e contar as ocorrências e armazenar as posições
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) { // Se o elemento do array for igual ao número procurado
            oc++; // Incrementa a contagem
            positions.push(i); // Adiciona a posição (índice) ao array de posições
        }
    }

    return [oc, positions]; // Retorna o número de ocorrências e os índices
}

// Função equivalente à anterior, mas utilizando arrow function
const countOccurrencesA = (array: number[], n: number): [number, number[]] => {
    let oc: number = 0; // Variável para contar as ocorrências
    let positions: number[] = []; // Array para armazenar as posições das ocorrências

    // Laço para percorrer o array e contar as ocorrências e armazenar as posições
    for (let i: number = 0; i < array.length; i++) {
        if (n === array[i]) { // Se o número na posição atual for igual ao valor n
            oc++; // Incrementa a contagem de ocorrências
            positions.push(i); // Armazena o índice da ocorrência
        }
    }

    return [oc, positions]; // Retorna a quantidade de ocorrências e os índices
}

// Função recursiva que conta as ocorrências e as posições de um número
function countOccurrencesR(array: number[], n: number, index: number = 0, oc: number = 0, positions: number[] = []): [number, number[]] {
    // Caso base: quando o índice atingir o tamanho do array, retorna o resultado
    if (index === array.length) {
        return [oc, positions]; // Retorna o total de ocorrências e as posições
    }

    // Se o número na posição atual for igual ao número procurado, incrementa a contagem e armazena a posição
    if (array[index] === n) {
        oc++; // Incrementa a contagem
        positions.push(index); // Armazena o índice da ocorrência
    }

    // Chama a função recursivamente, avançando para o próximo índice
    return countOccurrencesR(array, n, index + 1, oc, positions);
}

// Testando as funções
console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // [3, [1, 2, 4]]
console.log(countOccurrencesA([1, 2, 2, 3, 2], 2)); // [3, [1, 2, 4]]
console.log(countOccurrencesR([1, 2, 2, 3, 2], 2)); // [3, [1, 2, 4]]
