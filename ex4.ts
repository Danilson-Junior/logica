// Função que calcula o n-ésimo número da sequência de Fibonacci de forma iterativa.
function fib (n: number): number {
    // Variáveis auxiliares para armazenar os números da sequência.
    let aux = 0;  // Auxiliar para armazenar o valor de "b" temporariamente.
    let a = 0;     // Primeiro número da sequência (inicialmente 0).
    let b = 1;     // Segundo número da sequência (inicialmente 1).

    // Laço que itera 'n' vezes para calcular a sequência até o n-ésimo número.
    for(let i = 0; i < n; i++) {
        // Imprime o valor atual de 'a' a cada iteração (valores da sequência de Fibonacci).
        console.log(a);
        
        // Atualiza o valor de 'aux' para o valor de 'b' (preparando para o próximo cálculo).
        aux = b; 
        
        // Calcula o próximo número da sequência: 'b' recebe a soma de 'aux' e 'a'.
        b = aux + a; 
        
        // Atualiza 'a' para ser igual ao valor de 'aux' para a próxima iteração.
        a = aux; 
    }

    // Retorna o n-ésimo número da sequência, ou seja, o valor de 'b' após o loop.
    return b;
}

// Teste da função Fibonacci com n = 12
console.log(fib(12));


// Função equivalente à anterior, mas usando arrow function (função anônima).
const fibA = (n: number): number => {
    // Variáveis auxiliares para armazenar os números da sequência.
    let aux = 0;  // Auxiliar para armazenar o valor de "b" temporariamente.
    let a = 0;     // Primeiro número da sequência (inicialmente 0).
    let b = 1;     // Segundo número da sequência (inicialmente 1).

    // Laço que itera 'n' vezes para calcular a sequência até o n-ésimo número.
    for(let i = 0; i < n; i++) {
        // Atualiza o valor de 'aux' para o valor de 'b' (preparando para o próximo cálculo).
        aux = b;
        
        // Calcula o próximo número da sequência: 'b' recebe a soma de 'aux' e 'a'.
        b = aux + a;
        
        // Atualiza 'a' para ser igual ao valor de 'aux' para a próxima iteração.
        a = aux;
    }

    // Retorna o n-ésimo número da sequência, ou seja, o valor de 'b' após o loop.
    return b;
}

// Teste da função Fibonacci com n = 12 (versão com arrow function).
console.log(fibA(12));
