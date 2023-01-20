/**
 * It averages all the items depending on the key you passed it.
 *
 * @template T
 * @param {T[]} items - The array to average.
 * @param {keyof T} key - The property of the object elements to use as the key
 * @returns {number} Returns the average
 *
 * @example
 *
 * const items = [
 *  { name: "Item 1", rating: 1 },
 *  { name: "Item 2", rating: 4 },
 *  { name: "Item 3", rating: 5 },
 * ];
 *
 * const avg = averageObject(items, "name");
 * console.log(avg) // Output: 3.333...
 *
 */
export const averageObject = <T>(items: T[], key: keyof T): number => {
  if (!items.length) return 0;
  return items.reduce((a, b) => a + Number(typeof b[key] === "number" ? b[key] : 0), 0) / items.length;
};
