export const distributeGifts = (packOfGifts: string[], reindeers: string[]) => {
  const weightPack = packOfGifts.join("").length;
  const reindeersWeight = 2 * reindeers.join("").length;
  return parseInt(`${reindeersWeight / weightPack}`);
};
