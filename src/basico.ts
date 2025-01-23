// number string array tuple


/*
Não esqueçam, que para compilar um arquivo .ts, podemos usar o comando tsc no terminal para compilar todos.

Também podemos usar o comando tsc <ARQUIVO> para compilar um arquivo em específico

OBS: Você vai precisar usar npx tsc se instalar o typescript localmente

*/

let numero: number = 9.5;
let nome = "Evaristo";

const colecao: Array<number> = [1, 2, 4];

const colecao2: number[] = [4, 2, 1];

let podeSer: number | string;

podeSer = "Bom Dia";

podeSer = 4;

function soma(num1: number, num2: number): number {
  return num1 + num2;
}
