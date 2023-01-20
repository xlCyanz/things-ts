export const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  const left = [];
  const right = [];
  const pivot = array[0];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element < pivot) left.push(element);
    else right.push(element);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
