import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculateStack = (name: string, num1: number) => {
  const stackAmount = Math.floor(num1 / 64);
  const amount = stackAmount * 64;
  const remaining = num1 - amount;

  return `El item ${name} tiene ${stackAmount} stacks y el restante ${remaining}`;
};

rl.question("Escribe el nombre del Item: ", (itemName) => {
  rl.question("Escribe la cantidad del item: ", (itemAmount) => {
    const value = Number(itemAmount);
    if (value) console.log(calculateStack(itemName, value));
    rl.close();
  });
});
