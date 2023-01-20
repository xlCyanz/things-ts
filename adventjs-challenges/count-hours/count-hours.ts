export const countHours = (year: number, holidays: string[]) => {
  return holidays
    .map((holiday): number => {
      const date = new Date(`${holiday}/${year}`);
      return date.getDay() !== 0 && date.getDay() !== 6 ? 2 : 0;
    })
    .reduce((a, b) => a + b);
};
