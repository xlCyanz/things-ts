const RomanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInt = (roman: string) => {
  if (roman === null) return -1;
  let num = RomanValues[roman.charAt(0) as keyof typeof RomanValues];

  for (let index = 1; index < roman.length; index++) {
    const current = RomanValues[roman.charAt(index) as keyof typeof RomanValues];
    const previous = RomanValues[roman.charAt(index - 1) as keyof typeof RomanValues];
    current <= previous ? (num += current) : (num = num - previous * 2 + current);
  }

  return num;
};

// Examples
romanToInt("XXVII"); // Returns an integer => 27
romanToInt("IV"); // Returns an integer => 4
