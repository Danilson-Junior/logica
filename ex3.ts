function pa(s: string): boolean {
    // Percorre a metade da string para comparar os caracteres simétricos.
    for (let i = 0; i < s.length / 2; i++) {
        // Verifica se o caractere da posição i é igual ao caractere da posição simétrica.
        if (s[i] !== s[s.length - 1 - i]) {
            return false; // Se encontrar algum par de caracteres diferentes, retorna false.
        }
    }
    return true; // Se não encontrar nenhum par de caracteres diferentes, retorna true.
}

const pA = (s: string): boolean => {
    // Percorre a metade da string para comparar os caracteres simétricos.
    for (let i = 0; i < s.length / 2; i++) {
        // Verifica se o caractere da posição i é igual ao caractere da posição simétrica.
        if (s[i] !== s[s.length - 1 - i]) {
            return false; // Se encontrar algum par de caracteres diferentes, retorna false.
        }
    }
    return true; // Se não encontrar nenhum par de caracteres diferentes, retorna true.
}

// Testes com diferentes entradas:
console.log(pa("radar")); 
console.log(pa("abcba")); 
console.log(pa("hello")); 
console.log(pa("aba"));   
console.log(pa("abcd"));  

console.log(pA("radar")); 
console.log(pA("abcba")); 
console.log(pA("hello")); 
console.log(pA("aba"));   
console.log(pA("abcd"));  
