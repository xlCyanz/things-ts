export function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    const paper = gift
      .split("")
      .map(() => "*")
      .join("");
    return `**${paper}\n*${gift}*\n${paper}**`;
  });
}
