// Função que recebe um array de números onde **apenas um número não se repete**,
// e retorna esse número único.

function numeroUnico(array: number[]): number {
    let cont: number = 0;
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            if (array[i] === array[x]) {
                cont++;
            }
        }
        if (cont === 1) {
            return array[i];
        }
        cont = 0;
    }
    console.log("o array foi enviado sem um numero que aparece apenas uma vez");
    return -1;
}

// Exemplos de uso:
console.log(numeroUnico([3, 5, 4, 5, 2, 3, 4])); // Deve imprimir 2
console.log(numeroUnico([1, 1, 2, 2, 10]));      // Deve imprimir 10
