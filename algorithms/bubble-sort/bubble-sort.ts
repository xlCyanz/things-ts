export const bubbleSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const memory = array[j];
        array[j] = array[j + 1];
        array[j + 1] = memory;
      }
    }
  }
  return array;
};
