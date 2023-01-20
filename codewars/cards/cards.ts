export const checkCards = (lengthCards: number, cards: string) => {
  return Array.from({ length: lengthCards }).reduce((acc, _, index) => {
    if (!cards.includes(`${index}`)) return index;
    return acc;
  }, 0);
};

// Examples
checkCards(7, "4 5 2 1 7 6"); // Return the missing number => 3
checkCards(9, "123467890"); // Return the missing number => 5
