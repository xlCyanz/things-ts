const toWeirdCase = (text: string) => {
  return text
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          if (index % 2 === 0) {
            return letter.toUpperCase();
          }
          return letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
};

// Examples
toWeirdCase("Hello World"); // Returns the text with weird case => HeLlO WoRlD
toWeirdCase("xlCyanz"); // Returns the text with weird case => XlCyAnZ
toWeirdCase("Codewars"); // Returns the text with weird case => CoDeWaRs
