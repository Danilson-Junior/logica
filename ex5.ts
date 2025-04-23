// Função para inverter uma string utilizando uma função tradicional
function invS(s: string): string {
    let si: string = "";  // Inicializa a string 'si' como uma string vazia
    // Laço 'for' que percorre a string 's' de trás para frente
    for (let i = s.length - 1; i >= 0; i--) {
        // Adiciona o caractere atual da string 's' à variável 'si'
        si += s[i]; 
    }
    return si;  // Retorna a string invertida
}

// Função para inverter uma string utilizando a sintaxe de função de seta (arrow function)
const invSA = (s: string): string => {
    let si: string = "";  // Inicializa a string 'si' como uma string vazia
    // Laço 'for' que percorre a string 's' de trás para frente
    for (let i = s.length - 1; i >= 0; i--) {
        // Adiciona o caractere atual da string 's' à variável 'si'
        si += s[i]; 
    }
    return si;  // Retorna a string invertida
}

// Testando ambas as funções com exemplos
console.log(invS("abcdefg"));  // Deve retornar "gfedcba"
console.log(invSA("123456"));  // Deve retornar "654321"
