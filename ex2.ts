// Função tradicional para calcular o fatorial de um número
function fac(n: number): number {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
      }

    // Começamos com o valor 1 porque o fatorial de 0 é 1, e 1 é o elemento neutro da multiplicação
    let result = 1;
  
    // Laço que multiplica result por cada número de n até 1
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
  
    // Retorna o resultado final do fatorial
    return result;
  }
  
  // Versão da mesma função, mas usando arrow function
  const facA = (n: number): number => {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
      }

    let result = 1;
  
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
  
    return result;
  }
  
  // Testes das duas funções
  console.log(fac(5));  // 120
  console.log(fac(3));  // 6
  
  console.log(facA(5)); // 120
  console.log(facA(3)); // 6
  

  function fatorial(n: number): number {
    // Caso base: fatorial de 0 ou 1 é igual a 1
    if (n === 0 || n === 1) return 1;

    // Chamada recursiva: a função se chama de novo com n - 1
    return n * fatorial(n - 1);
}
