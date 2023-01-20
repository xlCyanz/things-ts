export const pyramidWithRecursion = (max: number, min = 1): null => {
  if (min === max) return null;
  if (min > max) return null;
  if (min < 0) return null;

  const stringEmpty = " ".repeat(max - min);
  const stringFilled = "*".repeat(min * 2 - 1);

  console.log(`${stringEmpty} ${stringFilled} ${stringEmpty}`);

  return pyramidWithRecursion(max, min + 1);
};
