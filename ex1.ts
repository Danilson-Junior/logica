// Enunciado:
// Crie uma função que, dado um número, determine se ele é par (even) ou ímpar (odd).
// A função deve imprimir no console se o número é par ou ímpar.

function evenOrOdd(n: number): void {
    // O operador % calcula o resto da divisão de n por 2.
    // Se o resto for 0, o número é par; caso contrário, é ímpar.
    if (n % 2 !== 0) {
      console.log(n + " is an odd number");  // Se o resto for diferente de 0, o número é ímpar.
    } else {
      console.log(n + " is an even number");  // Se o resto for 0, o número é par.
    }
  }
  
  // Versão com arrow function, fazendo a mesma coisa.
  const evenOrOddA = (n: number): void => {
    // O mesmo processo com a arrow function: verifica se o número é ímpar ou par.
    if (n % 2 !== 0) {
      console.log(n + " is an odd number");  // Número ímpar.
    } else {
      console.log(n + " is an even number");  // Número par.
    }
  }
  
  // Testando com números negativos.
  evenOrOdd(-2);    // -2 é par.
  evenOrOdd(-1);    // -1 é ímpar.
  evenOrOdd(-5);    // -5 é ímpar.
  evenOrOdd(-300);  // -300 é par.
  
  evenOrOddA(-2);    // -2 é par.
  evenOrOddA(-1);    // -1 é ímpar.
  evenOrOddA(-5);    // -5 é ímpar.
  evenOrOddA(-300);  // -300 é par.
  