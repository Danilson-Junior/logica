/**
 * 🧠 Exercício 11 – Verificar se uma palavra é um palíndromo
 * 
 * Descrição:
 * Crie uma função que recebe uma string e retorna `true` se ela for um palíndromo
 * (ou seja, se ela pode ser lida da mesma forma de trás para frente), e `false` caso contrário.
 * 
 * Exemplos:
 * - "radar" -> true
 * - "abcba" -> true
 * - "hello" -> false
 * - "aba"   -> true
 * - "abcd"  -> false
 */

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
console.log(pa("radar"));  // true
console.log(pa("abcba"));  // true
console.log(pa("hello"));  // false
console.log(pa("aba"));    // true
