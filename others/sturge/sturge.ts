const array = [1, 2, 3, 4, 5];

const frequencies = array.reduce((acc, num1) => {
  return {
    ...acc,
    [num1]: acc?.[num1] ? acc[num1] + 1 : 1,
  };
}, {} as Record<number, number>);

const range = (num1: number, num2: number) => {
  return Array.from({ length: num2 - 1 }, (_, i) => i + 1)
    .filter((n) => n >= num1)
    .reduce((acc, num) => {
      if (frequencies?.[num]) return acc + frequencies?.[num];
      else return acc;
    }, 0);
};

const consoles = (num1: number, num2: number, times: number) => {
  for (let index = num1; index < num2; index += times) {
    console.log(`${index}-${times + index}`, range(index, times + index));
  }
};

const min = Math.min(...array);
const max = Math.max(...array);

consoles(min, max, 9);

console.log("Máximo", max);
console.log("Mínimo", min);
console.log("Rango", max - min);
console.log("Tamaño", array.length);
